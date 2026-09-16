"use client";

import { useState } from "react";
import { processDecisionAction } from "@/modules/decision/actions/decision.actions";
import { toast } from "sonner";

interface Props {
  recommendationId: string;
  type: "OPPORTUNITY" | "ANOMALY";
  title: string;
  customerName?: string;
  orderCount?: number;
  confidence: number;
  message?: string;
  whatsappUrl?: string;
}

export function RecommendationCard({ recommendationId, type, title, customerName, orderCount, confidence, message, whatsappUrl }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAction = async (action: "IGNORED" | "SCHEDULED" | "SENT_NOW") => {
    setIsProcessing(true);
    const toastId = toast.loading("Enregistrement de la décision...");
    
    try {
      const res = await processDecisionAction(recommendationId, action, {
        campaignName: title,
        content: message,
        scheduledAt: action === "SCHEDULED" ? new Date(Date.now() + 24 * 3600 * 1000) : undefined // Demain par défaut
      });

      if (res.success) {
        toast.success(`Action enregistrée avec succès (${action})`, { id: toastId });
        setIsVisible(false);
      } else {
        toast.error("Erreur lors de l'enregistrement", { id: toastId });
      }
    } catch (e) {
      toast.error("Une erreur est survenue", { id: toastId });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`bg-[#14120f] border-l-4 border-y border-r border-[#d4af37]/20 rounded-r-xl p-6 shadow-md relative overflow-hidden mb-6 ${type === "OPPORTUNITY" ? "border-l-[#3498db]" : "border-l-[#e74c3c]"}`}>
      <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-xs font-bold border-b border-l ${type === "OPPORTUNITY" ? "bg-[#3498db]/10 text-[#3498db] border-[#3498db]/20" : "bg-[#e74c3c]/10 text-[#e74c3c] border-[#e74c3c]/20"}`}>
        {type === "OPPORTUNITY" ? "OPPORTUNITÉ" : "ANOMALIE"}
      </div>
      
      <h3 className="text-lg font-semibold text-[#e8e1d3] mb-3">{title}</h3>
      
      {type === "OPPORTUNITY" && customerName && (
        <>
          <div className="text-sm text-[#e8e1d3] mb-4 bg-[#0a0a0a] p-4 rounded-lg border border-[#d4af37]/10">
            <p className="mb-2"><span className="text-[#d4af37] font-bold">{customerName}</span> possède {orderCount} commande{(orderCount || 0) > 1 ? "s" : ""} enregistrée{(orderCount || 0) > 1 ? "s" : ""}.</p>
            <p className="mb-2">Le système propose une relance selon ses habitudes d'achat historiques.</p>
          </div>
          
          <div className="mb-5">
            <span className="block text-xs text-[#a89b82] uppercase mb-1">Action suggérée :</span>
            <p className="text-[#3498db] font-medium">Créer une offre personnalisée sur la catégorie préférée de {customerName}.</p>
          </div>

          <div className="flex gap-4 mb-5">
            <div className="flex-1 bg-[#1c1813] p-3 rounded-lg border border-[#d4af37]/5">
              <div className="text-xs text-[#a89b82] mb-1">Impact potentiel</div>
              <div className="font-bold text-[#2ecc71] mb-1">Élevé</div>
              <div className="w-full bg-[#0a0a0a] h-1.5 rounded-full overflow-hidden"><div className="bg-[#2ecc71] h-full" style={{ width: `${confidence}%` }}></div></div>
            </div>
            <div className="flex-1 bg-[#1c1813] p-3 rounded-lg border border-[#d4af37]/5">
              <div className="text-xs text-[#a89b82] mb-1">Confiance</div>
              <div className="font-bold text-[#3498db] mb-1">{confidence}%</div>
              <div className="w-full bg-[#0a0a0a] h-1.5 rounded-full overflow-hidden"><div className="bg-[#3498db] h-full" style={{ width: `${confidence}%` }}></div></div>
            </div>
            <div className="flex-1 bg-[#1c1813] p-3 rounded-lg border border-[#d4af37]/5">
              <div className="text-xs text-[#a89b82] mb-1">Canal suggéré</div>
              <div className="font-bold text-[#d4af37]">WhatsApp</div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-[#d4af37]/20 p-4 rounded-lg mb-5">
            <div className="text-xs text-[#a89b82] uppercase mb-2">Message proposé :</div>
            <p className="text-sm text-[#e8e1d3] italic">&quot;{message}&quot;</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-end">
            <button disabled={isProcessing} onClick={() => handleAction("IGNORED")} className="px-3 py-1.5 text-xs text-[#a89b82] hover:text-white border border-[#d4af37]/30 rounded bg-[#1c1813] disabled:opacity-50">Ignorer</button>
            <button disabled={isProcessing} onClick={() => handleAction("SCHEDULED")} className="px-3 py-1.5 text-xs text-[#0a0a0a] font-bold bg-[#d4af37]/80 hover:bg-[#c59b32] rounded disabled:opacity-50">Planifier</button>
            <button disabled={isProcessing} onClick={() => handleAction("SENT_NOW")} className="px-3 py-1.5 text-xs font-bold text-[#0a0a0a] bg-[#d4af37] hover:bg-[#c59b32] rounded shadow-[0_0_10px_rgba(212,175,55,0.2)] disabled:opacity-50">Envoyer Maintenant (WhatsApp)</button>
          </div>
        </>
      )}
    </div>
  );
}

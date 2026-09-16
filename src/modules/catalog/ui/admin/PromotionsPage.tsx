"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getPromotions, savePromotionAction, deletePromotionAction } from "@/modules/content/actions/promotion.actions";

type Promotion = Awaited<ReturnType<typeof getPromotions>>[number];

function computeStatus(promo: Promotion) {
  if (!promo.isActive) return { label: "Désactivé", color: "border-[#95a5a6]/30 bg-[#95a5a6]/15 text-[#95a5a6]" };
  const now = new Date();
  if (promo.endDate && new Date(promo.endDate) < now) return { label: "Expiré", color: "border-[#e74c3c]/30 bg-[#e74c3c]/15 text-[#e74c3c]" };
  if (promo.usageLimit && promo.usageCount >= promo.usageLimit) return { label: "Épuisé", color: "border-[#e74c3c]/30 bg-[#e74c3c]/15 text-[#e74c3c]" };
  if (new Date(promo.startDate) > now) return { label: "Programmé", color: "border-[#3498db]/30 bg-[#3498db]/15 text-[#3498db]" };
  return { label: "Actif", color: "border-[#2ecc71]/30 bg-[#2ecc71]/15 text-[#2ecc71]" };
}

function formatValue(type: string, value: number | null) {
  if (type === "PERCENTAGE") return `-${value}%`;
  if (type === "FIXED_AMOUNT") return `-${value?.toLocaleString("fr-FR")} FCFA`;
  return "Livraison";
}

function typeLabel(type: string) {
  if (type === "PERCENTAGE") return "Pourcentage";
  if (type === "FIXED_AMOUNT") return "Montant fixe";
  return "Frais de port";
}

function PromotionModal({ promo, onClose, onSaved }: { promo?: Promotion; onClose: () => void; onSaved: () => void }) {
  const [isSaving, setIsSaving] = useState(false);
  const [type, setType] = useState(promo?.type || "PERCENTAGE");
  const [hasEndDate, setHasEndDate] = useState(!!promo?.endDate);
  const [hasLimit, setHasLimit] = useState(!!promo?.usageLimit);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    const formData = new FormData(event.currentTarget);
    if (!hasEndDate) formData.delete("endDate");
    if (!hasLimit) formData.delete("usageLimit");
    const result = await savePromotionAction(formData);
    setIsSaving(false);
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(promo ? "Code promo modifié." : "Code promo créé.");
    onSaved();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog">
      <form onSubmit={handleSubmit} className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#d4af37]/30 bg-[#14120f] p-6 shadow-2xl">
        <div className="mb-6 flex justify-between">
          <div>
            <h2 className="font-serif text-2xl text-[#d4af37]">{promo ? "Modifier le code" : "Créer un code promo"}</h2>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-[#a89b82] hover:text-white" aria-label="Fermer">×</button>
        </div>
        <input type="hidden" name="id" value={promo?.id || ""} />
        <input type="hidden" name="isActive" value="true" /> {/* Toujours actif à la création */}
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Nom de la promotion *</label>
              <input required name="name" defaultValue={promo?.name || ""} placeholder="Ex. Soldes d'été" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
            </div>
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Code Promo *</label>
              <input required name="code" defaultValue={promo?.code || ""} placeholder="Ex. SUMMER24" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] uppercase outline-none focus:border-[#d4af37]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Type de réduction</label>
              <select name="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]">
                <option value="PERCENTAGE">Pourcentage (%)</option>
                <option value="FIXED_AMOUNT">Montant fixe (FCFA)</option>
                <option value="FREE_SHIPPING">Livraison gratuite</option>
              </select>
            </div>
            {type !== "FREE_SHIPPING" && (
              <div>
                <label className="mb-2 block text-xs text-[#a89b82]">Valeur de la réduction *</label>
                <input required type="number" min="1" step={type === "PERCENTAGE" ? "1" : "100"} name="value" defaultValue={promo?.value || ""} placeholder={type === "PERCENTAGE" ? "Ex. 20" : "Ex. 5000"} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Date de début *</label>
              <input required type="datetime-local" name="startDate" defaultValue={promo?.startDate ? new Date(promo.startDate).toISOString().slice(0,16) : new Date().toISOString().slice(0,16)} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-xs text-[#a89b82]">Date de fin</label>
                <input type="checkbox" checked={hasEndDate} onChange={(e) => setHasEndDate(e.target.checked)} className="h-3 w-3 accent-[#d4af37]" />
              </div>
              {hasEndDate && <input required type="datetime-local" name="endDate" defaultValue={promo?.endDate ? new Date(promo.endDate).toISOString().slice(0,16) : ""} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Montant minimum d'achat (Optionnel)</label>
              <input type="number" min="0" step="100" name="minimumSpend" defaultValue={promo?.minimumSpend || ""} placeholder="Ex. 20000" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-xs text-[#a89b82]">Limite d'utilisations</label>
                <input type="checkbox" checked={hasLimit} onChange={(e) => setHasLimit(e.target.checked)} className="h-3 w-3 accent-[#d4af37]" />
              </div>
              {hasLimit && <input required type="number" min="1" name="usageLimit" defaultValue={promo?.usageLimit || ""} placeholder="Ex. 100" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-lg border border-[#d4af37]/30 px-4 py-2 text-sm text-[#a89b82] hover:text-white">Annuler</button>
          <button type="submit" disabled={isSaving} className="rounded-lg bg-[#d4af37] px-5 py-2 text-sm font-semibold text-[#0a0a0a] disabled:opacity-50">{isSaving ? "Enregistrement..." : "Enregistrer"}</button>
        </div>
      </form>
    </div>
  );
}

export default function PromotionsManagement() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [editing, setEditing] = useState<Promotion>();
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const data = await getPromotions();
    setPromotions(data as Promotion[]);
    setIsLoading(false);
  };

  useEffect(() => { void loadData(); }, []);

  async function handleDelete(promo: Promotion) {
    if (!window.confirm(`Supprimer le code promo ${promo.code} ?`)) return;
    const result = await deletePromotionAction(promo.id);
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success("Code promo supprimé.");
    await loadData();
  }

  return (
    <AdminPageShell>
      <AdminPageHeader title="Promotions & Réductions" description="Gérez vos codes promo et réductions automatiques" action={<button type="button" onClick={() => setIsAdding(true)} className="flex items-center gap-2 rounded-md bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0a0a0a] hover:bg-[#c59b32]"><span className="text-lg">+</span>Créer un code promo</button>} />
      
      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr>
                <th className="px-5 py-4">Nom & Code</th>
                <th className="px-5 py-4">Réduction</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Utilisations</th>
                <th className="px-5 py-4">Fin</th>
                <th className="px-5 py-4">Statut</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {isLoading ? <tr><td colSpan={7} className="p-10 text-center text-sm text-[#a89b82]">Chargement...</td></tr> : promotions.length === 0 ? <tr><td colSpan={7} className="p-10 text-center text-sm text-[#a89b82]">Aucun code promo.</td></tr> : promotions.map((promo) => {
                const status = computeStatus(promo);
                return (
                  <tr key={promo.id} className="group transition-colors hover:bg-[#d4af37]/5">
                    <td className="px-5 py-4">
                      <div className="font-serif text-sm font-semibold text-[#e8e1d3]">{promo.name}</div>
                      <div className="mt-1 inline-block rounded border border-[#d4af37]/30 bg-[#d4af37]/10 px-2 py-0.5 text-xs tracking-wider text-[#d4af37]">{promo.code}</div>
                    </td>
                    <td className="px-5 py-4 font-bold text-[#e8e1d3]">{formatValue(promo.type, promo.value)}</td>
                    <td className="px-5 py-4 text-sm text-[#a89b82]">{typeLabel(promo.type)}</td>
                    <td className="px-5 py-4 text-sm text-[#e8e1d3]">{promo.usageCount} / {promo.usageLimit || "∞"}</td>
                    <td className="px-5 py-4 text-sm text-[#a89b82]">{promo.endDate ? new Date(promo.endDate).toLocaleDateString("fr-FR") : "Aucune"}</td>
                    <td className="px-5 py-4"><span className={`rounded-full border px-2.5 py-1 text-[10px] ${status.color}`}>{status.label}</span></td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setEditing(promo)} className="text-[#a89b82] hover:text-[#d4af37]">✏️</button>
                        <button type="button" onClick={() => void handleDelete(promo)} className="text-red-900/50 hover:text-red-400">🗑️</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {(isAdding || editing) && <PromotionModal promo={editing} onClose={() => { setIsAdding(false); setEditing(undefined); }} onSaved={() => void loadData()} />}
    </AdminPageShell>
  );
}

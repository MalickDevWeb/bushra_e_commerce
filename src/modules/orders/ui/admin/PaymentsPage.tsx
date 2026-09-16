"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getPayments, updatePaymentStatus } from "@/modules/content/actions/payment.actions";

type PaymentDetails = Awaited<ReturnType<typeof getPayments>>[number];

function PaymentStatusBadge({ status }: { status: string }) {
  if (status === "PAID" || status === "Réussi") return <span className="text-[#2ecc71] bg-[#2ecc71]/10 border border-[#2ecc71]/30 px-2.5 py-1 rounded-full text-[10px]">Réussi</span>;
  if (status === "PENDING" || status === "En attente") return <span className="text-[#f39c12] bg-[#f39c12]/10 border border-[#f39c12]/30 px-2.5 py-1 rounded-full text-[10px]">En attente</span>;
  if (status === "FAILED" || status === "Échoué") return <span className="text-[#e74c3c] bg-[#e74c3c]/10 border border-[#e74c3c]/30 px-2.5 py-1 rounded-full text-[10px]">Échoué</span>;
  if (status === "REFUNDED") return <span className="text-gray-400 bg-gray-400/10 border border-gray-400/30 px-2.5 py-1 rounded-full text-[10px]">Remboursé</span>;
  return <span className="text-gray-400 bg-gray-400/10 border border-gray-400/30 px-2.5 py-1 rounded-full text-[10px]">{status}</span>;
}

function getProviderName(provider: string) {
  if (provider === "WAVE" || provider === "Wave") return "Wave";
  if (provider === "ORANGE_MONEY") return "Orange Money";
  if (provider === "CASH_ON_DELIVERY") return "Paiement à la livraison";
  if (provider === "CREDIT_CARD") return "Carte Bancaire";
  return provider;
}

function PaymentDetailsModal({ payment, onClose, onUpdate }: { payment: PaymentDetails; onClose: () => void; onUpdate: () => void }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [status, setStatus] = useState(payment.status);
  const [txId, setTxId] = useState(payment.transactionId);

  async function handleSave() {
    setIsUpdating(true);
    const res = await updatePaymentStatus(payment.id, status, txId);
    setIsUpdating(false);
    if (!res.success) {
      toast.error(res.error);
    } else {
      toast.success("Paiement mis à jour avec succès.");
      onUpdate();
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog">
      <div className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-[#d4af37]/30 bg-[#14120f] shadow-2xl">
        <div className="p-6 border-b border-[#d4af37]/10 flex items-start justify-between shrink-0">
          <div>
            <h2 className="font-serif text-2xl text-[#d4af37]">Détails du Paiement</h2>
            <p className="mt-1 text-sm text-[#a89b82]">Transaction: {payment.transactionId}</p>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-[#a89b82] hover:text-white" aria-label="Fermer">×</button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-[#e8e1d3] font-semibold border-b border-[#d4af37]/10 pb-2">Informations Transaction</h3>
              <div className="text-sm"><span className="text-[#a89b82]">Montant : </span><span className="text-[#d4af37] font-bold">{payment.amount.toLocaleString("fr-FR")} FCFA</span></div>
              <div className="text-sm"><span className="text-[#a89b82]">Méthode : </span><span className="text-[#e8e1d3]">{getProviderName(payment.provider)}</span></div>
              <div className="text-sm"><span className="text-[#a89b82]">Date tentative : </span><span className="text-[#e8e1d3]">{new Date(payment.date).toLocaleString("fr-FR")}</span></div>
              <div className="text-sm flex items-center gap-2"><span className="text-[#a89b82]">Statut actuel : </span><PaymentStatusBadge status={payment.status} /></div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#e8e1d3] font-semibold border-b border-[#d4af37]/10 pb-2">Informations Client & Commande</h3>
              <div className="text-sm"><span className="text-[#a89b82]">Commande : </span><span className="text-[#d4af37] font-bold">{payment.order.orderNumber}</span></div>
              <div className="text-sm"><span className="text-[#a89b82]">Client : </span><span className="text-[#e8e1d3]">{payment.order.customerName}</span></div>
              <div className="text-sm"><span className="text-[#a89b82]">Téléphone : </span><span className="text-[#e8e1d3]">{payment.order.customerPhone}</span></div>
              <div className="text-sm"><span className="text-[#a89b82]">Date commande : </span><span className="text-[#e8e1d3]">{new Date(payment.order.date).toLocaleString("fr-FR")}</span></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#e8e1d3] font-semibold border-b border-[#d4af37]/10 pb-2">Articles de la commande</h3>
            <div className="bg-[#0a0a0a] rounded-lg p-3 space-y-2 border border-[#d4af37]/10">
              {payment.order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-[#e8e1d3]">{item.quantity}x {item.name} <span className="text-[10px] text-[#a89b82]">({item.sku})</span></span>
                  <span className="text-[#a89b82]">{item.price.toLocaleString("fr-FR")} FCFA</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-[#1c1813] p-4 rounded-xl border border-[#d4af37]/20">
            <h3 className="text-[#d4af37] font-semibold">Résolution & Ajustement manuel</h3>
            <p className="text-xs text-[#a89b82] mb-4">Si vous avez reçu le paiement manuellement, vous pouvez forcer le statut ici.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#a89b82] mb-1">Statut du paiement</label>
                <select value={status} onChange={e => setStatus(e.target.value)} className="w-full rounded bg-[#0a0a0a] border border-[#d4af37]/30 px-3 py-2 text-sm text-[#e8e1d3] focus:border-[#d4af37] outline-none">
                  <option value="PENDING">En attente</option>
                  <option value="PAID">Réussi</option>
                  <option value="FAILED">Échoué</option>
                  <option value="REFUNDED">Remboursé</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#a89b82] mb-1">ID Transaction (Optionnel)</label>
                <input type="text" value={txId} onChange={e => setTxId(e.target.value)} placeholder="Ex: CI-2938492" className="w-full rounded bg-[#0a0a0a] border border-[#d4af37]/30 px-3 py-2 text-sm text-[#e8e1d3] focus:border-[#d4af37] outline-none" />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                type="button" 
                onClick={handleSave}
                disabled={isUpdating}
                className="rounded bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0a0a0a] disabled:opacity-50 hover:bg-[#c59b32]"
              >
                {isUpdating ? "Enregistrement..." : "Appliquer les modifications"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default function PaymentsManagement() {
  const [payments, setPayments] = useState<PaymentDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState<PaymentDetails | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    const data = await getPayments();
    setPayments(data);
    setIsLoading(false);
  };

  useEffect(() => { void loadData(); }, []);

  return (
    <AdminPageShell>
      <AdminPageHeader 
        title="Suivi des Paiements" 
        description="Gérez les transactions financières de vos commandes" 
      />
      
      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr>
                <th className="px-5 py-4">Transaction</th>
                <th className="px-5 py-4">Commande</th>
                <th className="px-5 py-4">Méthode</th>
                <th className="px-5 py-4">Montant</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {isLoading ? <tr><td colSpan={6} className="p-10 text-center text-sm text-[#a89b82]">Chargement...</td></tr> : payments.length === 0 ? <tr><td colSpan={6} className="p-10 text-center text-sm text-[#a89b82]">Aucune transaction.</td></tr> : payments.map((payment) => (
                <tr key={payment.id} onClick={() => setSelectedPayment(payment)} className="group transition-colors hover:bg-[#d4af37]/5 cursor-pointer">
                  <td className="px-5 py-4 text-sm text-[#a89b82] group-hover:text-[#d4af37] transition-colors">{payment.transactionId}</td>
                  <td className="px-5 py-4 font-bold text-[#d4af37] text-[13px]">{payment.order.orderNumber}</td>
                  <td className="px-5 py-4 text-[13px] text-[#e8e1d3]">{getProviderName(payment.provider)}</td>
                  <td className="px-5 py-4 text-[13px] font-medium text-[#e8e1d3]">{payment.amount.toLocaleString("fr-FR")} FCFA</td>
                  <td className="px-5 py-4 text-[13px] text-[#a89b82]">{new Date(payment.date).toLocaleString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                  <td className="px-5 py-4">
                    <PaymentStatusBadge status={payment.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPayment && <PaymentDetailsModal payment={selectedPayment} onClose={() => setSelectedPayment(null)} onUpdate={() => void loadData()} />}
    </AdminPageShell>
  );
}

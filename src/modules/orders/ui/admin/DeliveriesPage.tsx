"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { getDeliveries, updateDelivery } from "@/modules/orders/actions/delivery.actions";

type Delivery = Awaited<ReturnType<typeof getDeliveries>>[number];
const labels: Record<string, string> = { PENDING: "En attente", PREPARING: "En préparation", SHIPPED: "Expédié", DELIVERED: "Livré", CANCELLED: "Annulé" };
const colors: Record<string, string> = { PENDING: "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30", PREPARING: "bg-[#9b59b6]/15 text-[#9b59b6] border-[#9b59b6]/30", SHIPPED: "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30", DELIVERED: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30", CANCELLED: "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30" };

export default function DeliveriesManagement() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadDeliveries() {
    setIsLoading(true);
    setDeliveries(await getDeliveries());
    setIsLoading(false);
  }

  useEffect(() => { void loadDeliveries(); }, []);

  async function saveDelivery(delivery: Delivery, form: HTMLFormElement) {
    const data = new FormData(form);
    const result = await updateDelivery(delivery.id, {
      status: data.get("status")?.toString() || delivery.status,
      carrier: data.get("carrier")?.toString(),
      trackingNumber: data.get("trackingNumber")?.toString(),
    });
    if (!result.success) toast.error(result.error);
    else { toast.success("Livraison mise à jour."); await loadDeliveries(); }
  }

  return (
    <AdminPageShell>
      <AdminPageHeader title="Livraisons" description="Gérez les expéditions et suivez les livreurs" />
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2"><div className="overflow-x-auto"><table className="w-full min-w-[1000px] text-left border-collapse"><thead><tr className="border-b border-[#d4af37]/20 bg-[#1c1813]"><th className="py-4 px-5 text-[11px] uppercase tracking-wider text-[#a89b82]">Commande</th><th className="py-4 px-5 text-[11px] uppercase tracking-wider text-[#a89b82]">Client / Adresse</th><th className="py-4 px-5 text-[11px] uppercase tracking-wider text-[#a89b82]">Transporteur</th><th className="py-4 px-5 text-[11px] uppercase tracking-wider text-[#a89b82]">Suivi</th><th className="py-4 px-5 text-[11px] uppercase tracking-wider text-[#a89b82]">Statut</th><th className="py-4 px-5 text-[11px] uppercase tracking-wider text-[#a89b82]">Action</th></tr></thead><tbody className="divide-y divide-[#d4af37]/10">
        {isLoading ? <tr><td colSpan={6} className="p-10 text-center text-[#a89b82]">Chargement...</td></tr> : deliveries.length === 0 ? <tr><td colSpan={6} className="p-10 text-center text-[#a89b82]">Aucune livraison.</td></tr> : deliveries.map((delivery) => <tr key={delivery.id} className="hover:bg-[#d4af37]/5"><td className="px-5 py-4 font-bold text-[#d4af37]">{delivery.order.orderNumber}</td><td className="px-5 py-4 text-sm"><div className="text-[#e8e1d3]">{delivery.order.customerName}</div><div className="text-[#a89b82]">{delivery.order.address}</div></td><td colSpan={4}><form onSubmit={(event) => { event.preventDefault(); void saveDelivery(delivery, event.currentTarget); }} className="flex items-center gap-3 px-5 py-3"><input name="carrier" defaultValue={delivery.carrier || ""} placeholder="Transporteur" className="w-32 rounded border border-[#d4af37]/30 bg-[#0a0a0a] px-2 py-1 text-xs text-[#e8e1d3]" /><input name="trackingNumber" defaultValue={delivery.trackingNumber || ""} placeholder="N° suivi" className="w-32 rounded border border-[#d4af37]/30 bg-[#0a0a0a] px-2 py-1 text-xs text-[#e8e1d3]" /><select name="status" defaultValue={delivery.status} className={`rounded-full border px-2 py-1 text-[10px] ${colors[delivery.status] || colors.PENDING}`}><option value="PENDING">En attente</option><option value="PREPARING">En préparation</option><option value="SHIPPED">Expédié</option><option value="DELIVERED">Livré</option><option value="CANCELLED">Annulé</option></select><button type="submit" className="rounded bg-[#d4af37] px-3 py-1.5 text-xs font-semibold text-[#0a0a0a]">Enregistrer</button></form></td></tr>)}
      </tbody></table></div></div>
    </AdminPageShell>
  );
}

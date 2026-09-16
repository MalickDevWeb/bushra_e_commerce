"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { getOrders, updateOrderStatus } from "@/modules/orders/actions/order.actions";

type Order = Awaited<ReturnType<typeof getOrders>>[number];

const statusLabels: Record<string, string> = { PENDING: "En attente", PAID: "Payé", SHIPPED: "Expédié", DELIVERED: "Livré", CANCELLED: "Annulé" };
const statusColors: Record<string, string> = { PENDING: "border-[#f39c12]/30 bg-[#f39c12]/10 text-[#f39c12]", PAID: "border-[#2ecc71]/30 bg-[#2ecc71]/10 text-[#2ecc71]", SHIPPED: "border-[#3498db]/30 bg-[#3498db]/10 text-[#3498db]", DELIVERED: "border-[#2ecc71]/30 bg-[#2ecc71]/10 text-[#2ecc71]", CANCELLED: "border-[#e74c3c]/30 bg-[#e74c3c]/10 text-[#e74c3c]" };

function downloadCsv(orders: Order[]) {
  const rows = [["Commande", "Date", "Client", "Total", "Paiement", "Livraison"], ...orders.map((order) => [order.orderNumber, new Date(order.createdAt).toISOString(), order.customerName, String(order.totalAmount), order.paymentStatus, order.delivery?.status || "PENDING"])]
    .map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([rows], { type: "text/csv;charset=utf-8" }));
  link.download = "commandes-bushra.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

export default function OrdersListPageMain() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [query, setQuery] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [deliveryFilter, setDeliveryFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function loadOrders() {
    setIsLoading(true);
    setOrders(await getOrders());
    setIsLoading(false);
  }

  useEffect(() => { void loadOrders(); }, []);

  const filteredOrders = useMemo(() => orders.filter((order) => {
    const deliveryStatus = order.delivery?.status || "PENDING";
    const matchesQuery = `${order.orderNumber} ${order.customerName} ${order.customerPhone}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (!paymentFilter || order.paymentStatus === paymentFilter) && (!deliveryFilter || deliveryStatus === deliveryFilter);
  }), [orders, query, paymentFilter, deliveryFilter]);

  async function changeStatus(orderId: string, status: string) {
    const result = await updateOrderStatus(orderId, status);
    if (!result.success) toast.error(result.error);
    else { toast.success("Statut de commande mis à jour."); await loadOrders(); }
  }

  return (
    <AdminPageShell>
      <AdminPageHeader title="Toutes les commandes" description="Gérez le suivi et l'expédition de vos commandes" action={<button type="button" onClick={() => downloadCsv(filteredOrders)} className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">Exporter en CSV</button>} />
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input value={query} onChange={(event) => setQuery(event.target.value)} type="text" placeholder="Rechercher une commande (ID, client)..." className="w-full md:w-96 bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:outline-none focus:border-[#d4af37]" />
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select value={paymentFilter} onChange={(event) => setPaymentFilter(event.target.value)} className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2.5"><option value="">Paiement</option><option value="PENDING">En attente</option><option value="PAID">Payé</option><option value="FAILED">Échoué</option></select>
          <select value={deliveryFilter} onChange={(event) => setDeliveryFilter(event.target.value)} className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2.5"><option value="">Livraison</option><option value="PENDING">En attente</option><option value="PREPARING">En préparation</option><option value="SHIPPED">Expédié</option><option value="DELIVERED">Livré</option><option value="CANCELLED">Annulé</option></select>
        </div>
      </div>
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2"><div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left border-collapse"><thead><tr className="border-b border-[#d4af37]/20 bg-[#1c1813]"><th className="py-4 px-5 text-[11px] uppercase text-[#a89b82]">Commande</th><th className="py-4 px-5 text-[11px] uppercase text-[#a89b82]">Date</th><th className="py-4 px-5 text-[11px] uppercase text-[#a89b82]">Client</th><th className="py-4 px-5 text-[11px] uppercase text-[#a89b82]">Total</th><th className="py-4 px-5 text-[11px] uppercase text-[#a89b82]">Paiement</th><th className="py-4 px-5 text-[11px] uppercase text-[#a89b82]">Livraison</th><th className="py-4 px-5 text-[11px] uppercase text-[#a89b82]">Action</th></tr></thead><tbody className="divide-y divide-[#d4af37]/10">
        {isLoading ? <tr><td colSpan={7} className="p-10 text-center text-[#a89b82]">Chargement...</td></tr> : filteredOrders.length === 0 ? <tr><td colSpan={7} className="p-10 text-center text-[#a89b82]">Aucune commande.</td></tr> : filteredOrders.map((order) => { const deliveryStatus = order.delivery?.status || "PENDING"; return <tr key={order.id} className="hover:bg-[#d4af37]/5"><td className="px-5 py-4 font-bold text-[#d4af37]">{order.orderNumber}</td><td className="px-5 py-4 text-sm text-[#a89b82]">{new Date(order.createdAt).toLocaleString("fr-FR")}</td><td className="px-5 py-4 text-sm text-[#e8e1d3]"><div>{order.customerName}</div><div className="text-xs text-[#a89b82]">{order.customerPhone}</div></td><td className="px-5 py-4 text-sm text-[#e8e1d3]">{order.totalAmount.toLocaleString("fr-FR")} FCFA</td><td className="px-5 py-4"><span className={`rounded-full border px-2.5 py-1 text-[10px] ${statusColors[order.paymentStatus] || statusColors.PENDING}`}>{statusLabels[order.paymentStatus] || order.paymentStatus}</span></td><td className="px-5 py-4"><span className={`rounded-full border px-2.5 py-1 text-[10px] ${statusColors[deliveryStatus] || statusColors.PENDING}`}>{statusLabels[deliveryStatus] || deliveryStatus}</span></td><td className="px-5 py-4"><select value={order.status} onChange={(event) => void changeStatus(order.id, event.target.value)} className="rounded border border-[#d4af37]/30 bg-[#0a0a0a] px-2 py-1 text-xs text-[#e8e1d3]"><option value="PENDING">En attente</option><option value="PAID">Payé</option><option value="SHIPPED">Expédié</option><option value="DELIVERED">Livré</option><option value="CANCELLED">Annulé</option></select></td></tr>; })}
      </tbody></table></div></div>
    </AdminPageShell>
  );
}

type PaymentStatus = "Payé" | "En attente" | "Échoué";
type DeliveryStatus = "Livré" | "Expédié" | "En préparation" | "Non expédié" | "Annulé";

type Order = {
  id: string;
  customer: string;
  date: string;
  total: string;
  paymentStatus: PaymentStatus;
  deliveryStatus: DeliveryStatus;
};

function getBadge(status: PaymentStatus | DeliveryStatus) {
  const colors: Record<string, string> = {
    Payé: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30",
    Livré: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30",
    "En attente": "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30",
    "Non expédié": "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30",
    Échoué: "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30",
    Annulé: "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30",
    Expédié: "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30",
    "En préparation": "bg-[#9b59b6]/15 text-[#9b59b6] border-[#9b59b6]/30",
  };
  return colors[status] ?? "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
}

function StatusBadge({ status }: { status: PaymentStatus | DeliveryStatus }) {
  return <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getBadge(status)}`}>{status}</span>;
}

export default function OrderRow({ order }: { order: Order }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
      <td className="py-4 px-5"><input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer opacity-50 group-hover:opacity-100" /></td>
      <td className="py-4 px-5 text-[14px] font-bold text-[#d4af37] hover:underline">{order.id}</td>
      <td className="py-4 px-5 text-[13px] text-[#a89b82]">{order.date}</td>
      <td className="py-4 px-5 text-[14px] text-[#e8e1d3] font-medium">{order.customer}</td>
      <td className="py-4 px-5 text-[14px] text-[#e8e1d3] font-serif">{order.total}</td>
      <td className="py-4 px-5"><StatusBadge status={order.paymentStatus} /></td>
      <td className="py-4 px-5"><StatusBadge status={order.deliveryStatus} /></td>
      <td className="py-4 px-5 text-right">
        <button type="button" className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors" title="Voir les détails">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

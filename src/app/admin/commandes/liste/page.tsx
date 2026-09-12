import Link from "next/link";

export default function CommandesListePage() {
  const orders = [
    {
      id: "#CMD-1024",
      customer: "Aïssatou Diallo",
      date: "12 Sept 2024 - 14:30",
      total: "65 000 FCFA",
      paymentStatus: "Payé",
      deliveryStatus: "En préparation",
    },
    {
      id: "#CMD-1023",
      customer: "Moussa Ndiaye",
      date: "11 Sept 2024 - 09:15",
      total: "25 000 FCFA",
      paymentStatus: "En attente",
      deliveryStatus: "Non expédié",
    },
    {
      id: "#CMD-1022",
      customer: "Fatou Sow",
      date: "10 Sept 2024 - 18:45",
      total: "120 000 FCFA",
      paymentStatus: "Payé",
      deliveryStatus: "Expédié",
    },
    {
      id: "#CMD-1021",
      customer: "Ibrahima Fall",
      date: "10 Sept 2024 - 11:20",
      total: "15 000 FCFA",
      paymentStatus: "Échoué",
      deliveryStatus: "Annulé",
    },
    {
      id: "#CMD-1020",
      customer: "Khady Sy",
      date: "09 Sept 2024 - 16:00",
      total: "45 000 FCFA",
      paymentStatus: "Payé",
      deliveryStatus: "Livré",
    },
  ];

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "Payé": return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "En attente": return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
      case "Échoué": return "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30";
      default: return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  const getDeliveryBadge = (status: string) => {
    switch (status) {
      case "Livré": return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "Expédié": return "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30";
      case "En préparation": return "bg-[#9b59b6]/15 text-[#9b59b6] border-[#9b59b6]/30";
      case "Non expédié": return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
      case "Annulé": return "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30";
      default: return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Toutes les commandes</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez le suivi et l'expédition de vos commandes</p>
        </div>
        <button className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">
          Exporter en CSV
        </button>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#a89b82]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Rechercher une commande (ID, client)..." 
            className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] placeholder-[#a89b82]/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
            <option value="">Paiement</option>
            <option value="paye">Payé</option>
            <option value="attente">En attente</option>
          </select>
          <select className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
            <option value="">Livraison</option>
            <option value="preparation">En préparation</option>
            <option value="expedie">Expédié</option>
            <option value="livre">Livré</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] w-[40px]">
                  <input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer" />
                </th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Commande</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Date</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Client</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Total</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Paiement</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Livraison</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
                  <td className="py-4 px-5">
                    <input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer opacity-50 group-hover:opacity-100" />
                  </td>
                  <td className="py-4 px-5 text-[14px] font-bold text-[#d4af37] hover:underline">
                    {order.id}
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{order.date}</td>
                  <td className="py-4 px-5 text-[14px] text-[#e8e1d3] font-medium">{order.customer}</td>
                  <td className="py-4 px-5 text-[14px] text-[#e8e1d3] font-serif">{order.total}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getPaymentBadge(order.paymentStatus)}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getDeliveryBadge(order.deliveryStatus)}`}>
                      {order.deliveryStatus}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors" title="Voir les détails">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


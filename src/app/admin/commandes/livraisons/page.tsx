export default function CommandesLivraisonsPage() {
  const deliveries = [
    {
      id: "LIV-401",
      orderId: "#CMD-1024",
      customer: "Aïssatou Diallo",
      address: "Almadies, Dakar",
      method: "Livraison standard",
      date: "13 Sept 2024",
      status: "En préparation",
    },
    {
      id: "LIV-400",
      orderId: "#CMD-1022",
      customer: "Fatou Sow",
      address: "Mermoz, Dakar",
      method: "Livraison Express",
      date: "11 Sept 2024",
      status: "Expédié",
    },
    {
      id: "LIV-399",
      orderId: "#CMD-1020",
      customer: "Khady Sy",
      address: "Plateau, Dakar",
      method: "Livraison standard",
      date: "10 Sept 2024",
      status: "Livré",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Livré": return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "Expédié": return "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30";
      case "En préparation": return "bg-[#9b59b6]/15 text-[#9b59b6] border-[#9b59b6]/30";
      default: return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Livraisons</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez les expéditions et suivez les livreurs</p>
        </div>
        <button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          Générer bordereau d'expédition
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">N° Livraison</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Commande</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Client / Adresse</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Méthode</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Date prévue</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {deliveries.map((liv) => (
                <tr key={liv.id} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5 text-[13px] text-[#a89b82] font-mono">{liv.id}</td>
                  <td className="py-4 px-5 text-[14px] font-bold text-[#d4af37] cursor-pointer hover:underline">{liv.orderId}</td>
                  <td className="py-4 px-5">
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#e8e1d3] font-medium">{liv.customer}</span>
                      <span className="text-[12px] text-[#a89b82]">{liv.address}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#e8e1d3]">{liv.method}</td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{liv.date}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(liv.status)}`}>
                      {liv.status}
                    </span>
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


export default function PromotionsPage() {
  const promotions = [
    {
      id: "PROMO-001",
      name: "Soldes d'été",
      code: "SUMMER24",
      discount: "-20%",
      type: "Pourcentage",
      status: "Actif",
      usage: "45/100",
      endDate: "31/08/2024",
    },
    {
      id: "PROMO-002",
      name: "Bienvenue",
      code: "WELCOME",
      discount: "-5 000 FCFA",
      type: "Montant fixe",
      status: "Actif",
      usage: "12/∞",
      endDate: "Aucune",
    },
    {
      id: "PROMO-003",
      name: "Livraison Gratuite",
      code: "FREEDEL",
      discount: "Livraison",
      type: "Frais de port",
      status: "Expiré",
      usage: "89/100",
      endDate: "01/01/2024",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "Expiré":
        return "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30";
      default:
        return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Promotions & Réductions</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez vos codes promo et réductions automatiques</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded-md font-semibold hover:bg-[#c59b32] transition-colors text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Créer un code promo
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Nom & Code</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Réduction</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Type</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Utilisations</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Fin</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {promotions.map((promo) => (
                <tr key={promo.id} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-[#e8e1d3]">{promo.name}</span>
                      <span className="text-[12px] font-mono text-[#d4af37] bg-[#d4af37]/10 w-fit px-2 py-0.5 rounded mt-1 border border-[#d4af37]/20">{promo.code}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[14px] font-bold text-[#e8e1d3]">{promo.discount}</td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{promo.type}</td>
                  <td className="py-4 px-5 text-[13px] text-[#e8e1d3]">{promo.usage}</td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{promo.endDate}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(promo.status)}`}>
                      {promo.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
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

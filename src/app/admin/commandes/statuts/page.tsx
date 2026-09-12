export default function CommandesStatutsPage() {
  const statuts = [
    { name: "En attente", color: "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30", desc: "La commande vient d'être passée, en attente de paiement." },
    { name: "Payé", color: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30", desc: "Le paiement a été confirmé." },
    { name: "En préparation", color: "bg-[#9b59b6]/15 text-[#9b59b6] border-[#9b59b6]/30", desc: "La commande est en cours de préparation dans l'entrepôt." },
    { name: "Expédié", color: "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30", desc: "La commande a été remise au livreur." },
    { name: "Livré", color: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30", desc: "Le client a reçu sa commande." },
    { name: "Annulé", color: "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30", desc: "La commande a été annulée." },
  ];

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Configuration des Statuts</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Personnalisez les statuts de suivi de commande</p>
        </div>
        <button className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">
          Ajouter un statut
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Aperçu du statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Description de l'étape</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {statuts.map((st, i) => (
                <tr key={i} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5">
                    <span className={`px-3 py-1.5 text-[11px] font-medium rounded-full border ${st.color}`}>
                      {st.name}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{st.desc}</td>
                  <td className="py-4 px-5 text-right">
                    <button className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors">
                      Éditer
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


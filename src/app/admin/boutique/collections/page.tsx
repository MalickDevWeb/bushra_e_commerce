import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    {
      id: "COL-001",
      name: "Spécial Ramadan",
      type: "Manuelle",
      products: 15,
      status: "Actif",
      date: "01/03/2024",
    },
    {
      id: "COL-002",
      name: "Nouvel An",
      type: "Automatique",
      products: 24,
      status: "Inactif",
      date: "15/12/2023",
    },
    {
      id: "COL-003",
      name: "Les Best-sellers",
      type: "Automatique",
      products: 10,
      status: "Actif",
      date: "01/01/2024",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "Inactif":
        return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
      default:
        return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Collections</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Créez des collections pour vos campagnes et saisons</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded-md font-semibold hover:bg-[#c59b32] transition-colors text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Créer une collection
        </button>
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
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Nom de la collection</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Type</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Produits</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Mise à jour</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {collections.map((collection) => (
                <tr key={collection.id} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5">
                    <input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer opacity-50 group-hover:opacity-100" />
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-[14px] font-semibold text-[#e8e1d3] font-serif">{collection.name}</span>
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{collection.type}</td>
                  <td className="py-4 px-5 text-[13px] text-[#e8e1d3] font-medium">{collection.products}</td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{collection.date}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(collection.status)}`}>
                      {collection.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                      </button>
                    </div>
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

import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    {
      id: "CAT-001",
      name: "Parfums",
      description: "Parfums de luxe et extraits",
      count: 45,
      status: "Actif",
    },
    {
      id: "CAT-002",
      name: "Encens (Thiouraye)",
      description: "Mélanges traditionnels sénégalais",
      count: 32,
      status: "Actif",
    },
    {
      id: "CAT-003",
      name: "Huiles Parfumées",
      description: "Huiles essentielles pures et mélanges",
      count: 18,
      status: "Actif",
    },
    {
      id: "CAT-004",
      name: "Brûleurs",
      description: "Accessoires pour encens",
      count: 12,
      status: "Actif",
    },
    {
      id: "CAT-005",
      name: "Coffrets Cadeaux",
      description: "Sélections de produits pour offrir",
      count: 8,
      status: "Brouillon",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "Brouillon":
        return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
      default:
        return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Catégories</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Organisez vos produits en collections logiques</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded-md font-semibold hover:bg-[#c59b32] transition-colors text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Ajouter une catégorie
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
            placeholder="Rechercher une catégorie..." 
            className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] placeholder-[#a89b82]/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
            <option value="">Tous les statuts</option>
            <option value="actif">Actif</option>
            <option value="brouillon">Brouillon</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] w-[40px]">
                  <input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer" />
                </th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Nom & Description</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Produits</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5">
                    <input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer opacity-50 group-hover:opacity-100" />
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-[#e8e1d3] font-serif">{category.name}</span>
                      <span className="text-[12px] text-[#a89b82] mt-0.5">{category.description}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#e8e1d3] font-medium">{category.count} <span className="text-[#a89b82] font-normal">produits</span></td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(category.status)}`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors" title="Modifier">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                      </button>
                      <button className="p-1.5 text-[#a89b82] hover:text-[#e74c3c] transition-colors" title="Supprimer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
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

export default function StocksPage() {
  const inventory = [
    {
      id: "PRD-001",
      name: "Oud Royal",
      sku: "BUSH-OUD-50",
      inStock: 24,
      reserved: 2,
      available: 22,
      status: "En stock",
    },
    {
      id: "PRD-002",
      name: "Gowé Suprême",
      sku: "BUSH-GOW-100",
      inStock: 5,
      reserved: 1,
      available: 4,
      status: "Stock faible",
    },
    {
      id: "PRD-003",
      name: "Musc Blanc",
      sku: "BUSH-MUS-10",
      inStock: 0,
      reserved: 0,
      available: 0,
      status: "Rupture",
    },
    {
      id: "PRD-004",
      name: "Coffret Découverte",
      sku: "BUSH-COF-DEC",
      inStock: 12,
      reserved: 5,
      available: 7,
      status: "En stock",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En stock":
        return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "Stock faible":
        return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
      case "Rupture":
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
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Inventaire & Stocks</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Suivez les quantités et ajustez les stocks de vos produits</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">
            Exporter
          </button>
          <button className="flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded-md font-semibold hover:bg-[#c59b32] transition-colors text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            Ajuster l'inventaire
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Produit (SKU)</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">En stock</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Réservé</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Disponible</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Ajuster</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-[#e8e1d3] font-serif">{item.name}</span>
                      <span className="text-[11px] text-[#a89b82] mt-0.5">{item.sku}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[14px] text-[#e8e1d3]">{item.inStock}</td>
                  <td className="py-4 px-5 text-[14px] text-[#a89b82]">{item.reserved}</td>
                  <td className="py-4 px-5 text-[14px] font-bold text-[#d4af37]">{item.available}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <input 
                        type="number" 
                        defaultValue={item.available} 
                        className="w-16 bg-[#0a0a0a] border border-[#d4af37]/30 rounded text-center text-[13px] text-[#e8e1d3] py-1 focus:outline-none focus:border-[#d4af37]"
                      />
                      <button className="bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-2 py-1 rounded text-[11px] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors">
                        Mettre à jour
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

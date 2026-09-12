export default function ClientsListePage() {
  const clients = [
    {
      id: "CLT-5049",
      name: "Aïssatou Diallo",
      email: "aissatou.d@example.com",
      phone: "+221 77 123 45 67",
      orders: 12,
      spent: "345 000 FCFA",
      status: "VIP",
      joined: "12/01/2023",
    },
    {
      id: "CLT-5048",
      name: "Moussa Ndiaye",
      email: "moussa.nd@example.com",
      phone: "+221 76 987 65 43",
      orders: 2,
      spent: "45 000 FCFA",
      status: "Régulier",
      joined: "05/08/2024",
    },
    {
      id: "CLT-5047",
      name: "Fatou Sow",
      email: "fsow99@example.com",
      phone: "+221 78 555 44 33",
      orders: 5,
      spent: "120 000 FCFA",
      status: "Régulier",
      joined: "22/11/2023",
    },
    {
      id: "CLT-5046",
      name: "Ibrahima Fall",
      email: "ibra.fall@example.com",
      phone: "+221 70 111 22 33",
      orders: 0,
      spent: "0 FCFA",
      status: "Nouveau",
      joined: "10/09/2024",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "VIP": return "bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/40";
      case "Régulier": return "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30";
      case "Nouveau": return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      default: return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Tous les clients</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez votre base de données clients et leur fidélité</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded-md font-semibold hover:bg-[#c59b32] transition-colors text-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
          </svg>
          Ajouter un client
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
            placeholder="Rechercher par nom, email ou téléphone..." 
            className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] placeholder-[#a89b82]/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
            <option value="">Tous les statuts</option>
            <option value="vip">VIP</option>
            <option value="regulier">Régulier</option>
            <option value="nouveau">Nouveau</option>
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
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Client</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Contact</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Commandes</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Total Dépensé</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Inscription</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
                  <td className="py-4 px-5">
                    <input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer opacity-50 group-hover:opacity-100" />
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#d4af37] font-serif font-bold text-lg">
                        {client.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-[#e8e1d3] font-serif group-hover:text-[#d4af37] transition-colors">{client.name}</span>
                        <span className="text-[11px] text-[#a89b82]">{client.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#e8e1d3]">{client.email}</span>
                      <span className="text-[12px] text-[#a89b82]">{client.phone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[14px] text-[#e8e1d3]">{client.orders}</td>
                  <td className="py-4 px-5 text-[14px] font-bold text-[#d4af37]">{client.spent}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusBadge(client.status)}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{client.joined}</td>
                  <td className="py-4 px-5 text-right">
                    <button className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors" title="Voir le profil">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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


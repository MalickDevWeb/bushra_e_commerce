export default function SuperAdminStaffPage() {
  const staff = [
    { name: "Super Admin", email: "admin@bushra.sn", role: "Super Admin", lastActive: "Il y a 5 min", status: "En ligne" },
    { name: "Imam Ndiaye", email: "imam@bushra.sn", role: "Administrateur", lastActive: "Il y a 2 heures", status: "Hors ligne" },
    { name: "Awa Diop", email: "awa@bushra.sn", role: "Gestionnaire", lastActive: "Hier", status: "Hors ligne" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Comptes Admin & Staff</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez l'équipe ayant accès au tableau de bord</p>
        </div>
        <button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          Ajouter un membre
        </button>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Nom complet</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Email professionnel</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Rôle assigné</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Dernière activité</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {staff.map((user, i) => (
                <tr key={i} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] font-bold text-xs shrink-0">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-[14px] font-bold text-[#e8e1d3] font-serif">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{user.email}</td>
                  <td className="py-4 px-5 text-[13px] text-[#d4af37]">{user.role}</td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{user.lastActive}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${user.status === "En ligne" ? "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30" : "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button className="text-[#a89b82] hover:text-[#d4af37] transition-colors text-xs border border-transparent hover:border-[#d4af37]/30 px-3 py-1.5 rounded">Modifier</button>
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


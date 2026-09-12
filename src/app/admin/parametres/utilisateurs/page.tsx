export default function ParametresUtilisateursPage() {
  const users = [
    { name: "Admin Principal", email: "contact@bushra.sn", role: "Administrateur", status: "Actif" },
    { name: "Ousmane Livreur", email: "ousmane@bushra.sn", role: "Logistique", status: "Actif" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Utilisateurs & Rôles</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez les accès à ce tableau de bord</p>
        </div>
        <button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32]">
          Inviter un utilisateur
        </button>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
              <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Nom</th>
              <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Email</th>
              <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Rôle</th>
              <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d4af37]/10">
            {users.map((u, i) => (
              <tr key={i} className="hover:bg-[#d4af37]/5 transition-colors">
                <td className="py-4 px-5 text-[14px] font-bold text-[#e8e1d3] font-serif">{u.name}</td>
                <td className="py-4 px-5 text-[13px] text-[#a89b82]">{u.email}</td>
                <td className="py-4 px-5 text-[12px] text-[#d4af37]">{u.role}</td>
                <td className="py-4 px-5 text-right">
                  <button className="text-[#a89b82] hover:text-[#d4af37] text-sm">Gérer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


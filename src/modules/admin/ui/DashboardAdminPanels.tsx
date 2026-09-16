import Link from "next/link";

const admins = [
  ["Super Admin", "admin@bushra.sn", "Super Admin", "En ligne"],
  ["Imam Ndiaye", "imam@bushra.sn", "Administrateur", "Actif"],
  ["Awa Diop", "awa@bushra.sn", "Gestionnaire contenu", "Actif"],
  ["Moussa Fall", "moussa@bushra.sn", "Gestionnaire boutique", "Actif"],
  ["Fatou Sy", "fatou@bushra.sn", "Modérateur", "Inactif"],
];

const roles = [
  ["👑", "Super Admin", "Accès complet à toutes les fonctionnalités"],
  ["🛡️", "Administrateur", "Boutique, commandes, clients, contenus"],
  ["📄", "Gestionnaire de contenu", "Pages, textes, images, menus, footer"],
  ["🏪", "Gestionnaire boutique", "Produits, stocks, catégories, commandes"],
  ["💬", "Modérateur", "Avis, messages, notifications"],
];

export function DashboardAdminPanels() {
  return (
    <div className="flex flex-col gap-5 xl:col-span-2">
      <section className="rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-5">
        <PanelTitle title="Gestion des administrateurs" />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-[#d4af37]/20 text-[11px] uppercase text-[#a89b82]">
              <tr>{["Nom", "Email", "Rôle", "Statut", "Actions"].map((heading) => <th key={heading} className="pb-3 pr-4 font-normal">{heading}</th>)}</tr>
            </thead>
            <tbody>
              {admins.map(([name, email, role, status]) => (
                <tr key={email} className="border-b border-[#d4af37]/10 last:border-0">
                  <td className="py-3 pr-4 font-medium">{name}</td>
                  <td className="py-3 pr-4 text-[#a89b82]">{email}</td>
                  <td className="py-3 pr-4"><span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-2 py-1 text-[10px] text-[#d4af37]">{role}</span></td>
                  <td className={`py-3 pr-4 ${status === "Inactif" ? "text-red-400" : "text-emerald-400"}`}>{status}</td>
                  <td className="py-3 text-[#d4af37]">Modifier</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="#" className="mt-4 block border-t border-[#d4af37]/10 pt-4 text-xs text-[#d4af37] hover:underline">Gérer les rôles et permissions →</Link>
      </section>

      <section className="rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-5">
        <PanelTitle title="Rôles et permissions" />
        <div className="flex flex-col gap-2">
          {roles.map(([icon, role, description]) => (
            <div key={role} className="flex items-center gap-3 rounded-lg border-b border-[#d4af37]/10 px-2 py-2.5 last:border-0">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">{icon}</span>
              <span className="flex flex-col"><strong className="text-[13px]">{role}</strong><small className="text-[10px] text-[#a89b82]">{description}</small></span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PanelTitle({ title }: { title: string }) {
  return <div className="mb-4 flex items-center justify-between"><h2 className="text-base font-bold">{title}</h2><Link href="#" className="text-xs text-[#d4af37] hover:underline">Voir tout</Link></div>;
}

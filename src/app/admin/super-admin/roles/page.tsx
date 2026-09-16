import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

const ROLES = [
  {
    name: "Super Admin",
    badge: "👑",
    color: "border-[#d4af37]/40 bg-[#d4af37]/5",
    titleColor: "text-[#d4af37]",
    desc: "Accès complet à toutes les fonctionnalités, y compris les finances, les clés API et la gestion du staff.",
    permissions: [
      { label: "Tableau de bord complet", granted: true },
      { label: "Gestion des produits", granted: true },
      { label: "Gestion des commandes", granted: true },
      { label: "Gestion des clients", granted: true },
      { label: "Gestion du staff & Admins", granted: true },
      { label: "Revenus & Finances", granted: true },
      { label: "Clés API (Wave, Orange Money, etc.)", granted: true },
      { label: "Paramètres boutique", granted: true },
      { label: "Sauvegardes & Logs", granted: true },
      { label: "Mode maintenance", granted: true },
    ],
  },
  {
    name: "Admin",
    badge: "🛡️",
    color: "border-blue-400/30 bg-blue-400/5",
    titleColor: "text-blue-400",
    desc: "Accès à la gestion opérationnelle quotidienne. Ne peut pas voir les finances ni gérer les Admins.",
    permissions: [
      { label: "Tableau de bord (partiel)", granted: true },
      { label: "Gestion des produits", granted: true },
      { label: "Gestion des commandes", granted: true },
      { label: "Gestion des clients", granted: true },
      { label: "Gestion du staff & Admins", granted: false },
      { label: "Revenus & Finances", granted: false },
      { label: "Clés API (Wave, Orange Money, etc.)", granted: false },
      { label: "Paramètres boutique", granted: false },
      { label: "Sauvegardes & Logs", granted: false },
      { label: "Mode maintenance", granted: false },
    ],
  },
  {
    name: "Désactivé",
    badge: "🔒",
    color: "border-red-400/20 bg-red-400/5",
    titleColor: "text-red-400",
    desc: "Compte désactivé par le Super Admin. Aucun accès au tableau de bord. Le compte existe toujours en base.",
    permissions: [
      { label: "Tableau de bord (partiel)", granted: false },
      { label: "Gestion des produits", granted: false },
      { label: "Gestion des commandes", granted: false },
      { label: "Gestion des clients", granted: false },
      { label: "Gestion du staff & Admins", granted: false },
      { label: "Revenus & Finances", granted: false },
      { label: "Clés API (Wave, Orange Money, etc.)", granted: false },
      { label: "Paramètres boutique", granted: false },
      { label: "Sauvegardes & Logs", granted: false },
      { label: "Mode maintenance", granted: false },
    ],
  },
];

export default function RolesPage() {
  return (
    <AdminPageShell>
      <div className="flex flex-col gap-6">
        <AdminPageHeader
          title="Rôles & Permissions"
          description="Vue d'ensemble des droits d'accès par rôle dans l'administration BUSHRA"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ROLES.map((role) => (
            <div key={role.name} className={`rounded-xl border p-6 flex flex-col gap-4 ${role.color}`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{role.badge}</span>
                <div>
                  <h2 className={`text-base font-bold ${role.titleColor}`}>{role.name}</h2>
                  <p className="text-[11px] text-[#a89b82] mt-0.5 leading-relaxed">{role.desc}</p>
                </div>
              </div>

              <div className="h-px bg-[#d4af37]/10" />

              <ul className="flex flex-col gap-2.5">
                {role.permissions.map((perm) => (
                  <li key={perm.label} className="flex items-center gap-2.5">
                    {perm.granted ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-green-400 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-red-400/60 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={`text-xs ${perm.granted ? "text-[#e8e1d3]" : "text-[#a89b82]/50 line-through"}`}>
                      {perm.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex gap-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-[#e8e1d3] mb-1">Gestion du staff</p>
            <p className="text-xs text-[#a89b82] leading-relaxed">
              Pour créer, désactiver ou supprimer des comptes Admin, rendez-vous sur la page{" "}
              <a href="/admin/super-admin/staff" className="text-[#d4af37] underline">Équipe & Accès Admin</a>.
              Les rôles sont appliqués automatiquement à la connexion.
            </p>
          </div>
        </div>
      </div>
    </AdminPageShell>
  );
}

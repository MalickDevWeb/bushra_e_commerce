const actions = [
  ["Créer un admin", "Ajouter un nouvel administrateur"],
  ["Gérer les rôles", "Permissions et accès"],
  ["Clés API", "Gérer les intégrations"],
  ["Sauvegarde", "Sauvegarder la plateforme"],
  ["Logs système", "Voir l'historique"],
  ["Paramètres avancés", "Configuration technique"],
];

export function DashboardQuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {actions.map(([label, description]) => (
        <button
          key={label}
          className="group flex items-start gap-3 rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-4 text-left transition-colors hover:bg-[#d4af37]/5"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#d4af37]/10 text-[#d4af37]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
            </svg>
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="text-sm font-semibold leading-tight group-hover:text-white">{label}</span>
            <span className="text-[10px] leading-snug text-[#a89b82]">{description}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

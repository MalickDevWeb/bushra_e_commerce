import { logoutAction } from "@/modules/auth/actions/authActions";

export function AdminSidebarFooter() {
  return <div className="shrink-0 border-t border-[#d4af37]/20 p-4">
    <form action={logoutAction}>
      <button type="submit" className="flex w-full items-center gap-3 rounded-md px-4 py-2.5 text-[#a89b82] hover:bg-red-900/20 hover:text-red-400 transition-colors group">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
        <span className="text-[13px] font-serif tracking-wide">Déconnexion</span>
      </button>
    </form>
  </div>;
}

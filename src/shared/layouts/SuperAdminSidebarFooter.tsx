import { logoutAction } from "@/modules/auth/actions/authActions";

interface SuperAdminSidebarFooterProps {
  onClose?: () => void;
}

export function SuperAdminSidebarFooter({ onClose }: SuperAdminSidebarFooterProps) {
  return (
    <div className="flex shrink-0 flex-col gap-2 border-t border-[#d4af37]/20 p-4">
      <div className="flex items-center gap-3 px-2 py-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-[11px] font-bold text-[#090705]">SA</div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate font-serif text-[13px] text-[#e8e1d3]">Super Admin</span>
          <span className="truncate font-sans text-[10px] text-[#a89b82]">bushra@admin.sn</span>
        </div>
      </div>
      <form action={logoutAction}>
      <button type="submit" onClick={onClose} className="group flex w-full items-center gap-3 rounded-md px-4 py-2.5 text-[#a89b82] transition-colors hover:bg-red-900/20 hover:text-red-400">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
        <span className="font-serif text-[13px] tracking-wide">Déconnexion</span>
      </button>
      </form>
    </div>
  );
}
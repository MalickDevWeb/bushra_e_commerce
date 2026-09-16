import Link from "next/link";

export function AdminSidebarSuperAdminLink() {
  return <div className="border-t border-[#d4af37]/20 pt-3 pb-2 px-3">
    <Link href="/admin/super-admin" className="flex items-center gap-3 rounded-lg px-4 py-3 bg-gradient-to-r from-[#d4af37]/15 to-[#d4af37]/5 border border-[#d4af37]/30 hover:from-[#d4af37]/25 hover:to-[#d4af37]/10 transition-all group">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00.321-.988l5.518-.442a.563.563 0 00-.475-.345L11.48 3.5z" /></svg>
      </div>
      <div className="flex flex-col flex-1 min-w-0"><span className="text-[13px] font-serif font-semibold text-[#d4af37] group-hover:text-white transition-colors tracking-wide">Espace Super Admin</span><span className="text-[10px] text-[#a89b82] group-hover:text-[#d4af37]/70 transition-colors">Configuration système</span></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#d4af37] shrink-0 group-hover:translate-x-0.5 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
    </Link>
  </div>;
}

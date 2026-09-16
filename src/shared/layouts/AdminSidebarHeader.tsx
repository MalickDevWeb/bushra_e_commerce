import Link from "next/link";

export function AdminSidebarHeader() {
  return <>
    <div className="flex h-[70px] items-center justify-center gap-4 border-b border-[#d4af37]/20 shrink-0 px-4">
      <Link href="/admin/dashboard" className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#d4af37] text-[16px] font-bold text-[#d4af37] shrink-0">BM</div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-[#d4af37] tracking-[0.2em] text-[20px] leading-none mb-0.5">BUSHRA</span>
          <span className="font-sans text-[6.5px] text-[#d4af37] uppercase tracking-[0.3em] font-medium opacity-80">Thiouraye - Dakar</span>
        </div>
      </Link>
    </div>
    <div className="px-4 py-4 border-b border-[#d4af37]/20 shrink-0">
      <Link href="/admin/dashboard" className="flex items-center gap-3.5 rounded-md bg-gradient-to-r from-[#d4af37] via-[#c59b32] to-[#99771b] px-5 py-3 text-[#090705] shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all hover:brightness-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69v9.02a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75V15a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v6.56a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75v-9.02l8.69-8.69z" /></svg>
        <span className="text-[15px] font-bold tracking-wide">Tableau de bord</span>
      </Link>
    </div>
  </>;
}

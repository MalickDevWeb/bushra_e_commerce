import Link from "next/link";

export function SuperAdminSidebarBrand() {
  return (
    <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-[#d4af37]/20 px-4">
      <Link href="/admin/super-admin" className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#d4af37] text-[16px] font-bold text-[#d4af37]">BM</div>
        <div className="flex flex-col items-start justify-center">
          <span className="mb-0.5 text-[18px] leading-none tracking-[0.2em] text-[#d4af37]">BUSHRA</span>
          <span className="font-sans text-[6.5px] font-medium uppercase tracking-[0.3em] text-[#d4af37] opacity-80">Thiouraye - Dakar</span>
        </div>
      </Link>
      <span className="shrink-0 rounded-sm bg-[#d4af37] px-1.5 py-0.5 font-sans text-[8px] font-bold uppercase tracking-widest text-[#090705]">S.Admin</span>
    </div>
  );
}
import Link from "next/link";

import { APP_NAME, APP_TAGLINE, ROUTES } from "@/shared/constants/config";

export function MobileHomeHeader() {
  return (
    <header className="relative z-20 flex min-w-0 items-center gap-2 px-3 pb-4 pt-6 sm:px-5">
      <Link href={ROUTES.home} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37] bg-[#0b0b0b] font-serif text-base text-[#f3d57a] shadow-[0_0_18px_rgba(201,162,39,0.2)] sm:h-12 sm:w-12 sm:text-lg">
          BM
        </span>
        <span className="min-w-0 leading-none">
          <strong className="block text-[0.9rem] font-medium tracking-[0.16em] text-[#f8f2e5] sm:text-[1.15rem] sm:tracking-[0.25em]">{APP_NAME}</strong>
          <small className="mt-1 block text-[0.55rem] tracking-[0.25em] text-[#d6c8ae]">{APP_TAGLINE}</small>
        </span>
      </Link>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <button type="button" aria-label="Rechercher" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#0f0d0a]/80 text-[#f8edcf] sm:h-11 sm:w-11">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
            <circle cx="11" cy="11" r="6.5" />
            <path strokeLinecap="round" d="m16 16 4 4" />
          </svg>
        </button>
        <button type="button" aria-label="Panier" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#0f0d0a]/80 text-[#f8edcf] sm:h-11 sm:w-11">
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4af37] text-[9px] font-bold text-black">2</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
        <Link href={ROUTES.login} aria-label="Mon compte" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#0f0d0a]/80 text-[#f8edcf] sm:h-11 sm:w-11">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { useCart } from "@/shared/providers/CartProvider";

export function MobileHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#c9a227]/20 bg-[#0a0a0a]/95 px-5 py-3 backdrop-blur-md">
      <Link href={ROUTES.home} className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37] bg-transparent">
          <span className="font-serif text-[0.7rem] text-[#d4af37]">BM</span>
        </div>
        <div>
          <h1 className="font-serif text-[1.1rem] leading-none tracking-widest text-[#e8e1d3]">
            BUSHRA
          </h1>
          <p className="text-[0.45rem] tracking-[0.25em] text-[#a89b82]">
            THIOURAYE - DAKAR
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <button className="text-[#e8e1d3] hover:text-[#d4af37] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
        <Link href={ROUTES.cart} className="relative text-[#e8e1d3] hover:text-[#d4af37] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4af37] text-[0.6rem] font-bold text-[#1a1405]">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

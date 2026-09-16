"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/shared/constants/config";
import { cn } from "@/utils/cn";
import { useCart } from "@/shared/providers/CartProvider";

export function DesktopHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  const navLinks = [
    { label: "Accueil", href: ROUTES.home },
    { label: "Collections", href: ROUTES.collections },
    { label: "Best-Sellers", href: ROUTES.shop + "?filter=best" },
    { label: "À propos", href: ROUTES.about },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: ROUTES.contact },
  ];

  return (
    <header className="hidden lg:flex w-full items-center justify-between px-10 py-6 absolute top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37] bg-transparent">
          <span className="font-serif text-[1.1rem] text-[#d4af37]">BM</span>
        </div>
        <div>
          <h1 className="font-serif text-[1.3rem] leading-none tracking-widest text-[#e8e1d3]">
            BUSHRA
          </h1>
          <p className="text-[0.55rem] tracking-[0.25em] text-[#a89b82]">
            THIOURAYE - DAKAR
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8 xl:gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.label === "Accueil" && (pathname === ROUTES.home || pathname === ROUTES.shop));
          return (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[0.85rem] transition-colors hover:text-[#d4af37]",
                isActive ? "text-[#d4af37] font-medium border-b border-[#d4af37] pb-1" : "text-[#e8e1d3]"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-6">
        {/* Barre de recherche */}
        <div className="relative hidden xl:block">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="w-48 bg-transparent border border-[#d4af37]/30 rounded-full py-1.5 pl-4 pr-10 text-[0.8rem] text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]/70 transition-colors"
          />
          <button type="button" aria-label="Rechercher" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89b82] hover:text-[#d4af37] transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>

        <Link href={ROUTES.account} className="text-[#e8e1d3] hover:text-[#d4af37] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </Link>
        <Link href="/favoris" className="relative text-[#e8e1d3] hover:text-[#d4af37] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4af37] text-[0.6rem] font-bold text-[#1a1405]">
            2
          </span>
        </Link>
        <Link href={ROUTES.cart} className="relative text-[#e8e1d3] hover:text-[#d4af37] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4af37] text-[0.6rem] font-bold text-[#1a1405]">
            3
          </span>
        </Link>
      </div>
    </header>
  );
}

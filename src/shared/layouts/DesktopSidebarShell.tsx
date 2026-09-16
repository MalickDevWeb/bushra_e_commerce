"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/shared/constants/config";
import { useCart } from "@/shared/providers/CartProvider";

interface DesktopSidebarShellProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: "Accueil", href: ROUTES.home, icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
  { label: "Collections", href: ROUTES.collections, icon: "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" },
  { label: "Boutique", href: ROUTES.shop, icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.999 2.999 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.999 2.999 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" },
  { label: "Suivi", href: ROUTES.tracking, icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m2.25 11.25h-2.25m-11.25 0h2.25m-2.25 0V12m0 0h11.25m-11.25 0V7.5a1.125 1.125 0 011.125-1.125h9.375c.621 0 1.125.504 1.125 1.125V12m0 0h2.25m-2.25 0v3.75" },
  { label: "À propos", href: ROUTES.about, icon: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" },
  { label: "Contact", href: ROUTES.contact, icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a8.5 8.5 0 01-1.07-1.916V6.75" },
] as const;

export function DesktopSidebarShell({ children }: DesktopSidebarShellProps) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]">
      <header className="flex h-[88px] shrink-0 items-center justify-between border-b border-[#d4af37]/20 bg-[#0a0a0a] px-10">
        <Link href={ROUTES.home} className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]">
            <span className="font-serif text-[1.1rem] text-[#d4af37]">BM</span>
          </div>
          <div>
            <h1 className="font-serif text-[1.3rem] leading-none tracking-widest text-[#e8e1d3]">BUSHRA</h1>
            <p className="text-[0.55rem] tracking-[0.25em] text-[#a89b82]">THIOURAYE - DAKAR</p>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="relative hidden xl:block">
            <input
              type="search"
              placeholder="Rechercher un produit..."
              onKeyDown={(event) => {
                if (event.key === "Enter" && event.currentTarget.value.trim()) {
                  window.location.href = `${ROUTES.shop}?q=${encodeURIComponent(event.currentTarget.value.trim())}`;
                }
              }}
              className="w-64 rounded-full border border-[#d4af37]/30 bg-transparent py-1.5 pl-4 pr-4 text-[0.8rem] text-[#e8e1d3] placeholder-[#a89b82] focus:border-[#d4af37]/70 focus:outline-none"
            />
          </div>
          <Link href={ROUTES.account} aria-label="Compte" className="text-[#e8e1d3] hover:text-[#d4af37] transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </Link>
          <CartIcon />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[220px] shrink-0 overflow-y-auto border-r border-[#d4af37]/20 bg-[#0a0a0a]">
          <nav className="flex flex-col gap-2 px-4 py-8">
            {navLinks.map((item) => {
              const isActive = item.href === ROUTES.home ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 rounded-xl px-6 py-3.5 transition-colors ${isActive ? "bg-[#d4af37]/15 text-[#d4af37]" : "text-[#e8e1d3] hover:bg-[#d4af37]/5"}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-[0.9rem] font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto bg-[#0a0a0a]">{children}</main>
      </div>
    </div>
  );
}

function CartIcon() {
  const { itemCount } = useCart();

  return (
    <Link href={ROUTES.cart} aria-label="Panier" className="relative text-[#e8e1d3] hover:text-[#d4af37] transition-colors">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      {itemCount > 0 && <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4af37] text-[0.6rem] font-bold text-[#1a1405]">{itemCount}</span>}
    </Link>
  );
}
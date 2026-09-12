"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/shared/constants/config";
import { useCart } from "@/shared/providers/CartProvider";

interface DesktopSidebarShellProps {
  children: React.ReactNode;
}

export function DesktopSidebarShell({ children }: DesktopSidebarShellProps) {
  const pathname = usePathname();

  const navLinks = [
    { label: "Accueil", href: ROUTES.home, icon: "M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" },
    { label: "Collections", href: ROUTES.collections, icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
    { label: "Boutique", href: ROUTES.shop, icon: "M12 2c-.5 3-2 5.5-4 6.5C10 7.5 11 4.5 12 2zM12 22c.5-3 2-5.5 4-6.5-2 1-3 4-4 6.5zM2 12c3 .5 5.5 2 6.5 4-1-2-4-3-6.5-4zM22 12c-3-.5-5.5-2-6.5-4 1 2 4 3 6.5 4zM12 7.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5S7.5 14.5 7.5 12 9.5 7.5 12 7.5z" },
    { label: "Suivi", href: ROUTES.tracking, icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
    { label: "À propos", href: ROUTES.about, icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
    { label: "Contact", href: ROUTES.contact, icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] text-[#f5f5f5] flex flex-col overflow-hidden">
      {/* Top Header */}
      <header className="h-[88px] shrink-0 border-b border-[#d4af37]/20 flex items-center justify-between px-10 bg-[#0a0a0a]">
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

        {/* Center Nav (Desktop Header) */}
        <nav className="hidden xl:flex items-center gap-8">
          {[
            { label: 'Accueil', href: ROUTES.home },
            { label: 'Collections', href: ROUTES.collections },
            { label: 'Boutique', href: ROUTES.shop },
            { label: 'À propos', href: ROUTES.about },
            { label: 'Contact', href: ROUTES.contact }
          ].map(link => {
            const isActive = link.href === ROUTES.home 
              ? pathname === link.href 
              : pathname.startsWith(link.href);
            return (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`text-[0.85rem] transition-colors ${isActive ? 'text-[#d4af37] font-medium' : 'text-[#e8e1d3] hover:text-[#d4af37]'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        {/* Search & Icons */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Rechercher un produit..." 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const target = e.target as HTMLInputElement;
                  if (target.value.trim()) {
                    window.location.href = `${ROUTES.shop}?q=${encodeURIComponent(target.value.trim())}`;
                  }
                }
              }}
              className="w-64 bg-transparent border border-[#d4af37]/30 rounded-full py-1.5 pl-10 pr-4 text-[0.8rem] text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]/70 transition-colors"
            />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#a89b82] absolute left-4 top-1/2 -translate-y-1/2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <Link href={ROUTES.account} className="w-9 h-9 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#e8e1d3] hover:border-[#d4af37] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </Link>
            <CartIcon />
            <button className="w-9 h-9 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#e8e1d3] hover:border-[#d4af37] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[280px] shrink-0 border-r border-[#d4af37]/20 flex flex-col h-full bg-[#0a0a0a] overflow-y-auto">
          <nav className="flex flex-col gap-2 px-4 py-8 mb-auto">
            {navLinks.map((item, idx) => {
              // Exact match for home, startsWith for others to handle sub-pages if any
              const isActive = item.href === ROUTES.home 
                ? pathname === item.href 
                : pathname.startsWith(item.href);
                
              return (
                <Link key={idx} href={item.href} className={`flex items-center justify-between px-6 py-3.5 rounded-xl transition-colors ${isActive ? 'bg-[#d4af37]/15 text-[#d4af37]' : 'text-[#e8e1d3] hover:bg-[#d4af37]/5'}`}>
                  <div className="flex items-center gap-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                    <span className="text-[0.9rem] font-medium">{item.label}</span>
                  </div>
                  {isActive && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
                </Link>
              );
            })}
          </nav>

          {/* Promo Card */}
          <div className="px-6 pb-8">
            <div className="border border-[#d4af37]/30 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden bg-[#0c0a07]">
              <div className="text-[#d4af37] mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h4 className="font-serif text-[#e8e1d3] text-sm mb-2 leading-snug">L&apos;excellence<br/>dans chaque détail</h4>
              <p className="text-[#a89b82] text-[10px]">Parfums, traditions<br/>et élégance.</p>
              
              {/* Decorative mandala-like background inside the promo card */}
              <div className="absolute -bottom-8 -left-8 opacity-10 text-[#d4af37]">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32"><path d="M12 2c-.5 3-2 5.5-4 6.5C10 7.5 11 4.5 12 2zM12 22c.5-3 2-5.5 4-6.5-2 1-3 4-4 6.5zM2 12c3 .5 5.5 2 6.5 4-1-2-4-3-6.5-4zM22 12c-3-.5-5.5-2-6.5-4 1 2 4 3 6.5 4z" /></svg>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto flex flex-col bg-[#0a0a0a] relative">
          {children}

          {/* Footer */}
          <footer className="mt-auto border-t border-[#d4af37]/20 flex items-center justify-between px-16 py-8 bg-[#0a0a0a] shrink-0">
            <p className="text-[0.6rem] text-[#a89b82]">© 2024 Bushra. Tous droits réservés.</p>

            {/* Nav */}
            <nav className="flex items-center gap-8">
              {navLinks.map(link => {
                const isActive = link.href === ROUTES.home 
                  ? pathname === link.href 
                  : pathname.startsWith(link.href);
                return (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className={`text-[0.75rem] transition-colors ${isActive ? 'text-[#d4af37]' : 'text-[#a89b82] hover:text-[#d4af37]'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#a89b82] hover:text-[#d4af37] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="text-[#a89b82] hover:text-[#d4af37] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-[#a89b82] hover:text-[#d4af37] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </a>
              <a href="#" className="text-[#a89b82] hover:text-[#d4af37] transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

function CartIcon() {
  const { itemCount } = useCart();
  
  return (
    <Link href={ROUTES.cart} className="relative w-9 h-9 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#e8e1d3] hover:border-[#d4af37] transition-colors">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>
      {itemCount > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4af37] text-[0.6rem] font-bold text-[#1a1405]">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

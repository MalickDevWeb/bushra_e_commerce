"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/shared/constants/config";
import { cn } from "@/utils/cn";
import { useCart } from "@/shared/providers/CartProvider";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  isCenter?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "Accueil",
    href: ROUTES.home,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
      </svg>
    ),
  },
  {
    label: "Collections",
    href: ROUTES.collections,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Boutique",
    href: ROUTES.shop,
    isCenter: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#1a1208]">
        <path d="M12 2c-.5 3-2 5.5-4 6.5C10 7.5 11 4.5 12 2zM12 22c.5-3 2-5.5 4-6.5-2 1-3 4-4 6.5zM2 12c3 .5 5.5 2 6.5 4-1-2-4-3-6.5-4zM22 12c-3-.5-5.5-2-6.5-4 1 2 4 3 6.5 4zM12 7.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5S7.5 14.5 7.5 12 9.5 7.5 12 7.5z" />
      </svg>
    ),
  },
  {
    label: "Panier",
    href: ROUTES.cart,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
      </svg>
    ),
  },
  {
    label: "Compte",
    href: ROUTES.account,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
];

export function BottomNavbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#c9a227]/20 bg-[#0a0a0a]/95 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg items-end justify-around px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          if (item.isCenter) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative -mt-5 flex flex-col items-center gap-1.5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f5d67a_0%,#d9b44a_32%,#9a7111_100%)] shadow-[0_8px_24px_rgba(201,162,39,0.36)] ring-4 ring-[#0a0a0a]">
                  {item.icon}
                </span>
                <span className="text-[10px] font-medium text-[#f3d57a]">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex flex-col items-center gap-1.5 py-1"
            >
              <span className={cn("relative transition-colors", isActive ? "text-[#f3d57a]" : "text-zinc-500")}>
                {item.icon}
                {item.label === "Panier" && itemCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#d4af37] text-[9px] font-bold text-[#1a1405]">
                    {itemCount}
                  </span>
                )}
              </span>
              <span className={cn("text-[10px] font-medium", isActive ? "text-[#f3d57a]" : "text-zinc-500")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

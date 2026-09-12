"use client";

import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/utils/cn";

const categories = [
  { 
    id: "all", 
    name: "Tout", 
    count: 28, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 0a4 4 0 014 4h-8a4 4 0 014-4zM4 14h16v4c0 2-2 4-4 4H8c-2 0-4-2-4-4v-4zm0 0v-2c0-1.5 1-2.5 2-3M20 14v-2c0-1.5-1-2.5-2-3M8 14h8" />
      </svg>
    ) 
  },
  { 
    id: "ciselee", 
    name: "Encensoirs\nCiselés", 
    count: 12, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L9 9h6l-3-6zm-5 8h10v3H7v-3zm-2 5h14v2c0 2-2 4-4 4H9c-2 0-4-2-4-4v-2z" />
      </svg>
    )
  },
  { 
    id: "royale", 
    name: "Mabkharas\nRoyales", 
    count: 9, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l4-2 5 3 5-3 4 2v2H3V6zm2 4h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8zM12 10v6m-4-6v6m8-6v6" />
      </svg>
    )
  },
  { 
    id: "prestige", 
    name: "Pièces\nPrestige", 
    count: 7, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 5h-6l3-5zm-5 7h10a2 2 0 012 2v6a4 4 0 01-4 4H9a4 4 0 01-4-4v-6a2 2 0 012-2zM9 13l3 2 3-2" />
      </svg>
    )
  },
  { 
    id: "coffrets", 
    name: "Coffrets\nCadeaux", 
    count: 5, 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8zm0 0V6a2 2 0 012-2h10a2 2 0 012 2v2M12 12v6" />
      </svg>
    )
  },
];

export function MobileCategories() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentCategory = searchParams.get("category");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="px-5 mb-4 mt-2">
      <div className="hide-scrollbar flex gap-2.5 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const isActive = (currentCategory === cat.id) || (!currentCategory && cat.id === "all");
          return (
            <button
              key={cat.id}
              onClick={() => {
                const nextCat = cat.id === "all" ? "" : cat.id;
                router.push(pathname + "?" + createQueryString("category", nextCat));
              }}
              className={cn(
                "flex min-w-[90px] flex-col items-center justify-center rounded-[12px] border px-2 py-3 transition-colors",
                isActive
                  ? "border-[#d4af37] bg-[linear-gradient(135deg,rgba(212,175,55,0.18)_0%,rgba(0,0,0,0.5)_100%)] shadow-[0_2px_10px_rgba(212,175,55,0.1)]"
                  : "border-[#d4af37]/40 bg-transparent hover:border-[#d4af37]/60"
              )}
            >
              <span className={cn("mb-2", isActive ? "text-[#d4af37]" : "text-[#d4af37] opacity-90")}>
                {cat.icon}
              </span>
              <span className={cn("text-[0.65rem] font-medium leading-tight text-center whitespace-pre-line mb-0.5", isActive ? "text-[#d4af37]" : "text-[#e8e1d3]")}>
                {cat.name}
              </span>
              <span className={cn("text-[0.6rem]", isActive ? "text-[#d4af37]" : "text-[#a89b82]")}>
                ({cat.count})
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

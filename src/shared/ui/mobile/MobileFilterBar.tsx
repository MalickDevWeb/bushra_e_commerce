"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function MobileFilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const currentSort = searchParams.get("sort");

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

  const toggleSort = () => {
    let nextSort = "";
    if (!currentSort) nextSort = "price-asc";
    else if (currentSort === "price-asc") nextSort = "price-desc";
    
    router.push(pathname + "?" + createQueryString("sort", nextSort));
  };

  return (
    <section className="px-5 mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={currentCategory ? "Retirer le filtre de catégorie" : "Filtrer par catégorie"}
          onClick={() => {
            const nextCat = currentCategory ? "" : "encensoirs";
            router.push(pathname + "?" + createQueryString("category", nextCat));
          }}
          className={`flex items-center gap-1.5 rounded-md border ${currentCategory ? "border-[#d4af37] bg-[#d4af37]/10" : "border-[#d4af37]/40"} px-2.5 py-1.5 text-[0.75rem] text-[#e8e1d3] transition-colors`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          {currentCategory ? "Filtré" : "Filtrer"}
        </button>
        <button
          type="button"
          aria-label="Trier par prix"
          onClick={toggleSort}
          className={`flex items-center gap-1.5 rounded-md border ${currentSort ? "border-[#d4af37] bg-[#d4af37]/10" : "border-[#d4af37]/40"} px-2.5 py-1.5 text-[0.75rem] text-[#e8e1d3] transition-colors`}
        >
          Prix
          {currentSort === "price-asc" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-[#d4af37]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          )}
          {currentSort === "price-desc" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-[#d4af37]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>
      <button
        type="button"
        aria-label="Réinitialiser les filtres"
        onClick={() => router.push(pathname)}
        className="flex items-center gap-1.5 text-[0.75rem] text-[#a89b82] hover:text-[#d4af37] transition-colors"
      >
        Réinitialiser
      </button>
    </section>
  );
}

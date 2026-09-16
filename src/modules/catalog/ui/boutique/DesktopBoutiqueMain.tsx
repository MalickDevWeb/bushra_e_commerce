"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import type { Prisma } from "@prisma/client";
import { ROUTES } from "@/shared/constants/config";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";
import { AnimatedTabs } from "@/shared/ui/AnimatedTabs";
import { StoreBenefits, boutiqueBenefits } from "@/shared/ui/StoreBenefits";
import { DesktopBoutiqueResults } from "./DesktopBoutiqueResults";

type CatalogProduct = Prisma.ProductGetPayload<{ include: { category: true } }>;

export function DesktopBoutiqueMain({ products }: { products: CatalogProduct[] }) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("q")?.toLowerCase();
  const [sortBy, setSortBy] = useState("popular");
  let filteredProducts = products.filter((product) => !categoryFilter || product.category.slug === categoryFilter).filter((product) => !searchQuery || product.name.toLowerCase().includes(searchQuery));
  filteredProducts = [...filteredProducts].sort((first, second) => sortBy === "price-asc" ? first.price - second.price : sortBy === "price-desc" ? second.price - first.price : sortBy === "newest" ? new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime() : 0);

  return <div className="hidden lg:block"><DesktopSidebarShell>
    <section className="relative w-full h-[230px] flex flex-col justify-center px-16 border-b border-[#d4af37]/20 shrink-0 overflow-hidden"><div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" /><div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10" /><Image src="/images/hero_censer.jpg" alt="Background" fill priority sizes="(max-width: 1024px) 100vw, calc(100vw - 280px)" className="object-cover opacity-75 mix-blend-luminosity object-center scale-105" /></div><div className="relative z-20 max-w-[600px]"><h2 className="font-serif text-[42px] mb-3 text-[#d4af37] drop-shadow-md">Boutique</h2><p className="text-[#e8e1d3] font-medium mb-1">Choisissez l&apos;excellence.</p><p className="text-[#a89b82] text-sm leading-relaxed max-w-[450px]">Encensoirs, Mabkharas et pièces d&apos;exception en laiton massif.</p></div></section>
    <StoreBenefits benefits={boutiqueBenefits} layout="row" className="px-16 py-6 border-b border-[#d4af37]/10 flex justify-between shrink-0 bg-[#0c0a07]" />
    <section className="px-16 py-8 flex-1 flex flex-col"><div className="flex items-center justify-between mb-8"><AnimatedTabs tabs={[{ id: "", label: "Tous", href: ROUTES.shop }, { id: "encensoirs", label: "Encensoirs", href: `${ROUTES.shop}?category=encensoirs` }, { id: "bakhoor", label: "Bakhoor", href: `${ROUTES.shop}?category=bakhoor` }, { id: "parfums", label: "Parfums", href: `${ROUTES.shop}?category=parfums` }]} activeId={categoryFilter || ""} /><select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="appearance-none pl-4 pr-10 py-2 rounded-xl border border-[#d4af37]/30 text-[#e8e1d3] text-sm bg-[#0c0a07] focus:outline-none focus:border-[#d4af37]"><option value="popular">Populaires</option><option value="newest">Nouveautés</option><option value="price-asc">Prix croissant</option><option value="price-desc">Prix décroissant</option></select></div><DesktopBoutiqueResults products={filteredProducts} /></section>
  </DesktopSidebarShell></div>;
}

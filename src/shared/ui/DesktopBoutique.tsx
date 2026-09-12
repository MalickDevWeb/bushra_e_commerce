"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ROUTES } from "@/shared/constants/config";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";
import { useCart } from "@/shared/providers/CartProvider";
import { useFavorites } from "@/shared/providers/FavoritesProvider";

export function DesktopBoutique({ products }: { products: any[] }) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("q");
  
  let filteredProducts = categoryFilter 
    ? products.filter(p => p.category?.slug === categoryFilter || p.category === categoryFilter)
    : [...products];

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        {/* Hero Section */}
        <section className="relative w-full h-[300px] flex flex-col justify-center px-16 border-b border-[#d4af37]/20 shrink-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10" />
            <Image src="/images/hero_censer.jpg" alt="Background" fill className="object-cover opacity-60 mix-blend-overlay object-right" />
          </div>

          <div className="relative z-20 max-w-[600px]">
            <h2 className="font-serif text-5xl mb-4 text-[#e8e1d3]">
              Boutique
            </h2>
            <p className="text-[#e8e1d3] font-medium mb-1">
              Choisissez l&apos;excellence.
            </p>
            <p className="text-[#a89b82] text-sm leading-relaxed max-w-[450px]">
              Encensoirs, Mabkharas et pièces d&apos;exception en laiton massif.
            </p>
          </div>
        </section>

        {/* Features Row */}
        <section className="px-16 py-6 border-b border-[#d4af37]/10 flex justify-between shrink-0 bg-[#0c0a07]">
          {[
            { title: "Laiton massif", subtitle: "Premium", icon: "M20.25 10.5v3.75a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V10.5m16.5 0a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25m16.5 0v3.75m0-3.75v-3.75a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25v3.75" },
            { title: "Artisanat", subtitle: "D'exception", icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" },
            { title: "Qualité", subtitle: "Garantie", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
            { title: "Livraison rapide", subtitle: "Partout au Sénégal", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" }
          ].map((b, i) => (
            <div key={i} className={`flex items-center justify-center gap-4 flex-1 ${i !== 3 ? 'border-r border-[#d4af37]/20' : ''}`}>
              <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] bg-[#d4af37]/10 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d={b.icon} /></svg>
              </div>
              <div>
                <h5 className="text-[#e8e1d3] font-medium text-[11px] mb-0.5">{b.title}</h5>
                <p className="text-[#a89b82] text-[9px]">{b.subtitle}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Content Section */}
        <section className="px-16 py-8 flex-1 flex flex-col">
          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-4">
              <Link href={ROUTES.shop} className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-[#d4af37]/30 text-[#e8e1d3] text-sm hover:border-[#d4af37] transition-colors ${!categoryFilter ? 'bg-[#d4af37]/20 border-[#d4af37]' : 'bg-[#0c0a07]'}`}>
                Tous
              </Link>
              <Link href={`${ROUTES.shop}?category=encensoirs`} className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-[#d4af37]/30 text-[#e8e1d3] text-sm hover:border-[#d4af37] transition-colors ${categoryFilter === 'encensoirs' ? 'bg-[#d4af37]/20 border-[#d4af37]' : 'bg-[#0c0a07]'}`}>
                Encensoirs
              </Link>
              <Link href={`${ROUTES.shop}?category=bakhoor`} className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-[#d4af37]/30 text-[#e8e1d3] text-sm hover:border-[#d4af37] transition-colors ${categoryFilter === 'bakhoor' ? 'bg-[#d4af37]/20 border-[#d4af37]' : 'bg-[#0c0a07]'}`}>
                Bakhoor
              </Link>
              <Link href={`${ROUTES.shop}?category=parfums`} className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-[#d4af37]/30 text-[#e8e1d3] text-sm hover:border-[#d4af37] transition-colors ${categoryFilter === 'parfums' ? 'bg-[#d4af37]/20 border-[#d4af37]' : 'bg-[#0c0a07]'}`}>
                Parfums
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[#a89b82] text-sm">Trier par :</span>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#d4af37]/30 text-[#e8e1d3] text-sm hover:border-[#d4af37] transition-colors bg-[#0c0a07]">
                Populaires
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex-1 grid grid-cols-3 gap-6">
              {filteredProducts.length === 0 ? (
                <div className="col-span-3 py-20 text-center text-[#a89b82]">Aucun produit trouvé.</div>
              ) : (
                filteredProducts.map((p) => (
                  <div key={p.id} className="group border border-[#d4af37]/30 rounded-2xl p-4 bg-[#0c0a07] hover:border-[#d4af37]/60 transition-colors">
                    <Link href={`/produit/${p.id}`} className="block">
                      <div className="relative h-[220px] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
                        <Image src={p.image} alt={p.name} fill sizes="(max-width: 1200px) 33vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        {p.isNew && (
                          <span className="absolute top-3 left-3 bg-[#0a0a0a]/80 backdrop-blur border border-[#d4af37]/50 text-[#d4af37] text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            NOUVEAU
                          </span>
                        )}
                        <button 
                          onClick={(e) => { e.preventDefault(); toggleFavorite(p.id, p.name); }}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0a0a0a]/80 backdrop-blur border border-[#d4af37]/30 flex items-center justify-center text-[#a89b82] hover:text-[#d4af37] transition-colors"
                        >
                          <svg viewBox="0 0 24 24" fill={isFavorite(p.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                        </button>
                      </div>
                      <h4 className="font-serif text-[#e8e1d3] text-sm mb-1">{p.name}</h4>
                      <p className="text-[#a89b82] text-[10px] mb-3 capitalize">{p.category?.name || p.category}</p>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p className="text-[#d4af37] font-semibold text-sm">{p.price.toLocaleString("fr-FR")} FCFA</p>
                      <button 
                        onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, image: p.image })}
                        className="text-[10px] font-medium text-[#0a0a0a] bg-[#d4af37] hover:bg-[#e8c547] px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                        Ajouter
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Right column banner (visible in image) */}
            <div className="w-[300px] shrink-0">
               <div className="border border-[#d4af37]/30 rounded-2xl p-6 bg-[#0c0a07] flex flex-col h-full sticky top-0">
                  <div className="w-12 h-12 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-4 bg-[#d4af37]/10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                  </div>
                  <h4 className="font-serif text-lg text-[#e8e1d3] mb-2">Livraison rapide partout au Sénégal</h4>
                  <p className="text-[#a89b82] text-xs leading-relaxed mb-6">Paiement à la livraison ou Wave / Orange Money</p>
                  
                  <div className="mt-auto">
                    <div className="h-px w-full bg-[#d4af37]/20 mb-4"></div>
                    <button className="w-full flex items-center justify-between text-sm text-[#e8e1d3] group">
                      <span>Voir les conditions</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </DesktopSidebarShell>
    </div>
  );
}

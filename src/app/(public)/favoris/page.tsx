"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { useCart } from "@/shared/providers/CartProvider";
import { useFavorites } from "@/shared/providers/FavoritesProvider";
import { MOCK_PRODUCTS } from "@/shared/data/products";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export default function FavoritesPage() {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const favoriteProducts = MOCK_PRODUCTS.filter(p => favorites.includes(p.id));

  const content = (
    <div className="flex-1 flex flex-col p-4 lg:p-12">
      <h1 className="font-serif text-[2rem] lg:text-[2.5rem] text-[#e8e1d3] mb-8">
        Mes <span className="text-[#d4af37]">Favoris</span>
      </h1>

      {!isLoaded ? (
        <div className="flex-1 flex justify-center items-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#d4af37]"></div></div>
      ) : favoriteProducts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center border border-[#d4af37]/20 rounded-2xl bg-[#0c0a07] p-8 lg:p-10">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d4af37]/20 bg-[#d4af37]/5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-[#d4af37]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl text-[#e8e1d3] mb-2 text-center">Vous n'avez pas de favoris</h2>
          <p className="text-center text-[#a89b82] max-w-sm mb-8">
            Sauvegardez vos articles préférés en cliquant sur l'icône cœur.
          </p>
          <Link
            href={ROUTES.shop}
            className="rounded-full bg-[#d4af37] px-8 py-3 text-[0.95rem] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
          >
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pb-24 lg:pb-0">
          {favoriteProducts.map((p) => (
            <div key={p.id} className="group border border-[#d4af37]/30 rounded-2xl p-3 lg:p-4 bg-[#0c0a07] hover:border-[#d4af37]/60 transition-colors">
              <div className="relative h-[180px] lg:h-[220px] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <button 
                  onClick={() => toggleFavorite(p.id, p.name)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0a0a0a]/80 backdrop-blur border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
              <h4 className="font-serif text-[#e8e1d3] text-sm mb-1">{p.name}</h4>
              <p className="text-[#a89b82] text-[10px] mb-3">{p.category}</p>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                <p className="text-[#d4af37] font-semibold text-sm">{p.price.toLocaleString("fr-FR")} FCFA</p>
                <button 
                  onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, image: p.image })}
                  className="w-full lg:w-auto text-[10px] font-medium text-[#0a0a0a] bg-[#d4af37] hover:bg-[#e8c547] px-3 py-2 lg:py-1.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="hidden lg:block">
        <DesktopSidebarShell>
          {content}
        </DesktopSidebarShell>
      </div>
      <div className="lg:hidden">
        {content}
      </div>
    </>
  );
}


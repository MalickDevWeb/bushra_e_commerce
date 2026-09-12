"use client";

import Image from "next/image";
import { useCart } from "@/shared/providers/CartProvider";
import { MOCK_PRODUCTS } from "@/shared/data/products";

export function CollectionsProductGrid() {
  const { addToCart } = useCart();
  
  // Since Collections has a slightly different layout (larger cards, 2 grid), we just display a subset.
  // In a real app we would apply Collections-specific filters.
  const displayProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <section className="px-5 mb-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {displayProducts.map((product) => (
          <div key={product.id} className="relative rounded-[16px] border border-[#d4af37]/30 bg-transparent p-3 lg:p-4 transition-transform hover:-translate-y-1 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5">
            <button className="absolute right-4 top-4 z-10 text-[#d4af37] hover:text-[#faf7ef] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 lg:h-6 lg:w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            {product.isNew && (
              <span className="absolute left-4 top-4 z-10 rounded border border-[#d4af37]/50 bg-[#1a1405]/80 px-2 py-0.5 text-[0.65rem] font-bold text-[#d4af37]">
                NOUVEAU
              </span>
            )}
            <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-[10px] bg-white/5">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            </div>
            <h3 className="text-[0.95rem] lg:text-[1.1rem] font-medium text-[#e8e1d3] mt-3 mb-1">{product.name}</h3>
            <p className="mb-4 text-[1rem] lg:text-[1.1rem] font-semibold text-[#d4af37]">{product.price.toLocaleString("fr-FR")} FCFA</p>
            
            <button 
              onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37]/40 py-2.5 text-[0.8rem] font-medium text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#0a0a0a]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

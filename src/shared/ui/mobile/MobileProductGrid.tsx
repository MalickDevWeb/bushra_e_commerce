"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/shared/providers/CartProvider";
import { useFavorites } from "@/shared/providers/FavoritesProvider";

export function MobileProductGrid({ products }: { products: any[] }) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const sortFilter = searchParams.get("sort");
  const searchQuery = searchParams.get("q");

  let filteredProducts = [...products];

  if (categoryFilter) {
    filteredProducts = filteredProducts.filter((p) => p.category?.slug === categoryFilter || p.category === categoryFilter);
  }
  
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  if (sortFilter === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortFilter === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="px-5 mb-6">
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-[#a89b82]">Aucun produit trouvé pour ces filtres.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative rounded-[12px] border border-[#d4af37]/20 bg-[#0c0a07] p-3 transition-transform hover:-translate-y-1 hover:border-[#d4af37]/50">
              <button 
                onClick={() => toggleFavorite(product.id, product.name)}
                className="absolute right-3 top-3 z-10 text-[#d4af37] hover:text-[#faf7ef] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill={isFavorite(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
              {product.isNew && (
                <span className="absolute left-3 top-3 z-10 rounded border border-[#d4af37]/50 bg-[#1a1405] px-2 py-0.5 text-[0.65rem] font-bold tracking-wider text-[#d4af37]">
                  NOUVEAU
                </span>
              )}
              <Link href={`/produit/${product.id}`} className="block">
                <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-[8px] bg-white/5">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <h3 className="text-[0.95rem] font-medium text-[#e8e1d3] mb-1">{product.name}</h3>
                <p className="mb-3 text-[1.05rem] font-semibold text-[#d4af37]">{product.price.toLocaleString("fr-FR")} FCFA</p>
              </Link>
              
              <button 
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37]/40 py-2.5 text-[0.8rem] font-medium text-[#e8e1d3] transition-colors hover:bg-[#d4af37] hover:text-[#0a0a0a]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

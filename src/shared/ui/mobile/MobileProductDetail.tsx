"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useCart } from "@/shared/providers/CartProvider";
import { useFavorites } from "@/shared/providers/FavoritesProvider";
import { ROUTES } from "@/shared/constants/config";

export function MobileProductDetail({ product }: { product: any }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!product) return <div className="text-white p-10 mt-10">Produit non trouvé</div>;

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity });
  };

  return (
    <div className="w-full lg:hidden pb-32">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#090705]/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-[#d4af37]/10">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center bg-[#14120f] border border-[#d4af37]/30 rounded-full text-[#d4af37]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>
        <div className="flex gap-3">
          <button onClick={() => toggleFavorite(product.id, product.name)} className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${isFavorite(product.id) ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37]' : 'bg-[#14120f] border-[#d4af37]/30 text-[#e8e1d3]'}`}>
            <svg viewBox="0 0 24 24" fill={isFavorite(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
          </button>
        </div>
      </div>

      {/* Image Area */}
      <div className="relative w-full aspect-[4/5] bg-white/5 mt-[73px]">
        <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        {product.isNew && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#d4af37] text-[#090705] text-xs font-bold uppercase tracking-widest rounded-full">Nouveau</div>
        )}
      </div>

      {/* Product Details */}
      <div className="px-5 py-6">
        <h1 className="text-3xl font-serif text-[#e8e1d3] mb-2 leading-tight">{product.name}</h1>
        <div className="text-2xl font-semibold text-[#d4af37] mb-4">{product.price.toLocaleString("fr-FR")} FCFA</div>
        
        <p className="text-[#a89b82] text-sm leading-relaxed mb-6">
          Découvrez notre {product.name}, soigneusement préparé selon la tradition sénégalaise. 
          Un véritable voyage olfactif au cœur de Dakar avec des notes envoûtantes et durables.
        </p>

        {/* Accodions / Info */}
        <div className="flex flex-col border-t border-[#d4af37]/10">
          {[
            { title: "Description Détaillée", content: "Nos thiourayes sont composés de bois rares, d'encens de qualité supérieure et d'huiles essentielles précieuses. Chaque grain est infusé pendant des mois pour garantir une tenue exceptionnelle." },
            { title: "Conseils d'Utilisation", content: "Déposer une petite quantité sur un charbon ardent recouvert d'un peu de cendre. Ne pas exposer directement à la flamme." },
          ].map((item, i) => (
            <div key={i} className="border-b border-[#d4af37]/10 py-4">
              <h3 className="text-[#e8e1d3] font-medium text-sm mb-2">{item.title}</h3>
              <p className="text-[#a89b82] text-xs leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-[4.5rem] left-0 right-0 p-4 bg-[#090705]/90 backdrop-blur-lg border-t border-[#d4af37]/20 z-40 flex items-center gap-4">
        <div className="flex items-center border border-[#d4af37]/40 rounded-lg bg-[#14120f] h-12">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 flex items-center justify-center text-[#e8e1d3]">-</button>
          <span className="w-8 text-center text-[#e8e1d3] font-medium">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="w-10 flex items-center justify-center text-[#e8e1d3]">+</button>
        </div>
        <button onClick={handleAddToCart} className="flex-1 h-12 bg-gradient-to-r from-[#d4af37] to-[#c59b32] text-[#090705] font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
          Ajouter
        </button>
      </div>
    </div>
  );
}

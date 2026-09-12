"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/shared/providers/CartProvider";
import { useFavorites } from "@/shared/providers/FavoritesProvider";
import { ROUTES } from "@/shared/constants/config";

export function DesktopProduct({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) return <div className="text-white p-10">Produit non trouvé</div>;

  // Mock secondary images for the gallery
  const gallery = [
    product.image,
    product.image, 
    product.image,
    product.image,
  ];

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity });
  };

  return (
    <div className="hidden lg:flex w-full min-h-screen bg-[#090705]">
      <main className="flex-1 max-w-[1600px] mx-auto px-10 py-12">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-[#a89b82] mb-10">
          <Link href={ROUTES.home} className="hover:text-[#d4af37] transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href={ROUTES.shop} className="hover:text-[#d4af37] transition-colors">Boutique</Link>
          <span className="mx-2">/</span>
          <Link href={`${ROUTES.shop}?category=${product.category?.slug || product.category}`} className="hover:text-[#d4af37] transition-colors capitalize">{product.category?.name || product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-[#e8e1d3] font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-2 gap-16">
          
          {/* Left: Images */}
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 w-24 shrink-0">
              {gallery.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === img ? 'border-[#d4af37]' : 'border-transparent hover:border-[#d4af37]/50'}`}
                >
                  <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-[#d4af37]/20">
              <Image src={activeImage} alt={product.name} fill className="object-cover" priority />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col py-4">
            {product.isNew && (
              <span className="text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-3 inline-block">Nouveau</span>
            )}
            
            <h1 className="text-4xl font-serif text-[#e8e1d3] mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#d4af37]/10">
              <span className="text-3xl text-[#d4af37] font-semibold">{product.price.toLocaleString("fr-FR")} FCFA</span>
              <span className="px-3 py-1 bg-[#2ecc71]/10 text-[#2ecc71] rounded text-sm font-medium">En stock</span>
            </div>
            
            <p className="text-[#a89b82] text-sm leading-relaxed mb-8">
              Découvrez notre {product.name}, soigneusement préparé selon la tradition sénégalaise.
              Ce Thiouraye est conçu pour parfumer votre intérieur avec des notes envoûtantes et durables.
              Un véritable voyage olfactif au cœur de Dakar.
            </p>

            {/* Quantity and Actions */}
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border border-[#d4af37]/30 rounded-lg bg-[#14120f]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-[#e8e1d3] hover:text-[#d4af37] transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center text-[#e8e1d3] font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-[#e8e1d3] hover:text-[#d4af37] transition-colors"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#c59b32] text-[#090705] font-semibold text-lg rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Ajouter au panier
              </button>

              <button 
                onClick={() => toggleFavorite(product.id, product.name)}
                className={`w-14 h-14 border rounded-lg flex items-center justify-center transition-colors ${isFavorite(product.id) ? 'bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37]' : 'border-[#d4af37]/30 bg-[#14120f] text-[#a89b82] hover:text-[#e8e1d3] hover:border-[#d4af37]'}`}
              >
                <svg viewBox="0 0 24 24" fill={isFavorite(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            {/* Accodions / Info */}
            <div className="flex flex-col border-t border-[#d4af37]/10">
              {[
                { title: "Description Détaillée", content: "Nos thiourayes sont composés de bois rares, d'encens de qualité supérieure et d'huiles essentielles précieuses. Chaque grain est infusé pendant des mois pour garantir une tenue exceptionnelle." },
                { title: "Conseils d'Utilisation", content: "Déposer une petite quantité sur un charbon ardent recouvert d'un peu de cendre. Ne pas exposer directement à la flamme pour préserver toutes les notes olfactives." },
                { title: "Livraison & Retours", content: "Livraison disponible partout au Sénégal en 24h-48h. Paiement à la livraison ou par mobile money." },
              ].map((item, i) => (
                <div key={i} className="border-b border-[#d4af37]/10 py-5">
                  <h3 className="text-[#e8e1d3] font-medium mb-3">{item.title}</h3>
                  <p className="text-[#a89b82] text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

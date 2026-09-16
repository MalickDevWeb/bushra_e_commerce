import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Prisma } from "@prisma/client";

type CatalogProduct = Prisma.ProductGetPayload<{ include: { category: true } }>;

interface DesktopHomeBestSellersProps {
  products: CatalogProduct[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string, name: string) => void;
  addToCart: (product: { id: string; name: string; price: number; image: string }) => void;
}

export function DesktopHomeBestSellers({ products, isFavorite, toggleFavorite, addToCart }: DesktopHomeBestSellersProps) {
  if (products.length === 0) return null;

  return (
    <section className="relative border-b border-[#d4af37]/10 bg-[#070605] px-16 py-24">
      <div className="absolute inset-0 z-0 bg-[url('/images/pattern-bg.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 flex flex-col items-center text-center">
          <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]"><span className="h-[1px] w-8 bg-[#d4af37]" />Les Incontournables<span className="h-[1px] w-8 bg-[#d4af37]" /></span>
          <h3 className="font-serif text-5xl tracking-wide text-[#e8e1d3]">Nos Best-Sellers</h3>
        </motion.div>
        <div className="grid grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }} whileHover={{ y: -10 }} className="group rounded-2xl border border-[#d4af37]/10 bg-gradient-to-b from-[#0f0c0a] to-[#0a0806] p-4 transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)]">
              <Link href={`/produit/${product.id}`} className="block">
                <div className="relative mb-5 h-[250px] overflow-hidden rounded-xl bg-[#1a1a1a]"><Image src={product.image ?? "/images/product_1.jpg"} alt={product.name} fill sizes="(max-width: 1200px) 25vw, 20vw" className="object-cover transition-transform duration-700 ease-out group-hover:rotate-1 group-hover:scale-110" /><button onClick={(event) => { event.preventDefault(); toggleFavorite(product.id, product.name); }} className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#0a0a0a]/60 text-[#a89b82] backdrop-blur-md transition-all hover:scale-110 hover:bg-[#0a0a0a] hover:text-[#d4af37]"><Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-[#d4af37] text-[#d4af37]" : ""}`} /></button></div>
                <h4 className="mb-1 font-serif text-[16px] text-[#e8e1d3] transition-colors group-hover:text-[#d4af37]">{product.name}</h4>
                <p className="mb-4 text-[11px] uppercase tracking-wider text-[#a89b82]">{product.category.name}</p>
              </Link>
              <div className="flex items-center justify-between"><p className="text-[16px] font-semibold text-[#d4af37]">{product.price.toLocaleString("fr-FR")} FCFA</p><button onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image ?? "/images/product_1.jpg" })} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] transition-all duration-300 hover:scale-110 hover:bg-[#d4af37] hover:text-[#0a0a0a]"><ShoppingBag className="h-4 w-4" /></button></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Prisma } from "@prisma/client";
import { useCart } from "@/shared/providers/CartProvider";
import { useFavorites } from "@/shared/providers/FavoritesProvider";
import { Heart } from "lucide-react";
import { DesktopHomeHero } from "./DesktopHomeHero";
import { DesktopHomeBenefits } from "./DesktopHomeBenefits";
import { DesktopHomeBestSellers } from "./DesktopHomeBestSellers";
import { DesktopHomeHeritage } from "./DesktopHomeHeritage";
import { DesktopHomeTestimonials } from "./DesktopHomeTestimonials";
import { DesktopHomeCollections } from "./DesktopHomeCollections";

type CatalogProduct = Prisma.ProductGetPayload<{ include: { category: true } }>;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export function DesktopHome({ products = [] }: { products?: CatalogProduct[] }) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const bestSellers = products.slice(0, 4);

  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        
        <DesktopHomeHero />

        <DesktopHomeBenefits />

        <DesktopHomeBestSellers products={bestSellers} isFavorite={isFavorite} toggleFavorite={toggleFavorite} addToCart={addToCart} />

        <DesktopHomeHeritage staggerContainer={staggerContainer} textVariant={textVariant} />

        <DesktopHomeTestimonials />

        <DesktopHomeCollections />

        {/* SOCIAL MEDIA & NEWSLETTER SECTION */}
        <section className="px-16 py-24 bg-[#050403] border-b border-[#d4af37]/10 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left side: Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <span className="text-[#d4af37] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Rejoignez la communauté</span>
              <h3 className="font-serif text-[42px] leading-tight text-[#e8e1d3] mb-6">
                Suivez nos moments <br/><span className="text-[#d4af37] italic">précieux</span> sur les réseaux
              </h3>
              <p className="text-[#a89b82] leading-relaxed mb-10 max-w-md">
                Découvrez nos nouveautés en avant-première, plongez dans les coulisses de notre artisanat et partagez votre amour du parfum avec la famille Bushra.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: InstagramIcon, label: "Instagram", link: "#" },
                  { icon: FacebookIcon, label: "Facebook", link: "#" },
                  { icon: TwitterIcon, label: "Twitter", link: "#" }
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right side: Newsletter / Instagram Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex-1 relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border-4 border-[#1a1a1a] shadow-2xl group">
                <Image src="/images/product_2.jpg" alt="Instagram Post" fill sizes="(max-width: 768px) 100vw, 448px" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-500">
                  <div className="flex gap-6 text-white">
                    <div className="flex items-center gap-2"><Heart className="w-6 h-6 fill-white" /> 1.2k</div>
                    <div className="flex items-center gap-2"><InstagramIcon className="w-6 h-6" /> Suivre</div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
                      <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                        <span className="text-[10px] font-bold text-white">B</span>
                      </div>
                    </div>
                    <span className="text-white text-sm font-medium drop-shadow-md">@bushra.sn</span>
                  </div>
                  <p className="text-white/80 text-xs drop-shadow-md">La magie opère quand le Bakhoor Royal rencontre le feu... ✨ #Bushra #Thiouraye #Dakar</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#d4af37]/20 backdrop-blur-md border border-[#d4af37]/40 rounded-2xl flex items-center justify-center -rotate-12 shadow-lg"
              >
                <Heart className="w-10 h-10 text-[#d4af37] fill-[#d4af37]" />
              </motion.div>
            </motion.div>
            
          </div>
        </section>

      </DesktopSidebarShell>
    </div>
  );
}

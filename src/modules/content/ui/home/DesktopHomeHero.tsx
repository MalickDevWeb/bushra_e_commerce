import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import { ROUTES } from "@/shared/constants/config";
import { useRef } from "react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

export function DesktopHomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={heroRef} className="relative flex h-[520px] w-full shrink-0 flex-col justify-center overflow-hidden border-b border-[#d4af37]/20 px-16">
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 z-10 bg-[#d4af37]/10 mix-blend-color" />
        <div className="absolute right-[-10%] top-0 bottom-0 w-[60%]">
          <Image src="/video/Smoke_rising_from_incense_burner_20260912105648.gif" alt="Bushra Animation" fill priority unoptimized className="scale-110 object-cover opacity-90 mix-blend-screen" />
        </div>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-20 max-w-[650px] pt-8">
        <motion.div variants={textVariant} className="mb-4 flex items-center gap-3">
          <div className="h-[1px] w-12 bg-[#d4af37]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">Maison de Parfum</span>
        </motion.div>
        <motion.h2 variants={textVariant} className="mb-6 font-serif text-[64px] leading-[1.05] text-[#d4af37] drop-shadow-2xl" style={{ textShadow: "0 10px 30px rgba(212,175,55,0.2)" }}>
          Bienvenue chez Bushra
        </motion.h2>
        <motion.p variants={textVariant} className="mb-4 flex items-center gap-2 text-xl font-light text-[#e8e1d3]">
          <Sparkles className="h-5 w-5 text-[#d4af37]" /> L&apos;art ancestral au service de votre bien-être
        </motion.p>
        <motion.p variants={textVariant} className="mb-10 max-w-[500px] text-sm leading-relaxed text-[#a89b82]">
          Découvrez notre collection exclusive de bakhoors, encens et parfums. Une expérience olfactive majestueuse conçue pour sublimer votre quotidien.
        </motion.p>
        <motion.div variants={textVariant} className="flex items-center gap-8">
          <Link href={ROUTES.shop} className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-[#0a0a0a]">
            <span className="relative z-10 flex items-center gap-2">Découvrir la boutique <ShoppingBag className="h-4 w-4" /></span>
            <span className="absolute inset-0 z-0 -translate-x-full bg-white/30 transition-transform duration-500 ease-out group-hover:translate-x-0" />
          </Link>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#a89b82]">
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex h-12 w-8 justify-center rounded-full border border-[#d4af37]/30 p-2">
              <motion.div animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="h-2 w-1 rounded-full bg-[#d4af37]" />
            </motion.div>
            <span className="hidden opacity-60 md:block">Glisser pour découvrir</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
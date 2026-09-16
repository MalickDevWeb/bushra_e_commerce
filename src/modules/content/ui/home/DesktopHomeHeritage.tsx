import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { ROUTES } from "@/shared/constants/config";

interface DesktopHomeHeritageProps {
  staggerContainer: Variants;
  textVariant: Variants;
}

export function DesktopHomeHeritage({ staggerContainer, textVariant }: DesktopHomeHeritageProps) {
  return (
    <section className="flex items-center gap-20 overflow-hidden border-b border-[#d4af37]/10 bg-[#0a0a0a] px-16 py-32">
      <motion.div initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }} whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }} className="relative h-[500px] flex-1 overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 10, ease: "linear" }} className="absolute inset-0"><Image src="/images/hero_censer.jpg" alt="Héritage Bushra" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></motion.div>
        <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay" />
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(10,10,10,0.8)]" />
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="flex-1">
        <motion.span variants={textVariant} className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">Notre Héritage</motion.span>
        <motion.h3 variants={textVariant} className="mb-6 font-serif text-[48px] leading-[1.1] text-[#e8e1d3]">L&apos;art subtil du <br /><span className="font-light italic text-[#d4af37] drop-shadow-lg">Thiouraye</span></motion.h3>
        <motion.p variants={textVariant} className="mb-8 text-base leading-loose text-[#a89b82]">Chez Bushra, nous perpétuons une tradition ancestrale en sélectionnant les bois les plus nobles et les résines les plus pures. Chaque création est le fruit d&apos;un savoir-faire artisanal, pensé pour transformer l&apos;atmosphère de votre maison en un véritable sanctuaire de paix et d&apos;élégance.</motion.p>
        <motion.ul variants={textVariant} className="mb-10 space-y-5">{["Ingrédients 100% naturels et pures", "Fabrication respectueuse des traditions", "Senteurs durables pour votre intérieur"].map((item) => <li key={item} className="flex items-center gap-4 text-sm text-[#e8e1d3]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37]/20"><Star className="h-3 w-3 fill-[#d4af37] text-[#d4af37]" /></span>{item}</li>)}</motion.ul>
        <motion.div variants={textVariant}><Link href={ROUTES.about} className="group inline-flex items-center gap-3 font-medium text-[#d4af37]"><span className="relative">Découvrir notre histoire<span className="absolute -bottom-1 left-0 right-0 h-[1px] origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover:scale-x-100" /></span><span className="h-[1px] w-8 bg-[#d4af37] transition-all group-hover:w-12" /></Link></motion.div>
      </motion.div>
    </section>
  );
}
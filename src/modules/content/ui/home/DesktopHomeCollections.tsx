import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ROUTES } from "@/shared/constants/config";

const collections = [
  { title: "Bakhoors", subtitle: "Envoûtants et raffinés", img: "/images/product_2.jpg" },
  { title: "Encensoirs", subtitle: "Traditionnels et modernes", img: "/images/product_1.jpg" },
  { title: "Parfums", subtitle: "Essences d'exception", img: "/images/product_2.jpg" },
  { title: "Coffrets", subtitle: "Pour toutes occasions", img: "/images/product_1.jpg" },
];

export function DesktopHomeCollections() {
  return (
    <section className="flex flex-col items-center bg-[#0a0a0a] px-16 py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 flex flex-col items-center text-center"><h3 className="font-serif text-4xl text-[#e8e1d3]">Explorez nos univers</h3><p className="mt-3 text-sm text-[#a89b82]">Trouvez l&apos;essence qui correspond à votre humeur</p></motion.div>
      <div className="grid w-full grid-cols-4 gap-6">{collections.map((collection, index) => <motion.div key={collection.title} initial={{ opacity: 0, scale: 0.9, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }} className="h-full"><Link href={ROUTES.collections} className="group relative block h-[280px] overflow-hidden rounded-3xl border border-[#d4af37]/20 shadow-lg"><motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="absolute inset-0"><Image src={collection.img} alt={collection.title} fill sizes="(max-width: 1200px) 25vw, 20vw" className="object-cover" /></motion.div><div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" /><div className="absolute inset-0 flex translate-y-4 flex-col items-center justify-end p-6 text-center transition-transform duration-500 group-hover:translate-y-0"><h4 className="mb-2 font-serif text-3xl text-[#d4af37] drop-shadow-md">{collection.title}</h4><p className="text-xs font-medium tracking-wide text-[#e8e1d3] opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">{collection.subtitle}</p><div className="mt-4 h-[1px] w-8 scale-x-0 bg-[#d4af37] transition-transform delay-200 duration-500 group-hover:scale-x-100" /></div></Link></motion.div>)}</div>
    </section>
  );
}
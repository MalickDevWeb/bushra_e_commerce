import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Aminata N.", text: "Le meilleur Thiouraye que j'ai pu acheter à Dakar. L'odeur reste toute la journée et apaise vraiment l'esprit." },
  { name: "Fatou Diop", text: "J'ai commandé un encensoir en laiton et un coffret bakhoor. La présentation était sublime, qualité exceptionnelle." },
  { name: "Seynabou T.", text: "Service client au top ! Livraison rapide et produit exactement comme décrit. Je recommanderai !" },
];

export function DesktopHomeTestimonials() {
  return (
    <section className="relative overflow-hidden border-b border-[#d4af37]/10 bg-[#070605] px-16 py-24">
      <div className="absolute -right-[200px] -top-[200px] z-0 h-[600px] w-[600px] rounded-full bg-[#d4af37]/5 blur-[100px]" />
      <div className="relative z-10 mb-16 flex flex-col items-center text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">Témoignages</motion.span>
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl text-[#e8e1d3]">Ce que disent nos clients</motion.h3>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 h-px bg-[#d4af37]" />
      </div>
      <div className="relative z-10 grid grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div key={review.name} initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }} whileHover={{ y: -5 }} className="relative rounded-3xl border border-[#d4af37]/20 bg-[#0a0a0a]/80 p-8 shadow-xl backdrop-blur transition-colors hover:border-[#d4af37]/60">
            <div className="absolute -top-5 left-8 -rotate-12 text-[#d4af37] opacity-30"><svg className="h-12 w-12" fill="currentColor" viewBox="0 0 32 32"><path d="M10.667 18.667c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333v10.667h-5.333v-7.333h2zm16 0c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333v10.667h-5.333v-7.333h2z" /></svg></div>
            <div className="mb-5 flex gap-1">{[0, 1, 2, 3, 4].map((star) => <motion.div key={star} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.2 + 0.3 + star * 0.1, type: "spring" }}><Star className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" /></motion.div>)}</div>
            <p className="mb-8 text-[13px] italic leading-relaxed text-[#a89b82]">&quot;{review.text}&quot;</p>
            <div className="flex items-center gap-4 border-t border-[#d4af37]/10 pt-4"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#a87b27] font-serif text-lg font-bold text-[#0a0a0a]">{review.name.charAt(0)}</div><div><h5 className="text-sm font-medium text-[#e8e1d3]">{review.name}</h5><span className="text-[10px] uppercase tracking-wider text-[#d4af37]">Acheteur vérifié</span></div></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
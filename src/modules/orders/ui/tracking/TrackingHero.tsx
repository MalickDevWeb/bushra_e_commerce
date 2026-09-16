import Image from "next/image";

export function TrackingHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-8 pb-6 min-h-[220px]">
      <div className="absolute right-[-20px] top-0 h-[250px] w-[250px] opacity-80 z-0 pointer-events-none">
        <Image 
          src="/images/hero_censer.jpg" 
          alt="Suivi Censer" 
          fill 
          priority 
          className="object-cover object-right"
          sizes="250px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 pt-4">
        <h1 className="font-serif text-[2.8rem] leading-none text-[#faf7ef] mb-3">
          Suivi <span className="text-[#d4af37]">de commande</span>
        </h1>
        <p className="max-w-[280px] text-[0.85rem] leading-[1.4] text-[#a89b82]">
          Suivez en temps réel l&apos;état de votre commande.
        </p>
      </div>
    </section>
  );
}

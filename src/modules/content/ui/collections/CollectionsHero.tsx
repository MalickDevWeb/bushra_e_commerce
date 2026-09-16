import Image from "next/image";

export function CollectionsHero() {
  return (
    <section className="relative min-h-[350px] overflow-hidden px-5 pt-12 pb-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_censer.jpg" 
          alt="Collections Censer" 
          fill 
          priority 
          className="object-cover object-center opacity-70"
          sizes="(max-width: 1024px) 100vw, calc(100vw - 280px)"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 pt-4 max-w-[280px]">
        <h1 className="font-serif text-[3rem] leading-none text-[#faf7ef] mb-4">
          Collections
        </h1>
        <p className="text-[0.95rem] leading-[1.4] text-[#d6c8ae]">
          Découvrez l&apos;univers Bushra : <br/>
          encensoirs, mabkharas et pièces d&apos;exception en laiton massif.
        </p>
      </div>
    </section>
  );
}

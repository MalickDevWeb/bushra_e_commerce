"use client";

import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";

export function MobileHero() {
  return (
    <section className="relative min-h-[400px] overflow-hidden px-5 pt-8 pb-10 flex flex-col justify-end">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0 bg-[#000000]">
        <Image 
          src="/video/Smoke_rising_from_incense_burner_20260912105648.gif" 
          alt="Bushra Animation" 
          fill 
          priority 
          unoptimized
          className="object-contain object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="relative z-10">
        <p className="text-[#d4af37] text-[10px] font-medium tracking-[0.2em] uppercase mb-2">
          Bienvenue chez Bushra
        </p>
        <h1 className="font-serif text-4xl mb-4 text-[#e8e1d3] leading-[1.1]">
          L&apos;art du parfum<br />
          <span className="text-[#d4af37]">au service de votre bien-être</span>
        </h1>
        <p className="max-w-[280px] text-xs leading-relaxed text-[#d6c8ae] mb-6">
          Découvrez notre collection exclusive de bakhoors, encens et parfums inspirés de la tradition orientale.
        </p>
        <Link href={ROUTES.shop} className="inline-flex items-center gap-2 bg-[#e8c547] text-[#0a0a0a] font-semibold px-6 py-3 rounded-full text-xs">
          Découvrir la boutique
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </Link>
      </div>
    </section>
  );
}

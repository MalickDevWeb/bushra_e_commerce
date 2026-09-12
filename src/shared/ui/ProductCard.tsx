"use client";

import Image from "next/image";
import { useState } from "react";

import { formatCurrency } from "@/utils/number/formatCurrency";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  tag?: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
}

export function ProductCard({
  name,
  price,
  image,
  tag,
  rating = 0,
  reviews = 0,
  isNew = false,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating));

  return (
    <article className="overflow-hidden rounded-[22px] border border-[#c9a227]/30 bg-[linear-gradient(180deg,#1b130b_0%,#0c0a08_100%)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
      <div className="relative">
        <div className="absolute left-3 top-3 z-10 rounded-full border border-[#d4af37]/60 bg-[#111111]/70 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#f5d67a] backdrop-blur-sm">
          {tag ?? (isNew ? "NOUVEAU" : "BEST-SELLER")}
        </div>
        <button
          type="button"
          aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          onClick={() => setIsFavorite((prev) => !prev)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#0a0a0a]/50 text-[#f4d478] backdrop-blur-sm transition-colors hover:bg-[#0a0a0a]/75"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        <div className="relative h-[210px] w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 360px"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,207,77,0.25),transparent_30%)]" />
        </div>
      </div>

      <div className="space-y-3 p-3.5 pb-4">
        <h3 className="text-[1.05rem] font-medium leading-snug text-[#f8f4ec]">{name}</h3>

        <div className="flex items-center gap-1 text-[11px] text-[#f3d57a]">
          {stars.map((filled, index) => (
            <svg
              key={`${name}-${index}`}
              viewBox="0 0 20 20"
              className="h-3.5 w-3.5"
              fill={filled ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.25"
            >
              <path d="M10 1.8l2.38 4.82 5.32.77-3.85 3.75.91 5.28L10 0.25 5.24 16.42l.91-5.28L2.3 7.39l5.32-.77L10 1.8z" />
            </svg>
          ))}
          <span className="ml-1 text-[#d5c39b]">({reviews})</span>
        </div>

        <p className="text-[1.05rem] font-semibold text-[#f3d57a]">
          {formatCurrency(price)} FCFA
        </p>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#d4af37]/35 bg-[linear-gradient(180deg,#f6e1a5_0%,#d2a525_100%)] px-3 py-2.5 text-sm font-medium text-[#1a1208] shadow-[0_8px_20px_rgba(201,162,39,0.25)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l2.4 9.2a1 1 0 001 .8H17a1 1 0 001-.76L20 7H7" />
            <circle cx="10" cy="17.5" r="1.5" />
            <circle cx="17" cy="17.5" r="1.5" />
          </svg>
          Ajouter au panier
        </button>
      </div>
    </article>
  );
}

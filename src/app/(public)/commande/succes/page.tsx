"use client";

import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";

export default function CheckoutSuccessPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#d4af37]/10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12 text-[#d4af37]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h1 className="font-serif text-[2.5rem] lg:text-[3.5rem] leading-none text-[#faf7ef] mb-6">
        Commande <span className="text-[#d4af37]">Confirmée</span>
      </h1>
      
      <p className="text-[1rem] leading-[1.6] text-[#e8e1d3] max-w-lg mb-2">
        Merci pour votre confiance ! Votre commande a été enregistrée avec succès. 
        Notre équipe va la préparer avec le plus grand soin.
      </p>
      
      <p className="text-[0.9rem] text-[#a89b82] mb-10">
        Numéro de commande : <span className="font-mono text-[#d4af37]">#{orderNumber}</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Link
          href={ROUTES.shop}
          className="flex-1 rounded-full bg-[#d4af37] px-8 py-3.5 text-[0.95rem] font-semibold text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          Retour à la boutique
        </Link>
        <Link
          href={ROUTES.tracking}
          className="flex-1 rounded-full border border-[#d4af37] bg-transparent px-8 py-3.5 text-[0.95rem] font-semibold text-[#d4af37] transition-colors hover:bg-[#d4af37]/10"
        >
          Suivre ma commande
        </Link>
      </div>
    </div>
  );
}

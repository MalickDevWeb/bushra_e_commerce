"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { useCart } from "@/shared/providers/CartProvider";
import { DesktopCart } from "@/shared/ui/DesktopCart";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <DesktopCart />
      
      <div className="lg:hidden mx-auto max-w-7xl px-4 py-8 pb-32">
        <h1 className="font-serif text-[2rem] text-[#e8e1d3] mb-8">
          Mon <span className="text-[#d4af37]">Panier</span>
        </h1>

        {!isLoaded ? (
          <div className="min-h-[40vh] flex justify-center items-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#d4af37]"></div></div>
        ) : items.length === 0 ? (
          <div className="flex min-h-[40vh] flex-col items-center justify-center px-4">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d4af37]/20 bg-[#d4af37]/5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-10 w-10 text-[#d4af37]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
            </div>
            <h2 className="font-serif text-[1.5rem] text-[#e8e1d3]">Votre panier est vide</h2>
            <p className="mt-2 text-center text-[#a89b82] max-w-md">
              Découvrez nos collections exceptionnelles d'encensoirs et de parfums.
            </p>
            <Link
              href={ROUTES.shop}
              className="mt-8 rounded-full bg-[#d4af37] px-8 py-3 text-[0.95rem] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
            >
              Découvrir la boutique
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {/* Cart Items */}
            <div className="flex-1 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-[#d4af37]/20 bg-[#0c0a07]">
                  <div className="relative h-24 w-24 shrink-0 rounded-lg overflow-hidden bg-white/5">
                    <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-[#e8e1d3] text-[1.1rem]">{item.name}</h3>
                        <p className="text-[#d4af37] font-medium mt-1">{item.price.toLocaleString("fr-FR")} FCFA</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-[#a89b82] hover:text-[#ff6b6b] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center rounded-full border border-[#d4af37]/30 bg-transparent px-3 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-[#e8e1d3] px-2 hover:text-[#d4af37]"
                        >-</button>
                        <span className="text-[#e8e1d3] w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-[#e8e1d3] px-2 hover:text-[#d4af37]"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full">
              <div className="rounded-xl border border-[#d4af37]/30 bg-[#0c0a07] p-5">
                <h3 className="font-serif text-[1.2rem] text-[#e8e1d3] mb-5">Résumé de la commande</h3>
                
                <div className="flex flex-col gap-3 text-[#a89b82] text-sm">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>{totalPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison</span>
                    <span>Calculé ensuite</span>
                  </div>
                  <div className="h-[1px] w-full bg-[#d4af37]/20 my-2"></div>
                  <div className="flex justify-between text-[#e8e1d3] font-medium text-[1.1rem]">
                    <span>Total estimé</span>
                    <span className="text-[#d4af37]">{totalPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                </div>

                <Link
                  href={ROUTES.checkout}
                  className="mt-6 flex w-full justify-center items-center gap-2 rounded-full bg-gradient-to-r from-[#e0ab46] to-[#b3852b] py-3.5 text-[0.95rem] font-semibold text-[#1a1405] transition-opacity hover:opacity-90"
                >
                  Procéder au paiement
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

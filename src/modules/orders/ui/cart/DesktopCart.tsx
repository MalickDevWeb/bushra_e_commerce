"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { useCart } from "@/shared/providers/CartProvider";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopCart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        <div className="h-full flex flex-col">
          <div className="px-16 py-12 flex-1">
            <h1 className="font-serif text-[2.5rem] text-[#e8e1d3] mb-10">
              Mon <span className="text-[#d4af37]">Panier</span>
            </h1>

            {items.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center border border-[#d4af37]/20 rounded-2xl bg-[#0c0a07] p-10">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d4af37]/20 bg-[#d4af37]/5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8 text-[#d4af37]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-[#e8e1d3]">Votre panier est vide</h2>
                <p className="mt-2 text-center text-[#a89b82] max-w-sm mb-8">
                  Découvrez nos collections exceptionnelles d&apos;encensoirs et de parfums.
                </p>
                <Link
                  href={ROUTES.shop}
                  className="rounded-full bg-[#d4af37] px-8 py-3 text-[0.95rem] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
                >
                  Découvrir la boutique
                </Link>
              </div>
            ) : (
              <div className="flex gap-12">
                {/* Cart Items */}
                <div className="flex-[1.5] flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-6 p-6 rounded-2xl border border-[#d4af37]/20 bg-[#0c0a07]">
                      <div className="relative h-28 w-28 shrink-0 rounded-xl overflow-hidden bg-white/5">
                        <Image src={item.image} alt={item.name} fill sizes="112px" className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif text-[#e8e1d3] text-lg mb-1">{item.name}</h3>
                            <p className="text-[#d4af37] font-semibold">{item.price.toLocaleString("fr-FR")} FCFA</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-[#a89b82] hover:text-[#ff6b6b] transition-colors bg-[#1a1405] rounded-full border border-transparent hover:border-[#ff6b6b]/30"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center rounded-full border border-[#d4af37]/30 bg-[#1a1405] px-3 py-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-[#e8e1d3] px-2 py-1 hover:text-[#d4af37]"
                            >-</button>
                            <span className="text-[#e8e1d3] w-10 text-center font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-[#e8e1d3] px-2 py-1 hover:text-[#d4af37]"
                            >+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="flex-1 max-w-[400px]">
                  <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0c0a07] p-8 sticky top-32">
                    <h3 className="font-serif text-xl text-[#e8e1d3] mb-6">Résumé de la commande</h3>
                    
                    <div className="flex flex-col gap-5 text-[#a89b82] text-sm">
                      <div className="flex justify-between">
                        <span>Sous-total</span>
                        <span>{totalPrice.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Livraison</span>
                        <span className="text-[#e8e1d3]">Calculé à l&apos;étape suivante</span>
                      </div>
                      <div className="h-[1px] w-full bg-[#d4af37]/20 my-1"></div>
                      <div className="flex justify-between text-[#e8e1d3] font-medium text-lg">
                        <span>Total estimé</span>
                        <span className="text-[#d4af37]">{totalPrice.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                    </div>

                    <Link
                      href={ROUTES.checkout}
                      className="mt-8 flex w-full justify-center items-center gap-2 rounded-full bg-[#e8c547] hover:bg-[#d4af37] py-4 text-[0.95rem] font-semibold text-[#1a1405] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.2)]"
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
        </div>
      </DesktopSidebarShell>
    </div>
  );
}


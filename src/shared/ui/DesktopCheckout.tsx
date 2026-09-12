"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/config";
import { useCart } from "@/shared/providers/CartProvider";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopCheckout() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      router.push(ROUTES.checkoutSuccess);
    }, 1500);
  };

  const deliveryFee = 2000;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        <div className="h-full flex flex-col">
          <div className="px-16 py-12 flex-1">
            <h1 className="font-serif text-[2.5rem] text-[#e8e1d3] mb-10">
              Passer la <span className="text-[#d4af37]">commande</span>
            </h1>

            {!isLoaded ? (
              <div className="min-h-[40vh] flex justify-center items-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#d4af37]"></div></div>
            ) : items.length === 0 ? (
              <div className="flex min-h-[40vh] flex-col items-center justify-center border border-[#d4af37]/20 rounded-2xl bg-[#0c0a07] p-10">
                <h2 className="font-serif text-[1.5rem] text-[#e8e1d3] mb-4">Votre panier est vide</h2>
                <button onClick={() => router.push(ROUTES.shop)} className="text-[#0a0a0a] bg-[#d4af37] px-6 py-2.5 rounded-full font-medium hover:bg-[#e8c547] transition-colors">Retour à la boutique</button>
              </div>
            ) : (
              <div className="flex gap-12">
                {/* Checkout Form */}
                <div className="flex-[1.5]">
                  <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0c0a07] p-8">
                    <h2 className="font-serif text-xl text-[#e8e1d3] mb-6">Informations de livraison</h2>
                    <form id="desktop-checkout-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="flex gap-5">
                        <input required type="text" placeholder="Prénom" className="w-full rounded-xl border border-[#d4af37]/30 bg-transparent px-4 py-3 text-sm text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />
                        <input required type="text" placeholder="Nom" className="w-full rounded-xl border border-[#d4af37]/30 bg-transparent px-4 py-3 text-sm text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />
                      </div>
                      <input required type="tel" placeholder="Numéro de téléphone (WhatsApp)" className="w-full rounded-xl border border-[#d4af37]/30 bg-transparent px-4 py-3 text-sm text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />
                      <input required type="text" placeholder="Adresse complète" className="w-full rounded-xl border border-[#d4af37]/30 bg-transparent px-4 py-3 text-sm text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />
                      <input type="text" placeholder="Indications supplémentaires pour le livreur (Optionnel)" className="w-full rounded-xl border border-[#d4af37]/30 bg-transparent px-4 py-3 text-sm text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />
                      
                      <h2 className="font-serif text-xl text-[#e8e1d3] mb-4 mt-6">Méthode de paiement</h2>
                      <div className="rounded-xl border border-[#d4af37] bg-[#d4af37]/5 p-5">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="payment" defaultChecked className="accent-[#d4af37] w-4 h-4" />
                          <span className="text-[#e8e1d3]">Paiement à la livraison</span>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="flex-1 max-w-[420px]">
                  <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0c0a07] p-8 sticky top-32">
                    <h3 className="font-serif text-xl text-[#e8e1d3] mb-6">Récapitulatif</h3>
                    
                    <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {items.map(item => (
                        <div key={item.id} className="flex gap-4 items-center bg-[#1a1405]/50 p-3 rounded-xl border border-[#d4af37]/10">
                          <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden bg-white/5 border border-[#d4af37]/20">
                            <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37] text-[0.65rem] font-bold text-[#1a1405]">
                              {item.quantity}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[0.95rem] text-[#e8e1d3] mb-1">{item.name}</h4>
                            <p className="text-[0.9rem] font-medium text-[#d4af37]">{(item.price * item.quantity).toLocaleString("fr-FR")} FCFA</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4 text-[#a89b82] border-t border-[#d4af37]/20 pt-6">
                      <div className="flex justify-between">
                        <span>Sous-total</span>
                        <span>{totalPrice.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Livraison</span>
                        <span>{deliveryFee.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                      <div className="h-[1px] w-full bg-[#d4af37]/20 my-2"></div>
                      <div className="flex justify-between text-[#e8e1d3] font-medium text-[1.2rem]">
                        <span>Total</span>
                        <span className="text-[#d4af37]">{finalTotal.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                    </div>

                    <button
                      form="desktop-checkout-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-8 flex w-full justify-center items-center gap-2 rounded-full bg-[#e8c547] hover:bg-[#d4af37] py-4 text-[1rem] font-semibold text-[#1a1405] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.2)] disabled:opacity-50"
                    >
                      {isSubmitting ? "Traitement..." : "Confirmer la commande"}
                    </button>
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


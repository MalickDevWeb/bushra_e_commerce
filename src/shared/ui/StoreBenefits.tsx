"use client";

import { motion } from "framer-motion";
import { Clock, Gem, ShieldCheck, Truck, Wrench, CreditCard, BadgeCheck } from "lucide-react";
import React from "react";

export type BenefitItem = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

export const defaultBenefits: BenefitItem[] = [
  { title: "Livraison rapide", subtitle: "Partout au Sénégal", icon: Truck },
  { title: "Paiement sécurisé", subtitle: "À la livraison ou Mobile Money", icon: ShieldCheck },
  { title: "Service client", subtitle: "Assistance 7j/7", icon: Clock },
  { title: "Qualité garantie", subtitle: "Produits 100% authentiques", icon: Gem },
];

export const boutiqueBenefits: BenefitItem[] = [
  { title: "Laiton massif", subtitle: "Premium", icon: CreditCard },
  { title: "Artisanat", subtitle: "D'exception", icon: Wrench },
  { title: "Qualité", subtitle: "Garantie", icon: BadgeCheck },
  { title: "Livraison rapide", subtitle: "Partout au Sénégal", icon: Truck },
];

interface StoreBenefitsProps {
  benefits?: BenefitItem[];
  className?: string;
  layout?: "grid" | "row";
}

export function StoreBenefits({ benefits = defaultBenefits, className = "", layout = "grid" }: StoreBenefitsProps) {
  return (
    <section className={`relative border-b border-[#d4af37]/10 bg-[#0a0a0a] ${className}`}>
      <div className={layout === "grid" ? "grid grid-cols-4 gap-8" : "flex justify-between w-full"}>
        {benefits.map((benefit, index) => (
          <motion.div 
            key={benefit.title} 
            initial={{ opacity: 0, y: layout === "grid" ? 40 : 15, rotateX: layout === "grid" ? -20 : 0 }} 
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.7, delay: index * 0.1, type: "spring", bounce: 0.4 }} 
            className={`group flex items-center gap-5 transition-colors ${layout === "grid" ? "p-4 rounded-2xl hover:bg-[#111111] hover:border-[#d4af37]/10 border border-transparent" : "flex-1 justify-center py-2"} ${layout === "row" && index !== benefits.length - 1 ? 'border-r border-[#d4af37]/20' : ''}`}
          >
            <div className={`relative flex items-center justify-center shrink-0 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 text-[#d4af37] transition-transform duration-500 ease-out group-hover:scale-110 ${layout === "grid" ? "h-14 w-14" : "h-10 w-10"}`}>
              <div className="absolute inset-0 rounded-full bg-[#d4af37] opacity-0 blur-md transition-opacity group-hover:opacity-20" />
              <benefit.icon className={`relative z-10 ${layout === "grid" ? "h-6 w-6" : "h-5 w-5"}`} strokeWidth={1.5} />
            </div>
            <div>
              <h5 className="mb-0.5 font-medium text-[#e8e1d3] text-[12px]">{benefit.title}</h5>
              <p className="text-[10px] text-[#a89b82]">{benefit.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

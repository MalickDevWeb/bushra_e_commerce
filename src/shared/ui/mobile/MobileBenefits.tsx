"use client";

import { motion, useReducedMotion } from "framer-motion";

const benefits = [
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ), 
    label: "Laiton massif", 
    detail: "Premium" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l-7-7m0 0v2m0-2h2m-2 0l7 7m7 7h-2m2 0v-2" />
      </svg>
    ), 
    label: "Artisanat", 
    detail: "d'exception" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-2.585-6.015L12 3l1.585 1.985A2.99 2.99 0 0116.5 6.5l2.485.485-.757 2.404a2.986 2.986 0 011.022 2.11L20.5 14l-1.985 1.585a2.988 2.988 0 01-1.915 2.515l-.485 2.485-2.404-.757a2.986 2.986 0 01-2.11 1.022L10 20.5l-1.585-1.985a2.99 2.99 0 01-2.915-1.515l-2.485-.485.757-2.404a2.986 2.986 0 01-1.022-2.11L3.5 10l1.985-1.585a2.988 2.988 0 011.915-2.515l.485-2.485 2.404.757a2.986 2.986 0 012.11-1.022z" />
      </svg>
    ), 
    label: "Qualité", 
    detail: "garantie" 
  },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ), 
    label: "Livraison rapide", 
    detail: "partout au Sénégal" 
  },
];

export function MobileBenefits() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-label="Les engagements Bushra" className="relative z-10 pl-5 mb-6">
      <div className="hide-scrollbar flex gap-3 overflow-x-auto snap-x snap-mandatory pr-5 pb-2">
        {benefits.map((benefit) => (
          <div key={benefit.label} className="snap-start flex flex-col items-center justify-center min-w-[120px] rounded-[14px] border border-[#d4af37]/30 bg-[#0c0a07]/80 py-4 px-2 shadow-[0_4px_15px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className={`flex items-center justify-center text-[#d4af37] mb-2 ${benefit.label === "Livraison rapide" ? "benefit-mobile-icon-shell--delivery" : ""}`} aria-hidden="true">
              {benefit.label === "Livraison rapide" ? (
                <motion.span
                  className="benefit-mobile-icon-track"
                  animate={shouldReduceMotion ? { left: 5 } : {
                    left: [5, 91, 91, 5],
                    rotate: [0, -3, 3, 0],
                    scale: [1, 1.04, 1.04, 1],
                  }}
                  transition={{
                    duration: 3.2,
                    ease: "linear",
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    times: [0, 0.45, 0.55, 1],
                  }}
                >
                  {benefit.icon}
                </motion.span>
              ) : benefit.icon}
            </span>
            <p className="text-center text-[0.7rem] font-medium leading-[1.3] text-[#e8e1d3]">
              {benefit.label}
              <br />
              <span className="text-[#a89b82] text-[0.65rem]">{benefit.detail}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

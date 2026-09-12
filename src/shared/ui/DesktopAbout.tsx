"use client";

import Image from "next/image";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopAbout() {
  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        {/* Hero Section */}
        <section className="relative w-full h-[220px] flex flex-col justify-center px-16 border-b border-[#d4af37]/20 shrink-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10" />
            <Image src="/images/hero_censer.jpg" alt="Background" fill className="object-cover opacity-60 mix-blend-overlay object-right" />
          </div>

          <div className="relative z-20">
            <h2 className="font-serif text-5xl mb-4 text-[#e8e1d3]">
              À propos de <span className="text-[#d4af37]">Bushra</span>
            </h2>
            <p className="text-[#e8e1d3] text-sm max-w-[500px] leading-relaxed mb-6">
              Plus qu&apos;une boutique, une expérience olfactive au service de votre bien-être.
            </p>
            
            {/* Small gold geometric separator */}
            <div className="flex items-center gap-1.5 opacity-80">
              <div className="w-16 h-[1.5px] bg-[#d4af37]"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
              <div className="w-16 h-[1.5px] bg-[#d4af37]"></div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="px-16 py-12 flex gap-12 shrink-0">
          
          {/* Left Column: History Text */}
          <div className="flex-[1.2] flex flex-col justify-center">
            <p className="text-[#d4af37] text-xs font-medium tracking-widest uppercase mb-3">Notre histoire</p>
            <h3 className="font-serif text-3xl text-[#e8e1d3] mb-6">Une passion née d&apos;une tradition</h3>
            
            <div className="space-y-4 text-sm text-[#a89b82] leading-relaxed">
              <p>
                Bushra est née d&apos;une passion profonde pour les parfums orientaux et les traditions authentiques du Moyen-Orient. Fondée à Thiouraye, Dakar, notre boutique est le fruit d&apos;un rêve : partager avec vous l&apos;élégance et la richesse des encens et mabkharas, dans le respect des traditions et avec une touche moderne.
              </p>
              <p>
                Chaque produit que nous sélectionnons est choisi avec soin pour vous offrir une expérience unique, alliant qualité, authenticité et raffinement.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <div className="flex items-center gap-4 bg-[#0c0a07] border border-[#d4af37]/20 px-6 py-4 rounded-xl">
                <div className="text-[#d4af37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                </div>
                <div>
                  <p className="text-[#e8e1d3] font-serif text-xl">+10 000</p>
                  <p className="text-[#a89b82] text-xs">Clients satisfaits</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#0c0a07] border border-[#d4af37]/20 px-6 py-4 rounded-xl">
                <div className="text-[#d4af37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </div>
                <div>
                  <p className="text-[#e8e1d3] font-serif text-xl">100%</p>
                  <p className="text-[#a89b82] text-xs">Produits authentiques</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Vertical Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[300px] h-[450px] rounded-[2rem] overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <Image src="/images/hero_censer.jpg" alt="Encensoir Bushra" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              
              {/* Overlay Icon */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-[#d4af37] bg-[#0a0a0a]/50 backdrop-blur flex items-center justify-center text-[#d4af37]">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
            </div>
          </div>

          {/* Right Column: Values */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {[
              { title: "Qualité & Authenticité", desc: "Des produits 100% authentiques, sélectionnés avec exigence.", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
              { title: "Élégance & Raffinement", desc: "Des parfums qui subliment chaque instant.", icon: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" },
              { title: "Votre satisfaction", desc: "Notre priorité, à chaque commande.", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
              { title: "Confiance & Sécurité", desc: "Un service fiable et une livraison rapide partout au Sénégal.", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((val, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d={val.icon} /></svg>
                </div>
                <div>
                  <h4 className="text-[#e8e1d3] font-medium text-sm mb-1">{val.title}</h4>
                  <p className="text-[#a89b82] text-xs leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Features Banner */}
        <section className="px-16 pb-12 shrink-0">
          <div className="border border-[#d4af37]/20 rounded-2xl p-6 bg-[#0c0a07] flex justify-between">
            {[
              { label: "Produits\nauthentiques", icon: "M19.5 8.25l-7.5 7.5-7.5-7.5" },
              { label: "Paiement\nsécurisé", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Livraison rapide\nSénégal", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
              { label: "Service client\n7j/7", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" }
            ].map((f, i) => (
              <div key={i} className={`flex items-center gap-4 flex-1 justify-center ${i !== 3 ? 'border-r border-[#d4af37]/20' : ''}`}>
                <div className="text-[#d4af37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                </div>
                <p className="text-[#e8e1d3] text-[11px] whitespace-pre-line font-medium leading-relaxed">{f.label}</p>
              </div>
            ))}
          </div>
        </section>
      </DesktopSidebarShell>
    </div>
  );
}

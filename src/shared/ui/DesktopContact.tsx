"use client";

import { useState } from "react";
import Image from "next/image";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopContact() {
  const [view, setView] = useState<'form' | 'map'>('form');

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

          <div className="relative z-20 flex justify-between items-end">
            <div>
              <h2 className="font-serif text-5xl mb-4 text-[#e8e1d3]">
                Nous <span className="text-[#d4af37]">contacter</span>
              </h2>
              <p className="text-[#e8e1d3] text-sm max-w-[400px] leading-relaxed mb-1">
                Une question ? Une demande particulière ?
              </p>
              <p className="text-[#e8e1d3] text-sm max-w-[400px] leading-relaxed">
                Notre équipe est à votre écoute.
              </p>
              
              <div className="mt-6 flex items-center gap-1.5 opacity-80">
                <div className="w-16 h-[1.5px] bg-[#d4af37]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
                <div className="w-16 h-[1.5px] bg-[#d4af37]"></div>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex bg-[#0c0a07] border border-[#d4af37]/30 p-1 rounded-xl">
              <button 
                onClick={() => setView('form')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${view === 'form' ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-[#a89b82] hover:text-[#e8e1d3]'}`}
              >
                Formulaire
              </button>
              <button 
                onClick={() => setView('map')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${view === 'map' ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'text-[#a89b82] hover:text-[#e8e1d3]'}`}
              >
                Carte
              </button>
            </div>
          </div>
        </section>

        {/* Content Columns */}
        <section className="px-16 py-8 flex gap-6 shrink-0 flex-1 min-h-[500px]">
          
          {/* Left Column (Contact Cards) */}
          <div className="w-[280px] shrink-0 flex flex-col gap-4">
            {[
              { title: "Téléphone", subtitle: "Service client", line1: "+221 77 123 45 67", line2: "Lun - Sam : 9h - 20h", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.29-3.99-6.886-6.886l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
              { title: "Email", subtitle: "Nous écrire", line1: "contact@bushra.sn", line2: "Réponse sous 24h", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
              { title: "Adresse", subtitle: "Boutique Bushra", line1: "Thiouraye, Dakar", line2: "Sénégal", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
              { title: "WhatsApp", subtitle: "Échange rapide", line1: "+221 77 123 45 67", line2: "Disponible de 9h à 22h", icon: "M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 1.63.435 3.16 1.198 4.49L3 21l4.49-1.198A8.956 8.956 0 0012 20.25z" },
            ].map((card, idx) => (
              <div key={idx} className="border border-[#d4af37]/30 rounded-2xl p-5 bg-[#0c0a07] flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d={card.icon} /></svg>
                </div>
                <div>
                  <h4 className="text-[#e8e1d3] font-medium text-[15px] mb-0.5">{card.title}</h4>
                  <p className="text-[#a89b82] text-[11px] mb-1.5">{card.subtitle}</p>
                  <p className="text-[#e8e1d3] text-xs font-medium mb-0.5">{card.line1}</p>
                  <p className="text-[#a89b82] text-[10px]">{card.line2}</p>
                </div>
              </div>
            ))}
            
            {/* Social Media Row */}
            <div className="flex flex-col items-center justify-center mt-2 pb-2">
              <div className="flex items-center gap-4 mb-3">
                {['instagram', 'facebook', 'tiktok', 'whatsapp', 'youtube'].map(s => (
                  <div key={s} className="w-8 h-8 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 w-full justify-center opacity-60">
                <div className="h-[1px] w-8 bg-[#d4af37]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#d4af37]"></div>
                <p className="text-[10px] text-[#a89b82] uppercase tracking-wider mx-2">Suivez-nous sur nos réseaux</p>
                <div className="w-1 h-1 rotate-45 bg-[#d4af37]"></div>
                <div className="h-[1px] w-8 bg-[#d4af37]"></div>
              </div>
            </div>
          </div>

          {view === 'form' && (
            <>
              {/* Middle Column (Form) */}
              <div className="flex-1 border border-[#d4af37]/30 rounded-2xl p-8 bg-[#0c0a07]">
                <h3 className="font-serif text-2xl text-[#e8e1d3] mb-2">Envoyez-nous un message</h3>
                <p className="text-[#a89b82] text-sm mb-8">Remplissez le formulaire ci-dessous, nous vous répondrons le plus rapidement possible.</p>
                
                <form className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Nom complet <span className="text-[#d4af37]">*</span></label>
                      <input type="text" placeholder="Votre nom" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Email <span className="text-[#d4af37]">*</span></label>
                      <input type="email" placeholder="votre@email.com" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Téléphone</label>
                    <input type="tel" placeholder="+221 77 123 45 67" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]" />
                  </div>
                  
                  <div>
                    <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Sujet</label>
                    <div className="relative">
                      <select className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] appearance-none focus:outline-none focus:border-[#d4af37]">
                        <option>Choisissez un sujet</option>
                        <option>Service client</option>
                        <option>Partenariat</option>
                        <option>Autre</option>
                      </select>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#a89b82] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Votre message <span className="text-[#d4af37]">*</span></label>
                    <textarea placeholder="Écrivez votre message ici..." rows={4} className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37] resize-none"></textarea>
                  </div>

                  <button type="button" className="w-full bg-[#e8c547] hover:bg-[#d4af37] text-[#0a0a0a] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Right Column (Promo Image) */}
              <div className="w-[300px] shrink-0 border border-[#d4af37]/30 rounded-2xl overflow-hidden flex flex-col relative bg-[#0c0a07]">
                <div className="h-[280px] w-full relative">
                  <Image src="/images/hero_censer.jpg" alt="Promo" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a07] to-transparent z-10" />
                </div>
                <div className="relative z-20 flex-1 flex flex-col items-center text-center p-6 -mt-16">
                  <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-3 bg-[#0c0a07]">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <h4 className="font-serif text-[#d4af37] text-xl mb-1">Bushra</h4>
                  <p className="text-[#e8e1d3] text-xs leading-relaxed mb-6">Plus qu&apos;une boutique,<br/>une expérience olfactive.</p>
                  
                  <div className="flex w-full justify-between gap-2 border-t border-[#d4af37]/20 pt-5 mt-auto">
                    {[
                      { label: "Produits\nauthentiques", icon: "M19.5 8.25l-7.5 7.5-7.5-7.5" },
                      { label: "Paiement\nsécurisé", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                      { label: "Livraison\npartout au Sénégal", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" }
                    ].map((f, i) => (
                      <div key={i} className={`flex flex-col items-center text-center flex-1 ${i !== 2 ? 'border-r border-[#d4af37]/20' : ''}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d4af37] mb-1.5"><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                        <p className="text-[#a89b82] text-[8px] whitespace-pre-line">{f.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-center gap-2 opacity-70 w-full">
                    <div className="h-px flex-1 bg-[#d4af37]"></div>
                    <div className="w-1 h-1 rotate-45 bg-[#d4af37]"></div>
                    <span className="text-[#a89b82] text-[10px] italic font-serif">Merci de votre confiance</span>
                    <div className="w-1 h-1 rotate-45 bg-[#d4af37]"></div>
                    <div className="h-px flex-1 bg-[#d4af37]"></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {view === 'map' && (
            <>
              {/* Middle Column (Map) */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex-1 border border-[#d4af37]/30 rounded-2xl overflow-hidden relative bg-[#1a1a1a]">
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle, #2a2a2a 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#a89b82] flex flex-col items-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 mb-2 opacity-50"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
                      <span>Interactive Map (Mock)</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex bg-[#0c0a07] border border-[#d4af37]/30 rounded-lg overflow-hidden">
                     <button className="px-4 py-1.5 text-xs text-[#d4af37] bg-[#d4af37]/20 font-medium">Plan</button>
                     <button className="px-4 py-1.5 text-xs text-[#a89b82] hover:text-[#e8e1d3]">Satellite</button>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col bg-[#0c0a07] border border-[#d4af37]/30 rounded-lg overflow-hidden">
                     <button className="w-8 h-8 flex items-center justify-center text-[#e8e1d3] border-b border-[#d4af37]/30">+</button>
                     <button className="w-8 h-8 flex items-center justify-center text-[#e8e1d3]">-</button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white font-medium text-lg">Google</div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#0c0a07] border border-[#d4af37]/30 rounded-lg flex items-center justify-center text-[#e8e1d3]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#0c0a07]/80 backdrop-blur border border-[#d4af37]/50 rounded-full px-3 py-1.5 pr-4 shadow-xl">
                    <div className="text-red-500">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.4 1.55A8.5 8.5 0 0 1 20.5 10c0 5.5-8.5 12.5-8.5 12.5S3.5 15.5 3.5 10a8.5 8.5 0 0 1 7.9-8.45zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                    </div>
                    <div>
                      <p className="text-[#e8e1d3] text-[11px] font-bold">Bushra</p>
                      <p className="text-[#a89b82] text-[9px]">Thiouraye, Dakar</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-[#d4af37]/30 rounded-2xl p-4 bg-[#0c0a07] flex items-center justify-between">
                  <div className="flex items-center gap-4 px-2">
                    <div className="text-[#d4af37]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                    </div>
                    <div>
                      <h5 className="text-[#e8e1d3] text-xs font-medium">Livraison rapide partout au Sénégal</h5>
                      <p className="text-[#a89b82] text-[10px]">Paiement à la livraison ou Wave / Orange Money</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-full border border-[#d4af37]/30 text-[#e8e1d3] text-xs hover:border-[#d4af37] transition-colors flex items-center gap-2">
                    En savoir plus
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Right Column (Store Info) */}
              <div className="w-[300px] shrink-0 border border-[#d4af37]/30 rounded-2xl bg-[#0c0a07] flex flex-col p-6">
                <div className="flex-1 flex flex-col justify-center gap-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-[#e8e1d3] font-medium text-[15px] mb-1">Notre boutique</h4>
                      <p className="text-[#a89b82] text-xs leading-relaxed">Thiouraye, Dakar<br/>Sénégal</p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-[#d4af37]/20"></div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-[#e8e1d3] font-medium text-[15px] mb-1">Horaires d&apos;ouverture</h4>
                      <p className="text-[#a89b82] text-xs leading-relaxed">Lun - Sam : 9h - 20h<br/>Dimanche : Fermé</p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-[#d4af37]/20"></div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                    </div>
                    <div>
                      <h4 className="text-[#e8e1d3] font-medium text-[15px] mb-1">Accès & stationnement</h4>
                      <p className="text-[#a89b82] text-xs leading-relaxed">Parking disponible<br/>à proximité</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 hover:border-[#d4af37]/70 text-[#a89b82] hover:text-[#d4af37] font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mt-6 text-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                  Voir sur Google Maps
                </button>
              </div>
            </>
          )}
        </section>
      </DesktopSidebarShell>
    </div>
  );
}

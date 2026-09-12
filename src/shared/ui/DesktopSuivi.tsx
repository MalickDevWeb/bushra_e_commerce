import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopSuivi() {
  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        <div className="flex-1 flex overflow-hidden">
          
          {/* Center Column */}
          <div className="flex-1 overflow-y-auto px-12 py-8 flex flex-col gap-8 border-r border-[#d4af37]/20">
            
            {/* Hero Section */}
            <section className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-[#d4af37]/30 flex flex-col justify-center px-10 shrink-0">
              <div className="absolute inset-0 z-0">
                <Image src="/images/hero_censer.jpg" alt="Background" fill className="object-cover opacity-60 mix-blend-overlay object-right" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />
              </div>
              <div className="relative z-20">
                <h2 className="font-serif text-4xl mb-2 text-[#e8e1d3]">
                  Suivi <span className="text-[#d4af37]">de commande</span>
                </h2>
                <p className="text-[#a89b82] text-sm">
                  Suivez en temps réel l&apos;état de votre commande.
                </p>
              </div>
            </section>

            {/* Tracking Form Section */}
            <section className="flex flex-col gap-6 shrink-0">
              {/* Tabs */}
              <div className="flex bg-[#0c0a07] border border-[#d4af37]/20 rounded-xl overflow-hidden self-start">
                <button className="flex items-center gap-2 px-8 py-3 text-sm font-medium bg-[#14120e] text-[#d4af37] border-b-2 border-[#d4af37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                  Suivre une commande
                </button>
                <button className="flex items-center gap-2 px-8 py-3 text-sm font-medium text-[#a89b82] hover:text-[#e8e1d3] transition-colors border-b-2 border-transparent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                  Mes commandes
                </button>
              </div>

              {/* Form Box */}
              <div className="border border-[#d4af37]/30 rounded-2xl p-8 bg-[#0c0a07]">
                <h3 className="text-[#e8e1d3] font-medium text-lg mb-1">Entrez votre numéro de commande</h3>
                <p className="text-[#a89b82] text-sm mb-6">Saisissez le numéro reçu par email ou WhatsApp.</p>
                
                <div className="relative mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#a89b82] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                  <input 
                    type="text" 
                    placeholder="Ex : BM-2024-001 ou #10482" 
                    className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
                
                <button className="w-full bg-[#e8c547] hover:bg-[#d4af37] text-[#0a0a0a] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mb-4 text-sm">
                  Suivre ma commande
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </button>

                <p className="text-center text-[#a89b82] text-sm">
                  Vous ne retrouvez pas votre numéro ?<br/>
                  <Link href="#" className="text-[#d4af37] hover:underline underline-offset-4 mt-1 inline-block">
                    Retrouver mes commandes avec mon numéro de téléphone &rarr;
                  </Link>
                </p>
              </div>
            </section>

            {/* Example Tracking Status */}
            <section className="shrink-0 mb-12">
              <h3 className="text-[#e8e1d3] font-serif text-xl mb-4">Exemple de suivi</h3>
              
              <div className="border border-[#d4af37]/30 rounded-2xl p-8 bg-[#0c0a07]">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h5 className="font-serif text-[#e8e1d3] text-lg mb-1">Commande BM-2024-00148</h5>
                    <p className="text-[#a89b82] text-sm">Passée le 12 Mai 2024 à 14:32</p>
                  </div>
                  <div className="bg-[#052e16] text-[#4ade80] border border-[#166534] px-4 py-1.5 rounded-full text-xs font-medium">
                    En cours de livraison
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative mb-12">
                  <div className="absolute top-5 left-10 right-10 h-px bg-[#d4af37]/20"></div>
                  <div className="absolute top-5 left-10 w-[66%] h-px bg-[#d4af37]"></div>
                  
                  <div className="flex justify-between relative z-10">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-3">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                      </div>
                      <p className="text-[#d4af37] text-xs font-medium mb-1">Commande<br/>confirmée</p>
                      <p className="text-[#a89b82] text-[10px]">12 Mai - 14:32</p>
                    </div>
                    
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-3">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 10.5v3.75a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V10.5m16.5 0a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25m16.5 0v3.75m0-3.75v-3.75a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25v3.75" /></svg>
                      </div>
                      <p className="text-[#e8e1d3] text-xs font-medium mb-1 text-center">En préparation</p>
                      <p className="text-[#a89b82] text-[10px]">12 Mai - 16:45</p>
                    </div>
                    
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 rounded-full bg-[#0c0a07] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-3 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                      </div>
                      <p className="text-[#e8e1d3] text-xs font-medium mb-1 text-center">En livraison</p>
                      <p className="text-[#a89b82] text-[10px]">13 Mai - 09:20</p>
                    </div>
                    
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#d4af37]/30 flex items-center justify-center text-[#a89b82] mb-3">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      </div>
                      <p className="text-[#a89b82] text-xs font-medium mb-1">Livrée</p>
                      <p className="text-[#a89b82] text-[10px]">--</p>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="flex gap-6 mb-6">
                  <div className="flex-1 flex items-center gap-4 bg-[#0a0a0a] rounded-xl p-4 border border-[#d4af37]/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#d4af37] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    <div>
                      <p className="text-[#a89b82] text-[11px] mb-0.5">Livraison prévue</p>
                      <p className="text-[#e8e1d3] text-sm">14 Mai 2024 entre 10h et 18h</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-4 bg-[#0a0a0a] rounded-xl p-4 border border-[#d4af37]/20">
                    <div className="flex items-center gap-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#d4af37] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                      <div>
                        <p className="text-[#a89b82] text-[11px] mb-0.5">Transporteur</p>
                        <p className="text-[#e8e1d3] text-sm">Chronopost</p>
                      </div>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#a89b82]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  </div>
                </div>

                {/* Product Box */}
                <div className="flex items-center gap-4 bg-[#0a0a0a] rounded-xl p-4 border border-[#d4af37]/20 mb-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-[#d4af37]/30">
                    <Image src="/images/product_1.jpg" alt="Product" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h6 className="text-[#e8e1d3] text-sm font-medium mb-1">Encensoir Royal Ciselé</h6>
                    <p className="text-[#a89b82] text-xs">Laiton massif</p>
                    <p className="text-[#a89b82] text-[10px] mt-1">x1</p>
                  </div>
                  <p className="text-[#d4af37] font-medium text-sm pr-4">45 000 FCFA</p>
                </div>

                {/* Details link */}
                <button className="w-full flex items-center justify-between text-sm text-[#e8e1d3] bg-[#0a0a0a] rounded-xl p-4 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
                    Voir le détail de ma commande
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#a89b82]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-[380px] shrink-0 overflow-y-auto px-8 py-8 flex flex-col gap-6 bg-[#0a0a0a]">
            
            {/* Need Help Box */}
            <div className="border border-[#d4af37]/30 rounded-2xl p-6 bg-[#0c0a07]">
              <h3 className="font-serif text-[#e8e1d3] text-xl mb-1">Besoin d&apos;aide ?</h3>
              <p className="text-[#a89b82] text-[13px] mb-6">Notre équipe est là pour vous accompagner.</p>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between group cursor-pointer border-b border-[#d4af37]/10 pb-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.29-3.99-6.886-6.886l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <div>
                      <p className="text-[#e8e1d3] text-sm mb-0.5">+221 77 123 45 67</p>
                      <p className="text-[#a89b82] text-[11px]">Lun - Sam : 9h - 20h</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </div>
                
                <div className="flex items-center justify-between group cursor-pointer border-b border-[#d4af37]/10 pb-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <div>
                      <p className="text-[#e8e1d3] text-sm mb-0.5">contact@bushra.sn</p>
                      <p className="text-[#a89b82] text-[11px]">Réponse sous 24h</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 1.63.435 3.16 1.198 4.49L3 21l4.49-1.198A8.956 8.956 0 0012 20.25z" /></svg>
                    </div>
                    <div>
                      <p className="text-[#e8e1d3] text-sm mb-0.5">WhatsApp</p>
                      <p className="text-[#a89b82] text-[11px]">Échange rapide<br/>+221 77 123 45 67<br/>Disponible de 9h à 22h</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </div>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="relative border border-[#d4af37]/30 rounded-2xl overflow-hidden h-[240px] flex flex-col justify-end p-6 bg-[#0c0a07]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/hero_censer.jpg" alt="Experience unique" fill className="object-cover opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
              </div>
              <div className="relative z-10">
                <h4 className="font-serif text-[#d4af37] text-2xl mb-2 leading-tight">Une expérience<br/>unique</h4>
                <p className="text-[#e8e1d3] text-xs mb-4">Des parfums d&apos;exception<br/>pour chaque instant.</p>
                <Link href={ROUTES.shop} className="inline-flex items-center gap-2 bg-[#e8c547] hover:bg-[#d4af37] text-[#0a0a0a] font-semibold px-5 py-2.5 rounded-xl transition-colors text-xs">
                  Découvrir la boutique
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Features Row */}
            <div className="border border-[#d4af37]/30 rounded-2xl p-6 bg-[#0c0a07]">
              <p className="text-[#e8e1d3] font-medium text-sm mb-6">Pourquoi commander chez Bushra ?</p>
              <div className="flex gap-2">
                {[
                  { title: "Livraison rapide", subtitle: "Sénégal", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
                  { title: "Paiement sécurisé", subtitle: "Orange Money", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: "Produits authentiques", subtitle: "100% originaux", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" }
                ].map((f, i) => (
                  <div key={i} className={`flex flex-col items-center text-center flex-1 ${i !== 2 ? 'border-r border-[#d4af37]/20' : ''} px-2`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d4af37] mb-2"><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                    <p className="text-[#e8e1d3] text-[9px] font-medium leading-tight mb-1">{f.title}</p>
                    <p className="text-[#a89b82] text-[8px]">{f.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </DesktopSidebarShell>
    </div>
  );
}

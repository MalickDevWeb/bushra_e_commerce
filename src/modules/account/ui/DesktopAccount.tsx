import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopAccount() {
  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        <div className="flex-1 flex overflow-hidden">
          
          {/* Center Column */}
          <div className="flex-1 overflow-y-auto px-12 py-8 flex flex-col gap-8 border-r border-[#d4af37]/20">
            
            {/* Hero Section */}
            <section className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-[#d4af37]/30 flex flex-col justify-center px-10 shrink-0">
              <div className="absolute inset-0 z-0">
                <Image src="/images/hero_censer.jpg" alt="Background" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-60 mix-blend-overlay object-right" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />
              </div>
              <div className="relative z-20 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] bg-[#0c0a07]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                </div>
                <div>
                  <h2 className="font-serif text-4xl mb-1 text-[#e8e1d3]">
                    Mon Compte
                  </h2>
                  <p className="text-[#a89b82] text-sm">
                    client@example.sn
                  </p>
                </div>
              </div>
            </section>

            {/* Menu List */}
            <section className="flex flex-col gap-4">
              {[
                { title: "Mes informations", href: "#", subtitle: "Gérez vos informations personnelles", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
                { title: "Carnet d'adresses", href: "#", subtitle: "Vos adresses de livraison et de facturation", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
                { title: "Moyens de paiement", href: "#", subtitle: "Vos cartes et méthodes de paiement", icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" },
                { title: "Mes favoris", href: ROUTES.favorites, subtitle: "Vos produits préférés", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
                { title: "Paramètres & Sécurité", href: "#", subtitle: "Mot de passe, notifications, confidentialité", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
              ].map((item, idx) => (
                <Link href={item.href} key={idx} className="flex items-center justify-between w-full p-5 bg-[#0c0a07] border border-[#d4af37]/20 rounded-2xl hover:border-[#d4af37]/50 transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                    </div>
                    <div className="text-left">
                      <h4 className="text-[#e8e1d3] font-medium text-[15px] mb-0.5 group-hover:text-[#d4af37] transition-colors">{item.title}</h4>
                      <p className="text-[#a89b82] text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#a89b82] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </Link>
              ))}
            </section>

            <button className="w-full flex items-center justify-center gap-3 p-4 mt-2 bg-[#450a0a]/20 border border-[#991b1b]/30 rounded-2xl text-[#f87171] hover:bg-[#450a0a]/40 hover:border-[#991b1b]/50 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
              <span className="font-medium text-sm">Se déconnecter</span>
            </button>

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
                <Image src="/images/hero_censer.jpg" alt="Experience unique" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-60 mix-blend-overlay" />
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
                  { title: "Paiements sécurisés", subtitle: "Orange Money", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
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

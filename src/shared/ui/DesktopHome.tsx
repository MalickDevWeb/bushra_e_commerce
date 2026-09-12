import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopHome() {
  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        {/* Hero Section */}
        <section className="w-full min-h-[400px] flex px-16 border-b border-[#d4af37]/20 shrink-0 bg-[#0a0a0a]">
          
          {/* Left: Text Content */}
          <div className="flex-[1.2] flex flex-col justify-center py-12 pr-12 relative z-20">
            <p className="text-[#d4af37] text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Bienvenue chez Bushra
            </p>
            <h2 className="font-serif text-5xl mb-6 text-[#e8e1d3] leading-[1.1]">
              L&apos;art du parfum<br />
              <span className="text-[#d4af37]">au service de votre bien-être</span>
            </h2>
            <p className="text-[#e8e1d3] text-sm leading-relaxed mb-8 max-w-[450px]">
              Découvrez notre collection exclusive de bakhoors, encens et parfums inspirés de la tradition orientale.
            </p>
            <div>
              <Link href={ROUTES.shop} className="inline-flex items-center gap-2 bg-[#e8c547] hover:bg-[#d4af37] text-[#0a0a0a] font-semibold px-8 py-3.5 rounded-full transition-colors text-sm">
                Découvrir la boutique
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Right: Video / GIF */}
          <div className="flex-1 relative flex items-center justify-end py-8">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-[#d4af37]/20 shadow-[0_0_40px_rgba(212,175,55,0.05)] bg-[#000000]">
              <Image 
                src="/video/Smoke_rising_from_incense_burner_20260912105648.gif" 
                alt="Bushra Animation" 
                fill 
                priority
                unoptimized
                className="object-contain" 
              />
            </div>
          </div>
        </section>

        {/* Benefits Row */}
        <section className="px-16 py-10 border-b border-[#d4af37]/10 flex justify-between shrink-0">
          {[
            { title: "Livraison rapide", subtitle: "Partout au Sénégal", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
            { title: "Paiement sécurisé", subtitle: "À la livraison ou Wave / Orange Money", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Service client", subtitle: "7j/7", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
            { title: "Cadeaux exclusifs", subtitle: "Selon les occasions", icon: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" },
            { title: "Qualité garantie", subtitle: "Produits authentiques", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" }
          ].map((b, i) => (
            <div key={i} className={`flex flex-col items-center text-center flex-1 ${i !== 4 ? 'border-r border-[#d4af37]/20' : ''}`}>
              <div className="text-[#d4af37] mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d={b.icon} /></svg>
              </div>
              <h5 className="text-[#e8e1d3] font-medium text-[13px] mb-1">{b.title}</h5>
              <p className="text-[#a89b82] text-[10px] max-w-[120px]">{b.subtitle}</p>
            </div>
          ))}
        </section>

        {/* Collections Section */}
        <section className="px-16 py-12 flex-1 flex flex-col shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-3xl text-[#e8e1d3]">Nos collections</h3>
            <Link href={ROUTES.collections} className="text-[#d4af37] text-sm hover:underline underline-offset-4 flex items-center gap-1">
              Voir toutes les collections <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { title: "Bakhoors", subtitle: "Envoûtants et raffinés", img: "/images/product_2.jpg", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
              { title: "Encensoirs", subtitle: "Traditionnels et modernes", img: "/images/product_1.jpg", icon: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" },
              { title: "Parfums", subtitle: "Essences d'exception", img: "/images/product_2.jpg", icon: "M19.5 8.25l-7.5 7.5-7.5-7.5" },
              { title: "Coffrets Cadeaux", subtitle: "Pour toutes les occasions", img: "/images/product_1.jpg", icon: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" }
            ].map((col, idx) => (
              <Link href={ROUTES.collections} key={idx} className="group relative h-[180px] rounded-2xl overflow-hidden border border-[#d4af37]/30">
                <Image src={col.img} alt={col.title} fill sizes="(max-width: 1200px) 25vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] bg-[#0a0a0a]/80 backdrop-blur shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d={col.icon} /></svg>
                    </div>
                    <div>
                      <h4 className="text-[#e8e1d3] font-medium text-sm leading-tight">{col.title}</h4>
                      <p className="text-[#a89b82] text-[10px]">{col.subtitle}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a] transition-colors">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Delivery Banner */}
          <div className="border border-[#d4af37]/30 rounded-2xl p-5 bg-[#0c0a07] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4 px-2">
              <div className="text-[#d4af37]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
              </div>
              <div>
                <h5 className="text-[#e8e1d3] text-sm font-medium">Livraison rapide partout au Sénégal</h5>
                <p className="text-[#a89b82] text-[11px]">Paiement à la livraison ou Wave / Orange Money</p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-full border border-[#d4af37]/30 text-[#e8e1d3] text-sm hover:border-[#d4af37] transition-colors flex items-center gap-2">
              En savoir plus
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </section>
      </DesktopSidebarShell>
    </div>
  );
}

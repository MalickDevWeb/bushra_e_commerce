import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";

export function DesktopCollections() {
  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        {/* Hero Section */}
        <section className="relative w-full h-[300px] flex flex-col justify-center px-16 border-b border-[#d4af37]/20 shrink-0">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10" />
            <Image src="/images/hero_censer.jpg" alt="Background" fill className="object-cover opacity-60 mix-blend-overlay object-right" />
          </div>

          <div className="relative z-20 max-w-[600px]">
            <h2 className="font-serif text-5xl mb-4 text-[#e8e1d3]">
              Nos collections
            </h2>
            <p className="text-[#a89b82] text-sm leading-relaxed max-w-[450px]">
              Des créations uniques pour chaque instant.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-16 py-8 flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {['Tous', 'Bakhoors', 'Encensoirs', 'Parfums', 'Coffrets Cadeaux'].map((tab, idx) => (
              <button 
                key={idx} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  idx === 0 
                  ? 'bg-[#e8c547] text-[#0a0a0a]' 
                  : 'bg-[#0c0a07] border border-[#d4af37]/30 text-[#e8e1d3] hover:border-[#d4af37]/70'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Bakhoors", cat: "bakhoor", subtitle: "Envoûtants et raffinés", img: "/images/product_2.jpg" },
              { title: "Encensoirs", cat: "encensoirs", subtitle: "Traditionnels et modernes", img: "/images/product_1.jpg" },
              { title: "Parfums", cat: "parfums", subtitle: "Essences d'exception", img: "/images/product_2.jpg" },
              { title: "Coffrets Cadeaux", cat: "coffrets", subtitle: "Pour toutes les occasions", img: "/images/product_1.jpg" },
              { title: "Accessoires", cat: "accessoires", subtitle: "Pour une expérience complète", img: "/images/product_2.jpg" },
              { title: "Éditions Limitées", cat: "limitees", subtitle: "Pièces rares et uniques", img: "/images/product_1.jpg" },
            ].map((col, idx) => (
              <Link href={`${ROUTES.shop}?category=${col.cat}`} key={idx} className="group flex flex-col">
                <div className="relative h-[260px] rounded-2xl overflow-hidden mb-4 border border-[#d4af37]/30">
                  <Image src={col.img} alt={col.title} fill sizes="(max-width: 1200px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                </div>
                <div className="px-1">
                  <h4 className="font-serif text-[#e8e1d3] text-xl mb-1 group-hover:text-[#d4af37] transition-colors">{col.title}</h4>
                  <p className="text-[#a89b82] text-sm">{col.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </DesktopSidebarShell>
    </div>
  );
}

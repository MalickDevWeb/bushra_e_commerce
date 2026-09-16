import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/config";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";
import { AnimatedTabs } from "@/shared/ui/AnimatedTabs";

export function DesktopCollections() {
  return (
    <div className="hidden lg:block">
      <DesktopSidebarShell>
        {/* Hero Section */}
        <section className="relative w-full h-[230px] flex flex-col justify-center px-16 border-b border-[#d4af37]/20 shrink-0 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Darker left gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
            {/* Bottom gradient blending to page background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10" />
            {/* Subtle gold glow over the image */}
            <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-color z-10" />
            <Image 
              src="/images/hero_censer.jpg" 
              alt="Background" 
              fill 
              priority
              className="object-cover opacity-75 mix-blend-luminosity object-center scale-105"
              sizes="(max-width: 1024px) 100vw, calc(100vw - 280px)"
            />
          </div>

          <div className="relative z-20 max-w-[600px]">
            <h2 className="font-serif text-[42px] mb-3 text-[#d4af37] drop-shadow-md">
              Nos collections
            </h2>
            <p className="text-[#e8e1d3] font-medium mb-1">
              Des créations uniques pour chaque instant.
            </p>
            <p className="text-[#a89b82] text-sm leading-relaxed max-w-[450px]">
              Découvrez nos ensembles exclusifs, pensés pour sublimer vos moments précieux.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-16 py-8 flex-1 flex flex-col">
          {/* Tabs */}
          <div className="mb-10">
            <AnimatedTabs 
              tabs={[
                { id: 'Tous', label: 'Tous' },
                { id: 'Bakhoors', label: 'Bakhoors' },
                { id: 'Encensoirs', label: 'Encensoirs' },
                { id: 'Parfums', label: 'Parfums' },
                { id: 'Coffrets Cadeaux', label: 'Coffrets Cadeaux' },
                { id: 'Accessoires', label: 'Accessoires' },
                { id: 'Éditions Limitées', label: 'Éditions Limitées' }
              ]}
              activeId="Tous"
            />
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

        {/* Beautiful short text section */}
        <section className="px-16 py-16 mt-8 mb-12 bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border-t border-b border-[#d4af37]/10 relative overflow-hidden flex items-center justify-center text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-2xl">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-[#d4af37] mx-auto mb-6 opacity-70">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <h3 className="font-serif text-3xl text-[#e8e1d3] mb-4">L&apos;Héritage Bushra</h3>
            <p className="text-[#a89b82] leading-relaxed text-sm italic">
              Chaque collection est une invitation au voyage, un hommage à la tradition orientale. Nos maîtres parfumeurs sélectionnent les essences les plus rares pour créer des accords qui transcendent le temps et éveillent les sens. Laissez-vous porter par la magie d&apos;un sillage inoubliable.
            </p>
          </div>
        </section>

      </DesktopSidebarShell>
    </div>
  );
}

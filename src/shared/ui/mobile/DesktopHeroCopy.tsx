import { DesktopHeroStats } from "./DesktopHeroStats";

export function DesktopHeroCopy() {
  return <div className="relative z-10 flex-1 max-w-[520px]">
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/8 px-4 py-1.5 backdrop-blur-sm"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse" /><span className="text-[0.72rem] font-medium tracking-[0.2em] text-[#d4af37] uppercase">Artisanat d&apos;exception · Dakar</span></div>
    <h1 className="font-serif text-[4rem] xl:text-[5rem] leading-[1.05] text-[#faf7ef] mb-6">L&apos;art du<br /><span className="relative inline-block" style={{ background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 50%, #c9a227 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>thiouraye</span><br />en laiton massif.</h1>
    <p className="text-[1rem] leading-[1.7] text-[#a89b82] mb-10 max-w-[400px]">Encensoirs ciselés, Mabkharas royales, Coffrets cadeaux - chaque pièce est forgée à la main par des artisans sénégalais.</p>
    <div className="flex items-center gap-4 mb-12"><a href="/boutique" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[0.9rem] font-semibold text-[#0a0a0a] transition-all duration-300" style={{ background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 50%, #c9a227 100%)" }}><span className="relative z-10">Découvrir la boutique</span><span aria-hidden="true" className="relative z-10">-&gt;</span></a><a href="/collections" className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 px-7 py-3.5 text-[0.9rem] font-medium text-[#e8e1d3] transition-all duration-300 hover:border-[#d4af37]/70 hover:bg-[#d4af37]/8">Voir les collections</a></div>
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#a89b82]"><div className="flex h-12 w-8 justify-center rounded-full border border-[#d4af37]/30 p-2"><div className="h-2 w-1 rounded-full bg-[#d4af37]" /></div><span className="hidden opacity-60 md:block">Glisser pour découvrir</span></div>
    <DesktopHeroStats />
  </div>;
}

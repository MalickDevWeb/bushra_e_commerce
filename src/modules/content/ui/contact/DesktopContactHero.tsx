import Image from "next/image";

export type ContactView = "form" | "map";

export function DesktopContactHero({ view, onViewChange }: { view: ContactView; onViewChange: (view: ContactView) => void }) {
  return (
    <section className="relative w-full h-[220px] flex flex-col justify-center px-16 border-b border-[#d4af37]/20 shrink-0">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10" />
        <Image src="/images/hero_censer.jpg" alt="Background" fill className="object-cover opacity-60 mix-blend-overlay object-right" />
      </div>
      <div className="relative z-20 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-5xl mb-4 text-[#e8e1d3]">Nous <span className="text-[#d4af37]">contacter</span></h2>
          <p className="text-[#e8e1d3] text-sm max-w-[400px] leading-relaxed mb-1">Une question ? Une demande particulière ?</p>
          <p className="text-[#e8e1d3] text-sm max-w-[400px] leading-relaxed">Notre équipe est à votre écoute.</p>
          <div className="mt-6 flex items-center gap-1.5 opacity-80">
            <div className="w-16 h-[1.5px] bg-[#d4af37]" /><div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" /><div className="w-16 h-[1.5px] bg-[#d4af37]" />
          </div>
        </div>
        <div className="flex bg-[#0c0a07] border border-[#d4af37]/30 p-1 rounded-xl">
          {(["form", "map"] as const).map((option) => (
            <button key={option} onClick={() => onViewChange(option)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${view === option ? "bg-[#d4af37]/20 text-[#d4af37]" : "text-[#a89b82] hover:text-[#e8e1d3]"}`}>
              {option === "form" ? "Formulaire" : "Carte"}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

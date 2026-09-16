import Image from "next/image";
import { DesktopSidebarShell } from "@/shared/layouts/DesktopSidebarShell";
import { DesktopTrackingAside } from "./DesktopTrackingAside";
import { DesktopTrackingForm } from "./DesktopTrackingForm";
import { TrackingExampleCard } from "./TrackingExampleCard";

export function DesktopSuiviMain() {
  return <div className="hidden lg:block"><DesktopSidebarShell><div className="flex-1 flex overflow-hidden">
    <main className="flex-1 overflow-y-auto px-12 py-8 flex flex-col gap-8 border-r border-[#d4af37]/20">
      <section className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-[#d4af37]/30 flex flex-col justify-center px-10 shrink-0"><div className="absolute inset-0 z-0"><Image src="/images/hero_censer.jpg" alt="Background" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-60 mix-blend-overlay object-right" /><div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10" /></div><div className="relative z-20"><h2 className="font-serif text-4xl mb-2 text-[#e8e1d3]">Suivi <span className="text-[#d4af37]">de commande</span></h2><p className="text-[#a89b82] text-sm">Suivez en temps réel l&apos;état de votre commande.</p></div></section>
      <DesktopTrackingForm />
      <TrackingExampleCard />
    </main>
    <DesktopTrackingAside />
  </div></DesktopSidebarShell></div>;
}

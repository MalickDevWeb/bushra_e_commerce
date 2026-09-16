import { DesktopAbout } from "@/modules/content/ui/about/DesktopAbout";

export default function AboutPage() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopAbout />
      </div>
      
      <div className="lg:hidden mx-auto max-w-7xl bg-[#0a0a0a] min-h-screen pt-28 px-4 pb-24 flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-3xl text-[#d4af37] mb-4">À propos</h1>
        <p className="text-[#e8e1d3]">Version mobile de la page À propos.</p>
      </div>
    </>
  );
}


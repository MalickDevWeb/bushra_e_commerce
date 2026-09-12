import { TrackingHero } from "./components/TrackingHero";
import { TrackingTabs } from "./components/TrackingTabs";
import { TrackingSearchForm } from "./components/TrackingSearchForm";
import { TrackingExampleCard } from "./components/TrackingExampleCard";
import { WhatsAppFAB } from "@/shared/ui/mobile/WhatsAppFAB";
import { DesktopSuivi } from "@/shared/ui/DesktopSuivi";

export default function TrackingPage() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopSuivi />
      </div>

      <div className="lg:hidden mx-auto max-w-7xl bg-[#0a0a0a] min-h-screen">
        <TrackingHero />
        <TrackingTabs />
        <TrackingSearchForm />
        <TrackingExampleCard />
        <WhatsAppFAB />
      </div>
    </>
  );
}

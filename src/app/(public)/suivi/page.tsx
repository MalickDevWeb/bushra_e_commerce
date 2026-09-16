import { TrackingHero } from "@/modules/orders/ui/tracking/TrackingHero";
import { TrackingTabs } from "@/modules/orders/ui/tracking/TrackingTabs";
import { TrackingSearchForm } from "@/modules/orders/ui/tracking/TrackingSearchForm";
import { TrackingExampleCard } from "@/modules/orders/ui/tracking/TrackingExampleCard";
import { WhatsAppFAB } from "@/shared/ui/mobile/WhatsAppFAB";
import { DesktopSuivi } from "@/modules/orders/ui/tracking/DesktopSuivi";

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

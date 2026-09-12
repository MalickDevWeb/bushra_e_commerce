import { Suspense } from "react";
import {
  MobileBenefits,
  MobileHero,
  MobileCategories,
  MobileFilterBar,
  MobileProductGrid,
  MobileDeliveryBanner,
} from "@/shared/ui/mobile";
import { DesktopBoutique } from "@/shared/ui/DesktopBoutique";

export default function BoutiquePage() {
  return (
    <>
      <DesktopBoutique />
      <div className="w-full lg:hidden pb-24">
        <MobileHero />
        <MobileBenefits />
        <MobileCategories />
        <Suspense fallback={<div className="h-20" />}>
          <MobileFilterBar />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex justify-center py-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#d4af37]"></div></div>}>
          <MobileProductGrid />
        </Suspense>
        <MobileDeliveryBanner />
      </div>
    </>
  );
}

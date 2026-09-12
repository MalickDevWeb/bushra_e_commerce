import { Suspense } from "react";
import { getProducts } from "@/app/actions/product.actions";
import {
  MobileBenefits,
  MobileHero,
  MobileCategories,
  MobileFilterBar,
  MobileProductGrid,
  MobileDeliveryBanner,
} from "@/shared/ui/mobile";
import { DesktopBoutique } from "@/shared/ui/DesktopBoutique";

export default async function BoutiquePage() {
  const products = await getProducts();

  return (
    <>
      <Suspense fallback={<div className="hidden lg:block min-h-screen" />}>
        <DesktopBoutique products={products} />
      </Suspense>
      <div className="w-full lg:hidden pb-24">
        <MobileHero />
        <MobileBenefits />
        <Suspense fallback={<div className="h-20" />}>
          <MobileCategories />
        </Suspense>
        <Suspense fallback={<div className="h-20" />}>
          <MobileFilterBar />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex justify-center py-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#d4af37]"></div></div>}>
          <MobileProductGrid products={products} />
        </Suspense>
        <MobileDeliveryBanner />
      </div>
    </>
  );
}

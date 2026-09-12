import { CollectionsHero } from "./components/CollectionsHero";
import { CollectionsCategories } from "./components/CollectionsCategories";
import { CollectionsFilterBar } from "./components/CollectionsFilterBar";
import { CollectionsProductGrid } from "./components/CollectionsProductGrid";
import { CollectionsDeliveryBanner } from "./components/CollectionsDeliveryBanner";
import { DesktopCollections } from "@/shared/ui/DesktopCollections";

export default function CollectionsPage() {
  return (
    <>
      <DesktopCollections />
      
      <div className="lg:hidden mx-auto max-w-7xl bg-[#0a0a0a] min-h-screen">
        <CollectionsHero />
        <CollectionsCategories />
        <CollectionsFilterBar />
        <CollectionsProductGrid />
        <CollectionsDeliveryBanner />
      </div>
    </>
  );
}

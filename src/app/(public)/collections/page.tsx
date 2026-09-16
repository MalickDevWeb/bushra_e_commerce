import { CollectionsHero } from "@/modules/content/ui/collections/CollectionsHero";
import { CollectionsCategories } from "@/modules/content/ui/collections/CollectionsCategories";
import { CollectionsFilterBar } from "@/modules/content/ui/collections/CollectionsFilterBar";
import { CollectionsProductGrid } from "@/modules/content/ui/collections/CollectionsProductGrid";
import { CollectionsDeliveryBanner } from "@/modules/content/ui/collections/CollectionsDeliveryBanner";
import { DesktopCollections } from "@/modules/content/ui/collections/DesktopCollections";

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

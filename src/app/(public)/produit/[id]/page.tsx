import { DesktopProduct } from "@/modules/catalog/ui/product/DesktopProduct";
import { MobileProductDetail } from "@/shared/ui/mobile";
import { getProductById } from "@/modules/content/actions/product.actions";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Desktop Version */}
      <DesktopProduct product={product} />
      
      {/* Mobile Version */}
      <MobileProductDetail product={product} />
    </>
  );
}

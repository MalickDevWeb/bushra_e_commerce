import { DesktopProduct } from "@/shared/ui";
import { MobileProductDetail } from "@/shared/ui/mobile";
import { getProductById } from "@/app/actions/product.actions";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

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

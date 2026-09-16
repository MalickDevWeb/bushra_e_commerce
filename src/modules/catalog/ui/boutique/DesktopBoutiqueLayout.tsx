import type { Prisma } from "@prisma/client";
import { DesktopBoutiqueMain } from "./DesktopBoutiqueMain";

type CatalogProduct = Prisma.ProductGetPayload<{ include: { category: true } }>;

export function DesktopBoutiqueLayout({ products }: { products: CatalogProduct[] }) {
  return <DesktopBoutiqueMain products={products} />;
}

import { Metadata } from "next";
import PromotionsManagement from "@/modules/catalog/ui/admin/PromotionsPage";

export const metadata: Metadata = {
  title: "Promotions | Bushra Admin",
  description: "Gérer les codes promo et réductions",
};

export default function Page() {
  return <PromotionsManagement />;
}

import { Metadata } from "next";
import StocksManagement from "@/modules/catalog/ui/admin/StocksPage";

export const metadata: Metadata = {
  title: "Inventaire & Stocks | Bushra Admin",
  description: "Suivez et ajustez les stocks",
};

export default function Page() {
  return <StocksManagement />;
}

import { Metadata } from "next";
import CollectionsManagement from "@/modules/catalog/ui/admin/CollectionsPage";

export const metadata: Metadata = {
  title: "Collections | Bushra Admin",
  description: "Gérer les collections de produits",
};

export default function Page() {
  return <CollectionsManagement />;
}

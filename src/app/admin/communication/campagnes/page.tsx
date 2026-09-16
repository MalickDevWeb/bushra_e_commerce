import { Metadata } from "next";
import CampaignsPage from "@/modules/clients/ui/admin/CampaignsPage";

export const metadata: Metadata = {
  title: "Campagnes | Bushra Admin",
  description: "Exécution des campagnes CRM",
};

export default function Page() {
  return <CampaignsPage />;
}

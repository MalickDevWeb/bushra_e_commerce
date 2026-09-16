import { Metadata } from "next";
import CustomerAnalyticsPage from "@/modules/clients/ui/admin/CustomerAnalyticsPage";

export const metadata: Metadata = {
  title: "Analytics Clients | Bushra Admin",
  description: "Analyse des données clients",
};

export default function Page() {
  return <CustomerAnalyticsPage />;
}

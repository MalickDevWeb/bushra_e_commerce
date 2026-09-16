import { Metadata } from "next";
import CustomersAnalyticsPage from "@/modules/users/ui/admin/CustomersAnalyticsPage";

export const metadata: Metadata = {
  title: "CRM & Clients | Bushra Admin",
  description: "Analyse des clients et CRM",
};

export default function Page() {
  return <CustomersAnalyticsPage />;
}

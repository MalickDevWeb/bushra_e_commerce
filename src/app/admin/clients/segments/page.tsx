import { Metadata } from "next";
import CustomerSegmentsPage from "@/modules/clients/ui/admin/CustomerSegmentsPage";

export const metadata: Metadata = {
  title: "Segments Clients | Bushra Admin",
  description: "Gérer les segments de clients",
};

export default function Page() {
  return <CustomerSegmentsPage />;
}

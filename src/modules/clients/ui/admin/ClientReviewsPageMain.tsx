import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import ClientReviewsTable from "./ClientReviewsTable";

export default function ClientReviewsPageMain() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Avis Clients" description="Modérez et répondez aux avis laissés sur vos produits" />
      <ClientReviewsTable />
    </AdminPageShell>
  );
}

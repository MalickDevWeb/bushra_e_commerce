import { AboutPageEditor } from "@/modules/content/ui/AboutPageEditor";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ContenuAProposPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Page À Propos" description="Racontez l'histoire de Bushra" />
      <AboutPageEditor />
    </AdminPageShell>
  );
}


import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ContenuFooterPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Pied de page (Footer)"
        description="Gérez les liens, réseaux sociaux et mentions légales"
      />
      <AdminPlaceholderPanel>Configuration du pied de page à venir.</AdminPlaceholderPanel>
    </AdminPageShell>
  );
}


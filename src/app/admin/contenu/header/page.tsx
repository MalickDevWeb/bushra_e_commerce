import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ContenuHeaderPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Menu & En-tête" description="Gérez la navigation principale de votre boutique" />
      <AdminPlaceholderPanel>Constructeur de menu à venir.</AdminPlaceholderPanel>
    </AdminPageShell>
  );
}


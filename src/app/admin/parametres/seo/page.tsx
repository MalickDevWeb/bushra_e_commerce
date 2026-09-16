import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";
import { Button } from "@/shared/ui/Button";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ParametresSEOPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Optimisation SEO"
        description="Gérez les métadonnées pour Google et les réseaux sociaux"
        action={<Button size="sm">Sauvegarder</Button>}
      />
      <AdminPlaceholderPanel>Formulaire SEO global à venir.</AdminPlaceholderPanel>
    </AdminPageShell>
  );
}


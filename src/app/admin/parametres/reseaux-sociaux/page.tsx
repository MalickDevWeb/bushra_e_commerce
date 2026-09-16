import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";
import { Button } from "@/shared/ui/Button";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ParametresReseauxSociauxPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Réseaux Sociaux"
        description="Liez vos comptes Instagram, Facebook, TikTok..."
        action={<Button size="sm">Sauvegarder</Button>}
      />
      <AdminPlaceholderPanel>Liens des réseaux sociaux à configurer.</AdminPlaceholderPanel>
    </AdminPageShell>
  );
}


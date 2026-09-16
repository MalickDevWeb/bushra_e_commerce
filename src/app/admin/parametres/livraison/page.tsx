import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";
import { Button } from "@/shared/ui/Button";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ParametresLivraisonPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Modes de Livraison"
        description="Configurez les zones et tarifs de livraison"
        action={<Button size="sm">Sauvegarder</Button>}
      />
      <AdminPlaceholderPanel>Formulaire des tarifs de livraison à venir.</AdminPlaceholderPanel>
    </AdminPageShell>
  );
}


import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";
import { Button } from "@/shared/ui/Button";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ParametresPaiementPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Configuration des Paiements"
        description="Gérez vos passerelles de paiement (Wave, Orange Money, etc.)"
        action={<Button size="sm">Sauvegarder</Button>}
      />
      <AdminPlaceholderPanel>Formulaire de configuration des clés API Paiement à venir.</AdminPlaceholderPanel>
    </AdminPageShell>
  );
}


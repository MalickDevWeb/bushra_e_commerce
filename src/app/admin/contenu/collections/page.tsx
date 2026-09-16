import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ContenuCollectionsPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Mise en avant des Collections"
        description="Gérez l'affichage visuel des collections sur le site"
      />
      <AdminPlaceholderPanel>
        Outil de gestion des images de collections à venir.
      </AdminPlaceholderPanel>
    </AdminPageShell>
  );
}


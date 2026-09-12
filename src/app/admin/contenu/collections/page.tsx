import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";

export default function ContenuCollectionsPage() {
  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <AdminPageHeader
        title="Mise en avant des Collections"
        description="Gérez l'affichage visuel des collections sur le site"
      />
      <AdminPlaceholderPanel>
        Outil de gestion des images de collections à venir.
      </AdminPlaceholderPanel>
    </div>
  );
}


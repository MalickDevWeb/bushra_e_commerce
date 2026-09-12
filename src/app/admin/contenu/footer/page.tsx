import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPlaceholderPanel } from "@/shared/ui/AdminPlaceholderPanel";

export default function ContenuFooterPage() {
  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <AdminPageHeader
        title="Pied de page (Footer)"
        description="Gérez les liens, réseaux sociaux et mentions légales"
      />
      <AdminPlaceholderPanel>Configuration du pied de page à venir.</AdminPlaceholderPanel>
    </div>
  );
}


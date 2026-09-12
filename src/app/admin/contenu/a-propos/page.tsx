import { AboutPageEditor } from "@/modules/content/ui/AboutPageEditor";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

export default function ContenuAProposPage() {
  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <AdminPageHeader title="Page À Propos" description="Racontez l'histoire de Bushra" />
      <AboutPageEditor />
    </div>
  );
}


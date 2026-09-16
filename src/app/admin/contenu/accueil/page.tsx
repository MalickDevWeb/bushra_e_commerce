import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { HomePageEditor } from "@/modules/content/ui/HomePageEditor";
import { Button } from "@/shared/ui/Button";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function ContenuAccueilPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Page d'Accueil"
        description="Personnalisez les sections de votre page d&apos;accueil"
        action={
          <Button
            size="sm"
            className="rounded-md bg-[#d4af37] text-[#0a0a0a] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-[#c59b32] hover:brightness-100"
          >
            Enregistrer les modifications
          </Button>
        }
      />

      <HomePageEditor />
    </AdminPageShell>
  );
}


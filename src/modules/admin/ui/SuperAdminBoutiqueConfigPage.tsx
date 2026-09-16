import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

export default function SuperAdminBoutiqueConfig() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Informations Boutique" description="Données légales et paramètres globaux de l'entreprise" action={<button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">Sauvegarder</button>} />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 max-w-3xl">
        <h2 className="text-lg font-bold text-[#e8e1d3] mb-4">Informations Générales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Nom de la boutique</label>
            <input type="text" defaultValue="BUSHRA" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:border-[#d4af37] outline-none" />
          </div>
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Slogan</label>
            <input type="text" defaultValue="Thiouraye - Dakar" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:border-[#d4af37] outline-none" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[13px] text-[#a89b82] mb-1">Email de contact (Support)</label>
            <input type="email" defaultValue="contact@bushra.sn" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:border-[#d4af37] outline-none" />
          </div>
        </div>

        <h2 className="text-lg font-bold text-[#e8e1d3] mb-4 pt-4 border-t border-[#d4af37]/10">Coordonnées (Facturation)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className="block text-[13px] text-[#a89b82] mb-1">Adresse postale</label>
            <input type="text" defaultValue="Almadies, Zone 12" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:border-[#d4af37] outline-none" />
          </div>
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Ville</label>
            <input type="text" defaultValue="Dakar" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:border-[#d4af37] outline-none" />
          </div>
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Pays</label>
            <input type="text" defaultValue="Sénégal" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:border-[#d4af37] outline-none" />
          </div>
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">NINEA / Registre de commerce</label>
            <input type="text" defaultValue="SN DKR 2024 B 1234" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] font-mono rounded-md px-4 py-2.5 focus:border-[#d4af37] outline-none" />
          </div>
        </div>
      </div>
    </AdminPageShell>
  );
}


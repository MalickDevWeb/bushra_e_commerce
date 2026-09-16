import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

export default function SuperAdminRevenue() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Revenus & Marges" description="Vue financière globale de l'entreprise" action={<div className="flex items-center gap-2">
          <select className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2 focus:outline-none">
            <option>Ce mois-ci</option>
            <option>Le mois dernier</option>
            <option>Cette année</option>
          </select>
          <button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32]">
            Générer rapport
          </button>
        </div>} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
          <div className="text-[13px] text-[#a89b82] mb-2 uppercase tracking-widest font-sans font-bold">Chiffre d&apos;affaires brut</div>
          <div className="text-4xl font-bold font-serif text-[#d4af37]">12 450 000 <span className="text-lg">FCFA</span></div>
          <div className="text-[12px] text-[#2ecc71] mt-2">+15% par rapport au mois précédent</div>
        </div>
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
          <div className="text-[13px] text-[#a89b82] mb-2 uppercase tracking-widest font-sans font-bold">Marge nette estimée</div>
          <div className="text-4xl font-bold font-serif text-[#e8e1d3]">4 200 000 <span className="text-lg">FCFA</span></div>
          <div className="text-[12px] text-[#2ecc71] mt-2">+5% de croissance de la marge</div>
        </div>
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
          <div className="text-[13px] text-[#a89b82] mb-2 uppercase tracking-widest font-sans font-bold">Coûts d&apos;acquisition (CAC)</div>
          <div className="text-4xl font-bold font-serif text-[#e74c3c]">3 500 <span className="text-lg">FCFA / client</span></div>
          <div className="text-[12px] text-[#e74c3c] mt-2">+200 FCFA depuis le mois dernier</div>
        </div>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 mt-2 min-h-[400px] flex items-center justify-center">
        <p className="text-[#a89b82]">Graphique d'évolution des revenus à intégrer ici (ex: Recharts, Chart.js)</p>
      </div>
    </AdminPageShell>
  );
}


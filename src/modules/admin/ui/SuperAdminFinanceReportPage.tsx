import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

export default function SuperAdminFinanceReport() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Rapport Comptable" description="Générez et exportez les rapports financiers pour la comptabilité" action={<button className="flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
          Exporter en PDF / Excel
        </button>} />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[#d4af37]/10">
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">Période : De</label>
            <input type="date" className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2 outline-none focus:border-[#d4af37] color-scheme-dark" />
          </div>
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1">À</label>
            <input type="date" className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2 outline-none focus:border-[#d4af37] color-scheme-dark" />
          </div>
          <div className="flex items-end">
            <button className="px-4 py-2 border border-[#d4af37]/30 text-[#d4af37] rounded-md text-[13px] hover:bg-[#d4af37]/10 transition-colors">
              Filtrer
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-[#d4af37]/40 mx-auto mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
            <p className="text-[#a89b82] text-sm">Sélectionnez une période pour générer le rapport comptable (TVA, Encaissements, Décaissements).</p>
          </div>
        </div>
      </div>
    </AdminPageShell>
  );
}


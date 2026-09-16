import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

export default function WaveConfiguration() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Configuration API Wave" description="Gérez les clés de paiement Wave pour la boutique" action={<button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">Sauvegarder les clés</button>} />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">W</div>
          <div>
            <h2 className="text-lg font-bold text-[#e8e1d3]">Wave Mobile Money</h2>
            <p className="text-xs text-[#a89b82]">Environnement actuel : <span className="text-emerald-400">Production</span></p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-[13px] font-medium text-[#e8e1d3] mb-1">Clé publique (Public Key)</label>
            <input type="text" defaultValue="pk_live_wave_a7b8c9d0e1f2" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#a89b82] font-mono text-[13px] rounded-md px-4 py-3 focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#e8e1d3] mb-1">Clé secrète (Secret Key)</label>
            <input type="password" defaultValue="sk_live_wave_secret_key_hidden" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#a89b82] font-mono text-[13px] rounded-md px-4 py-3 focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#e8e1d3] mb-1">Webhook URL (Retour de paiement)</label>
            <input type="text" readOnly defaultValue="https://bushra.sn/api/webhooks/wave" className="w-full bg-[#0a0a0a] border border-[#d4af37]/10 text-[#a89b82]/70 font-mono text-[13px] rounded-md px-4 py-3 cursor-not-allowed" />
          </div>
        </div>
      </div>
    </AdminPageShell>
  );
}


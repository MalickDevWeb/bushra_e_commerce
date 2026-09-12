export default function SuperAdminOrangeMoneyKeyPage() {
  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Configuration API Orange Money</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez l'intégration Orange Money Web Payment</p>
        </div>
        <button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          Sauvegarder les clés
        </button>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">O</div>
          <div>
            <h2 className="text-lg font-bold text-[#e8e1d3]">Orange Money API</h2>
            <p className="text-xs text-[#a89b82]">Environnement actuel : <span className="text-emerald-400">Production</span></p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-[13px] font-medium text-[#e8e1d3] mb-1">Merchant Key</label>
            <input type="text" defaultValue="OM_MERCHANT_889922" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#a89b82] font-mono text-[13px] rounded-md px-4 py-3 focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#e8e1d3] mb-1">Authorization Header (Base64)</label>
            <input type="password" defaultValue="Basic YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXo=" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#a89b82] font-mono text-[13px] rounded-md px-4 py-3 focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#e8e1d3] mb-1">Return URL (Succès)</label>
            <input type="text" readOnly defaultValue="https://bushra.sn/paiement/succes?method=orange-money" className="w-full bg-[#0a0a0a] border border-[#d4af37]/10 text-[#a89b82]/70 font-mono text-[13px] rounded-md px-4 py-3 cursor-not-allowed" />
          </div>
        </div>
      </div>
    </div>
  );
}


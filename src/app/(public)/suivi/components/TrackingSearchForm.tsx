export function TrackingSearchForm() {
  return (
    <div className="px-5 mb-8">
      <div className="rounded-[18px] border border-[#d4af37]/20 bg-[#0c0a07]/60 p-5 backdrop-blur-sm">
        <h2 className="text-[1rem] font-medium text-[#e8e1d3] mb-1">Entrez votre numéro de commande</h2>
        <p className="text-[0.75rem] text-[#a89b82] mb-5">Saisissez le numéro reçu par email ou WhatsApp.</p>
        
        <div className="relative mb-5">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-[#d4af37]/70">
              <circle cx="11" cy="11" r="6.5" />
              <path strokeLinecap="round" d="m16 16 4 4" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Ex : BM-2024-001 ou #10482"
            className="w-full rounded-[12px] border border-[#d4af37]/30 bg-[#141009] py-3.5 pl-11 pr-4 text-[0.85rem] text-[#e8e1d3] placeholder:text-[#a89b82]/50 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
        </div>

        <button className="w-full flex justify-center items-center gap-2 rounded-[12px] bg-gradient-to-r from-[#e0ab46] to-[#b3852b] py-3.5 text-[0.9rem] font-semibold text-[#1a1405] transition-opacity hover:opacity-90 shadow-[0_4px_15px_rgba(212,175,55,0.2)]">
          Suivre ma commande
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>

        <div className="mt-5 text-center">
          <p className="text-[0.7rem] text-[#a89b82] mb-1">Vous ne retrouvez pas votre numéro ?</p>
          <button className="text-[0.7rem] font-medium text-[#d4af37] underline underline-offset-4 decoration-[#d4af37]/40 hover:decoration-[#d4af37]">
            Retrouver mes commandes avec mon numéro de téléphone →
          </button>
        </div>
      </div>
    </div>
  );
}

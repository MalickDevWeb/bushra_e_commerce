export function MobileDeliveryBanner() {
  return (
    <section className="px-5 mb-8">
      <div className="flex items-center justify-between rounded-xl border border-[#d4af37]/30 bg-[#120f0b] p-4">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <div>
            <h4 className="text-[0.8rem] font-medium text-[#e8e1d3]">Livraison rapide partout au Sénégal</h4>
            <p className="text-[0.65rem] text-[#a89b82]">Paiement à la livraison ou Wave / Orange Money</p>
          </div>
        </div>
        <button className="flex items-center gap-1 rounded-full border border-[#d4af37]/40 px-3 py-1 text-[0.7rem] text-[#e8e1d3] transition-colors hover:bg-[#d4af37]/10">
          En savoir plus
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

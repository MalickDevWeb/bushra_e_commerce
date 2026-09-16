export function CollectionsDeliveryBanner() {
  return (
    <section className="px-5 mb-8 pb-12">
      <div className="flex items-center justify-between rounded-[16px] border border-[#d4af37]/30 bg-gradient-to-r from-[#1a1405] to-[#0c0a07] p-4">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <div>
            <h4 className="text-[0.75rem] font-medium text-[#e8e1d3]">Livraison rapide partout au Sénégal</h4>
            <p className="text-[0.65rem] text-[#a89b82]">Paiement à la livraison ou Wave</p>
          </div>
        </div>
        <button className="text-[#d4af37] p-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

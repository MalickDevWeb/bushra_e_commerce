export default function DeliveryBanner() {
  return (
    <div className="mt-5 flex items-center justify-between gap-3 rounded-[18px] border border-[#c9a227]/30 bg-[linear-gradient(180deg,#1d170d_0%,#110d08_100%)] px-3 py-3 text-left shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#17120b] text-[#f5d67a]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v8H3zm12 3h3l3 3v2h-6v-5z" />
            <circle cx="8" cy="17" r="1.8" />
            <circle cx="17" cy="17" r="1.8" />
          </svg>
        </div>
        <div>
          <p className="text-[0.85rem] leading-tight text-[#f4d67d]">Livraison rapide partout au Sénégal</p>
          <p className="text-[0.72rem] text-[#d9d3c4]">Paiement à la livraison ou Wave</p>
        </div>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-[#f4d67d]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
      </svg>
    </div>
  );
}

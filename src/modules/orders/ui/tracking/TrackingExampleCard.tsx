import Image from "next/image";

export function TrackingExampleCard() {
  return (
    <div className="px-5 mb-12">
      <h3 className="text-[0.9rem] font-medium text-[#e8e1d3] mb-3">Exemple de suivi</h3>
      
      <div className="rounded-[18px] border border-[#d4af37]/20 bg-[#0c0a07]/80 p-5 backdrop-blur-sm">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-[0.9rem] font-semibold text-[#e8e1d3]">Commande BM-2024-00148</h4>
            <p className="text-[0.7rem] text-[#a89b82] mt-0.5">Passée le 12 Mai 2024 à 14:32</p>
          </div>
          <span className="rounded-full border border-green-900/50 bg-[#0a1a0f] px-2.5 py-1 text-[0.6rem] font-semibold text-green-500">
            En cours de livraison
          </span>
        </div>

        {/* Timeline */}
        <div className="relative mb-8 mt-2 px-2">
          {/* Connecting line */}
          <div className="absolute left-6 right-6 top-5 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#d4af37] to-[#3f3f46]"></div>
          
          <div className="relative flex justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#1a1405] text-[#d4af37]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.3 7.3L12 12l8.7-4.7M12 22V12" />
                </svg>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[0.65rem] font-medium text-[#d4af37]">Commande<br/>confirmée</p>
                <p className="text-[0.55rem] text-[#a89b82] mt-0.5">12 Mai - 14:32</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#1a1405] text-[#d4af37]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l-7-7m0 0v2m0-2h2m-2 0l7 7m7 7h-2m2 0v-2" />
                </svg>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[0.65rem] font-medium text-[#e8e1d3]">En préparation</p>
                <p className="text-[0.55rem] text-[#a89b82] mt-0.5">12 Mai - 16:45</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#1a1405] text-[#d4af37]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[0.65rem] font-medium text-[#e8e1d3]">En livraison</p>
                <p className="text-[0.55rem] text-[#a89b82] mt-0.5">13 Mai - 09:20</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#27272a] text-[#71717a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[0.65rem] font-medium text-[#e8e1d3]">Livrée</p>
                <p className="text-[0.55rem] text-[#71717a] mt-0.5">—</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="flex gap-3 mb-5">
          <div className="flex-1 rounded-xl border border-[#27272a]/50 bg-[#141009] p-3 flex gap-2.5 items-start">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#a89b82] mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <div>
              <p className="text-[0.65rem] text-[#a89b82]">Livraison prévue</p>
              <p className="text-[0.7rem] font-medium text-[#e8e1d3]">14 Mai 2024 entre 10h et 18h</p>
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-[#27272a]/50 bg-[#141009] p-3 flex gap-2.5 items-center justify-between">
            <div className="flex gap-2.5 items-start">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#a89b82]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <div>
                <p className="text-[0.65rem] text-[#a89b82]">Transporteur</p>
                <p className="text-[0.7rem] font-medium text-[#e8e1d3]">Chronopost</p>
              </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#71717a]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Product Summary */}
        <div className="flex gap-3 items-center mb-5 rounded-xl border border-[#d4af37]/10 bg-transparent p-2">
          <div className="relative h-[50px] w-[50px] rounded-lg overflow-hidden flex-shrink-0">
             <Image src="/images/product_1.jpg" alt="Product" fill sizes="64px" className="object-cover" />
          </div>
          <div className="flex-1">
            <h5 className="text-[0.75rem] font-medium text-[#e8e1d3]">Encensoir Royal Ciselé</h5>
            <p className="text-[0.65rem] text-[#a89b82]">Laiton massif</p>
            <p className="text-[0.6rem] text-[#71717a]">x1</p>
          </div>
          <p className="text-[0.8rem] font-medium text-[#d4af37]">45 000 FCFA</p>
        </div>

        {/* Action button */}
        <button className="flex w-full items-center justify-between rounded-xl border border-[#d4af37]/20 bg-[#141009] px-4 py-3.5 transition-colors hover:bg-white/5">
          <div className="flex items-center gap-2 text-[0.75rem] text-[#d6c8ae]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#d4af37]/70">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Voir le détail de ma commande
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#71717a]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

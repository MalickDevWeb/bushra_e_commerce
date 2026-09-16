export function TrackingTabs() {
  return (
    <div className="px-5 mb-6 relative z-10">
      <div className="flex items-center rounded-[14px] border border-[#d4af37]/20 bg-[#0c0a07]/80 backdrop-blur-md p-1">
        <button className="flex-1 flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-b from-[#1a1405] to-[#0c0a07] py-3 shadow-[0_2px_8px_rgba(212,175,55,0.08)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.3 7.3L12 12l8.7-4.7M12 22V12" />
          </svg>
          <span className="text-[0.75rem] font-medium text-[#d4af37]">Suivre une commande</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 rounded-[10px] py-3 text-[#a89b82] transition-colors hover:bg-white/5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-[0.75rem] font-medium">Mes commandes</span>
        </button>
      </div>
    </div>
  );
}

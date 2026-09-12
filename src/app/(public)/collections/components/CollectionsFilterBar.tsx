export function CollectionsFilterBar() {
  return (
    <section className="px-5 mb-5 flex items-center justify-between">
      <button className="flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-transparent px-4 py-2 text-[0.8rem] text-[#e8e1d3] shadow-[0_2px_10px_rgba(212,175,55,0.05)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-[#d4af37]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Filtrer
      </button>
      
      <button className="flex items-center gap-1.5 rounded-full border border-[#d4af37]/20 bg-transparent px-4 py-2 text-[0.8rem] text-[#a89b82]">
        Trier par : <span className="text-[#e8e1d3]">Populaires</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3 w-3 text-[#d4af37]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}

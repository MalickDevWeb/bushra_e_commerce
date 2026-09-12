export default function MobileFilterBar() {
  return (
    <div className="mt-4 flex items-center justify-between gap-3 rounded-[16px] border border-[#c9a227]/25 bg-[#13110e] px-3 py-2.5">
      <button type="button" className="flex items-center gap-2 text-sm font-medium text-[#f4d67d]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M10 18h4" />
        </svg>
        Filtrer
      </button>
      <button type="button" className="flex items-center gap-2 text-sm font-medium text-[#efe6d1]">
        Trier par : Populaires
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5" />
        </svg>
      </button>
    </div>
  );
}

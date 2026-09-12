export default function MediasBibliothequePage() {
  const images = [
    { id: 1, name: "oud-royal-bottle.jpg", size: "1.2 MB", date: "12 Sept 2024", url: "/placeholder.jpg" },
    { id: 2, name: "gowe-incense-pack.jpg", size: "850 KB", date: "10 Sept 2024", url: "/placeholder.jpg" },
    { id: 3, name: "musc-blanc-bottle.jpg", size: "2.1 MB", date: "08 Sept 2024", url: "/placeholder.jpg" },
    { id: 4, name: "banner-home-promo.png", size: "3.5 MB", date: "01 Sept 2024", url: "/placeholder.jpg" },
    { id: 5, name: "logo-bushra-gold.svg", size: "120 KB", date: "15 Août 2024", url: "/placeholder.jpg" },
    { id: 6, name: "thiouraye-tradition.jpg", size: "1.8 MB", date: "10 Août 2024", url: "/placeholder.jpg" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Bibliothèque d'images</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez tous les médias (photos, vidéos) utilisés sur votre boutique</p>
        </div>
        <button className="flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
          Uploader un média
        </button>
      </div>

      {/* FILTER/SEARCH */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#a89b82]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Rechercher une image..." 
            className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] placeholder-[#a89b82]/50 transition-all"
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((img) => (
          <div key={img.id} className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden group hover:border-[#d4af37]/60 transition-colors cursor-pointer">
            <div className="aspect-square bg-[#0a0a0a] flex items-center justify-center relative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 text-[#a89b82]/30">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <div className="absolute inset-0 bg-[#0a0a0a]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="p-2 bg-[#d4af37] text-[#0a0a0a] rounded hover:bg-[#c59b32]"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
                <button className="p-2 bg-[#e74c3c] text-white rounded hover:bg-[#c0392b]"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
              </div>
            </div>
            <div className="p-3">
              <div className="text-[11px] font-medium text-[#e8e1d3] truncate">{img.name}</div>
              <div className="text-[10px] text-[#a89b82] mt-0.5 flex justify-between">
                <span>{img.size}</span>
                <span>{img.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


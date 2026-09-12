"use client";

export function AdminTopbar() {
  return (
    <div className="flex h-full items-center justify-between px-6 bg-[#0a0a0a] border-b border-[#d4af37]/15">
      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-5 flex-1 max-w-2xl">
        {/* Hamburger */}
        <button className="text-[#d4af37] hover:text-[#e8e1d3] transition-colors focus:outline-none shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#a89b82]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Rechercher une commande, un client, un produit..."
            className="w-full bg-[#14120f] border border-[#d4af37]/20 rounded-full py-2.5 pl-11 pr-4 text-sm text-[#e8e1d3] placeholder-[#a89b82]/70 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 ml-6">
        {/* Notifications bell with red badge */}
        <div className="relative cursor-pointer group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#d4af37] group-hover:text-white transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-md">5</span>
        </div>

        {/* Separator */}
        <div className="h-7 w-px bg-[#d4af37]/20"></div>

        {/* Language Selector */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#d4af37] group-hover:text-white transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <span className="text-sm text-[#e8e1d3] font-medium tracking-wide">FR</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        {/* Separator */}
        <div className="h-7 w-px bg-[#d4af37]/20"></div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* Avatar circle */}
          <div className="w-10 h-10 rounded-full border-2 border-[#d4af37]/60 bg-gradient-to-b from-[#2a2418] to-[#0d0b08] flex items-center justify-center overflow-hidden shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#d4af37]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          {/* Name + Role */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] font-bold text-[#e8e1d3] leading-none group-hover:text-white transition-colors">Super Admin</span>
              {/* Crown emoji */}
              <span className="text-sm leading-none">👑</span>
            </div>
            <span className="text-[10.5px] text-[#a89b82] leading-none">Administrateur système</span>
          </div>
        </div>
      </div>
    </div>
  );
}

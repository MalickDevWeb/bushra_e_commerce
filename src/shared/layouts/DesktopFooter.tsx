export function DesktopFooter() {
  return (
    <footer className="hidden lg:flex w-full items-center justify-between px-10 py-8 border-t border-[#d4af37]/20 bg-[#0a0a0a]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37] bg-transparent">
          <span className="font-serif text-[1.1rem] text-[#d4af37]">BM</span>
        </div>
        <div>
          <h2 className="font-serif text-[1.1rem] leading-none tracking-widest text-[#e8e1d3]">
            BUSHRA
          </h2>
          <p className="text-[0.45rem] tracking-[0.25em] text-[#a89b82]">
            THIOURAYE - DAKAR
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex gap-12">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <div>
            <p className="text-[0.7rem] font-medium text-[#e8e1d3]">Livraison rapide</p>
            <p className="text-[0.65rem] text-[#a89b82]">et sécurisée</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>
          <div>
            <p className="text-[0.7rem] font-medium text-[#e8e1d3]">Paiement sécurisé</p>
            <p className="text-[0.65rem] text-[#a89b82]">100% fiable</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7 text-[#d4af37]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
          </svg>
          <div>
            <p className="text-[0.7rem] font-medium text-[#e8e1d3]">Service client</p>
            <p className="text-[0.65rem] text-[#a89b82]">à votre écoute</p>
          </div>
        </div>
      </div>

      {/* Socials & Copyright */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-[0.75rem] text-[#a89b82]">Suivez-nous</span>
          <div className="flex gap-3">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-colors hover:bg-[#d4af37]/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-colors hover:bg-[#d4af37]/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#d4af37] transition-colors hover:bg-[#d4af37]/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                 <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[0.65rem] text-[#e8e1d3]">© 2024 BUSHRA</p>
          <p className="text-[0.65rem] text-[#a89b82]">Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

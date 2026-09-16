const cards = [
  ["Téléphone", "Service client", "+221 77 123 45 67", "Lun - Sam : 9h - 20h", "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.29-3.99-6.886-6.886l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"],
  ["Email", "Nous écrire", "contact@bushra.sn", "Réponse sous 24h", "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"],
  ["Adresse", "Boutique Bushra", "Thiouraye, Dakar", "Sénégal", "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"],
  ["WhatsApp", "Échange rapide", "+221 77 123 45 67", "Disponible de 9h à 22h", "M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 1.63.435 3.16 1.198 4.49L3 21l4.49-1.198A8.956 8.956 0 0012 20.25z"],
] as const;

export function DesktopContactInfo() {
  return (
    <div className="w-[280px] shrink-0 flex flex-col gap-4">
      {cards.map(([title, subtitle, line1, line2, icon]) => (
        <div key={title} className="border border-[#d4af37]/30 rounded-2xl p-5 bg-[#0c0a07] flex gap-4">
          <div className="w-10 h-10 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d={icon} /></svg>
          </div>
          <div>
            <h4 className="text-[#e8e1d3] font-medium text-[15px] mb-0.5">{title}</h4>
            <p className="text-[#a89b82] text-[11px] mb-1.5">{subtitle}</p>
            <p className="text-[#e8e1d3] text-xs font-medium mb-0.5">{line1}</p>
            <p className="text-[#a89b82] text-[10px]">{line2}</p>
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center mt-2 pb-2">
        <div className="flex items-center gap-4 mb-3">
          {["instagram", "facebook", "tiktok", "whatsapp", "youtube"].map((social) => (
            <div key={social} className="w-8 h-8 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors cursor-pointer">
              <div className="w-4 h-4 bg-current rounded-sm" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 w-full justify-center opacity-60">
          <div className="h-px w-8 bg-[#d4af37]" /><div className="w-1 h-1 rotate-45 bg-[#d4af37]" />
          <p className="text-[10px] text-[#a89b82] uppercase tracking-wider mx-2">Suivez-nous sur nos réseaux</p>
          <div className="w-1 h-1 rotate-45 bg-[#d4af37]" /><div className="h-px w-8 bg-[#d4af37]" />
        </div>
      </div>
    </div>
  );
}

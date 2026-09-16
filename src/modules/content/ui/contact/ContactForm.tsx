export function ContactForm() {
  return (
    <div className="rounded-[20px] border border-[#d4af37]/30 bg-[#0c0a07]/80 backdrop-blur-md p-6 lg:p-8 relative z-10 lg:w-[450px]">
      <h2 className="font-serif text-[1.4rem] text-[#e8e1d3] mb-6">Envoyez-nous un message</h2>
      
      <form className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full rounded-[10px] border border-[#d4af37]/30 bg-transparent px-4 py-3 text-[0.85rem] text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full rounded-[10px] border border-[#d4af37]/30 bg-transparent px-4 py-3 text-[0.85rem] text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
        </div>
        
        <input
          type="text"
          placeholder="Sujet"
          className="w-full rounded-[10px] border border-[#d4af37]/30 bg-transparent px-4 py-3 text-[0.85rem] text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
        />
        
        <textarea
          placeholder="Votre message"
          rows={5}
          className="w-full rounded-[10px] border border-[#d4af37]/30 bg-transparent px-4 py-3 text-[0.85rem] text-[#e8e1d3] placeholder:text-[#a89b82] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] resize-none"
        ></textarea>
        
        <button type="button" className="w-full flex justify-center items-center gap-2 rounded-[10px] bg-gradient-to-r from-[#e0ab46] to-[#b3852b] py-3.5 mt-2 text-[0.95rem] font-semibold text-[#1a1405] transition-opacity hover:opacity-90">
          Envoyer le message
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
        
        <div className="flex items-center justify-center gap-2 mt-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-[#a89b82]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <span className="text-[0.65rem] text-[#a89b82]">Vos informations sont confidentielles et sécurisées.</span>
        </div>
      </form>
    </div>
  );
}

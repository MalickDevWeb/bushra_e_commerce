export function DesktopContactForm() {
  return (
    <div className="flex-1 border border-[#d4af37]/30 rounded-2xl p-8 bg-[#0c0a07]">
      <h3 className="font-serif text-2xl text-[#e8e1d3] mb-2">Envoyez-nous un message</h3>
      <p className="text-[#a89b82] text-sm mb-8">Remplissez le formulaire ci-dessous, nous vous répondrons le plus rapidement possible.</p>
      <form className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Nom complet <span className="text-[#d4af37]">*</span></label>
            <input type="text" placeholder="Votre nom" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div className="flex-1">
            <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Email <span className="text-[#d4af37]">*</span></label>
            <input type="email" placeholder="votre@email.com" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]" />
          </div>
        </div>
        <div>
          <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Téléphone</label>
          <input type="tel" placeholder="+221 77 123 45 67" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37]" />
        </div>
        <div>
          <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Sujet</label>
          <div className="relative">
            <select className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] appearance-none focus:outline-none focus:border-[#d4af37]">
              <option>Choisissez un sujet</option><option>Service client</option><option>Partenariat</option><option>Autre</option>
            </select>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#a89b82] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
        <div>
          <label className="block text-[#e8e1d3] text-xs font-medium mb-2">Votre message <span className="text-[#d4af37]">*</span></label>
          <textarea placeholder="Écrivez votre message ici..." rows={4} className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37] resize-none" />
        </div>
        <button type="button" className="w-full bg-[#e8c547] hover:bg-[#d4af37] text-[#0a0a0a] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
          Envoyer le message
        </button>
      </form>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 lg:pr-10">
      <div className="mb-4">
        <h1 className="font-serif text-[2.5rem] lg:text-[3.5rem] leading-none text-[#faf7ef] mb-6">
          Contactez-<span className="text-[#d4af37]">nous</span>
        </h1>
        <div className="h-[2px] w-12 bg-[#d4af37] mb-6"></div>
        <p className="text-[0.95rem] lg:text-[1rem] leading-[1.6] text-[#e8e1d3]">
          Nous sommes à votre écoute pour toute question,<br className="hidden lg:block"/>
          conseil ou demande particulière.<br className="hidden lg:block"/>
          Notre équipe vous répond avec attention et expertise.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[0.9rem] font-medium text-[#d4af37]">WhatsApp</h3>
            <p className="text-[0.9rem] text-[#e8e1d3] mt-1">+221 77 123 45 67</p>
            <p className="text-[0.75rem] text-[#a89b82] mt-0.5">Réponse rapide</p>
          </div>
        </div>

        <div className="h-[1px] w-full max-w-[250px] bg-white/10"></div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <h3 className="text-[0.9rem] font-medium text-[#d4af37]">Email</h3>
            <p className="text-[0.9rem] text-[#e8e1d3] mt-1">contact@bushra.sn</p>
            <p className="text-[0.75rem] text-[#a89b82] mt-0.5">Nous vous répondons sous 24h</p>
          </div>
        </div>

        <div className="h-[1px] w-full max-w-[250px] bg-white/10"></div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[0.9rem] font-medium text-[#d4af37]">Adresse</h3>
            <p className="text-[0.9rem] text-[#e8e1d3] mt-1">Thiouraye, Dakar</p>
            <p className="text-[0.75rem] text-[#a89b82] mt-0.5">Sénégal</p>
          </div>
        </div>

        <div className="h-[1px] w-full max-w-[250px] bg-white/10"></div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[0.9rem] font-medium text-[#d4af37]">Horaires</h3>
            <p className="text-[0.9rem] text-[#e8e1d3] mt-1">Lundi – Samedi : 9h00 – 19h00</p>
            <p className="text-[0.75rem] text-[#a89b82] mt-0.5">Dimanche : Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
}

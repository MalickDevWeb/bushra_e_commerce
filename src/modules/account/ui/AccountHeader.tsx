import Image from "next/image";

export function AccountHeader() {
  return (
    <section className="px-5 pt-8 pb-6 mt-4">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 rounded-full border-2 border-[#d4af37]/40 p-1">
          <div className="relative h-full w-full rounded-full bg-[#1a1405] overflow-hidden flex items-center justify-center text-[#d4af37]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="font-serif text-[1.8rem] leading-none text-[#faf7ef] mb-1">
            Mon Compte
          </h1>
          <p className="text-[0.8rem] text-[#a89b82]">
            client@exemple.sn
          </p>
        </div>
      </div>
    </section>
  );
}

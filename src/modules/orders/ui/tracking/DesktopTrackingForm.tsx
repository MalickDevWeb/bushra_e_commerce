import Link from "next/link";

export function DesktopTrackingForm() {
  return <section className="flex flex-col gap-6 shrink-0">
    <div className="flex bg-[#0c0a07] border border-[#d4af37]/20 rounded-xl overflow-hidden self-start">
      <button className="flex items-center gap-2 px-8 py-3 text-sm font-medium bg-[#14120e] text-[#d4af37] border-b-2 border-[#d4af37]"><span aria-hidden="true">◈</span>Suivre une commande</button>
      <button className="flex items-center gap-2 px-8 py-3 text-sm font-medium text-[#a89b82] hover:text-[#e8e1d3] transition-colors border-b-2 border-transparent"><span aria-hidden="true">≡</span>Mes commandes</button>
    </div>
    <div className="border border-[#d4af37]/30 rounded-2xl p-8 bg-[#0c0a07]">
      <h3 className="text-[#e8e1d3] font-medium text-lg mb-1">Entrez votre numéro de commande</h3>
      <p className="text-[#a89b82] text-sm mb-6">Saisissez le numéro reçu par email ou WhatsApp.</p>
      <div className="relative mb-4"><span className="text-[#a89b82] absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true">⌕</span><input type="text" placeholder="Ex : BM-2024-001 ou #10482" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#e8e1d3] placeholder-[#a89b82] focus:outline-none focus:border-[#d4af37] transition-colors" /></div>
      <button className="w-full bg-[#e8c547] hover:bg-[#d4af37] text-[#0a0a0a] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors mb-4 text-sm">Suivre ma commande <span aria-hidden="true">-&gt;</span></button>
      <p className="text-center text-[#a89b82] text-sm">Vous ne retrouvez pas votre numéro ?<br /><Link href="#" className="text-[#d4af37] hover:underline underline-offset-4 mt-1 inline-block">Retrouver mes commandes avec mon numéro de téléphone &rarr;</Link></p>
    </div>
  </section>;
}

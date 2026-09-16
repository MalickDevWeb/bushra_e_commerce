import Link from "next/link";
type TopProduct = { name: string; quantity: number; revenue: number };

export function DashboardTopProducts({ products }: { products: TopProduct[] }) {
  return (
    <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 xl:col-span-1 flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold text-[#e8e1d3]">Produits les plus vendus</h2>
        <Link href="#" className="text-xs text-[#d4af37] hover:underline shrink-0">Voir tout</Link>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        {products.map((product, index) => (
          <div key={product.name} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded border border-[#d4af37]/30 flex items-center justify-center text-[10px] text-[#d4af37] shrink-0 font-medium">{index + 1}</span>
            <div className="w-9 h-9 rounded-md bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20 shrink-0 text-[#d4af37]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" /></svg>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[13px] font-semibold text-[#e8e1d3] truncate">{product.name}</span>
              <span className="text-[11px] text-[#a89b82]">{product.quantity} ventes</span>
            </div>
            <div className="flex flex-col items-end shrink-0">
              <span className="text-[12px] font-bold text-[#d4af37] whitespace-nowrap">{product.revenue.toLocaleString("fr-FR")} FCFA</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

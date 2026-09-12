import Image from "next/image";

const products = [
  { name: "Encensoir Royal Ciselé", price: "45 000", image: "/images/mobile/product-royal.png" },
  { name: "Mabkhara Prestige", price: "38 000", image: "/images/mobile/product-prestige.png" },
  { name: "Encensoir Élégance", price: "42 000", image: "/images/mobile/product-elegance.png" },
];

export function MobileBestSellers() {
  return (
    <section className="mt-7 pb-4">
      <div className="flex items-center justify-between px-5">
        <h2 className="font-serif text-[2rem] leading-none text-[#f7f1e6]">Nos Best-Sellers</h2>
        <button type="button" className="text-[0.9rem] text-[#efbd4a]">Voir tout <span className="ml-2 text-xl">›</span></button>
      </div>
      <div className="hide-scrollbar mt-4 flex gap-4 overflow-x-auto px-5">
        {products.map((product, index) => (
          <article key={product.name} className="relative min-w-[202px] overflow-hidden rounded-[18px] border border-[#a87920]/70 bg-[#120d08]">
            <div className="relative h-[175px]">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="202px" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,5,0.9),transparent_55%)]" />
            </div>
            <div className="px-3 pb-4 pt-2">
              <h3 className="truncate text-[0.9rem] text-[#f7f1e6]">{product.name}</h3>
              <div className="mt-2 flex items-center gap-1 text-[0.7rem] text-[#f1b532]">★★★★★ <span className="ml-1 text-[#d5c7b0]">({index === 0 ? 128 : index === 1 ? 86 : 64})</span></div>
              <p className="mt-1 text-[1.05rem] font-medium text-[#edb537]">{product.price} <span className="text-[0.7rem]">FCFA</span></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

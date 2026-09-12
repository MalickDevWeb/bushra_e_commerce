import Image from "next/image";

const collections = [
  { title: "Encensoirs", subtitle: "Ciselés", count: "12 pièces", tag: "NOUVEAU", image: "/images/mobile/collection-ciselee.png" },
  { title: "Mabkharas", subtitle: "Royales", count: "9 pièces", image: "/images/mobile/collection-royale.png" },
  { title: "Pièces", subtitle: "Prestige", count: "7 pièces", image: "/images/mobile/collection-prestige.png" },
  { title: "Coffrets", subtitle: "Cadeaux", count: "5 pièces", image: "/images/mobile/collection-prestige.png" },
];

export function MobileCollections() {
  return (
    <section className="mt-7">
      <div className="flex items-center justify-between px-5">
        <div>
          <p className="mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.24em] text-[#b99752]">L&apos;univers Bushra</p>
          <h2 className="font-serif text-[2rem] leading-none text-[#f7f1e6]">Nos Collections</h2>
        </div>
        <button type="button" className="group flex items-center gap-1 text-[0.86rem] font-semibold text-[#efbd4a] transition-colors hover:text-[#f8d889]">
          Voir tout <span className="text-xl leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">›</span>
        </button>
      </div>
      <div className="hide-scrollbar mt-4 flex gap-4 overflow-x-auto px-5 pb-1">
        {collections.map((collection) => (
          <article key={collection.title} className="group relative h-[315px] min-w-[202px] overflow-hidden rounded-[18px] border border-[#a87920]/70 bg-[#130e09] shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
            <Image src={collection.image} alt={`${collection.title} ${collection.subtitle}`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="202px" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,8,5,0.12)_0%,rgba(11,8,5,0.02)_38%,rgba(5,5,5,0.86)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(236,184,72,0.12),transparent)]" />
            {collection.tag && (
              <span className="absolute left-3 top-3 rounded-full border border-[#efbd4a]/55 bg-[#1a1309]/75 px-2.5 py-1 text-[0.58rem] font-semibold tracking-[0.16em] text-[#f2ca70] backdrop-blur-sm">
                {collection.tag}
              </span>
            )}
            <div className="absolute bottom-4 left-4 right-3">
              <h3 className="font-serif text-[1.55rem] leading-[0.95] text-[#fff8ea]">{collection.title}<br />{collection.subtitle}</h3>
              <div className="mt-3 flex items-center gap-2 text-[0.73rem] text-[#e1cda9]"><span className="h-px w-5 bg-[#d5a83d]/70" />{collection.count}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const stats = [
  { value: "28+", label: "Pièces uniques" },
  { value: "100%", label: "Laiton massif" },
  { value: "48h", label: "Livraison Dakar" },
];

export function DesktopHeroStats() {
  return <div className="flex items-center gap-8">{stats.map((stat) => <div key={stat.label} className="text-center"><p className="text-[1.6rem] font-bold leading-none mb-0.5" style={{ background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{stat.value}</p><p className="text-[0.7rem] text-[#a89b82] tracking-wide">{stat.label}</p></div>)}</div>;
}

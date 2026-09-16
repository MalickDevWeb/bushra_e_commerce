import type { DashboardData } from "@/modules/dashboard/actions/dashboard.actions";

export function DashboardActivityPanels({ data }: { data: DashboardData }) {
  const activities = [
    `${data.kpis.todayOrders} commandes aujourd'hui`,
    `${data.kpis.outOfStock} produits en rupture`,
    `${data.messages.length} messages récents`,
    `${data.reviews.count} avis publiés`,
    `${data.customers.total} clients enregistrés`,
  ];
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full"><div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5"><h2 className="text-sm font-bold text-[#e8e1d3] mb-5">Activité actuelle</h2><div className="flex flex-col gap-4">{activities.map((activity, index) => <div key={activity} className="flex gap-3"><div className="w-7 h-7 rounded-full border border-[#d4af37]/30 bg-[#14120f] flex items-center justify-center text-[#d4af37]"><span className="text-xs">{index + 1}</span></div><span className="text-xs text-[#e8e1d3] self-center">{activity}</span></div>)}</div></div><div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5"><h2 className="text-sm font-bold text-[#e8e1d3] mb-5">Résumé clients</h2><div className="space-y-4 text-sm"><div className="flex justify-between"><span className="text-[#a89b82]">Clients actifs</span><span className="text-[#2ecc71] font-semibold">{data.customers.active}</span></div><div className="flex justify-between"><span className="text-[#a89b82]">Clients inactifs</span><span className="text-[#e8e1d3] font-semibold">{data.customers.inactive}</span></div><div className="flex justify-between"><span className="text-[#a89b82]">Note moyenne</span><span className="text-[#d4af37] font-semibold">{data.reviews.average.toLocaleString("fr-FR")} / 5</span></div></div></div></div>;
}

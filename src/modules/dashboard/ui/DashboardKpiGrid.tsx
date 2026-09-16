import type { DashboardData } from "@/modules/dashboard/actions/dashboard.actions";

type Props = { data: DashboardData };

function KpiCard({ label, value, change, detail, negative = false }: { label: string; value: string; change: number; detail: string; negative?: boolean }) {
  const positive = negative ? change <= 0 : change >= 0;
  return <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-3 flex flex-col justify-between h-[100px] overflow-hidden"><div className="flex flex-col items-end min-w-0 flex-1"><span className="text-[11px] text-[#a89b82] whitespace-nowrap truncate w-full text-right">{label}</span><span className="text-[17px] font-bold mt-0.5 whitespace-nowrap truncate w-full text-right">{value}</span></div><div className="flex items-center justify-between gap-2 mt-auto pt-1"><span className={`${positive ? "text-[#2ecc71]" : "text-[#e74c3c]"} text-[10.5px] font-semibold`}>{change >= 0 ? "↑" : "↓"} {Math.abs(change)}%</span><span className="text-[9.5px] text-[#a89b82] truncate text-right">{detail}</span></div></div>;
}
export function DashboardKpiGrid({ data }: Props) {
  return <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4"><KpiCard label="Chiffre d'affaires" value={`${data.kpis.revenue.toLocaleString("fr-FR")} FCFA`} change={data.kpis.revenueChange} detail="sur la période précédente" /><KpiCard label="Commandes du jour" value={String(data.kpis.todayOrders)} change={data.kpis.ordersChange} detail="par rapport à la période précédente" /><KpiCard label="Total des commandes" value={String(data.kpis.totalOrders)} change={data.kpis.ordersChange} detail="commandes enregistrées" /><KpiCard label="Produits actifs" value={String(data.kpis.activeProducts)} change={0} detail="stock disponible" /><KpiCard label="Produits en rupture" value={String(data.kpis.outOfStock)} change={0} detail="stock à réapprovisionner" negative /></div>;
}

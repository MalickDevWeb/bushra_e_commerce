"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getCrmAnalytics } from "@/modules/clients/actions/crm.actions";

type Analytics = NonNullable<Awaited<ReturnType<typeof getCrmAnalytics>>>;

export default function CustomerAnalyticsPage() {
  const [data, setData] = useState<Analytics | null>(null);
  useEffect(() => { void getCrmAnalytics().then(setData); }, []);
  if (!data) return <AdminPageShell><div className="p-10 text-center text-[#a89b82]">Analyse des données clients...</div></AdminPageShell>;
  const total = data.segments.vip + data.segments.regular + data.segments.new || 1;
  const cards = [["Panier Moyen (AOV)", `${Math.round(data.metrics.aov).toLocaleString("fr-FR")} FCFA`], ["Valeur Vie Client (LTV)", `${Math.round(data.metrics.ltv).toLocaleString("fr-FR")} FCFA`], ["Taux de Rétention", `${Math.round(data.metrics.retention)}%`], ["Nouveaux Clients", String(data.metrics.newCustomers)]];
  const segmentRows: Array<[string, number, string]> = [["VIP (5+ commandes ou 200 000 FCFA)", data.segments.vip, "#d4af37"], ["Réguliers (1-4 commandes)", data.segments.regular, "#3498db"], ["Nouveaux (0 commande)", data.segments.new, "#2ecc71"]];
  return <AdminPageShell><AdminPageHeader title="Analytics Clients" description="Analysez la performance réelle de votre base de données clients." /><div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">{cards.map(([label, value]) => <div key={label} className="bg-[#1c1813] border border-[#d4af37]/20 rounded-xl p-4"><div className="text-[11px] text-[#a89b82] uppercase tracking-wider mb-1">{label}</div><div className="text-2xl font-bold text-[#d4af37]">{value}</div><div className="text-xs text-[#a89b82] mt-2">Calculé depuis les données enregistrées</div></div>)}</div><div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6"><h3 className="font-serif text-[#d4af37] text-lg mb-4">Répartition des Segments</h3>{segmentRows.map(([label, count, color]) => <div key={label} className="mb-4"><div className="flex justify-between text-sm mb-1"><span className="text-[#e8e1d3]">{label}</span><span className="text-[#a89b82]">{Math.round((count / total) * 100)}%</span></div><div className="w-full bg-[#0a0a0a] h-2 rounded-full overflow-hidden"><div className="h-full" style={{ width: `${(count / total) * 100}%`, backgroundColor: color }} /></div></div>)}</div><div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6"><h3 className="font-serif text-[#d4af37] text-lg mb-4">Affinité Produit (Top Catégories)</h3><ul className="space-y-3">{data.affinities.map((affinity, index) => <li key={affinity.name} className="flex items-center justify-between p-3 bg-[#1c1813] rounded border border-[#d4af37]/10"><span className="text-[#e8e1d3]">{index + 1}. {affinity.name}</span><span className="text-[#d4af37] font-bold">{affinity.percentage}% des achats</span></li>)}</ul></div></div></AdminPageShell>;
}

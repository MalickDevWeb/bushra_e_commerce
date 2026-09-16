"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getCrmAnalytics } from "@/modules/clients/actions/crm.actions";

type Analytics = NonNullable<Awaited<ReturnType<typeof getCrmAnalytics>>>;

export default function CustomerSegmentsPage() {
  const [data, setData] = useState<Analytics | null>(null);
  useEffect(() => { void getCrmAnalytics().then(setData); }, []);
  if (!data) return <AdminPageShell><div className="p-10 text-center text-[#a89b82]">Calcul des segments...</div></AdminPageShell>;
  const segments = [["VIP", "Clients ayant au moins 5 commandes ou 200 000 FCFA dépensés.", data.segments.vip, "AUTOMATIQUE", "#d4af37"], ["Amateurs de Oud", "Clients ayant acheté ou ajouté aux favoris des produits de catégories Oud/Encens.", data.affinities.find((item) => /oud|encens/i.test(item.name))?.percentage || 0, "DYNAMIQUE", "#3498db"], ["Risque de Churn", "Clients avec une commande mais aucune activité d'achat depuis plus de 45 jours.", data.segments.churnRisk, "RISQUE", "#e74c3c"]] as const;
  return <AdminPageShell><AdminPageHeader title="Segments Clients" description="Segmentation calculée depuis les comportements réels (RFM)." action={<button type="button" className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm">+ Nouveau Segment</button>} /><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{segments.map(([name, description, count, kind, color]) => <div key={name} className="bg-[#14120f] border rounded-xl p-5 shadow-lg relative overflow-hidden" style={{ borderColor: `${color}55` }}><div className="absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-xs font-bold" style={{ color, backgroundColor: `${color}18` }}>{kind}</div><h3 className="text-lg font-bold text-[#e8e1d3] mb-2">{name}</h3><p className="text-sm text-[#a89b82] mb-4">{description}</p><div className="flex items-center justify-between mt-4"><span className="text-2xl font-serif" style={{ color }}>{count}</span><span className="text-xs text-[#a89b82]">clients</span></div></div>)}</div><div className="mt-8 overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-10 text-center"><p className="text-[#a89b82]">Les volumes sont calculés depuis les commandes, favoris et dates d'achat enregistrés.</p></div></AdminPageShell>;
}

"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getCampaigns } from "@/modules/clients/actions/campaign.actions";

type Campaign = Awaited<ReturnType<typeof getCampaigns>>[number];

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getCampaigns();
      setCampaigns(data);
      setIsLoading(false);
    }
    load();
  }, []);

  return (
    <AdminPageShell>
      <AdminPageHeader 
        title="Campagnes (Exécution)" 
        description="Gérez et suivez vos campagnes SMS, WhatsApp et Email." 
        action={<button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors">+ Créer une campagne</button>}
      />

      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr>
                <th className="px-5 py-4">Nom de la campagne</th>
                <th className="px-5 py-4">Canal</th>
                <th className="px-5 py-4">Audience</th>
                <th className="px-5 py-4">Statut</th>
                <th className="px-5 py-4 text-right">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              
              {isLoading ? (
                <tr><td colSpan={5} className="p-10 text-center text-[#a89b82]">Chargement...</td></tr>
              ) : campaigns.length === 0 ? (
                <tr><td colSpan={5} className="p-10 text-center text-[#a89b82]">Aucune campagne pour le moment.</td></tr>
              ) : campaigns.map(c => (
                <tr key={c.id} className="group transition-colors hover:bg-[#d4af37]/5 cursor-pointer">
                  <td className="px-5 py-4">
                    <div className="font-serif text-[14px] font-bold text-[#e8e1d3]">{c.name}</div>
                  </td>
                  <td className="px-5 py-4 text-[13px] font-medium text-[#2ecc71]">{c.channel}</td>
                  <td className="px-5 py-4 text-[13px] text-[#e8e1d3]">{c.segment?.name || "Tous"}</td>
                  <td className="px-5 py-4">
                    <span className="bg-[#3498db]/15 text-[#3498db] border border-[#3498db]/30 px-2.5 py-1 rounded-full text-[10px]">{c.status}</span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    {c.status === "COMPLETED" ? (
                       <>
                         <div className="text-[#2ecc71] font-bold text-[13px]">{c.conversions} conversions</div>
                         <div className="text-[11px] text-[#d4af37]">{c.revenue.toLocaleString()} FCFA</div>
                       </>
                    ) : (
                      <span className="text-[#a89b82]">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminPageShell>
  );
}

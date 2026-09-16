import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type CampaignStatus = "Terminé" | "Brouillon";

type Campaign = {
  id: string;
  name: string;
  channel: string;
  audience: string;
  sent: number;
  clicks: number;
  conversions: number;
  date: string;
  status: CampaignStatus;
};

const campaigns: Campaign[] = [
  {
    id: "CAMP-01",
    name: "Promo Tabaski 2024",
    channel: "SMS",
    audience: "Tous les clients",
    sent: 1250,
    clicks: 450,
    conversions: 85,
    date: "15 Juin 2024",
    status: "Terminé",
  },
  {
    id: "CAMP-02",
    name: "Lancement Nouveau Parfum",
    channel: "Email",
    audience: "Clients VIP",
    sent: 120,
    clicks: 80,
    conversions: 24,
    date: "01 Sept 2024",
    status: "Terminé",
  },
  {
    id: "CAMP-03",
    name: "Offre Spéciale Magal",
    channel: "Email & SMS",
    audience: "Tous les clients",
    sent: 0,
    clicks: 0,
    conversions: 0,
    date: "25 Août 2024",
    status: "Brouillon",
  },
];

const tableHeaders = [
  "Nom de la campagne",
  "Canal",
  "Cible",
  "Envoyés",
  "Clics",
  "Conversions",
  "Statut",
  "Actions",
] as const;

function getStatusColor(status: CampaignStatus) {
  switch (status) {
    case "Terminé":
      return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
    case "Brouillon":
      return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
    default:
      return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
  }
}

function StatusBadge({ status }: { status: CampaignStatus }) {
  return (
    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}

function CampaignRow({ campaign }: { campaign: Campaign }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group">
      <td className="py-4 px-5">
        <div className="flex flex-col">
          <span className="text-[14px] font-bold text-[#e8e1d3] font-serif">{campaign.name}</span>
          <span className="text-[11px] text-[#a89b82] mt-0.5">{campaign.date}</span>
        </div>
      </td>
      <td className="py-4 px-5">
        <span className="text-[12px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20">
          {campaign.channel}
        </span>
      </td>
      <td className="py-4 px-5 text-[13px] text-[#e8e1d3]">{campaign.audience}</td>
      <td className="py-4 px-5 text-[13px] text-[#e8e1d3] text-center">{campaign.sent}</td>
      <td className="py-4 px-5 text-[13px] text-[#3498db] font-bold text-center">{campaign.clicks}</td>
      <td className="py-4 px-5 text-[13px] text-[#2ecc71] font-bold text-center">{campaign.conversions}</td>
      <td className="py-4 px-5">
        <StatusBadge status={campaign.status} />
      </td>
      <td className="py-4 px-5 text-right">
        <button
          type="button"
          className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors"
          title="Statistiques détaillées"
          aria-label="Statistiques détaillées"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default function CampaignsManagement() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Campagnes Marketing"
        description="Gérez vos campagnes promotionnelles par Email et SMS"
        action={<button type="button" className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">Nouvelle Campagne</button>}
      />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className={`py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] ${
                      ["Envoyés", "Clics", "Conversions"].includes(header) ? "text-center" : ""
                    } ${header === "Actions" ? "text-right" : ""}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {campaigns.map((campaign) => (
                <CampaignRow key={campaign.id} campaign={campaign} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminPageShell>
  );
}


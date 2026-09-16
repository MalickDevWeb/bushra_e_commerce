import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type SubscriberStatus = "Actif" | "Désabonné";

type Subscriber = {
  id: string;
  email: string;
  date: string;
  source: string;
  status: SubscriberStatus;
};

const subscribers: Subscriber[] = [
  {
    id: "SUB-001",
    email: "aissatou.d@example.com",
    date: "12 Sept 2024",
    source: "Popup Accueil",
    status: "Actif",
  },
  {
    id: "SUB-002",
    email: "moussa.nd@example.com",
    date: "10 Sept 2024",
    source: "Footer",
    status: "Actif",
  },
  {
    id: "SUB-003",
    email: "fatou.sow@example.com",
    date: "05 Sept 2024",
    source: "Checkout",
    status: "Désabonné",
  },
  {
    id: "SUB-004",
    email: "ibrahima.fall@example.com",
    date: "01 Sept 2024",
    source: "Popup Accueil",
    status: "Actif",
  },
];

const tableHeaders = ["Email", "Date d'inscription", "Source", "Statut"] as const;

function getSubscriberStatusColor(status: SubscriberStatus) {
  return status === "Actif"
    ? "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30"
    : "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30";
}

function StatusBadge({ status }: { status: SubscriberStatus }) {
  return (
    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getSubscriberStatusColor(status)}`}>
      {status}
    </span>
  );
}

function SubscriberRow({ subscriber }: { subscriber: Subscriber }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group">
      <td className="py-4 px-5">
        <span className="text-[14px] font-medium text-[#e8e1d3]">{subscriber.email}</span>
      </td>
      <td className="py-4 px-5 text-[13px] text-[#a89b82]">{subscriber.date}</td>
      <td className="py-4 px-5 text-[13px] text-[#e8e1d3]">{subscriber.source}</td>
      <td className="py-4 px-5">
        <StatusBadge status={subscriber.status} />
      </td>
    </tr>
  );
}

export default function NewsletterManagement() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Abonnés Newsletter"
        description="Gérez votre liste de diffusion"
        action={<button type="button" className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">Exporter la liste (CSV)</button>}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
          <div className="text-[13px] text-[#a89b82] mb-1">Total abonnés</div>
          <div className="text-3xl font-bold font-serif text-[#d4af37]">2,450</div>
          <div className="text-[11px] text-[#2ecc71] mt-1">+12 cette semaine</div>
        </div>
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
          <div className="text-[13px] text-[#a89b82] mb-1">Taux d&apos;ouverture moyen</div>
          <div className="text-3xl font-bold font-serif text-[#e8e1d3]">45.2%</div>
          <div className="text-[11px] text-[#2ecc71] mt-1">+2.1% par rapport au mois dernier</div>
        </div>
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
          <div className="text-[13px] text-[#a89b82] mb-1">Désabonnements</div>
          <div className="text-3xl font-bold font-serif text-[#e74c3c]">1.5%</div>
          <div className="text-[11px] text-[#a89b82] mt-1">Dans la moyenne du secteur</div>
        </div>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                {tableHeaders.map((header) => (
                  <th key={header} className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {subscribers.map((subscriber) => (
                <SubscriberRow key={subscriber.id} subscriber={subscriber} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminPageShell>
  );
}


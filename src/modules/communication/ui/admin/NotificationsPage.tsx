import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type NotificationStatus = "Actif" | "Inactif";

type NotificationRule = {
  id: string;
  trigger: string;
  channel: string;
  audience: string;
  status: NotificationStatus;
  lastSent: string;
};

const notifications: NotificationRule[] = [
  {
    id: "NOTIF-01",
    trigger: "Commande confirmée",
    channel: "Email & SMS",
    audience: "Acheteurs",
    status: "Actif",
    lastSent: "Aujourd'hui, 14:32",
  },
  {
    id: "NOTIF-02",
    trigger: "Panier abandonné (24h)",
    channel: "Email",
    audience: "Visiteurs inscrits",
    status: "Actif",
    lastSent: "Hier, 18:00",
  },
  {
    id: "NOTIF-03",
    trigger: "Retour en stock",
    channel: "Email",
    audience: "Liste d'attente",
    status: "Inactif",
    lastSent: "-",
  },
  {
    id: "NOTIF-04",
    trigger: "Commande expédiée",
    channel: "SMS",
    audience: "Acheteurs",
    status: "Actif",
    lastSent: "Hier, 16:45",
  },
];

const tableHeaders = [
  "Déclencheur",
  "Canal",
  "Cible",
  "Dernier envoi",
  "Statut",
  "Actions",
] as const;

function getStatusColor(status: NotificationStatus) {
  switch (status) {
    case "Actif":
      return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
    case "Inactif":
      return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    default:
      return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
  }
}

function StatusBadge({ status }: { status: NotificationStatus }) {
  return (
    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}

function NotificationRow({ notification }: { notification: NotificationRule }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group">
      <td className="py-4 px-5">
        <span className="text-[14px] font-bold text-[#e8e1d3] font-serif">{notification.trigger}</span>
      </td>
      <td className="py-4 px-5">
        <span className="text-[12px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20">
          {notification.channel}
        </span>
      </td>
      <td className="py-4 px-5 text-[13px] text-[#e8e1d3]">{notification.audience}</td>
      <td className="py-4 px-5 text-[13px] text-[#a89b82]">{notification.lastSent}</td>
      <td className="py-4 px-5">
        <StatusBadge status={notification.status} />
      </td>
      <td className="py-4 px-5 text-right">
        <button
          type="button"
          className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors"
          title="Modifier le modèle"
          aria-label="Modifier le modèle"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default function NotificationsManagement() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Notifications Automatiques"
        description="Gérez les emails et SMS envoyés automatiquement à vos clients"
        action={
          <button
            type="button"
            className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            Créer une règle
          </button>
        }
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
                      header === "Actions" ? "text-right" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {notifications.map((notification) => (
                <NotificationRow key={notification.id} notification={notification} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminPageShell>
  );
}


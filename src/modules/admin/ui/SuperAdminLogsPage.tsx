import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type LogStatus = "Succès" | "Échec" | "Avertissement";

type LogEntry = {
  time: string;
  user: string;
  action: string;
  ip: string;
  status: LogStatus;
};

const logs: LogEntry[] = [
  { time: "12 Sept 2024 - 15:32:10", user: "admin@bushra.sn", action: "Connexion réussie", ip: "197.214.12.34", status: "Succès" },
  { time: "12 Sept 2024 - 14:15:00", user: "Système", action: "Sauvegarde base de données", ip: "localhost", status: "Succès" },
  { time: "12 Sept 2024 - 09:45:22", user: "inconnu", action: "Tentative de connexion échouée", ip: "45.33.22.11", status: "Échec" },
  { time: "11 Sept 2024 - 18:20:05", user: "admin@bushra.sn", action: "Modification Clé API Stripe", ip: "197.214.12.34", status: "Avertissement" },
];

const tableHeaders = ["Horodatage", "Utilisateur", "Action", "Adresse IP", "Statut"] as const;

function getStatusColor(status: LogStatus) {
  switch (status) {
    case "Succès":
      return "text-[#2ecc71]";
    case "Échec":
      return "text-[#e74c3c]";
    case "Avertissement":
      return "text-[#f39c12]";
    default:
      return "text-[#a89b82]";
  }
}

function LogRow({ log }: { log: LogEntry }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group">
      <td className="py-3 px-5 text-[#a89b82]">{log.time}</td>
      <td className="py-3 px-5 text-[#d4af37]">{log.user}</td>
      <td className="py-3 px-5 text-[#e8e1d3]">{log.action}</td>
      <td className="py-3 px-5 text-[#a89b82]">{log.ip}</td>
      <td className="py-3 px-5">
        <span className={`font-bold ${getStatusColor(log.status)}`}>[{log.status.toUpperCase()}]</span>
      </td>
    </tr>
  );
}

export default function SuperAdminLogsPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Journal d&apos;Activité (Logs)" description="Tracez toutes les actions sensibles effectuées sur le système" action={<button type="button" className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">Télécharger les logs (CSV)</button>} />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-[12px]">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813] font-sans">
                {tableHeaders.map((header) => (
                  <th key={header} className="py-4 px-5 font-bold uppercase tracking-wider text-[#a89b82]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {logs.map((log) => (
                <LogRow key={`${log.time}-${log.user}-${log.action}`} log={log} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminPageShell>
  );
}


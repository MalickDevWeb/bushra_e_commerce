import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type BackupStatus = "Succès" | "Échoué";

type Backup = {
  id: string;
  date: string;
  size: string;
  type: string;
  status: BackupStatus;
};

const backups: Backup[] = [
  { id: "BK-240912", date: "12 Sept 2024 - 02:00", size: "1.2 GB", type: "Automatique (Complète)", status: "Succès" },
  { id: "BK-240911", date: "11 Sept 2024 - 02:00", size: "1.1 GB", type: "Automatique (Complète)", status: "Succès" },
  { id: "BK-240910", date: "10 Sept 2024 - 15:30", size: "1.1 GB", type: "Manuelle (Base de données)", status: "Succès" },
  { id: "BK-240909", date: "09 Sept 2024 - 02:00", size: "---", type: "Automatique", status: "Échoué" },
];

const tableHeaders = ["ID Sauvegarde", "Date de création", "Type", "Taille", "Statut", "Actions"] as const;

function getStatusColor(status: BackupStatus) {
  return status === "Succès"
    ? "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30"
    : "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30";
}

function StatusBadge({ status }: { status: BackupStatus }) {
  return <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(status)}`}>{status}</span>;
}

function BackupRow({ backup }: { backup: Backup }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group">
      <td className="py-4 px-5 text-[13px] font-mono text-[#d4af37]">{backup.id}</td>
      <td className="py-4 px-5 text-[13px] text-[#e8e1d3]">{backup.date}</td>
      <td className="py-4 px-5 text-[12px] text-[#a89b82]">{backup.type}</td>
      <td className="py-4 px-5 text-[13px] text-[#e8e1d3] font-mono">{backup.size}</td>
      <td className="py-4 px-5">
        <StatusBadge status={backup.status} />
      </td>
      <td className="py-4 px-5 text-right flex items-center justify-end gap-2">
        <button type="button" className="text-[#a89b82] hover:text-[#d4af37] text-xs px-2 py-1" title="Télécharger" aria-label="Télécharger">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </button>
        <button type="button" className="text-[#a89b82] hover:text-red-400 text-xs px-2 py-1" title="Supprimer" aria-label="Supprimer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default function SuperAdminBackupPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Sauvegardes Système (Backups)" description="Gérez les archives et points de restauration de la plateforme" action={<button type="button" className="flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          Créer une sauvegarde maintenant
        </button>} />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
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
            {backups.map((backup) => (
              <BackupRow key={backup.id} backup={backup} />
            ))}
          </tbody>
        </table>
      </div>
    </AdminPageShell>
  );
}


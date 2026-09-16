import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type StatusName = "En attente" | "Payé" | "En préparation" | "Expédié" | "Livré" | "Annulé";

type OrderStatusItem = {
  name: StatusName;
  color: string;
  desc: string;
};

const orderStatuses: OrderStatusItem[] = [
  {
    name: "En attente",
    color: "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30",
    desc: "La commande vient d'être passée, en attente de paiement.",
  },
  {
    name: "Payé",
    color: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30",
    desc: "Le paiement a été confirmé.",
  },
  {
    name: "En préparation",
    color: "bg-[#9b59b6]/15 text-[#9b59b6] border-[#9b59b6]/30",
    desc: "La commande est en cours de préparation dans l'entrepôt.",
  },
  {
    name: "Expédié",
    color: "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30",
    desc: "La commande a été remise au livreur.",
  },
  {
    name: "Livré",
    color: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30",
    desc: "Le client a reçu sa commande.",
  },
  {
    name: "Annulé",
    color: "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30",
    desc: "La commande a été annulée.",
  },
];

const tableHeaders = ["Aperçu du statut", "Description de l'étape", "Actions"] as const;

function StatusBadge({ name, color }: { name: StatusName; color: string }) {
  return (
    <span className={`px-3 py-1.5 text-[11px] font-medium rounded-full border ${color}`}>
      {name}
    </span>
  );
}

function StatusRow({ status }: { status: OrderStatusItem }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group">
      <td className="py-4 px-5">
        <StatusBadge name={status.name} color={status.color} />
      </td>
      <td className="py-4 px-5 text-[13px] text-[#a89b82]">{status.desc}</td>
      <td className="py-4 px-5 text-right">
        <button type="button" className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors">
          Éditer
        </button>
      </td>
    </tr>
  );
}

export default function OrderStatusesManagement() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Configuration des Statuts"
        description="Personnalisez les statuts de suivi de commande"
        action={<button type="button" className="px-4 py-2 bg-[#14120f] border border-[#d4af37]/30 text-[#d4af37] rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors">Ajouter un statut</button>}
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
              {orderStatuses.map((status) => (
                <StatusRow key={status.name} status={status} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminPageShell>
  );
}


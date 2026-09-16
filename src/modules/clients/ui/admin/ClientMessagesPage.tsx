import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type MessageStatus = "Nouveau" | "En cours" | "Résolu";

type ClientMessage = {
  id: string;
  customer: string;
  subject: string;
  preview: string;
  date: string;
  status: MessageStatus;
};

const messages: ClientMessage[] = [
  {
    id: "MSG-01",
    customer: "Aïssatou Diallo",
    subject: "Question sur la composition de l'Oud Royal",
    preview: "Bonjour, j'aimerais savoir si l'Oud Royal contient de l'alcool...",
    date: "Aujourd'hui, 10:30",
    status: "Nouveau",
  },
  {
    id: "MSG-02",
    customer: "Fatou Sow",
    subject: "Problème avec ma commande #CMD-1022",
    preview: "L'adresse de livraison que j'ai renseignée est incomplète. Pouvez-vous...",
    date: "Hier, 16:45",
    status: "En cours",
  },
  {
    id: "MSG-03",
    customer: "Ibrahima Fall",
    subject: "Remerciements !",
    preview: "Je viens de recevoir mon colis, l'emballage est magnifique et...",
    date: "09 Sept 2024",
    status: "Résolu",
  },
];

function getStatusColor(status: MessageStatus) {
  switch (status) {
    case "Nouveau":
      return "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30";
    case "En cours":
      return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
    case "Résolu":
      return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
    default:
      return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
  }
}

function StatusBadge({ status }: { status: MessageStatus }) {
  return (
    <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded border ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}

function MessageRow({ message }: { message: ClientMessage }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 hover:bg-[#d4af37]/5 transition-colors cursor-pointer group">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[14px] font-bold text-[#e8e1d3] font-serif">{message.customer}</span>
          <StatusBadge status={message.status} />
          <span className="text-[12px] text-[#a89b82] ml-auto sm:ml-0">{message.date}</span>
        </div>
        <div className="text-[14px] font-medium text-[#d4af37] mb-1">{message.subject}</div>
        <div className="text-[13px] text-[#a89b82] truncate">{message.preview}</div>
      </div>
      <button
        type="button"
        className="hidden sm:flex p-2 text-[#a89b82] hover:text-[#d4af37] transition-colors rounded border border-transparent group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        <span className="ml-2 text-[12px] font-medium">Répondre</span>
      </button>
    </div>
  );
}

export default function ClientMessagesManagement() {
  return (
    <AdminPageShell>
      <AdminPageHeader title="Messages & Support" description="Gérez les requêtes du service client" />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="flex flex-col divide-y divide-[#d4af37]/10">
          {messages.map((message) => (
            <MessageRow key={message.id} message={message} />
          ))}
        </div>
      </div>
    </AdminPageShell>
  );
}


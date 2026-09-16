type ClientStatus = "VIP" | "Régulier" | "Nouveau";

type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: string;
  status: ClientStatus;
  joined: string;
};

function getStatusBadge(status: ClientStatus) {
  switch (status) {
    case "VIP":
      return "bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/40";
    case "Régulier":
      return "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30";
    case "Nouveau":
      return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
    default:
      return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
  }
}

function StatusBadge({ status }: { status: ClientStatus }) {
  return (
    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusBadge(status)}`}>
      {status}
    </span>
  );
}

export default function ClientRow({ client }: { client: Client }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
      <td className="py-4 px-5"><input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer opacity-50 group-hover:opacity-100" /></td>
      <td className="py-4 px-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#d4af37] font-serif font-bold text-lg">{client.name.charAt(0)}</div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#e8e1d3] font-serif group-hover:text-[#d4af37] transition-colors">{client.name}</span>
            <span className="text-[11px] text-[#a89b82]">{client.id}</span>
          </div>
        </div>
      </td>
      <td className="py-4 px-5"><div className="flex flex-col"><span className="text-[13px] text-[#e8e1d3]">{client.email}</span><span className="text-[12px] text-[#a89b82]">{client.phone}</span></div></td>
      <td className="py-4 px-5 text-[14px] text-[#e8e1d3]">{client.orders}</td>
      <td className="py-4 px-5 text-[14px] font-bold text-[#d4af37]">{client.spent}</td>
      <td className="py-4 px-5"><StatusBadge status={client.status} /></td>
      <td className="py-4 px-5 text-[13px] text-[#a89b82]">{client.joined}</td>
      <td className="py-4 px-5 text-right">
        <button type="button" className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors" title="Voir le profil">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

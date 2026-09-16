import ClientRow from "./ClientRow";

type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: string;
  status: "VIP" | "Régulier" | "Nouveau";
  joined: string;
};

const clients: Client[] = [
  {
    id: "CLT-5049",
    name: "Aïssatou Diallo",
    email: "aissatou.d@example.com",
    phone: "+221 77 123 45 67",
    orders: 12,
    spent: "345 000 FCFA",
    status: "VIP",
    joined: "12/01/2023",
  },
  {
    id: "CLT-5048",
    name: "Moussa Ndiaye",
    email: "moussa.nd@example.com",
    phone: "+221 76 987 65 43",
    orders: 2,
    spent: "45 000 FCFA",
    status: "Régulier",
    joined: "05/08/2024",
  },
  {
    id: "CLT-5047",
    name: "Fatou Sow",
    email: "fsow99@example.com",
    phone: "+221 78 555 44 33",
    orders: 5,
    spent: "120 000 FCFA",
    status: "Régulier",
    joined: "22/11/2023",
  },
  {
    id: "CLT-5046",
    name: "Ibrahima Fall",
    email: "ibra.fall@example.com",
    phone: "+221 70 111 22 33",
    orders: 0,
    spent: "0 FCFA",
    status: "Nouveau",
    joined: "10/09/2024",
  },
];

const tableHeaders = [
  "Client",
  "Contact",
  "Commandes",
  "Total Dépensé",
  "Statut",
  "Inscription",
  "Actions",
] as const;

export default function ClientsListTable() {
  return (
    <>
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#a89b82]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Rechercher par nom, email ou téléphone..."
            className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] placeholder-[#a89b82]/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-3 py-2.5 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
            <option value="">Tous les statuts</option>
            <option value="vip">VIP</option>
            <option value="regulier">Régulier</option>
            <option value="nouveau">Nouveau</option>
          </select>
        </div>
      </div>

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] w-[40px]">
                  <input type="checkbox" className="rounded border-[#d4af37]/40 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37] accent-[#d4af37] w-3.5 h-3.5 cursor-pointer" />
                </th>
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
              {clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

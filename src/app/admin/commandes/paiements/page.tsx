export default function CommandesPaiementsPage() {
  const payments = [
    {
      id: "TXN-998877",
      orderId: "#CMD-1024",
      method: "Wave",
      amount: "65 000 FCFA",
      date: "12 Sept 2024 - 14:32",
      status: "Réussi",
    },
    {
      id: "TXN-998876",
      orderId: "#CMD-1023",
      method: "Orange Money",
      amount: "25 000 FCFA",
      date: "11 Sept 2024 - 09:16",
      status: "En attente",
    },
    {
      id: "TXN-998875",
      orderId: "#CMD-1022",
      method: "Carte Bancaire",
      amount: "120 000 FCFA",
      date: "10 Sept 2024 - 18:46",
      status: "Réussi",
    },
    {
      id: "TXN-998874",
      orderId: "#CMD-1021",
      method: "Wave",
      amount: "15 000 FCFA",
      date: "10 Sept 2024 - 11:22",
      status: "Échoué",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Réussi": return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "En attente": return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
      case "Échoué": return "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30";
      default: return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Suivi des Paiements</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Gérez les transactions financières de vos commandes</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Transaction</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Commande</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Méthode</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Montant</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Date</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5 text-[13px] text-[#a89b82] font-mono">{payment.id}</td>
                  <td className="py-4 px-5 text-[14px] font-bold text-[#d4af37] cursor-pointer hover:underline">{payment.orderId}</td>
                  <td className="py-4 px-5 text-[13px] text-[#e8e1d3] font-medium">{payment.method}</td>
                  <td className="py-4 px-5 text-[14px] text-[#e8e1d3] font-serif">{payment.amount}</td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82]">{payment.date}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


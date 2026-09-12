export default function ClientsAvisPage() {
  const reviews = [
    {
      id: "REV-892",
      customer: "Aïssatou Diallo",
      product: "Oud Royal",
      rating: 5,
      comment: "Le parfum tient toute la journée, une odeur vraiment luxueuse. Je recommande à 100% !",
      date: "12 Sept 2024",
      status: "Publié",
    },
    {
      id: "REV-891",
      customer: "Moussa Ndiaye",
      product: "Gowé Suprême",
      rating: 4,
      comment: "Très bon encens, mais la livraison a pris un jour de plus que prévu.",
      date: "10 Sept 2024",
      status: "En attente",
    },
    {
      id: "REV-890",
      customer: "Fatou Sow",
      product: "Musc Blanc",
      rating: 5,
      comment: "Parfait, exactement ce que je cherchais.",
      date: "05 Sept 2024",
      status: "Publié",
    },
    {
      id: "REV-889",
      customer: "Client Anonyme",
      product: "Thiouraye Tradition",
      rating: 2,
      comment: "Je n'ai pas trop aimé l'odeur, c'est une question de goût.",
      date: "01 Sept 2024",
      status: "Rejeté",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Publié": return "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30";
      case "En attente": return "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30";
      case "Rejeté": return "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30";
      default: return "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30";
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} viewBox="0 0 24 24" fill={star <= rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={`w-4 h-4 ${star <= rating ? "text-[#d4af37]" : "text-[#d4af37]/30"}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Avis Clients</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Modérez et répondez aux avis laissés sur vos produits</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Client & Produit</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Note</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Commentaire</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Date</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82]">Statut</th>
                <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {reviews.map((review) => (
                <tr key={review.id} className="hover:bg-[#d4af37]/5 transition-colors group">
                  <td className="py-4 px-5">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-[#e8e1d3] font-serif">{review.customer}</span>
                      <span className="text-[12px] text-[#d4af37] cursor-pointer hover:underline">Sur : {review.product}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    {renderStars(review.rating)}
                  </td>
                  <td className="py-4 px-5">
                    <p className="text-[13px] text-[#e8e1d3] max-w-sm italic">"{review.comment}"</p>
                  </td>
                  <td className="py-4 px-5 text-[13px] text-[#a89b82] whitespace-nowrap">{review.date}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 text-[10px] rounded-full border ${getStatusColor(review.status)}`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/30 px-2 py-1.5 rounded text-[11px] hover:bg-[#2ecc71] hover:text-[#0a0a0a] transition-colors" title="Approuver">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      </button>
                      <button className="bg-[#e74c3c]/10 text-[#e74c3c] border border-[#e74c3c]/30 px-2 py-1.5 rounded text-[11px] hover:bg-[#e74c3c] hover:text-[#0a0a0a] transition-colors" title="Rejeter">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
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


"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getReviews, moderateReview } from "@/modules/clients/actions/client.actions";

type Review = Awaited<ReturnType<typeof getReviews>>[number];
const tableHeaders = ["Client & Produit", "Note", "Commentaire", "Date", "Statut", "Actions"] as const;
const statusLabels: Record<string, string> = { APPROVED: "Publié", PENDING: "En attente", REJECTED: "Rejeté" };
const statusColors: Record<string, string> = { APPROVED: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30", PENDING: "bg-[#f39c12]/15 text-[#f39c12] border-[#f39c12]/30", REJECTED: "bg-[#e74c3c]/15 text-[#e74c3c] border-[#e74c3c]/30" };

function renderStars(rating: number) {
  return <div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map((star) => <span key={star} className={star <= rating ? "text-[#d4af37]" : "text-[#d4af37]/30"}>★</span>)}</div>;
}

export default function ClientReviewsTable() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  async function loadReviews() {
    setIsLoading(true);
    setReviews(await getReviews());
    setIsLoading(false);
  }

  useEffect(() => { void loadReviews(); }, []);

  async function updateStatus(id: string, status: "APPROVED" | "REJECTED") {
    setUpdatingId(id);
    const result = await moderateReview(id, status);
    setUpdatingId(null);
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(status === "APPROVED" ? "Avis validé." : "Avis rejeté.");
    await loadReviews();
  }

  return (
    <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left border-collapse">
          <thead><tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">{tableHeaders.map((header) => <th key={header} className={`py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] ${header === "Actions" ? "text-right" : ""}`}>{header}</th>)}</tr></thead>
          <tbody className="divide-y divide-[#d4af37]/10">
            {isLoading ? <tr><td colSpan={6} className="p-10 text-center text-[#a89b82]">Chargement...</td></tr> : reviews.length === 0 ? <tr><td colSpan={6} className="p-10 text-center text-[#a89b82]">Aucun avis.</td></tr> : reviews.map((review) => <tr key={review.id} className="hover:bg-[#d4af37]/5 transition-colors"><td className="py-4 px-5"><div className="flex flex-col"><span className="text-[14px] font-bold text-[#e8e1d3] font-serif">{review.user?.name || "Client anonyme"}</span><span className="text-[12px] text-[#d4af37]">Sur : {review.product.name}</span></div></td><td className="py-4 px-5">{renderStars(review.rating)}</td><td className="py-4 px-5"><p className="text-[13px] text-[#e8e1d3] max-w-sm italic">&quot;{review.comment || "Aucun commentaire"}&quot;</p></td><td className="py-4 px-5 text-[13px] text-[#a89b82] whitespace-nowrap">{new Date(review.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}</td><td className="py-4 px-5"><span className={`px-2.5 py-1 text-[10px] rounded-full border ${statusColors[review.status] || statusColors.PENDING}`}>{statusLabels[review.status] || review.status}</span></td><td className="py-4 px-5 text-right"><div className="flex items-center justify-end gap-2"><button type="button" disabled={updatingId === review.id} onClick={() => void updateStatus(review.id, "APPROVED")} className="bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/30 px-2 py-1.5 rounded text-[11px] hover:bg-[#2ecc71] hover:text-[#0a0a0a] disabled:opacity-40" title="Valider" aria-label="Valider"><span aria-hidden="true">✓</span></button><button type="button" disabled={updatingId === review.id} onClick={() => void updateStatus(review.id, "REJECTED")} className="bg-[#e74c3c]/10 text-[#e74c3c] border border-[#e74c3c]/30 px-2 py-1.5 rounded text-[11px] hover:bg-[#e74c3c] hover:text-[#0a0a0a] disabled:opacity-40" title="Rejeter" aria-label="Rejeter"><span aria-hidden="true">×</span></button></div></td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

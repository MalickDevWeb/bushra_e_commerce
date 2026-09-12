"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createProduct, getCategories } from "@/app/actions/product.actions";
import { toast } from "sonner";
import { ImageUpload } from "@/shared/ui/ImageUpload";

export default function NouveauProduitPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    const res = await createProduct(formData);
    
    setIsSubmitting(false);
    
    if (res.success) {
      toast.success("Produit ajouté avec succès");
      router.push("/admin/boutique/produits");
    } else {
      toast.error(res.error || "Une erreur est survenue");
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[800px] mx-auto pb-10">
      
      {/* HEADER */}
      <div className="flex items-center gap-4">
        <Link href="/admin/boutique/produits" className="w-10 h-10 flex items-center justify-center bg-[#14120f] border border-[#d4af37]/30 rounded-full text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">Ajouter un produit</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">Créez un nouvel article pour votre catalogue</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 flex flex-col gap-6">
        
        {/* Informations de base */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[15px] font-semibold text-[#e8e1d3] border-b border-[#d4af37]/10 pb-2">Informations de base</h2>
          
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1.5">Nom du produit *</label>
            <input required type="text" name="name" placeholder="Ex: Encensoir Royal Or" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" />
          </div>

          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1.5">Catégorie *</label>
            <select required name="categoryId" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
              <option value="">Sélectionner une catégorie</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1.5">Description</label>
            <textarea name="description" rows={4} placeholder="Description détaillée du produit..." className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"></textarea>
          </div>
        </div>

        {/* Prix et Stock */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[15px] font-semibold text-[#e8e1d3] border-b border-[#d4af37]/10 pb-2">Prix et Stock</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] text-[#a89b82] mb-1.5">Prix (FCFA) *</label>
              <input required type="number" name="price" min="0" step="100" placeholder="Ex: 15000" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" />
            </div>
            <div>
              <label className="block text-[13px] text-[#a89b82] mb-1.5">Stock initial</label>
              <input type="number" name="stock" min="0" defaultValue="10" className="w-full bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" />
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[15px] font-semibold text-[#e8e1d3] border-b border-[#d4af37]/10 pb-2">Image Principale</h2>
          
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1.5">Photo du produit</label>
            <input type="hidden" name="image" value={imageUrl} />
            <ImageUpload value={imageUrl} onChange={setImageUrl} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-4 pt-6 border-t border-[#d4af37]/20">
          <Link href="/admin/boutique/produits" className="px-5 py-2.5 text-[13px] font-medium text-[#a89b82] hover:text-[#e8e1d3] transition-colors">
            Annuler
          </Link>
          <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-[#d4af37] text-[#0a0a0a] px-6 py-2.5 rounded-md font-bold text-[13px] hover:bg-[#c59b32] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)] disabled:opacity-50">
            {isSubmitting ? "Création..." : "Créer le produit"}
          </button>
        </div>

      </form>
    </div>
  );
}


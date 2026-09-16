"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createCategory, createProduct, getCategories } from "@/modules/content/actions/product.actions";
import { toast } from "sonner";
import { ImageUpload } from "@/shared/ui/ImageUpload";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type ProductCategory = {
  id: string;
  name: string;
};

export default function NewProductManagement() {
  const router = useRouter();
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [categoryError, setCategoryError] = useState("");
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [image2Url, setImage2Url] = useState("");
  const [image3Url, setImage3Url] = useState("");
  const images = [imageUrl, image2Url, image3Url].filter(Boolean);
  const setImages = (next: string[]) => {
    setImageUrl(next[0] || "");
    setImage2Url(next[1] || "");
    setImage3Url(next[2] || "");
  };
  const moveImage = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target > 2 || !images[index]) return;
    const next = [...images];
    [next[index], next[target]] = [next[target], next[index]];
    setImages(next);
  };
  const removeImage = (index: number) => setImages(images.filter((_, imageIndex) => imageIndex !== index));

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

  const handleCreateCategory = async () => {
    setCategoryError("");
    if (!newCategoryName.trim()) {
      setCategoryError("Saisissez le nom de la catégorie.");
      return;
    }
    setIsCreatingCategory(true);
    const result = await createCategory(newCategoryName);
    setIsCreatingCategory(false);
    if (!result.success || !("category" in result)) {
      setCategoryError(result.error);
      return;
    }
    const created = result.category;
    setCategories((current) => [...current, { id: created.id, name: created.name }].sort((a, b) => a.name.localeCompare(b.name)));
    setSelectedCategoryId(created.id);
    setNewCategoryName("");
    setCategoryError("");
    setShowCategoryForm(false);
  };

  return (
    <AdminPageShell className="max-w-[800px]">
      
      <AdminPageHeader
        title="Ajouter un produit"
        description="Créez un nouvel article pour votre catalogue"
        leading={
          <Link href="/admin/boutique/produits" className="w-10 h-10 flex items-center justify-center bg-[#14120f] border border-[#d4af37]/30 rounded-full text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </Link>
        }
      />

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
            <div className="flex gap-2"><select required name="categoryId" value={selectedCategoryId} onChange={(event) => setSelectedCategoryId(event.target.value)} className="min-w-0 flex-1 bg-[#0a0a0a] border border-[#d4af37]/30 text-[#e8e1d3] text-[13px] rounded-md px-4 py-2.5 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer">
              <option value="">Sélectionner une catégorie</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select><button type="button" onClick={() => { setShowCategoryForm((current) => !current); setCategoryError(""); }} className="shrink-0 rounded-md border border-[#d4af37]/40 px-3 text-lg text-[#d4af37]" aria-label="Ajouter une catégorie">+</button></div>
            {showCategoryForm && <div className="mt-2 flex gap-2"><input value={newCategoryName} onChange={(event) => setNewCategoryName(event.target.value)} placeholder="Nom de la nouvelle catégorie" className="min-w-0 flex-1 rounded-md border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2 text-sm text-[#e8e1d3]" /><button type="button" disabled={isCreatingCategory} onClick={handleCreateCategory} className="rounded-md bg-[#d4af37] px-3 text-xs font-semibold text-[#0a0a0a]">{isCreatingCategory ? "..." : "Créer"}</button></div>}
            {categoryError && <p className="mt-2 text-xs text-red-400">{categoryError}</p>}
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
          <h2 className="text-[15px] font-semibold text-[#e8e1d3] border-b border-[#d4af37]/10 pb-2">Photos du produit (1 à 3)</h2>
          
          <div>
            <label className="block text-[13px] text-[#a89b82] mb-1.5">Photo du produit</label>
            <input type="hidden" name="image" value={imageUrl} />
            <input type="hidden" name="image2" value={image2Url} />
            <input type="hidden" name="image3" value={image3Url} />
            <ImageUpload values={images} onValuesChange={(next) => setImages([...next, "", ""].slice(0, 3))} maxFiles={3} />
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
    </AdminPageShell>
  );
}

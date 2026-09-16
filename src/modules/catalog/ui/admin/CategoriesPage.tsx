"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { deleteCategory, getCategories, saveCategory } from "@/modules/content/actions/product.actions";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { ImageUpload } from "@/shared/ui/ImageUpload";

type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  status: string;
  _count: { products: number };
};

const statusLabel = (status: string) => (status === "ACTIVE" ? "Actif" : "Brouillon");

function CategoryModal({ category, onClose, onSaved }: { category?: Category; onClose: () => void; onSaved: () => void }) {
  const [image, setImage] = useState(category?.image || "");
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    const result = await saveCategory(new FormData(event.currentTarget));
    setIsSaving(false);
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(category ? "Catégorie modifiée." : "Catégorie ajoutée.");
    onSaved();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#d4af37]/30 bg-[#14120f] p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-serif text-2xl text-[#d4af37]">{category ? "Modifier la catégorie" : "Ajouter une catégorie"}</h2>
            <p className="mt-1 text-xs text-[#a89b82]">Ajoutez une image Cloudinary et enregistrez ses informations dans Neon.</p>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-[#a89b82] hover:text-white" aria-label="Fermer">×</button>
        </div>
        <input type="hidden" name="id" value={category?.id || ""} />
        <input type="hidden" name="image" value={image} />
        <div className="grid gap-5 md:grid-cols-[180px_1fr]">
          <div>
            <label className="mb-2 block text-xs text-[#a89b82]">Image / icône</label>
            <ImageUpload value={image} onChange={setImage} />
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Nom *</label>
              <input required name="name" defaultValue={category?.name || ""} placeholder="Ex. Parfums" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
            </div>
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Description</label>
              <textarea name="description" defaultValue={category?.description || ""} rows={4} placeholder="Décrivez cette collection..." className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
            </div>
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Statut</label>
              <select name="status" defaultValue={category?.status === "ACTIVE" ? "ACTIVE" : "DRAFT"} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]">
                <option value="ACTIVE">Actif</option>
                <option value="DRAFT">Brouillon</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-lg border border-[#d4af37]/30 px-4 py-2 text-sm text-[#a89b82] hover:text-white">Annuler</button>
          <button type="submit" disabled={isSaving} className="rounded-lg bg-[#d4af37] px-5 py-2 text-sm font-semibold text-[#0a0a0a] disabled:opacity-50">{isSaving ? "Enregistrement..." : "Enregistrer"}</button>
        </div>
      </form>
    </div>
  );
}

export default function CategoriesManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState<Category>();
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadCategories = async () => {
    setIsLoading(true);
    const data = await getCategories();
    setCategories(data as Category[]);
    setIsLoading(false);
  };

  useEffect(() => { void loadCategories(); }, []);

  const filteredCategories = useMemo(
    () => categories.filter((category) => {
      const matchesQuery = `${category.name} ${category.description || ""}`.toLowerCase().includes(query.toLowerCase());
      return matchesQuery && (!status || category.status === status);
    }),
    [categories, query, status],
  );

  async function handleDelete(category: Category) {
    if (!window.confirm(`Supprimer la catégorie « ${category.name} » ?`)) return;
    const result = await deleteCategory(category.id);
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success("Catégorie supprimée.");
    await loadCategories();
  }

  return (
    <AdminPageShell>
      <AdminPageHeader title="Catégories" description="Organisez vos produits en collections logiques" action={<button type="button" onClick={() => setIsAdding(true)} className="flex items-center gap-2 rounded-md bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0a0a0a] hover:bg-[#c59b32]"><span className="text-lg">+</span>Ajouter une catégorie</button>} />
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-4 md:flex-row">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une catégorie..." className="w-full rounded-md border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-2.5 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37] md:w-96" />
        <select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full rounded-md border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2.5 text-sm text-[#e8e1d3] outline-none md:w-auto">
          <option value="">Tous les statuts</option>
          <option value="ACTIVE">Actif</option>
          <option value="DRAFT">Brouillon</option>
        </select>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr><th className="px-5 py-4">Nom & Description</th><th className="px-5 py-4">Produits</th><th className="px-5 py-4">Statut</th><th className="px-5 py-4 text-right">Actions</th></tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {isLoading ? <tr><td colSpan={4} className="p-10 text-center text-sm text-[#a89b82]">Chargement...</td></tr> : filteredCategories.length === 0 ? <tr><td colSpan={4} className="p-10 text-center text-sm text-[#a89b82]">Aucune catégorie trouvée.</td></tr> : filteredCategories.map((category) => (
                <tr key={category.id} className="group transition-colors hover:bg-[#d4af37]/5">
                  <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#d4af37]/30 bg-[#0a0a0a]">{category.image ? <Image src={category.image} alt="" fill className="object-cover" /> : <span className="flex h-full items-center justify-center text-xl text-[#d4af37]">✦</span>}</div><div><div className="font-serif text-sm font-semibold text-[#e8e1d3]">{category.name}</div><div className="mt-0.5 text-xs text-[#a89b82]">{category.description || "Aucune description"}</div></div></div></td>
                  <td className="px-5 py-4 text-sm text-[#e8e1d3]">{category._count.products} <span className="text-[#a89b82]">produit{category._count.products === 1 ? "" : "s"}</span></td>
                  <td className="px-5 py-4"><span className={`rounded-full border px-2.5 py-1 text-[10px] ${category.status === "ACTIVE" ? "border-[#2ecc71]/30 bg-[#2ecc71]/15 text-[#2ecc71]" : "border-[#f39c12]/30 bg-[#f39c12]/15 text-[#f39c12]"}`}>{statusLabel(category.status)}</span></td>
                  <td className="px-5 py-4 text-right"><div className="flex justify-end gap-2"><button type="button" onClick={() => setEditing(category)} className="rounded-md border border-[#d4af37]/20 px-3 py-1.5 text-xs text-[#d4af37] hover:bg-[#d4af37]/10">Modifier</button><button type="button" onClick={() => void handleDelete(category)} className="rounded-md border border-red-900/30 px-3 py-1.5 text-xs text-red-400 hover:bg-red-900/20">Supprimer</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {(isAdding || editing) && <CategoryModal category={editing} onClose={() => { setIsAdding(false); setEditing(undefined); }} onSaved={() => void loadCategories()} />}
    </AdminPageShell>
  );
}

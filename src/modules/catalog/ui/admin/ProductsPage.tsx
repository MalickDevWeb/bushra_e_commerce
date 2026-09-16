"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { createCategory, deleteProduct, getCategories, getProducts, saveProduct } from "@/modules/content/actions/product.actions";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { ImageUpload } from "@/shared/ui/ImageUpload";

type Product = Awaited<ReturnType<typeof getProducts>>[number];
type Category = Awaited<ReturnType<typeof getCategories>>[number];
type CategoryOption = Pick<Category, "id" | "name">;

function stockStatus(stock: number) {
  if (stock > 10) return ["En stock", "border-[#2ecc71]/30 bg-[#2ecc71]/15 text-[#2ecc71]"];
  if (stock > 0) return ["Stock faible", "border-[#f39c12]/30 bg-[#f39c12]/15 text-[#f39c12]"];
  return ["Rupture", "border-[#e74c3c]/30 bg-[#e74c3c]/15 text-[#e74c3c]"];
}

function ProductModal({ product, categories, onClose, onSaved }: { product?: Product; categories: Category[]; onClose: () => void; onSaved: () => void }) {
  const [image, setImage] = useState(product?.image || "");
  const [image2, setImage2] = useState(product?.image2 || "");
  const [image3, setImage3] = useState(product?.image3 || "");
  const [saving, setSaving] = useState(false);
  const [localCategories, setLocalCategories] = useState<CategoryOption[]>(categories);
  const [selectedCategoryId, setSelectedCategoryId] = useState(product?.categoryId || "");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [categoryError, setCategoryError] = useState("");
  const [creatingCategory, setCreatingCategory] = useState(false);
  const images = [image, image2, image3].filter(Boolean);
  const setImages = (next: string[]) => {
    setImage(next[0] || "");
    setImage2(next[1] || "");
    setImage3(next[2] || "");
  };
  const moveImage = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target > 2 || !images[index]) return;
    const next = [...images];
    [next[index], next[target]] = [next[target], next[index]];
    setImages(next);
  };
  const removeImage = (index: number) => setImages(images.filter((_, imageIndex) => imageIndex !== index));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    const result = await saveProduct(new FormData(event.currentTarget));
    setSaving(false);
    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success(product ? "Produit modifié." : "Produit ajouté.");
    onSaved();
    onClose();
  }

  async function handleCreateCategory() {
    const name = newCategoryName.trim();
    if (!name) {
      setCategoryError("Saisissez le nom de la catégorie.");
      return;
    }
    setCreatingCategory(true);
    setCategoryError("");
    const result = await createCategory(name);
    setCreatingCategory(false);
    if (!result.success || !("category" in result)) {
      setCategoryError(result.error);
      return;
    }
    const created = result.category;
    setLocalCategories((current) => [...current, { id: created.id, name: created.name }].sort((a, b) => a.name.localeCompare(b.name)));
    setSelectedCategoryId(created.id);
    setNewCategoryName("");
    setShowCategoryForm(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <form onSubmit={submit} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d4af37]/30 bg-[#14120f] p-6">
        <div className="mb-5 flex justify-between"><div><h2 className="font-serif text-2xl text-[#d4af37]">{product ? "Modifier le produit" : "Ajouter un produit"}</h2><p className="mt-1 text-xs text-[#a89b82]">Les informations sont enregistrées dans Neon.</p></div><button type="button" onClick={onClose} className="text-2xl text-[#a89b82]" aria-label="Fermer">×</button></div>
        <input type="hidden" name="id" value={product?.id || ""} /><input type="hidden" name="image" value={image} /><input type="hidden" name="image2" value={image2} /><input type="hidden" name="image3" value={image3} />
        <div className="grid gap-5 md:grid-cols-[180px_1fr]">
          <div className="space-y-3"><label className="block text-xs text-[#a89b82]">Photos du produit (1 à 3)</label><ImageUpload values={images} onValuesChange={(next) => setImages([...next, "", ""].slice(0, 3))} maxFiles={3} /><div className="flex justify-end gap-1"><button type="button" disabled={!images[1]} onClick={() => moveImage(1, -1)} className="rounded border border-[#d4af37]/30 px-2 py-0.5 disabled:opacity-30">Monter la deuxième</button><button type="button" disabled={!images[2]} onClick={() => moveImage(2, -1)} className="rounded border border-[#d4af37]/30 px-2 py-0.5 disabled:opacity-30">Monter la troisième</button></div></div>
          <div className="space-y-4">
            <input required name="name" defaultValue={product?.name || ""} placeholder="Nom du produit" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3]" />
            <div className="flex gap-2">
              <select required name="categoryId" value={selectedCategoryId} onChange={(event) => setSelectedCategoryId(event.target.value)} className="min-w-0 flex-1 rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3]"><option value="">Choisir une catégorie</option>{localCategories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select>
              <button type="button" onClick={() => setShowCategoryForm((visible) => !visible)} className="rounded-lg border border-[#d4af37]/40 px-3 text-lg text-[#d4af37]" aria-label="Ajouter une catégorie">+</button>
            </div>
            {showCategoryForm && <div className="flex gap-2"><input value={newCategoryName} onChange={(event) => setNewCategoryName(event.target.value)} placeholder="Nom de la catégorie" className="min-w-0 flex-1 rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2 text-sm text-[#e8e1d3]" /><button type="button" disabled={creatingCategory} onClick={handleCreateCategory} className="rounded-lg bg-[#d4af37] px-3 py-2 text-sm text-[#0a0a0a] disabled:opacity-50">{creatingCategory ? "..." : "Créer"}</button></div>}
            {categoryError && <p className="text-xs text-red-400">{categoryError}</p>}
            <textarea required name="description" defaultValue={product?.description || ""} rows={3} placeholder="Description" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3]" />
            <div className="grid grid-cols-2 gap-3"><input required type="number" min="0" step="100" name="price" defaultValue={product?.price || ""} placeholder="Prix FCFA" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3]" /><input required type="number" min="0" name="stock" defaultValue={product?.stock ?? 0} placeholder="Stock" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3]" /></div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3"><button type="button" onClick={onClose} className="rounded-lg border border-[#d4af37]/30 px-4 py-2 text-sm text-[#a89b82]">Annuler</button><button disabled={saving} className="rounded-lg bg-[#d4af37] px-5 py-2 text-sm font-semibold text-[#0a0a0a] disabled:opacity-50">{saving ? "Enregistrement..." : "Enregistrer"}</button></div>
      </form>
    </div>
  );
}

export default function ProductsManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  const [editing, setEditing] = useState<Product>();
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const [productData, categoryData] = await Promise.all([getProducts(), getCategories()]);
    setProducts(productData);
    setCategories(categoryData);
    setLoading(false);
  }
  useEffect(() => { void load(); }, []);

  const filtered = useMemo(() => products.filter((product) => {
    const matchesQuery = `${product.name} ${product.id}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !categoryId || product.categoryId === categoryId;
    const matchesStock = !stockFilter || (stockFilter === "OUT" ? product.stock === 0 : stockFilter === "LOW" ? product.stock > 0 && product.stock <= 10 : product.stock > 10);
    return matchesQuery && matchesCategory && matchesStock;
  }), [products, query, categoryId, stockFilter]);

  async function remove(product: Product) {
    if (!window.confirm(`Supprimer « ${product.name} » ?`)) return;
    const result = await deleteProduct(product.id);
    if (!result.success) { toast.error(result.error); return; }
    toast.success("Produit supprimé.");
    await load();
  }

  return (
    <AdminPageShell>
      <AdminPageHeader title="Catalogue Produits" description="Gérez les articles, les prix et les stocks" action={<button type="button" onClick={() => setAdding(true)} className="rounded-md bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0a0a0a]">+ Ajouter un produit</button>} />
      <div className="flex flex-col gap-3 rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-4 md:flex-row"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un produit..." className="w-full rounded-md border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-2.5 text-sm text-[#e8e1d3] md:w-96" /><select value={categoryId} onChange={(event) => setCategoryId(event.target.value)} className="rounded-md border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2.5 text-sm text-[#e8e1d3]"><option value="">Toutes les catégories</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select><select value={stockFilter} onChange={(event) => setStockFilter(event.target.value)} className="rounded-md border border-[#d4af37]/30 bg-[#0a0a0a] px-3 py-2.5 text-sm text-[#e8e1d3]"><option value="">Tous les stocks</option><option value="IN">En stock</option><option value="LOW">Stock faible</option><option value="OUT">Rupture</option></select></div>
      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left"><thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]"><tr><th className="px-5 py-4">Produit</th><th className="px-5 py-4">Catégorie</th><th className="px-5 py-4">Prix</th><th className="px-5 py-4">Stock</th><th className="px-5 py-4">Statut</th><th className="px-5 py-4 text-right">Actions</th></tr></thead><tbody className="divide-y divide-[#d4af37]/10">{loading ? <tr><td colSpan={6} className="p-10 text-center text-[#a89b82]">Chargement...</td></tr> : filtered.length === 0 ? <tr><td colSpan={6} className="p-10 text-center text-[#a89b82]">Aucun produit trouvé.</td></tr> : filtered.map((product) => { const [label, color] = stockStatus(product.stock); return <tr key={product.id} className="hover:bg-[#d4af37]/5"><td className="px-5 py-4"><div className="flex items-center gap-3"><div className="relative h-10 w-10 overflow-hidden rounded-md border border-[#d4af37]/30 bg-[#0a0a0a]">{product.image ? <Image src={product.image} alt="" fill sizes="40px" className="object-cover" /> : <span className="flex h-full items-center justify-center text-[#d4af37]">✦</span>}</div><div><div className="font-serif text-sm font-semibold text-[#e8e1d3]">{product.name}</div><div className="text-[11px] text-[#a89b82]">{product.id.slice(0, 8)}</div></div></div></td><td className="px-5 py-4 text-sm text-[#e8e1d3]">{product.category.name}</td><td className="px-5 py-4 text-sm text-[#d4af37]">{product.price.toLocaleString("fr-FR")} FCFA</td><td className="px-5 py-4 text-sm text-[#e8e1d3]">{product.stock}</td><td className="px-5 py-4"><span className={`rounded-full border px-2.5 py-1 text-[10px] ${color}`}>{label}</span></td><td className="px-5 py-4 text-right"><button type="button" onClick={() => setEditing(product)} className="mr-2 text-xs text-[#d4af37]">Modifier</button><button type="button" onClick={() => void remove(product)} className="text-xs text-red-400">Supprimer</button></td></tr>; })}</tbody></table></div></div>
      {(adding || editing) && <ProductModal product={editing} categories={categories} onClose={() => { setAdding(false); setEditing(undefined); }} onSaved={() => void load()} />}
      <Link href="/admin/boutique/categories" className="text-xs text-[#a89b82] hover:text-[#d4af37]">Gérer les catégories →</Link>
    </AdminPageShell>
  );
}

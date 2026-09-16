"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getCollections, saveCollectionAction, deleteCollectionAction } from "@/modules/content/actions/collection.actions";
import { getProducts } from "@/modules/content/actions/product.actions";

type Collection = Awaited<ReturnType<typeof getCollections>>[number];
type Product = Awaited<ReturnType<typeof getProducts>>[number];

function statusColor(status: string) {
  if (status === "ACTIVE") return "border-[#2ecc71]/30 bg-[#2ecc71]/15 text-[#2ecc71]";
  if (status === "INACTIVE") return "border-[#95a5a6]/30 bg-[#95a5a6]/15 text-[#95a5a6]";
  if (status === "SCHEDULED") return "border-[#3498db]/30 bg-[#3498db]/15 text-[#3498db]";
  return "border-[#f39c12]/30 bg-[#f39c12]/15 text-[#f39c12]";
}

function statusLabel(status: string, scheduledAt: Date | null) {
  if (status === "ACTIVE") return "Actif";
  if (status === "INACTIVE") return "Inactif";
  if (status === "SCHEDULED") return `Programmé (${scheduledAt ? new Date(scheduledAt).toLocaleDateString("fr-FR") : ""})`;
  return "Brouillon";
}

function CollectionModal({ collection, products, onClose, onSaved }: { collection?: Collection; products: Product[]; onClose: () => void; onSaved: () => void }) {
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState(collection?.status || "ACTIVE");
  const [scheduledAt, setScheduledAt] = useState(collection?.scheduledAt ? new Date(collection.scheduledAt).toISOString().slice(0, 16) : "");
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (collection) {
      // We don't have the exact selected products populated in the list view (only _count), so we rely on what is passed or fetch it.
      // Wait, let's assume we need to fetch the full collection details or we pass it? 
      // Actually, we can fetch the collection details here if it's editing.
    }
  }, [collection]);

  useEffect(() => {
    async function loadSelected() {
      if (collection) {
        const { getCollectionById } = await import("@/modules/content/actions/collection.actions");
        const fullCollection = await getCollectionById(collection.id);
        if (fullCollection) {
          setSelectedProducts(new Set(fullCollection.products.map((p) => p.id)));
        }
      }
    }
    void loadSelected();
  }, [collection]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    const formData = new FormData(event.currentTarget);
    const result = await saveCollectionAction(formData, Array.from(selectedProducts));
    setIsSaving(false);
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success(collection ? "Collection modifiée." : "Collection ajoutée.");
    onSaved();
    onClose();
  }

  const toggleProduct = (id: string) => {
    const next = new Set(selectedProducts);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedProducts(next);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#d4af37]/30 bg-[#14120f] p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-serif text-2xl text-[#d4af37]">{collection ? "Modifier la collection" : "Ajouter une collection"}</h2>
            <p className="mt-1 text-xs text-[#a89b82]">Sélectionnez les produits à inclure dans cette collection.</p>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-[#a89b82] hover:text-white" aria-label="Fermer">×</button>
        </div>
        <input type="hidden" name="id" value={collection?.id || ""} />
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-xs text-[#a89b82]">Nom de la collection *</label>
            <input required name="name" defaultValue={collection?.name || ""} placeholder="Ex. Spécial Ramadan" className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-xs text-[#a89b82]">Statut</label>
              <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]">
                <option value="ACTIVE">Actif</option>
                <option value="INACTIVE">Inactif</option>
                <option value="DRAFT">Brouillon</option>
                <option value="SCHEDULED">Programmé</option>
              </select>
            </div>
            {status === "SCHEDULED" && (
              <div>
                <label className="mb-2 block text-xs text-[#a89b82]">Date de publication</label>
                <input type="datetime-local" name="scheduledAt" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)} required className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-3 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]" />
              </div>
            )}
          </div>
          <div>
            <label className="mb-2 block text-xs text-[#a89b82]">Produits de la collection ({selectedProducts.size} sélectionnés)</label>
            <div className="max-h-60 overflow-y-auto rounded-lg border border-[#d4af37]/30 bg-[#0a0a0a] p-2 space-y-1">
              {products.map((product) => (
                <label key={product.id} className="flex cursor-pointer items-center gap-3 rounded p-2 hover:bg-[#d4af37]/10 transition-colors">
                  <input type="checkbox" checked={selectedProducts.has(product.id)} onChange={() => toggleProduct(product.id)} className="h-4 w-4 rounded border-[#d4af37]/30 bg-[#14120f] text-[#d4af37] focus:ring-[#d4af37]/50" />
                  <span className="text-sm text-[#e8e1d3]">{product.name}</span>
                  <span className="ml-auto text-xs text-[#a89b82]">{product.price.toLocaleString()} FCFA</span>
                </label>
              ))}
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

export default function CollectionsManagement() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<Collection>();
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const [collectionsData, productsData] = await Promise.all([getCollections(), getProducts()]);
    setCollections(collectionsData as Collection[]);
    setProducts(productsData as Product[]);
    setIsLoading(false);
  };

  useEffect(() => { void loadData(); }, []);

  const filteredCollections = useMemo(
    () => collections.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())),
    [collections, query],
  );

  async function handleDelete(collection: Collection) {
    if (!window.confirm(`Supprimer la collection « ${collection.name} » ?`)) return;
    const result = await deleteCollectionAction(collection.id);
    if (!result.success) {
      toast.error(result.error);
      return;
    }
    toast.success("Collection supprimée.");
    await loadData();
  }

  return (
    <AdminPageShell>
      <AdminPageHeader title="Collections" description="Gérez vos collections de produits" action={<button type="button" onClick={() => setIsAdding(true)} className="flex items-center gap-2 rounded-md bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0a0a0a] hover:bg-[#c59b32]"><span className="text-lg">+</span>Ajouter une collection</button>} />
      <div className="mb-4">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une collection..." className="w-full rounded-md border border-[#d4af37]/30 bg-[#0a0a0a] px-4 py-2.5 text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37] md:w-96" />
      </div>
      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr>
                <th className="px-5 py-4 w-10"></th>
                <th className="px-5 py-4">Nom de la collection</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Produits</th>
                <th className="px-5 py-4">Mise à jour</th>
                <th className="px-5 py-4">Statut</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {isLoading ? <tr><td colSpan={7} className="p-10 text-center text-sm text-[#a89b82]">Chargement...</td></tr> : filteredCollections.length === 0 ? <tr><td colSpan={7} className="p-10 text-center text-sm text-[#a89b82]">Aucune collection trouvée.</td></tr> : filteredCollections.map((collection) => (
                <tr key={collection.id} className="group transition-colors hover:bg-[#d4af37]/5">
                  <td className="px-5 py-4"><input type="checkbox" className="rounded border-[#d4af37]/30 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37]/50" /></td>
                  <td className="px-5 py-4 font-serif text-sm font-semibold text-[#e8e1d3]">{collection.name}</td>
                  <td className="px-5 py-4 text-sm text-[#a89b82]">{collection.type === "MANUAL" ? "Manuelle" : "Automatique"}</td>
                  <td className="px-5 py-4 text-sm text-[#e8e1d3]">{collection._count.products}</td>
                  <td className="px-5 py-4 text-sm text-[#a89b82]">{new Date(collection.updatedAt).toLocaleDateString("fr-FR")}</td>
                  <td className="px-5 py-4"><span className={`rounded-full border px-2.5 py-1 text-[10px] ${statusColor(collection.status)}`}>{statusLabel(collection.status, collection.scheduledAt)}</span></td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button type="button" onClick={() => setEditing(collection)} className="text-[#a89b82] hover:text-[#d4af37]">✏️</button>
                      <button type="button" onClick={() => void handleDelete(collection)} className="text-red-900/50 hover:text-red-400">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {(isAdding || editing) && <CollectionModal collection={editing} products={products} onClose={() => { setIsAdding(false); setEditing(undefined); }} onSaved={() => void loadData()} />}
    </AdminPageShell>
  );
}

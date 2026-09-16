"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getInventory, updateAvailableStock, getProductOrders } from "@/modules/content/actions/inventory.actions";

type InventoryItem = Awaited<ReturnType<typeof getInventory>>[number];
type ProductOrder = Awaited<ReturnType<typeof getProductOrders>>[number];

function getStatus(available: number) {
  if (available > 10) return { label: "En stock", color: "border-[#2ecc71]/30 bg-[#2ecc71]/15 text-[#2ecc71]" };
  if (available > 0) return { label: "Stock faible", color: "border-[#f39c12]/30 bg-[#f39c12]/15 text-[#f39c12]" };
  return { label: "Rupture", color: "border-[#e74c3c]/30 bg-[#e74c3c]/15 text-[#e74c3c]" };
}

function OrderStatusBadge({ status }: { status: string }) {
  if (status === "PENDING") return <span className="text-[#f39c12] bg-[#f39c12]/10 border border-[#f39c12]/30 px-2 py-0.5 rounded text-[10px]">En attente</span>;
  if (status === "PAID") return <span className="text-[#3498db] bg-[#3498db]/10 border border-[#3498db]/30 px-2 py-0.5 rounded text-[10px]">Payé</span>;
  if (status === "SHIPPED") return <span className="text-[#9b59b6] bg-[#9b59b6]/10 border border-[#9b59b6]/30 px-2 py-0.5 rounded text-[10px]">Expédié</span>;
  if (status === "DELIVERED") return <span className="text-[#2ecc71] bg-[#2ecc71]/10 border border-[#2ecc71]/30 px-2 py-0.5 rounded text-[10px]">Livré</span>;
  if (status === "CANCELLED") return <span className="text-[#e74c3c] bg-[#e74c3c]/10 border border-[#e74c3c]/30 px-2 py-0.5 rounded text-[10px]">Annulé</span>;
  return <span className="text-gray-400 bg-gray-400/10 border border-gray-400/30 px-2 py-0.5 rounded text-[10px]">{status}</span>;
}

function ProductOrdersModal({ product, onClose }: { product: InventoryItem; onClose: () => void }) {
  const [orders, setOrders] = useState<ProductOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      const data = await getProductOrders(product.id);
      setOrders(data);
      setLoading(false);
    }
    void fetchOrders();
  }, [product.id]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog">
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-[#d4af37]/30 bg-[#14120f] shadow-2xl">
        <div className="p-6 border-b border-[#d4af37]/10 flex items-start justify-between shrink-0">
          <div>
            <h2 className="font-serif text-2xl text-[#d4af37]">Commandes pour: {product.name}</h2>
            <p className="mt-1 text-xs text-[#a89b82]">SKU: {product.sku} | Stock: {product.inStock} | Réservé: {product.reserved} | Disponible: {product.available}</p>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-[#a89b82] hover:text-white" aria-label="Fermer">×</button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <table className="w-full text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr>
                <th className="px-5 py-4">Commande</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Client</th>
                <th className="px-5 py-4">Quantité</th>
                <th className="px-5 py-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {loading ? (
                <tr><td colSpan={5} className="p-10 text-center text-sm text-[#a89b82]">Chargement...</td></tr>
              ) : orders.length === 0 ? (
                <tr><td colSpan={5} className="p-10 text-center text-sm text-[#a89b82]">Aucune commande trouvée pour ce produit.</td></tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#d4af37]/5 transition-colors">
                    <td className="px-5 py-4 font-bold text-[#d4af37] text-sm">{order.orderNumber}</td>
                    <td className="px-5 py-4 text-sm text-[#a89b82]">{new Date(order.date).toLocaleString("fr-FR")}</td>
                    <td className="px-5 py-4">
                      <div className="text-sm text-[#e8e1d3] font-medium">{order.customer}</div>
                      <div className="text-[11px] text-[#a89b82]">{order.phone}</div>
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-[#e8e1d3]">{order.quantity}</td>
                    <td className="px-5 py-4"><OrderStatusBadge status={order.status} /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-[#d4af37]/10 flex justify-end shrink-0">
          <button type="button" onClick={onClose} className="rounded-lg border border-[#d4af37]/30 px-5 py-2 text-sm text-[#a89b82] hover:text-white">Fermer</button>
        </div>
      </div>
    </div>
  );
}

function StockRow({ item, onUpdate, onClickRow }: { item: InventoryItem; onUpdate: () => void; onClickRow: (item: InventoryItem) => void }) {
  const [value, setValue] = useState(item.available.toString());
  const [isUpdating, setIsUpdating] = useState(false);
  const status = getStatus(item.available);

  useEffect(() => {
    setValue(item.available.toString());
  }, [item.available]);

  async function handleUpdate(e: React.MouseEvent) {
    e.stopPropagation();
    if (value === item.available.toString()) return;
    setIsUpdating(true);
    const res = await updateAvailableStock(item.id, value);
    setIsUpdating(false);
    if (!res.success) {
      toast.error(res.error);
    } else {
      toast.success("Stock mis à jour.");
      onUpdate();
    }
  }

  return (
    <tr onClick={() => onClickRow(item)} className="group transition-colors hover:bg-[#d4af37]/5 cursor-pointer">
      <td className="px-5 py-4">
        <div className="font-serif text-sm font-semibold text-[#e8e1d3] group-hover:text-[#d4af37] transition-colors">{item.name}</div>
        <div className="text-[11px] text-[#a89b82] uppercase">{item.sku}</div>
      </td>
      <td className="px-5 py-4 text-sm text-[#e8e1d3]">{item.inStock}</td>
      <td className="px-5 py-4 text-sm text-[#a89b82]">{item.reserved}</td>
      <td className="px-5 py-4 text-sm font-bold text-[#d4af37]">{item.available}</td>
      <td className="px-5 py-4">
        <span className={`rounded-full border px-2.5 py-1 text-[10px] ${status.color}`}>{status.label}</span>
      </td>
      <td className="px-5 py-4 text-right">
        <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
          <input 
            type="number" 
            min="0"
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            className="w-16 rounded border border-[#d4af37]/30 bg-[#0a0a0a] px-2 py-1 text-center text-sm text-[#e8e1d3] outline-none focus:border-[#d4af37]"
          />
          <button 
            type="button" 
            onClick={handleUpdate}
            disabled={isUpdating || value === item.available.toString()}
            className="rounded border border-[#d4af37]/30 px-3 py-1 text-xs text-[#a89b82] transition-colors hover:bg-[#d4af37]/10 hover:text-[#d4af37] disabled:opacity-50"
          >
            {isUpdating ? "..." : "Mettre à jour"}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function StocksManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<InventoryItem | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    const data = await getInventory();
    setInventory(data);
    setIsLoading(false);
  };

  useEffect(() => { void loadData(); }, []);

  return (
    <AdminPageShell>
      <AdminPageHeader 
        title="Inventaire & Stocks" 
        description="Suivez les quantités et ajustez les stocks de vos produits. Cliquez sur un produit pour voir ses commandes." 
        action={
          <div className="flex gap-3">
            <button type="button" className="rounded-md border border-[#d4af37]/30 px-4 py-2 text-sm font-semibold text-[#d4af37] hover:bg-[#d4af37]/10">Exporter</button>
            <button type="button" className="rounded-md bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0a0a0a] hover:bg-[#c59b32]">Ajuster l'inventaire</button>
          </div>
        } 
      />
      
      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr>
                <th className="px-5 py-4">Produit (SKU)</th>
                <th className="px-5 py-4">En Stock</th>
                <th className="px-5 py-4">Réservé</th>
                <th className="px-5 py-4">Disponible</th>
                <th className="px-5 py-4">Statut</th>
                <th className="px-5 py-4 text-right">Ajuster</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {isLoading ? <tr><td colSpan={6} className="p-10 text-center text-sm text-[#a89b82]">Chargement...</td></tr> : inventory.length === 0 ? <tr><td colSpan={6} className="p-10 text-center text-sm text-[#a89b82]">Aucun produit.</td></tr> : inventory.map((item) => (
                <StockRow key={item.id} item={item} onUpdate={() => void loadData()} onClickRow={setSelectedProduct} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedProduct && <ProductOrdersModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </AdminPageShell>
  );
}

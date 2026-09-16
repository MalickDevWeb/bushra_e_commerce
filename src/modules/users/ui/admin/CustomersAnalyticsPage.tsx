"use client";

import { useEffect, useState } from "react";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { getCustomersAnalytics } from "@/modules/content/actions/customer.actions";

type CustomerAnalytics = Awaited<ReturnType<typeof getCustomersAnalytics>>[number];

function StatusBadge({ status }: { status: string }) {
  if (status === "VIP") return <span className="bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 px-2.5 py-1 rounded-full text-[10px] font-bold">VIP</span>;
  if (status === "Régulier") return <span className="bg-[#3498db]/15 text-[#3498db] border border-[#3498db]/30 px-2.5 py-1 rounded-full text-[10px]">Régulier</span>;
  return <span className="bg-[#2ecc71]/15 text-[#2ecc71] border border-[#2ecc71]/30 px-2.5 py-1 rounded-full text-[10px]">Nouveau</span>;
}

function CustomerDetailsModal({ customer, onClose }: { customer: CustomerAnalytics; onClose: () => void }) {
  // Suggest a contact hour based on last active
  const hour = new Date(customer.lastActive).getHours();
  let recommendedTime = "Matin (9h - 12h)";
  if (hour >= 12 && hour < 18) recommendedTime = "Après-midi (14h - 18h)";
  else if (hour >= 18) recommendedTime = "Soir (19h - 22h)";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog">
      <div className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-[#d4af37]/30 bg-[#14120f] shadow-2xl">
        <div className="p-6 border-b border-[#d4af37]/10 flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-2xl text-[#d4af37]">{customer.name}</h2>
              <StatusBadge status={customer.status} />
            </div>
            <p className="mt-1 text-sm text-[#a89b82]">ID: {customer.clientId} | {customer.email}</p>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-[#a89b82] hover:text-white" aria-label="Fermer">×</button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#1c1813] border border-[#d4af37]/20 rounded-xl p-4 text-center">
              <div className="text-[11px] text-[#a89b82] uppercase tracking-wider mb-1">Commandes</div>
              <div className="text-2xl font-bold text-[#e8e1d3]">{customer.ordersCount}</div>
            </div>
            <div className="bg-[#1c1813] border border-[#d4af37]/20 rounded-xl p-4 text-center">
              <div className="text-[11px] text-[#a89b82] uppercase tracking-wider mb-1">Total Dépensé</div>
              <div className="text-xl font-bold text-[#d4af37]">{customer.totalSpent.toLocaleString("fr-FR")} FCFA</div>
            </div>
            <div className="bg-[#1c1813] border border-[#d4af37]/20 rounded-xl p-4 text-center">
              <div className="text-[11px] text-[#a89b82] uppercase tracking-wider mb-1">Dernière Activité</div>
              <div className="text-sm font-medium text-[#e8e1d3] mt-2">{new Date(customer.lastActive).toLocaleDateString("fr-FR")}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-[#e8e1d3] font-semibold border-b border-[#d4af37]/10 pb-2">Analyse des Préférences (CRM)</h3>
              
              <div>
                <span className="block text-xs text-[#a89b82] mb-1">Heure de contact recommandée :</span>
                <span className="inline-block bg-[#0a0a0a] border border-[#d4af37]/20 px-3 py-1.5 rounded text-sm text-[#e8e1d3]">
                  🕒 {recommendedTime}
                </span>
                <p className="text-[10px] text-[#a89b82] mt-1">Basé sur ses horaires d'achat et de visite.</p>
              </div>

              <div>
                <span className="block text-xs text-[#a89b82] mb-1">Catégories préférées :</span>
                <div className="flex flex-wrap gap-2">
                  {customer.preferredCategories.length > 0 ? customer.preferredCategories.map(cat => (
                    <span key={cat} className="bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 px-2 py-1 rounded text-xs">{cat}</span>
                  )) : <span className="text-sm text-gray-500">Pas assez de données</span>}
                </div>
              </div>

              <div>
                <span className="block text-xs text-[#a89b82] mb-1">Wishlist / Favoris (Produits aimés) :</span>
                <ul className="list-disc list-inside text-sm text-[#e8e1d3]">
                  {customer.likes.length > 0 ? customer.likes.map(like => (
                    <li key={like}>{like}</li>
                  )) : <span className="text-sm text-gray-500">Aucun produit favori</span>}
                </ul>
              </div>

            </div>

            <div className="space-y-4">
              <h3 className="text-[#e8e1d3] font-semibold border-b border-[#d4af37]/10 pb-2">Dernières Commandes</h3>
              <div className="space-y-2">
                {customer.lastOrders.length > 0 ? customer.lastOrders.map(order => (
                  <div key={order.id} className="bg-[#0a0a0a] rounded-lg p-3 border border-[#d4af37]/10 flex justify-between items-center">
                    <div>
                      <div className="text-sm text-[#e8e1d3]">{new Date(order.createdAt).toLocaleDateString("fr-FR")}</div>
                    </div>
                    <div className="text-sm font-bold text-[#d4af37]">{order.totalAmount.toLocaleString("fr-FR")} FCFA</div>
                  </div>
                )) : <span className="text-sm text-gray-500">Aucune commande</span>}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function CustomersAnalyticsPage() {
  const [customers, setCustomers] = useState<CustomerAnalytics[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerAnalytics | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getCustomersAnalytics();
      setCustomers(data);
      setIsLoading(false);
    }
    void load();
  }, []);

  return (
    <AdminPageShell>
      <AdminPageHeader 
        title="CRM & Analyse Clients" 
        description="Gérez vos clients, analysez leurs préférences et adaptez vos offres." 
        action={<button className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors">Exporter les données</button>}
      />
      
      <div className="overflow-hidden rounded-xl border border-[#d4af37]/20 bg-[#14120f]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#1c1813] text-[11px] uppercase tracking-wider text-[#a89b82]">
              <tr>
                <th className="px-5 py-4 w-[40px]"><input type="checkbox" className="accent-[#d4af37]" /></th>
                <th className="px-5 py-4">Client</th>
                <th className="px-5 py-4">Contact</th>
                <th className="px-5 py-4">Commandes</th>
                <th className="px-5 py-4">Total Dépensé</th>
                <th className="px-5 py-4">Statut</th>
                <th className="px-5 py-4">Inscription</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/10">
              {isLoading ? <tr><td colSpan={8} className="p-10 text-center text-sm text-[#a89b82]">Analyse en cours...</td></tr> : customers.length === 0 ? <tr><td colSpan={8} className="p-10 text-center text-sm text-[#a89b82]">Aucun client trouvé.</td></tr> : customers.map((c) => (
                <tr key={c.id} onClick={() => setSelectedCustomer(c)} className="group transition-colors hover:bg-[#d4af37]/5 cursor-pointer">
                  <td className="px-5 py-4"><input type="checkbox" onClick={e => e.stopPropagation()} className="accent-[#d4af37] opacity-50 group-hover:opacity-100" /></td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center font-serif font-bold text-sm">
                        {c.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-serif text-[14px] font-bold text-[#e8e1d3] group-hover:text-[#d4af37] transition-colors">{c.name}</div>
                        <div className="text-[11px] text-[#a89b82]">{c.clientId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[13px]">
                    <div className="text-[#e8e1d3]">{c.email}</div>
                    <div className="text-[#a89b82]">{c.phone}</div>
                  </td>
                  <td className="px-5 py-4 text-[14px] font-medium text-[#e8e1d3]">{c.ordersCount}</td>
                  <td className="px-5 py-4 font-bold text-[#d4af37] text-[14px]">{c.totalSpent.toLocaleString("fr-FR")} FCFA</td>
                  <td className="px-5 py-4"><StatusBadge status={c.status} /></td>
                  <td className="px-5 py-4 text-[13px] text-[#a89b82]">{new Date(c.registrationDate).toLocaleDateString("fr-FR")}</td>
                  <td className="px-5 py-4 text-right">
                    <button type="button" className="p-1.5 text-[#a89b82] hover:text-[#d4af37] transition-colors" title="Profil complet">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedCustomer && <CustomerDetailsModal customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />}
    </AdminPageShell>
  );
}

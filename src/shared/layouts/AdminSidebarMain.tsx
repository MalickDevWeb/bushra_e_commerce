"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AdminSidebarFooter } from "@/shared/layouts/AdminSidebarFooter";
import { AdminSidebarHeader } from "@/shared/layouts/AdminSidebarHeader";
import { AdminSidebarSuperAdminLink } from "@/shared/layouts/AdminSidebarSuperAdminLink";

type SectionKey = "sama_client" | "boutique" | "commandes" | "communication" | "contenu" | "medias" | "parametres";
type SidebarSection = { key: SectionKey; label: string; icon: string; links: Array<[string, string]> };

const sections: SidebarSection[] = [
  { key: "sama_client", label: "Sama Client (CRM)", icon: "🧠", links: [["/admin/decision-center", "Centre de Décision"], ["/admin/clients/tous", "Tous les clients"], ["/admin/clients/segments", "Segments"], ["/admin/clients/analytics", "Analytics"], ["/admin/communication/campagnes", "Campagnes"]] },
  { key: "boutique", label: "Boutique", icon: "B", links: [["/admin/boutique/produits", "Produits"], ["/admin/boutique/categories", "Catégories"], ["/admin/boutique/collections", "Collections"], ["/admin/boutique/promotions", "Promotions"], ["/admin/boutique/stocks", "Stocks"]] },
  { key: "commandes", label: "Commandes", icon: "C", links: [["/admin/commandes/liste", "Toutes les commandes"], ["/admin/commandes/paiements", "Paiements"], ["/admin/commandes/livraisons", "Livraisons"], ["/admin/commandes/statuts", "Statuts"]] },
  { key: "communication", label: "Communication", icon: "A", links: [["/admin/communication/notifications", "Notifications"], ["/admin/communication/newsletter", "Newsletter"]] },
  { key: "contenu", label: "Contenu du site", icon: "P", links: [["/admin/contenu/accueil", "Accueil"], ["/admin/contenu/collections", "Collections"], ["/admin/contenu/a-propos", "À propos"], ["/admin/contenu/header", "Header / Menu"], ["/admin/contenu/footer", "Footer"]] },
  { key: "medias", label: "Médias", icon: "M", links: [["/admin/medias/bibliotheque", "Bibliothèque d'images"]] },
  { key: "parametres", label: "Paramètres", icon: "S", links: [["/admin/parametres/paiement", "Paiement"], ["/admin/parametres/livraison", "Livraison"], ["/admin/parametres/seo", "SEO"], ["/admin/parametres/reseaux-sociaux", "Réseaux sociaux"], ["/admin/parametres/utilisateurs", "Utilisateurs / Rôles"]] },
];

export function AdminSidebarMain({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({ sama_client: true, boutique: true, commandes: true, communication: false, contenu: false, medias: false, parametres: false });
  const toggle = (key: SectionKey) => setOpen((previous) => ({ ...previous, [key]: !previous[key] }));

  return <div className="flex h-full flex-col bg-[#090705] overflow-y-auto custom-scrollbar font-serif shadow-[inset_-1px_0_15px_rgba(212,175,55,0.03)] border-r border-[#d4af37]/20">
    <AdminSidebarHeader />
    <div className="flex-1 pb-10">
      {sections.map((section) => <div key={section.key} className="border-b border-[#d4af37]/15 py-1">
        <button type="button" onClick={() => toggle(section.key)} className="w-full flex items-center justify-between px-5 py-2.5 cursor-pointer group hover:bg-[#d4af37]/5 transition-colors">
          <span className="flex items-center gap-3.5"><span className="text-[#d4af37] shrink-0 w-5 text-center">{section.icon}</span><span className="text-[15px] text-[#d4af37] tracking-wide group-hover:text-white transition-colors font-serif">{section.label}</span></span>
          <span className={`text-[#d4af37] transition-transform duration-200 ${open[section.key] ? "rotate-180" : ""}`}>⌄</span>
        </button>
        {open[section.key] && <div className="flex flex-col pb-1">{section.links.map(([href, label]) => <Link key={href} href={href} onClick={onClose} className={`flex items-center gap-3 pl-[3.2rem] pr-5 py-2.5 hover:bg-[#d4af37]/10 transition-colors group ${pathname === href ? "bg-[#d4af37]/10 border-l-2 border-[#d4af37]" : ""}`}><span className="text-[13.5px] text-[#e3c77d] group-hover:text-white tracking-wide font-serif">{label}</span></Link>)}</div>}
      </div>)}
      <AdminSidebarSuperAdminLink />
    </div>
    <AdminSidebarFooter />
  </div>;
}

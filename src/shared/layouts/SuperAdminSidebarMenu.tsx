"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { SuperAdminSidebarLink, SuperAdminSidebarSectionHeader } from "./SuperAdminSidebarNavigation";

type SectionKey = "equipe" | "cles" | "configuration" | "securite" | "finances";
type Item = { href: string; label: string; badge?: string };

const sections: Array<{ key: SectionKey; label: string; items: Item[] }> = [
  {
    key: "equipe",
    label: "Équipe & Accès",
    items: [
      { href: "/admin/super-admin/staff", label: "Comptes Admin / Staff" },
      { href: "/admin/super-admin/roles", label: "Rôles & Permissions" },
      { href: "/admin/super-admin/connexions", label: "Historique des connexions" },
    ],
  },
  {
    key: "cles",
    label: "Clés API & Intégrations",
    items: [
      { href: "/admin/super-admin/cles/wave", label: "Wave", badge: "API" },
      { href: "/admin/super-admin/cles/orange-money", label: "Orange Money", badge: "API" },
      { href: "/admin/super-admin/cles/stripe", label: "Stripe / PayPal", badge: "API" },
      { href: "/admin/super-admin/cles/whatsapp", label: "WhatsApp Business", badge: "API" },
      { href: "/admin/super-admin/cles/email", label: "Email & SMS", badge: "API" },
    ],
  },
  {
    key: "configuration",
    label: "Configuration globale",
    items: [
      { href: "/admin/super-admin/config/boutique", label: "Paramètres boutique" },
      { href: "/admin/super-admin/config/livraison", label: "Livraison & Zones" },
      { href: "/admin/super-admin/config/taxes", label: "Taxes & TVA" },
      { href: "/admin/super-admin/config/langue", label: "Langue & Devise (FCFA)" },
    ],
  },
  {
    key: "securite",
    label: "Sécurité & Audit",
    items: [
      { href: "/admin/super-admin/securite/logs", label: "Journal d'activité (Logs)" },
      { href: "/admin/super-admin/securite/blacklist", label: "Blacklist (IP / Emails)" },
      { href: "/admin/super-admin/securite/maintenance", label: "Mode Maintenance", badge: "ON/OFF" },
      { href: "/admin/super-admin/securite/backup", label: "Sauvegardes (Backup)" },
      { href: "/admin/super-admin/securite/export", label: "Export données (CSV/Excel)" },
    ],
  },
  {
    key: "finances",
    label: "Finances & Rapports",
    items: [
      { href: "/admin/super-admin/finances/revenus", label: "Revenus & Marges" },
      { href: "/admin/super-admin/finances/rapport", label: "Rapport comptable" },
      { href: "/admin/super-admin/finances/roi", label: "ROI & Dépenses pub" },
    ],
  },
];

export function SuperAdminSidebarMenu({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    equipe: true,
    cles: false,
    configuration: false,
    securite: false,
    finances: false,
  });

  return (
    <div className="flex-1 pb-10">
      {sections.map((section) => (
        <div key={section.key} className="border-b border-[#d4af37]/15 py-1">
          <SuperAdminSidebarSectionHeader
            icon={<span aria-hidden="true">◆</span>}
            label={section.label}
            isOpen={open[section.key]}
            onToggle={() => setOpen((current) => ({ ...current, [section.key]: !current[section.key] }))}
          />
          {open[section.key] && (
            <div className="flex flex-col pb-1">
              {section.items.map((item) => (
                <SuperAdminSidebarLink
                  key={item.href}
                  href={item.href}
                  icon={<span aria-hidden="true">•</span>}
                  label={item.label}
                  badge={item.badge}
                  pathname={pathname}
                  onClose={onClose}
                />
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="px-3 pb-2 pt-4">
        <SuperAdminSidebarLink
          href="/admin/dashboard"
          icon={<span aria-hidden="true">←</span>}
          label="Retour à la boutique"
          pathname={pathname}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

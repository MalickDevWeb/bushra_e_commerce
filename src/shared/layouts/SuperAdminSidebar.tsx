"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SuperAdminSidebarProps {
  onClose?: () => void;
}

type SectionKey =
  | "dashboard"
  | "equipe"
  | "cles"
  | "configuration"
  | "securite"
  | "finances";

export function SuperAdminSidebar({ onClose }: SuperAdminSidebarProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    dashboard: true,
    equipe: true,
    cles: false,
    configuration: false,
    securite: false,
    finances: false,
  });

  const toggle = (key: SectionKey) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  /* ── Sub-link ── */
  const subLink = (
    href: string,
    icon: React.ReactNode,
    label: string,
    badge?: string
  ) => (
    <Link
      href={href}
      onClick={onClose}
      className={`flex items-center gap-3 pl-[3.2rem] pr-4 py-2.5 hover:bg-[#d4af37]/10 transition-colors group ${
        pathname === href
          ? "bg-[#d4af37]/10 border-l-2 border-[#d4af37]"
          : ""
      }`}
    >
      <span className="text-[#d4af37] shrink-0">{icon}</span>
      <span className="text-[13.5px] text-[#e3c77d] group-hover:text-white tracking-wide font-serif flex-1">
        {label}
      </span>
      {badge && (
        <span className="text-[9px] bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 rounded-full px-1.5 py-0.5 font-sans font-semibold shrink-0">
          {badge}
        </span>
      )}
    </Link>
  );

  /* ── Section header (accordion) ── */
  const sectionHeader = (
    key: SectionKey,
    icon: React.ReactNode,
    label: string,
    accentColor?: string
  ) => (
    <button
      onClick={() => toggle(key)}
      className="w-full flex items-center justify-between px-5 py-2.5 cursor-pointer group hover:bg-[#d4af37]/5 transition-colors"
    >
      <div className="flex items-center gap-3.5">
        <span className={accentColor ?? "text-[#d4af37]"} style={{ flexShrink: 0 }}>
          {icon}
        </span>
        <span
          className={`text-[15px] tracking-wide group-hover:text-white transition-colors font-serif ${accentColor ?? "text-[#d4af37]"}`}
        >
          {label}
        </span>
      </div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`w-3.5 h-3.5 text-[#d4af37] transition-transform duration-200 ${
          open[key] ? "rotate-180" : "rotate-0"
        }`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  );

  return (
    <div className="flex h-full flex-col bg-[#090705] overflow-y-auto custom-scrollbar font-serif shadow-[inset_-1px_0_15px_rgba(212,175,55,0.03)] border-r border-[#d4af37]/20">

      {/* ── LOGO + Badge Super Admin ── */}
      <div className="flex h-[70px] items-center justify-between border-b border-[#d4af37]/20 shrink-0 px-4">
        <Link href="/admin/super-admin" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#d4af37] text-[16px] font-bold text-[#d4af37] shrink-0">
            BM
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-[#d4af37] tracking-[0.2em] text-[18px] leading-none mb-0.5">
              BUSHRA
            </span>
            <span className="font-sans text-[6.5px] text-[#d4af37] uppercase tracking-[0.3em] font-medium opacity-80">
              Thiouraye - Dakar
            </span>
          </div>
        </Link>
        {/* Super Admin Badge */}
        <span className="text-[8px] font-sans font-bold bg-[#d4af37] text-[#090705] rounded-sm px-1.5 py-0.5 uppercase tracking-widest shrink-0">
          S.Admin
        </span>
      </div>

      {/* ── DASHBOARD BUTTON ── */}
      <div className="px-4 py-4 border-b border-[#d4af37]/20 shrink-0">
        <Link
          href="/admin/super-admin"
          onClick={onClose}
          className="flex items-center gap-3.5 rounded-md bg-gradient-to-r from-[#d4af37] via-[#c59b32] to-[#99771b] px-5 py-3 text-[#090705] shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all hover:brightness-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69v9.02a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75V15a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v6.56a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75v-9.02l8.69-8.69z" />
          </svg>
          <span className="text-[15px] font-bold tracking-wide">Vue d&apos;ensemble</span>
        </Link>
      </div>

      {/* ── ACCORDION MENU ── */}
      <div className="flex-1 pb-10">

        {/* ═══════════════════════════════════ */}
        {/* 1. GESTION DE L'ÉQUIPE             */}
        {/* ═══════════════════════════════════ */}
        <div className="border-b border-[#d4af37]/15 py-1">
          {sectionHeader(
            "equipe",
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>,
            "Équipe & Accès"
          )}
          {open.equipe && (
            <div className="flex flex-col pb-1">
              {subLink(
                "/admin/super-admin/staff",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>,
                "Comptes Admin / Staff"
              )}
              {subLink(
                "/admin/super-admin/roles",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>,
                "Rôles & Permissions"
              )}
              {subLink(
                "/admin/super-admin/connexions",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>,
                "Historique des connexions"
              )}
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════ */}
        {/* 2. CLÉS API & INTÉGRATIONS          */}
        {/* ═══════════════════════════════════ */}
        <div className="border-b border-[#d4af37]/15 py-1">
          {sectionHeader(
            "cles",
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>,
            "Clés API & Intégrations"
          )}
          {open.cles && (
            <div className="flex flex-col pb-1">
              {/* Sous-titre: Paiements */}
              <div className="pl-[3.2rem] pr-4 py-1.5">
                <span className="text-[9px] font-sans font-bold text-[#a89b82] uppercase tracking-[0.2em]">
                  Paiements
                </span>
              </div>
              {subLink(
                "/admin/super-admin/cles/wave",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>,
                "Wave",
                "API"
              )}
              {subLink(
                "/admin/super-admin/cles/orange-money",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>,
                "Orange Money",
                "API"
              )}
              {subLink(
                "/admin/super-admin/cles/stripe",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>,
                "Stripe / PayPal",
                "API"
              )}
              {/* Sous-titre: Communication */}
              <div className="pl-[3.2rem] pr-4 pt-3 pb-1.5">
                <span className="text-[9px] font-sans font-bold text-[#a89b82] uppercase tracking-[0.2em]">
                  Communication
                </span>
              </div>
              {subLink(
                "/admin/super-admin/cles/sms",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>,
                "SMS (Twilio / Infobip)",
                "API"
              )}
              {subLink(
                "/admin/super-admin/cles/email",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>,
                "Email (SendGrid)",
                "API"
              )}
              {/* Sous-titre: Analytics / Tracking */}
              <div className="pl-[3.2rem] pr-4 pt-3 pb-1.5">
                <span className="text-[9px] font-sans font-bold text-[#a89b82] uppercase tracking-[0.2em]">
                  Tracking
                </span>
              </div>
              {subLink(
                "/admin/super-admin/cles/analytics",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>,
                "Google Analytics",
                "ID"
              )}
              {subLink(
                "/admin/super-admin/cles/pixel",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>,
                "Facebook / TikTok Pixel",
                "ID"
              )}
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════ */}
        {/* 3. CONFIGURATION SYSTÈME            */}
        {/* ═══════════════════════════════════ */}
        <div className="border-b border-[#d4af37]/15 py-1">
          {sectionHeader(
            "configuration",
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>,
            "Configuration Système"
          )}
          {open.configuration && (
            <div className="flex flex-col pb-1">
              {subLink(
                "/admin/super-admin/config/boutique",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>,
                "Informations boutique"
              )}
              {subLink(
                "/admin/super-admin/config/livraison",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>,
                "Zones de livraison & tarifs"
              )}
              {subLink(
                "/admin/super-admin/config/taxes",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                </svg>,
                "Taxes & TVA"
              )}
              {subLink(
                "/admin/super-admin/config/langue",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>,
                "Langue & Devise (FCFA)"
              )}
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════ */}
        {/* 4. SÉCURITÉ & AUDIT                 */}
        {/* ═══════════════════════════════════ */}
        <div className="border-b border-[#d4af37]/15 py-1">
          {sectionHeader(
            "securite",
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>,
            "Sécurité & Audit"
          )}
          {open.securite && (
            <div className="flex flex-col pb-1">
              {subLink(
                "/admin/super-admin/securite/logs",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>,
                "Journal d'activité (Logs)"
              )}
              {subLink(
                "/admin/super-admin/securite/blacklist",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>,
                "Blacklist (IP / Emails)"
              )}
              {subLink(
                "/admin/super-admin/securite/maintenance",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>,
                "Mode Maintenance",
                "ON/OFF"
              )}
              {subLink(
                "/admin/super-admin/securite/backup",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>,
                "Sauvegardes (Backup)"
              )}
              {subLink(
                "/admin/super-admin/securite/export",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>,
                "Export données (CSV/Excel)"
              )}
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════ */}
        {/* 5. FINANCES & RAPPORTS              */}
        {/* ═══════════════════════════════════ */}
        <div className="border-b border-[#d4af37]/15 py-1">
          {sectionHeader(
            "finances",
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
            "Finances & Rapports"
          )}
          {open.finances && (
            <div className="flex flex-col pb-1">
              {subLink(
                "/admin/super-admin/finances/revenus",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>,
                "Revenus & Marges"
              )}
              {subLink(
                "/admin/super-admin/finances/rapport",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>,
                "Rapport comptable"
              )}
              {subLink(
                "/admin/super-admin/finances/roi",
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>,
                "ROI & Dépenses pub"
              )}
            </div>
          )}
        </div>

        {/* ─── Lien retour vers boutique ─── */}
        <div className="px-3 pt-4 pb-2">
          <Link
            href="/admin/dashboard"
            onClick={onClose}
            className="flex items-center gap-3 rounded-lg px-4 py-3 bg-[#d4af37]/5 border border-[#d4af37]/20 hover:bg-[#d4af37]/10 transition-all group"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-[#d4af37]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[13px] font-serif text-[#d4af37] group-hover:text-white transition-colors tracking-wide">
                Espace boutique
              </span>
              <span className="text-[10px] text-[#a89b82]">
                Mode administrateur
              </span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#d4af37]/50 shrink-0 group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

      </div>

      {/* ── BOTTOM: Profil + Déconnexion ── */}
      <div className="shrink-0 border-t border-[#d4af37]/20 p-4 flex flex-col gap-2">
        {/* Profil */}
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-[#090705] text-[11px] font-bold shrink-0">
            SA
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-serif text-[#e8e1d3] truncate">Super Admin</span>
            <span className="text-[10px] text-[#a89b82] font-sans truncate">bushra@admin.sn</span>
          </div>
        </div>
        {/* Déconnexion */}
        <button className="flex w-full items-center gap-3 rounded-md px-4 py-2.5 text-[#a89b82] hover:bg-red-900/20 hover:text-red-400 transition-colors group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          <span className="text-[13px] font-serif tracking-wide">Déconnexion</span>
        </button>
      </div>

    </div>
  );
}


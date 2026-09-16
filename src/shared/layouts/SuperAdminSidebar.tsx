"use client";

import Link from "next/link";
import { SuperAdminSidebarBrand } from "./SuperAdminSidebarBrand";
import { SuperAdminSidebarFooter } from "./SuperAdminSidebarFooter";
import { SuperAdminSidebarMenu } from "./SuperAdminSidebarMenu";

interface SuperAdminSidebarProps {
  onClose?: () => void;
}

export function SuperAdminSidebar({ onClose }: SuperAdminSidebarProps) {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r border-[#d4af37]/20 bg-[#090705] font-serif shadow-[inset_-1px_0_15px_rgba(212,175,55,0.03)] custom-scrollbar">
      <SuperAdminSidebarBrand />
      <div className="shrink-0 border-b border-[#d4af37]/20 px-4 py-4">
        <Link
          href="/admin/super-admin"
          onClick={onClose}
          className="flex items-center gap-3.5 rounded-md bg-gradient-to-r from-[#d4af37] via-[#c59b32] to-[#99771b] px-5 py-3 text-[#090705] shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all hover:brightness-110"
        >
          <span aria-hidden="true">⌂</span>
          <span className="text-[15px] font-bold tracking-wide">Vue d&apos;ensemble</span>
        </Link>
      </div>
      <SuperAdminSidebarMenu onClose={onClose} />
      <SuperAdminSidebarFooter onClose={onClose} />
    </div>
  );
}

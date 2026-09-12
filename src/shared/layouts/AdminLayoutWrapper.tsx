"use client";

import { usePathname } from "next/navigation";
import { AdminShell } from "./AdminShell";
import { SuperAdminShell } from "./SuperAdminShell";

export function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSuperAdmin = pathname?.startsWith("/admin/super-admin");

  if (isSuperAdmin) {
    return <SuperAdminShell>{children}</SuperAdminShell>;
  }
  
  return <AdminShell>{children}</AdminShell>;
}


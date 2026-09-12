"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

interface AdminShellProps {
  children: React.ReactNode;
  isSuperAdmin?: boolean;
}

export function AdminShell({ children, isSuperAdmin = false }: AdminShellProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#e8e1d3]">
      {/* Sidebar - Fixed width, fixed height */}
      <aside className="w-[280px] shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col">
        <AdminSidebar isSuperAdmin={isSuperAdmin} />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header - Fixed height */}
        <header className="h-20 shrink-0 border-b border-[#d4af37]/10 bg-[#0a0a0a]">
          <AdminTopbar />
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#0a0a0a] p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}

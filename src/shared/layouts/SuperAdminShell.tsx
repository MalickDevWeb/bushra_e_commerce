"use client";

import { SuperAdminSidebar } from "./SuperAdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

interface SuperAdminShellProps {
  children: React.ReactNode;
}

export function SuperAdminShell({ children }: SuperAdminShellProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#e8e1d3]">
      {/* Sidebar — exclusivement Super Admin */}
      <aside className="w-[260px] shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col">
        <SuperAdminSidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 shrink-0 border-b border-[#d4af37]/10 bg-[#0a0a0a]">
          <AdminTopbar />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-[#0a0a0a] p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}


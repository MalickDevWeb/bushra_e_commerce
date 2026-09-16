"use client";

import { SuperAdminSidebar } from "./SuperAdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

interface SuperAdminShellProps {
  children: React.ReactNode;
}

import { useState } from "react";

export function SuperAdminShell({ children }: SuperAdminShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#e8e1d3]">
      {/* Sidebar — exclusivement Super Admin */}
      <aside className={`shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-[260px]" : "w-0 overflow-hidden border-none"}`}>
        <div className="w-[260px] h-full">
        <SuperAdminSidebar />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 shrink-0 border-b border-[#d4af37]/10 bg-[#0a0a0a]">
          <AdminTopbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-[#0a0a0a] p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}


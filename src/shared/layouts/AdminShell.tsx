"use client";

import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

interface AdminShellProps {
  children: React.ReactNode;
}

import { useState } from "react";

export function AdminShell({ children }: AdminShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#e8e1d3]">
      {/* Sidebar - Fixed width, fixed height */}
      <aside className={`shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-[250px]" : "w-0 overflow-hidden border-none"}`}>
        <div className="w-[250px] h-full">
        <AdminSidebar />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header - Fixed height */}
        <header className="h-20 shrink-0 border-b border-[#d4af37]/10 bg-[#0a0a0a]">
          <AdminTopbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#0a0a0a] p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}

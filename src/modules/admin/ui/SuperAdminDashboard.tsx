"use client";

import { SuperAdminDashboardStats } from "./SuperAdminDashboardStats";
import { DashboardQuickActions } from "./DashboardQuickActions";
import { DashboardAdminPanels } from "./DashboardAdminPanels";
import { DashboardSecurityPanels } from "./DashboardSecurityPanels";

export default function SuperAdminDashboard() {
  return (
    <div className="flex flex-col gap-5 pb-20 text-[#e8e1d3]">
      <DashboardQuickActions />
      <SuperAdminDashboardStats />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <DashboardAdminPanels />
        <DashboardSecurityPanels />
      </div>
    </div>
  );
}

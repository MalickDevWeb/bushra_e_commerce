import type { DashboardData } from "@/modules/dashboard/actions/dashboard.actions";
import { DashboardActivityPanels } from "@/modules/dashboard/ui/DashboardActivityPanels";
import { DashboardKpiGrid } from "@/modules/dashboard/ui/DashboardKpiGrid";
import { DashboardQuickActions } from "@/modules/dashboard/ui/DashboardQuickActions";
import { DashboardSalesChart } from "@/modules/dashboard/ui/DashboardSalesChart";
import { DashboardTables } from "@/modules/dashboard/ui/DashboardTables";
import { DashboardTopProducts } from "@/modules/dashboard/ui/DashboardTopProducts";
import { AdminPageShell } from "@/shared/ui/AdminPageShell";

export default function AdminDashboardMain({ data }: { data: DashboardData }) {
  return (
    <AdminPageShell>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
          <DashboardKpiGrid data={data} />
          <DashboardQuickActions />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <DashboardSalesChart sales={data.sales} />
            <DashboardTopProducts products={data.topProducts} />
          </div>
          <DashboardTables orders={data.orders} messages={data.messages} />
          <DashboardActivityPanels data={data} />
        </div>
      </div>
    </AdminPageShell>
  );
}

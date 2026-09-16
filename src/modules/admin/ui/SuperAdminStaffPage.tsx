import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { getStaffMembers } from "../actions/staffActions";
import { StaffTable } from "./StaffTable";

export default async function SuperAdminStaffPage() {
  const staff = await getStaffMembers();

  return (
    <AdminPageShell>
      <StaffTable staff={staff} />
    </AdminPageShell>
  );
}

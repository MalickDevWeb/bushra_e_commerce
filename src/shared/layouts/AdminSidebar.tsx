import { AdminSidebarLayout } from "./AdminSidebarLayout";

interface AdminSidebarProps {
  onClose?: () => void;
}

export function AdminSidebar({ onClose }: AdminSidebarProps) {
  return <AdminSidebarLayout onClose={onClose} />;
}

import { AdminSidebarMain } from "./AdminSidebarMain";

interface AdminSidebarProps {
  onClose?: () => void;
}

export function AdminSidebarLayout({ onClose }: AdminSidebarProps) {
  return <AdminSidebarMain onClose={onClose} />;
}

import { PublicMobileShell } from "@/shared/layouts/PublicMobileShell";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicMobileShell>{children}</PublicMobileShell>;
}

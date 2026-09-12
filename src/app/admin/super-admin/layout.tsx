// Pas de layout supplémentaire ici.
// Le layout parent /admin/layout.tsx gère déjà le Shell approprié.
export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

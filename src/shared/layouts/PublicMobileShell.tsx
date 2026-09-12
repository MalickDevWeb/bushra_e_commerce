import { BottomNavbar } from "@/shared/ui/BottomNavbar";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopFooter } from "./DesktopFooter";

interface PublicMobileShellProps {
  children: React.ReactNode;
}

export function PublicMobileShell({ children }: PublicMobileShellProps) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-background text-foreground">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      
      {/* Desktop Header */}
      <DesktopHeader />

      <main className="flex-1 pb-24 lg:pb-0 lg:pt-28">
        {children}
      </main>

      {/* Desktop Footer */}
      <DesktopFooter />

      {/* Mobile Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
}

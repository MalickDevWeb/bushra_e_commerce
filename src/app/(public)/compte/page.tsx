import { AccountHeader } from "./components/AccountHeader";
import { AccountMenu } from "./components/AccountMenu";
import { WhatsAppFAB } from "@/shared/ui/mobile/WhatsAppFAB";
import { DesktopAccount } from "@/shared/ui/DesktopAccount";

export default function AccountPage() {
  return (
    <>
      <div className="lg:hidden mx-auto max-w-7xl bg-[#0a0a0a] min-h-screen pb-24">
        <AccountHeader />
        <AccountMenu />
        <WhatsAppFAB />
      </div>
      <DesktopAccount />
    </>
  );
}

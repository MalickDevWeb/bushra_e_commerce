import Image from "next/image";
import { ContactInfo } from "@/modules/content/ui/contact/ContactInfo";
import { ContactForm } from "@/modules/content/ui/contact/ContactForm";
import { DesktopContact } from "@/modules/content/ui/contact/DesktopContact";

export default function ContactPage() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopContact />
      </div>

      <div className="lg:hidden relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden pt-28 pb-24">
        {/* Background elements */}
        <div className="hidden absolute right-[-5%] top-1/2 -translate-y-1/2 w-[700px] h-[900px] opacity-80 z-0 pointer-events-none">
          <Image
            src="/images/hero_censer.jpg"
            alt="Censer illustration"
            fill
            priority
            className="object-contain object-right"
            sizes="(max-width: 1024px) 0vw, 700px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
          <div className="w-full shrink-0">
            <ContactInfo />
          </div>
          <div className="w-full flex">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

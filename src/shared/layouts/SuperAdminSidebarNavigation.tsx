import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  onClose?: () => void;
  badge?: string;
}

export function SuperAdminSidebarLink({ href, icon, label, pathname, onClose, badge }: SidebarLinkProps) {
  return (
    <Link href={href} onClick={onClose} className={`group flex items-center gap-3 py-2.5 pl-[3.2rem] pr-4 transition-colors hover:bg-[#d4af37]/10 ${pathname === href ? "border-l-2 border-[#d4af37] bg-[#d4af37]/10" : ""}`}>
      <span className="shrink-0 text-[#d4af37]">{icon}</span>
      <span className="flex-1 font-serif text-[13.5px] tracking-wide text-[#e3c77d] group-hover:text-white">{label}</span>
      {badge && <span className="shrink-0 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/20 px-1.5 py-0.5 font-sans text-[9px] font-semibold text-[#d4af37]">{badge}</span>}
    </Link>
  );
}

interface SidebarSectionHeaderProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  accentColor?: string;
}

export function SuperAdminSidebarSectionHeader({ icon, label, isOpen, onToggle, accentColor }: SidebarSectionHeaderProps) {
  const color = accentColor ?? "text-[#d4af37]";

  return (
    <button onClick={onToggle} className="group flex w-full cursor-pointer items-center justify-between px-5 py-2.5 transition-colors hover:bg-[#d4af37]/5">
      <div className="flex items-center gap-3.5"><span className={color}>{icon}</span><span className={`font-serif text-[15px] tracking-wide transition-colors group-hover:text-white ${color}`}>{label}</span></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-3.5 w-3.5 text-[#d4af37] transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
    </button>
  );
}
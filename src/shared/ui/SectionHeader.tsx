import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeader({
  title,
  href,
  linkLabel = "Voir tout",
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4">
      <h2 className="font-serif text-xl font-semibold text-white">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-xs font-medium text-gold transition-colors hover:text-gold-light"
        >
          {linkLabel} &gt;
        </Link>
      )}
    </div>
  );
}

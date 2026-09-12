import Image from "next/image";
import Link from "next/link";

import { Badge } from "./Badge";

interface CategoryCardProps {
  title: string;
  count: number;
  image: string;
  href?: string;
  isNew?: boolean;
}

export function CategoryCard({
  title,
  count,
  image,
  href = "#",
  isNew,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-52 w-36 shrink-0 flex-col justify-end overflow-hidden rounded-xl border border-border-gold bg-surface"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="144px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      {isNew && (
        <Badge variant="new" className="absolute left-2 top-2">
          Nouveau
        </Badge>
      )}
      <div className="relative z-10 p-3">
        <p className="text-sm font-medium leading-tight text-white">{title}</p>
        <p className="mt-0.5 text-[11px] text-zinc-400">{count} pièces</p>
      </div>
    </Link>
  );
}

import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function IconButton({ label, className, children, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-border-gold text-gold transition-colors hover:bg-gold/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

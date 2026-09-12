import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

const sizeStyles = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

const variantStyles = {
  gold: "gold-gradient font-semibold text-black shadow-[0_4px_20px_rgba(201,162,39,0.35)] hover:brightness-110",
  outline:
    "border border-border-gold bg-transparent text-gold hover:bg-gold/10",
  ghost: "bg-transparent text-gold hover:bg-white/5",
};

export function Button({
  className,
  children,
  variant = "gold",
  size = "md",
  href,
  icon,
  type = "button",
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all active:scale-[0.98] disabled:opacity-50",
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} {...props}>
      {content}
    </button>
  );
}

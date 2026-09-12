import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "new" | "vip";
  className?: string;
}

export function Badge({ children, variant = "new", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
        variant === "new" && "bg-gold text-black",
        variant === "vip" &&
          "border border-gold/40 bg-black/40 text-gold backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

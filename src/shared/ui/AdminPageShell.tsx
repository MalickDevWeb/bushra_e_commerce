import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface AdminPageShellProps {
  children: ReactNode;
  className?: string;
}

export function AdminPageShell({ children, className }: AdminPageShellProps) {
  return (
    <div className={cn("flex flex-col gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10", className)}>
      {children}
    </div>
  );
}

import { type ReactNode } from "react";

interface AdminPageHeaderProps {
  title: string;
  description: string;
  action?: ReactNode;
  leading?: ReactNode;
}

export function AdminPageHeader({ title, description, action, leading }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {leading}
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#d4af37]">{title}</h1>
          <p className="text-[13px] text-[#a89b82] mt-1">{description}</p>
        </div>
      </div>
      {action}
    </div>
  );
}

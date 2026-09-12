interface AdminPlaceholderPanelProps {
  children: string;
}

export function AdminPlaceholderPanel({ children }: AdminPlaceholderPanelProps) {
  return (
    <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 flex items-center justify-center min-h-[400px]">
      <p className="text-[#a89b82]">{children}</p>
    </div>
  );
}

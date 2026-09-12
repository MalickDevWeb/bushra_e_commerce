interface PaginationDotsProps {
  total: number;
  activeIndex?: number;
  onSelect?: (index: number) => void;
}

export function PaginationDots({ total, activeIndex = 0, onSelect }: PaginationDotsProps) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Afficher la slide ${index + 1}`}
          aria-current={index === activeIndex ? "true" : undefined}
          onClick={() => onSelect?.(index)}
          className={`h-1.5 rounded-full transition-all ${
            index === activeIndex
              ? "w-4 bg-gold"
              : "w-1.5 bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}

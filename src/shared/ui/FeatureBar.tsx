import type { FeatureItem } from "@/shared/constants/home.data";

function FeatureIcon({ icon }: { icon: FeatureItem["icon"] }) {
  const paths: Record<FeatureItem["icon"], React.ReactNode> = {
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v6c0 4.5-3.2 8.2-7 9-3.8-.8-7-4.5-7-9V6l7-3z"
      />
    ),
    craft: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
      />
    ),
    diamond: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 3h12l4 6-10 12L2 9l4-6z"
      />
    ),
    delivery: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 9V4h9v5M6 18H4a2 2 0 01-2-2v-5h18v5a2 2 0 01-2 2h-2M6 14h12v4H6v-4z"
      />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      {paths[icon]}
    </svg>
  );
}

interface FeatureBarProps {
  items: FeatureItem[];
}

export function FeatureBar({ items }: FeatureBarProps) {
  return (
    <section className="overflow-hidden rounded-[22px] border border-[#c9a227]/35 bg-[linear-gradient(180deg,#1a1208_0%,#120d08_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="grid grid-cols-5 gap-2 p-2">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={[
              "flex min-h-[90px] flex-col items-center justify-center gap-1.5 rounded-[16px] border px-1.5 py-2 text-center transition-all",
              index === 0
                ? "border-[#c9a227]/60 bg-[linear-gradient(180deg,#f4d778_0%,#b98b0b_100%)] text-[#1a1208] shadow-[0_6px_18px_rgba(201,162,39,0.35)]"
                : "border-[#c9a227]/20 bg-[#1c1710]/80 text-[#f5e7c3]",
            ].join(" ")}
          >
            <div
              className={[
                "flex h-8 w-8 items-center justify-center rounded-full border",
                index === 0 ? "border-[#1a1208]/40 bg-[#f6df8e]/20" : "border-[#c9a227]/25 bg-[#1f1a13]",
              ].join(" ")}
            >
              <FeatureIcon icon={item.icon} />
            </div>
            <span className="text-[10px] font-medium leading-[1.1]">{item.label}</span>
            {typeof item.count === "number" ? (
              <span className="text-[9px] font-semibold opacity-80">({item.count})</span>
            ) : null}
          </button>
        ))}
      </div>
    </section>
  );
}

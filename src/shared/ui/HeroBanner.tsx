import Image from "next/image";

import { Button } from "./Button";
import { PaginationDots } from "./PaginationDots";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaHref?: string;
  slideCount?: number;
  activeSlide?: number;
}

export function HeroBanner({
  title,
  subtitle,
  image,
  ctaLabel,
  ctaHref = "#",
  slideCount = 4,
  activeSlide = 0,
}: HeroBannerProps) {
  return (
    <section className="relative mx-4 mt-3 overflow-hidden rounded-[28px] border border-border-gold bg-[#0d0d0d] shadow-[0_0_24px_rgba(201,162,39,0.08)]">
      <div className="relative min-h-[560px]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(201,162,39,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        <div className="absolute inset-0 flex items-end px-4 pb-6">
          <div className="max-w-[60%] space-y-4 text-left">
            <h1 className="font-serif text-[3.2rem] leading-[0.85] font-semibold tracking-[-0.05em] gold-text-gradient">
              {title}
            </h1>
            <p className="max-w-[18rem] text-base text-zinc-300">{subtitle}</p>

            <Button
              href={ctaHref}
              size="lg"
              className="!h-12 !px-5 !text-sm"
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              {ctaLabel}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <PaginationDots total={slideCount} activeIndex={activeSlide} />
        </div>
      </div>
    </section>
  );
}

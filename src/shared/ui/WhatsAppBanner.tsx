import Image from "next/image";

import { WHATSAPP_URL } from "@/shared/constants/config";

import { Badge } from "./Badge";
import { Button } from "./Button";

interface WhatsAppBannerProps {
  image: string;
}

export function WhatsAppBanner({ image }: WhatsAppBannerProps) {
  return (
    <section className="mx-4 overflow-hidden rounded-2xl border border-border-gold">
      <div className="relative min-h-[140px]">
        <Image
          src={image}
          alt="Conseil Bushra VIP"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        <div className="relative flex items-center gap-4 p-4">
          <div className="flex-1 space-y-2">
            <Badge variant="vip">✦ BUSHRA VIP</Badge>
            <p className="text-sm leading-snug text-white">
              Besoin d&apos;un conseil sur le{" "}
              <span className="font-semibold text-gold">Thiouraye</span> ou un{" "}
              <span className="font-semibold text-gold">Encensoir</span> ?
            </p>
            <p className="text-xs text-zinc-400">
              Discutez avec nous sur WhatsApp
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.917l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.372l-.357-.212-2.642.886.886-2.575-.233-.375A9.818 9.818 0 1112 21.818z" />
              </svg>
            </a>
            <Button href={WHATSAPP_URL} size="sm" variant="gold">
              Discuter →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

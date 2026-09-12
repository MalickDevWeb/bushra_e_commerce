"use client";

import { useRef } from "react";

export function DesktopHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative hidden lg:flex min-h-[88vh] w-full items-center overflow-hidden px-10 xl:px-20">
      {/* ── Arrière-plan décoratif ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Halos lumineux */}
        <div className="absolute -left-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#d4af37]/6 blur-[120px]" />
        <div className="absolute right-1/3 top-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/4 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#8b6914]/8 blur-[80px]" />
      </div>

      {/* ── Colonne gauche : texte ── */}
      <div className="relative z-10 flex-1 max-w-[520px]">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/8 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-[0.72rem] font-medium tracking-[0.2em] text-[#d4af37] uppercase">
            Artisanat d&apos;exception · Dakar
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="font-serif text-[4rem] xl:text-[5rem] leading-[1.05] text-[#faf7ef] mb-6">
          L&apos;art du
          <br />
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 50%, #c9a227 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            thiouraye
          </span>
          <br />
          en laiton massif.
        </h1>

        {/* Sous-titre */}
        <p className="text-[1rem] leading-[1.7] text-[#a89b82] mb-10 max-w-[400px]">
          Encensoirs ciselés, Mabkharas royales, Coffrets cadeaux — 
          chaque pièce est forgée à la main par des artisans sénégalais.
        </p>

        {/* Boutons CTA */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href="/boutique"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[0.9rem] font-semibold text-[#0a0a0a] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 50%, #c9a227 100%)",
            }}
          >
            <span className="relative z-10">Découvrir la boutique</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/collections"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 px-7 py-3.5 text-[0.9rem] font-medium text-[#e8e1d3] transition-all duration-300 hover:border-[#d4af37]/70 hover:bg-[#d4af37]/8"
          >
            Voir les collections
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8">
          {[
            { value: "28+", label: "Pièces uniques" },
            { value: "100%", label: "Laiton massif" },
            { value: "48h", label: "Livraison Dakar" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-[1.6rem] font-bold leading-none mb-0.5"
                style={{
                  background: "linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {stat.value}
              </p>
              <p className="text-[0.7rem] text-[#a89b82] tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Colonne droite : mockup téléphone ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        {/* Halo derrière le téléphone */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[500px] w-[500px] rounded-full bg-[#d4af37]/8 blur-[80px]" />
        </div>

        {/* Anneaux décoratifs */}
        <div className="absolute h-[460px] w-[460px] rounded-full border border-[#d4af37]/8 animate-[spin_30s_linear_infinite]" />
        <div className="absolute h-[380px] w-[380px] rounded-full border border-[#d4af37]/6 animate-[spin_20s_linear_infinite_reverse]" />

        {/* Carte flottante — prix */}
        <div
          className="absolute -left-4 top-1/4 z-20 flex items-center gap-3 rounded-2xl border border-[#d4af37]/30 p-3 backdrop-blur-md shadow-2xl"
          style={{ background: "rgba(12, 10, 7, 0.85)" }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d4af37]/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 0a4 4 0 014 4h-8a4 4 0 014-4zM4 14h16v4c0 2-2 4-4 4H8c-2 0-4-2-4-4v-4z" />
            </svg>
          </div>
          <div>
            <p className="text-[0.65rem] text-[#a89b82]">Encensoir Ciselé</p>
            <p className="text-[0.85rem] font-semibold text-[#d4af37]">35 000 FCFA</p>
          </div>
        </div>

        {/* Carte flottante — livraison */}
        <div
          className="absolute -right-2 bottom-1/4 z-20 flex items-center gap-2 rounded-2xl border border-[#d4af37]/30 px-4 py-2.5 backdrop-blur-md shadow-2xl"
          style={{ background: "rgba(12, 10, 7, 0.85)" }}
        >
          <span className="text-lg">🚚</span>
          <div>
            <p className="text-[0.65rem] text-[#a89b82]">Livraison</p>
            <p className="text-[0.78rem] font-semibold text-[#e8e1d3]">Gratuite · Dakar</p>
          </div>
        </div>

        {/* ── Téléphone mockup ── */}
        <div
          className="relative z-10 transition-transform duration-700 hover:scale-[1.02]"
          style={{ filter: "drop-shadow(0 40px 80px rgba(212, 175, 55, 0.2))" }}
        >
          {/* Coque téléphone */}
          <div
            className="relative rounded-[44px] border-[3px] border-[#2a2215] overflow-hidden"
            style={{
              width: "260px",
              height: "540px",
              background: "#0c0a07",
              boxShadow:
                "inset 0 0 0 1px rgba(212,175,55,0.2), 0 60px 120px rgba(0,0,0,0.8), 0 0 0 6px #1a1405",
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 h-7 w-24 rounded-full bg-[#0a0a0a] border border-[#2a2215]" />

            {/* Boutons latéraux (déco) */}
            <div className="absolute -right-[5px] top-24 h-12 w-[3px] rounded-full bg-[#2a2215]" />
            <div className="absolute -left-[5px] top-20 h-8 w-[3px] rounded-full bg-[#2a2215]" />
            <div className="absolute -left-[5px] top-32 h-8 w-[3px] rounded-full bg-[#2a2215]" />

            {/* Contenu de l'écran — vidéo ou image de fallback */}
            <div className="absolute inset-0 rounded-[41px] overflow-hidden">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/mobile/hero-scene.png"
                /* Remplacez /videos/demo.mp4 par votre vidéo de démo */
                src="/videos/demo.mp4"
                onError={(e) => {
                  // Pas de vidéo : on cache l'élément pour laisser le poster
                  (e.currentTarget as HTMLVideoElement).style.display = "none";
                }}
              />

              {/* Overlay UI simulant l'app Bushra */}
              <div className="absolute inset-0 flex flex-col pointer-events-none">
                {/* Barre de statut */}
                <div className="flex items-center justify-between px-6 pt-12 pb-2">
                  <span className="text-[0.6rem] font-semibold text-[#e8e1d3]">9:41</span>
                  <div className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="#e8e1d3" className="h-3 w-3">
                      <path d="M1 7l4 3 4-6 4 6 4-3 4 2" stroke="#e8e1d3" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="#e8e1d3" className="h-3 w-3">
                      <rect x="2" y="7" width="14" height="10" rx="2" stroke="#e8e1d3" strokeWidth="2" fill="none"/>
                      <path d="M16 10h2a2 2 0 000-4h-2" stroke="#e8e1d3" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Header app */}
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full border border-[#d4af37]/60 flex items-center justify-center">
                      <span className="text-[0.45rem] font-serif text-[#d4af37]">BM</span>
                    </div>
                    <span className="text-[0.6rem] font-serif tracking-widest text-[#e8e1d3]">BUSHRA</span>
                  </div>
                  <div className="h-6 w-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" className="h-3 w-3">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                  </div>
                </div>

                {/* Zone image produit */}
                <div className="flex-1 mx-3 rounded-2xl bg-[#1a1405]/60 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0a07]/80" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[0.65rem] text-[#a89b82]">Collection Royale</p>
                    <p className="text-[0.75rem] font-semibold text-[#e8e1d3]">Mabkhara Dorée</p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-[0.7rem] font-bold text-[#d4af37]">45 000 FCFA</span>
                      <div className="h-5 w-5 rounded-full bg-[#d4af37] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="3" className="h-2.5 w-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-around px-4 py-3 mt-1">
                  {["🏠", "🔍", "❤️", "👤"].map((icon, i) => (
                    <div
                      key={i}
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        i === 0 ? "bg-[#d4af37]/20" : ""
                      }`}
                    >
                      <span className="text-sm">{icon}</span>
                    </div>
                  ))}
                </div>

                {/* Barre de navigation home indicator */}
                <div className="flex justify-center pb-2">
                  <div className="h-1 w-24 rounded-full bg-[#e8e1d3]/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Reflet sur la vitre */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[44px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

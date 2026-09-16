import Link from "next/link";

const settings = [
  ["Nom du site", "BUSHRA"],
  ["Slogan", "Thiouraye • Dakar"],
  ["Devise", "FCFA (XOF)"],
  ["Langue par défaut", "Français"],
  ["Fuseau horaire", "Afrique/Dakar"],
  ["Thème couleur", "Noir & Or"],
];

const apiKeys = ["Stripe (Paiement)", "PayPal (Paiement)", "WhatsApp Business", "Google Maps", "Email SMTP", "SendGrid (Emails)"];

export function DashboardSecurityPanels() {
  return (
    <div className="flex flex-col gap-5">
      <section className="rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-5">
        <PanelTitle title="Paramètres système" />
        {settings.map(([label, value]) => <div key={label} className="flex justify-between border-b border-[#d4af37]/10 py-2 text-[12px] last:border-0"><span className="text-[#a89b82]">{label}</span><strong>{value}</strong></div>)}
      </section>
      <section className="rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-5">
        <PanelTitle title="Gestion des clés API" />
        <div className="flex flex-col gap-3">{apiKeys.map((key) => <div key={key} className="flex items-center justify-between gap-3 text-xs"><span>{key}</span><span className="font-mono text-[10px] text-[#a89b82]">••••••••••</span><span className="text-emerald-400">Actif</span></div>)}</div>
        <button className="mt-4 w-full rounded-lg border border-[#d4af37]/30 py-2.5 text-xs text-[#d4af37] hover:bg-[#d4af37]/10">Gérer les clés API</button>
      </section>
      <section className="rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-5">
        <PanelTitle title="Maintenance & Sécurité" />
        {["Mode maintenance", "Cache système", "Logs système", "Sauvegarde manuelle"].map((item) => <div key={item} className="flex items-center justify-between border-b border-[#d4af37]/10 py-3 text-xs last:border-0"><span>{item}</span><button className="rounded-md border border-[#d4af37]/30 px-3 py-1.5 text-[10px] text-[#d4af37] hover:bg-[#d4af37]/10">{item === "Mode maintenance" ? "Désactivé" : item.startsWith("Sauvegarde") ? "Sauvegarder" : "Voir"}</button></div>)}
      </section>
    </div>
  );
}

function PanelTitle({ title }: { title: string }) {
  return <div className="mb-4 flex items-center justify-between"><h2 className="text-base font-bold">{title}</h2><Link href="#" className="text-xs text-[#d4af37] hover:underline">Voir tout</Link></div>;
}

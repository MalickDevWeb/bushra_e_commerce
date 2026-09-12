"use client";

import Link from "next/link";
import Image from "next/image";

export default function SuperAdminPage() {
  return (
    <div className="flex flex-col gap-5 pb-20 text-[#e8e1d3]">

      {/* ── ROW 1: QUICK ACTION CARDS ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "Créer un admin", sub: "Ajouter un nouvel administrateur", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /> },
          { label: "Gérer les rôles", sub: "Permissions et accès", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /> },
          { label: "Clés API", sub: "Gérer les intégrations", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.169.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /> },
          { label: "Sauvegarde", sub: "Sauvegarder la plateforme", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /> },
          { label: "Logs système", sub: "Voir l'historique", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /> },
          { label: "Paramètres avancés", sub: "Configuration technique", icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></> },
        ].map((card, i) => (
          <button key={i} className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4 flex items-start gap-3 hover:bg-[#d4af37]/5 transition-colors text-left group">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">{card.icon}</svg>
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <span className="text-sm font-semibold text-[#e8e1d3] group-hover:text-white transition-colors leading-tight">{card.label}</span>
              <span className="text-[10px] text-[#a89b82] leading-snug">{card.sub}</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        ))}
      </div>

      {/* ── ROW 2: MAIN GRID ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* LEFT COL (span 2) */}
        <div className="xl:col-span-2 flex flex-col gap-5">

          {/* Gestion des administrateurs */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-[#e8e1d3]">Gestion des administrateurs</h2>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline">Voir tout</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-[#a89b82] border-b border-[#d4af37]/20 text-[11px]">
                    <th className="pb-3 text-left font-normal uppercase tracking-wider">Nom</th>
                    <th className="pb-3 text-left font-normal uppercase tracking-wider">Email</th>
                    <th className="pb-3 text-left font-normal uppercase tracking-wider">Rôle</th>
                    <th className="pb-3 text-left font-normal uppercase tracking-wider">Statut</th>
                    <th className="pb-3 text-left font-normal uppercase tracking-wider">Dernière connexion</th>
                    <th className="pb-3 text-left font-normal uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-[12.5px]">
                  {[
                    { name: "Super Admin", email: "admin@bushra.sn", role: "Super Admin", roleColor: "bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/30", status: "En ligne", statusColor: "text-emerald-400", date: "18/08/2025 10:24" },
                    { name: "Imam Ndiaye", email: "imam@bushra.sn", role: "Administrateur", roleColor: "bg-[#3498db]/20 text-[#3498db] border-[#3498db]/30", status: "Actif", statusColor: "text-emerald-400", date: "17/08/2025 16:45" },
                    { name: "Awa Diop", email: "awa@bushra.sn", role: "Gestionnaire contenu", roleColor: "bg-[#9b59b6]/20 text-[#9b59b6] border-[#9b59b6]/30", status: "Actif", statusColor: "text-emerald-400", date: "16/08/2025 14:32" },
                    { name: "Moussa Fall", email: "moussa@bushra.sn", role: "Gestionnaire boutique", roleColor: "bg-[#2ecc71]/20 text-[#2ecc71] border-[#2ecc71]/30", status: "Actif", statusColor: "text-emerald-400", date: "15/08/2025 11:20" },
                    { name: "Fatou Sy", email: "fatou@bushra.sn", role: "Modérateur", roleColor: "bg-[#e74c3c]/20 text-[#e74c3c] border-[#e74c3c]/30", status: "Inactif", statusColor: "text-red-400", date: "14/08/2025 09:12" },
                  ].map((admin, i) => (
                    <tr key={i} className="border-b border-[#d4af37]/10 last:border-0 hover:bg-[#d4af37]/5 transition-colors">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                          </div>
                          <span className="font-medium text-[#e8e1d3]">{admin.name}</span>
                        </div>
                      </td>
                      <td className="py-3 text-[#a89b82]">{admin.email}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-1 text-[10px] rounded-full border ${admin.roleColor}`}>{admin.role}</span>
                      </td>
                      <td className="py-3">
                        <span className={`flex items-center gap-1.5 text-xs ${admin.statusColor}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>{admin.status}
                        </span>
                      </td>
                      <td className="py-3 text-[#a89b82] text-[11px] whitespace-nowrap">{admin.date}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <button className="text-[#d4af37] hover:text-white transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" /></svg></button>
                          <button className="text-[#a89b82] hover:text-[#d4af37] transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg></button>
                          <button className="text-red-500 hover:text-red-400 transition-colors"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 pt-4 border-t border-[#d4af37]/10 flex items-center justify-between">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#d4af37]/30 rounded-lg text-[#d4af37] text-xs hover:bg-[#d4af37]/10 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                Ajouter un administrateur
              </button>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline">Gérer les rôles et permissions →</Link>
            </div>
          </div>

          {/* Clés et intégrations */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#e8e1d3]">Clés et intégrations <span className="text-xs text-[#a89b82] font-normal">(Détail)</span></h2>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline">Voir tout</Link>
            </div>
            {/* Tabs */}
            <div className="flex gap-0 mb-5 border-b border-[#d4af37]/20 overflow-x-auto">
              {["Paiements", "SMS / WhatsApp", "Email", "Maps", "Réseaux sociaux", "Autres"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-xs font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${i === 0 ? "border-[#d4af37] text-[#d4af37]" : "border-transparent text-[#a89b82] hover:text-[#e8e1d3]"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Table rows */}
            <div className="flex flex-col gap-3">
              {[
                { name: "Stripe Secret Key", value: "sk_live_···············d9f2" },
                { name: "Stripe Publishable Key", value: "pk_live_···············a8e1" },
                { name: "PayPal Client ID", value: "client_id_···············7x3" },
                { name: "PayPal Secret", value: "secret_···············c9d4" },
              ].map((key, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-2 border-b border-[#d4af37]/10 last:border-0">
                  <span className="text-[13px] text-[#e8e1d3] whitespace-nowrap">{key.name}</span>
                  <span className="text-[12px] text-[#a89b82] font-mono flex-1 text-right truncate">{key.value}</span>
                  <button className="shrink-0 px-3 py-1.5 border border-[#d4af37]/30 rounded-md text-[10px] text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap">
                    Voir / Modifier
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-[#d4af37]/10 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg text-xs text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                Enregistrer les modifications
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COL */}
        <div className="flex flex-col gap-5">

          {/* Rôles et permissions */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#e8e1d3]">Rôles et permissions</h2>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline">Voir tout</Link>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { role: "Super Admin", desc: "Accès complet à toutes les fonctionnalités", icon: "👑" },
                { role: "Administrateur", desc: "Boutique, commandes, clients, contenus", icon: "🛡️" },
                { role: "Gestionnaire de contenu", desc: "Pages, textes, images, menus, footer", icon: "📄" },
                { role: "Gestionnaire boutique", desc: "Produits, stocks, catégories, commandes", icon: "🏪" },
                { role: "Modérateur", desc: "Avis, messages, notifications", icon: "💬" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-[#d4af37]/10 last:border-0 group cursor-pointer hover:bg-[#d4af37]/5 px-2 -mx-2 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 flex items-center justify-center text-sm shrink-0">
                      {r.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-[#e8e1d3] group-hover:text-white transition-colors">{r.role}</span>
                      <span className="text-[10px] text-[#a89b82]">{r.desc}</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#d4af37] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </div>
              ))}
            </div>
          </div>

          {/* Paramètres système */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#e8e1d3]">Paramètres système</h2>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline">Voir tout</Link>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Nom du site", value: "BUSHRA" },
                { label: "Slogan", value: "Thiouraye • Dakar" },
                { label: "Devise", value: "FCFA (XOF)" },
                { label: "Langue par défaut", value: "Français" },
                { label: "Fuseau horaire", value: "Afrique/Dakar" },
                { label: "Thème couleur", value: "Noir & Or" },
                { label: "Favicon", value: "Logo BUSHRA" },
                { label: "Logo", value: "Logo BUSHRA" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#d4af37]/10 last:border-0 text-[12.5px]">
                  <div className="flex items-center gap-2 text-[#a89b82]">
                    <div className="w-3.5 h-3.5 rounded border border-[#d4af37]/30 bg-[#d4af37]/10 shrink-0"></div>
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#e8e1d3] font-medium">{item.value}</span>
                    <button className="text-[#d4af37] hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── ROW 3: BOTTOM GRID ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* Gestion des clés API */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#e8e1d3]">Gestion des clés API</h2>
            <Link href="#" className="text-xs text-[#d4af37] hover:underline">Voir tout</Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: "Stripe (Paiement)", key: "sk_live_···············d9f2", active: true, color: "#635BFF" },
              { name: "PayPal (Paiement)", key: "client_id_···············7x3", active: true, color: "#003087" },
              { name: "WhatsApp Business", key: "waba_···············9a4c", active: true, color: "#25D366" },
              { name: "Google Maps", key: "Aiza5y···············8e7", active: true, color: "#EA4335" },
              { name: "Email SMTP", key: "smtp_···············3f7", active: true, color: "#d4af37" },
              { name: "SendGrid (Emails)", key: "SG_···············9k2", active: true, color: "#1A82E2" },
            ].map((api, i) => (
              <div key={i} className="flex items-center justify-between gap-3 text-[12px]">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ backgroundColor: api.color + "33", border: `1px solid ${api.color}55` }}>
                    <span style={{ color: api.color }}>{api.name[0]}</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[#e8e1d3] font-medium truncate">{api.name}</span>
                    <span className="text-[#a89b82] font-mono text-[10px] truncate">{api.key}</span>
                  </div>
                </div>
                <span className="shrink-0 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] rounded-full">Actif</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-[#d4af37]/10">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#d4af37]/30 rounded-lg text-xs text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.169.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>
              Gérer les clés API
            </button>
          </div>
        </div>

        {/* Maintenance & Sécurité */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
          <h2 className="text-base font-bold text-[#e8e1d3] mb-4">Maintenance & Sécurité</h2>
          <div className="flex flex-col gap-3">
            {/* Mode maintenance toggle */}
            <div className="flex items-center justify-between p-3 border border-[#d4af37]/10 rounded-lg bg-[#14120f]/60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>
                </div>
                <div>
                  <div className="text-[12.5px] font-medium text-[#e8e1d3]">Mode maintenance</div>
                  <div className="text-[10px] text-[#a89b82]">Mettre le site en mode maintenance</div>
                </div>
              </div>
              {/* Toggle switch */}
              <div className="relative w-10 h-5 bg-[#a89b82]/30 border border-[#a89b82]/30 rounded-full cursor-pointer flex items-center px-0.5 shrink-0">
                <div className="w-4 h-4 bg-[#a89b82] rounded-full transition-transform"></div>
              </div>
            </div>
            {/* Cache système */}
            <div className="flex items-center justify-between p-3 border border-[#d4af37]/10 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                </div>
                <div>
                  <div className="text-[12.5px] font-medium text-[#e8e1d3]">Cache système</div>
                  <div className="text-[10px] text-[#a89b82]">Vider le cache de la plateforme</div>
                </div>
              </div>
              <button className="px-3 py-1.5 border border-[#d4af37]/30 rounded-md text-[10px] text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">Vider</button>
            </div>
            {/* Logs système */}
            <div className="flex items-center justify-between p-3 border border-[#d4af37]/10 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                </div>
                <div>
                  <div className="text-[12.5px] font-medium text-[#e8e1d3]">Logs système</div>
                  <div className="text-[10px] text-[#a89b82]">Voir les logs et erreurs</div>
                </div>
              </div>
              <button className="px-3 py-1.5 border border-[#d4af37]/30 rounded-md text-[10px] text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">Voir</button>
            </div>
            {/* Sauvegarde manuelle */}
            <div className="flex items-center justify-between p-3 border border-[#d4af37]/10 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                </div>
                <div>
                  <div className="text-[12.5px] font-medium text-[#e8e1d3]">Sauvegarde manuelle</div>
                  <div className="text-[10px] text-[#a89b82]">Créer une sauvegarde complète</div>
                </div>
              </div>
              <button className="px-3 py-1.5 border border-[#d4af37]/30 rounded-md text-[10px] text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">Sauvegarder</button>
            </div>
          </div>
        </div>

        {/* Paramètres avancés */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5">
          <h2 className="text-base font-bold text-[#e8e1d3] mb-4">Paramètres avancés</h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "Configuration serveur", desc: "PHP, base de données, mémoire...", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /> },
              { label: "Gestion des domaines", desc: "Domaines, SSL, redirections...", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /> },
              { label: "Webhooks", desc: "Notifications et intégrations externes", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 border border-[#d4af37]/10 rounded-lg hover:bg-[#d4af37]/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37]">{item.icon}</svg>
                  </div>
                  <div>
                    <div className="text-[12.5px] font-medium text-[#e8e1d3] group-hover:text-white transition-colors">{item.label}</div>
                    <div className="text-[10px] text-[#a89b82]">{item.desc}</div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#d4af37] shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
              </div>
            ))}
            {/* Quote box */}
            <div className="mt-2 rounded-xl border border-[#d4af37]/20 bg-gradient-to-br from-[#1c160a] to-[#0a0a0a] p-4 text-center">
              <p className="text-[#d4af37] text-sm font-serif italic">« Une gestion complète, une boutique plus puissante. »</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM STATS BAR ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Logo card */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-xs font-bold shrink-0">BM</div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#d4af37] font-serif tracking-widest">BUSHRA</span>
            <span className="text-[8px] text-[#a89b82]">Système de gestion e-commerce</span>
          </div>
        </div>
        {/* Stats */}
        {[
          { label: "Utilisateurs en ligne", value: "12", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /> },
          { label: "Commandes aujourd'hui", value: "58", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /> },
          { label: "Revenus aujourd'hui", value: "2 845 750 FCFA", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
          { label: "Espace disque", value: "34% utilisé", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /> },
          { label: "Admins connectés", value: "3 / 5", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">{stat.icon}</svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-[#a89b82] truncate">{stat.label}</span>
              <span className="text-sm font-bold text-[#e8e1d3] truncate">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

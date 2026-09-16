const stats = [
  { label: "Utilisateurs en ligne", value: "12", path: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { label: "Commandes aujourd'hui", value: "58", path: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" },
  { label: "Revenus aujourd'hui", value: "2 845 750 FCFA", path: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Espace disque", value: "34% utilisé", path: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" },
  { label: "Admins connectés", value: "3 / 5", path: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
];

export function SuperAdminDashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      <div className="flex items-center gap-3 rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-xs font-bold text-[#d4af37]">BM</div><div className="flex flex-col"><span className="font-serif text-[10px] tracking-widest text-[#d4af37]">BUSHRA</span><span className="text-[8px] text-[#a89b82]">Système de gestion e-commerce</span></div></div>
      {stats.map((stat) => <div key={stat.label} className="flex items-center gap-3 rounded-xl border border-[#d4af37]/20 bg-[#14120f] p-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37]"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d={stat.path} /></svg></div><div className="flex min-w-0 flex-col"><span className="truncate text-[10px] text-[#a89b82]">{stat.label}</span><span className="truncate text-sm font-bold text-[#e8e1d3]">{stat.value}</span></div></div>)}
    </div>
  );
}
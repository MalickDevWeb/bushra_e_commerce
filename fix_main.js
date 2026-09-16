const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

const replacement = `      {/* ROW 5: BOTTOM WIDGETS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Répartition des clients */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col">
          <h2 className="text-sm font-bold text-[#e8e1d3] mb-5">Répartition des clients</h2>
          <div className="flex flex-col 2xl:flex-row items-center gap-6 flex-1 justify-center">
            <div className="relative w-28 h-28 shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path className="text-[#0a0a0a] border border-[#d4af37]/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-[#e74c3c]" strokeDasharray="7, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                <path className="text-[#95a5a6]" strokeDasharray="14, 100" strokeDashoffset="-7" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                <path className="text-[#d4af37]" strokeDasharray="79, 100" strokeDashoffset="-21" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-[#e8e1d3]">1 248</span>
                <span className="text-[10px] text-[#a89b82]">Clients</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full 2xl:w-auto">
              <div className="flex items-center justify-between text-xs gap-4">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#d4af37]"></div><span className="text-[#a89b82]">Actifs</span></div>
                <div className="text-right"><span className="font-semibold text-[#e8e1d3]">982</span> <span className="text-[#a89b82] text-[10px]">(79%)</span></div>
              </div>
              <div className="flex items-center justify-between text-xs gap-4">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#95a5a6]"></div><span className="text-[#a89b82]">Inactifs</span></div>
                <div className="text-right"><span className="font-semibold text-[#e8e1d3]">178</span> <span className="text-[#a89b82] text-[10px]">(14%)</span></div>
              </div>
              <div className="flex items-center justify-between text-xs gap-4">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#e74c3c]"></div><span className="text-[#a89b82]">Bloqués</span></div>
                <div className="text-right"><span className="font-semibold text-[#e8e1d3]">88</span> <span className="text-[#a89b82] text-[10px]">(7%)</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Avis clients */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-[#e8e1d3]">Avis clients</h2>
            <Link href="#" className="text-[10px] text-[#d4af37] hover:underline whitespace-nowrap">Voir tous</Link>
          </div>
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-[#e8e1d3]">4.8</span>
              <div className="flex flex-col gap-1">
                <div className="flex text-[#d4af37] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                  ))}
                </div>
                <span className="text-[10px] text-[#a89b82]">Basé sur 256 avis</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { stars: 5, pct: 70 },
                { stars: 4, pct: 20 },
                { stars: 3, pct: 5 },
                { stars: 2, pct: 3 },
                { stars: 1, pct: 2 },
              ].map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3 text-[10px] text-[#a89b82]">
                  <span className="w-12 shrink-0">{rating.stars} étoiles</span>
                  <div className="flex-1 h-1.5 bg-[#0a0a0a] border border-[#d4af37]/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#d4af37]" style={{ width: \`\${rating.pct}%\` }}></div>
                  </div>
                  <span className="w-8 text-right font-medium">{rating.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Catégories les plus populaires */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-bold text-[#e8e1d3] truncate pr-2">Top catégories</h2>
            <Link href="#" className="text-[10px] text-[#d4af37] hover:underline whitespace-nowrap">Voir tout</Link>
          </div>
          <div className="flex flex-col gap-3.5">
            {[
              { name: "Horlogerie", pct: 35, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { name: "Maroquinerie", pct: 25, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
              { name: "Joaillerie", pct: 20, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
              { name: "Art & Collection", pct: 20, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
            ].map((category) => (
              <div key={category.name} className="flex items-center justify-between text-xs gap-3">
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center shrink-0">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3.5 h-3.5">{category.icon}</svg>
                  </div>
                  <span className="text-[#a89b82] truncate text-[11px]">{category.name}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[#e8e1d3] font-semibold w-8 text-right">{category.pct}%</span>
                  <div className="w-16 h-1.5 bg-[#0a0a0a] border border-[#d4af37]/20 rounded-full overflow-hidden shrink-0 hidden sm:block xl:hidden 2xl:block">
                    <div className="h-full bg-[#d4af37]" style={{ width: \`\${category.pct}%\` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>`;

// Find where ROW 5 starts in AdminDashboardMain.tsx
const startIndex = code.indexOf('{/* ROW 5: BOTTOM WIDGETS */}');
if (startIndex !== -1) {
  // Find where ROW 5 ends (just before </AdminPageShell>)
  const endIndex = code.lastIndexOf('</AdminPageShell>');
  
  if (endIndex !== -1) {
    const newCode = code.substring(0, startIndex) + replacement + '\n    ' + code.substring(endIndex);
    fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', newCode);
  }
}

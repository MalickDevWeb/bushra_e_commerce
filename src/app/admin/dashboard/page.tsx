"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-6 w-full text-[#e8e1d3] max-w-[1600px] mx-auto pb-10">
      
      {/* LEFT MAIN COLUMN */}
      <div className="flex-1 flex flex-col gap-6 overflow-hidden">
        
        {/* ROW 1: KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
          
          {/* Card 1 */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-3 flex flex-col justify-between h-[100px] overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex flex-col items-end min-w-0 flex-1">
                <span className="text-[11px] text-[#a89b82] whitespace-nowrap truncate w-full text-right">Chiffre d'affaires</span>
                <span className="text-[17px] font-bold mt-0.5 whitespace-nowrap truncate w-full text-right">2 845 750 FCFA</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-auto pt-1">
              <span className="text-[#2ecc71] text-[10.5px] font-semibold flex items-center gap-0.5 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
                +12%
              </span>
              <span className="text-[9.5px] text-[#a89b82] truncate text-right">par rapport à la sem. dernière</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-3 flex flex-col justify-between h-[100px] overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
              </div>
              <div className="flex flex-col items-end min-w-0 flex-1">
                <span className="text-[11px] text-[#a89b82] whitespace-nowrap truncate w-full text-right">Commandes du jour</span>
                <span className="text-[17px] font-bold mt-0.5 whitespace-nowrap truncate w-full text-right">38</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-auto pt-1">
              <span className="text-[#2ecc71] text-[10.5px] font-semibold flex items-center gap-0.5 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
                +18%
              </span>
              <span className="text-[9.5px] text-[#a89b82] truncate text-right">par rapport à hier</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-3 flex flex-col justify-between h-[100px] overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
              </div>
              <div className="flex flex-col items-end min-w-0 flex-1">
                <span className="text-[11px] text-[#a89b82] whitespace-nowrap truncate w-full text-right">Total des commandes</span>
                <span className="text-[17px] font-bold mt-0.5 whitespace-nowrap truncate w-full text-right">245</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-auto pt-1">
              <span className="text-[#2ecc71] text-[10.5px] font-semibold flex items-center gap-0.5 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
                +11%
              </span>
              <span className="text-[9.5px] text-[#a89b82] truncate text-right">cette semaine</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-3 flex flex-col justify-between h-[100px] overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
              </div>
              <div className="flex flex-col items-end min-w-0 flex-1">
                <span className="text-[11px] text-[#a89b82] whitespace-nowrap truncate w-full text-right">Produits actifs</span>
                <span className="text-[17px] font-bold mt-0.5 whitespace-nowrap truncate w-full text-right">142</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-auto pt-1">
              <span className="text-[#2ecc71] text-[10.5px] font-semibold flex items-center gap-0.5 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
                +5%
              </span>
              <span className="text-[9.5px] text-[#a89b82] truncate text-right">sur 160 au total</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-3 flex flex-col justify-between h-[100px] overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div className="flex flex-col items-end min-w-0 flex-1">
                <span className="text-[11px] text-[#a89b82] whitespace-nowrap truncate w-full text-right">Produits en rupture</span>
                <span className="text-[17px] font-bold mt-0.5 whitespace-nowrap truncate w-full text-right">8</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-auto pt-1">
              <span className="text-[#e74c3c] text-[10.5px] font-semibold flex items-center gap-0.5 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
                -3%
              </span>
              <span className="text-[9.5px] text-[#a89b82] truncate text-right">sur 160 au total</span>
            </div>
          </div>

        </div>

        {/* ROW 2: QUICK ACTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          <Link href="#" className="bg-[#14120f] border border-[#d4af37]/20 rounded-lg p-3 flex items-center justify-between hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#d4af37] flex items-center justify-center text-[#14120f] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              </div>
              <span className="text-xs text-[#e8e1d3] font-medium">Ajouter un produit</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </Link>
          <Link href="#" className="bg-[#14120f] border border-[#d4af37]/20 rounded-lg p-3 flex items-center justify-between hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#d4af37] flex items-center justify-center text-[#14120f] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
              </div>
              <span className="text-xs text-[#e8e1d3] font-medium">Ajouter une catégorie</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </Link>
          <Link href="#" className="bg-[#14120f] border border-[#d4af37]/20 rounded-lg p-3 flex items-center justify-between hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#d4af37] flex items-center justify-center text-[#14120f] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
              </div>
              <span className="text-xs text-[#e8e1d3] font-medium">Voir les commandes</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </Link>
          <Link href="#" className="bg-[#14120f] border border-[#d4af37]/20 rounded-lg p-3 flex items-center justify-between hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#d4af37] flex items-center justify-center text-[#14120f] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              </div>
              <span className="text-xs text-[#e8e1d3] font-medium leading-tight">Gérer le contenu du site</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </Link>
          <Link href="#" className="bg-[#14120f] border border-[#d4af37]/20 rounded-lg p-3 flex items-center justify-between hover:bg-[#d4af37]/5 transition-colors group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#d4af37] flex items-center justify-center text-[#14120f] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /></svg>
              </div>
              <span className="text-xs text-[#e8e1d3] font-medium">Paramètres</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </Link>

          {/* Entrer dans la boutique */}
          <Link
            href="/boutique"
            target="_blank"
            className="bg-[#14120f] border border-[#d4af37]/40 rounded-lg p-3 flex items-center justify-between hover:bg-[#d4af37]/10 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <span className="text-xs text-[#d4af37] font-medium group-hover:text-white transition-colors">Entrer dans la boutique</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          </Link>
        </div>


        {/* ROW 3: CHARTS & TOP PRODUCTS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 xl:col-span-2 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#e8e1d3]">Évolution des ventes</h2>
              <div className="flex items-center gap-2 border border-[#d4af37]/20 rounded-md px-3 py-1.5 text-xs text-[#a89b82] cursor-pointer hover:bg-[#d4af37]/5 transition-colors">
                <span>7 derniers jours</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </div>
            </div>
            
            {/* Mock Line Chart */}
            <div className="flex-1 min-h-[220px] relative w-full">
              {/* Y Axis labels */}
              <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-[#a89b82] z-10">
                <span>2 000 000</span>
                <span>1 500 000</span>
                <span>1 000 000</span>
                <span>500 000</span>
                <span>0</span>
              </div>
              
              {/* Grid Lines */}
              <div className="absolute left-[50px] right-0 top-1.5 bottom-[22px] flex flex-col justify-between z-0">
                <div className="w-full h-px bg-[#d4af37]/5"></div>
                <div className="w-full h-px bg-[#d4af37]/5"></div>
                <div className="w-full h-px bg-[#d4af37]/5"></div>
                <div className="w-full h-px bg-[#d4af37]/5"></div>
                <div className="w-full h-px bg-[#d4af37]/5"></div>
              </div>

              {/* SVG Line and Area */}
              <div className="absolute left-[50px] right-0 top-1.5 bottom-[22px] z-10">
                <svg preserveAspectRatio="none" className="w-full h-full" viewBox="0 0 800 200">
                  <defs>
                    <linearGradient id="gradientLine" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(212,175,55,0.3)" />
                      <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                    </linearGradient>
                  </defs>
                  {/* Area */}
                  <path d="M0,170 C100,120 150,140 250,120 C350,100 450,140 550,80 C650,20 750,90 800,20 L800,200 L0,200 Z" fill="url(#gradientLine)" />
                  {/* Line */}
                  <path d="M0,170 C100,120 150,140 250,120 C350,100 450,140 550,80 C650,20 750,90 800,20" fill="none" stroke="#d4af37" strokeWidth="2" />
                  
                  {/* Points */}
                  <circle cx="0" cy="170" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="100" cy="120" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="150" cy="140" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="250" cy="120" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="350" cy="100" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="450" cy="140" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="550" cy="80" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="650" cy="20" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="750" cy="90" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="800" cy="20" r="3" fill="#0a0a0a" stroke="#d4af37" strokeWidth="2" />
                </svg>
              </div>

              {/* X Axis labels */}
              <div className="absolute left-[50px] right-0 bottom-0 flex justify-between text-[10px] text-[#a89b82] z-10">
                <span>12 Août</span>
                <span>14 Août</span>
                <span>16 Août</span>
                <span>18 Août</span>
                <span>20 Août</span>
                <span>22 Août</span>
                <span>24 Août</span>
                <span>26 Août</span>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6 xl:col-span-1 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-[#e8e1d3]">Produits les plus vendus</h2>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline shrink-0">Voir tout</Link>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {[
                { name: "Encens Royal Oud", sales: "45 ventes", price: "450 000 FCFA" },
                { name: "Coffret Prestige", sales: "32 ventes", price: "320 000 FCFA" },
                { name: "Parfum Musk Al Falah", sales: "28 ventes", price: "280 000 FCFA" },
                { name: "Brûleur Traditionnel", sales: "22 ventes", price: "220 000 FCFA" },
                { name: "Collection Éclat", sales: "20 ventes", price: "200 000 FCFA" },
              ].map((product, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded border border-[#d4af37]/30 flex items-center justify-center text-[10px] text-[#d4af37] shrink-0 font-medium">{i + 1}</span>
                  <div className="w-9 h-9 rounded-md bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/20 shrink-0 text-[#d4af37]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" /></svg>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[13px] font-semibold text-[#e8e1d3] truncate">{product.name}</span>
                    <span className="text-[11px] text-[#a89b82]">{product.sales}</span>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-[12px] font-bold text-[#d4af37] whitespace-nowrap">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ROW 4: TABLES */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Latest Orders */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#e8e1d3]">Dernières commandes</h2>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline shrink-0">Voir tout</Link>
            </div>
            {/* Header */}
            <div className="grid grid-cols-[80px_1fr_110px_100px] gap-2 pb-2 border-b border-[#d4af37]/20 text-[10px] text-[#a89b82] uppercase tracking-wider">
              <span>N° cmd</span>
              <span>Client</span>
              <span>Montant</span>
              <span>Statut</span>
            </div>
            <div className="flex flex-col divide-y divide-[#d4af37]/10">
              {[
                { id: "#1024", client: "Ahmed Fall", amount: "28 500 FCFA", status: "En préparation", sColor: "bg-[#d4af37]/15 text-[#d4af37] border-[#d4af37]/30" },
                { id: "#1023", client: "Awa Sarr", amount: "45 000 FCFA", status: "Confirmée", sColor: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30" },
                { id: "#1022", client: "Cheikh Diop", amount: "32 000 FCFA", status: "Expédiée", sColor: "bg-[#3498db]/15 text-[#3498db] border-[#3498db]/30" },
                { id: "#1021", client: "Fatou Ndiaye", amount: "18 900 FCFA", status: "Livrée", sColor: "bg-[#2ecc71]/15 text-[#2ecc71] border-[#2ecc71]/30" },
                { id: "#1020", client: "Moustapha Ba", amount: "52 000 FCFA", status: "En attente", sColor: "bg-[#95a5a6]/15 text-[#95a5a6] border-[#95a5a6]/30" },
              ].map((order, i) => (
                <div key={i} className="grid grid-cols-[80px_1fr_110px_100px] gap-2 py-3 hover:bg-[#d4af37]/5 transition-colors items-center text-[12.5px]">
                  <span className="font-semibold text-[#d4af37]">{order.id}</span>
                  <span className="text-[#e8e1d3] truncate">{order.client}</span>
                  <span className="text-[#e8e1d3] font-medium whitespace-nowrap">{order.amount}</span>
                  <span className={`px-2 py-0.5 text-[9px] rounded-full border w-fit ${order.sColor}`}>{order.status}</span>
                </div>
              ))}
            </div>
          </div>


          {/* Messages */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#e8e1d3]">Messages reçus</h2>
              <Link href="#" className="text-xs text-[#d4af37] hover:underline shrink-0">Voir tout</Link>
            </div>
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_90px] gap-3 pb-2 border-b border-[#d4af37]/20 text-[10px] text-[#a89b82] uppercase tracking-wider">
              <span>Expéditeur</span>
              <span>Sujet</span>
              <span>Date</span>
            </div>
            <div className="flex flex-col divide-y divide-[#d4af37]/10">
              {[
                { sender: "Awa Sarr", iconColor: "text-[#d4af37]", subject: "Renseignement produit", date: "18/09", time: "09:12" },
                { sender: "Mamadou Diop", iconColor: "text-[#2ecc71]", subject: "Livraison commande", date: "18/09", time: "08:45" },
                { sender: "Fatou Ndiaye", iconColor: "text-[#d4af37]", subject: "Problème de commande", date: "17/09", time: "16:30" },
                { sender: "Ibrahima Diallo", iconColor: "text-[#d4af37]", subject: "Question parfums", date: "17/09", time: "14:22" },
                { sender: "Oumou Sow", iconColor: "text-[#d4af37]", subject: "Demande d'infos", date: "16/09", time: "11:18" },
              ].map((msg, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_90px] gap-3 py-3 hover:bg-[#d4af37]/5 transition-colors items-center text-[12.5px]">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-[#0a0a0a] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-3 h-3 ${msg.iconColor}`}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    </div>
                    <span className="text-[#e8e1d3] truncate">{msg.sender}</span>
                  </div>
                  <span className="text-[#a89b82] truncate">{msg.subject}</span>
                  <div className="flex flex-col text-[#a89b82]">
                    <span className="text-[11px]">{msg.date}</span>
                    <span className="text-[10px] opacity-70">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 5: BOTTOM WIDGETS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Répartition des clients */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col">
            <h2 className="text-sm font-bold text-[#e8e1d3] mb-5">Répartition des clients</h2>
            <div className="flex items-center gap-5 flex-1">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path className="text-[#14120f] border border-[#d4af37]/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  {/* Bloqués 7% */}
                  <path className="text-[#e74c3c]" strokeDasharray="7, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                  {/* Inactifs 14% */}
                  <path className="text-[#95a5a6]" strokeDasharray="14, 100" strokeDashoffset="-7" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                  {/* Actifs 79% */}
                  <path className="text-[#d4af37]" strokeDasharray="79, 100" strokeDashoffset="-21" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">1 248</span>
                  <span className="text-[9px] text-[#a89b82]">Clients</span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 flex-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#d4af37]"></div><span className="text-[#a89b82]">Actifs</span></div>
                  <div><span className="font-semibold">982</span> <span className="text-[#a89b82] text-[10px]">(79%)</span></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#95a5a6]"></div><span className="text-[#a89b82]">Inactifs</span></div>
                  <div><span className="font-semibold">178</span> <span className="text-[#a89b82] text-[10px]">(14%)</span></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#e74c3c]"></div><span className="text-[#a89b82]">Bloqués</span></div>
                  <div><span className="font-semibold">88</span> <span className="text-[#a89b82] text-[10px]">(7%)</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Avis clients */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#e8e1d3]">Avis clients</h2>
              <Link href="#" className="text-[10px] text-[#d4af37] hover:underline">Voir tous</Link>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-4xl font-bold">4.8</span>
                <div className="flex text-[#d4af37] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                  ))}
                </div>
                <span className="text-[10px] text-[#a89b82] mt-1">256 avis</span>
              </div>
              <div className="flex flex-col flex-1 gap-1.5 justify-center">
                {[
                  { stars: 5, pct: 78 },
                  { stars: 4, pct: 15 },
                  { stars: 3, pct: 5 },
                  { stars: 2, pct: 1 },
                  { stars: 1, pct: 1 },
                ].map(r => (
                  <div key={r.stars} className="flex items-center gap-2 text-[9px] text-[#a89b82]">
                    <span className="w-8 shrink-0">{r.stars} étoiles</span>
                    <div className="flex-1 h-1.5 bg-[#14120f] border border-[#d4af37]/20 rounded-full overflow-hidden">
                      <div className="h-full bg-[#d4af37]" style={{ width: `${r.pct}%` }}></div>
                    </div>
                    <span className="w-5 text-right">{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Catégories les plus populaires */}
          <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#e8e1d3]">Catégories les plus populaires</h2>
              <Link href="#" className="text-[10px] text-[#d4af37] hover:underline">Voir tout</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Parfums", pct: 34, icon: <circle cx="12" cy="12" r="5" strokeWidth="1.5" /> },
                { name: "Encens", pct: 22, icon: <rect x="8" y="8" width="8" height="8" strokeWidth="1.5" /> },
                { name: "Accessoires", pct: 18, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" strokeWidth="1.5" /> },
                { name: "Coffrets", pct: 14, icon: <circle cx="12" cy="12" r="7" strokeWidth="1.5" /> },
                { name: "Nouveautés", pct: 12, icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 6 6 .5-4.5 4 1.5 6-6-3.5L6 18.5l1.5-6L3 8.5l6-.5z" strokeWidth="1.5" /> },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-between text-xs gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-4 h-4 rounded-full border border-[#d4af37] text-[#d4af37] flex items-center justify-center shrink-0">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-2.5 h-2.5">{c.icon}</svg>
                    </div>
                    <span className="text-[#a89b82] truncate">{c.name}</span>
                  </div>
                  <span className="text-[#e8e1d3] font-medium w-6 text-right">{c.pct}%</span>
                  <div className="w-20 h-1.5 bg-[#14120f] border border-[#d4af37]/20 rounded-full overflow-hidden shrink-0">
                    <div className="h-full bg-[#d4af37]" style={{ width: `${c.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR COLUMN */}
      <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
        
        {/* Notifications */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#d4af37]"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
              <h2 className="text-sm font-bold text-[#e8e1d3]">Notifications</h2>
              <span className="bg-[#d4af37]/20 text-[#d4af37] text-[9px] px-1.5 py-0.5 rounded-full ml-1">5 non lues</span>
            </div>
            <Link href="#" className="text-[10px] text-[#d4af37] hover:underline">Voir tout</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { title: "Nouvelle commande #1024", text: "Une nouvelle commande a été passée.", time: "10:24", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /> },
              { title: "Nouveau client inscrit", text: "Mamadou Diop s'est inscrit sur le site.", time: "09:45", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> },
              { title: "Avis client", text: "Awa S. a laissé un avis de 5 étoiles.", time: "09:22", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /> },
              { title: "Message de contact", text: "Demande de renseignement reçue.", time: "08:17", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> },
              { title: "Promotion programmée", text: "La promo -20% sera lancée demain.", time: "07:50", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /> },
            ].map((n, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 rounded-full border border-[#d4af37]/30 bg-[#14120f] flex items-center justify-center shrink-0 text-[#d4af37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">{n.icon}</svg>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#e8e1d3]">{n.title}</span>
                    <span className="text-[9px] text-[#a89b82]">{n.time}</span>
                  </div>
                  <span className="text-[10px] text-[#a89b82] mt-0.5 line-clamp-1">{n.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activité récente */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-bold text-[#e8e1d3]">Activité récente</h2>
            <Link href="#" className="text-[10px] text-[#d4af37] hover:underline">Voir tout</Link>
          </div>
          
          <div className="flex flex-col gap-4 relative">
            {/* Vertical Line */}
            <div className="absolute left-[13px] top-4 bottom-4 w-px bg-[#d4af37]/10 z-0"></div>

            {[
              { title: "Produit ajouté", text: "Parfum Musk Al Falah", time: "Il y a 1h", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /> },
              { title: "Commande confirmée", text: "#1023 - 45 000 FCFA", time: "Il y a 2h", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: "Client inscrit", text: "Fatou Ndiaye", time: "Il y a 3h", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> },
              { title: "Avis publié", text: "5 étoiles - Très satisfait", time: "Il y a 4h", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /> },
              { title: "Catégorie modifiée", text: "Parfums", time: "Il y a 5h", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /> },
            ].map((a, i) => (
              <div key={i} className="flex gap-3 z-10">
                <div className="w-7 h-7 rounded-full border border-[#d4af37]/30 bg-[#14120f] flex items-center justify-center shrink-0 text-[#d4af37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">{a.icon}</svg>
                </div>
                <div className="flex flex-col flex-1 pb-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#e8e1d3]">{a.title}</span>
                    <span className="text-[9px] text-[#a89b82]">{a.time}</span>
                  </div>
                  <span className="text-[10px] text-[#a89b82] mt-0.5">{a.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="rounded-xl overflow-hidden relative border border-[#d4af37]/20 flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-br from-[#1c160a] to-[#0a0a0a]">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37] via-transparent to-transparent mix-blend-screen"></div>
          <div className="flex items-center gap-3 z-10 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37] text-[14px] font-bold text-[#d4af37] shrink-0">
              BM
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-[#d4af37] tracking-[0.2em] text-[18px] leading-none mb-1 font-serif">BUSHRA</span>
              <span className="font-sans text-[6px] text-[#d4af37] uppercase tracking-[0.3em] font-medium opacity-80">Thiouraye - Dakar</span>
            </div>
          </div>
          <p className="text-[#d4af37] text-xs font-serif italic mb-6 z-10">&quot;L&apos;élégance au service de vos sens&quot;</p>
          <button className="z-10 bg-transparent border border-[#d4af37] text-[#d4af37] rounded-full px-5 py-2 text-[10px] font-semibold tracking-wide hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors flex items-center gap-2 uppercase">
            Gérer le contenu du site
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </button>
        </div>

      </div>

    </div>
  );
}

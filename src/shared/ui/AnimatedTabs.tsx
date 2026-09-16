"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type TabItem = {
  id: string;
  label: string;
  href?: string;
};

interface AnimatedTabsProps {
  tabs: TabItem[];
  activeId?: string;
  onTabChange?: (id: string) => void;
  className?: string;
}

export function AnimatedTabs({ tabs, activeId, onTabChange, className = "" }: AnimatedTabsProps) {
  // If no activeId is provided, fallback to the first tab (useful for uncontrolled usage)
  const [currentId, setCurrentId] = useState(activeId || tabs[0]?.id);

  // Sync with prop if it changes
  useEffect(() => {
    if (activeId !== undefined) {
      setCurrentId(activeId);
    }
  }, [activeId]);

  const handleSelect = (id: string) => {
    if (onTabChange) {
      onTabChange(id);
    } else {
      setCurrentId(id);
    }
  };

  return (
    <div className={`flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide pt-2 ${className}`}>
      {tabs.map((tab, idx) => {
        const isActive = currentId === tab.id;

        return (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1, type: "spring" }}
            className="relative"
          >
            {tab.href ? (
              <Link 
                href={tab.href}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center justify-center z-10 ${
                  isActive ? "text-[#0a0a0a]" : "text-[#e8e1d3] border border-[#d4af37]/30 hover:border-[#d4af37]/70 bg-[#0c0a07]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-[#e8c547] rounded-full z-[-1] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </Link>
            ) : (
              <button 
                onClick={() => handleSelect(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center justify-center z-10 ${
                  isActive ? "text-[#0a0a0a]" : "text-[#e8e1d3] border border-[#d4af37]/30 hover:border-[#d4af37]/70 bg-[#0c0a07]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-[#e8c547] rounded-full z-[-1] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

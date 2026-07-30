"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

// Lotus SVG divider
export function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8 opacity-60 pointer-events-none select-none">
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary/30" />
      <svg className="w-8 h-8 text-primary/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M50 20 C53 38, 62 48, 50 82 C38 48, 47 38, 50 20 Z" fill="currentColor" fillOpacity="0.08"/>
        <path d="M50 42 C32 32, 22 47, 34 65 C44 58, 48 52, 50 42 Z" fill="currentColor" fillOpacity="0.06"/>
        <path d="M50 55 C18 45, 12 63, 24 75 C36 71, 46 63, 50 55 Z" fill="currentColor" fillOpacity="0.04"/>
        <path d="M50 42 C68 32, 78 47, 66 65 C56 58, 52 52, 50 42 Z" fill="currentColor" fillOpacity="0.06"/>
        <path d="M50 55 C82 45, 88 63, 76 75 C64 71, 54 63, 50 55 Z" fill="currentColor" fillOpacity="0.04"/>
        <path d="M32 80 C40 85, 60 85, 68 80 C63 76, 37 76, 32 80 Z" fill="currentColor" fillOpacity="0.15"/>
      </svg>
      <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
}

export function CategoriesSection() {
  const { t } = useApp();

  const categories = [
    { key: "beach", icon: "waves", color: "skyBlue", bg: "sky-50", hover: "bg-sky-500", label: t("cat.beach"), count: "156" },
    { key: "mountain", icon: "mountain", color: "primary", bg: "emerald-50", hover: "bg-primary", label: t("cat.mountain"), count: "89" },
    { key: "heritage", icon: "landmark", color: "amber-500", bg: "amber-50", hover: "bg-amber-500", label: t("cat.heritage"), count: "124" },
    { key: "cuisine", icon: "utensils-crossed", color: "rose-500", bg: "rose-50", hover: "bg-rose-500", label: t("cat.cuisine"), count: "78" },
  ];

  const icons: Record<string, React.ReactElement> = {
    waves: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16.5c.5-1 1.5-1 2 0s1.5 1 2 0 1.5-1 2 0 1.5 1 2 0M7 12.5c.5-1 1.5-1 2 0s1.5 1 2 0 1.5-1 2 0 1.5 1 2 0M7 8.5c.5-1 1.5-1 2 0s1.5 1 2 0 1.5-1 2 0 1.5 1 2 0"/></svg>,
    mountain: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4-8 4 8M2 17h20"/></svg>,
    landmark: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 21V9m6 12V9M3 9l9-7 9 7M3 9h18"/></svg>,
    "utensils-crossed": <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 3v12m0 0l-2-2m2 2l2-2M6 17v4m5-10V3m0 0l3 3-3 3"/></svg>,
  };

  const bgClasses: Record<string, string> = {
    "sky-50": "bg-sky-50",
    "emerald-50": "bg-emerald-50",
    "amber-50": "bg-amber-50",
    "rose-50": "bg-rose-50",
  };

  const colorClasses: Record<string, string> = {
    skyBlue: "text-sky-500",
    primary: "text-primary",
    "amber-500": "text-amber-500",
    "rose-500": "text-rose-500",
  };
  const hoverClasses: Record<string, string> = {
    "bg-sky-500": "group-hover:bg-sky-500",
    "bg-primary": "group-hover:bg-primary",
    "bg-amber-500": "group-hover:bg-amber-500",
    "bg-rose-500": "group-hover:bg-rose-500",
  };

  return (
    <section className="py-28 bg-bg relative overflow-hidden">
      {/* Leaf watermarks */}
      <div className="absolute right-0 top-0 pointer-events-none opacity-[0.03] text-primary z-0 transform translate-x-1/4 -translate-y-1/4 select-none">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="currentColor">
          <path d="M80,10 C70,25 60,30 50,45 C40,30 30,25 20,10 C25,30 35,45 50,55 C65,45 75,30 80,10 Z M50,55 C48,70 42,85 35,100 C48,90 55,75 50,55 Z"/>
        </svg>
      </div>
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-[0.03] text-primary z-0 transform -translate-x-1/4 translate-y-1/4 select-none rotate-180">
        <svg width="280" height="280" viewBox="0 0 100 100" fill="currentColor">
          <path d="M80,10 C70,25 60,30 50,45 C40,30 30,25 20,10 C25,30 35,45 50,55 C65,45 75,30 80,10 Z M50,55 C48,70 42,85 35,100 C48,90 55,75 50,55 Z"/>
        </svg>
      </div>

      <div className="container-main text-center relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 mb-16">
          <span className="px-5 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-wider font-heading">
            {t("categories.eyebrow")}
          </span>
          <h2 className="font-heading text-3xl md:text-[42px] font-extrabold text-text leading-tight">
            {t("categories.title")}
          </h2>
          <div className="w-16 h-[3px] bg-primary rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.key}
              className={`group p-8 rounded-[32px] bg-white border border-[#E5E7EB] shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-500 text-center cursor-pointer card-shimmer`}
            >
              <div className={`w-16 h-16 rounded-[24px] ${bgClasses[cat.bg]} ${colorClasses[cat.color]} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500 ${hoverClasses[cat.hover]}`}>
                {icons[cat.icon]}
              </div>
              <h3 className="font-heading font-extrabold text-base text-text mb-1">{cat.label}</h3>
              <span className="text-xs font-medium text-text-secondary">{cat.count} tours</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useApp } from "@/context/AppContext";

export function HeroSection() {
  const { t, lang, openBookingModal } = useApp();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/vietnam-hero.png"
          alt="Vietnam Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70 z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 z-[1] bg-gradient-to-t from-[#F8FCF9] via-[#F8FCF9]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 text-center md:text-left flex flex-col gap-8 w-full">
        <div className="max-w-3xl flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 self-center md:self-start px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-heading">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>{t("hero.eyebrow")}</span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold text-white leading-[1.08] tracking-tight">
            {lang === "vi" ? (
              <>Hành Trình Khám Phá<br /><span className="text-accent">Vẻ Đẹp Việt Nam</span></>
            ) : (
              <>Explore The Beauty<br /><span className="text-accent">Of Vietnam</span></>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="#tours" className="px-8 py-3.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark hover:shadow-lg transition-all">
              {t("hero.cta.explore")}
            </a>
            <a href="#destinations" className="px-8 py-3.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border-2 border-white/25 hover:bg-white hover:text-text transition-all">
              {t("hero.cta.tours")}
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="flex items-center justify-center md:justify-start gap-8 pt-6 border-t border-white/15 max-w-md mx-auto md:mx-0">
            <div className="flex flex-col min-w-0">
              <span className="text-2xl font-bold font-heading text-accent">1000+</span>
              <span className="text-[10px] uppercase font-bold text-white/60">{t("hero.badge.tours")}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-2xl font-bold font-heading text-accent">4.9★</span>
              <span className="text-[10px] uppercase font-bold text-white/60">{t("hero.badge.rating")}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-2xl font-bold font-heading text-accent">24/7</span>
              <span className="text-[10px] uppercase font-bold text-white/60">{lang === "vi" ? "Hỗ trợ nhanh" : "Fast Support"}</span>
            </div>
          </div>
        </div>

        {/* Search Capsule */}
        <div className="w-full max-w-5xl mx-auto relative z-20">
          <div className="glass-strong rounded-[32px] p-3 md:p-4 shadow-hover border border-white/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#F8FCF9]/50 border border-[#E5E7EB] text-left">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-bold text-text-light uppercase tracking-wider">{t("search.destination")}</span>
                  <input type="text" placeholder={t("search.destination.placeholder")} className="text-xs text-text bg-transparent outline-none placeholder:text-text-light font-semibold w-full" />
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#F8FCF9]/50 border border-[#E5E7EB] cursor-pointer">
                <div className="flex items-center gap-3 text-left">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-text-light uppercase tracking-wider">{t("search.tourType")}</span>
                    <span className="text-xs text-text-secondary font-semibold truncate">{t("search.tourType.placeholder")}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#F8FCF9]/50 border border-[#E5E7EB] cursor-pointer text-left">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-bold text-text-light uppercase tracking-wider">{t("search.date")}</span>
                  <span className="text-xs text-text-secondary font-semibold truncate">{t("search.date.placeholder")}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#F8FCF9]/50 border border-[#E5E7EB] cursor-pointer text-left">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-bold text-text-light uppercase tracking-wider">{t("search.guests")}</span>
                  <span className="text-xs text-text-secondary font-semibold truncate">{t("search.guests.placeholder")}</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-[#F8FCF9]/50 border border-[#E5E7EB] cursor-pointer">
                <div className="flex items-center gap-3 text-left">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] font-bold text-text-light uppercase tracking-wider">{t("search.budget")}</span>
                    <span className="text-xs text-text-secondary font-semibold whitespace-nowrap">{t("search.budget.placeholder")}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => openBookingModal(t("hero.cta.explore"), 4500000)}
                className="w-full py-3.5 rounded-2xl bg-primary text-white font-heading font-bold text-xs uppercase tracking-widest hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span>{t("search.button")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

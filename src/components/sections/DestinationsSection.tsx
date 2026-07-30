"use client";

import { useApp } from "@/context/AppContext";

export function DestinationsSection() {
  const { t, lang, openBookingModal } = useApp();

  return (
    <section id="destinations" className="py-28 bg-bg-alt relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 z-0 opacity-30 dot-grid pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="px-5 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-wider self-start font-heading">
              {t("destinations.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl md:text-[42px] font-extrabold text-text leading-tight">
              {t("destinations.title")}
            </h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-3.5 transition-all shrink-0">
            <span>{t("ui.viewAll")}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ha Long - Large */}
          <div onClick={() => openBookingModal(lang === "vi" ? "Du thuyền Vịnh Hạ Long" : "Ha Long Bay Cruise", 5990000)}
            className="group relative md:col-span-2 h-[300px] md:h-[500px] rounded-[32px] overflow-hidden cursor-pointer shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-700">
            <img src="/images/halong.png" alt="Ha Long" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-bold shadow-md">
              {lang === "vi" ? "Miền Bắc" : "Northern"}
            </div>
            <div className="absolute top-6 right-6 flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-amber-400 font-bold text-xs shadow-md">
              ★ 4.9
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-2 flex flex-col gap-2">
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">{lang === "vi" ? "Vịnh Hạ Long" : "Ha Long Bay"}</h3>
              <p className="text-white/70 text-sm max-w-xl line-clamp-2">{t("dest.halong.desc")}</p>
              <span className="text-accent font-bold text-xs mt-2 flex items-center gap-1">45 tours • {lang === "vi" ? "Khám phá ngay" : "Explore now"} →</span>
            </div>
          </div>

          {/* Sapa */}
          <div onClick={() => openBookingModal(lang === "vi" ? "Tour Trekking Sa Pa" : "Sapa Trekking Tour", 4590000)}
            className="group relative h-[300px] md:h-[500px] rounded-[32px] overflow-hidden cursor-pointer shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-700">
            <img src="/images/sapa.png" alt="Sapa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-bold shadow-md">
              {lang === "vi" ? "Miền Bắc" : "Northern"}
            </div>
            <div className="absolute top-6 right-6 flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-amber-400 font-bold text-xs shadow-md">
              ★ 4.8
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-2 flex flex-col gap-2">
              <h3 className="font-heading text-xl md:text-2xl font-extrabold text-white">{lang === "vi" ? "Sa Pa" : "Sapa"}</h3>
              <p className="text-white/70 text-xs line-clamp-2">{t("dest.sapa.desc")}</p>
              <span className="text-accent font-bold text-xs mt-1 flex items-center gap-1">32 tours • {lang === "vi" ? "Khám phá ngay" : "Explore now"} →</span>
            </div>
          </div>

          {/* Hoi An */}
          <div onClick={() => openBookingModal(lang === "vi" ? "Hành trình Di sản Hội An" : "Hoi An Heritage Tour", 3500000)}
            className="group relative h-[240px] md:h-[360px] rounded-[32px] overflow-hidden cursor-pointer shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-700">
            <img src="/images/hoian.png" alt="Hoi An" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-xs font-bold shadow-md">
              {lang === "vi" ? "Miền Trung" : "Central"}
            </div>
            <div className="absolute bottom-6 left-6 p-2 flex flex-col gap-1">
              <h3 className="font-heading text-xl font-extrabold text-white">{lang === "vi" ? "Hội An" : "Hoi An"}</h3>
              <span className="text-amber-400 font-bold text-xs">38 tours • 4.8★</span>
            </div>
          </div>

          {/* Da Nang */}
          <div onClick={() => openBookingModal(lang === "vi" ? "Du ngoạn biển Đà Nẵng" : "Da Nang Beach Tour", 3200000)}
            className="group relative h-[240px] md:h-[360px] rounded-[32px] overflow-hidden cursor-pointer shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-700">
            <img src="/images/danang.png" alt="Da Nang" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-xs font-bold shadow-md">
              {lang === "vi" ? "Miền Trung" : "Central"}
            </div>
            <div className="absolute bottom-6 left-6 p-2 flex flex-col gap-1">
              <h3 className="font-heading text-xl font-extrabold text-white">{lang === "vi" ? "Đà Nẵng" : "Da Nang"}</h3>
              <span className="text-amber-400 font-bold text-xs">41 tours • 4.7★</span>
            </div>
          </div>

          {/* Phu Quoc */}
          <div onClick={() => openBookingModal(lang === "vi" ? "Nghỉ dưỡng biển Phú Quốc" : "Phu Quoc Beach Resort", 4800000)}
            className="group relative h-[240px] md:h-[360px] rounded-[32px] overflow-hidden cursor-pointer shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-700">
            <img src="/images/phuquoc.png" alt="Phu Quoc" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-sky-500/90 text-white text-xs font-bold shadow-md">
              {lang === "vi" ? "Miền Nam" : "Southern"}
            </div>
            <div className="absolute bottom-6 left-6 p-2 flex flex-col gap-1">
              <h3 className="font-heading text-xl font-extrabold text-white">{lang === "vi" ? "Phú Quốc" : "Phu Quoc"}</h3>
              <span className="text-sky-300 font-bold text-xs">36 tours • 4.8★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

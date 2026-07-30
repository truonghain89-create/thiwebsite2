"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

type Region = "all" | "north" | "central" | "south";

const tours = [
  {
    id: "halong-cruise",
    region: "north" as const,
    image: "/images/halong.png",
    badge: { vi: "Bán chạy", en: "Best Seller" },
    badgeColor: "bg-coral-rose",
    name: { vi: "Du thuyền Vịnh Hạ Long 3N2Đ", en: "Ha Long Bay Cruise 3D2N" },
    rating: 4.9,
    reviews: 1248,
    duration: { vi: "3 ngày", en: "3 days" },
    guests: { vi: "Nhóm", en: "Group" },
    difficulty: { vi: "Dễ", en: "Easy" },
    price: 5990000,
    includes: ["Du thuyền 5 sao", "Ăn sáng", "Hướng dẫn viên"],
  },
  {
    id: "sapa-trek",
    region: "north" as const,
    image: "/images/sapa.png",
    badge: { vi: "Hot", en: "Hot" },
    badgeColor: "bg-sky-blue",
    name: { vi: "Trekking Sa Pa – Fansipan 4N3Đ", en: "Sapa Fansipan Trek 4D3N" },
    rating: 4.8,
    reviews: 896,
    duration: { vi: "4 ngày", en: "4 days" },
    guests: { vi: "Nhóm nhỏ", en: "Small Group" },
    difficulty: { vi: "Trung bình", en: "Moderate" },
    price: 4590000,
    includes: ["Homestay", "Hướng dẫn bản địa", "Bữa ăn"],
  },
  {
    id: "hoian-heritage",
    region: "central" as const,
    image: "/images/hoian.png",
    badge: { vi: "Bán chạy", en: "Best Seller" },
    badgeColor: "bg-coral-rose",
    name: { vi: "Hành trình Di sản Miền Trung 5N4Đ", en: "Central Heritage Tour 5D4N" },
    rating: 4.7,
    reviews: 534,
    duration: { vi: "5 ngày", en: "5 days" },
    guests: { vi: "Nhóm", en: "Group" },
    difficulty: { vi: "Dễ", en: "Easy" },
    price: 6990000,
    includes: ["Khách sạn 4 sao", "Vé tham quan", "Ăn trưa"],
  },
  {
    id: "phuquoc-resort",
    region: "south" as const,
    image: "/images/phuquoc.png",
    badge: { vi: "Hot", en: "Hot" },
    badgeColor: "bg-sky-blue",
    name: { vi: "Nghỉ dưỡng biển đảo Phú Quốc 4N3Đ", en: "Phu Quoc Beach Resort 4D3N" },
    rating: 4.9,
    reviews: 672,
    duration: { vi: "4 ngày", en: "4 days" },
    guests: { vi: "Nhóm", en: "Group" },
    difficulty: { vi: "Dễ", en: "Easy" },
    price: 4890000,
    includes: ["Resort 5 sao", "Ăn sáng", "Lặn biển"],
  },
];

export function ToursSection() {
  const { t, lang, openBookingModal, formatPrice } = useApp();
  const [activeRegion, setActiveRegion] = useState<Region>("all");

  const filtered = activeRegion === "all" ? tours : tours.filter((t) => t.region === activeRegion);

  const filterBtns: { key: Region; vi: string; en: string }[] = [
    { key: "all", vi: "Tất cả", en: "All" },
    { key: "north", vi: "Miền Bắc", en: "North" },
    { key: "central", vi: "Miền Trung", en: "Central" },
    { key: "south", vi: "Miền Nam", en: "South" },
  ];

  return (
    <section id="tours" className="py-28 bg-bg relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/8 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="px-5 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-wider self-start font-heading">
              {t("tours.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl md:text-[42px] font-extrabold text-text leading-tight">
              {t("tours.title")}
            </h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-3.5 transition-all shrink-0">
            <span>{t("ui.viewAll")}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterBtns.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveRegion(btn.key)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeRegion === btn.key
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-secondary border border-[#E5E7EB] hover:bg-primary/5 hover:border-primary/20"
              }`}
            >
              {btn[lang]}
            </button>
          ))}
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((tour) => (
            <div key={tour.id}
              className="group bg-white rounded-[32px] overflow-hidden border border-[#E5E7EB] shadow-card hover:-translate-y-2.5 hover:shadow-hover hover:border-primary/10 transition-all duration-500 flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img src={tour.image} alt={tour.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {tour.badge && (
                  <div className={`absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full ${tour.badgeColor} text-white text-xs font-bold uppercase tracking-wider shadow-md`}>
                    {tour.badge[lang]}
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-amber-400 text-xs font-bold">
                  ★ {tour.rating}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3 className="font-heading font-extrabold text-base text-text group-hover:text-primary transition-colors leading-snug">
                  {tour.name[lang]}
                </h3>
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {tour.duration[lang]}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                    {tour.guests[lang]}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E5E7EB]">
                  {tour.includes.map((inc) => (
                    <span key={inc} className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-semibold">{inc}</span>
                  ))}
                </div>
                <div className="flex items-end justify-between pt-3 mt-auto border-t border-[#E5E7EB] gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-text-light uppercase font-semibold">{lang === "vi" ? "Từ" : "From"}</span>
                    <div className="font-heading font-extrabold text-lg text-primary truncate">{formatPrice(tour.price)}</div>
                    <span className="text-[10px] text-text-light">/{lang === "vi" ? "người" : "person"}</span>
                  </div>
                  <button
                    onClick={() => openBookingModal(tour.name[lang], tour.price)}
                    className="shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all duration-300 shadow-md"
                  >
                    {t("ui.bookNow")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

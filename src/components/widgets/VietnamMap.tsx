"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, ArrowRight, Eye } from "lucide-react";
import { destinations, Destination } from "@/data/mockData";

interface MapHotspot {
  id: string;
  name: string;
  nameVi: string;
  x: number; // percentage in SVG
  y: number; // percentage in SVG
  desc: string;
  descVi: string;
  img: string;
  rating: number;
}

const hotspots: MapHotspot[] = [
  {
    id: "hagiang",
    name: "Ha Giang",
    nameVi: "Hà Giang",
    x: 48,
    y: 8,
    desc: "Northernmost mountain loop, breathtaking passes.",
    descVi: "Vùng biên viễn cực Bắc, cung đèo đá kỳ vĩ.",
    img: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=400&q=80",
    rating: 4.9
  },
  {
    id: "sapa",
    name: "Sa Pa",
    nameVi: "Sa Pa",
    x: 34,
    y: 13,
    desc: "Terraced rice fields and ethnic mountain cultures.",
    descVi: "Ruộng bậc thang óng ả và văn hóa Tây Bắc.",
    img: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=400&q=80",
    rating: 4.8
  },
  {
    id: "hanoi",
    name: "Hanoi",
    nameVi: "Hà Nội",
    x: 48,
    y: 19,
    desc: "Ancient capital blending French and Asian soul.",
    descVi: "Thủ đô nghìn năm văn hiến, cổ kính thanh lịch.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80",
    rating: 4.7
  },
  {
    id: "halong",
    name: "Ha Long Bay",
    nameVi: "Vịnh Hạ Long",
    x: 64,
    y: 19,
    desc: "Thousands of emerald limestone islands.",
    descVi: "Kỳ quan thiên nhiên di sản, hàng ngàn đảo đá.",
    img: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=400&q=80",
    rating: 4.9
  },
  {
    id: "ninhbinh",
    name: "Ninh Binh",
    nameVi: "Ninh Bình",
    x: 47,
    y: 26,
    desc: "Karst mountains rising from river paddies.",
    descVi: "Cảnh quan Tràng An, vịnh Hạ Long trên cạn.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    rating: 4.8
  },
  {
    id: "hue",
    name: "Hue",
    nameVi: "Huế",
    x: 58,
    y: 47,
    desc: "Imperial tombs, historic temples, and quiet rivers.",
    descVi: "Đại nội hoàng cung cổ kính, dòng sông Hương thơ mộng.",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=400&q=80",
    rating: 4.75
  },
  {
    id: "hoian",
    name: "Hoi An",
    nameVi: "Hội An",
    x: 68,
    y: 52,
    desc: "Charming ancient trade port lit by lanterns.",
    descVi: "Phố cổ đèn lồng lung linh bên sông Thu Bồn.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80",
    rating: 4.9
  },
  {
    id: "dalat",
    name: "Da Lat",
    nameVi: "Đà Lạt",
    x: 74,
    y: 77,
    desc: "Misty highlands, pine forests, and cooler air.",
    descVi: "Thành phố tình yêu, đồi thông mờ sương mát mẻ.",
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80",
    rating: 4.6
  },
  {
    id: "saigon",
    name: "Saigon",
    nameVi: "TP. Hồ Chí Minh",
    x: 61,
    y: 86,
    desc: "Vibrant metropolis of commerce and rich history.",
    descVi: "Đô thị năng động, náo nhiệt, giàu lịch sử.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    rating: 4.7
  },
  {
    id: "phuquoc",
    name: "Phu Quoc",
    nameVi: "Phú Quốc",
    x: 30,
    y: 91,
    desc: "Tropical paradise beaches and luxury resorts.",
    descVi: "Đảo ngọc nhiệt đới cát trắng bãi dài.",
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80",
    rating: 4.8
  }
];

export const VietnamMap: React.FC = () => {
  const { lang, t } = useApp();
  const [selected, setSelected] = useState<MapHotspot>(hotspots[2]); // Default Hanoi

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Map Column (left 5 cols) */}
      <div className="lg:col-span-6 flex justify-center relative bg-soft-mint/30 rounded-3xl p-6 border border-border-nature/30 min-h-[500px]">
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

        {/* Vietnam SVG Contour Map */}
        <div className="relative w-full max-w-[360px] h-[550px]">
          <svg
            viewBox="0 0 200 600"
            className="w-full h-full text-slate-200"
            style={{ filter: "drop-shadow(0px 10px 30px rgba(46, 139, 87, 0.04))" }}
          >
            {/* Outline path representing the S-shape of Vietnam */}
            <path
              d="M 90 20 
                 Q 105 35 110 50 
                 T 90 90 
                 T 95 120 
                 T 110 145 
                 T 120 180 
                 Q 125 210 135 240
                 T 150 300 
                 T 158 350
                 Q 160 380 152 410
                 T 165 470
                 Q 175 510 140 520
                 T 120 540
                 Q 115 565 140 562
                 T 125 580"
              fill="none"
              stroke="#D1FAE5"
              strokeWidth="12"
              strokeLinecap="round"
              className="transition-colors duration-500"
            />
            <path
              d="M 90 20 
                 Q 105 35 110 50 
                 T 90 90 
                 T 95 120 
                 T 110 145 
                 T 120 180 
                 Q 125 210 135 240
                 T 150 300 
                 T 158 350
                 Q 160 380 152 410
                 T 165 470
                 Q 175 510 140 520
                 T 120 540
                 Q 115 565 140 562
                 T 125 580"
              fill="none"
              stroke="#A7F3D0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />

            {/* Hoang Sa & Truong Sa Islands (Symbolic) */}
            {/* Paracel (Hoang Sa) */}
            <circle cx="178" cy="225" r="2" fill="#A7F3D0" />
            <circle cx="182" cy="222" r="1.5" fill="#A7F3D0" />
            <circle cx="185" cy="226" r="2.5" fill="#A7F3D0" />
            
            {/* Spratly (Truong Sa) */}
            <circle cx="180" cy="480" r="1.5" fill="#A7F3D0" />
            <circle cx="184" cy="485" r="2" fill="#A7F3D0" />
            <circle cx="190" cy="488" r="1.5" fill="#A7F3D0" />
            <circle cx="195" cy="482" r="2.5" fill="#A7F3D0" />
          </svg>

          {/* Hotspot Interactive Pins */}
          {hotspots.map((spot) => {
            const isSelected = selected.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setSelected(spot)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                aria-label={`Select ${spot.name}`}
              >
                {/* Ping rings */}
                <span className={`absolute inline-flex h-6 w-6 rounded-full bg-secondary/30 -left-1 -top-1 animate-ping ${isSelected ? "opacity-75" : "opacity-0 group-hover:opacity-40"}`} />
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isSelected
                      ? "bg-secondary border-white scale-125 shadow-md shadow-secondary/50"
                      : "bg-[#FCFDFB] border-secondary hover:bg-secondary/10"
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-secondary"}`} />
                </div>

                {/* Micro Label */}
                <span
                  className={`absolute left-5 top-1/2 -translate-y-1/2 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap pointer-events-none transition-all duration-300 ${
                    isSelected
                      ? "bg-secondary text-white opacity-100 translate-x-0"
                      : "bg-[#FCFDFB] text-text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  {lang === "vi" ? spot.nameVi : spot.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Info Card Column (right 7 cols) */}
      <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-4">
        <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block">
          {t("home.map.title")}
        </span>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glassmorphism-card rounded-3xl p-8 flex flex-col gap-6 shadow-sm border border-border-nature/40 relative overflow-hidden"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-text-primary">
                    {lang === "vi" ? selected.nameVi : selected.name}
                  </h3>
                  <span className="text-xs text-text-secondary font-medium tracking-wide">
                    {lang === "vi" ? "Điểm nóng du lịch" : "Signature Hotspot"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full text-xs font-bold text-accent">
                <Star className="w-3.5 h-3.5 fill-accent" />
                <span>{selected.rating} / 5.0</span>
              </div>
            </div>

            {/* Image display */}
            <div className="h-56 w-full rounded-2xl overflow-hidden relative group">
              <img
                src={selected.img}
                alt={selected.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed font-sans font-medium">
              {lang === "vi" ? selected.descVi : selected.desc}
            </p>

            {/* Custom CTA Action */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href={`/${lang}/tours?destination=${selected.id}`}
                className="flex items-center gap-2 px-5 py-3 bg-secondary hover:bg-secondary/95 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm"
              >
                <span>{lang === "vi" ? "Khám phá Tour tại đây" : "Explore Tours"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href={`/${lang}/destinations/${selected.id}`}
                className="flex items-center gap-2 px-5 py-3 bg-nature-white border border-border-nature hover:bg-soft-mint text-text-primary font-semibold rounded-xl text-xs transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>{lang === "vi" ? "Chi tiết điểm đến" : "Destination Details"}</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

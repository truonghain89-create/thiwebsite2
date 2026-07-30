"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { regionalTours } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import { MapPin, ArrowRight } from "lucide-react";

export function RegionalToursSection() {
  const { t, lang, openBookingModal } = useApp();
  const [activeRegion, setActiveRegion] = useState(0);

  const tabs = [
    { key: "regional.north", id: "north" },
    { key: "regional.central", id: "central" },
    { key: "regional.south", id: "south" },
  ];

  const current = regionalTours[activeRegion];

  const tabColors = [
    "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20",
    "bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/20",
    "bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20",
  ];

  const btnColors = [
    "bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-600/10",
    "bg-amber-500 hover:bg-amber-600 hover:shadow-amber-500/10",
    "bg-sky-500 hover:bg-sky-600 hover:shadow-sky-500/10",
  ];

  const borderColors = [
    "border-l-4 border-emerald-500 pl-4",
    "border-l-4 border-amber-500 pl-4",
    "border-l-4 border-sky-500 pl-4",
  ];

  return (
    <section className="section-padding bg-bg-alt" id="regional">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow={t("regional.eyebrow")}
          title={t("regional.title")}
          subtitle={t("regional.subtitle")}
          align="center"
        />

        {/* Tabs */}
        <ScrollAnimator animation="fadeUp" delay={0.2}>
          <div className="flex items-center justify-center gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveRegion(index)}
                className={`px-6 py-2.5 rounded-full text-sm font-heading font-bold transition-all duration-300 ${
                  activeRegion === index
                    ? tabColors[index]
                    : `bg-bg-card text-text-secondary border border-border-light ${
                        tab.id === "north" ? "hover:text-emerald-600 hover:border-emerald-600/20" :
                        tab.id === "central" ? "hover:text-amber-500 hover:border-amber-500/20" :
                        "hover:text-sky-500 hover:border-sky-500/20"
                      }`
                }`}
              >
                {t(tab.key)}
              </button>
            ))}
          </div>
        </ScrollAnimator>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-hover group">
              <img
                src={current.image}
                alt={current.region[lang]}
                className="w-full h-full object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className={`absolute bottom-8 left-8 font-heading text-3xl font-extrabold text-white ${borderColors[activeRegion]}`}>
                {current.region[lang]}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6 text-left">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-body">
                {current.description[lang]}
              </p>

              {/* Destination chips */}
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                  {current.destinations.map((dest, i) => (
                    <div
                      key={i}
                      className="px-5 py-4 rounded-2xl bg-white border border-border-light text-sm font-semibold text-text flex items-center gap-3 shadow-card hover:border-primary/30 hover:bg-primary/3 transition-all cursor-pointer group"
                    >
                      <MapPin className="w-4.5 h-4.5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                        {dest[lang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const tourName = lang === "vi" ? `Tour Vùng Miền: ${current.region.vi}` : `Regional Tour: ${current.region.en}`;
                  openBookingModal(tourName, 7500000);
                }}
                className={`ripple-btn self-start px-8 py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md ${btnColors[activeRegion]}`}
              >
                {lang === "vi" ? "Khám phá vùng miền" : "Explore the region"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

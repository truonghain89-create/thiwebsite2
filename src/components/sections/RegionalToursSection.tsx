"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { regionalTours } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import { MapPin, ArrowRight } from "lucide-react";

export function RegionalToursSection() {
  const { t, lang } = useApp();
  const [activeRegion, setActiveRegion] = useState(0);

  const tabs = [
    { key: "regional.north", id: "north" },
    { key: "regional.central", id: "central" },
    { key: "regional.south", id: "south" },
  ];

  const current = regionalTours[activeRegion];

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
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-bg-card text-text-secondary hover:text-primary border border-border-light"
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
            <div className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden group">
              <img
                src={current.image}
                alt={current.region[lang]}
                className="w-full h-full object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="font-heading text-2xl md:text-3xl font-extrabold text-white">
                  {current.region[lang]}
                </span>
                <p className="text-white/70 text-sm mt-1">{current.tourCount}+ {t("ui.tours")}</p>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <p className="text-text-secondary text-base leading-relaxed">
                {current.description[lang]}
              </p>

              {/* Destination chips */}
              <div className="flex flex-col gap-3">
                <h4 className="font-heading font-bold text-sm text-text uppercase tracking-wide">
                  {t("destinations.eyebrow")}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {current.destinations.map((dest, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-bg-card border border-border-light hover:border-primary/30 hover:bg-primary/3 transition-all cursor-pointer group"
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                        {dest[lang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-primary text-white font-heading font-bold text-sm hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20">
                {t("ui.viewAll")} {current.region[lang]}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

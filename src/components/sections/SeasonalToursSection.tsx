"use client";

import { useApp } from "@/context/AppContext";
import { seasonalTours, destinations } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import { Calendar, ArrowRight } from "lucide-react";

export function SeasonalToursSection() {
  const { t, lang } = useApp();

  return (
    <section className="section-padding bg-bg" id="seasonal">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow={t("seasonal.eyebrow")}
          title={t("seasonal.title")}
          subtitle={t("seasonal.subtitle")}
          align="center"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {seasonalTours.map((season) => (
            <StaggerItem key={season.id}>
              <div className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer card-hover">
                <img
                  src={season.image}
                  alt={season.season[lang]}
                  className="absolute inset-0 w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />

                {/* Season Badge */}
                <div
                  className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full text-white text-[11px] font-bold flex items-center gap-1.5"
                  style={{ backgroundColor: `${season.color}CC` }}
                >
                  <Calendar className="w-3 h-3" />
                  {season.months[lang]}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex flex-col gap-2">
                  <h3 className="font-heading text-xl font-extrabold text-white">
                    {season.season[lang]}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
                    {season.title[lang]}
                  </p>

                  {/* Destination chips */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {season.destinations.slice(0, 3).map((dest) => (
                      <span key={dest} className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[10px] font-medium border border-white/10">
                        {destinations.find(d => d.id === dest)?.name[lang] || dest}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white transition-colors mt-1 self-start group/btn">
                    {t("ui.learnMore")}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}


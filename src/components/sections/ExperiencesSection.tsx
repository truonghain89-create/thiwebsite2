"use client";

import { useApp } from "@/context/AppContext";
import { experiences } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import { Clock, ArrowRight } from "lucide-react";

export function ExperiencesSection() {
  const { t, lang } = useApp();

  return (
    <section className="section-padding bg-bg relative overflow-hidden" id="experiences">
      {/* Organic decorations */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/5 organic-blob pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 organic-blob-2 pointer-events-none" />

      <div className="container-main flex flex-col gap-12 md:gap-16 relative z-10">
        <SectionHeading
          eyebrow={t("experiences.eyebrow")}
          title={t("experiences.title")}
          subtitle={t("experiences.subtitle")}
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {experiences.map((exp) => (
            <StaggerItem key={exp.id}>
              <div className="group bg-bg-card rounded-3xl overflow-hidden border border-border-light shadow-card card-hover flex flex-col h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title[lang]}
                    className="w-full h-full object-cover image-zoom"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider">
                    {exp.category[lang]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-grow">
                  <h3 className="font-heading text-lg font-bold text-text group-hover:text-primary transition-colors">
                    {exp.title[lang]}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 flex-grow">
                    {exp.description[lang]}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-border-light gap-2">
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs text-text-secondary font-medium min-w-0">
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        <Clock className="w-3.5 h-3.5" />
                        {exp.duration[lang]}
                      </span>
                      <span className="font-heading font-bold text-primary whitespace-nowrap">{exp.price[lang]}</span>
                    </div>
                    <button className="shrink-0 whitespace-nowrap flex items-center gap-1 text-[10px] sm:text-xs font-bold text-primary hover:gap-2 transition-all group/btn">
                      {t("ui.bookNow")}
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

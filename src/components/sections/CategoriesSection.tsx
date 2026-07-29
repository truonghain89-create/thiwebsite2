"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { categories } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import {
  Waves, Mountain, Landmark, UtensilsCrossed, Compass,
  Sparkles, TreePine, PartyPopper,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves, Mountain, Landmark, UtensilsCrossed, Compass,
  Sparkles, TreePine, PartyPopper,
};

export function CategoriesSection() {
  const { t, lang } = useApp();

  return (
    <section className="section-padding bg-bg" id="categories">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow={t("categories.eyebrow")}
          title={t("categories.title")}
          subtitle={t("categories.subtitle")}
          align="center"
        />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.06}>
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Compass;
            return (
              <StaggerItem key={cat.id}>
                <button className="w-full group card-hover hover-gradient flex flex-col items-center gap-4 p-6 md:p-8 rounded-3xl bg-bg-card border border-border-light shadow-card text-center transition-all">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-heading font-bold text-sm text-text group-hover:text-primary transition-colors">
                      {cat.name[lang]}
                    </span>
                    <span className="text-xs text-text-secondary">
                      {cat.count} {t("ui.tours")}
                    </span>
                  </div>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

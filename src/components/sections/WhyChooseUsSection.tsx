"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { whyChooseUs } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import {
  Users, Award, BadgePercent, Headphones, Settings, ShieldCheck,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, Award, BadgePercent, Headphones, Settings, ShieldCheck,
};

export function WhyChooseUsSection() {
  const { t, lang } = useApp();

  return (
    <section className="section-padding bg-bg-alt relative overflow-hidden" id="why-us">
      <div className="container-main flex flex-col gap-12 md:gap-16 relative z-10">
        <SectionHeading
          eyebrow={t("whyUs.eyebrow")}
          title={t("whyUs.title")}
          subtitle={t("whyUs.subtitle")}
          align="center"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <StaggerItem key={item.id}>
                <div className="group glass-card rounded-3xl p-7 md:p-8 flex flex-col gap-5 card-hover hover-gradient h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-105 animate-float-slow" style={{ animationDelay: `${Math.random() * 2}s` }}>
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-lg font-bold text-text group-hover:text-primary transition-colors">
                      {item.title[lang]}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description[lang]}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

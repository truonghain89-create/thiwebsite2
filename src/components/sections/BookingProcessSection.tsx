"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { bookingProcess } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import { Search, CalendarCheck, CreditCard, Plane } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, CalendarCheck, CreditCard, Plane,
};

export function BookingProcessSection() {
  const { t, lang } = useApp();

  return (
    <section className="section-padding bg-bg" id="process">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          subtitle={t("process.subtitle")}
          align="center"
        />

        <StaggerContainer className="relative" staggerDelay={0.15}>
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {bookingProcess.map((step) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <StaggerItem key={step.id}>
                  <div className="flex flex-col items-center text-center gap-4">
                    {/* Step Circle */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-bg-card border-2 border-primary/20 flex items-center justify-center shadow-card group hover:border-primary hover:shadow-glow transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      {/* Step Number */}
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {step.id}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2 max-w-xs">
                      <h3 className="font-heading text-base font-bold text-text">
                        {step.title[lang]}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {step.description[lang]}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

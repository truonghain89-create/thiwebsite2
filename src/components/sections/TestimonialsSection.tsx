"use client";

import { useApp } from "@/context/AppContext";
import { testimonials } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AutoSlider } from "@/components/ui/AutoSlider";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const { t, lang } = useApp();

  return (
    <section className="section-padding bg-bg" id="testimonials">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
          align="center"
        />

        <ScrollAnimator animation="fadeUp" delay={0.2} className="max-w-4xl mx-auto w-full">
          <AutoSlider interval={7000} showDots={true} showArrows={true} className="w-full">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="glass-card rounded-3xl p-8 md:p-12 border border-border-light shadow-soft flex flex-col gap-6 md:gap-8 relative"
              >
                {/* Large Quote Icon Watermark */}
                <Quote className="absolute right-8 top-8 w-24 h-24 text-primary/5 pointer-events-none" />

                {/* Rating */}
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-heading text-lg md:text-xl font-bold leading-relaxed text-text italic">
                  "{test.quote[lang]}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-border-light pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-heading font-bold text-sm text-text">
                      {test.name}
                    </h4>
                    <span className="text-xs text-text-secondary">
                      {test.role[lang]}
                    </span>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider font-heading">
                      {test.tourName[lang]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </AutoSlider>
        </ScrollAnimator>
      </div>
    </section>
  );
}

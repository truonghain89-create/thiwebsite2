"use client";

import { useApp } from "@/context/AppContext";
import { partners } from "@/data/mockData";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";

export function PartnersSection() {
  const { t } = useApp();

  return (
    <section className="py-16 bg-bg border-t border-border-light overflow-hidden" id="partners">
      <div className="container-main flex flex-col items-center gap-8">
        <ScrollAnimator animation="fadeIn">
          <span className="text-[10px] font-bold text-text-light uppercase tracking-widest text-center block">
            {t("partners.eyebrow")}
          </span>
        </ScrollAnimator>

        <ScrollAnimator animation="fadeUp" delay={0.2} className="w-full relative">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-full overflow-hidden">
            <div className="flex gap-16 items-center animate-marquee shrink-0">
              {/* Double array for infinite marquee */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex items-center justify-center h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0"
                >
                  <span className="font-heading font-extrabold text-lg tracking-tight text-text">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

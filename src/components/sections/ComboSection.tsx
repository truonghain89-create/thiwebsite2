"use client";

import { useApp } from "@/context/AppContext";
import { combos } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import { Clock, Check, ArrowRight } from "lucide-react";

export function ComboSection() {
  const { t, lang } = useApp();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  return (
    <section className="section-padding bg-bg-alt" id="combo">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow={t("combo.eyebrow")}
          title={t("combo.title")}
          subtitle={t("combo.subtitle")}
          align="center"
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {combos.map((combo) => (
            <StaggerItem key={combo.id}>
              <div className="group bg-bg-card rounded-3xl overflow-hidden border border-border-light shadow-card card-hover flex flex-col h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={combo.image}
                    alt={combo.title[lang]}
                    className="w-full h-full object-cover image-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Savings Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-error/90 text-white text-xs font-bold flex items-center gap-1">
                    🔥 {t("combo.save")} {combo.savings}%
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                    <Clock className="w-3 h-3" />
                    {combo.duration} {t("ui.days")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-grow">
                  <h3 className="font-heading text-lg font-bold text-text group-hover:text-primary transition-colors">
                    {combo.title[lang]}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                    {combo.description[lang]}
                  </p>

                  {/* Includes */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                      {t("combo.includes")}:
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {combo.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-success shrink-0" />
                          <span className="text-xs text-text-secondary">{item[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-end justify-between pt-4 mt-auto border-t border-border-light gap-2">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] sm:text-xs text-text-light line-through">
                        {formatPrice(combo.originalPriceVND)}
                      </span>
                      <span className="font-heading text-lg sm:text-xl font-extrabold text-primary">
                        {formatPrice(combo.priceVND)}
                      </span>
                    </div>
                    <button className="shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold hover:bg-primary-dark transition-all hover:shadow-md hover:shadow-primary/20">
                      {t("ui.bookNow")}
                      <ArrowRight className="w-3.5 h-3.5" />
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

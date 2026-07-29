"use client";

import { useApp } from "@/context/AppContext";
import { tours } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollAnimator, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import { Star, Clock, Users, ArrowRight, Heart } from "lucide-react";

export function FeaturedToursSection() {
  const { t, lang } = useApp();

  const getBadgeLabel = (badge?: string) => {
    if (!badge) return null;
    const map: Record<string, string> = {
      bestSeller: t("ui.bestSeller"),
      hot: t("ui.hot"),
      new: t("ui.new"),
    };
    return map[badge] || null;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  return (
    <section className="section-padding bg-bg" id="tours">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t("tours.eyebrow")}
            title={t("tours.title")}
            subtitle={t("tours.subtitle")}
          />
          <ScrollAnimator animation="fadeIn" delay={0.3}>
            <button className="flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-3 transition-all shrink-0">
              {t("ui.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollAnimator>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {tours.map((tour) => {
            const badgeLabel = getBadgeLabel(tour.badge);
            return (
              <StaggerItem key={tour.id}>
                <div className="group bg-bg-card rounded-3xl overflow-hidden border border-border-light shadow-card card-hover flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title[lang]}
                      className="w-full h-full object-cover image-zoom"
                    />

                    {/* Badge */}
                    {badgeLabel && (
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                        {badgeLabel}
                      </div>
                    )}

                    {/* Discount tag */}
                    {tour.originalPriceVND && (
                      <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-error/90 text-white text-[10px] font-bold">
                        -{Math.round((1 - tour.priceVND / tour.originalPriceVND) * 100)}%
                      </div>
                    )}

                    {/* Heart */}
                    <button className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/90 transition-colors group/heart" aria-label="Add to wishlist">
                      <Heart className="w-4 h-4 text-text group-hover/heart:text-error transition-colors" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col gap-4 flex-grow">
                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-heading">
                        {tour.difficulty[lang]}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                        <span className="text-xs font-bold text-text">{tour.rating}</span>
                        <span className="text-xs text-text-light">({tour.reviewCount})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold text-text leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {tour.title[lang]}
                    </h3>

                    {/* Info */}
                    <div className="flex items-center gap-4 text-text-secondary text-xs font-medium">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {tour.duration} {t("ui.days")}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {tour.groupSize[lang]}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {tour.highlights.slice(0, 3).map((h, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full bg-bg-alt text-xs text-text-secondary font-medium">
                          {h[lang]}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-end justify-between pt-4 mt-auto border-t border-border-light gap-2">
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-text-light uppercase tracking-wider font-bold">
                          {t("ui.from")}
                        </span>
                        <div className="flex items-baseline gap-1 flex-wrap">
                          <span className="font-heading text-lg sm:text-xl font-extrabold text-primary">
                            {formatPrice(tour.priceVND)}
                          </span>
                          {tour.originalPriceVND && (
                            <span className="text-[10px] sm:text-xs text-text-light line-through">
                              {formatPrice(tour.originalPriceVND)}
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold hover:bg-primary-dark transition-all duration-300 hover:shadow-md hover:shadow-primary/20 ripple-container">
                        {t("ui.bookNow")}
                      </button>
                    </div>
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

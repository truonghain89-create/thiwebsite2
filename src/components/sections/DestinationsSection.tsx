"use client";

import { useApp } from "@/context/AppContext";
import { destinations } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import { Star, ArrowRight } from "lucide-react";

export function DestinationsSection() {
  const { t, lang } = useApp();
  const featured = destinations.filter((d) => d.featured);
  const rest = destinations.filter((d) => !d.featured).slice(0, 5);

  return (
    <section className="section-padding bg-bg-alt" id="destinations">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t("destinations.eyebrow")}
            title={t("destinations.title")}
            subtitle={t("destinations.subtitle")}
          />
          <ScrollAnimator animation="fadeIn" delay={0.3}>
            <button className="flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-3 transition-all shrink-0">
              {t("ui.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollAnimator>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large Featured Card */}
          {featured.slice(0, 1).map((dest) => (
            <ScrollAnimator key={dest.id} animation="slideRight" className="md:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="group relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden cursor-pointer card-hover">
                <img
                  src={dest.image}
                  alt={dest.name[lang]}
                  className="absolute inset-0 w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />

                {/* Region Badge */}
                <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-white text-xs font-bold">
                  {dest.region[lang]}
                </div>

                {/* Rating */}
                <div className="absolute top-6 right-6 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/10">
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  <span className="text-white text-xs font-bold">{dest.rating}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 flex flex-col gap-2">
                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
                    {dest.name[lang]}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-lg line-clamp-2">
                    {dest.description[lang]}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-accent text-xs font-bold">
                      {dest.tourCount} {t("ui.tours")}
                    </span>
                    <span className="flex items-center gap-1 text-white/80 text-xs font-bold group-hover:text-accent transition-colors">
                      {t("ui.learnMore")}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}

          {/* Smaller cards */}
          {featured.slice(1, 3).map((dest, i) => (
            <ScrollAnimator key={dest.id} animation="slideLeft" delay={0.1 * (i + 1)}>
              <div className="group relative h-60 lg:h-full min-h-[240px] rounded-3xl overflow-hidden cursor-pointer card-hover">
                <img
                  src={dest.image}
                  alt={dest.name[lang]}
                  className="absolute inset-0 w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-[1]" />

                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/10">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-white text-[11px] font-bold">{dest.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex flex-col gap-1.5">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {dest.name[lang]}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">{dest.tourCount} {t("ui.tours")}</span>
                    <span className="text-xs text-white/60 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10">
                      {dest.region[lang]}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}

          {/* Bottom row */}
          {rest.slice(0, 4).map((dest, i) => (
            <ScrollAnimator key={dest.id} animation="fadeUp" delay={0.08 * i} className={i === 3 ? "hidden lg:block" : ""}>
              <div className="group relative h-52 rounded-3xl overflow-hidden cursor-pointer card-hover">
                <img
                  src={dest.image}
                  alt={dest.name[lang]}
                  className="absolute inset-0 w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent z-[1]" />

                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-base font-bold text-white">{dest.name[lang]}</h3>
                    <span className="text-white/50 text-xs">{dest.tourCount} {t("ui.tours")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-accent fill-accent" />
                    <span className="text-white text-xs font-bold">{dest.rating}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

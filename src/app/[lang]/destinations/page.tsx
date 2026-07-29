"use client";

import React, { use } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { destinations } from "@/data/mockData";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { TraditionalCloud, LotusDivider } from "@/components/ui/TraditionalMotifs";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function DestinationsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { t } = useApp();

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen relative overflow-hidden">
      {/* Decorative Cloud Motifs in Background */}
      <TraditionalCloud className="absolute right-[-10%] top-[15%] w-[360px] h-[180px] text-secondary/[0.04] pointer-events-none select-none hidden md:block animate-float-slow" />
      <TraditionalCloud className="absolute left-[-10%] bottom-[20%] w-[420px] h-[210px] text-primary/[0.03] pointer-events-none select-none hidden md:block animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block mb-1">
            Regions of Wonder
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-black text-text-primary leading-tight">
            Timeless Destinies
          </h1>
          <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
            From the mystical mountain peaks of the high north to the crystal tropical islets in the gulf, explore regions that represent the true soul of Vietnam.
          </p>
        </div>

        <LotusDivider className="mb-14 opacity-50" />

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-nature-white border border-border-nature rounded-3xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:shadow-md hover:border-border-nature/80"
            >
              <div className="h-64 w-full overflow-hidden relative">
                <img
                  src={dest.image}
                  alt={dest.name[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                  {dest.region[lang]}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between gap-5 flex-grow">
                <div className="flex flex-col gap-2">
                  <h3 className="font-playfair text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    <Link href={`/${lang}/destinations/${dest.id}`}>{dest.name[lang]}</Link>
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {dest.description[lang]}
                  </p>
                </div>

                <div className="border-t border-border-nature/40 pt-4 flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-accent">
                    <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                    <span>{dest.rating} Rating</span>
                  </div>
                  <Link
                    href={`/${lang}/destinations/${dest.id}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary/80 transition-colors uppercase"
                  >
                    <span>{t("ui.learnMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

"use client";

import React, { use } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { experiences } from "@/data/mockData";
import { ArrowRight, Compass } from "lucide-react";
import { TraditionalCloud, LotusDivider } from "@/components/ui/TraditionalMotifs";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function ExperiencesPage({ params }: PageProps) {
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
            Immersive Senses
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-black text-text-primary leading-tight">
            Curated Experiences
          </h1>
          <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
            Travel is defined by the memories we draft. Discover artisanal paths, cooking masterclasses, and hiking loop adventures.
          </p>
        </div>

        <LotusDivider className="mb-14 opacity-50" />

        {/* Experience categories list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-nature-white border border-border-nature rounded-3xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:shadow-md"
            >
              <div className="h-64 w-full overflow-hidden relative">
                <img
                  src={exp.image}
                  alt={exp.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              <div className="p-6 flex flex-col justify-between gap-5 flex-grow">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                    {exp.category[lang]} Category
                  </span>
                  <h3 className="font-playfair text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {exp.title[lang]}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-medium">
                    {exp.description[lang]}
                  </p>
                </div>

                <div className="border-t border-border-nature/40 pt-4 flex items-center justify-between mt-1">
                  <span className="text-[10px] text-text-secondary flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-secondary animate-spin-slow" style={{ animationDuration: "8s" }} /> Signature Activities
                  </span>
                  <Link
                    href={`/${lang}/tours?type=${exp.id}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary/80 transition-colors uppercase"
                  >
                    <span>View Tours</span>
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

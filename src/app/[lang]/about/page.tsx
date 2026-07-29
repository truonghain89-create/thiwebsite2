"use client";

import React, { use } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { Compass, Award, ShieldCheck, Heart } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function AboutPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { t } = useApp();

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[768px] mx-auto px-6 flex flex-col gap-10">
        
        {/* Header */}
        <div>
          <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block mb-1">
            Our Legacy
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-text-primary leading-tight">
            About Vietnam Tours
          </h1>
          <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-semibold">
            Dedicated to protecting regional ecosystems, elevating local craft, and designing premium bespoke experiences in Southeast Asia.
          </p>
        </div>

        {/* Brand visual */}
        <div className="h-72 w-full rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
            alt="Scenic Vietnam Bridge"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Statements */}
        <div className="font-sans text-xs text-text-secondary leading-relaxed flex flex-col gap-6 font-medium">
          <p>
            Vietnam Tours is not a traditional travel agency. We are a collection of local designers, historians, and environmentalists who believe that travel should be a slow, restorative experience. We avoid mass tourism and crowded corridors, creating quiet trails that let you connect deeply with the land and the people.
          </p>
          <p>
            Our travel designers select only eco-lodges, resorts, and cruises that support native workers, practice strict waste reduction, and contribute to native conservation programs. When you journey with us, 5% of your total price goes directly to local rural communities in Sa Pa and Ha Giang.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border-nature/40 pt-10 mt-2">
          <div className="flex flex-col gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-playfair text-sm font-bold text-text-primary">Reliable Quality</h4>
            <p className="text-[10px] text-text-secondary leading-relaxed">Tested, verified routes matching five-star luxury requirements.</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-playfair text-sm font-bold text-text-primary">Authentic Secrets</h4>
            <p className="text-[10px] text-text-secondary leading-relaxed">Off-grid pathways designed alongside local rural historians.</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <h4 className="font-playfair text-sm font-bold text-text-primary">Giving Back</h4>
            <p className="text-[10px] text-text-secondary leading-relaxed">Every journey funds local ethnic education and environment tax buffers.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

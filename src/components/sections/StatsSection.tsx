"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { stats } from "@/data/mockData";
import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import { Map, Users, MapPin, Star } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Map, Users, MapPin, Star,
};

export function StatsSection() {
  const { lang } = useApp();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="stats">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient z-0" style={{ backgroundSize: "200% 200%" }} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: "30px 30px"
      }} />

      {/* Organic shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 organic-blob pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 organic-blob-2 pointer-events-none" />

      <div className="container-main relative z-10">
        <ScrollAnimator animation="fadeUp">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon] || Map;
              return (
                <div key={stat.id} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CounterAnimation
                    target={stat.value}
                    suffix={stat.suffix}
                    className="font-heading text-3xl md:text-4xl font-extrabold text-white"
                    decimals={stat.id === "rating" ? 1 : 0}
                  />
                  <span className="text-white/70 text-sm font-medium">
                    {stat.label[lang]}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

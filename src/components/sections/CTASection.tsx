"use client";

import { useApp } from "@/context/AppContext";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import { RippleButton } from "@/components/ui/RippleButton";
import { MessageSquare, Calendar } from "lucide-react";

export function CTASection() {
  const { t } = useApp();

  return (
    <section className="section-padding bg-bg relative overflow-hidden" id="cta">
      <div className="container-main relative z-10">
        <ScrollAnimator animation="scaleIn" duration={0.8}>
          <div className="relative rounded-[32px] overflow-hidden py-16 md:py-20 px-6 md:px-12 text-center flex flex-col items-center gap-6 shadow-hover bg-gradient-to-r from-primary via-secondary to-accent animate-gradient" style={{ backgroundSize: "200% 200%" }}>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "30px 30px"
            }} />

            {/* Organic blobs decoration */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 organic-blob pointer-events-none z-0" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 organic-blob-2 pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-white bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                {t("cta.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                {t("cta.title")}
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-body">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                <RippleButton variant="white" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t("cta.button.book")}
                </RippleButton>
                <RippleButton variant="white" size="lg" className="border-white/40 hover:bg-white/10">
                  <MessageSquare className="w-4 h-4" />
                  {t("cta.button.contact")}
                </RippleButton>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

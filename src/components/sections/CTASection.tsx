"use client";

import { useApp } from "@/context/AppContext";

export function CTASection() {
  const { t, openBookingModal, openContactModal } = useApp();

  return (
    <section id="cta" className="py-24 bg-bg">
      <div className="container-main">
        <div className="relative rounded-[40px] overflow-hidden py-24 px-6 md:px-12 text-center flex flex-col items-center gap-6 shadow-hover bg-bg-dark border border-white/5">
          {/* Glow blobs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-5 max-w-2xl">
            <span className="text-[9px] uppercase tracking-widest font-bold text-accent bg-primary/20 px-4 py-1.5 rounded-full border border-primary/20">
              {t("cta.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl md:text-[52px] font-extrabold text-white leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <button
                onClick={() => openBookingModal(t("cta.button.book"), 4500000)}
                className="px-8 py-3.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark hover:shadow-lg transition-all"
              >
                {t("cta.button.book")}
              </button>
              <button
                onClick={openContactModal}
                className="px-8 py-3.5 rounded-full bg-transparent text-white border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                {t("cta.button.contact")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

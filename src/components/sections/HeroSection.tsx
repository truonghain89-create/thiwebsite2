"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { heroSlides } from "@/data/mockData";
import { RippleButton } from "@/components/ui/RippleButton";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Wallet,
  Compass,
  Star,
  Headphones,
  ChevronDown,
} from "lucide-react";

export function HeroSection() {
  const { t, lang } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const badges = [
    { icon: Compass, text: t("hero.badge.tours") },
    { icon: Star, text: t("hero.badge.rating") },
    { icon: Headphones, text: t("hero.badge.support") },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden" id="hero">
      {/* Background Slides */}
      {isMounted ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title[lang]}
              className="w-full h-full object-cover"
              style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.05)` }}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title[lang]}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

      {/* Animated gradient decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-bg to-transparent" />

      {/* Content */}
      <div className="container-main relative z-10 pt-32 pb-12 flex flex-col gap-8">
        {/* Main Content - Left aligned */}
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl flex flex-col gap-6"
          >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 self-start"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 text-white/90 text-xs font-bold tracking-wide">
              {t("hero.eyebrow")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight whitespace-pre-line"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl font-body"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <RippleButton variant="primary" size="lg">
              {t("hero.cta.explore")}
            </RippleButton>
            <RippleButton variant="white" size="lg">
              {t("hero.cta.tours")}
            </RippleButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <badge.icon className="w-4 h-4 text-accent" />
                <span className="text-white text-xs font-bold">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="max-w-2xl flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start">
              <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 text-white/90 text-xs font-bold tracking-wide">
                {t("hero.eyebrow")}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl font-body">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <RippleButton variant="primary" size="lg">
                {t("hero.cta.explore")}
              </RippleButton>
              <RippleButton variant="white" size="lg">
                {t("hero.cta.tours")}
              </RippleButton>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span className="text-white text-xs font-bold">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-3"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className="flex items-center gap-2 group"
            >
              <div className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-10 bg-white" : "w-4 bg-white/30 group-hover:bg-white/50"
              }`} />
              {index === currentSlide && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white/70 text-xs font-medium hidden sm:inline"
                >
                  {slide.title[lang]}
                </motion.span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-5xl"
        >
          <div className="glass-strong rounded-3xl p-3 md:p-4 shadow-hover">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {/* Destination */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg/50 border border-border-light lg:col-span-1">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{t("search.destination")}</span>
                  <input
                    type="text"
                    placeholder={t("search.destination.placeholder")}
                    className="text-sm text-text bg-transparent outline-none placeholder:text-text-light w-full font-medium"
                  />
                </div>
              </div>

              {/* Tour Type */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg/50 border border-border-light lg:col-span-1">
                <Compass className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{t("search.tourType")}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-light font-medium">{t("search.tourType.placeholder")}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-text-light" />
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg/50 border border-border-light lg:col-span-1">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{t("search.date")}</span>
                  <span className="text-sm text-text-light font-medium">{t("search.date.placeholder")}</span>
                </div>
              </div>

              {/* Guests */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg/50 border border-border-light lg:col-span-1">
                <Users className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{t("search.guests")}</span>
                  <span className="text-sm text-text-light font-medium">{t("search.guests.placeholder")}</span>
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-bg/50 border border-border-light lg:col-span-1">
                <Wallet className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{t("search.budget")}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-light font-medium">{t("search.budget.placeholder")}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-text-light" />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-1 flex">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-white font-heading font-bold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                  <Search className="w-4 h-4" />
                  {t("search.button")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

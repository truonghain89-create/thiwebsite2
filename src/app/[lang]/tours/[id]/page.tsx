"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp, Language } from "@/context/AppContext";
import { tours, Tour } from "@/data/mockData";
import { BookingWidget } from "@/components/widgets/BookingWidget";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Check, X, Shield, Users, Heart, ChevronLeft, MapPin } from "lucide-react";
import { TraditionalCloud, ChimLac, LotusDivider } from "@/components/ui/TraditionalMotifs";

interface PageProps {
  params: Promise<{ lang: string; id: string }>;
}

export default function TourDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const id = resolvedParams.id;
  const { formatPrice, wishlist, toggleWishlist, t } = useApp();
  const router = useRouter();

  const [tour, setTour] = useState<Tour | null>(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [activeItineraryDay, setActiveItineraryDay] = useState<number>(1);

  useEffect(() => {
    const found = tours.find((t) => t.id === id);
    if (found) {
      setTour(found);
    }
  }, [id]);

  if (!tour) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#FCFDFB]">
        <Compass className="w-12 h-12 text-slate-300 animate-spin" />
        <h2 className="font-playfair text-2xl font-bold">Tour Not Found</h2>
        <Link href={`/${lang}/tours`} className="text-sm font-bold text-primary hover:underline">
          Return to all tours
        </Link>
      </div>
    );
  }

  const inWishlist = wishlist.includes(tour.id);

  return (
    <div className="bg-[#FCFDFB] min-h-screen relative overflow-hidden">
      {/* Background traditional motifs */}
      <TraditionalCloud className="absolute right-[-10%] top-[40%] w-[340px] h-[170px] text-secondary/[0.04] pointer-events-none select-none hidden md:block animate-float-slow" />
      <ChimLac className="absolute left-[-8%] bottom-[30%] w-[130px] h-[85px] text-primary/[0.03] pointer-events-none select-none hidden lg:block animate-float" style={{ animationDuration: "14s" }} />
      <TraditionalCloud className="absolute right-[-5%] bottom-[10%] w-[380px] h-[190px] text-primary/[0.03] pointer-events-none select-none hidden md:block animate-float-slow" style={{ animationDelay: "2s" }} />
      
      {/* 1. HERO GALLERY BANNER */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tour.image}
            alt={tour.title[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Back Link and Action */}
        <div className="absolute top-24 left-6 md:left-12 z-20 flex gap-4">
          <Link
            href={`/${lang}/tours`}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-black/35 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 hover:bg-black/50 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>All Journeys</span>
          </Link>
        </div>

        {/* Hero Title details */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-white">
          <div className="max-w-3xl flex flex-col gap-2">
            <div className="flex items-center gap-4 text-xs font-bold text-accent">
              <span className="bg-accent/20 border border-accent/30 px-2.5 py-0.5 rounded uppercase tracking-wider text-white">
                {tour.difficulty[lang]}
              </span>
              <span className="flex items-center gap-1 text-white">
                <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                <span>{tour.rating} ({tour.reviewCount} reviews)</span>
              </span>
            </div>
            <h1 className="font-playfair text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {tour.title[lang]}
            </h1>
            <div className="flex items-center gap-6 text-xs text-white/80 mt-2 font-medium">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {tour.duration} {t("ui.days")} / {tour.duration - 1} {lang === "vi" ? "đêm" : "nights"}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {tour.groupSize[lang]}</span>
            </div>
          </div>

          {/* Quick float action */}
          <button
            onClick={() => toggleWishlist(tour.id)}
            className="flex items-center gap-2 text-xs font-bold bg-white/15 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 hover:bg-white/25 transition-all text-white shrink-0 self-start md:self-auto"
          >
            <Heart className={`w-4 h-4 ${inWishlist ? "fill-accent-coral text-accent-coral" : "text-white"}`} />
            <span>{inWishlist ? "Saved in Wishlist" : "Add to Wishlist"}</span>
          </button>
        </div>
      </section>

      {/* 2. SPLIT CONTENT GRID */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main info (left cols 8) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Overview */}
            <div className="flex flex-col gap-4">
              <h2 className="font-playfair text-2xl font-bold text-text-primary">
                About This Journey
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed font-medium">
                {tour.description[lang]}
              </p>
            </div>

            <LotusDivider className="my-6 opacity-40" />

            {/* Content Tabs switcher */}
            <div className="flex flex-col gap-6">
              <div className="flex border-b border-border-nature overflow-x-auto gap-6 pb-0.5">
                {[
                  { id: "itinerary", label: "Itinerary Timeline" },
                  { id: "inclusion", label: "What's Included" },
                  { id: "reviews", label: "Travel Reviews" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-xs font-bold uppercase tracking-wider pb-3 border-b-2 transition-colors focus:outline-none whitespace-nowrap ${
                      activeTab === tab.id ? "border-secondary text-secondary" : "border-transparent text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-2">
                <AnimatePresence mode="wait">
                  {/* Tab 1: Itinerary */}
                  {activeTab === "itinerary" && (
                    <motion.div
                      key="itinerary"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex flex-col md:flex-row gap-8"
                    >
                      {/* Day list selectors */}
                      <div className="md:w-1/4 flex flex-row md:flex-col gap-2 pb-4 md:pb-0 overflow-x-auto md:overflow-x-visible">
                        {(tour.itinerary || []).map((day) => (
                          <button
                            key={day.day}
                            onClick={() => setActiveItineraryDay(day.day)}
                            className={`px-4 py-3 rounded-xl text-xs font-bold text-left transition-colors whitespace-nowrap shrink-0 flex items-center gap-3 ${
                              activeItineraryDay === day.day
                                ? "bg-secondary text-white shadow-sm"
                                : "bg-nature-white text-text-primary border border-border-nature/50 hover:bg-soft-mint"
                            }`}
                          >
                            <span>Day {day.day}</span>
                          </button>
                        ))}
                      </div>

                      {/* Day description content */}
                      <div className="md:w-3/4 bg-nature-white border border-border-nature/40 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-sm">
                        {(tour.itinerary || []).map((day) => {
                          if (day.day !== activeItineraryDay) return null;
                          return (
                            <div key={day.day} className="flex flex-col gap-3">
                              <h3 className="font-playfair text-xl font-bold text-text-primary">
                                {day.title[lang]}
                              </h3>
                              <p className="text-xs text-text-secondary leading-relaxed font-medium">
                                {day.desc[lang]}
                              </p>
                              <div className="flex gap-4 mt-2.5 text-[11px] font-semibold text-text-secondary border-t border-border-nature/40 pt-4">
                                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-secondary" /> Activity details included</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 2: Inclusion */}
                  {activeTab === "inclusion" && (
                    <motion.div
                      key="inclusion"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-nature-white border border-border-nature/40 rounded-3xl p-6 md:p-8 shadow-sm"
                    >
                      <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                          Included
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {(tour.included || []).map((inc, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-text-primary font-medium">
                              <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                              <span>{inc[lang]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-accent-coral">
                          Not Included
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {(tour.notIncluded || []).map((ninc, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary font-medium">
                              <X className="w-4 h-4 text-accent-coral shrink-0 mt-0.5" />
                              <span>{ninc[lang]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 3: Reviews */}
                  {activeTab === "reviews" && (
                    <motion.div
                      key="reviews"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex flex-col gap-6"
                    >
                      {/* Rating details banner */}
                      <div className="bg-soft-mint/40 border border-border-nature rounded-3xl p-6 flex items-center justify-between gap-6">
                        <div>
                          <span className="text-xs text-text-secondary font-bold uppercase tracking-wider block">Average Rating</span>
                          <span className="text-4xl font-bold font-playfair text-text-primary mt-1 block">{tour.rating} / 5.0</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-accent">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent" />
                          ))}
                        </div>
                      </div>

                      {/* Mock reviewer list */}
                      <div className="flex flex-col gap-4">
                        <div className="bg-nature-white border border-border-nature/40 rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-text-primary">Evelyn Rose</span>
                            <span className="text-text-secondary">2 weeks ago</span>
                          </div>
                          <p className="text-xs text-text-secondary leading-relaxed font-medium">
                            An absolute masterpiece of a journey. The local red Dao family welcomed us with so much warmth. Highly recommend Sapa trekking route!
                          </p>
                        </div>
                        <div className="bg-nature-white border border-border-nature/40 rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-text-primary">Hans G.</span>
                            <span className="text-text-secondary">1 month ago</span>
                          </div>
                          <p className="text-xs text-text-secondary leading-relaxed font-medium">
                            Sapa was misty and beautiful. The herbal bath at Ta Van village was the perfect reward after 12km walk. Worth every penny.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Sidebar Booking Card (right cols 4) */}
          <div className="lg:col-span-4">
            <BookingWidget layout="sidebar" tourId={tour.id} basePrice={tour.priceUSD} />
          </div>

        </div>
      </section>

    </div>
  );
}
// Compass fallback helper interface icon
const Compass = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

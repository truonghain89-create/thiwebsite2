"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useApp, Language } from "@/context/AppContext";
import { tours, destinations, Tour } from "@/data/mockData";
import { Search, Compass, Star, Clock, Heart, Sliders, X } from "lucide-react";
import { TraditionalCloud, ChimLac, LotusDivider } from "@/components/ui/TraditionalMotifs";

interface PageProps {
  params: Promise<{ lang: string }>;
}

function ToursPageContent({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { formatPrice, wishlist, toggleWishlist, t } = useApp();
  const searchParams = useSearchParams();

  // Search parameters parsed from URL
  const initialDest = searchParams.get("destination") || "";
  const initialSearch = searchParams.get("search") || "";
  const initialType = searchParams.get("type") || "all";

  // Filter States
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedDest, setSelectedDest] = useState(initialDest);
  const [selectedType, setSelectedType] = useState(initialType);
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);

  // Run filters
  useEffect(() => {
    let result = tours;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          (t.title[lang] || t.title.en).toLowerCase().includes(q) ||
          (t.description[lang] || t.description.en).toLowerCase().includes(q)
      );
    }

    if (selectedDest) {
      result = result.filter((t) => (t.destinations || []).includes(selectedDest));
    }

    if (selectedType !== "all") {
      if (selectedType === "heritage") {
        result = result.filter((t) => t.id.includes("culture") || t.id.includes("heritage"));
      } else if (selectedType === "adventure") {
        result = result.filter((t) => t.id.includes("trek") || t.id.includes("hagiang") || t.id.includes("loop"));
      } else if (selectedType === "cruise") {
        result = result.filter((t) => t.id.includes("cruise"));
      }
    }

    setFilteredTours(result);
  }, [searchQuery, selectedDest, selectedType, lang]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDest("");
    setSelectedType("all");
  };

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen relative overflow-hidden">
      {/* Background traditional motifs */}
      <TraditionalCloud className="absolute right-[-10%] top-[10%] w-[380px] h-[190px] text-secondary/[0.04] pointer-events-none select-none hidden md:block animate-float-slow" />
      <ChimLac className="absolute left-[2%] top-[30%] w-[120px] h-[80px] text-primary/[0.04] pointer-events-none select-none hidden lg:block animate-float" style={{ animationDuration: "12s" }} />
      <TraditionalCloud className="absolute left-[-8%] bottom-[15%] w-[380px] h-[190px] text-primary/[0.03] pointer-events-none select-none hidden md:block animate-float-slow" style={{ animationDelay: "3s" }} />

      {/* Title Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
          Signature Trails
        </span>
        <h1 className="font-playfair text-4xl md:text-6xl font-black text-text-primary leading-tight">
          Find Your Journey
        </h1>
        <p className="text-sm text-text-secondary mt-1.5 max-w-[60ch]">
          Handcrafted travel itineraries in Vietnam focusing on slow pacing, premium lodging, and deep regional culture.
        </p>

        <LotusDivider className="mt-8 mb-2 opacity-50" />
      </div>

      {/* Interactive Filters Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Sidebar Filters (cols 3) */}
        <div className="lg:col-span-3 bg-nature-white border border-border-nature rounded-3xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-border-nature pb-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-text-primary flex items-center gap-2">
              <Sliders className="w-4 h-4 text-secondary" />
              <span>Filters</span>
            </h3>
            {(searchQuery || selectedDest || selectedType !== "all") && (
              <button
                onClick={clearFilters}
                className="text-[10px] font-bold text-accent hover:text-accent-coral flex items-center gap-1 transition-colors uppercase"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>

          {/* Search box */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
              Search Keywords
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="E.g., trek, cruise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs font-semibold pl-8 pr-3 py-2.5 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
              />
              <Search className="w-3.5 h-3.5 text-text-secondary/50 absolute left-3 top-3.5" />
            </div>
          </div>

          {/* Destination select */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
              Destination
            </label>
            <select
              value={selectedDest}
              onChange={(e) => setSelectedDest(e.target.value)}
              className="w-full bg-[#FCFDFB] border border-border-nature text-text-primary rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="">{lang === "vi" ? "Tất cả điểm đến" : "All Destinations"}</option>
              {destinations.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {lang === "vi" ? dest.name.vi : dest.name.en}
                </option>
              ))}
            </select>
          </div>

          {/* Tour type select */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
              Tour Style
            </label>
            <div className="flex flex-col gap-2">
              {[
                { value: "all", label: lang === "vi" ? "Tất cả phong cách" : "All Styles" },
                { value: "heritage", label: lang === "vi" ? "Văn hóa & Di sản" : "Culture & Heritage" },
                { value: "adventure", label: lang === "vi" ? "Thiên nhiên & Thám hiểm" : "Nature & Adventure" },
                { value: "cruise", label: lang === "vi" ? "Du thuyền nghỉ dưỡng" : "Luxury Cruising" }
              ].map((styleOption) => (
                <label key={styleOption.value} className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-text-primary select-none">
                  <input
                    type="radio"
                    name="tour-style-filter"
                    value={styleOption.value}
                    checked={selectedType === styleOption.value}
                    onChange={() => setSelectedType(styleOption.value)}
                    className="text-primary focus:ring-primary border-border-nature"
                  />
                  <span>{styleOption.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Listings Grid (cols 9) */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTours.map((tour) => {
                const inWishlist = wishlist.includes(tour.id);
                return (
                  <div
                    key={tour.id}
                    className="bg-nature-white rounded-3xl border border-border-nature shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md hover:border-border-nature/80"
                  >
                    <div className="h-56 w-full overflow-hidden relative">
                      <img
                        src={tour.image}
                        alt={tour.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      />
                      {/* Heart tag */}
                      <button
                        onClick={() => toggleWishlist(tour.id)}
                        className="absolute top-4 left-4 p-2 bg-[#FCFDFB]/80 hover:bg-[#FCFDFB] backdrop-blur-md rounded-full shadow-sm text-text-primary focus:outline-none transition-colors"
                        aria-label="Toggle Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${inWishlist ? "fill-accent-coral text-accent-coral" : "text-text-primary"}`} />
                      </button>
                      <div className="absolute bottom-4 left-4 bg-secondary text-white px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                        {tour.difficulty[lang]}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between gap-5 flex-grow">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-2 text-xs font-bold text-accent">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <span>{tour.rating}</span>
                          </div>
                          <span className="text-[10px] text-text-secondary font-medium">
                            {tour.reviewCount} reviews
                          </span>
                        </div>
                        <h3 className="font-playfair text-xl font-bold text-text-primary leading-snug group-hover:text-primary transition-colors">
                          <Link href={`/${lang}/tours/${tour.id}`}>{tour.title[lang]}</Link>
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mt-1">
                          {tour.description[lang]}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-border-nature/40 pt-4 mt-2">
                        <div className="flex items-center gap-1.5 text-xs text-text-secondary font-semibold">
                          <Clock className="w-4 h-4 text-secondary" />
                          <span>{tour.duration} {t("ui.days")} / {tour.duration - 1} {lang === "vi" ? "đêm" : "nights"}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] uppercase tracking-wider text-text-secondary font-bold">
                            Per Person
                          </span>
                          <span className="text-lg font-bold font-playfair text-text-primary">
                            {formatPrice(tour.priceUSD)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="border border-border-nature border-dashed rounded-3xl p-16 flex flex-col items-center gap-4 text-center max-w-xl mx-auto bg-nature-white">
              <Compass className="w-12 h-12 text-text-secondary/50 animate-pulse" />
              <div>
                <h4 className="font-playfair text-xl font-bold text-text-primary">
                  No Tours Match Your Filters
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  Try clearing your search terms or choosing an alternative travel region.
                </p>
              </div>
              <button
                onClick={clearFilters}
                className="px-5 py-2.5 bg-secondary text-white font-semibold text-xs rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

import { Suspense } from "react";

export default function ToursPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-xs font-bold text-text-secondary">Loading tours catalog...</div>}>
      <ToursPageContent params={params} />
    </Suspense>
  );
}

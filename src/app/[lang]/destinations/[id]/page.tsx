"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { destinations, tours, resorts, Destination, Tour, Resort } from "@/data/mockData";
import { Star, Clock, ChevronLeft, MapPin, Check } from "lucide-react";
import { TraditionalCloud, LotusDivider } from "@/components/ui/TraditionalMotifs";

interface PageProps {
  params: Promise<{ lang: string; id: string }>;
}

export default function DestinationDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const id = resolvedParams.id;
  const { formatPrice, t } = useApp();

  const [destination, setDestination] = useState<Destination | null>(null);
  const [localTours, setLocalTours] = useState<Tour[]>([]);
  const [localResorts, setLocalResorts] = useState<Resort[]>([]);

  useEffect(() => {
    const dest = destinations.find((d) => d.id === id);
    if (dest) {
      setDestination(dest);
      // Filter tours and resorts belonging to this destination
      setLocalTours(tours.filter((t) => t.destinations.includes(id)));
      setLocalResorts((resorts || []).filter((r) => r.destinationId === id));
    }
  }, [id]);

  if (!destination) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#FCFDFB]">
        <h2 className="font-playfair text-2xl font-bold">Destination Not Found</h2>
        <Link href={`/${lang}/destinations`} className="text-sm font-bold text-primary hover:underline">
          Return to all destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFDFB] min-h-screen relative overflow-hidden">
      {/* Decorative Cloud Motifs in Background */}
      <TraditionalCloud className="absolute right-[-10%] top-[40%] w-[340px] h-[170px] text-secondary/[0.04] pointer-events-none select-none hidden md:block animate-float-slow" />
      <TraditionalCloud className="absolute left-[-8%] bottom-[20%] w-[380px] h-[190px] text-primary/[0.03] pointer-events-none select-none hidden md:block animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] w-full flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destination.image}
            alt={destination.name[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Back Link */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <Link
            href={`/${lang}/destinations`}
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-black/35 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 hover:bg-black/50 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>All Destinations</span>
          </Link>
        </div>

        {/* Header Details */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-white">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="text-xs font-bold uppercase text-accent tracking-wider">
              {destination.region[lang]}
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-black tracking-tight leading-tight">
              {destination.name[lang]}
            </h1>
            <span className="text-xs text-white/80 font-medium flex items-center gap-1.5 mt-1.5">
              <MapPin className="w-4 h-4 text-accent" /> Best Season: {destination.bestTime ? destination.bestTime[lang] : (lang === "vi" ? "Quanh năm" : "Year-round")}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-accent/25 border border-accent/30 px-3.5 py-1 rounded-full text-xs font-bold text-white self-start md:self-auto">
            <Star className="w-3.5 h-3.5 fill-accent text-accent animate-pulse" />
            <span>{destination.rating} / 5.0 Rating</span>
          </div>
        </div>
      </section>

      {/* Main details Split Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Overview & Highlights (cols 8) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-playfair text-2xl font-bold text-text-primary">
                Regional Overview
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed font-medium">
                {destination.description[lang]}
              </p>
            </div>

            <LotusDivider className="my-6 opacity-40" />

            {/* Highlights bullet grid */}
            <div className="flex flex-col gap-4">
              <h2 className="font-playfair text-xl font-bold text-text-primary">
                Signature Sights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(destination.highlights || []).map((hl: any, i: number) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-text-primary font-medium">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span>{hl[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Tours Showcase */}
            {localTours.length > 0 && (
              <div className="flex flex-col gap-6 border-t border-border-nature/40 pt-10">
                <h2 className="font-playfair text-2xl font-bold text-text-primary">
                  Available Signature Tours
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {localTours.map((tour) => (
                    <div
                      key={tour.id}
                      className="bg-nature-white border border-border-nature rounded-3xl overflow-hidden shadow-sm flex flex-col group"
                    >
                      <div className="h-48 w-full overflow-hidden relative">
                        <img
                          src={tour.image}
                          alt={tour.title[lang]}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                        />
                      </div>
                      <div className="p-5 flex flex-col justify-between gap-4 flex-grow">
                        <div className="flex flex-col gap-1">
                          <h4 className="font-playfair text-lg font-bold text-text-primary leading-snug group-hover:text-primary transition-colors">
                            <Link href={`/${lang}/tours/${tour.id}`}>{tour.title[lang]}</Link>
                          </h4>
                          <span className="text-xs text-text-secondary font-semibold">
                            {tour.duration} Days / {tour.groupSize[lang]}
                          </span>
                        </div>
                        <div className="flex items-center justify-between border-t border-border-nature/40 pt-3 mt-1">
                          <span className="text-base font-bold font-playfair text-text-primary">
                            {formatPrice(tour.priceUSD)}
                          </span>
                          <Link
                            href={`/${lang}/tours/${tour.id}`}
                            className="px-3.5 py-2 bg-secondary text-white text-xs font-bold rounded-lg"
                          >
                            Explore Tour
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Resorts Showcase in Destination (cols 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 bg-nature-white border border-border-nature/40 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-text-secondary border-b border-border-nature/40 pb-3">
              Luxury Stays Nearby
            </h3>

            {localResorts.length > 0 ? (
              <div className="flex flex-col gap-6">
                {localResorts.map((res) => (
                  <div key={res.id} className="flex flex-col gap-3 group">
                    <div className="h-40 w-full rounded-2xl overflow-hidden relative">
                      <img
                        src={res.image}
                        alt={res.name[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-playfair text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                        <Link href={`/${lang}/resorts`}>{res.name[lang]}</Link>
                      </h4>
                      <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">
                        From {formatPrice(res.priceUSD)} / night
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-xs text-text-secondary italic">No local resorts listed for this region.</span>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

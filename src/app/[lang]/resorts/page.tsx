"use client";

import React, { use } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { resorts } from "@/data/mockData";
import { Star, MapPin, Award } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function ResortsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { formatPrice, t } = useApp();

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block mb-1">
            Indulge in Nature
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-black text-text-primary leading-tight">
            Sanctuaries & Resorts
          </h1>
          <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
            Unwind in world-class boutique hotels, eco-lodges, and luxury beach villas designed in harmony with Vietnam's forests, mountains, and oceans.
          </p>
        </div>

        {/* Resorts List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resorts.map((res) => (
            <div
              key={res.id}
              className="bg-nature-white border border-border-nature rounded-3xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:shadow-md"
            >
              <div className="h-72 w-full overflow-hidden relative">
                <img
                  src={res.image}
                  alt={res.name[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 right-4 bg-[#FCFDFB]/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-accent flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-accent" />
                  <span>{res.rating} Rating</span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between gap-5 flex-grow">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    <span>{res.location[lang]}</span>
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {res.name[lang]}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-medium">
                    {res.description[lang]}
                  </p>

                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-text-secondary">Signature Amenities</span>
                    <div className="flex flex-wrap gap-2">
                      {res.amenities.map((am, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-soft-mint text-secondary px-2.5 py-1 rounded-lg">
                          {am[lang]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border-nature/40 pt-5 flex items-center justify-between mt-1">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-text-secondary font-bold">Price From</span>
                    <span className="text-xl font-bold font-playfair text-text-primary">{formatPrice(res.priceUSD)} <span className="text-xs text-text-secondary font-normal font-sans">/ night</span></span>
                  </div>
                  <Link
                    href={`/${lang}/tours`}
                    className="px-5 py-3 bg-secondary hover:bg-secondary/95 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
                  >
                    Explore Packages
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

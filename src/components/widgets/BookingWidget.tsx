"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Calendar, User, Compass, ArrowRight, DollarSign } from "lucide-react";
import { destinations } from "@/data/mockData";

interface BookingWidgetProps {
  layout?: "hero" | "sidebar";
  tourId?: string;
  basePrice?: number;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  layout = "hero",
  tourId,
  basePrice = 299,
}) => {
  const { lang, formatPrice, t } = useApp();
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [tourType, setTourType] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (layout === "hero") {
      // Build search query and redirect to tours listing
      const query = new URLSearchParams();
      if (destination) query.append("destination", destination);
      if (date) query.append("date", date);
      if (guests > 1) query.append("guests", guests.toString());
      if (tourType !== "all") query.append("type", tourType);
      
      router.push(`/${lang}/tours?${query.toString()}`);
    } else {
      // Redirect to checkout with details
      const query = new URLSearchParams({
        tourId: tourId || "custom",
        date: date || new Date().toISOString().split("T")[0],
        guests: guests.toString(),
        totalPrice: (basePrice * guests).toString(),
      });
      router.push(`/${lang}/checkout?${query.toString()}`);
    }
  };

  if (layout === "sidebar") {
    // Sidebar Style (Vertical Reservation Card)
    return (
      <div className="glassmorphism-card rounded-3xl p-6 border border-border-nature/40 shadow-md flex flex-col gap-5 sticky top-24">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">
            {t("ui.price")}
          </span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-2xl font-bold font-playfair text-text-primary">
              {formatPrice(basePrice)}
            </span>
            <span className="text-xs text-text-secondary">/ {t("ui.perPerson")}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Date Selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-text-secondary flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-secondary" />
              <span>{t("hero.widget.date")}</span>
            </label>
            <input
              type="date"
              required
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl border border-border-nature bg-nature-white text-text-primary focus:outline-none focus:border-primary"
            />
          </div>

          {/* Guests Selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-text-secondary flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-secondary" />
              <span>{t("hero.widget.guests")}</span>
            </label>
            <div className="flex items-center justify-between border border-border-nature rounded-xl px-3 py-2 bg-nature-white">
              <span className="text-xs font-semibold text-text-primary">
                {guests} {guests === 1 ? "Traveler" : "Travelers"}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-6 h-6 rounded bg-border-nature hover:bg-border-nature/80 text-text-primary text-xs font-bold flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => setGuests(guests + 1)}
                  className="w-6 h-6 rounded bg-border-nature hover:bg-border-nature/80 text-text-primary text-xs font-bold flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="border-t border-border-nature/60 pt-4 flex flex-col gap-2 text-xs">
            <div className="flex justify-between text-text-secondary">
              <span>{formatPrice(basePrice)} x {guests} {guests === 1 ? "guest" : "guests"}</span>
              <span>{formatPrice(basePrice * guests)}</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Local environment tax (5%)</span>
              <span>{formatPrice(basePrice * guests * 0.05)}</span>
            </div>
            <div className="flex justify-between font-bold text-text-primary border-t border-border-nature/40 pt-2.5 mt-1 text-sm">
              <span>Total Price</span>
              <span>{formatPrice(basePrice * guests * 1.05)}</span>
            </div>
          </div>

          {/* Book trigger */}
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/95 text-white py-3.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm"
          >
            <span>{t("ui.bookNow")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  // Hero Style (Horizontal Float Bar)
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full glassmorphism p-4 rounded-3xl border border-white/20 shadow-xl flex flex-col xl:flex-row gap-4 items-stretch xl:items-center relative z-20"
    >
      {/* Destination Dropdown */}
      <div className="flex-1 flex flex-col gap-1 px-4 py-2 border-b xl:border-b-0 xl:border-r border-border-nature/30">
        <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-primary" />
          <span>{t("hero.widget.destination")}</span>
        </label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="bg-transparent border-0 text-text-primary text-xs font-semibold focus:outline-none cursor-pointer pr-4"
        >
          <option value="" className="text-text-primary">{lang === "vi" ? "Tất cả điểm đến" : "All Destinations"}</option>
          {destinations.map((dest) => (
            <option key={dest.id} value={dest.id} className="text-text-primary">
              {lang === "vi" ? dest.name.vi : dest.name.en}
            </option>
          ))}
        </select>
      </div>

      {/* Date Input */}
      <div className="flex-1 flex flex-col gap-1 px-4 py-2 border-b xl:border-b-0 xl:border-r border-border-nature/30">
        <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span>{t("hero.widget.date")}</span>
        </label>
        <input
          type="date"
          value={date}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDate(e.target.value)}
          className="bg-transparent border-0 text-text-primary text-xs font-semibold focus:outline-none cursor-pointer"
        />
      </div>

      {/* Guests Counter */}
      <div className="flex-1 flex flex-col gap-1 px-4 py-2 border-b xl:border-b-0 xl:border-r border-border-nature/30">
        <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-primary" />
          <span>{t("hero.widget.guests")}</span>
        </label>
        <select
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          className="bg-transparent border-0 text-text-primary text-xs font-semibold focus:outline-none cursor-pointer pr-4"
        >
          <option value="1">1 {lang === "vi" ? "Khách" : "Traveler"}</option>
          <option value="2">2 {lang === "vi" ? "Khách" : "Travelers"}</option>
          <option value="4">4 {lang === "vi" ? "Khách" : "Travelers"}</option>
          <option value="6">6 {lang === "vi" ? "Khách" : "Travelers"}</option>
          <option value="8">8+ {lang === "vi" ? "Khách" : "Travelers"}</option>
        </select>
      </div>

      {/* Tour Category */}
      <div className="flex-1 flex flex-col gap-1 px-4 py-2">
        <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest flex items-center gap-1.5">
          <DollarSign className="w-3.5 h-3.5 text-primary" />
          <span>{t("hero.widget.type")}</span>
        </label>
        <select
          value={tourType}
          onChange={(e) => setTourType(e.target.value)}
          className="bg-transparent border-0 text-text-primary text-xs font-semibold focus:outline-none cursor-pointer pr-4"
        >
          <option value="all">{lang === "vi" ? "Tất cả" : "All Types"}</option>
          <option value="heritage">{lang === "vi" ? "Văn hóa di sản" : "Culture & Heritage"}</option>
          <option value="adventure">{lang === "vi" ? "Thám hiểm tự nhiên" : "Adventure & Nature"}</option>
          <option value="cruise">{lang === "vi" ? "Du thuyền cao cấp" : "Luxury Cruising"}</option>
        </select>
      </div>

      {/* Search trigger */}
      <button
        type="submit"
        className="px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 transition-all self-center xl:self-auto xl:h-full shrink-0 shadow-md shadow-primary/20"
      >
        <span>{t("hero.widget.search")}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

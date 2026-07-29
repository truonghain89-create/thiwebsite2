"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Language, getTranslation } from "@/data/translations";

export type { Language };

export type Booking = {
  id: string;
  title: string;
  date: string;
  guests: number;
  price: number;
  status: string;
  customerName?: string;
  customerEmail?: string;
};

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  scrollProgress: number;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (tourId: string) => void;
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, "id" | "status">) => void;
  formatPrice: (price: number) => string;
  currency: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({
  children,
  initialLang = "vi",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLang] = useState<Language>(initialLang);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "vi" ? "en" : "vi"));
  }, []);

  const t = useCallback(
    (key: string) => getTranslation(key, lang),
    [lang]
  );

  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  }, []);

  const currency = lang === "vi" ? "VND" : "USD";

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("vietnam_travel_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedBookings = localStorage.getItem("vietnam_travel_bookings");
      if (savedBookings) setBookings(JSON.parse(savedBookings));
    } catch (e) {
      console.error("Failed to load state from localStorage", e);
    }
  }, []);

  const toggleWishlist = useCallback((tourId: string) => {
    setWishlist((prev) => {
      const next = prev.includes(tourId) ? prev.filter((id) => id !== tourId) : [...prev, tourId];
      try {
        localStorage.setItem("vietnam_travel_wishlist", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  }, []);

  const addBooking = useCallback((booking: Omit<Booking, "id" | "status">) => {
    setBookings((prev) => {
      const newBooking: Booking = {
        ...booking,
        id: `bk-${Math.random().toString(36).substr(2, 9)}`,
        status: "confirmed",
      };
      const next = [...prev, newBooking];
      try {
        localStorage.setItem("vietnam_travel_bookings", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        scrollProgress,
        isMobileMenuOpen,
        setMobileMenuOpen,
        wishlist,
        toggleWishlist,
        bookings,
        addBooking,
        formatPrice,
        currency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

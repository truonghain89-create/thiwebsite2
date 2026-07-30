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

export type ModalType = "booking" | "auth" | "blog" | "contact" | "none";

export type BookingModalData = {
  tourName: string;
  priceVND: number;
};

export type BlogModalData = {
  title: string;
  category: string;
  date: string;
  content: string;
  image: string;
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
  formatPrice: (priceVND: number) => string;
  currency: "vnd" | "usd";
  setCurrency: (c: "vnd" | "usd") => void;
  toggleCurrency: () => void;
  // Modal management
  activeModal: ModalType;
  bookingModalData: BookingModalData | null;
  blogModalData: BlogModalData | null;
  openBookingModal: (tourName: string, priceVND: number) => void;
  openAuthModal: (tab?: "login" | "register") => void;
  openBlogModal: (data: BlogModalData) => void;
  openContactModal: () => void;
  closeModal: () => void;
  authTab: "login" | "register";
  setAuthTab: (tab: "login" | "register") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const EXCHANGE_RATE = 25000; // 1 USD = 25,000 VND

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
  const [currency, setCurrencyState] = useState<"vnd" | "usd">("vnd");
  // Modal state
  const [activeModal, setActiveModal] = useState<ModalType>("none");
  const [bookingModalData, setBookingModalData] = useState<BookingModalData | null>(null);
  const [blogModalData, setBlogModalData] = useState<BlogModalData | null>(null);
  const [authTab, setAuthTab] = useState<"login" | "register">("login");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "vi" ? "en" : "vi"));
  }, []);

  const t = useCallback(
    (key: string) => getTranslation(key, lang),
    [lang]
  );

  const setCurrency = useCallback((c: "vnd" | "usd") => {
    setCurrencyState(c);
  }, []);

  const toggleCurrency = useCallback(() => {
    setCurrencyState((prev) => (prev === "vnd" ? "usd" : "vnd"));
  }, []);

  const formatPrice = useCallback((priceVND: number) => {
    if (currency === "usd") {
      const usd = Math.ceil(priceVND / EXCHANGE_RATE);
      return `$${usd}`;
    }
    return new Intl.NumberFormat("vi-VN").format(priceVND) + "đ";
  }, [currency]);

  // Modal functions
  const openBookingModal = useCallback((tourName: string, priceVND: number) => {
    setBookingModalData({ tourName, priceVND });
    setActiveModal("booking");
  }, []);

  const openAuthModal = useCallback((tab: "login" | "register" = "login") => {
    setAuthTab(tab);
    setActiveModal("auth");
  }, []);

  const openBlogModal = useCallback((data: BlogModalData) => {
    setBlogModalData(data);
    setActiveModal("blog");
  }, []);

  const openContactModal = useCallback(() => {
    setActiveModal("contact");
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal("none");
    setBookingModalData(null);
    setBlogModalData(null);
  }, []);

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

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || activeModal !== "none") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, activeModal]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

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
        setCurrency,
        toggleCurrency,
        activeModal,
        bookingModalData,
        blogModalData,
        openBookingModal,
        openAuthModal,
        openBlogModal,
        openContactModal,
        closeModal,
        authTab,
        setAuthTab,
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

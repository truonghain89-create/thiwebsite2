"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Search, Globe, CircleDollarSign, Menu, X, ChevronDown, MapPin,
} from "lucide-react";

const destinations = {
  north: [
    { label: { vi: "Vịnh Hạ Long", en: "Ha Long Bay" }, href: "#destinations" },
    { label: { vi: "Sa Pa", en: "Sapa" }, href: "#destinations" },
    { label: { vi: "Hà Giang", en: "Ha Giang" }, href: "#destinations" },
  ],
  central: [
    { label: { vi: "Đà Nẵng", en: "Da Nang" }, href: "#destinations" },
    { label: { vi: "Hội An", en: "Hoi An" }, href: "#destinations" },
    { label: { vi: "Huế", en: "Hue" }, href: "#destinations" },
  ],
  south: [
    { label: { vi: "Phú Quốc", en: "Phu Quoc" }, href: "#destinations" },
    { label: { vi: "Côn Đảo", en: "Con Dao" }, href: "#destinations" },
    { label: { vi: "Cần Thơ", en: "Can Tho" }, href: "#destinations" },
  ],
};

export function Header() {
  const { t, lang, toggleLang, currency, toggleCurrency, scrollProgress, openAuthModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuLinkClass = isScrolled
    ? "text-text hover:bg-primary/5"
    : "text-white hover:bg-white/10";

  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.tours", href: "#tours" },
    { key: "nav.combo", href: "#combo" },
    { key: "nav.blog", href: "#blog" },
    { key: "nav.contact", href: "#cta" },
  ];

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[4px] z-[60] gradient-primary transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-strong shadow-soft py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container-main flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className={`flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${isScrolled ? "text-primary" : "text-white"}`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l7 4-3.5 3.5-2.2-.6-1.2 1.2 3.4 1.2 1.2 3.4 1.2-1.1-.6-2.2L12 14l4 7c.4-.2.7-.6.6-1.1z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-black text-xl md:text-[22px] leading-none tracking-tight ${isScrolled ? "text-text" : "text-white"}`}>
                Vietnam<span className="text-primary-light">Tours</span><span className="text-amber-gold">.</span>
              </span>
              <span className={`text-[8px] md:text-[9px] font-bold tracking-[0.25em] uppercase mt-1 ${isScrolled ? "text-text-light" : "text-white/70"}`}>
                Premium Travel
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-0.5 px-2 py-1.5 rounded-full border ${
            isScrolled ? "border-border-light glass-strong" : "border-white/10 glass"
          }`}>
            <a href="#hero" className={`menu-item px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${menuLinkClass}`}>
              {t("nav.home")}
            </a>

            {/* Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className={`menu-item flex items-center gap-1 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${menuLinkClass}`}>
                <span>{t("nav.destinations")}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] glass-strong rounded-[32px] shadow-hover p-8 transition-all duration-300 ${
                isMegaMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
              }`}>
                <div className="grid grid-cols-3 gap-8 text-left text-text">
                  {(["north", "central", "south"] as const).map((region) => (
                    <div key={region}>
                      <h4 className="font-heading font-bold text-xs text-primary uppercase tracking-widest mb-4 border-b border-primary/10 pb-2">
                        {lang === "vi" ? { north: "Miền Bắc", central: "Miền Trung", south: "Miền Nam" }[region] : { north: "Northern", central: "Central", south: "Southern" }[region]}
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {destinations[region].map((dest) => (
                          <a key={dest.label.vi} href={dest.href}
                            className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            {dest.label[lang]}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <a key={item.key} href={item.href}
                className={`menu-item px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${menuLinkClass}`}>
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Search */}
            <button onClick={() => setSearchOpen(!isSearchOpen)}
              className={`p-2.5 rounded-full transition-all border ${isScrolled ? "border-border-light text-text hover:bg-primary/5" : "border-white/20 text-white hover:bg-white/10"}`}>
              <Search className="w-4 h-4" />
            </button>

            {/* Currency */}
            <button onClick={toggleCurrency}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold border transition-all ${isScrolled ? "border-border-light text-text hover:bg-primary/5" : "border-white/20 text-white hover:bg-white/10"}`}>
              <CircleDollarSign className="w-4 h-4" />
              <span>{currency.toUpperCase()}</span>
            </button>

            {/* Language */}
            <button onClick={toggleLang}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold border transition-all ${isScrolled ? "border-border-light text-text hover:bg-primary/5" : "border-white/20 text-white hover:bg-white/10"}`}>
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Auth buttons */}
            <button onClick={() => openAuthModal("login")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${isScrolled ? "border-border-light text-text hover:bg-primary/5" : "border-white/20 text-white hover:bg-white/10"}`}>
              {t("auth.login")}
            </button>
            <button onClick={() => openAuthModal("register")}
              className="px-6 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all">
              {t("auth.register")}
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-2xl transition-all ${isScrolled ? "text-text hover:bg-primary/5" : "text-white hover:bg-white/10"}`}>
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Search overlay */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 z-30 bg-white/95 backdrop-blur-md shadow-soft border-b border-border-light py-4 px-6 rounded-b-3xl">
              <div className="max-w-2xl mx-auto flex items-center gap-3">
                <div className="flex-grow flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-bg border border-border-light">
                  <Search className="w-4 h-4 text-primary" />
                  <input
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Tìm kiếm tour, điểm đến (Hạ Long, Sapa...)"
                    className="w-full text-xs text-text bg-transparent outline-none font-semibold"
                    onKeyDown={(e) => e.key === "Enter" && setSearchOpen(false)}
                  />
                </div>
                <button onClick={() => setSearchOpen(false)}
                  className="px-5 py-2.5 rounded-2xl bg-primary text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-colors">
                  Tìm
                </button>
                <button onClick={() => setSearchOpen(false)} className="p-2.5 rounded-2xl text-text hover:bg-bg transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-bg z-40 flex flex-col pt-24 px-8 gap-6 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-2">
            {[{ key: "nav.home", href: "#hero" }, ...navItems.slice(1), { key: "nav.destinations", href: "#destinations" }].map((item) => (
              <a key={item.key} href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 px-4 text-base font-bold text-text hover:bg-primary/5 rounded-2xl transition-colors">
                {t(item.key)}
              </a>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4 pb-12">
            <button onClick={() => { toggleLang(); setMobileOpen(false); }}
              className="py-3.5 rounded-full border border-border-light text-sm font-bold text-text flex items-center justify-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              {lang === "vi" ? "English" : "Tiếng Việt"}
            </button>
            <button onClick={() => { openAuthModal("register"); setMobileOpen(false); }}
              className="py-3.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors">
              {t("auth.register")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

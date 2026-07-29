"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { megaMenuData } from "@/data/mockData";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  User,
  MapPin,
} from "lucide-react";

export function Header() {
  const { lang, toggleLang, t, scrollProgress, isMobileMenuOpen, setMobileMenuOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { key: "nav.home", href: "#" },
    { key: "nav.destinations", href: "#destinations", hasMega: true },
    { key: "nav.tours", href: "#tours" },
    { key: "nav.combo", href: "#combo" },
    { key: "nav.promotions", href: "#promotions" },
    { key: "nav.blog", href: "#blog" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong shadow-soft py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-main">
          <nav className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2 shrink-0 group">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.9"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-extrabold text-lg leading-tight tracking-tight ${isScrolled ? "text-text" : "text-white"}`}>
                  Vietnam
                </span>
                <span className={`text-[10px] font-heading font-bold tracking-widest uppercase ${isScrolled ? "text-primary" : "text-accent"}`}>
                  Tours
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={megaMenuRef}>
              {navItems.map((item) => (
                <div key={item.key} className="relative">
                  {item.hasMega ? (
                    <button
                      onClick={() => setMegaMenuOpen(!isMegaMenuOpen)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isScrolled
                          ? "text-text hover:text-primary hover:bg-primary/5"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {t(item.key)}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isScrolled
                          ? "text-text hover:text-primary hover:bg-primary/5"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {item.hasMega && (
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] glass-strong rounded-3xl shadow-hover p-8"
                        >
                          <div className="grid grid-cols-3 gap-8">
                            {megaMenuData.map((region) => (
                              <div key={region.title.en} className="flex flex-col gap-3">
                                <h3 className="font-heading font-bold text-sm text-primary uppercase tracking-wide">
                                  {region.title[lang]}
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                  {region.items.map((item) => (
                                    <Link
                                      key={item.slug}
                                      href={`#${item.slug}`}
                                      onClick={() => setMegaMenuOpen(false)}
                                      className="flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-primary/5 transition-colors group"
                                    >
                                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
                                        <img
                                          src={item.image}
                                          alt={item.name[lang]}
                                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                      </div>
                                      <span className="text-sm text-text group-hover:text-primary transition-colors font-medium">
                                        {item.name[lang]}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  isScrolled
                    ? "text-text-secondary hover:text-primary hover:bg-primary/5 border border-border"
                    : "text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === "vi" ? "VI" : "EN"}</span>
              </button>

              {/* Auth Buttons */}
              <Link
                href="#"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isScrolled
                    ? "text-text hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <User className="w-4 h-4" />
                {t("auth.login")}
              </Link>
              <Link
                href="#"
                className="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                {t("auth.register")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isScrolled ? "text-text hover:bg-primary/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
            >
              {/* Mobile Nav Items */}
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-4 px-4 text-lg font-heading font-bold text-text hover:text-primary hover:bg-primary/5 rounded-2xl transition-colors"
                    >
                      {t(item.key)}
                      {item.hasMega && <ChevronDown className="w-5 h-5 text-text-light" />}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Destinations */}
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 px-4">
                  {t("destinations.eyebrow")}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {megaMenuData.flatMap((r) => r.items).slice(0, 8).map((item) => (
                    <Link
                      key={item.slug}
                      href={`#${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-primary/5 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="text-sm font-medium text-text">{item.name[lang]}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="mt-auto pt-6 flex flex-col gap-3">
                <button
                  onClick={toggleLang}
                  className="flex items-center justify-center gap-2 py-3 rounded-full border border-border text-sm font-bold text-text"
                >
                  <Globe className="w-4 h-4" />
                  {lang === "vi" ? "English" : "Tiếng Việt"}
                </button>
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 rounded-full border border-border text-sm font-bold text-text hover:bg-primary/5 transition-colors"
                >
                  {t("auth.login")}
                </Link>
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors"
                >
                  {t("auth.register")}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

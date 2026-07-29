"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { ScrollAnimator } from "@/components/ui/ScrollAnimator";
import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

export function Footer() {
  const { t, lang } = useApp();

  const footerDests = [
    { vi: "Vịnh Hạ Long", en: "Ha Long Bay" },
    { vi: "Hội An", en: "Hoi An" },
    { vi: "Sa Pa", en: "Sapa" },
    { vi: "Phú Quốc", en: "Phu Quoc" },
    { vi: "Đà Nẵng", en: "Da Nang" },
    { vi: "Ninh Bình", en: "Ninh Binh" },
  ];

  return (
    <footer className="bg-bg-dark text-white relative overflow-hidden">
      {/* Organic Decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 organic-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 organic-blob-2 pointer-events-none" />

      {/* Newsletter Section */}
      <div className="border-b border-border-dark">
        <div className="container-main py-16">
          <ScrollAnimator animation="fadeUp">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h3 className="font-heading font-bold text-2xl">{t("footer.newsletter.title")}</h3>
                <p className="text-white/60 text-sm">{t("footer.newsletter.desc")}</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  className="flex-1 md:w-72 px-5 py-3 rounded-full bg-white/8 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button className="px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-light transition-colors flex items-center gap-2 shrink-0">
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">{t("footer.newsletter.button")}</span>
                </button>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.9"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg leading-tight">Vietnam</span>
                <span className="text-[10px] font-heading font-bold tracking-widest uppercase text-accent">Tours</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {t("footer.about.desc")}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/8 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/8 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/8 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Youtube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/80">
              {t("footer.destinations.title")}
            </h4>
            <div className="flex flex-col gap-2.5">
              {footerDests.map((dest) => (
                <Link
                  key={dest.en}
                  href="#"
                  className="text-white/50 text-sm hover:text-accent transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-3 h-3 text-primary/60" />
                  {dest[lang]}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/80">
              {t("footer.services.title")}
            </h4>
            <div className="flex flex-col gap-2.5">
              {["privateTour", "groupTour", "honeymoon", "teamBuilding", "mice"].map((key) => (
                <Link
                  key={key}
                  href="#"
                  className="text-white/50 text-sm hover:text-accent transition-colors"
                >
                  {t(`footer.services.${key}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/80">
              {t("footer.contact.title")}
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{t("footer.contact.address")}</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{t("footer.contact.phone")}</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{t("footer.contact.email")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-dark">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              {lang === "vi" ? "Chính sách bảo mật" : "Privacy Policy"}
            </Link>
            <Link href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              {lang === "vi" ? "Điều khoản sử dụng" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

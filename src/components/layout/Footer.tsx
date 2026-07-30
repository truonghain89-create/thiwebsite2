"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const partners = [
  { name: "Vietnam Airlines", color: "#0f3d5f" },
  { name: "Vietjet Air", color: "#d81e26" },
  { name: "Bamboo Airways", color: "#005f3f" },
  { name: "Vinpearl Resorts", color: "#b8860b" },
  { name: "Mường Thanh", color: "#8a6d3b" },
  { name: "Saigontourist", color: "#0070c0" },
];

export function Footer() {
  const { t, lang } = useApp();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-bg-dark text-white relative overflow-hidden">
      {/* Wave pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-6 opacity-[0.15] pointer-events-none select-none z-10">
        <svg width="100%" height="24" className="text-amber-400">
          <defs>
            <pattern id="wavePattern" width="40" height="24" patternUnits="userSpaceOnUse">
              <path d="M0 24 Q10 12 20 24 Q30 12 40 24 M0 18 Q10 6 20 18 Q30 6 40 18" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="24" fill="url(#wavePattern)" />
        </svg>
      </div>

      {/* Partner Marquee */}
      <div className="py-16 border-b border-white/10 overflow-hidden">
        <div className="container-main flex flex-col items-center gap-8">
          <span className="text-[10px] font-bold text-text-light uppercase tracking-widest text-center">{t("partners.eyebrow")}</span>
          <div className="w-full relative overflow-hidden flex">
            <div className="flex gap-16 items-center animate-marquee shrink-0">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} style={{ color: p.color }}
                  className="font-heading font-extrabold text-lg opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 transform cursor-pointer whitespace-nowrap">
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-main pt-16 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 relative z-10">
        {/* Brand */}
        <div className="flex flex-col gap-4 text-left md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md shadow-primary/10 overflow-hidden border-2 border-white/20 select-none shrink-0">
              <img src="/logo-school.png" alt="Trường THPT Tam Hiệp Logo" className="w-full h-full object-contain p-0.5" />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-heading font-black text-lg leading-tight tracking-tight uppercase">
                Trường THPT<br /><span className="text-primary-light">Tam Hiệp</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-accent mt-1">Dạy tốt - Học tốt</span>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{t("footer.about.desc")}</p>

          {/* Newsletter */}
          <div className="mt-4 flex flex-col gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Đăng ký nhận bản tin</span>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input type="email" required placeholder="Email của bạn..."
                className="px-4 py-2.5 rounded-xl border border-white/10 outline-none text-xs bg-white/5 text-white placeholder-white/30 focus:border-primary flex-grow"
              />
              <button type="submit" className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all flex items-center justify-center">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Destinations */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white/80">{t("footer.destinations.title")}</h4>
          <div className="flex flex-col gap-3 text-white/50 text-sm font-semibold">
            {[
              { vi: "Vịnh Hạ Long", en: "Ha Long Bay" },
              { vi: "Sa Pa", en: "Sapa" },
              { vi: "Hội An", en: "Hoi An" },
              { vi: "Phú Quốc", en: "Phu Quoc" },
            ].map((d) => (
              <a key={d.vi} href="#destinations" className="hover:text-accent transition-colors">{d[lang]}</a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white/80">{t("footer.services.title")}</h4>
          <div className="flex flex-col gap-3 text-white/50 text-sm font-semibold">
            <a href="#" className="hover:text-accent transition-colors">{t("footer.services.privateTour")}</a>
            <a href="#" className="hover:text-accent transition-colors">{t("footer.services.groupTour")}</a>
            <a href="#" className="hover:text-accent transition-colors">{t("footer.services.honeymoon")}</a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white/80">{t("footer.contact.title")}</h4>
          <div className="flex flex-col gap-3 text-white/50 text-sm font-semibold">
            <span className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{t("footer.contact.address")}</span></span>
            <span className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-primary shrink-0" />{t("footer.contact.phone")}</span>
            <span className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-primary shrink-0" />{t("footer.contact.email")}</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <span>{t("footer.copyright")}</span>
        <div className="flex gap-6 font-semibold">
          <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

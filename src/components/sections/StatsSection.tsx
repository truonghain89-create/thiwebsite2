"use client";

import React, { useEffect, useRef, useState } from "react";
import { useApp } from "@/context/AppContext";

function useCountUp(target: number, duration: number = 2000, isFloat: boolean = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const start = () => {
    startRef.current = null;
    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = isFloat ? Math.round(eased * target * 10) / 10 : Math.floor(eased * target);
      setCount(value);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  return { count, start };
}

function StatItem({ target, suffix, label, icon, isFloat }: { target: number; suffix: string; label: string; icon: React.ReactElement; isFloat?: boolean }) {
  const { count, start } = useCountUp(target, 2500, isFloat);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        start();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [start]);

  return (
    <div ref={ref} className="flex flex-col gap-2 items-center">
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-3 border border-white/10 backdrop-blur-md">
        {icon}
      </div>
      <span className="text-3xl md:text-5xl font-extrabold font-heading tracking-tight">
        {isFloat ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </span>
      <span className="text-xs uppercase font-bold tracking-widest text-white/80">{label}</span>
    </div>
  );
}

export function StatsSection() {
  const { t } = useApp();

  const stats = [
    { target: 1000, suffix: "+", label: t("stats.tours"), isFloat: false, icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
    { target: 50000, suffix: "+", label: t("stats.customers"), isFloat: false, icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
    { target: 100, suffix: "+", label: t("stats.destinations"), isFloat: false, icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
    { target: 4.9, suffix: "★", label: t("stats.rating"), isFloat: true, icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  ];

  return (
    <section className="relative py-24 overflow-hidden text-white">
      <div className="absolute inset-0 gradient-primary animate-gradient z-0" />
      <div className="absolute inset-0 z-[1] opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((s, i) => (
            <StatItem key={i} target={s.target} suffix={s.suffix} label={s.label} icon={s.icon} isFloat={s.isFloat} />
          ))}
        </div>
      </div>
    </section>
  );
}

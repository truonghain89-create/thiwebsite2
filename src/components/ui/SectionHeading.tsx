"use client";

import { ScrollAnimator } from "./ScrollAnimator";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <ScrollAnimator animation="fadeUp" className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold tracking-wide uppercase font-heading">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-gentle" />
        {eyebrow}
      </span>
      <h2 className={`font-heading text-3xl md:text-[42px] lg:text-[48px] font-extrabold text-text leading-[1.15] tracking-tight whitespace-pre-line ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-secondary text-base md:text-lg leading-relaxed font-body max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </ScrollAnimator>
  );
}

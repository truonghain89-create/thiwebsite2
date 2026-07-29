"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AutoSliderProps {
  children: ReactNode[];
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export function AutoSlider({
  children,
  interval = 5000,
  showDots = true,
  showArrows = false,
  className = "",
}: AutoSliderProps) {
  const [current, setCurrent] = useState(0);
  const total = children.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {children[current]}
        </motion.div>
      </AnimatePresence>

      {showArrows && total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:bg-white/80 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text hover:bg-white/80 transition-colors"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </>
      )}

      {showDots && total > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-border hover:bg-text-light"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

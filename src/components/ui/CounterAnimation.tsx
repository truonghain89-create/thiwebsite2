"use client";

import { useEffect, useRef, useState } from "react";

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CounterAnimation({
  target,
  suffix = "",
  duration = 2000,
  className = "",
  decimals = 0,
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const startValue = 0;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = startValue + (target - startValue) * eased;

            setCount(Number(currentValue.toFixed(decimals)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [target, duration, hasAnimated, decimals]);

  const formatNumber = (num: number) => {
    if (decimals > 0) return num.toFixed(decimals);
    return num.toLocaleString();
  };

  return (
    <span ref={ref} className={className}>
      {formatNumber(count)}{suffix}
    </span>
  );
}

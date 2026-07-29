"use client";

import { useCallback, useRef, ReactNode, ButtonHTMLAttributes } from "react";

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
}

export function RippleButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = btnRef.current;
      if (!btn) return;

      // Create ripple
      const ripple = document.createElement("span");
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = "ripple-effect";

      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      onClick?.(e);
    },
    [onClick]
  );

  const baseClasses =
    "ripple-container relative inline-flex items-center justify-center gap-2 font-heading font-bold transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary";

  const sizeClasses = {
    sm: "px-5 py-2 text-xs rounded-full",
    md: "px-7 py-3 text-sm rounded-full",
    lg: "px-9 py-4 text-base rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]",
    secondary:
      "bg-secondary text-white hover:bg-secondary-light hover:shadow-lg active:scale-[0.97]",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.97]",
    ghost:
      "bg-transparent text-primary hover:bg-primary/5 active:scale-[0.97]",
    white:
      "bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm active:scale-[0.97]",
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

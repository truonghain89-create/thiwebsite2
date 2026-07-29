import React from "react";

interface MotifProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeWidth?: number;
}

// 1. Traditional Cloud Scroll (Vân mây cổ)
export const TraditionalCloud: React.FC<MotifProps> = ({ className = "text-secondary/10", strokeWidth = 1.2, ...rest }) => {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...rest}>
      <path
        d="M10 35 C10 20, 30 15, 45 28 C50 18, 70 15, 80 28 C90 28, 95 35, 90 42 C85 45, 60 45, 50 40 C40 45, 20 45, 10 35 Z"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path d="M22 35 C22 30, 32 30, 30 35 C28 40, 18 38, 20 32 C22 26, 38 25, 40 35" />
      <path d="M78 35 C78 30, 68 30, 70 35 C72 40, 82 38, 80 32 C78 26, 62 25, 60 35" />
    </svg>
  );
};

// 2. Dong Son Flying Crane Bird (Chim Lạc)
export const ChimLac: React.FC<MotifProps> = ({ className = "text-primary/10", strokeWidth = 1.5, ...rest }) => {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...rest}>
      <path
        d="M10 40 Q40 38 55 25 C65 12, 85 5, 95 5 C88 20, 80 32, 65 42 C80 43, 105 38, 115 32 C100 48, 85 52, 62 52 C52 65, 40 85, 32 95 C35 80, 30 65, 10 58 Z M95 5 L105 3 M95 5 L102 9"
        fill="currentColor"
        fillOpacity="0.08"
      />
    </svg>
  );
};

// 3. Lotus Divider (Hoa sen triều Nguyễn phân cách)
export const LotusDivider: React.FC<MotifProps> = ({ className = "my-10", strokeWidth = 1.5, ...rest }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className} pointer-events-none select-none`}>
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-secondary/30"></div>
      <svg className="w-7 h-7 text-secondary/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...rest}>
        <path d="M50 20 C53 38, 62 48, 50 82 C38 48, 47 38, 50 20 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M50 42 C32 32, 22 47, 34 65 C44 58, 48 52, 50 42 Z" fill="currentColor" fill-opacity="0.06" />
        <path d="M50 55 C18 45, 12 63, 24 75 C36 71, 46 63, 50 55 Z" fill="currentColor" fill-opacity="0.04" />
        <path d="M50 42 C68 32, 78 47, 66 65 C56 58, 52 52, 50 42 Z" fill="currentColor" fill-opacity="0.06" />
        <path d="M50 55 C82 45, 88 63, 76 75 C64 71, 54 63, 50 55 Z" fill="currentColor" fill-opacity="0.04" />
        <path d="M32 80 C40 85, 60 85, 68 80 C63 76, 37 76, 32 80 Z" fill="currentColor" fill-opacity="0.15" />
      </svg>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-secondary/30"></div>
    </div>
  );
};

// 4. Dong Son Bronze Drum Watermark (Mặt trống đồng Đông Sơn)
export const DongSonDrum: React.FC<MotifProps> = ({ className = "text-amber-500/10", strokeWidth = 0.5, ...rest }) => {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...rest}>
      <circle cx="100" cy="100" r="95" strokeDasharray="2 3" />
      <circle cx="100" cy="100" r="85" />
      <circle cx="100" cy="100" r="75" stroke-dasharray="4 2" />
      <circle cx="100" cy="100" r="60" />
      <circle cx="100" cy="100" r="45" stroke-dasharray="1 1" />
      <circle cx="100" cy="100" r="30" />
      {/* 12-point star in the center */}
      <polygon
        points="100,75 103,92 118,92 106,100 110,115 100,106 90,115 94,100 82,92 97,92"
        fill="currentColor"
        fillOpacity={0.35}
      />
      <path d="M100 15 A85 85 0 0 1 185 100" strokeDasharray="5 15" strokeWidth={1} />
      <path d="M185 100 A85 85 0 0 1 100 185" strokeDasharray="5 15" strokeWidth={1} />
      <path d="M100 185 A85 85 0 0 1 15 100" strokeDasharray="5 15" strokeWidth={1} />
      <path d="M15 100 A85 85 0 0 1 100 15" strokeDasharray="5 15" strokeWidth={1} />
    </svg>
  );
};

// 5. Repeating Wave Pattern (Sóng nước Thủy ba)
export const WavePattern: React.FC<MotifProps> = ({ className = "text-amber-500/15", ...rest }) => {
  const patternId = React.useId();
  return (
    <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden pointer-events-none select-none z-10">
      <svg width="100%" height="24" className={className} {...rest}>
        <pattern id={patternId} width="40" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 24 Q10 12 20 24 Q30 12 40 24 M0 18 Q10 6 20 18 Q30 6 40 18 M-10 24 Q0 12 10 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </pattern>
        <rect width="100%" height="24" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vietnam Tours – Khám phá vẻ đẹp Việt Nam",
  description:
    "Đơn vị lữ hành hàng đầu Việt Nam. Khám phá Hạ Long, Hội An, Sa Pa, Phú Quốc và hàng trăm điểm đến tuyệt vời với tour chất lượng cao, giá tốt nhất.",
  keywords: "du lịch Việt Nam, tour Việt Nam, Hạ Long, Hội An, Sa Pa, Phú Quốc, vietnam travel",
  openGraph: {
    title: "Vietnam Tours – Khám phá vẻ đẹp Việt Nam",
    description: "Khám phá vẻ đẹp Việt Nam với hàng nghìn tour chất lượng cao",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${manrope.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

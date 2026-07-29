import React from "react";
import { AppProvider, Language } from "@/context/AppContext";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "vi" },
    { lang: "ja" },
    { lang: "zh" },
    { lang: "ko" },
    { lang: "fr" },
    { lang: "de" },
  ];
}

export default async function LanguageLayout({ children, params }: Props) {
  const { lang } = await params;
  const typedLang = lang as Language;

  return (
    <AppProvider initialLang={typedLang}>
      <SmoothScroll>
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </SmoothScroll>
    </AppProvider>
  );
}

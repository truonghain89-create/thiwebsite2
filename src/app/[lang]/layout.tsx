import React from "react";
import { AppProvider, Language } from "@/context/AppContext";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ModalManager } from "@/components/modals/ModalManager";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "vi" },
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
        <ModalManager />
      </SmoothScroll>
    </AppProvider>
  );
}

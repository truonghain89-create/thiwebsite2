"use client";

import React, { use } from "react";
import { Language } from "@/context/AppContext";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection, LotusDivider } from "@/components/sections/CategoriesSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { SeasonalSection } from "@/components/sections/SeasonalSection";
import { ComboSection } from "@/components/sections/ComboSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BookingProcessSection } from "@/components/sections/BookingProcessSection";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function HomePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Categories */}
      <CategoriesSection />
      <LotusDivider />

      {/* 3. Destinations */}
      <DestinationsSection />
      <LotusDivider />

      {/* 4. Tours with region filter */}
      <ToursSection />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. Booking Process */}
      <BookingProcessSection />

      {/* 7. Seasonal */}
      <SeasonalSection />

      {/* 8. Combo */}
      <ComboSection />

      {/* 9. Experiences */}
      <ExperiencesSection />

      {/* 10. Stats */}
      <StatsSection />

      {/* 11. Blog */}
      <BlogSection />

      {/* 12. Testimonials */}
      <TestimonialsSection />

      {/* 13. CTA */}
      <CTASection />
    </div>
  );
}

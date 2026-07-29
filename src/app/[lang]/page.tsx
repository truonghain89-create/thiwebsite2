"use client";

import React, { use } from "react";
import { Language } from "@/context/AppContext";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { FeaturedToursSection } from "@/components/sections/FeaturedToursSection";
import { RegionalToursSection } from "@/components/sections/RegionalToursSection";
import { SeasonalToursSection } from "@/components/sections/SeasonalToursSection";
import { ComboSection } from "@/components/sections/ComboSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BookingProcessSection } from "@/components/sections/BookingProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CTASection } from "@/components/sections/CTASection";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function HomePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Categories Section */}
      <CategoriesSection />

      {/* 3. Destinations Section */}
      <DestinationsSection />

      {/* 4. Featured Tours Section */}
      <FeaturedToursSection />

      {/* 5. Regional Tours Section */}
      <RegionalToursSection />

      {/* 6. Seasonal Tours Section */}
      <SeasonalToursSection />

      {/* 7. Combo Section */}
      <ComboSection />

      {/* 8. Experiences Section */}
      <ExperiencesSection />

      {/* 9. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 10. Booking Process Section */}
      <BookingProcessSection />

      {/* 11. Stats Section */}
      <StatsSection />

      {/* 12. Testimonials Section */}
      <TestimonialsSection />

      {/* 13. Blog Section */}
      <BlogSection />

      {/* 14. Partners Section */}
      <PartnersSection />

      {/* 15. CTA Section */}
      <CTASection />
    </div>
  );
}

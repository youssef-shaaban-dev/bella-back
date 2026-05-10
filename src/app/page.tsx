"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import FeaturedMachine from "@/components/FeaturedMachine";
import PouchSelection from "@/components/PouchSelection";
import IndustriesOverview from "@/components/IndustriesOverview";
import OperationalExcellence from "@/components/OperationalExcellence";
import NewsExhibitions from "@/components/NewsExhibitions";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Us Section */}
      <AboutSection />

      {/* Industries Overview */}
      <IndustriesOverview />

      {/* Flagship Machine Showcase (Machine Operation Video) */}
      <FeaturedMachine />

      {/* Operational Excellence */}
      <OperationalExcellence />

      {/* Core Product Range */}
      <ProductGrid />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}

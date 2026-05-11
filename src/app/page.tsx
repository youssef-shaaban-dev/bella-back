"use client";

import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProductGrid from "@/components/home/ProductGrid";
import PouchSelection from "@/components/home/PouchSelection";
import IndustriesOverview from "@/components/home/IndustriesOverview";
import OperationalExcellence from "@/components/home/OperationalExcellence";
import NewsExhibitions from "@/components/home/NewsExhibitions";
import FinalCTA from "@/components/home/FinalCTA";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Us Section */}
      <AboutSection />

      {/* Industries Overview */}
      <IndustriesOverview />

      {/* World-Class Services */}
      <Services />

      {/* Operational Excellence */}
      <OperationalExcellence />

      {/* Core Product Range */}
      <ProductGrid />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}

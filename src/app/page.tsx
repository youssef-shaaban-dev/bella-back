"use client";

import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ClientLogos from "@/components/home/ClientLogos";
import ProductGrid from "@/components/home/ProductGrid";
import IndustriesOverview from "@/components/home/IndustriesOverview";
import OperationalExcellence from "@/components/home/OperationalExcellence";
import BrandsPackaged from "@/components/home/BrandsPackaged";
import FinalCTA from "@/components/home/FinalCTA";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Premium Hero Slider Section */}
      <Hero />

      {/* About Us Section */}
      <AboutSection />

      {/* Real-time GSAP Stats Counter Section */}
      <StatsSection />

      {/* Infinite Horizontal Client Logos Marquee */}
      <ClientLogos />

      {/* Industries Overview Section */}
      <IndustriesOverview />

      {/* World-Class Services Section */}
      <Services />

      {/* Environmental & Operational Excellence Section */}
      <OperationalExcellence />

      {/* Core Machine Product Gallery Section */}
      <ProductGrid />

      {/* Interactive Packaged Brands Showcase Section */}
      <BrandsPackaged />

      {/* Final Call to Action Section */}
      <FinalCTA />
    </main>
  );
}

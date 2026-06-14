"use client";

import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
// import StatsSection from "@/components/home/StatsSection";
import ClientLogos from "@/components/home/ClientLogos";
import OurSolutions from "@/components/home/OurSolutions";
import BrandsPackaged from "@/components/home/BrandsPackaged";
import FinalCTA from "@/components/home/FinalCTA";
import Services from "@/components/home/Services";
import Sustainability from "@/components/home/Sustainability";
import Media from "@/components/home/Media";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Premium Hero Slider Section */}
      <Hero />

      {/* About Us Section */}
      <AboutSection />

      {/* Real-time GSAP Stats Counter Section */}
      {/* <StatsSection /> */}

      {/* Infinite Horizontal Client Logos Marquee */}
      <ClientLogos />

      {/* Industries Overview Section */}
      <OurSolutions />

      {/* World-Class Services Section */}
      <Services />

      {/* Environmental & Operational Excellence Section */}
      <Sustainability />

      {/* Core Machine Product Gallery Section */}
      <Media />

      {/* Interactive Packaged Brands Showcase Section */}
      <BrandsPackaged />

      {/* Exhibitions & Events Showcase Section */}
      {/* <NewsExhibitions /> */}

      {/* Final Call to Action Section */}
      <FinalCTA />
    </main>
  );
}

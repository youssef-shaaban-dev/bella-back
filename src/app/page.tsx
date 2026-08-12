import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ClientLogos from "@/components/home/ClientLogos";
import OurSolutions from "@/components/home/OurSolutions";
import BrandsPackaged from "@/components/home/BrandsPackaged";
import FinalCTA from "@/components/home/FinalCTA";
import Services from "@/components/home/Services";
import Sustainability from "@/components/home/Sustainability";
import Media from "@/components/home/Media";

export const metadata: Metadata = {
  title: "Horizontal Pouch Packing Machines",
  description: "Discover Bella Pack Tec horizontal pouch packing machines for food, cosmetics, liquids, powders, and custom packaging with reliable after-sales support.",
  alternates: {
    canonical: "https://www.bellapacktec.com",
  },
  openGraph: {
    title: "Horizontal Pouch Packing Machines | Bella Pack Tec",
    description: "Discover Bella Pack Tec horizontal pouch packing machines for food, cosmetics, liquids, powders, and custom packaging with reliable after-sales support.",
    url: "https://www.bellapacktec.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Premium Hero Slider Section */}
      <Hero />

      {/* About Us Section */}
      <AboutSection />

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

      {/* Final Call to Action Section */}
      <FinalCTA />
    </main>
  );
}

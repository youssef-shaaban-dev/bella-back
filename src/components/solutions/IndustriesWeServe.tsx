"use client";

import { useState } from "react";
import Image from "next/image";
import { Beef, Coffee, Cookie, ShieldAlert, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";

const industries = [
  {
    id: "food",
    icon: Beef,
    title: "Food & Beverage",
    description: "At BellaPack, we provide advanced packaging technologies tailored to the evolving needs of the Food & Beverage industry. Our machines are designed to support manufacturers with high-performance packaging solutions that combine efficiency, accuracy, hygiene, and reliability. Engineered to accommodate a wide range of food applications, our machines ensure consistent packaging quality, product integrity, and dependable production performance. With intelligent automation, flexible configurations, and durable industrial construction, BellaPack helps businesses optimize their packaging operations and achieve long-term operational excellence.",
    features: ["Juices & Liquid Beverages", "Edible Oils", "Tomato Paste & Sauces", "Ghee & Dairy Products", "Rice, Beans & Legumes"],
    badge: "High Hygiene",
    images: [
      "/solutions/food-beverage/Food.webp",
      "/solutions/food-beverage/food-2.webp"
    ]
  },
  {
    id: "spices",
    icon: Coffee,
    title: "Spices & Coffee",
    description: "At BellaPack, we provide advanced pouch packaging machinery tailored to the specific requirements of the Spices & Coffee industry. Designed to preserve freshness, protect aroma, and maintain product quality, our machines deliver reliable filling accuracy and consistent sealing performance. With intelligent automation, flexible configurations, and durable industrial construction, BellaPack supports manufacturers in achieving efficient and dependable production while enhancing product presentation and shelf appeal.",
    features: ["Coffee Beans", "Ground Coffee", "Spice Powders", "Herbs & Seasonings", "Coffee Mixes & Creamers"],
    badge: "Aroma Preserved",
    images: [
      "/solutions/spices-coffee/Coffee.webp"
    ]
  },
  {
    id: "snacks",
    icon: Cookie,
    title: "Snacks & Granules",
    description: "BellaPack provides advanced pouch packaging machinery for snacks and granular products, combining high-speed operation with reliable performance. Our machines are engineered to ensure accurate filling, consistent sealing quality, and efficient production while maintaining product integrity. With intelligent automation and flexible configurations, BellaPack supports manufacturers in achieving dependable and cost-effective packaging operations.",
    features: ["Nuts & Seeds", "Candies & Gummies", "Potato Chips & Snacks", "Pasta", "Rice"],
    badge: "Product integrity",
    images: [
      "/solutions/snacks-granules/snacks-granules-card.webp",
      "/Homepage/BP-2500.webp"
    ]
  },
  {
    id: "chemical",
    icon: ShieldAlert,
    title: "Detergents & Chemicals",
    description: "At BellaPack, we provide advanced pouch packaging machinery engineered to meet the demanding requirements of the Detergents & Chemicals industry. Designed for reliability, durability, and consistent performance, our machines support accurate filling, secure sealing, and efficient production across a wide range of chemical products. To ensure long-term resistance in harsh chemical environments, our machines incorporate titanium-reinforced components in critical product-contact areas. Combined with intelligent automation and flexible configurations, BellaPack helps manufacturers achieve dependable and cost-effective packaging operations.",
    features: ["Liquid Detergents", "Bleach & Disinfectants", "Powders & Granules", "Household Cleaners", "Industrial Chemicals"],
    badge: "Chemical resistant",
    images: [
      "/solutions/detergents-chemicals-products/Detergents-pouches.webp"
    ]
  },
  {
    id: "pharma",
    icon: Sparkles,
    title: "Cosmetics & Pharmaceutical",
    description: "At BellaPack, we provide advanced packaging solutions designed to meet the high standards of the cosmetics and pharmaceutical industries. Our packaging systems are engineered to deliver precision, hygiene, product protection, and premium presentation for a wide range of liquid, powder, cream, gel, and personal care products. We understand that cosmetics and pharmaceutical products require highly accurate filling systems, secure sealing technologies, and clean production environments to maintain product safety, quality, and consistency. That is why our machines are manufactured using hygienic stainless-steel construction and intelligent automation systems that support efficient and reliable production performance.",
    features: ["Creams & Lotions", "Shower Gels", "Liquid Pharmaceuticals", "Personal Care Products", "Cosmetic Creams", "Beauty & Skincare"],
    badge: "HYGIENIC DESIGN",
    images: [
      "/Homepage/closeup flowmeter.webp"
    ]
  }
];

// Helper Sub-Component to display industry details
function IndustryDetails({
  industry,
  activeIdx,
  activeImgIdx,
  setActiveImgIdx
}: {
  industry: typeof industries[0];
  activeIdx: number;
  activeImgIdx: number;
  setActiveImgIdx: (idx: number) => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10 w-full text-left">
      {/* Left Side: Technical Info */}
      <div className="flex flex-col justify-between space-y-8">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center space-x-2 bg-brand-red/10 text-brand-red px-4 py-1.5 text-xs font-bold font-heading uppercase tracking-widest rounded-full">
                <CheckCircle2 size={14} />
                <span>INDUSTRY APPLICATION</span>
              </span>
              <span className="inline-flex items-center bg-gray-100 text-charcoal px-4 py-1.5 text-xs font-bold font-heading uppercase tracking-widest rounded-full border border-gray-200 shadow-sm">
                {industry.badge}
              </span>
            </div>
            <h5 className="text-sm text-gray-400 font-heading uppercase font-bold tracking-widest hidden lg:block">0{activeIdx + 1} / 05</h5>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold font-heading uppercase text-charcoal tracking-tight mb-6 leading-tight">
            {industry.title}
          </h3>

          <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed text-justify">
            {industry.description}
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200/60 mt-auto">
          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-4">APPLICATIONS SERVED</h5>
          <div className="flex flex-wrap gap-2">
            {industry.features.map((feat, fIdx) => (
              <div key={fIdx} className="bg-white text-charcoal border border-gray-200 px-3 py-2 text-[10px] font-heading font-bold uppercase tracking-wider rounded-sm shadow-sm flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Multi-Image Gallery Showcase */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full flex-1 min-h-[300px] lg:min-h-[400px] rounded-sm overflow-hidden group">
          <Image
            src={industry.images[activeImgIdx]}
            alt={`${industry.title} packaging mockup`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Thumbnail Selectors (Visible only when multiple photos exist for an industry) */}
        {industry.images.length > 1 && (
          <div className="flex gap-2 justify-center flex-wrap shrink-0">
            {industry.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImgIdx(i)}
                className={`relative w-16 h-16 border rounded-sm overflow-hidden bg-white shrink-0 transition-all ${activeImgIdx === i
                    ? "border-brand-red ring-2 ring-brand-red/10 scale-105"
                    : "border-gray-200 hover:border-gray-400"
                  }`}
              >
                <Image
                  src={img}
                  alt={`${industry.title} thumb ${i + 1}`}
                  fill
                  sizes="64px"
                  className="object-contain p-1.5"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function IndustriesWeServe() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  // Reset active image index when active industry changes
  const handleIndustryChange = (idx: number) => {
    setActiveIdx(idx);
    setActiveImgIdx(0);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="reveal flex flex-col items-center text-center gap-4 mb-16 border-b border-gray-100 pb-8">
          <div>
            <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">INDUSTRY APPLICATIONS</h3>
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal leading-none">
              Industries We <span className="text-brand-red">Serve</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-2xl font-semibold font-sans">
            Each machine is engineered to meet the specific product characteristics, hygiene standards, packaging requirements, and production demands of the industries we serve.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col gap-8">
          {/* Horizontal Tabs */}
          <div className="grid grid-cols-5 gap-4 reveal">
            {industries.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleIndustryChange(idx)}
                  className={`p-6 transition-all duration-300 flex flex-col items-center text-center justify-center gap-4 border rounded-sm group ${
                    isActive
                      ? "bg-charcoal text-white border-charcoal shadow-lg shadow-charcoal/20"
                      : "bg-gray-50 text-charcoal border-gray-100 hover:bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-brand-red text-white"
                        : "bg-white text-charcoal group-hover:bg-brand-red/10 group-hover:text-brand-red shadow-sm"
                    }`}
                  >
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-sm font-heading font-bold uppercase tracking-tight">
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Detailed Content Box */}
          <div className="reveal relative min-h-[480px] bg-gray-50 rounded-sm border border-gray-100 p-12 overflow-hidden flex flex-col justify-between">
            {/* Dynamic backdrop text */}
            <div className="absolute right-0 bottom-0 text-[200px] font-heading font-black text-charcoal/[0.015] leading-none translate-y-1/3 select-none pointer-events-none">
              {industries[activeIdx].title.split(" ")[0]}
            </div>

            <IndustryDetails
              industry={industries[activeIdx]}
              activeIdx={activeIdx}
              activeImgIdx={activeImgIdx}
              setActiveImgIdx={setActiveImgIdx}
            />
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-3 reveal">
          {industries.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div key={item.id} className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50 transition-all duration-300">
                <button
                  onClick={() => handleIndustryChange(idx)}
                  className={`w-full text-left p-6 transition-all duration-300 flex items-center justify-between group ${isActive
                      ? "bg-charcoal text-white shadow-lg"
                      : "bg-gray-50 text-charcoal hover:bg-white hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-brand-red text-white" : "bg-white text-charcoal group-hover:bg-brand-red/10 group-hover:text-brand-red"
                      }`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold opacity-50 uppercase tracking-widest font-heading mb-0.5">Sector 0{idx + 1}</span>
                      <h4 className="text-lg md:text-xl font-heading font-bold uppercase tracking-tight">{item.title}</h4>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`hidden sm:inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-heading ${isActive ? "bg-white/10 text-brand-red" : "bg-gray-200 text-gray-500"
                      }`}>
                      {item.badge}
                    </span>
                    {/* Mobile Arrow Indicator */}
                    <span className="lg:hidden text-gray-400">
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-180 text-brand-red" : "text-gray-400"}`} />
                    </span>
                  </div>
                </button>

                {/* Accordion Content for Mobile only */}
                <div className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${isActive ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}>
                  <div className="p-6 bg-white border-t border-gray-200">
                    {isActive && (
                      <IndustryDetails
                        industry={item}
                        activeIdx={idx}
                        activeImgIdx={activeImgIdx}
                        setActiveImgIdx={setActiveImgIdx}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Beef, Coffee, Cookie, ShieldAlert, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";

const industries = [
  {
    id: "food",
    icon: Beef,
    title: "Food & Beverage",
    description: "At BellaPack, we provide advanced packaging technologies tailored to the evolving needs of the Food & Beverage industry. Our solutions are designed to support manufacturers with high-performance packaging systems that combine efficiency, precision, hygiene, and reliability. From dry products and powders to liquids and granules, our machines are engineered to handle a wide variety of food applications while maintaining product integrity and production consistency. We help businesses optimize their packaging operations with smart automation, flexible configurations, and durable machine construction suitable for continuous industrial performance.",
    features: ["Juices & Liquids", "Edible Oils", "Tomato Paste & Sauces", "Ghee & Dairy", "Grains"],
    badge: "High Hygiene",
    images: [
      "/solutions/Food & Beverage/Food.jpeg",
      "/solutions/Food & Beverage/food-2.jpeg"
    ]
  },
  {
    id: "spices",
    icon: Coffee,
    title: "Spices & Coffee",
    description: "At BellaPack, we provide advanced packaging solutions tailored for spices and coffee products, combining precision, efficiency, and premium packaging performance to meet modern Food & Beverage industry standards. Our packaging systems are engineered to preserve freshness, protect aroma, and maintain product quality throughout the entire packaging process. Whether handling fine spice powders, seasoning blends, coffee beans, or ground coffee, our machines deliver reliable filling accuracy and secure sealing technologies designed for consistent production results. We combine intelligent automation with high-performance pouch packaging technologies to deliver packaging that supports both product protection and brand presentation.",
    features: ["Coffee Beans", "Ground Coffee", "Spice Powders", "Seasoning Blends"],
    badge: "Aroma Preserved",
    images: [
      "/solutions/spices & coffee/coffee bellapack pouch.png",
      "/solutions/spices & coffee/Coffee .jpeg",
      "/solutions/spices & coffee/spices.jpeg"
    ]
  },
  {
    id: "snacks",
    icon: Cookie,
    title: "Snacks & Granules",
    description: "Efficient packaging systems for nuts, candies, and snacks. Optimized for high-speed production and reliable performance. We combine engineering expertise, industrial reliability, and practical application knowledge to deliver machines that perform consistently under demanding production conditions.",
    features: ["Nuts", "Candies", "Snacks"],
    badge: "High Speed",
    images: [
      "/Homepage/Pouches.jpeg",
      "/Homepage/BP-2500.jpeg"
    ]
  },
  {
    id: "chemical",
    icon: ShieldAlert,
    title: "Detergents & Chemicals",
    description: "At BellaPack, we provide advanced packaging solutions designed to meet the demanding requirements of detergent and chemical product manufacturers. Our systems are engineered to deliver safe, efficient, and reliable packaging performance for liquid, powder, and granular chemical products across various industrial applications. We understand the importance of precision, durability, and product protection in the chemical packaging industry. That is why our packaging technologies are developed to ensure accurate filling, secure sealing, and consistent packaging quality while supporting high-speed production operations. Whether packaging cleaning products, detergents, industrial chemicals, or household solutions, BellaPack delivers flexible pouch packaging systems tailored to modern manufacturing needs.",
    features: ["Liquid Detergents", "Bleach", "Corrosive Chemicals", "Powders & Granules"],
    badge: "Titanium Built",
    images: [
      "/solutions/ Detergents & Chemicals Products/Detergents-pouches.jpeg"
    ]
  },
  {
    id: "pharma",
    icon: Sparkles,
    title: "Cosmetics & Pharmaceutical",
    description: "At BellaPack, we provide advanced packaging solutions designed to meet the high standards of the cosmetics and pharmaceutical industries. Our packaging systems are engineered to deliver precision, hygiene, product protection, and premium presentation for a wide range of liquid, powder, cream, gel, and personal care products. We understand that cosmetics and pharmaceutical products require highly accurate filling systems, secure sealing technologies, and clean production environments to maintain product safety, quality, and consistency. That is why our machines are manufactured using hygienic stainless-steel construction and intelligent automation systems that support efficient and reliable production performance.",
    features: ["Creams & Lotions", "Shower Gels", "Liquid Pharma", "Personal Care"],
    badge: "Sanitary Grade",
    images: [
      "/Homepage/closeup flowmeter.png",
      "/Homepage/Machine-close-up-2.jpeg"
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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative z-10 w-full text-left">
      {/* Left Side: Technical Info */}
      <div className="md:col-span-7 flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center space-x-2 bg-brand-red/10 text-brand-red px-4 py-1.5 text-xs font-bold font-heading uppercase tracking-widest rounded-full">
              <CheckCircle2 size={14} />
              <span>Validated Solution</span>
            </span>
            <h5 className="text-sm text-gray-400 font-heading uppercase font-bold tracking-widest">0{activeIdx + 1} / 05</h5>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase text-charcoal tracking-tight mb-4 leading-tight">
            {industry.title}
          </h3>

          <p className="text-gray-600 font-body text-xs md:text-sm leading-relaxed max-w-md">
            {industry.description}
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200/60">
          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-4">Formulations Supported</h5>
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
      <div className="md:col-span-5 flex flex-col justify-between h-full space-y-4">
        <div className="relative bg-white border border-gray-200/80 rounded-sm overflow-hidden shadow-sm group p-1">
          <Image
            src={industry.images[activeImgIdx]}
            alt={`${industry.title} packaging mockup`}
            width={800}
            height={600}
            className="w-full h-auto block rounded-sm transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Thumbnail Selectors (Visible only when multiple photos exist for an industry) */}
        {industry.images.length > 1 && (
          <div className="flex gap-2 justify-center flex-wrap">
            {industry.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImgIdx(i)}
                className={`relative w-12 h-12 border rounded-sm overflow-hidden bg-white shrink-0 transition-all ${
                  activeImgIdx === i 
                    ? "border-brand-red ring-2 ring-brand-red/10 scale-105" 
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Image
                  src={img}
                  alt={`${industry.title} thumb ${i + 1}`}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
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
        
        <div className="reveal flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16 border-b border-gray-100 pb-8">
          <div>
            <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-3">Vertical Markets</h3>
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-charcoal leading-none">
              Industries We <span className="text-brand-red">Serve</span>
            </h2>
          </div>
          <p className="text-gray-500 font-body text-sm max-w-md font-semibold font-sans">
            Each line is custom-tailored to meet the distinct handling conditions, sanitary requirements, and target speed vectors of your sector.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Mobile Accordion + Desktop Navigation */}
          <div className="reveal lg:col-span-5 space-y-3">
            {industries.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div key={item.id} className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50 transition-all duration-300">
                  <button
                    onClick={() => handleIndustryChange(idx)}
                    className={`w-full text-left p-6 transition-all duration-300 flex items-center justify-between group ${
                      isActive 
                        ? "bg-charcoal text-white shadow-lg" 
                        : "bg-gray-50 text-charcoal hover:bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? "bg-brand-red text-white" : "bg-white text-charcoal group-hover:bg-brand-red/10 group-hover:text-brand-red"
                      }`}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <span className="block text-xs font-bold opacity-50 uppercase tracking-widest font-heading mb-0.5">Sector 0{idx + 1}</span>
                        <h4 className="text-lg md:text-xl font-heading font-bold uppercase tracking-tight">{item.title}</h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`hidden sm:inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-heading ${
                        isActive ? "bg-white/10 text-brand-red" : "bg-gray-200 text-gray-500"
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
                  <div className={`lg:hidden transition-all duration-[400ms] ease-in-out overflow-hidden ${
                    isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
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

          {/* Right detailed content box - Desktop only */}
          <div className="reveal lg:col-span-7 relative min-h-[480px] bg-gray-50 rounded-sm border border-gray-100 p-8 md:p-12 overflow-hidden hidden lg:flex flex-col justify-between">
            {/* Dynamic backdrop text */}
            <div className="absolute right-0 bottom-0 text-[200px] font-heading font-black text-charcoal/[0.015] leading-none translate-y-1/3 select-none">
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

      </div>
    </section>
  );
}

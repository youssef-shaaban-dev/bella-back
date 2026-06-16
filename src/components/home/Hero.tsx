"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION = 6000; // 6 seconds per slide

const slides = [
  {
    id: 1,
    title: "INNOVATIVE FILLING",
    highlightTitle: "AND SEALING SYSTEMS",
    description: "Designed for high-speed automated production with exceptional dosing accuracy. Experience seamless performance tailored to your products.",
    buttonText: "OUR SOLUTIONS",
    link: "/solutions",
    image: "/Homepage/slide-banner-2.webp",
    tabLabel: "ENGINEERING EXCELLENCE",
    benefits: [
      "Advanced PLC touch control",
      "High dosing accuracy (+/- 0.5%)",
      "Quick changeover design"
    ]
  },
  {
    id: 2,
    title: "TAILORED SOLUTIONS",
    highlightTitle: "FOR EVERY INDUSTRY",
    description: "From food & beverage and cosmetics to pharmaceuticals and chemicals, BellaPack delivers customized pouch packaging solutions engineered around your products, production goals, and operational requirements.",
    buttonText: "CONTACT US",
    link: "/contact",
    image: "/Homepage/slide-banner-3.webp",
    tabLabel: "TAILORED SOLUTIONS",
    benefits: [
      "Custom Engineering & Line Integration",
      "Multi-Industry Applications",
      "Dedicated After-Sales Support"
    ]
  },
  {
    id: 3,
    title: "PRECISION PACKAGING",
    highlightTitle: "FOR RELIABLE PERFORMANCE",
    description: "At BellaPack, we deliver advanced pouch packaging systems engineered for accuracy, efficiency, and reliable production performance.",
    buttonText: "EXPLORE SOLUTIONS",
    link: "/solutions",
    image: "/Homepage/slide-banner-1.webp",
    tabLabel: "FLEXIBLE POUCH FORMATS",
    benefits: [
      "Improve production speed",
      "Reduce material waste",
      "Ensure consistent sealing and filling accuracy"
    ]
  },
  {
    id: 4,
    title: "SUSTAINABLE PACKAGING",
    highlightTitle: "FOR A BETTER FUTURE",
    description: "Supporting responsible manufacturing through efficient machine design, reduced material waste, and packaging solutions compatible with recyclable materials.",
    buttonText: "ABOUT BELLAPACK",
    link: "/about",
    image: "/Homepage/slide-banner-4.webp",
    tabLabel: "SUSTAINABLE PACKAGING",
    benefits: [
      "Reduced Material Consumption",
      "Energy-Efficient Operation",
      "Sustainable Packaging Solutions"
    ]
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  // Autoplay using setTimeout (no re-renders for progress — CSS handles it)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeSlide, isPlaying, progressKey]);

  // GSAP animation replaced with pure CSS animations in globals.css

  const handleTabClick = (index: number) => {
    setActiveSlide(index);
    setProgressKey((k) => k + 1);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal text-white">
      {/* Background Media Container with Cross-Fade */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.tabLabel}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className={`transition-all duration-1000 ease-in-out ${isActive ? "scale-100" : "scale-105"
                  } object-cover opacity-45 lg:opacity-65`}
              />
            </div>
          );
        })}

        {/* Gradient Overlays for perfect legibility and blending */}
        <div className="absolute inset-0 z-20 bg-linear-to-r from-charcoal via-charcoal/95 to-transparent lg:from-charcoal lg:via-charcoal/30 lg:to-transparent" />
        <div className="absolute inset-0 z-20 bg-linear-to-b from-charcoal/20 via-transparent to-charcoal/80" />
      </div>

      {/* Content Container with Grid Stacking */}
      <div className="container mx-auto px-6 relative z-30 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl pt-36 pb-40 md:pt-52 md:pb-24 grid grid-cols-1 grid-rows-1">
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={slide.id}
                className={`slide-content-${index} col-start-1 row-start-1 flex flex-col transition-opacity duration-500 ease-in-out ${isActive
                  ? "opacity-100 pointer-events-auto z-10"
                  : "opacity-0 pointer-events-none z-0"
                  }`}
              >
                <h1 className={`slide-title text-5xl md:text-7xl font-bold leading-[0.95] mb-6 tracking-tight font-heading ${isActive ? 'animate-hero-title' : 'opacity-0'}`}>
                  {slide.title} <br />
                  <span className="text-brand-red">{slide.highlightTitle}</span>
                </h1>

                <p className={`slide-subtitle text-base md:text-lg text-white/85 font-body max-w-2xl mb-8 leading-relaxed ${isActive ? 'animate-hero-subtitle' : 'opacity-0'}`}>
                  {slide.description}
                </p>

                <div className="slide-benefits mb-10 space-y-3">
                  {slide.benefits.map((benefit, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center space-x-3 text-white/90 ${isActive ? 'animate-hero-benefit' : 'opacity-0'}`}
                      style={{ animationDelay: isActive ? `${0.3 + (i * 0.05)}s` : '0s' }}
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20">
                        <ArrowRight size={12} className="text-white" />
                      </div>
                      <span className="font-body font-medium text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className={`slide-cta flex flex-wrap gap-4 items-center ${isActive ? 'animate-hero-cta' : 'opacity-0'}`}>
                  <Link
                    href={slide.link}
                    className="bg-brand-red text-white px-8 py-4 rounded-sm font-heading font-bold text-lg flex items-center space-x-2 group hover:bg-white hover:text-charcoal transition-all duration-300 shadow-xl shadow-brand-red/10"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center bg-charcoal/60 backdrop-blur-md border border-white/10 rounded-sm p-1 gap-1">
                    {/* Prev Arrow */}
                    <button
                      onClick={() => {
                        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
                        setProgressKey((k) => k + 1);
                      }}
                      type="button"
                      className="w-10 h-10 text-white flex items-center justify-center hover:bg-brand-red transition-colors duration-300 cursor-pointer rounded-sm"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {/* Play/Pause Slider Autoplay Button */}
                    <button
                      onClick={togglePlay}
                      type="button"
                      className="w-10 h-10 text-white flex items-center justify-center hover:bg-brand-red transition-colors duration-300 cursor-pointer rounded-sm"
                      aria-label={isPlaying ? "Pause slider" : "Play slider"}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>

                    {/* Next Arrow */}
                    <button
                      onClick={() => {
                        setActiveSlide((prev) => (prev + 1) % slides.length);
                        setProgressKey((k) => k + 1);
                      }}
                      type="button"
                      className="w-10 h-10 text-white flex items-center justify-center hover:bg-brand-red transition-colors duration-300 cursor-pointer rounded-sm"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Indicator Tabs at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-40 w-full pointer-events-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-6">
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleTabClick(index)}
                  className="group text-left focus:outline-none relative pt-4 cursor-pointer pointer-events-auto z-40 block w-full border-t border-white/10"
                >
                  {/* Dynamic Progress Line — CSS animation, no JS re-renders */}
                  <div className="absolute top-[-2px] left-0 right-0 h-[2px] bg-white/10 group-hover:bg-white/25 transition-colors">
                    <div
                      key={isActive ? `progress-${progressKey}` : undefined}
                      className={`h-full bg-brand-red ${
                        isActive && isPlaying
                          ? "animate-[progressBar_6s_linear_forwards]"
                          : ""
                      }`}
                      style={{
                        width: isActive ? (isPlaying ? undefined : "0%") : "0%",
                      }}
                    />
                  </div>

                  <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors block mb-1">
                    0{index + 1}
                  </span>
                  <span className="font-heading font-bold uppercase text-xs md:text-sm tracking-wide text-white group-hover:text-brand-red transition-colors block line-clamp-2 md:line-clamp-1 pr-2">
                    {slide.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

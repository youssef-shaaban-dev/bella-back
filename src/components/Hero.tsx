"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";
import gsap from "gsap";

const SLIDE_DURATION = 6000; // 6 seconds per slide

const slides = [
  {
    id: 1,
    title: "PRECISION PACKAGING",
    highlightTitle: "FOR RELIABLE PERFORMANCE",
    description: "At Bella Pack, we deliver high-performance packaging machines and filling solutions engineered to handle a wide range of product viscosities and textures, ensuring consistent output, accuracy, and production efficiency.",
    buttonText: "EXPLORE SOLUTIONS",
    link: "/solutions",
    image: "/PacProcess 2025/ 1.jpeg",
    tabLabel: "Precision Packaging",
    benefits: [
      "Improve production speed",
      "Reduce material waste",
      "Ensure consistent sealing and filling accuracy"
    ]
  },
  {
    id: 2,
    title: "INNOVATIVE FILLING",
    highlightTitle: "AND SEALING SYSTEMS",
    description: "Designed for high-speed automated production with exceptional dosing accuracy. Experience seamless performance tailored to your products.",
    buttonText: "OUR SOLUTIONS",
    link: "/solutions",
    image: "/PacProcess 2025/ 2.jpeg",
    tabLabel: "Filling Technology",
    benefits: [
      "Advanced PLC touch control",
      "High dosing accuracy (+/- 0.5%)",
      "Quick changeover design"
    ]
  },
  {
    id: 3,
    title: "MAXIMUM EFFICIENCY",
    highlightTitle: "WITH ZERO DOWNTIME",
    description: "Engineered using high-grade stainless steel and robust mechanical components to withstand continuous heavy-duty industrial operation.",
    buttonText: "ABOUT BELLA PACK",
    link: "/about",
    image: "/PacProcess 2025/ 3.jpeg",
    tabLabel: "Engineered to Last",
    benefits: [
      "Heavy-duty stainless steel build",
      "24/7 continuous operation",
      "Low maintenance requirements"
    ]
  },
  {
    id: 4,
    title: "TAILORED SOLUTIONS",
    highlightTitle: "FOR EVERY INDUSTRY",
    description: "From food & beverage and cosmetics to pharmaceuticals & chemicals, we customize our pouching and bottling lines to fit your exact production space and requirements.",
    buttonText: "CONTACT US",
    link: "/contact",
    image: "/PacProcess 2025/ 4.jpeg",
    tabLabel: "Custom Automation",
    benefits: [
      "Custom engineering & layouts",
      "Multi-industry application",
      "Comprehensive after-sales support"
    ]
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Manage Autoplay progress
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= SLIDE_DURATION) {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }
    }, 30);

    return () => {
      clearInterval(interval);
      setProgress(0); // Safely reset progress in cleanup to avoid cascading renders
    };
  }, [activeSlide, isPlaying]);

  // Premium GSAP Staggered entry animation on active slide change
  useEffect(() => {
    const activeSlideEl = document.querySelector(`.slide-content-${activeSlide}`);
    if (!activeSlideEl) return;

    const title = activeSlideEl.querySelector(".slide-title");
    const subtitle = activeSlideEl.querySelector(".slide-subtitle");
    const benefits = activeSlideEl.querySelector(".slide-benefits");
    const cta = activeSlideEl.querySelector(".slide-cta");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset styling state for a clean animation start
      gsap.set([title, subtitle, cta, benefits?.children], { clearProps: "all" });

      tl.fromTo(
        title,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        subtitle,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      if (benefits && benefits.children.length > 0) {
        tl.fromTo(
          benefits.children,
          { x: -25, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (cta) {
        tl.fromTo(
          cta,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" },
          "-=0.3"
        );
      }
    }, activeSlideEl as HTMLElement);

    return () => ctx.revert();
  }, [activeSlide]);

  const handleTabClick = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal text-white">
      {/* Background Media Container with Cross-Fade */}
      <div className="absolute right-0 top-0 w-full lg:w-3/4 h-full z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.tabLabel}
                fill
                priority={index === 0}
                className="object-cover opacity-45 lg:opacity-65"
              />
            </div>
          );
        })}

        {/* Gradient Overlays for perfect legibility and blending */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-charcoal via-charcoal/95 to-transparent lg:from-charcoal lg:via-charcoal/30 lg:to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/80" />
      </div>

      {/* Content Container with Grid Stacking */}
      <div className="container mx-auto px-6 relative z-30 w-full">
        <div className="max-w-3xl pt-32 pb-32 md:pb-40 grid grid-cols-1 grid-rows-1">
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={slide.id}
                className={`slide-content-${index} col-start-1 row-start-1 flex flex-col transition-opacity duration-500 ease-in-out ${
                  isActive
                    ? "opacity-100 pointer-events-auto z-10"
                    : "opacity-0 pointer-events-none z-0"
                }`}
              >
                <div className="inline-flex self-start items-center space-x-2 bg-brand-blue/20 px-4 py-1.5 rounded-full mb-6 border border-brand-blue/40 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-white">Next-Gen Packaging</span>
                </div>

                <h1 className="slide-title text-5xl md:text-7xl font-bold leading-[0.95] mb-6 tracking-tight font-heading">
                  {slide.title} <br />
                  <span className="text-brand-red">{slide.highlightTitle}</span>
                </h1>

                <p className="slide-subtitle text-base md:text-lg text-white/85 font-body max-w-2xl mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <div className="slide-benefits mb-10 space-y-3">
                  {slide.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3 text-white/90">
                      <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20">
                        <ArrowRight size={12} className="text-white" />
                      </div>
                      <span className="font-body font-medium text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="slide-cta flex flex-wrap gap-4 items-center">
                  <Link
                    href={slide.link}
                    className="bg-brand-red text-white px-8 py-4 rounded-sm font-heading font-bold text-lg flex items-center space-x-2 group hover:bg-white hover:text-charcoal transition-all duration-300 shadow-xl shadow-brand-red/10"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Play/Pause Slider Autoplay Button */}
                  <button
                    onClick={togglePlay}
                    type="button"
                    className="w-12 h-12 rounded-sm border border-white/20 bg-charcoal/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-charcoal transition-colors duration-300 ml-2 cursor-pointer"
                    aria-label={isPlaying ? "Pause slider" : "Play slider"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Indicator Tabs at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-40 w-full pointer-events-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-white/10 pt-4">
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleTabClick(index)}
                  className="group text-left focus:outline-none relative pt-1 cursor-pointer pointer-events-auto z-40 block w-full"
                >
                  {/* Dynamic Progress Line */}
                  <div className="absolute top-[-17px] left-0 right-0 h-[2px] bg-white/10 group-hover:bg-white/25 transition-colors">
                    <div
                      className="h-full bg-brand-red transition-all duration-100 ease-linear"
                      style={{
                        width: isActive ? `${progress}%` : "0%",
                      }}
                    />
                  </div>

                  <span className="block text-[10px] md:text-xs font-bold tracking-widest text-white/40 uppercase mb-1">
                    {`0${slide.id} / ${isActive ? "Active" : "Slide"}`}
                  </span>
                  <span
                    className={`block font-heading font-bold text-sm md:text-base tracking-wider transition-all duration-300 uppercase line-clamp-1 ${
                      isActive ? "text-white" : "text-white/60 group-hover:text-white/95"
                    }`}
                  >
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

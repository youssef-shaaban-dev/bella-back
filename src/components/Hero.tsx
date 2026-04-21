"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal for title
      const titleChars = titleRef.current?.innerText.split("") || [];
      if (titleRef.current) {
        titleRef.current.innerHTML = titleChars
          .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
          .join("");
      }

      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current?.children || [],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.02,
          ease: "power4.out",
        }
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current?.children || [],
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current?.children || [],
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal text-white"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>

      {/* Background Decor & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-blue to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 items-center gap-12">
        <div className="pt-32 pb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/20 px-4 py-1 rounded-full mb-6 border border-brand-blue/40">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white">Next-Gen Packaging</span>
          </div>
          
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 overflow-hidden"
          >
            PRECISION PACKAGING <br />
            <span className="text-brand-red">FOR RELIABLE</span> <br />
            PERFORMANCE.
          </h1>

          <p 
            ref={subtitleRef}
            className="text-lg text-white/80 font-body max-w-2xl mb-8 leading-relaxed"
          >
            At Bella Pack, we deliver high-performance packaging machines and filling solutions engineered to handle a wide range of product viscosities and textures, ensuring consistent output, accuracy, and production efficiency.
          </p>

          <div className="mb-10 space-y-3">
            {[
              "Improve production speed",
              "Reduce material waste",
              "Ensure consistent sealing and filling accuracy"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3 text-white/90">
                <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0">
                  <ArrowRight size={12} className="text-white" />
                </div>
                <span className="font-body font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4 items-center">
            <Link 
              href="/solutions" 
              className="bg-brand-red text-white px-8 py-4 rounded-sm font-heading font-bold text-lg flex items-center space-x-2 group hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              <span>EXPLORE SOLUTIONS</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center space-x-4 ml-4">
              <button 
                onClick={togglePlay}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all"
                aria-label="Toggle Play"
              >
                {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
              </button>
              <button 
                onClick={toggleMute}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all"
                aria-label="Toggle Mute"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Machine Image */}
        <div className="hidden lg:block relative h-[600px] w-full pt-20">
          <Image 
            src="/featured-machine.png" 
            alt="Advanced Packaging Machine" 
            fill 
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

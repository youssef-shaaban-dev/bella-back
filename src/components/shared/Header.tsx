"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, Globe, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <div className={cn("relative transition-all duration-500", isScrolled ? "h-16 w-36 md:h-24 md:w-52" : "h-18 w-40 md:h-28 md:w-60")}>
             <Image 
                src="/logo.png" 
                alt="BellaPack" 
                fill 
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-6">
          {[
            { name: "About us", href: "/about" },
            { 
              name: "Solutions", 
              hasMega: true,
              href: "/solutions",
              columns: [
                {
                  title: "Industries Served",
                  items: [
                    { name: "Food & Beverage", href: "/industries/food-beverage" },
                    { name: "Spices & Coffee", href: "/industries/spices-coffee" },
                    { name: "Snacks & Granules", href: "/industries/snacks-granules" },
                    { name: "Detergents & Chemical Products", href: "/industries/detergents-chemicals" },
                    { name: "Cosmetics & Pharmaceuticals", href: "/industries/cosmetics-pharma" },
                  ]
                },
                {
                  title: "Technology",
                  items: [
                    { name: "Horizontal flat pouches", href: "/technology/horizontal-flat" },
                    { name: "Horizontal stand-up pouches", href: "/technology/horizontal-standup" },
                    { name: "Vertical machines", href: "/technology/vertical" },
                  ]
                },
                {
                  title: "Project Solutions",
                  items: [
                    { name: "Integrated Project Solutions", isCategory: true },
                    { name: "Custom Engineering", href: "/solutions/custom" },
                    { name: "Technical and Performance tools", href: "/solutions/tools" },
                  ]
                }
              ]
            },
            { name: "Services", href: "/services" },
            { name: "Sustainability", href: "/sustainability" },
            { name: "Careers", href: "/careers" },
            { name: "News", href: "/news" },
            { name: "Media", href: "/media" },
          ].map((item) => (
            <div key={item.name} className="group relative py-2">
              <Link
                href={item.href || "#"}
                className={cn(
                  "font-heading text-[12px] font-bold flex items-center space-x-1 transition-colors uppercase tracking-[0.1em]",
                  isScrolled ? "text-charcoal hover:text-brand-red" : "text-white hover:text-brand-red"
                )}
              >
                <span>{item.name}</span>
                {item.hasMega && <ChevronDown size={11} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>
              
              {item.hasMega && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white text-charcoal w-[900px] max-w-[calc(100vw-3rem)] p-6 lg:p-10 grid grid-cols-3 gap-6 lg:gap-12 mega-menu-shadow rounded-sm border-t-4 border-brand-red">
                    {item.columns?.map((col, idx) => (
                      <div key={idx} className="space-y-6">
                        <h4 className="text-brand-red font-bold text-[11px] tracking-[0.2em] uppercase border-b border-gray-100 pb-2">{col.title}</h4>
                        <ul className="space-y-4">
                          {col.items.map((sub, sIdx) => (
                            <li key={sIdx}>
                              {sub.isCategory ? (
                                <span className="text-[11px] font-bold text-gray-400 block mb-1 uppercase tracking-wider">{sub.name}</span>
                              ) : (
                                <Link href={sub.href || "#"} className="text-[13px] font-bold hover:text-brand-red transition-colors block py-1 border-l border-transparent hover:border-brand-red pl-0 hover:pl-3 transition-all">
                                  {sub.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden xl:flex items-center space-x-6">
          <Link
            href="/contact"
            className={cn(
              "px-6 py-2 rounded-sm font-heading font-bold text-sm transition-all duration-300",
              isScrolled 
                ? "bg-brand-red text-white hover:bg-brand-blue" 
                : "bg-white text-charcoal hover:bg-brand-red hover:text-white"
            )}
          >
            Contact us
          </Link>
        </div>

        <button 
          className="xl:hidden text-brand-red p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Backdrop Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] transition-opacity duration-400 xl:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu — Right-side Drawer */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-charcoal z-[100] flex flex-col transition-transform duration-400 ease-in-out xl:hidden shadow-2xl",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <span className="font-heading font-bold text-white text-sm tracking-widest uppercase">Menu</span>
          <button 
            className="text-white/70 hover:text-brand-red transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col overflow-y-auto flex-1 py-6 px-6">
          {[
            { name: "About us", href: "/about" },
            { name: "Solutions", href: "/solutions" },
            { name: "Services", href: "/services" },
            { name: "Sustainability", href: "/sustainability" },
            { name: "Careers", href: "https://www.coesia.com/en/careers#block-coesiatalentlinkcareersiframeblock", external: true },
            { name: "News", href: "/news" },
            { name: "Media", href: "/media" },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              target={item.external ? "_blank" : undefined}
              className="text-white font-heading text-lg font-bold hover:text-brand-red transition-colors py-3 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-red text-white px-8 py-4 rounded-sm font-heading font-bold text-base mt-8 text-center shrink-0 hover:bg-white hover:text-charcoal transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}


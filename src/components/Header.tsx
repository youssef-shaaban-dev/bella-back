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
          <div className="relative h-12 w-40">
             {/* @ts-ignore */}
             <Image 
                src="/logo.png" 
                alt="Bella Pack" 
                fill 
                className={cn(
                  "object-contain transition-all duration-500",
                  isScrolled ? "brightness-100" : "brightness-0 invert"
                )} 
                priority
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {[
            { name: "About", href: "/about" },
            { 
              name: "Solutions", 
              hasMega: true,
              columns: [
                {
                  title: "Technology",
                  items: [
                    { name: "Pouching & Bagging", isCategory: true },
                    { name: "Horizontal Flat Pouching", href: "/solutions/flat" },
                    { name: "Horizontal Stand-up Pouching", href: "/solutions/stand-up" },
                    { name: "Custom Engineering", href: "/solutions/custom", isCategory: true },
                    { name: "Integrated Projects", href: "/solutions/projects" },
                  ]
                },
                {
                  title: "Industry",
                  items: [
                    { name: "Food & Beverage", href: "/industries/food-beverage" },
                    { name: "Spices & Coffee", href: "/industries/spices-coffee" },
                    { name: "Snacks & Granules", href: "/industries/snacks-granules" },
                    { name: "Detergents & Chemicals", href: "/industries/detergents-chemicals" },
                    { name: "Cosmetics & Pharma", href: "/industries/cosmetics-pharma" },
                    { name: "Pet Food", href: "/industries/pet-food" },
                  ]
                },
                {
                  title: "Machine Series",
                  items: [
                    { name: "B Series", href: "/machines/b" },
                    { name: "BS Series", href: "/machines/bs" },
                    { name: "BSH Series", href: "/machines/bsh" },
                    { name: "BSS Series", href: "/machines/bss" },
                    { name: "BW Series", href: "/machines/bw" },
                    { name: "BP Series", href: "/machines/bp" },
                  ]
                }
              ]
            },
            { name: "Media", href: "/media" },
            { name: "Sustainability", href: "/sustainability" },
            { name: "Exhibitions", href: "/news" },
            { name: "Careers", href: "/careers" },
            { name: "News", href: "/news" },
          ].map((item) => (
            <div key={item.name} className="group relative py-2">
              <Link
                href={item.href || "#"}
                className={cn(
                  "font-heading text-[11px] font-bold flex items-center space-x-1 transition-colors uppercase tracking-[0.1em]",
                  isScrolled ? "text-charcoal hover:text-brand-red" : "text-white hover:text-brand-red"
                )}
              >
                <span>{item.name}</span>
                {item.hasMega && <ChevronDown size={11} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>
              
              {item.hasMega && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white text-charcoal w-[900px] p-10 grid grid-cols-3 gap-12 mega-menu-shadow rounded-sm border-t-4 border-brand-red">
                    {item.columns?.map((col, idx) => (
                      <div key={idx} className="space-y-6">
                        <h4 className="text-brand-red font-bold text-[10px] tracking-[0.2em] uppercase border-b border-gray-100 pb-2">{col.title}</h4>
                        <ul className="space-y-4">
                          {col.items.map((sub, sIdx) => (
                            <li key={sIdx}>
                              {sub.isCategory ? (
                                <span className="text-[10px] font-bold text-gray-400 block mb-1 uppercase tracking-wider">{sub.name}</span>
                              ) : (
                                <Link href={sub.href || "#"} className="text-xs font-bold hover:text-brand-red transition-colors block py-1 border-l border-transparent hover:border-brand-red pl-0 hover:pl-3 transition-all">
                                  {sub.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-3 mt-4 pt-6 border-t border-gray-100 flex justify-between items-center">
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Need a custom solution?</p>
                       <Link href="/contact" className="text-brand-red text-xs font-bold hover:underline flex items-center space-x-2">
                         <span>View all solutions</span>
                         <ArrowRight size={14} />
                       </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className={cn(
            "transition-colors flex items-center space-x-1 px-2",
            isScrolled ? "text-charcoal hover:text-brand-red" : "text-white hover:text-brand-red"
          )}>
            <Search size={18} />
          </button>
          <button className={cn(
            "transition-colors flex items-center space-x-1 px-2 mr-2",
            isScrolled ? "text-charcoal hover:text-brand-red" : "text-white hover:text-brand-red"
          )}>
            <Globe size={18} />
          </button>
          <Link
            href="/contact"
            className={cn(
              "px-6 py-2 rounded-sm font-heading font-bold text-sm transition-all duration-300",
              isScrolled 
                ? "bg-brand-red text-white hover:bg-brand-blue" 
                : "bg-white text-charcoal hover:bg-brand-red hover:text-white"
            )}
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-red"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-charcoal z-40 flex flex-col items-center justify-center transition-transform duration-500 lg:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col items-center space-y-8">
          {["About", "Solutions", "Media", "Sustainability", "Careers", "News"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-white font-heading text-2xl font-bold hover:text-brand-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-red text-white px-10 py-4 rounded-sm font-heading font-bold text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GET A QUOTE
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Info } from "lucide-react";
import Image from "next/image";

const Facebook = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);



export default function Footer() {
  const [showPartnership, setShowPartnership] = useState(false);

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-sm relative">
                <Image src="/logo.webp" alt="BellaPack" width={200} height={200} className="object-contain" style={{ width: "auto", height: "auto" }} />
              </div>
            </Link>
            <p className="text-white/50 font-body leading-relaxed text-sm text-left">
              Reliable pouch packaging machinery for flexible formats, efficient production, and consistent packaging quality since 2000.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/bellapackegypt" },
                { Icon: Instagram, href: "https://www.instagram.com/bellapackegypt" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/bellapackegypt" }
              ].map(({ Icon, href }, i) => (
                <Link key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">Quick Links</h4>
            <ul className="space-y-4">
              {["About us", "Services", "Sustainability", "Careers", "News", "Media"].map((item) => (
                <li key={item}>
                  <Link href={item === "About us" ? "/about" : `/${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">SOLUTIONS</h4>
            <ul className="space-y-4">
              {[
                { name: "Food & Beverage", href: "/industries/food-beverage" },
                { name: "Spices & Coffee", href: "/industries/spices-coffee" },
                { name: "Snacks & Granules", href: "/industries/snacks-granules" },
                { name: "Detergents & Chemical Products", href: "/industries/detergents-chemicals" },
                { name: "Cosmetics & Pharmaceuticals", href: "/industries/cosmetics-pharma" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">CONTACT</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-brand-red mt-1 shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body leading-relaxed">
                  Industrial zone (c6) plot 75,<br />10th of Ramadan city Egypt
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-brand-red shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body">Info@bellapacktec.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body">01019222211</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center text-center space-y-3 font-body">
          <p className="text-white/70 text-xs leading-relaxed max-w-4xl text-center">
            &copy; 2026 Bella Back - All content is copyrighted. Unauthorized use, including AI training, reproduction, or commercial exploitation, is strictly prohibited.
          </p>
          <p className="text-white/80 text-xs sm:text-sm text-center">
            Proudly Crafted in Egypt with Love ❤️{" "}
            <Link
              href="https://mrco-egypt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-red transition-colors underline underline-offset-2 font-medium"
            >
              Website developed by MRCO-Egypt
            </Link>
          </p>

          {/* MRCO-Egypt Partnership Tooltip */}
          <div className="flex justify-center mt-2 pb-2 px-2">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-1.5 group relative cursor-help text-center select-none"
              onClick={() => setShowPartnership(!showPartnership)}
            >
              <p
                dir="ltr"
                className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed max-w-[280px] sm:max-w-none border-b border-dashed border-gray-500/50 pb-0.5"
              >
                <span className="text-white font-medium">BellaBack | </span>
                <a
                  href="https://mrco-egypt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-white hover:underline hover:text-brand-red transition-colors"
                >
                  Growth & Marketing by MRCO-Egypt
                </a>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {" "}a strategy-driven digital marketing and brand communication agency in Egypt
                </span>
              </p>

              <Info
                className={`w-3.5 h-3.5 transition-colors flex-shrink-0 inline-block ${
                  showPartnership ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300"
                }`}
              />

              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[90vw] sm:w-[450px] p-4 sm:p-5 bg-[#141E2E] rounded-xl border border-brand-red/30 shadow-2xl transition-all duration-300 z-50 text-left pointer-events-none ${
                  showPartnership
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"
                }`}
                dir="ltr"
              >
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <span className="text-brand-red font-bold text-xs uppercase tracking-wider">
                    Growth & Marketing
                  </span>
                </div>
                <p className="text-[11px] sm:text-[11.5px] font-light text-gray-200 leading-relaxed mb-3">
                  BellaBack - Growth & Marketing by MRCO-Egypt , a strategy-driven digital marketing and brand communication agency in Egypt, for brand strategy, digital marketing, and web development.
                </p>
                <p className="text-[11px] sm:text-[11.5px] font-light text-gray-200 leading-relaxed">
                  MRCO-Egypt specializes in brand strategy, brand identity, web development, SEO, Generative Engine Optimization (GEO), and AI Optimization (AIO), helping businesses build distinctive brands and achieve measurable digital growth.
                </p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[7px] border-transparent border-t-brand-red/30"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#141E2E] -mt-[1px]"></div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-brand-red transition-colors text-[11px] font-body tracking-wider uppercase underline underline-offset-2"
            >
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

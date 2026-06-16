import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Settings } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left side - Beautiful Image Composition */}
          <ScrollReveal className="relative group max-w-xl mx-auto lg:mx-0 w-full">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
              <Image
                src="/Homepage/closeup flowmeter.webp"
                alt="Precision Industrial Manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -right-6 bg-charcoal text-white p-8 shadow-2xl border-b-4 border-brand-red max-w-xs hidden lg:block z-20">
              <span className="text-5xl font-bold font-heading text-brand-red block mb-2">25+</span>
              <span className="text-sm font-body font-semibold tracking-wider uppercase text-white/80">
                Years of engineering excellence in packaging
              </span>
            </div>
          </ScrollReveal>

          {/* Right side - Content */}
          <ScrollReveal className="flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-px w-8 bg-brand-red"></span>
              <h3 className="text-brand-red font-bold tracking-widest text-xs uppercase font-heading">About BellaPack</h3>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-charcoal font-heading uppercase tracking-tight mb-6 leading-[1.1]">
              Leading the Future of <span className="text-brand-red">Industrial</span> Packaging
            </h2>

            <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed text-left">
              Since 2000, BellaPack has been designing and manufacturing advanced horizontal pouch packaging systems for customers across food, beverage, chemical, personal care, and pharmaceutical industries. Through precision engineering, intelligent automation, and customer-focused innovation, we help manufacturers achieve greater efficiency, reliability, and long-term production success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Settings, title: "ENGINEERING EXCELLENCE", desc: "Precision-built machinery designed for reliable performance." },
                { icon: ShieldCheck, title: "CUSTOMER-FOCUSED INNOVATION", desc: "Tailored solutions developed around your products and production requirements." },
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <feat.icon className="text-brand-red mt-0.5 shrink-0" size={22} />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal uppercase text-sm tracking-wide mb-1 text-left">{feat.title}</h4>
                    <p className="text-gray-500 text-sm text-left leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-charcoal text-white font-heading font-bold uppercase tracking-widest text-sm hover:bg-brand-red transition-colors duration-300 group rounded-sm"
              >
                 About Bellapack
                <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}


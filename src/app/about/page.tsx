import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/PacProcess 2025/ 1.jpeg" alt="Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 uppercase tracking-tighter">
              COMPANY <span className="text-brand-red">OVERVIEW</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-body leading-relaxed mt-10">
              Bella Pack is a leading innovator in the packaging industry, engineering robust and high-speed machinery tailored for global industries. We blend cutting-edge technology with rigorous engineering standards to deliver unmatched operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Bella Pack */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-charcoal mb-4 uppercase">Why Bella Pack?</h2>
            <div className="h-1 w-20 bg-brand-red mx-auto mb-6" />
            <p className="text-gray-600">
              Our competitive edge lies in our comprehensive approach to packaging solutions, ensuring every machine delivers long-term value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Precision Engineering", icon: <Factory className="w-8 h-8 text-brand-red" />, desc: "Every component is meticulously crafted and tested to guarantee optimal performance under rigorous industrial conditions." },
              { title: "Global Reach", icon: <CheckCircle2 className="w-8 h-8 text-brand-red" />, desc: "With installations in over 23 countries, our machines are trusted by leading brands worldwide." },
              { title: "Custom Solutions", icon: <Lightbulb className="w-8 h-8 text-brand-red" />, desc: "We don't just sell machines; we design integrated packaging systems tailored to your specific product requirements." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-charcoal mb-3 uppercase">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section: HSE & Manufacturing Facility */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading text-charcoal mb-6 uppercase">HSE & Manufacturing Facility</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Health, Safety, and Environment (HSE) protocols are the foundation of our manufacturing processes. We operate state-of-the-art facilities equipped with advanced CNC machining, rigorous quality control checkpoints, and sustainable energy practices.
              </p>
              <ul className="space-y-4">
                {[
                  "Zero-incident safety culture",
                  "ISO standard compliance across all departments",
                  "Energy-efficient production lines",
                  "Continuous employee training and development"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
              <Image src="/PacProcess 2025/ 4.jpeg" alt="Manufacturing Facility" fill className="object-cover" />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering, Quality & Certifications */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 uppercase flex items-center">
                <Award className="w-8 h-8 text-brand-red mr-4" />
                Engineering & Quality
              </h2>
              <p className="text-white/80 leading-relaxed">
                Our engineering team utilizes the latest CAD/CAM software to design machines that meet exacting tolerances. Quality assurance is integrated into every phase, from raw material inspection to final Factory Acceptance Testing (FAT), ensuring zero defects and maximal uptime.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 uppercase flex items-center">
                <ShieldCheck className="w-8 h-8 text-brand-red mr-4" />
                Certifications
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                We adhere to strict international standards. Our equipment is CE certified and built in compliance with global electrical and mechanical safety directives, providing you with peace of mind and regulatory compliance.
              </p>
              <div className="flex space-x-4">
                <div className="bg-white/10 px-6 py-3 rounded-sm border border-white/20 font-bold uppercase tracking-widest">CE Certified</div>
                <div className="bg-white/10 px-6 py-3 rounded-sm border border-white/20 font-bold uppercase tracking-widest">ISO 9001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-32 bg-white relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-sm font-bold text-brand-red tracking-[0.3em] uppercase mb-6">Our Vision</h2>
          <p className="text-3xl md:text-5xl font-heading font-bold text-charcoal leading-tight max-w-4xl mx-auto">
            "To be the global benchmark in packaging technology, empowering industries with precision, reliability, and innovation."
          </p>
        </div>
      </section>
    </main>
  );
}

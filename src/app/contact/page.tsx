"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import gsap from "gsap";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text > *",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-charcoal">
      {/* Hero */}
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/PacProcess 2025/ 1.jpeg" alt="Contact Hero" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 hero-text text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 max-w-4xl mx-auto">
            GET IN <span className="text-brand-red">TOUCH</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body leading-relaxed">
            Our engineering consultants and sales team are ready to assist you with custom quotes, technical support, and partnership inquiries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-12 bg-white relative z-20 rounded-t-3xl shadow-2xl mx-4 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold font-heading uppercase tracking-tighter mb-8">Contact Details</h2>
              <p className="text-charcoal/60 font-body mb-12 leading-relaxed">
                Reach out to our global headquarters for immediate assistance. We operate across all major time zones to support our international client base.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading uppercase text-lg mb-2">Global Headquarters</h3>
                    <p className="text-charcoal/60 font-body">1234 Industrial Boulevard<br/>Engineering District, NY 10001<br/>United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading uppercase text-lg mb-2">Direct Line</h3>
                    <p className="text-charcoal/60 font-body">+1 (800) BELLA-PK<br/>+1 (212) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-charcoal" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading uppercase text-lg mb-2">Email Inquiries</h3>
                    <p className="text-charcoal/60 font-body">sales@bellapack.com<br/>support@bellapack.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Request a Quote Form */}
            <div className="bg-brand-blue/5 p-10 rounded-sm border border-brand-blue/10">
              <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8">Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-blue transition-colors font-body" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-blue transition-colors font-body" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-blue transition-colors font-body" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-blue transition-colors font-body" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-widest mb-2">Industry / Machine Interest</label>
                  <select className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-blue transition-colors font-body appearance-none">
                    <option>Select an option...</option>
                    <option>Food & Beverage</option>
                    <option>Pharmaceuticals</option>
                    <option>Chemicals</option>
                    <option>Custom Integrated Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-widest mb-2">Project Details</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-blue transition-colors font-body resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-brand-red text-white px-8 py-4 rounded-sm font-heading font-bold text-lg hover:bg-charcoal transition-colors flex items-center justify-center space-x-2">
                  <span>SEND INQUIRY</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

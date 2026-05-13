"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import InquiryForm from "@/components/contact/InquiryForm";
import ContactCTA from "@/components/contact/ContactCTA";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth stagger entrance for the main content block
      gsap.fromTo(
        ".content-reveal",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".content-grid",
            start: "top 80%",
          },
        }
      );

      // Global simple scroll reveals for headings
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-white text-charcoal relative">
      <ContactHero />
      
      {/* Content Section */}
      <section className="content-grid bg-white relative z-20 pb-24 -mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left column: Info (spanning 5 cols) */}
            <div className="content-reveal lg:col-span-5 lg:pt-12">
              <ContactDetails />
            </div>
            
            {/* Right column: Form (spanning 7 cols) */}
            <div className="content-reveal lg:col-span-7 relative z-30">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

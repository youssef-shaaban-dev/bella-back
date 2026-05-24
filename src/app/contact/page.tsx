"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactCTA from "@/components/contact/ContactCTA";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth stagger entrance for the main content block
      gsap.fromTo(
        ".content-reveal",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".content-grid",
            start: "top 90%",
          },
        }
      );

      // Global simple scroll reveals for headings
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 93%",
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
          <div className="content-reveal max-w-3xl mx-auto pt-12">
            <ContactDetails />
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

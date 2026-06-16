"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for child elements (0 = no stagger) */
  stagger?: number;
  /** Root margin for IntersectionObserver (default: "0px 0px -7% 0px") */
  rootMargin?: string;
  as?: keyof HTMLElementTagNameMap;
}

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver + CSS transitions.
 * Replaces GSAP ScrollTrigger for simple fade-in-on-scroll patterns (~1KB vs ~60KB).
 */
export default function ScrollReveal({
  children,
  className = "",
  stagger = 0,
  rootMargin = "0px 0px -7% 0px",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger > 0) {
            // Stagger children
            const children = el.querySelectorAll(":scope > *");
            children.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * stagger}ms`;
              child.classList.add("sr-visible");
            });
          } else {
            el.classList.add("sr-visible");
          }
          observer.unobserve(el);
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, rootMargin]);

  const baseClass = stagger > 0 ? "sr-stagger-parent" : "sr-hidden";

  return (
    // @ts-expect-error — Tag is a valid HTML element string
    <Tag ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </Tag>
  );
}

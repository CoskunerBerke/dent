"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: 25, label: "Yıllık Deneyim", suffix: "+" },
  { value: 12000, label: "Mutlu Hasta", suffix: "+" },
  { value: 98, label: "Hasta Memnuniyeti", suffix: "%" },
  { value: 15, label: "Uzman Hekim", suffix: "+" },
];

export default function CinematicStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetVal = parseInt(el.getAttribute("data-target") || "0", 10);
        
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: targetVal,
            duration: 2.0,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="istatistikler"
      className="relative w-full bg-[#04090d] border-t border-b border-[rgba(202,168,105,0.18)] py-12 lg:py-0 lg:min-h-[180px] flex items-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[64px] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center lg:items-start justify-center"
            >
              <p 
                className="font-display text-[var(--color-accent)] font-light tracking-tight"
                style={{ fontSize: "clamp(48px, 5vw, 76px)", lineHeight: "0.95" }}
              >
                <span
                  ref={(el) => {
                    countersRef.current[i] = el;
                  }}
                  data-target={stat.value}
                >
                  0
                </span>
                <span>{stat.suffix}</span>
              </p>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#f0ebe3]/70 mt-[14px] font-medium">
                {stat.label}
              </p>
              
              {/* Subtle vertical separator for desktop */}
              {i < 3 && (
                <div className="hidden lg:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-12 bg-[rgba(202,168,105,0.15)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

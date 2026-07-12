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
      className="relative py-16 lg:py-24 bg-[#04090d] overflow-hidden"
    >
      {/* Top clean divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 relative z-10">
        {/* Clean, evenly spaced 4-column horizontal stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center lg:text-left">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center lg:items-start justify-center lg:border-l lg:border-[var(--color-border)] lg:pl-10 first:border-none first:pl-0"
            >
              <p className="font-display text-4xl lg:text-5xl text-[var(--color-accent)] font-light tracking-tight">
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
              <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-muted)] mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

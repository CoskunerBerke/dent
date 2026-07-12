"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { introContent } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function IntroductionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Each line reveals on scroll
      const lines = section.querySelectorAll(".reveal-line");
      lines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Moving visual panel parallax
      gsap.to(panelRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tanitim"
      className="relative py-32 lg:py-48 overflow-hidden"
      aria-label="Tanıtım bölümü"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — editorial text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-label text-[var(--color-accent)] mb-10 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              {introContent.eyebrow}
            </motion.p>

            <div ref={linesRef} className="mb-12">
              {introContent.lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <h2
                    className={`reveal-line display-lg text-[var(--color-text)] ${
                      i % 2 === 1 ? "pl-12 text-[var(--color-accent)] italic" : ""
                    }`}
                  >
                    {line}
                  </h2>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-body text-[var(--color-muted)] max-w-md leading-relaxed"
            >
              {introContent.body}
            </motion.p>
          </div>

          {/* Right — stats grid + decorative panel */}
          <div className="relative">
            {/* Decorative border panel */}
            <div
              ref={panelRef}
              className="absolute -top-8 -right-4 w-48 h-48 border border-[var(--color-border)] opacity-40 hidden lg:block"
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {introContent.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="border-t border-[var(--color-border)] pt-6"
                >
                  <div className="display-md text-[var(--color-accent)] mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-display font-light"
                    />
                  </div>
                  <p className="text-label text-[var(--color-muted)]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 h-px bg-[var(--color-accent)] origin-left opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { introContent } from "@/data/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroductionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Gentle parallax scroll on doctor portrait
      gsap.to(imageWrapperRef.current, {
        y: -30,
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
      id="hikayemiz"
      className="relative py-24 lg:py-36 bg-[#04090d] overflow-hidden"
      aria-label="Tanıtım bölümü"
    >
      {/* Subtle background light spotlight */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 45%, rgba(202,168,105,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-16 lg:gap-[110px] items-center">
          
          {/* Left Column — Hakan Saylam Portrait */}
          <div className="relative">
            <div
              ref={imageWrapperRef}
              className="relative overflow-hidden border border-[rgba(202,168,105,0.22)] rounded-[8px] bg-[#020507] shadow-2xl"
              style={{ height: "clamp(480px, 60vh, 680px)" }}
            >
              <Image
                src="/images/projects/hakan_saylam.png"
                alt="Diş Hekimi Hakan Saylam"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-[1.5s]"
                priority
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(4,9,12,0.95) 0%, rgba(4,9,12,0.3) 45%, transparent 100%)",
                }}
              />
              
              {/* Doctor Details Badge */}
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-1 font-semibold">
                  KURUCU HEKİM
                </p>
                <h3 className="font-display text-[26px] font-light text-white tracking-wide">
                  Dt. Hakan Saylam
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column — Professional Content */}
          <div className="space-y-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-4 font-semibold flex items-center gap-3">
                <span className="w-6 h-px bg-[var(--color-accent)]" />
                {introContent.eyebrow}
              </p>
              
              <h2 
                className="font-display text-white tracking-tight mb-8"
                style={{
                  fontSize: "clamp(40px, 4vw, 56px)",
                  lineHeight: "1.1",
                }}
              >
                Gülüşünüzü <span className="italic text-[var(--color-accent)] font-normal">Sağlıkla</span>
                <br />
                Yeniden Şekillendiriyoruz
              </h2>

              <p 
                className="text-[#8c857b] leading-relaxed max-w-xl font-light"
                style={{ fontSize: "16px", lineHeight: "1.75" }}
              >
                {introContent.body}
              </p>
            </div>

            {/* Success Counters Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12 pt-4 border-t border-white/[0.06]">
              {introContent.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-[36px] lg:text-[42px] font-light text-[var(--color-accent)] mb-1.5 leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-display font-light"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8c857b] font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

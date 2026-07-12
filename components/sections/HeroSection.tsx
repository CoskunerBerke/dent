"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroContent, siteConfig } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Video scrubbing via scroll
    const video = videoRef.current;

    const ctx = gsap.context(() => {
      // Pin the hero
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Video scrub
      if (video) {
        gsap.to(video, {
          currentTime: () => video.duration || 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            scrub: true,
          },
        });
      }

      // Background scale
      tl.to(bgRef.current, { scale: 1.12, ease: "none" }, 0);

      // Overlay darkens
      tl.to(overlayRef.current, { opacity: 0.85, ease: "none" }, 0);

      // Title splits apart
      tl.to(
        titleRef.current,
        { y: -120, opacity: 0, filter: "blur(20px)", ease: "none" },
        0
      );

      // Subtitle fades
      tl.to(subtitleRef.current, { y: -60, opacity: 0, ease: "none" }, 0.15);
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById("tanitim");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[var(--color-bg)]"
      aria-label="Ana sayfa hero bölümü"
    >
      {/* Background video / fallback */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.webp"
          playsInline
          muted
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback gradient background when video is not available */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, #1a1408 0%, #0a0a0a 60%), linear-gradient(135deg, #0f0e0a 0%, #0a0a0a 100%)",
          }}
        />
      </div>

      {/* Dark cinematic overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[var(--color-bg)]/60"
        aria-hidden="true"
      />

      {/* Thin gold horizontal lines - decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-10"
          style={{ background: "var(--color-accent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 max-w-[1600px] mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-label text-[var(--color-accent)] mb-6 flex items-center gap-4"
        >
          <span className="inline-block w-8 h-px bg-[var(--color-accent)]" />
          {heroContent.eyebrow}
        </motion.p>

        {/* Main title */}
        <div ref={titleRef} className="mb-8">
          {heroContent.headline.map((line, i) => (
            <motion.div
              key={i}
              className="overflow-hidden"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 0.5 + i * 0.12,
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <h1
                className={`display-hero text-[var(--color-text)] leading-none ${
                  i === 1 ? "text-[var(--color-accent)] italic" : ""
                }`}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-body text-[var(--color-muted)] mb-10"
          >
            {heroContent.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              onClick={() => {
                document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-label font-semibold hover:bg-[var(--color-accent-light)] transition-colors duration-300"
            >
              {heroContent.cta}
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                document.getElementById("hizmetler")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border border-[var(--color-border)] text-[var(--color-text)] text-label hover:border-[var(--color-accent)] transition-colors duration-300"
            >
              {heroContent.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-8 left-6 lg:left-16 right-6 lg:right-16 flex items-end justify-between"
        >
          <div className="flex flex-col gap-1">
            <p className="text-label text-[var(--color-muted)]">{siteConfig.contact.address}</p>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors cursor-none group"
            aria-label="Aşağı kaydır"
          >
            <span className="text-label">{heroContent.scrollLabel}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Side text */}
      <div
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-3"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        <span className="text-label text-[var(--color-muted)] tracking-widest">
          {siteConfig.contact.phone}
        </span>
        <span className="w-16 h-px bg-[var(--color-accent)] rotate-90" />
      </div>
    </section>
  );
}

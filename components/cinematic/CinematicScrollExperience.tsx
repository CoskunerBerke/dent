"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ToothSVG from "./ToothSVG";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CinematicScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  // Tooth wrappers
  const toothWrapRef = useRef<HTMLDivElement>(null);

  // Background overlays
  const bgGradientRef = useRef<HTMLDivElement>(null);

  // Scene content refs
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const scene4Ref = useRef<HTMLDivElement>(null);

  // Annotation ref for Scene 2
  const annotationRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (typeof window === "undefined" || !pinnedRef.current || !toothWrapRef.current) return;

    const ctx = gsap.context(() => {
      // 4-Scene Master Scroll timeline setup (reduced vertical distance for premium speed/feel)
      const PIN_END = isMobile ? "+=200%" : "+=320%";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: PIN_END,
          pin: true,
          pinSpacing: true,
          scrub: 1.0,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Initial settings (Ensure tooth is fully visible right away at 100% opacity, sharp)
      gsap.set(toothWrapRef.current, {
        x: isMobile ? 0 : "22vw",
        y: 0,
        scale: isMobile ? 0.95 : 1.15,
        rotateZ: 0,
        rotateY: 0,
        opacity: 1,
        filter: "blur(0px)",
      });

      // Reset scenes opacity
      gsap.set([scene2Ref.current, scene3Ref.current, scene4Ref.current], { opacity: 0, pointerEvents: "none" });
      gsap.set(annotationRef.current, { opacity: 0, scale: 0.8 });

      // ── SCENE 1 → SCENE 2: PRECISION & TECHNOLOGY ────────────────────────
      tl.to(scene1Ref.current, { opacity: 0, y: -40, duration: 1.2, ease: "power2.inOut" }, 0.5)
        .to(toothWrapRef.current, {
          x: 0,
          scale: isMobile ? 1.0 : 1.25,
          rotateY: isMobile ? 0 : 20, // gentle rotation
          rotateZ: isMobile ? 0 : 5,
          duration: 2.0,
          ease: "power2.inOut",
        }, 0.5)
        .to(scene2Ref.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 1.2,
          ease: "power2.out",
        }, 1.5)
        .to(annotationRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "back.out(1.5)",
        }, 2.0)

      // ── SCENE 2 → SCENE 3: TREATMENTS ────────────────────────────────────
        .to(scene2Ref.current, { opacity: 0, y: -40, duration: 1.2, ease: "power2.inOut" }, 3.5)
        .to(annotationRef.current, { opacity: 0, scale: 0.8, duration: 0.8 }, 3.5)
        .to(toothWrapRef.current, {
          x: isMobile ? 0 : "-22vw", // sweeps smoothly to the left
          scale: isMobile ? 0.85 : 1.0,
          rotateY: isMobile ? 0 : -15,
          rotateZ: isMobile ? 0 : -8,
          duration: 2.0,
          ease: "power2.inOut",
        }, 3.5)
        .to(scene3Ref.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 1.2,
          ease: "power2.out",
        }, 4.5)

      // ── SCENE 3 → SCENE 4: FINAL CTA ─────────────────────────────────────
        .to(scene3Ref.current, { opacity: 0, y: -40, duration: 1.2, ease: "power2.inOut" }, 6.5)
        .to(toothWrapRef.current, {
          x: 0,
          y: isMobile ? "-18vh" : "-22vh",
          scale: isMobile ? 0.8 : 0.9,
          rotateY: 0,
          rotateZ: 0,
          duration: 2.0,
          ease: "power2.inOut",
        }, 6.5)
        .to(scene4Ref.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 1.5,
          ease: "power2.out",
        }, 7.5);

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="relative">
      {/* 4-Scene Pinned Cinematic Container */}
      <div
        ref={pinnedRef}
        className="relative w-full h-screen overflow-hidden bg-[#04090d]"
        style={{ willChange: "transform" }}
      >
        {/* Deep navy studio background gradient */}
        <div
          ref={bgGradientRef}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(28, 72, 86, 0.45) 0%, rgba(8, 18, 24, 0.96) 55%, rgba(4, 9, 13, 1) 100%)",
          }}
        />

        {/* ── THE PERSISTENT TOOTH HERO ── */}
        <div
          ref={toothWrapRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zIndex: 10,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          <div className="w-[280px] h-auto lg:w-[350px]">
            <ToothSVG />
          </div>
        </div>

        {/* ── SCENE 1: Clean, editorial, non-cluttered hero layout ── */}
        <div
          ref={scene1Ref}
          className="absolute inset-0 flex items-center z-20 max-w-[1400px] mx-auto px-8 lg:px-20"
        >
          <div className="max-w-[85vw] lg:max-w-[45vw]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              DİŞ HEKİMİ HAKAN SAYLAM
            </p>
            <h1 className="font-display text-[9vw] lg:text-[5vw] leading-[1.05] font-light text-[var(--color-text)] tracking-tight">
              Gülüşünüzü
              <br />
              <span className="italic text-[var(--color-accent)]">Yeniden</span>
              <br />
              Tasarlıyoruz.
            </h1>
            <p className="mt-6 text-xs lg:text-sm text-[var(--color-muted)] max-w-sm leading-relaxed">
              İleri teknoloji, sterilizasyon standartları ve kişiye özel tedavi yaklaşımı.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#iletisim"
                className="bg-[var(--color-accent)] text-[#04090d] hover:bg-[var(--color-accent-light)] transition-all duration-300 px-8 py-3.5 text-[10px] tracking-[0.2em] uppercase font-semibold"
              >
                Randevu Oluştur
              </a>
              <a
                href="#hizmetler"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hizmetler")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-white/20 text-white hover:bg-white/5 transition-all duration-300 px-8 py-3.5 text-[10px] tracking-[0.2em] uppercase"
              >
                Tedavileri İncele
              </a>
            </div>
          </div>
        </div>

        {/* ── SCENE 2: Precision & Technology ── */}
        <div
          ref={scene2Ref}
          className="absolute inset-0 flex items-center z-20 max-w-[1400px] mx-auto px-8 lg:px-20 pointer-events-none"
        >
          <div className="max-w-[85vw] lg:max-w-[35vw]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-4 font-semibold">
              Dijital Hassasiyet
            </p>
            <h2 className="font-display text-[7vw] lg:text-[4vw] leading-[1.1] font-light text-[var(--color-text)]">
              Mükemmel Yapı ve
              <br />
              <span className="italic text-[var(--color-accent)]">Uyum</span>
            </h2>
            <p className="mt-4 text-xs lg:text-sm text-[var(--color-muted)] leading-relaxed">
              3D tarayıcılar ve steril laboratuvar ortamlarında hazırlanan restorasyonlarla doğal diş formunuza kavuşmanızı sağlıyoruz.
            </p>
          </div>

          {/* Clean clinical annotation pointer */}
          <div
            ref={annotationRef}
            className="absolute left-[54%] top-[25%] hidden lg:flex items-center gap-4 z-30"
          >
            <div className="w-16 h-px bg-[var(--color-accent)]/60" />
            <div className="bg-black/85 border border-[var(--color-border)] px-4 py-2.5 backdrop-blur-md">
              <p className="text-[9px] tracking-widest text-[var(--color-accent)] uppercase font-semibold">
                Otoklav &amp; Steril Enamel
              </p>
            </div>
          </div>
        </div>

        {/* ── SCENE 3: Editorial Treatments List ── */}
        <div
          ref={scene3Ref}
          className="absolute inset-0 flex items-center justify-end z-20 max-w-[1400px] mx-auto px-8 lg:px-20 pointer-events-none"
        >
          <div className="w-full lg:max-w-[40vw]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-8 font-semibold">
              Tedavi Çözümlerimiz
            </p>
            <div className="space-y-0">
              {[
                { title: "Muayene ve Teşhis", label: "01" },
                { title: "Estetik Diş Hekimliği", label: "02" },
                { title: "Kanal Tedavisi", label: "03" },
              ].map((svc) => (
                <div
                  key={svc.label}
                  className="border-b border-[var(--color-border)] py-6 flex justify-between items-center"
                >
                  <h3 className="font-display text-xl lg:text-2xl font-light text-[var(--color-text)]">
                    {svc.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[var(--color-accent)]">
                    {svc.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SCENE 4: Final CTA — text sits BELOW the tooth ── */}
        <div
          ref={scene4Ref}
          className="absolute inset-0 flex flex-col items-center justify-end pb-[10vh] lg:pb-[12vh] text-center px-8 z-30 pointer-events-none"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-5 font-semibold">
            HAKAN SAYLAM DİŞ MUAYENEHANESİ
          </p>
          <h2 className="font-display text-[7vw] lg:text-[4vw] leading-[1.1] font-light text-[var(--color-text)] tracking-tight">
            Hayalinizdeki Gülüşe
            <br />
            <span className="italic text-[var(--color-accent)]">Bugün Kavuşun</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <a
              href="#iletisim"
              className="bg-[var(--color-accent)] text-[#04090d] hover:bg-[var(--color-accent-light)] transition-all duration-300 px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-bold rounded-[8px]"
            >
              Randevu Al
            </a>
            <a
              href="tel:+903125020230"
              className="border border-white/20 text-white hover:bg-white/5 transition-all duration-300 px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold rounded-[8px]"
            >
              0 (312) 502 02 30
            </a>
          </div>
          <p className="mt-6 text-[12px] tracking-wider text-[var(--color-muted)]">
            YDA Center A2 Blok Kat:12 No:507, Kızılırmak · Çankaya / Ankara
          </p>
        </div>
      </div>
    </div>
  );
}

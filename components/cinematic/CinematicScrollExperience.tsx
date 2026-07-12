"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ToothSVG from "./ToothSVG";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    index: "01",
    title: "Dental İmplant",
    desc: "Titanyum kök ile kaybedilen dişiniz\nyeniden doğuyor. Ömür boyu çözüm.",
    tag: "Kalıcı",
  },
  {
    index: "02",
    title: "Porselen Veneer",
    desc: "Milimetrik hassasiyetle uygulanan\nporselen yapraklar. Hollywood gülüşü.",
    tag: "Estetik",
  },
  {
    index: "03",
    title: "Şeffaf Plak",
    desc: "Görünmez ortodontik sistemlerle\ndüzgün dişler. Sosyal hayatınız kısıtlanmaz.",
    tag: "İnvisalign",
  },
  {
    index: "04",
    title: "Diş Beyazlatma",
    desc: "Zoom sistemi ile tek seansta\n8 ton açılım. Anında fark.",
    tag: "Hızlı",
  },
];

export default function CinematicScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  // Layer refs
  const toothRef = useRef<SVGSVGElement>(null);
  const toothWrapRef = useRef<HTMLDivElement>(null);

  // Background scene refs
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const bg3Ref = useRef<HTMLDivElement>(null);
  const bg4Ref = useRef<HTMLDivElement>(null);
  const bg5Ref = useRef<HTMLDivElement>(null);
  const bg6Ref = useRef<HTMLDivElement>(null);
  const bg7Ref = useRef<HTMLDivElement>(null);

  // Text refs
  const scene1TextRef = useRef<HTMLDivElement>(null);
  const scene2TextRef = useRef<HTMLDivElement>(null);
  const scene3TextRef = useRef<HTMLDivElement>(null);
  const scene4TextRef = useRef<HTMLDivElement>(null);
  const scene5TextRef = useRef<HTMLDivElement>(null);
  const scene6TextRef = useRef<HTMLDivElement>(null);
  const scene7TextRef = useRef<HTMLDivElement>(null);

  // Service items
  const serviceItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mask ref for circular transition
  const maskRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  // Stats refs
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!pinnedRef.current || !toothWrapRef.current) return;

    const ctx = gsap.context(() => {
      // ── SCROLL PROGRESS BAR ──────────────────────────────────────
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      // ── PINNED SEQUENCE ──────────────────────────────────────────
      const PIN_END = isMobile ? "+=280%" : "+=580%";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedRef.current,
          start: "top top",
          end: PIN_END,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update section label
            const p = self.progress;
            if (labelRef.current) {
              let label = "Açılış";
              if (p > 0.14) label = "Dönüşüm";
              if (p > 0.31) label = "Hizmetler";
              if (p > 0.51) label = "Geçiş";
              if (p > 0.62) label = "Vitrin";
              if (p > 0.78) label = "Rakamlar";
              if (p > 0.88) label = "Randevu";
              labelRef.current.textContent = label;
            }
          },
        },
      });

      // ── SCENE 1: OPENING ─────────────────────────────────────────
      // Initial state: tooth blurred, headline hidden
      gsap.set(toothWrapRef.current, {
        x: 0,
        y: 60,
        scale: 0.8,
        rotateZ: -4,
        opacity: 0,
        filter: "blur(20px)",
        transformPerspective: 1000,
      });
      gsap.set([bg2Ref.current, bg3Ref.current, bg4Ref.current, bg5Ref.current, bg6Ref.current, bg7Ref.current], { opacity: 0 });
      gsap.set(scene1TextRef.current, { opacity: 0, y: 50 });
      gsap.set([scene2TextRef.current, scene3TextRef.current, scene4TextRef.current, scene5TextRef.current, scene6TextRef.current, scene7TextRef.current], { opacity: 0 });
      gsap.set(maskRef.current, { scale: 0, opacity: 0 });

      // Scene 1 — Reveal
      tl
        .to(toothWrapRef.current, {
          y: 0, scale: 1, rotateZ: 0, opacity: 1, filter: "blur(0px)",
          duration: 1.5, ease: "power3.out",
        }, 0)
        .to(scene1TextRef.current, {
          opacity: 1, y: 0, duration: 1.2, ease: "power2.out",
        }, 0.4)

        // Subtle breathing — tooth slowly rotates Z
        .to(toothWrapRef.current, {
          rotateZ: 3, duration: 2, ease: "sine.inOut",
        }, 1.5)

      // ── SCENE 1→2 TRANSITION ─────────────────────────────────────
        // Exit scene1 text
        .to(scene1TextRef.current, {
          opacity: 0, y: -70, duration: 1, ease: "power2.in",
        }, 2.8)
        // Tooth moves right + rotates + scales
        .to(toothWrapRef.current, {
          x: isMobile ? 0 : "32vw",
          y: isMobile ? -50 : -40,
          scale: isMobile ? 0.9 : 1.35,
          rotateZ: isMobile ? 0 : 12,
          rotateY: isMobile ? 0 : 18,
          duration: 2.5, ease: "power2.inOut",
        }, 2.8)
        // BG shift to warm dark
        .to(bg1Ref.current, { opacity: 0, duration: 1.5 }, 3.2)
        .to(bg2Ref.current, { opacity: 1, duration: 1.5 }, 3.2)
        // Scene 2 text in
        .to(scene2TextRef.current, {
          opacity: 1, x: 0, duration: 1.2, ease: "power2.out",
        }, 3.8)

      // ── SCENE 3: SERVICES ─────────────────────────────────────────
        // Tooth settles slightly
        .to(toothWrapRef.current, {
          x: isMobile ? 0 : "28vw",
          scale: isMobile ? 0.85 : 1.15,
          rotateZ: 6,
          rotateY: isMobile ? 0 : 10,
          duration: 2, ease: "power1.inOut",
        }, 5.5)
        .to(scene2TextRef.current, { opacity: 0, x: -60, duration: 1 }, 5.5)
        .to(bg2Ref.current, { opacity: 0, duration: 1.5 }, 5.8)
        .to(bg3Ref.current, { opacity: 1, duration: 1.5 }, 5.8)
        .to(scene3TextRef.current, { opacity: 1, y: 0, duration: 1 }, 6.2)

      // Service items stagger in
      serviceItemsRef.current.forEach((el, i) => {
        if (!el) return;
        tl.to(el, {
          opacity: 1, x: 0, y: 0,
          duration: 0.8, ease: "power2.out",
        }, 6.5 + i * 0.5);
      });

      // Tooth sways gently during services
      tl.to(toothWrapRef.current, {
        rotateZ: 10, rotateY: isMobile ? 0 : 15,
        duration: 3, ease: "sine.inOut",
      }, 7);

      // ── SCENE 4: CINEMATIC TRANSITION ─────────────────────────────
      tl
        .to(scene3TextRef.current, { opacity: 0, duration: 0.8 }, 11)
        .to(serviceItemsRef.current.filter(Boolean), { opacity: 0, duration: 0.8 }, 11)
        // Tooth rushes to center, scales huge
        .to(toothWrapRef.current, {
          x: 0, y: 0,
          scale: isMobile ? 2.5 : 4.5,
          rotateZ: 0, rotateY: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 2, ease: "power3.in",
        }, 11.5)
        // Mask expands (circular wipe)
        .to(maskRef.current, {
          opacity: 1, scale: 1,
          duration: 1.5, ease: "power2.out",
        }, 12.5)
        // Tooth fades behind mask
        .to(toothWrapRef.current, {
          opacity: 0, filter: "blur(10px)",
          duration: 1, ease: "power2.in",
        }, 13)
        // BG transitions
        .to(bg3Ref.current, { opacity: 0, duration: 1 }, 12.5)
        .to(bg4Ref.current, { opacity: 1, duration: 1.5 }, 12.8)
        .to(scene4TextRef.current, { opacity: 1, duration: 1 }, 13.2)

      // ── SCENE 5: SHOWCASE ─────────────────────────────────────────
      tl
        .to(scene4TextRef.current, { opacity: 0, duration: 0.8 }, 15)
        .to(bg4Ref.current, { opacity: 0, duration: 1 }, 15)
        .to(bg5Ref.current, { opacity: 1, duration: 1.5 }, 15)
        .to(maskRef.current, { opacity: 0, scale: 0.5, duration: 1 }, 15)
        // Tooth reappears — small, top corner
        .to(toothWrapRef.current, {
          x: isMobile ? 0 : "38vw",
          y: isMobile ? -200 : -220,
          scale: isMobile ? 0.3 : 0.22,
          rotateZ: 15,
          rotateY: 0,
          opacity: 0.8,
          filter: "blur(0px)",
          duration: 2, ease: "power2.out",
        }, 15.2)
        .to(scene5TextRef.current, { opacity: 1, y: 0, duration: 1 }, 16)

      // Showcase imagery scroll
      if (showcaseRef.current) {
        tl.to(showcaseRef.current, {
          y: "-15%",
          duration: 4, ease: "none",
        }, 15);
      }

      // ── SCENE 6: SECOND OBJECT MOVEMENT ──────────────────────────
      tl
        .to(scene5TextRef.current, { opacity: 0, duration: 0.8 }, 20)
        .to(bg5Ref.current, { opacity: 0, duration: 1.5 }, 20)
        .to(bg6Ref.current, { opacity: 1, duration: 1.5 }, 20)
        // Tooth sweeps from top-right to center-left, big
        .to(toothWrapRef.current, {
          x: isMobile ? 0 : "-30vw",
          y: 0,
          scale: isMobile ? 0.95 : 1.0,
          rotateZ: -8,
          rotateY: isMobile ? 0 : -12,
          opacity: 1,
          duration: 2.5, ease: "power2.inOut",
        }, 20.5)
        .to(scene6TextRef.current, { opacity: 1, x: 0, duration: 1.2 }, 21.5)

      // Stats count-up simulation via opacity stagger
      const statsArray = [stat1Ref, stat2Ref, stat3Ref];
      statsArray.forEach((ref, i) => {
        if (!ref.current) return;
        tl.to(ref.current, { opacity: 1, y: 0, duration: 0.8 }, 22 + i * 0.4);
      });

      // Tooth passes through text (z-index change via scale)
      tl.to(toothWrapRef.current, {
        x: isMobile ? 0 : "10vw",
        rotateZ: 5,
        scale: isMobile ? 1.1 : 1.2,
        duration: 2, ease: "sine.inOut",
      }, 23);

      // ── SCENE 7: FINAL REVEAL ─────────────────────────────────────
      tl
        .to(scene6TextRef.current, { opacity: 0, duration: 0.8 }, 25.5)
        .to([stat1Ref.current, stat2Ref.current, stat3Ref.current].filter(Boolean), { opacity: 0, duration: 0.8 }, 25.5)
        .to(bg6Ref.current, { opacity: 0, duration: 1.5 }, 25.5)
        .to(bg7Ref.current, { opacity: 1, duration: 1.5 }, 25.5)
        // Tooth settles center
        .to(toothWrapRef.current, {
          x: 0, y: 20,
          scale: isMobile ? 1.0 : 1.05,
          rotateZ: 0, rotateY: 0,
          opacity: 1,
          duration: 2.5, ease: "power2.out",
        }, 26)
        // Final text
        .to(scene7TextRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, 27)

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, prefersReducedMotion]);

  return (
    <div ref={containerRef} className="relative">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
        style={{ background: "var(--color-accent)", transform: "scaleX(0)" }}
        ref={progressRef}
      />

      {/* Section Label */}
      <div
        ref={labelRef}
        className="fixed bottom-8 left-8 z-[100] text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] opacity-60 hidden lg:block"
      >
        Açılış
      </div>

      {/* ════════ PINNED CINEMATIC SEQUENCE ════════ */}
      <div
        ref={pinnedRef}
        className="relative w-full h-screen overflow-hidden"
        style={{ willChange: "transform" }}
      >
        {/* ── BACKGROUNDS ── */}

        {/* BG 1 — Pure dark + center gold glow */}
        <div ref={bg1Ref} className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 45%, rgba(201,169,110,0.06) 0%, transparent 70%), #080808",
          zIndex: 0,
        }} />

        {/* BG 2 — Warm dark */}
        <div ref={bg2Ref} className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,169,110,0.08) 0%, transparent 60%), linear-gradient(135deg, #0e0b07 0%, #090806 100%)",
          zIndex: 0,
        }} />

        {/* BG 3 — Cold dark blue */}
        <div ref={bg3Ref} className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(60,80,120,0.12) 0%, transparent 60%), linear-gradient(180deg, #06080e 0%, #08080a 100%)",
          zIndex: 0,
        }} />

        {/* BG 4 — Transition/flash */}
        <div ref={bg4Ref} className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.25) 0%, rgba(20,16,10,0.95) 50%, #060606 100%)",
          zIndex: 0,
        }} />

        {/* BG 5 — Showcase dark with image */}
        <div ref={bg5Ref} className="absolute inset-0" style={{ zIndex: 0 }}>
          <div className="absolute inset-0 bg-[#060606]" />
          <div ref={showcaseRef} className="absolute inset-[-15%] top-[-5%]">
            <Image
              src="/images/projects/gallery-4.png"
              alt="Klinik görseli"
              fill
              unoptimized
              className="object-cover"
              style={{ opacity: 0.35 }}
            />
          </div>
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, #060606 0%, transparent 25%, transparent 75%, #060606 100%)",
          }} />
        </div>

        {/* BG 6 — Gold bloom */}
        <div ref={bg6Ref} className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(201,169,110,0.07) 0%, transparent 65%), #080808",
          zIndex: 0,
        }} />

        {/* BG 7 — Final: dark with subtle accent */}
        <div ref={bg7Ref} className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 60%, rgba(201,169,110,0.1) 0%, transparent 60%), linear-gradient(180deg, #060606 0%, #0a0906 100%)",
          zIndex: 0,
        }} />

        {/* ── CIRCULAR MASK (Scene 4 transition) ── */}
        <div
          ref={maskRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 15,
            background: "radial-gradient(circle at 50% 50%, transparent 28%, rgba(201,169,110,0.15) 35%, #060606 50%)",
            transformOrigin: "center center",
          }}
        />

        {/* ── SCENE 1: Opening Text ── */}
        <div
          ref={scene1TextRef}
          className="absolute inset-0 flex flex-col justify-center px-8 lg:px-20"
          style={{ zIndex: 20, pointerEvents: "none" }}
        >
          <div className="max-w-[90vw] lg:max-w-[55vw]">
            <p className="text-[10px] lg:text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-6 lg:mb-10 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-[var(--color-accent)]" />
              Premium Diş Hekimliği — İstanbul
            </p>
            <h1
              className="font-display text-[7vw] lg:text-[5vw] leading-[1.05] font-light text-[var(--color-text)]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Kusursuz
              <br />
              <span className="italic text-[var(--color-accent)]">Gülüşler</span>
              <br />
              Tasarlarız
            </h1>
            <p className="mt-6 lg:mt-8 text-xs lg:text-sm text-[var(--color-muted)] max-w-sm leading-relaxed">
              25 yıllık deneyim. Her tedavi, yaşam boyu süren bir dönüşüm.
            </p>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-8 lg:left-20 flex items-center gap-4">
            <div className="w-[1px] h-16 bg-[var(--color-border)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-[var(--color-accent)] animate-scroll-line h-full" />
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] rotate-0">
              Kaydır
            </span>
          </div>
        </div>

        {/* ── SCENE 2: First Transformation Text ── */}
        <div
          ref={scene2TextRef}
          className="absolute inset-0 flex flex-col justify-center px-8 lg:px-20"
          style={{ zIndex: 20, pointerEvents: "none", transform: "translateX(-40px)" }}
        >
          <div className="max-w-[50vw] lg:max-w-[42vw]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-6">
              <span className="w-8 h-[1px] bg-[var(--color-accent)] inline-block mr-4 align-middle" />
              Köklü Uzmanlık
            </p>
            <h2
              className="font-display text-[6vw] lg:text-[4vw] leading-[1.1] font-light text-[var(--color-text)]"
              style={{ letterSpacing: "-0.02em" }}
            >
              25 Yıllık
              <br />
              <span className="italic text-[var(--color-accent)]">Mükemmellik</span>
            </h2>
            <div className="mt-6 flex gap-8">
              {[
                { n: "12.000+", l: "Hasta" },
                { n: "%98", l: "Memnuniyet" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl lg:text-4xl text-[var(--color-accent)] font-light">{s.n}</p>
                  <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SCENE 3: Services Text ── */}
        <div
          ref={scene3TextRef}
          className="absolute inset-0 flex items-center px-8 lg:px-20"
          style={{ zIndex: 20, pointerEvents: "none", transform: "translateY(20px)" }}
        >
          <div className="w-full lg:max-w-[45vw]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-8">
              <span className="w-8 h-[1px] bg-[var(--color-accent)] inline-block mr-4 align-middle" />
              Hizmetlerimiz
            </p>
            <div className="space-y-0">
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.index}
                  ref={(el) => { serviceItemsRef.current[i] = el; }}
                  className="border-b border-[var(--color-border)] py-5 lg:py-6 flex gap-8 items-start"
                  style={{ opacity: 0, transform: "translate(-30px, 10px)" }}
                >
                  <span className="text-[10px] tracking-widest text-[var(--color-accent)] mt-1 font-mono opacity-60 flex-shrink-0">
                    {svc.index}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-display text-xl lg:text-2xl font-light text-[var(--color-text)]">
                        {svc.title}
                      </h3>
                      <span className="text-[9px] tracking-widest uppercase border border-[var(--color-accent)]/40 text-[var(--color-accent)] px-2 py-0.5">
                        {svc.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line hidden lg:block">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SCENE 4: Transition Text ── */}
        <div
          ref={scene4TextRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 25, pointerEvents: "none" }}
        >
          <div className="text-center">
            <p className="font-display text-[7vw] lg:text-[4.5vw] leading-tight font-light text-[var(--color-text)]"
               style={{ letterSpacing: "-0.03em" }}>
              Her Detay
              <br />
              <span className="italic text-[var(--color-accent)]">Önemlidir</span>
            </p>
          </div>
        </div>

        {/* ── SCENE 5: Showcase Text ── */}
        <div
          ref={scene5TextRef}
          className="absolute inset-0 flex items-end pb-20 px-8 lg:px-20"
          style={{ zIndex: 20, pointerEvents: "none", transform: "translateY(30px)" }}
        >
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-4">
              <span className="w-8 h-[1px] bg-[var(--color-accent)] inline-block mr-4 align-middle" />
              Gerçek Sonuçlar
            </p>
            <h2 className="font-display text-[6vw] lg:text-[3.5vw] leading-[1.1] font-light text-[var(--color-text)]"
                style={{ letterSpacing: "-0.02em" }}>
              Hastalarımızın
              <br />
              <span className="italic text-[var(--color-accent)]">Hikayeleri</span>
            </h2>
          </div>
        </div>

        {/* ── SCENE 6: Stats Text ── */}
        <div
          ref={scene6TextRef}
          className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-24"
          style={{ zIndex: 20, pointerEvents: "none", transform: "translateX(40px)" }}
        >
          <div className="text-right">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-8 flex items-center gap-4 justify-end">
              Güven & Deneyim
              <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
            </p>
            <div className="space-y-6">
              <div ref={stat1Ref} style={{ opacity: 0, transform: "translateY(15px)" }}>
                <p className="font-display text-[7vw] lg:text-[5vw] leading-none font-light text-[var(--color-text)]"
                   style={{ letterSpacing: "-0.03em" }}>
                  25<span className="text-[var(--color-accent)]">+</span>
                </p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mt-1">Yıl Deneyim</p>
              </div>
              <div ref={stat2Ref} style={{ opacity: 0, transform: "translateY(15px)" }}>
                <p className="font-display text-[5vw] lg:text-[3.5vw] leading-none font-light text-[var(--color-accent)]"
                   style={{ letterSpacing: "-0.02em" }}>
                  12.000+
                </p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mt-1">Mutlu Hasta</p>
              </div>
              <div ref={stat3Ref} style={{ opacity: 0, transform: "translateY(15px)" }}>
                <p className="font-display text-[4vw] lg:text-[2.8vw] leading-none font-light text-[var(--color-text)]"
                   style={{ letterSpacing: "-0.02em" }}>
                  <span className="text-[var(--color-accent)]">%98</span> Memnuniyet
                </p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-muted)] mt-1">Hasta Geri Bildirimi</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SCENE 7: Final CTA Text ── */}
        <div
          ref={scene7TextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
          style={{ zIndex: 20, pointerEvents: "none", transform: "translateY(30px)" }}
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
            Başlayalım
            <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
          </p>
          <h2 className="font-display text-[6.5vw] lg:text-[4.5vw] leading-[1.05] font-light text-[var(--color-text)]"
              style={{ letterSpacing: "-0.02em" }}>
            Hayalinizdeki
            <br />
            <span className="italic text-[var(--color-accent)]">Gülüş</span>
            <br />
            Bir Adım Uzakta
          </h2>
          <a
            href="#iletisim"
            className="mt-8 inline-flex items-center gap-4 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-all duration-500 px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase pointer-events-auto group"
            style={{ pointerEvents: "auto" }}
          >
            Randevu Al
            <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300" />
          </a>
          <p className="mt-6 text-xs text-[var(--color-muted)] tracking-wider">
            +90 212 555 00 00 · Nişantaşı, İstanbul
          </p>
        </div>

        {/* ── THE PERSISTENT TOOTH SUBJECT ── */}
        <div
          ref={toothWrapRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zIndex: 10,
            transformStyle: "preserve-3d",
            perspective: "1200px",
          }}
        >
          <ToothSVG
            ref={toothRef}
            className="w-[280px] h-auto lg:w-[360px]"
            glowIntensity={0.65}
          />
        </div>

        {/* ── STATIC NAV INFO ── */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-20 py-6 pointer-events-none">
          <span className="font-display text-xl italic text-[var(--color-text)] tracking-wider">
            Denta
          </span>
          <div className="hidden lg:flex items-center gap-8">
            {["Hizmetler", "Galeri", "Hikaye", "İletişim"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace("ş", "s").replace("ı", "i").replace("İ", "i")}`}
                className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors pointer-events-auto"
              >
                {l}
              </a>
            ))}
            <a
              href="#iletisim"
              className="text-[10px] tracking-[0.2em] uppercase border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-all duration-300 pointer-events-auto"
            >
              Randevu
            </a>
          </div>
        </div>

        {/* Scene progress dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 pointer-events-none">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-30"
              style={{ transform: "scale(1)" }}
            />
          ))}
        </div>
      </div>

      {/* ════════ POST-CINEMATIC SECTIONS ════════ */}
      <div id="post-cinematic" style={{ position: "relative", zIndex: 1 }}>
        {/* Sections will be rendered by parent via children or imports */}
      </div>
    </div>
  );
}

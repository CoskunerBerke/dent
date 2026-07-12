"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT = "Sağlıklı Gülüşler · Premium Diş Hekimliği · İstanbul'un Lider Kliniği · Güven · Estetik · Teknoloji · ";

export default function TypographySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Marquee track 1 - left to right
      gsap.to(track1Ref.current, {
        x: "-50%",
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      // Marquee track 2 - right to left
      gsap.to(track2Ref.current, {
        x: "50%",
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      // Big text parallax on scroll
      gsap.fromTo(
        bigTextRef.current,
        { x: "-5%" },
        {
          x: "5%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-surface)]"
      aria-label="Büyük tipografi bölümü"
    >
      {/* Accent gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Moving marquee 1 */}
      <div className="overflow-hidden mb-4" aria-hidden="true">
        <div ref={track1Ref} className="flex whitespace-nowrap" style={{ width: "200%" }}>
          {[0, 1].map((j) => (
            <span key={j} className="text-label text-[var(--color-muted)] tracking-widest px-2">
              {MARQUEE_TEXT.repeat(3)}
            </span>
          ))}
        </div>
      </div>

      {/* Oversized statement text */}
      <div ref={bigTextRef} className="overflow-hidden py-8">
        <p
          className="whitespace-nowrap font-display font-light text-[var(--color-text)]"
          style={{ fontSize: "clamp(3rem, 12vw, 10rem)", lineHeight: 1 }}
        >
          <span className="text-[var(--color-accent)] italic">Güven</span>
          {" · "}
          <span>Kalite</span>
          {" · "}
          <span className="text-[var(--color-accent)] italic">Güzellik</span>
        </p>
      </div>

      {/* Moving marquee 2 (reverse) */}
      <div className="overflow-hidden mt-4" aria-hidden="true">
        <div
          ref={track2Ref}
          className="flex whitespace-nowrap"
          style={{ width: "200%", transform: "translateX(-50%)" }}
        >
          {[0, 1].map((j) => (
            <span key={j} className="text-label text-[var(--color-muted)] tracking-widest px-2">
              {MARQUEE_TEXT.repeat(3)}
            </span>
          ))}
        </div>
      </div>

      {/* Center statement */}
      <div className="text-center mt-16 px-6">
        <p className="text-body text-[var(--color-muted)] max-w-2xl mx-auto">
          Her gülüş bir yolculuktur. Biz bu yolculukta sizi en iyiyle buluşturuyoruz.
        </p>
      </div>
    </section>
  );
}

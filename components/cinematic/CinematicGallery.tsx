"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GALLERY_ITEMS = [
  { num: "01", title: "Tam Ağız Rehabilitasyonu", cat: "Restoratif", src: "/images/projects/gallery-1.png" },
  { num: "02", title: "Hollywood Gülüş Tasarımı", cat: "Estetik", src: "/images/projects/gallery-2.png" },
  { num: "03", title: "Dijital İmplant Köprü", cat: "Cerrahi", src: "/images/projects/gallery-3.png" },
  { num: "04", title: "Veneer Dönüşümü", cat: "Kozmetik", src: "/images/projects/veneer.png" },
  { num: "05", title: "Çocuk Diş Sağlığı", cat: "Pedodonti", src: "/images/projects/gallery-5.png" },
];

export default function CinematicGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;
    if (isMobileRef.current || !pinnedContainerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the inner wrapper instead of the root section element.
      // This prevents React from losing track of DOM child nodes when cleaning up pins.
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: pinnedContainerRef.current,
          start: "top top",
          end: () => `+=${trackRef.current!.scrollWidth - window.innerWidth}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    // Initial state for cursor
    gsap.set(cursorRef.current, { scale: 0, opacity: 0 });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cursorRef.current || isMobileRef.current) return;
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseEnterSection = () => {
    if (isMobileRef.current) return;
    setHovered(true);
    gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
  };

  const handleMouseLeaveSection = () => {
    if (isMobileRef.current) return;
    setHovered(false);
    gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
  };

  return (
    <section
      ref={sectionRef}
      id="galeri"
      className="relative bg-[#060606] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterSection}
      onMouseLeave={handleMouseLeaveSection}
    >
      {/* Premium Glassmorphic Follower Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] hidden lg:flex items-center justify-center border border-[rgba(201,169,110,0.3)] bg-[rgba(6,6,6,0.65)] backdrop-blur-[6px] shadow-2xl"
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
          Gör
        </span>
      </div>

      {/* Inner container to pin */}
      <div
        ref={pinnedContainerRef}
        className="w-full min-h-screen flex flex-col justify-center py-16 lg:py-0"
      >
        {/* Section header */}
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-20 mb-8 lg:mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-3 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
                Klinik Çalışmaları
              </p>
              <h2 className="font-display text-[7vw] lg:text-[4vw] font-light text-[var(--color-text)] leading-[1.1] "
                  style={{ letterSpacing: "-0.02em" }}>
                Seçili Galerimiz
              </h2>
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] hidden lg:block font-mono">
              [ {GALLERY_ITEMS.length} vaka ]
            </p>
          </div>
        </div>

        {/* Desktop: horizontal track */}
        <div
          ref={trackRef}
          className="hidden lg:flex gap-8 px-20"
          style={{ width: "max-content" }}
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.num} item={item} />
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden flex flex-col gap-6 px-8 pb-10">
          {GALLERY_ITEMS.map((item) => (
            <MobileGalleryCard key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: typeof GALLERY_ITEMS[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.015, duration: 0.6, ease: "power2.out" });
  };
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.6, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      className="relative flex-shrink-0 overflow-hidden group border border-[var(--color-border)]"
      style={{ width: "clamp(290px, 22vw, 380px)", height: "clamp(380px, 54vh, 520px)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <Image
        src={item.src}
        alt={item.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-1000 group-hover:scale-103"
        style={{ filter: "grayscale(15%)" }}
      />
      {/* Elegant overlay gradient */}
      <div className="absolute inset-0"
           style={{ background: "linear-gradient(to top, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.3) 50%, transparent 100%)" }} />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">{item.cat}</p>
        <h3 className="font-display text-base lg:text-lg font-light text-[var(--color-text)] leading-snug">{item.title}</h3>
      </div>

      {/* Top index */}
      <div className="absolute top-6 left-6">
        <span className="font-mono text-[9px] text-[var(--color-accent)] tracking-widest opacity-50">{item.num}</span>
      </div>
    </div>
  );
}

function MobileGalleryCard({ item }: { item: typeof GALLERY_ITEMS[0] }) {
  return (
    <div className="relative overflow-hidden border border-[var(--color-border)]" style={{ height: "65vw" }}>
      <Image
        src={item.src}
        alt={item.title}
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0"
           style={{ background: "linear-gradient(to top, rgba(6,6,6,0.9) 0%, transparent 65%)" }} />
      <div className="absolute bottom-5 left-5">
        <p className="text-[9px] tracking-widest uppercase text-[var(--color-accent)] mb-1.5">{item.cat}</p>
        <h3 className="font-display text-base font-light text-[var(--color-text)]">{item.title}</h3>
      </div>
      <div className="absolute top-4 right-4">
        <span className="font-mono text-[9px] text-[var(--color-accent)] opacity-55">{item.num}</span>
      </div>
    </div>
  );
}

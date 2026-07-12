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
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;
    if (isMobileRef.current || !pinnedContainerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth;
      const viewWidth = window.innerWidth;
      const maxScroll = totalWidth - viewWidth;
      
      const scrollDistance = maxScroll * 2.2;

      gsap.to(track, {
        x: -maxScroll,
        ease: "none",
        scrollTrigger: {
          trigger: pinnedContainerRef.current,
          start: "top 80px", // Pin exactly below the 80px navbar to prevent overlaps
          end: () => `+=${scrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const step = 1 / (GALLERY_ITEMS.length - 1);
            const currentItem = Math.min(
              Math.max(Math.round(progress / step), 0),
              GALLERY_ITEMS.length - 1
            );
            setActiveIndex(currentItem);
          },
        },
      });
    }, sectionRef);

    gsap.set(cursorRef.current, { scale: 0, opacity: 0 });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cursorRef.current || isMobileRef.current) return;
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
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
      className="relative bg-[#04090d] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterSection}
      onMouseLeave={handleMouseLeaveSection}
    >
      {/* Premium Glassmorphic Custom Follower Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] hidden lg:flex items-center justify-center border border-[rgba(202,168,105,0.35)] bg-[rgba(4,9,12,0.85)] backdrop-blur-[6px] shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
        style={{
          width: 76,
          height: 76,
          borderRadius: "50%",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
          Gör
        </span>
      </div>

      {/* Pinned horizontal wrapper */}
      <div
        ref={pinnedContainerRef}
        className="w-full pt-16 pb-20 lg:pt-[100px] lg:pb-[110px]"
      >
        {/* Section title container */}
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-20 mb-8 lg:mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-3 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
                DİJİTAL GÜLÜŞ GALERİSİ
              </p>
              <h2 className="font-display text-[6vw] lg:text-[3.2vw] font-light text-[var(--color-text)] leading-tight"
                  style={{ letterSpacing: "-0.02em" }}>
                Seçili Vakalarımız
              </h2>
            </div>
            
            {/* Elegant active slide index counter */}
            <div className="hidden lg:flex items-baseline gap-2 font-mono text-[13px]">
              <span className="text-[var(--color-accent)] font-semibold">
                {(activeIndex + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">
                {GALLERY_ITEMS.length.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal container */}
        <div
          ref={trackRef}
          className="hidden lg:flex gap-10 px-[25vw]"
          style={{ width: "max-content" }}
        >
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard 
              key={item.num} 
              item={item} 
              isActive={index === activeIndex} 
            />
          ))}
        </div>

        {/* Mobile: Vertical list */}
        <div className="lg:hidden flex flex-col gap-8 px-6 pb-6">
          {GALLERY_ITEMS.map((item) => (
            <MobileGalleryCard key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, isActive }: { item: typeof GALLERY_ITEMS[0]; isActive: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="relative flex-shrink-0 overflow-hidden border transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
      style={{ 
        width: "clamp(260px, 18vw, 340px)", 
        height: "clamp(350px, 46vh, 450px)",
        borderColor: isActive ? "rgba(202,168,105,0.4)" : "rgba(255,255,255,0.05)",
        opacity: isActive ? 1 : 0.3,
        transform: isActive ? "scale(1.03)" : "scale(0.97)",
      }}
    >
      {/* Image */}
      <Image
        src={item.src}
        alt={item.title}
        fill
        unoptimized
        className="object-cover transition-all duration-1000"
        style={{ 
          filter: isActive ? "grayscale(0%)" : "grayscale(40%) blur(1px)",
          transform: isActive ? "scale(1.02)" : "scale(1.0)",
        }}
      />
      {/* Dynamic light gradient overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ 
          background: "linear-gradient(to top, rgba(4,9,12,0.96) 0%, rgba(4,9,12,0.4) 50%, transparent 100%)",
          opacity: isActive ? 1 : 0.85,
        }} 
      />

      {/* Info details */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transition-transform duration-700"
        style={{
          transform: isActive ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">{item.cat}</p>
        <h3 className="font-display text-sm lg:text-base font-light text-[var(--color-text)] leading-snug">{item.title}</h3>
      </div>

      {/* Top index marker */}
      <div className="absolute top-5 left-5">
        <span className="font-mono text-[9px] text-[var(--color-accent)] tracking-widest opacity-60">{item.num}</span>
      </div>
    </div>
  );
}

function MobileGalleryCard({ item }: { item: typeof GALLERY_ITEMS[0] }) {
  return (
    <div className="relative overflow-hidden border border-white/5" style={{ height: "70vw" }}>
      <Image
        src={item.src}
        alt={item.title}
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0"
           style={{ background: "linear-gradient(to top, rgba(4,9,12,0.92) 0%, transparent 60%)" }} />
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

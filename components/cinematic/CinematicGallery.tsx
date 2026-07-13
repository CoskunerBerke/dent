"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GALLERY_ITEMS = [
  { num: "01", title: "Rayscan Görüntüleme Cihazı", cat: "Teknoloji", src: "/images/projects/device.jpg" },
  { num: "02", title: "Muayenehane Girişi", cat: "Hakan Saylam", src: "/images/projects/entrance.jpg" },
  { num: "03", title: "Karşılama Bankosu", cat: "Sekretarya", src: "/images/projects/reception.jpg" },
  { num: "04", title: "Sterilizasyon Laboratuvarı", cat: "Hijyen", src: "/images/projects/sterilization.jpg" },
  { num: "05", title: "Klinik Tedavi Odası", cat: "Tedavi", src: "/images/projects/chair.jpg" },
];

export default function CinematicGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
          start: "top 80px",
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

  // Lightbox Navigation Controls
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = ""; // Restore scrolling
  };

  const prevSlide = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
  }, []);

  const nextSlide = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevSlide, nextSlide]);

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
          width: 80,
          height: 80,
          borderRadius: "50%",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-accent)] font-medium">
          İncele
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
                KLİNİĞİMİZDEN KARELER
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

        {/* Desktop: Horizontal container with much larger sizes */}
        <div
          ref={trackRef}
          className="hidden lg:flex gap-12 px-[20vw] items-center"
          style={{ width: "max-content" }}
        >
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard 
              key={item.num} 
              item={item} 
              isActive={index === activeIndex} 
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Mobile: Vertical list */}
        <div className="lg:hidden flex flex-col gap-8 px-6 pb-6">
          {GALLERY_ITEMS.map((item, index) => (
            <MobileGalleryCard 
              key={item.num} 
              item={item} 
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL — Fullscreen HD Details View */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[99999] bg-[#020507]/96 backdrop-blur-md flex flex-col items-center justify-center select-none animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-white flex items-center justify-center transition-colors duration-300 z-50 cursor-pointer"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-6 w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-white flex items-center justify-center transition-colors duration-300 z-50 cursor-pointer"
            aria-label="Önceki"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Large High-Res Image Container */}
          <div className="relative w-[90vw] max-w-[1000px] h-[70vh] flex items-center justify-center p-4">
            <Image
              src={GALLERY_ITEMS[lightboxIndex].src}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Details Bar at the bottom */}
          <div className="text-center mt-6 z-50 px-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">
              {GALLERY_ITEMS[lightboxIndex].cat}
            </p>
            <h3 className="font-display text-xl lg:text-2xl font-light text-white tracking-wide">
              {GALLERY_ITEMS[lightboxIndex].title}
            </h3>
            <p className="text-xs text-white/40 mt-1 font-mono">
              {(lightboxIndex + 1).toString().padStart(2, "0")} / {GALLERY_ITEMS.length.toString().padStart(2, "0")}
            </p>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-6 w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-white flex items-center justify-center transition-colors duration-300 z-50 cursor-pointer"
            aria-label="Sonraki"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}

function GalleryCard({ item, isActive, onClick }: { item: typeof GALLERY_ITEMS[0]; isActive: boolean; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="relative flex-shrink-0 overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group"
      style={{ 
        width: "clamp(340px, 24vw, 480px)", // Made cards significantly wider
        height: "clamp(450px, 58vh, 600px)", // Made cards significantly taller
        borderColor: isActive ? "rgba(202,168,105,0.4)" : "rgba(255,255,255,0.05)",
        opacity: isActive ? 1 : 0.8,
        transform: isActive ? "scale(1.03)" : "scale(0.97)",
      }}
    >
      {/* Image in full original colors */}
      <Image
        src={item.src}
        alt={item.title}
        fill
        unoptimized
        className="object-cover transition-all duration-1000 group-hover:scale-105"
      />
      {/* Softer light gradient overlay for maximum image visibility */}
      <div 
        className="absolute inset-0 transition-opacity duration-700"
        style={{ 
          background: "linear-gradient(to top, rgba(4,9,12,0.85) 0%, rgba(4,9,12,0.1) 50%, transparent 100%)",
        }} 
      />

      {/* Info details */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-8 transition-all duration-500"
        style={{
          transform: isActive ? "translateY(0)" : "translateY(5px)",
          opacity: isActive ? 1 : 0.8,
        }}
      >
        <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">{item.cat}</p>
        <h3 className="font-display text-base lg:text-lg font-light text-[var(--color-text)] leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-300">{item.title}</h3>
      </div>

      {/* Hover visual maximize hint */}
      <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Maximize2 size={12} className="text-white" />
      </div>

      {/* Top index marker */}
      <div className="absolute top-5 left-5">
        <span className="font-mono text-[9px] text-[var(--color-accent)] tracking-widest opacity-60">{item.num}</span>
      </div>
    </div>
  );
}

function MobileGalleryCard({ item, onClick }: { item: typeof GALLERY_ITEMS[0]; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="relative overflow-hidden border border-white/5 cursor-pointer" 
      style={{ height: "70vw" }}
    >
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
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <Maximize2 size={10} className="text-[var(--color-accent)] opacity-60" />
        <span className="font-mono text-[9px] text-[var(--color-accent)] opacity-55">{item.num}</span>
      </div>
    </div>
  );
}

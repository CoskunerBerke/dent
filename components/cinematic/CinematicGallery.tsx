"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryItems } from "@/data/content";

export default function CinematicGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const prevSlide = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
  }, []);

  const nextSlide = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
  }, []);

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
      id="galeri"
      className="relative bg-white py-24 lg:py-36 overflow-visible border-t border-[var(--color-border)]"
      aria-label="Klinik Fotoğraf Galerisi"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
            KLİNİĞİMİZDEN KARELER
          </p>
          <h2 className="font-display text-[36px] lg:text-[48px] font-light text-[var(--color-text)] leading-tight tracking-tight">
            Muayenehanemiz &amp; Teknolojimiz
          </h2>
          <p className="text-sm text-[#6e675f] leading-relaxed font-light">
            YDA Center'daki kliniğimizin sterilizasyon laboratuvarını, 3D görüntüleme ünitelerini, karşılama ve tedavi odalarını yakından inceleyin.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer space-y-5 bg-[#FAF9F6] border border-[var(--color-border)] p-4 lg:p-5 rounded-[12px] shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:border-[var(--color-accent)]/45 transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] xl:h-[400px] rounded-[8px] overflow-hidden border border-white">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18]/40 via-transparent to-transparent opacity-60" />
                
                {/* Maximize Icon on Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                  <Maximize2 size={13} />
                </div>
              </div>

              {/* Info Text */}
              <div className="space-y-2">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-display text-lg lg:text-xl font-light text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6e675f] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL — Fullscreen HD Details View */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[99999] bg-[#1e1b18]/95 backdrop-blur-md flex flex-col items-center justify-center select-none animate-fade-in">
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

          {/* Large Image Container */}
          <div className="relative w-[90vw] max-w-[1000px] h-[70vh] flex items-center justify-center p-4">
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Details Bar at the bottom */}
          <div className="text-center mt-6 z-50 px-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2">
              {galleryItems[lightboxIndex].category}
            </p>
            <h3 className="font-display text-xl lg:text-2xl font-light text-white tracking-wide">
              {galleryItems[lightboxIndex].title}
            </h3>
            <p className="text-xs text-white/40 mt-1 font-mono">
              {(lightboxIndex + 1).toString().padStart(2, "0")} / {galleryItems.length.toString().padStart(2, "0")}
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

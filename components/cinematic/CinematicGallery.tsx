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
      className="relative bg-white py-16 md:py-24 px-6 border-b border-gray-150"
      aria-label="Klinik Fotoğraf Galerisi"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          
          {/* Skewed Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
            <span className="skew-x-6">Klinik Galerisi</span>
          </div>

          <h2 className="text-3xl md:text-4.5xl font-black uppercase text-[var(--color-text)] leading-tight tracking-wide">
            Klinik Görüntüleri &amp; Cihazlarımız
          </h2>
          <p className="text-xs md:text-sm text-[#6e675f] leading-relaxed font-medium">
            YDA Center'daki kliniğimizin sterilizasyon standartlarını, ileri teknoloji Rayscan tomografi ünitelerimizi ve konforlu bekleme salonumuzu inceleyin.
          </p>
        </div>

        {/* 3-Column Grid (Quattro Garaj Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-[var(--color-accent)]/35 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[240px] sm:h-[280px] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 mb-4">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 hover:scale-103"
                />
                
                {/* Maximize Icon on Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[var(--color-accent)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Info Text */}
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
                  {item.category}
                </span>
                <h3 className="text-base font-black uppercase text-[var(--color-text)] tracking-wide group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6e675f] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
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
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-2 font-bold">
              {galleryItems[lightboxIndex].category}
            </p>
            <h3 className="text-lg font-black uppercase text-white tracking-wider">
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

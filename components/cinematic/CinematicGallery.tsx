"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const GALLERY_ITEMS = [
  { num: "01", title: "Rayscan Görüntüleme Cihazı", cat: "Teknoloji", desc: "3D tomografi ve dijital tarama teknolojisi ile milimetrik teşhis imkanı sunuyoruz.", src: "/images/projects/device.jpg" },
  { num: "02", title: "Muayenehane Girişi", cat: "Hakan Saylam", desc: "YDA Center'daki prestijli ve modern muayenehane girişimiz ile hastalarımızı karşılıyoruz.", src: "/images/projects/entrance.jpg" },
  { num: "03", title: "Karşılama Bankosu", cat: "Sekretarya", desc: "Kayıt ve danışma işlemlerinizin steril koşullarda, hızlıca yapıldığı karşılama bankomuz.", src: "/images/projects/reception.jpg" },
  { num: "04", title: "Sterilizasyon Laboratuvarı", cat: "Hijyen", desc: "Avrupa standartlarında tam otomatik otoklav ve sterilizasyon cihazlarımızın yer aldığı hijyen odamız.", src: "/images/projects/sterilization.jpg" },
  { num: "05", title: "Klinik Tedavi Odası", cat: "Tedavi", desc: "En son teknoloji ünitlerimiz ile konforlu ve acısız tedavilerin gerçekleştirildiği odamız.", src: "/images/projects/chair.jpg" },
];

export default function CinematicGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lightbox Handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const prevSlide = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
  }, []);

  const nextSlide = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
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
      className="relative bg-[#04090d] py-24 lg:py-36 overflow-visible border-t border-[rgba(202,168,105,0.15)]"
      aria-label="Klinik Fotoğraf Galerisi"
    >
      <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-[64px]">
        
        {/* Full-width Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
            KLİNİĞİMİZDEN KARELER
          </p>
          <h2 className="font-display text-[36px] lg:text-[48px] font-light text-[var(--color-text)] leading-tight tracking-tight">
            Seçili Vakalarımız
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-4 leading-relaxed">
            YDA Center'daki kliniğimizin sterilizasyon standartlarını, ileri görüntüleme odalarımızı ve tedavi birimlerimizi yakından inceleyin.
          </p>
        </div>

        {/* 2-Column Grid Layout for photos (desktop) / 1-Column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.num}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer space-y-5 bg-[rgba(255,255,255,0.015)] border border-white/5 p-5 lg:p-7 rounded-[12px] shadow-lg hover:border-[rgba(202,168,105,0.25)] hover:bg-[rgba(255,255,255,0.03)] transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] rounded-[8px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04090d]/80 via-transparent to-transparent opacity-85" />
                
                {/* Top indicators */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-[var(--color-accent)] tracking-widest bg-[#04090d]/85 px-3 py-1 rounded-sm border border-white/5">
                  {item.num}
                </div>
                
                {/* Maximize Icon on Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--color-accent)] text-[#04090d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                  <Maximize2 size={13} />
                </div>
              </div>

              {/* Info Text */}
              <div className="space-y-2">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold">
                  {item.cat}
                </span>
                <h3 className="font-display text-lg lg:text-xl font-light text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
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

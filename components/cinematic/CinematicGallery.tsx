"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/data/content";

export default function CinematicGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => { setLightbox(i); document.body.style.overflow = "hidden"; };
  const close = () => { setLightbox(null); document.body.style.overflow = ""; };
  const prev = useCallback(() => setLightbox((p) => p !== null ? (p - 1 + galleryItems.length) % galleryItems.length : null), []);
  const next = useCallback(() => setLightbox((p) => p !== null ? (p + 1) % galleryItems.length : null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox, prev, next]);

  return (
    <section id="galeri" className="w-full bg-white py-24 md:py-32 border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">Klinik Galerisi</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--color-text)] leading-[1.05]">
            Klinik Görüntüleri<br />&amp; Cihazlarımız
          </h2>
          <p className="mt-5 text-sm text-[#6e675f] max-w-xl leading-relaxed">
            Sterilizasyon standartlarımızı, 3D tomografi cihazlarımızı ve konforlu tedavi odalarımızı inceleyin.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              onClick={() => open(i)}
              className="cursor-pointer group rounded-xl overflow-hidden border border-gray-200 hover:border-[var(--color-accent)]/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] mb-1">{item.category}</p>
                <h3 className="text-[14px] font-black uppercase text-[var(--color-text)]">{item.title}</h3>
                <p className="text-[12px] text-[#6e675f] mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center">
          <button onClick={close} className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[var(--color-accent)] transition-colors cursor-pointer"><X size={18} /></button>
          <button onClick={prev} className="absolute left-6 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[var(--color-accent)] transition-colors cursor-pointer"><ChevronLeft size={20} /></button>
          <div className="relative w-[88vw] max-w-[920px] h-[70vh]">
            <Image src={galleryItems[lightbox].src} alt={galleryItems[lightbox].title} fill unoptimized className="object-contain" />
          </div>
          <div className="absolute bottom-8 text-center">
            <p className="text-[10px] tracking-widest text-[var(--color-accent)] uppercase font-black">{galleryItems[lightbox].category}</p>
            <p className="text-base font-black uppercase text-white mt-1">{galleryItems[lightbox].title}</p>
            <p className="text-[11px] text-white/40 mt-1">{lightbox + 1} / {galleryItems.length}</p>
          </div>
          <button onClick={next} className="absolute right-6 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[var(--color-accent)] transition-colors cursor-pointer"><ChevronRight size={20} /></button>
        </div>
      )}
    </section>
  );
}

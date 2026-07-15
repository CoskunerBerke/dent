"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { galleryItems } from "@/data/content";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (galleryItems.length - 1));
            setActiveIndex(idx);
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="projeler"
      className="relative overflow-hidden bg-[var(--color-surface)]"
      aria-label="Proje galerisi"
    >
      {/* Section label */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 pt-20 pb-8">
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-label text-[var(--color-accent)] mb-4 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              Vaka Galerisi
            </motion.p>
            <h2 className="display-lg text-[var(--color-text)]">
              Gerçek
              <span className="italic text-[var(--color-accent)]"> Sonuçlar</span>
            </h2>
          </div>

          {/* Desktop counter */}
          {!isMobile && (
            <div className="hidden lg:flex items-center gap-6">
              <span className="display-md text-[var(--color-accent)]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="w-32 h-px bg-[var(--color-border)] relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[var(--color-accent)]"
                  style={{ width: `${((activeIndex + 1) / galleryItems.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-label text-[var(--color-muted)]">
                {String(galleryItems.length).padStart(2, "0")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: horizontal scroll track */}
      {!isMobile ? (
        <div
          ref={trackRef}
          className="horizontal-track gap-6 px-6 lg:px-16 pb-20 pt-4"
          style={{ width: `${galleryItems.length * 460 + 128}px` }}
        >
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      ) : (
        /* Mobile: swipeable */
        <div className="px-6 pb-16 pt-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6">
            {galleryItems.map((item, i) => (
              <div key={item.id} className="snap-start flex-shrink-0 w-[85vw]">
                <GalleryCard item={item} index={i} />
              </div>
            ))}
          </div>
          {/* Mobile counter */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, i) => (
              <div
                key={i}
                className="h-px w-8 transition-all duration-300"
                style={{
                  background: i === activeIndex ? "var(--color-accent)" : "var(--color-border)",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.7 }}
      className="relative w-[420px] h-[560px] flex-shrink-0 group overflow-hidden"
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        unoptimized
        className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        sizes="420px"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/90 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p className="text-label text-[var(--color-accent)] mb-2">{item.category}</p>
        <h3 className="display-md text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {item.title}
        </h3>
        <p className="text-body text-[var(--color-muted)] text-sm">{item.desc}</p>
      </div>

      {/* Number badge */}
      <div className="absolute top-6 right-6 text-label text-[var(--color-muted)]">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

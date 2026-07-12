"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ImageComparison() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(896); // default max-width

  // Track the actual layout width of the slider container dynamically
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    
    // Use ResizeObserver for perfect layout sync without lag or 0px collapses
    const observer = new ResizeObserver(() => updateWidth());
    observer.observe(containerRef.current);
    
    window.addEventListener("resize", updateWidth);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleMove = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const startDrag = () => setDragging(true);
  const stopDrag = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchend", stopDrag);
    }
    return () => {
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging]);

  return (
    <section
      className="relative w-full bg-[#04090d] py-[80px] px-6 lg:py-[100px] lg:pb-[120px] lg:px-[48px] overflow-visible"
      aria-label="Tedavi Öncesi ve Sonrası Karşılaştırması"
    >
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Header - Editorial & Clean */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-4 font-semibold flex items-center justify-center gap-4">
            <span className="w-6 h-px bg-[var(--color-accent)]" />
            ÖNCE & SONRA
            <span className="w-6 h-px bg-[var(--color-accent)]" />
          </p>
          <h2 className="font-display text-[7vw] lg:text-[4vw] font-light text-[var(--color-text)] leading-[1.1] mb-4">
            Değişimi Yakından Görün
          </h2>
          <p className="text-sm text-[var(--color-muted)] max-w-lg mx-auto leading-relaxed">
            Kişiye özel planlanan tedavilerimizle elde edilen doğal ve dengeli sonuçları inceleyin.
          </p>
        </div>

        {/* Draggable Comparison Slider */}
        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto overflow-hidden cursor-ew-resize select-none border border-[rgba(202,168,105,0.22)] rounded-[8px] bg-[#020507] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          style={{ height: "clamp(480px, 62vh, 760px)" }}
          onMouseMove={onMouseMove}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          onTouchMove={onTouchMove}
          aria-label="Önce sonra karşılaştırma kaydırıcısı"
        >
          {/* AFTER IMAGE (Background) */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/projects/after.png"
              alt="Tedavi sonrası premium gülüş"
              fill
              unoptimized
              className="object-cover object-center display-block"
              priority
            />
            <span className="absolute bottom-6 right-6 text-[10px] tracking-[0.2em] text-[var(--color-bg)] bg-[var(--color-accent)] px-4 py-2 font-bold rounded-sm">
              SONRA
            </span>
          </div>

          {/* BEFORE IMAGE (Foreground clip-path container) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
            style={{ width: `${pos}%` }}
          >
            {/* Inner wrapper matches the slider width precisely to align image scales */}
            <div
              className="absolute inset-y-0 left-0"
              style={{ width: `${containerWidth}px` }}
            >
              <Image
                src="/images/projects/before.png"
                alt="Tedavi öncesi gülüş"
                fill
                unoptimized
                className="object-cover object-center grayscale display-block"
                priority
              />
              <span className="absolute bottom-6 left-6 text-[10px] tracking-[0.2em] text-white/70 bg-black/60 border border-white/10 px-4 py-2 font-bold rounded-sm">
                ÖNCE
              </span>
            </div>
          </div>

          {/* Gold Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[var(--color-accent)] z-20 pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            {/* Draggable Circle Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-2xl border-4 border-[#020507] hover:scale-105 active:scale-95 transition-transform duration-200">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8 12L4 8m0 0l4-4M4 8h16m0 0l-4-4m4 4l-4 4"
                  stroke="#020507"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

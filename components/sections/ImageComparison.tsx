"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function ImageComparison() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(5, Math.min(95, pct)));
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    updatePos(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };

  return (
    <section
      className="relative py-24 lg:py-40 bg-[var(--color-bg)]"
      aria-label="Önce-Sonra karşılaştırması"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label text-[var(--color-accent)] mb-4 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-px bg-[var(--color-accent)]" />
            Gerçek Dönüşüm
            <span className="w-8 h-px bg-[var(--color-accent)]" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg text-[var(--color-text)]"
          >
            Önce & <span className="italic text-[var(--color-accent)]">Sonra</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-body text-[var(--color-muted)] mt-4 max-w-lg mx-auto"
          >
            Sürükleyerek farkı görmek için kaydırıcıyı kullanın.
          </motion.p>
        </div>

        {/* Comparison slider */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative h-[400px] md:h-[600px] max-w-4xl mx-auto overflow-hidden cursor-ew-resize select-none"
          onMouseMove={onMouseMove}
          onMouseDown={() => setDragging(true)}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onTouchMove={onTouchMove}
          aria-label="Önce sonra karşılaştırma kaydırıcısı"
        >
          {/* After image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1a1a10 0%, #0a0a0a 100%)",
              }}
            >
              <Image
                src="/images/projects/after.png"
                alt="Tedavi sonrası"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
              <span
                className="absolute bottom-6 right-6 text-label text-[var(--color-text)] bg-[var(--color-accent)] px-4 py-2"
              >
                SONRA
              </span>
            </div>
          </div>

          {/* Before image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <div
              className="absolute inset-0"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
                }}
              >
                <Image
                  src="/images/projects/before.png"
                  alt="Tedavi öncesi"
                  fill
                  unoptimized
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <span className="absolute bottom-6 left-6 text-label text-[var(--color-muted)] bg-[var(--color-bg)]/80 px-4 py-2">
                  ÖNCE
                </span>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-[var(--color-accent)] z-10"
            style={{ left: `${pos}%` }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-lg">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8 12L4 8m0 0l4-4M4 8h16m0 0l-4-4m4 4l-4 4"
                  stroke="var(--color-bg)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

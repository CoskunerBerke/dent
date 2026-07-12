"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { testimonials, trustStats } from "@/data/content";

const LOGOS = [
  "Özel Sağlık A.Ş.",
  "Medikal Group",
  "Dental World",
  "Türk Diş Hekimleri Birliği",
  "ISO 9001",
  "JCI Akredite",
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const marqRef = useRef<HTMLDivElement>(null);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      id="referanslar"
      className="relative py-24 lg:py-40 overflow-hidden bg-[var(--color-bg)]"
      aria-label="Referanslar ve güven bölümü"
    >
      {/* Decorative */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(201,169,110,0.05) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 lg:mb-32">
          {trustStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-[var(--color-border)] pt-6 text-center md:text-left"
            >
              <div className="display-md text-[var(--color-accent)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-label text-[var(--color-muted)] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-label text-[var(--color-accent)] mb-4 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              Hasta Görüşleri
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-lg text-[var(--color-text)]"
            >
              Mutlu
              <span className="italic text-[var(--color-accent)]"> Hastalarımız</span>
            </motion.h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              onClick={prev}
              aria-label="Önceki yorum"
              className="w-12 h-12 border border-[var(--color-border)] hover:border-[var(--color-accent)] flex items-center justify-center transition-colors duration-300 group"
            >
              <ChevronLeft size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </button>
            <button
              onClick={next}
              aria-label="Sonraki yorum"
              className="w-12 h-12 border border-[var(--color-border)] hover:border-[var(--color-accent)] flex items-center justify-center transition-colors duration-300 group"
            >
              <ChevronRight size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </button>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[var(--color-accent)] fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote>
                  <p className="display-md text-[var(--color-text)] leading-relaxed mb-8 font-display font-light italic">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </p>
                  <footer>
                    <p className="text-body text-[var(--color-text)] font-medium">
                      {testimonials[active].name}
                    </p>
                    <p className="text-label text-[var(--color-muted)]">
                      {testimonials[active].title} · {testimonials[active].treatment}
                    </p>
                  </footer>
                </blockquote>
              </div>

              {/* Counter */}
              <div className="hidden lg:flex flex-col items-end gap-2">
                <span className="display-xl text-[var(--color-accent)] opacity-20">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-label text-[var(--color-muted)]">
                  / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${i + 1}. yorum`}
              className="h-px transition-all duration-300"
              style={{
                width: i === active ? 32 : 16,
                background: i === active ? "var(--color-accent)" : "var(--color-border)",
              }}
            />
          ))}
        </div>

        {/* Logo marquee */}
        <div className="mt-24 pt-12 border-t border-[var(--color-border)]">
          <p className="text-label text-[var(--color-muted)] text-center mb-8">
            Üyelikler & Akreditasyonlar
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {LOGOS.map((logo, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-label text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-default"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

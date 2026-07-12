"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: 25, label: "Yıllık Deneyim", suffix: "+" },
  { value: 12000, label: "Mutlu Hasta", suffix: "+" },
  { value: 98, label: "Hasta Memnuniyeti", suffix: "%" },
  { value: 15, label: "Uzman Hekim", suffix: "+" },
];

export default function CinematicStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetVal = parseInt(el.getAttribute("data-target") || "0", 10);
        
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: targetVal,
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hikaye"
      className="relative py-28 lg:py-48 bg-[#080808] border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
              Sayılarla Başarılarımız
            </p>
            <h2 className="font-display text-[8vw] lg:text-[4.5vw] font-light text-[var(--color-text)] leading-[0.9] mb-8"
                style={{ letterSpacing: "-0.02em" }}>
              Gülüşlerde Bıraktığımız
              <br />
              <span className="italic text-[var(--color-accent)]">İzler</span>
            </h2>
            <p className="text-body text-[var(--color-muted)] leading-relaxed max-w-lg">
              Yıllar boyunca geliştirdiğimiz dijital gülüş tasarımı altyapımız, cerrahi uzmanlığımız ve her şeyden önemlisi hasta odaklı yaklaşımımız ile en karmaşık restorasyonları bile kusursuz birer sanat eserine dönüştürdük. Her adımda mükemmellik arayışımız sürecek.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            {STATS.map((stat, i) => (
              <div key={i} className="border-l border-[var(--color-border)] pl-6 py-2">
                <p className="font-display text-4xl lg:text-6xl text-[var(--color-text)] font-light">
                  <span
                    ref={(el) => {
                      countersRef.current[i] = el;
                    }}
                    data-target={stat.value}
                  >
                    0
                  </span>
                  <span className="text-[var(--color-accent)]">{stat.suffix}</span>
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

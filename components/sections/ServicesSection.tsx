"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".service-card");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });

        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hizmetler"
      className="relative py-24 lg:py-40 overflow-hidden"
      aria-label="Hizmetler bölümü"
    >
      {/* Sticky background image */}
      <div className="sticky top-0 h-0 overflow-visible pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute inset-0 w-screen -left-6 lg:-left-16"
          style={{ height: "100vh", top: 0 }}
          animate={{ opacity: 0.04 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${services[activeIndex]?.image || ""})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(60px) saturate(0)",
              transition: "background-image 0.8s",
            }}
          />
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-32">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-label text-[var(--color-accent)] mb-4 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              Hizmetlerimiz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-lg text-[var(--color-text)]"
            >
              Uzman Tedavi
              <br />
              <span className="italic text-[var(--color-accent)]">Seçenekleri</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-body text-[var(--color-muted)] max-w-sm mt-6 md:mt-0"
          >
            Her hasta farklıdır. Tedavi planınızı sizin ihtiyaçlarınıza göre kişiselleştiriyoruz.
          </motion.p>
        </div>

        {/* Service items */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-16 items-center py-10 lg:py-14 border-t border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-500"
            >
              {/* Number */}
              <span className="text-label text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                {service.number}
              </span>

              {/* Info */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-12">
                {/* Image thumbnail */}
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    sizes="96px"
                  />
                </div>

                <div>
                  <p className="text-label text-[var(--color-accent)] mb-2">{service.category}</p>
                  <h3 className="display-md text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-body text-[var(--color-muted)] max-w-lg">{service.description}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4">
                <span className="text-label text-[var(--color-muted)] hidden lg:block border border-[var(--color-border)] px-3 py-1">
                  {service.tag}
                </span>
                <div className="w-12 h-12 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--color-muted)] group-hover:text-[var(--color-bg)] transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

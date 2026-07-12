"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { storySteps } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function StorytellingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Pin the section and step through each story panel
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${storySteps.length * 100}vh`,
        pin: true,
        scrub: false,
        snap: 1 / (storySteps.length - 1),
        onUpdate: (self) => {
          const idx = Math.min(
            Math.floor(self.progress * storySteps.length),
            storySteps.length - 1
          );
          setActiveStep(idx);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const step = storySteps[activeStep];

  return (
    <section
      ref={sectionRef}
      id="hikayemiz"
      className="relative h-screen overflow-hidden"
      aria-label="Hikayemiz bölümü"
    >
      {/* Animated background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
          style={{ backgroundColor: step.color }}
        >
          <Image
            src={step.image}
            alt={step.title}
            fill
            unoptimized
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/90 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                >
                  <p className="text-label text-[var(--color-accent)] mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-[var(--color-accent)]" />
                    Adım {step.step}
                  </p>
                  <h2 className="display-lg text-[var(--color-text)] mb-6">{step.title}</h2>
                  <p className="text-body text-[var(--color-muted)] max-w-md mb-8">
                    {step.description}
                  </p>

                  {/* Stat */}
                  <div className="border-t border-[var(--color-border)] pt-6 inline-block">
                    <div className="display-md text-[var(--color-accent)]">
                      <AnimatedCounter
                        key={`${activeStep}-counter`}
                        value={step.stat.value}
                        suffix={step.stat.suffix}
                        duration={1200}
                      />
                    </div>
                    <p className="text-label text-[var(--color-muted)] mt-1">{step.stat.label}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — step indicators */}
            <div className="flex flex-col gap-4">
              {storySteps.map((s, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-6 p-6 border transition-all duration-500 cursor-pointer ${
                    i === activeStep
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                      : "border-[var(--color-border)] hover:border-[var(--color-accent)]/40"
                  }`}
                >
                  <span
                    className={`text-label transition-colors ${
                      i === activeStep ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"
                    }`}
                  >
                    {s.step}
                  </span>
                  <div>
                    <p
                      className={`font-display text-lg transition-colors ${
                        i === activeStep ? "text-[var(--color-text)]" : "text-[var(--color-muted)]"
                      }`}
                    >
                      {s.title}
                    </p>
                  </div>
                  {i === activeStep && (
                    <motion.div
                      layoutId="active-indicator"
                      className="ml-auto w-1.5 h-8 bg-[var(--color-accent)]"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section header */}
      <div className="absolute top-8 left-6 lg:left-16">
        <p className="text-label text-[var(--color-muted)] flex items-center gap-4">
          <span className="w-8 h-px bg-[var(--color-accent)]" />
          Sürecimiz
        </p>
      </div>
    </section>
  );
}

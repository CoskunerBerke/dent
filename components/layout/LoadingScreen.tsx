"use client";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/content";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);
  
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const duration = 1800; // slightly faster loading for better UX

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    // Skip loading animation on revisit session to save user time
    const visited = sessionStorage.getItem("denta_visited");
    if (visited) {
      setVisible(false);
      onCompleteRef.current();
      return;
    }

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const p = Math.min(elapsed / duration, 1);
      
      // Eased progress (cubic ease out)
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));

      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        // Start fade out transition
        setFade(true);
        sessionStorage.setItem("denta_visited", "1");
        
        // Notify parent to mount the page code
        onCompleteRef.current();

        // Completely unmount loading screen from DOM after transition completes
        const timer = setTimeout(() => {
          setVisible(false);
        }, 800); // matches transition-duration
        return () => clearTimeout(timer);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        fade ? "opacity-0 pointer-events-none scale-102" : "opacity-100"
      }`}
    >
      {/* Container */}
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-5xl lg:text-7xl font-light text-[var(--color-text)] tracking-wider">
            {siteConfig.name}
          </h1>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-muted)] mt-3">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Progress bar wrapper */}
        <div className="w-48 h-[1px] bg-[var(--color-border)] relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[var(--color-accent)] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage text */}
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] mt-4">
          {progress.toString().padStart(2, "0")} / 100
        </p>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-px bg-[var(--color-accent)] opacity-40 transition-all duration-1000"
            style={{ height: fade ? 0 : 40, transitionDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

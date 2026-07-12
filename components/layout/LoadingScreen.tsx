"use client";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/content";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);
  
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const duration = 1200; // fast premium load

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
      
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.floor(eased * 100));

      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setFade(true);
        sessionStorage.setItem("denta_visited", "1");
        onCompleteRef.current();

        const timer = setTimeout(() => {
          setVisible(false);
        }, 600);
        return () => clearTimeout(timer);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#04090d] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        fade ? "opacity-0 pointer-events-none scale-102" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-light text-[var(--color-text)] tracking-widest">
            {siteConfig.name}
          </h1>
        </div>

        {/* Minimal progress line */}
        <div className="w-36 h-[1px] bg-[var(--color-border)] relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[var(--color-accent)] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-muted)] mt-4">
          {progress.toString().padStart(2, "0")}%
        </p>
      </div>
    </div>
  );
}

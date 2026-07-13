"use client";
import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext<{ lenis: Lenis | null }>({ lenis: null });

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

interface Props {
  children: ReactNode;
  prefersReducedMotion?: boolean;
}

export default function SmoothScrollProvider({ children, prefersReducedMotion }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable smooth scroll on mobile, tablets, and any touch devices
    const isTouchOrMobile = 
      window.matchMedia("(max-width: 1024px)").matches || 
      ('ontouchstart' in window) || 
      (navigator.maxTouchPoints > 0);

    if (isTouchOrMobile || prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2, // optimized duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ticker
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, [prefersReducedMotion]);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

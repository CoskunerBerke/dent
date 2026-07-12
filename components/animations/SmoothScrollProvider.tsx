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
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ticker
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [prefersReducedMotion]);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

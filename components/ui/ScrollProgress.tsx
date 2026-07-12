"use client";
import { useEffect, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress();

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${progress})`;
    }
  }, [progress]);

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar"
      style={{ width: "100%", transformOrigin: "left" }}
      aria-hidden="true"
    />
  );
}

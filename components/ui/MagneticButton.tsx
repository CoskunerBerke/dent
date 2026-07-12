"use client";
import { useRef, useEffect, ReactNode } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "button" | "a";
  strength?: number;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  as: Tag = "button",
  strength = 0.4,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile || !ref.current) return;
    const el = ref.current;

    const onMove = (e: globalThis.MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onLeave = () => {
      el.style.transform = "translate(0,0)";
    };

    el.style.transition = "transform 0.4s cubic-bezier(0.16,1,0.3,1)";
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [isMobile, strength]);

  if (Tag === "a") {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`magnetic ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className={`magnetic ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

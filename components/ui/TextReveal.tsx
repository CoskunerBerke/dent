"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function TextReveal({ children, className = "", delay = 0, as: Tag = "p" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-5% 0px" });

  const lines = children.split("\n").filter(Boolean);

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLParagraphElement>} className={`overflow-hidden ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

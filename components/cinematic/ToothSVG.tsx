"use client";
import { forwardRef } from "react";

interface ToothSVGProps {
  className?: string;
  glowIntensity?: number; // 0-1
  glowColor?: string;
}

/**
 * Premium layered tooth SVG with depth illusion.
 * CSS perspective + GSAP transforms give full 3D-like movement.
 * No external 3D model needed.
 */
const ToothSVG = forwardRef<SVGSVGElement, ToothSVGProps>(
  ({ className = "", glowIntensity = 0.6, glowColor = "#c9a96e" }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 400"
        className={className}
        aria-label="Denta diş logosu"
        role="img"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Pearl body gradient */}
          <linearGradient id="toothBodyGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#f5f0ea" />
            <stop offset="35%" stopColor="#ede6da" />
            <stop offset="70%" stopColor="#ddd3c4" />
            <stop offset="100%" stopColor="#c8bba8" />
          </linearGradient>

          {/* Root gradient */}
          <linearGradient id="toothRootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4c8b8" />
            <stop offset="100%" stopColor="#b8a894" />
          </linearGradient>

          {/* Highlight gradient */}
          <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="60%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,252,245,0.9)" />
            <stop offset="100%" stopColor="rgba(255,252,245,0)" />
          </linearGradient>

          {/* Gold rim gradient */}
          <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.8" />
            <stop offset="50%" stopColor="#e8c97a" stopOpacity="0.4" />
            <stop offset="100%" stopColor={glowColor} stopOpacity="0.1" />
          </linearGradient>

          {/* Outer glow filter */}
          <filter id="toothGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values={`1 0.8 0.3 0 0  
                       0.8 0.6 0.2 0 0  
                       0.2 0.15 0 0 0  
                       0 0 0 ${glowIntensity} 0`}
              result="coloredBlur"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft inner shadow */}
          <filter id="innerShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feOffset dx="3" dy="6" />
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in2="SourceGraphic" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
            <feFlood floodColor="rgba(0,0,0,0.25)" result="shadowColor" />
            <feComposite in="shadowColor" in2="shadowDiff" operator="in" result="innerShadow" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="innerShadow" />
            </feMerge>
          </filter>

          {/* Drop shadow beneath tooth */}
          <filter id="dropShadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="rgba(0,0,0,0.7)" floodOpacity="0.8" />
          </filter>

          {/* Clip path for tooth body */}
          <clipPath id="toothBodyClip">
            <path d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
              L248,170 C252,195 255,215 250,235
              C245,255 235,265 225,268
              L215,270 C205,270 200,260 200,250
              L196,215 C194,200 188,192 160,192
              C132,192 126,200 124,215
              L120,250 C120,260 115,270 105,270
              L95,268 C85,265 75,255 70,235
              C65,215 68,195 72,170 Z" />
          </clipPath>
        </defs>

        {/* === DEPTH SHADOW LAYER === */}
        <ellipse
          cx="160" cy="385"
          rx="70" ry="12"
          fill="rgba(0,0,0,0.5)"
          style={{ filter: "blur(12px)" }}
        />

        {/* === GLOW HALO (behind tooth) === */}
        <ellipse
          cx="160" cy="140"
          rx="90" ry="120"
          fill={glowColor}
          opacity={glowIntensity * 0.15}
          style={{ filter: "blur(40px)" }}
        />

        {/* === MAIN TOOTH GROUP === */}
        <g filter="url(#toothGlow)">

          {/* Root Left */}
          <path
            d="M105,270 C100,275 95,295 90,315
               C86,330 84,345 86,355
               C88,365 94,368 100,365
               C108,360 112,345 115,328
               C118,310 118,290 120,270 Z"
            fill="url(#toothRootGrad)"
          />

          {/* Root Right */}
          <path
            d="M215,270 C220,275 225,295 230,315
               C234,330 236,345 234,355
               C232,365 226,368 220,365
               C212,360 208,345 205,328
               C202,310 202,290 200,270 Z"
            fill="url(#toothRootGrad)"
          />

          {/* === TOOTH MAIN BODY === */}
          <path
            d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
               L248,170 C252,195 255,215 250,235
               C245,255 235,265 225,268
               L215,270 C205,270 200,260 200,250
               L196,215 C194,200 188,192 160,192
               C132,192 126,200 124,215
               L120,250 C120,260 115,270 105,270
               L95,268 C85,265 75,255 70,235
               C65,215 68,195 72,170 Z"
            fill="url(#toothBodyGrad)"
          />

          {/* Subtle surface shading line */}
          <path
            d="M120,30 C120,22 138,16 160,16 C182,16 200,22 200,30"
            fill="none"
            stroke="rgba(180,168,150,0.3)"
            strokeWidth="1.5"
          />

          {/* === HIGHLIGHT LAYER === */}
          <path
            d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
               L248,170 C252,195 255,215 250,235
               C245,255 235,265 225,268
               L215,270 C205,270 200,260 200,250
               L196,215 C194,200 188,192 160,192
               C132,192 126,200 124,215
               L120,250 C120,260 115,270 105,270
               L95,268 C85,265 75,255 70,235
               C65,215 68,195 72,170 Z"
            fill="url(#highlightGrad)"
            opacity="0.65"
            style={{ mixBlendMode: "overlay" }}
          />

          {/* Specular highlight — top left */}
          <ellipse
            cx="118" cy="55"
            rx="22" ry="30"
            fill="rgba(255,252,248,0.85)"
            style={{ filter: "blur(8px)" }}
          />

          {/* Secondary smaller specular */}
          <ellipse
            cx="108" cy="40"
            rx="9" ry="12"
            fill="rgba(255,255,255,0.9)"
            style={{ filter: "blur(3px)" }}
          />

          {/* === GOLD RIM LIGHT (right edge) === */}
          <path
            d="M238,30 C242,50 248,100 248,160
               C248,200 245,230 238,255
               C232,268 226,272 222,272"
            fill="none"
            stroke="url(#goldRimGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Subtle rim light top */}
          <path
            d="M90,8 C110,2 135,0 160,0 C185,0 210,2 230,8"
            fill="none"
            stroke={glowColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* === CUTTING EDGE DETAILS (top of tooth) === */}
          <path
            d="M88,28 L232,28"
            fill="none"
            stroke="rgba(200,190,175,0.2)"
            strokeWidth="1"
          />

          {/* Mamelons (subtle cusps on incisor edge) */}
          <path
            d="M110,28 Q120,22 130,28 Q140,22 150,28 Q160,22 170,28 Q180,22 190,28 Q200,22 210,28"
            fill="none"
            stroke="rgba(180,168,150,0.25)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

        </g>

        {/* === THIN GOLD ACCENT RING === */}
        <path
          d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
             L248,170 C252,195 255,215 250,235
             C245,255 235,265 225,268
             L215,270 C205,270 200,260 200,250
             L196,215 C194,200 188,192 160,192
             C132,192 126,200 124,215
             L120,250 C120,260 115,270 105,270
             L95,268 C85,265 75,255 70,235
             C65,215 68,195 72,170 Z"
          fill="none"
          stroke={glowColor}
          strokeWidth="0.75"
          opacity="0.4"
        />
      </svg>
    );
  }
);

ToothSVG.displayName = "ToothSVG";
export default ToothSVG;

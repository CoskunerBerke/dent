"use client";
import { forwardRef } from "react";

interface ToothSVGProps {
  className?: string;
  glowIntensity?: number; 
}

/**
 * High-End Studio Sculpted Pearl-Enamel Tooth Visual.
 * Uses advanced SVG gradients, clean anatomical contour curves,
 * double specularity highlights, edge translucency mask, and a soft ambient occlusion shadow
 * to provide a highly realistic 3D feel suitable for luxury dental brands.
 */
const ToothSVG = forwardRef<SVGSVGElement, ToothSVGProps>(
  ({ className = "", glowIntensity = 0.25 }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 400"
        className={className}
        aria-label="Denta premium diş görseli"
        role="img"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Pearl-white enamel base gradient */}
          <linearGradient id="toothBaseEnamel" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#faf6ee" />
            <stop offset="65%" stopColor="#ebdcc5" />
            <stop offset="90%" stopColor="#d3c0a7" />
            <stop offset="100%" stopColor="#b49f85" />
          </linearGradient>

          {/* High-gloss studio spot reflection (left cusp) */}
          <linearGradient id="spotReflection" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* Soft backfill light reflection */}
          <linearGradient id="backfillLight" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* Edge translucency (gives depth to the incisor crown edge) */}
          <linearGradient id="translucencyOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="35%" stopColor="rgba(240,248,250,0.65)" />
            <stop offset="100%" stopColor="rgba(235,225,210,0)" />
          </linearGradient>

          {/* Root gradient (warm dentin transition) */}
          <linearGradient id="rootDentin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d3c0a7" />
            <stop offset="60%" stopColor="#bfa689" />
            <stop offset="100%" stopColor="#9a8165" />
          </linearGradient>

          {/* Drop shadow filter to pop the tooth from the background */}
          <filter id="sculptShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="18" stdDeviation="15" floodColor="#04090c" floodOpacity="0.75" />
          </filter>

          {/* High-quality highlight blur */}
          <filter id="softHighlightGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
        </defs>

        {/* Ambient floor contact shadow */}
        <ellipse
          cx="160" cy="385"
          rx="52" ry="7"
          fill="#020507"
          opacity="0.8"
          style={{ filter: "blur(8px)" }}
        />

        {/* Dynamic Studio Key Light Background Glow */}
        <ellipse
          cx="160"
          cy="180"
          rx="120"
          ry="150"
          fill="#1c4856"
          opacity={0.16 * glowIntensity}
          style={{ filter: "blur(60px)" }}
        />

        {/* MAIN TOOTH WITH SCULPTED DEPTH SHADOWS */}
        <g filter="url(#sculptShadow)">

          {/* Left Root */}
          <path
            d="M105,270 C97,276 92,298 87,322
               C83,338 81,354 84,364
               C86,371 91,373 96,370
               C104,365 108,350 112,332
               C115,313 116,291 120,270 Z"
            fill="url(#rootDentin)"
          />

          {/* Right Root */}
          <path
            d="M215,270 C223,276 228,298 233,322
               C237,338 239,354 236,364
               C234,371 229,373 224,370
               C216,365 212,350 208,332
               C205,313 204,291 200,270 Z"
            fill="url(#rootDentin)"
          />

          {/* Enamel Crown Main Shape */}
          <path
            d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
               L248,170 C252,192 255,212 250,232
               C245,252 235,262 225,266
               L215,270 C205,270 200,260 200,250
               L196,215 C194,200 188,192 160,192
               C132,192 126,200 124,215
               L120,250 C120,260 115,270 105,270
               L95,266 C85,262 75,252 70,232
               C65,212 68,192 72,170 Z"
            fill="url(#toothBaseEnamel)"
          />

          {/* Edge Translucency Overlay (Incisor Edge Gloss) */}
          <path
            d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
               L245,100 L75,100 Z"
            fill="url(#translucencyOverlay)"
            opacity="0.8"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Glossy Spot Reflection Overlay */}
          <path
            d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
               L248,170 C252,192 255,212 250,232
               C245,252 235,262 225,266
               L215,270 C205,270 200,260 200,250
               L196,215 C194,200 188,192 160,192
               C132,192 126,200 124,215
               L120,250 C120,260 115,270 105,270
               L95,266 C85,262 75,252 70,232
               C65,212 68,192 72,170 Z"
            fill="url(#spotReflection)"
            opacity="0.65"
            style={{ mixBlendMode: "overlay" }}
          />

          {/* Secondary ambient backfill light */}
          <path
            d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
               L248,170 C252,192 255,212 250,232
               C245,252 235,262 225,266
               L215,270 C205,270 200,260 200,250
               L196,215 C194,200 188,192 160,192
               C132,192 126,200 124,215
               L120,250 C120,260 115,270 105,270
               L95,266 C85,262 75,252 70,232
               C65,212 68,192 72,170 Z"
            fill="url(#backfillLight)"
            opacity="0.3"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Soft edge ambient shadow details (crevices) */}
          <path
            d="M130,140 C145,150 175,150 190,140"
            fill="none"
            stroke="rgba(110,95,75,0.15)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Cusp Sharp Specular Reflection (Left side of enamel) */}
          <ellipse
            cx="115"
            cy="52"
            rx="16"
            ry="22"
            fill="#ffffff"
            opacity="0.9"
            filter="url(#softHighlightGlow)"
          />

          {/* Tiny intense studio light glare dot */}
          <circle
            cx="106"
            cy="42"
            r="5"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Right rim light stroke (Clean medical precision highlight) */}
          <path
            d="M236,26 C241,46 247,90 247,145
               C247,185 244,212 237,236
               C232,248 227,254 223,254"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
          />

        </g>
      </svg>
    );
  }
);

ToothSVG.displayName = "ToothSVG";
export default ToothSVG;

"use client";
import { forwardRef } from "react";

interface ToothSVGProps {
  className?: string;
  glowIntensity?: number; // kept for compatibility, but used subtly for soft light reflection
}

/**
 * Premium warm pearl-white enamel Tooth SVG.
 * Designed to look clean, highly professional, realistic, and clinical.
 * Leverages smooth radial/linear gradients, soft specular highlights, and clean edges.
 */
const ToothSVG = forwardRef<SVGSVGElement, ToothSVGProps>(
  ({ className = "", glowIntensity = 0.3 }, ref) => {
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
          {/* Real pearl-white enamel body gradient */}
          <linearGradient id="enamelBodyGrad" x1="15%" y1="5%" x2="85%" y2="95%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#fdfbf7" />
            <stop offset="60%" stopColor="#f4eee3" />
            <stop offset="85%" stopColor="#e5dbcc" />
            <stop offset="100%" stopColor="#cebeaa" />
          </linearGradient>

          {/* Translucent edge/cusp gradient */}
          <linearGradient id="translucentCusp" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="40%" stopColor="rgba(240, 246, 248, 0.7)" />
            <stop offset="100%" stopColor="rgba(229, 219, 204, 0)" />
          </linearGradient>

          {/* Root/dentin warmth gradient */}
          <linearGradient id="dentinRootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d5c7b3" />
            <stop offset="50%" stopColor="#c5b49d" />
            <stop offset="100%" stopColor="#b19e85" />
          </linearGradient>

          {/* Warm studio key light highlight */}
          <linearGradient id="studioKeyLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="50%" stopColor="rgba(255, 253, 248, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 253, 248, 0)" />
          </linearGradient>

          {/* Studio rim light (warm spotlight back-reflection) */}
          <linearGradient id="studioRimLight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e9dfcc" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Soft ambient occlusion shadow under the crown */}
          <filter id="ambientShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#04090d" floodOpacity="0.6" />
          </filter>

          {/* Specular glow filter (very subtle and clean, no neon) */}
          <filter id="cleanSpecular" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient floor shadow */}
        <ellipse
          cx="160" cy="385"
          rx="60" ry="8"
          fill="#04090d"
          opacity="0.7"
          style={{ filter: "blur(10px)" }}
        />

        {/* Studio background soft spotlight bloom */}
        <circle
          cx="160"
          cy="180"
          r="110"
          fill="#1c4856"
          opacity={0.12 * glowIntensity}
          style={{ filter: "blur(50px)" }}
        />

        {/* Main Tooth Structure with high shadow separation */}
        <g filter="url(#ambientShadow)">

          {/* Root - Left Prong */}
          <path
            d="M105,270 C98,276 93,296 88,318
               C84,334 82,350 85,360
               C87,368 93,370 98,367
               C106,362 110,347 113,330
               C116,312 117,291 120,270 Z"
            fill="url(#dentinRootGrad)"
          />

          {/* Root - Right Prong */}
          <path
            d="M215,270 C222,276 227,296 232,318
               C236,334 238,350 235,360
               C233,368 227,370 222,367
               C214,362 210,347 207,330
               C204,312 203,291 200,270 Z"
            fill="url(#dentinRootGrad)"
          />

          {/* Crown Body (Enamel) */}
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
            fill="url(#enamelBodyGrad)"
          />

          {/* Translucent crown edge highlights (giving realistic enamel look) */}
          <path
            d="M80,25 C80,10 100,0 160,0 C220,0 240,10 240,25
               L244,110 L76,110 Z"
            fill="url(#translucentCusp)"
            opacity="0.8"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Enamel overlay for key studio light reflection */}
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
            fill="url(#studioKeyLight)"
            opacity="0.75"
            style={{ mixBlendMode: "overlay" }}
          />

          {/* Sharp studio specular highlight (upper left) */}
          <ellipse
            cx="116"
            cy="52"
            rx="18"
            ry="24"
            fill="#ffffff"
            opacity="0.85"
            filter="url(#cleanSpecular)"
          />

          {/* Pinpoint bright light dot reflection */}
          <circle
            cx="106"
            cy="40"
            r="6"
            fill="#ffffff"
            opacity="0.9"
          />

          {/* Balanced rim light reflection (right side of crown) */}
          <path
            d="M236,28 C241,48 247,95 247,150
               C247,190 244,218 237,242
               C232,254 227,260 223,260"
            fill="none"
            stroke="url(#studioRimLight)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Subtle dental anatomy texture lines */}
          <path
            d="M130,120 Q145,130 160,120 Q175,130 190,120"
            fill="none"
            stroke="rgba(146, 134, 118, 0.2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Fine enamel outer boundary accent */}
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
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.35"
          />

        </g>
      </svg>
    );
  }
);

ToothSVG.displayName = "ToothSVG";
export default ToothSVG;

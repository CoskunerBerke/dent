"use client";
import { forwardRef } from "react";

interface ToothSVGProps {
  className?: string;
  glowIntensity?: number; 
}

/**
 * Premium Medically Precise & Sculpted Enamel Molar Tooth Visual.
 * Rebuilt from scratch as a single cohesive, organically unified 3D-shaded body.
 * Eliminates cartoonish creases and detached floating roots.
 * Delivers a luxurious, pearl-white enamel finish with realistic studio lighting and specularity.
 */
const ToothSVG = forwardRef<SVGSVGElement, ToothSVGProps>(
  ({ className = "", glowIntensity = 0.25 }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 400"
        className={className}
        aria-label="Hakan Saylam premium diş görseli"
        role="img"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Main 3D volumetric gradient for the enamel crown & roots */}
          <radialGradient id="tooth3DVolume" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#faf7f2" />
            <stop offset="60%" stopColor="#eae3d5" />
            <stop offset="85%" stopColor="#c7bba6" />
            <stop offset="100%" stopColor="#9e907a" />
          </radialGradient>

          {/* Enamel specular glaze gradient (for wet/glassy highlight) */}
          <linearGradient id="enamelGlaze" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="70%" stopColor="rgba(202, 168, 105, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </linearGradient>

          {/* Soft backfill rim lighting from bottom-right */}
          <linearGradient id="rimLightRight" x1="100%" y1="80%" x2="0%" y2="20%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* Shadow filter for depth occlusion */}
          <filter id="sculptedOcclusion" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="25" stdDeviation="18" floodColor="#020507" floodOpacity="0.8" />
          </filter>

          {/* Soft highlight blur */}
          <filter id="studioHighlightBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>

        {/* Ambient floor shadow */}
        <ellipse
          cx="160"
          cy="380"
          rx="65"
          ry="9"
          fill="#020507"
          opacity="0.85"
          style={{ filter: "blur(10px)" }}
        />

        {/* Studio Spotlight Glow behind the tooth */}
        <circle
          cx="160"
          cy="180"
          r="110"
          fill="#1c4856"
          opacity={0.18 * glowIntensity}
          style={{ filter: "blur(50px)" }}
        />

        {/* UNIFIED 3D SCULPTED TOOTH BODY */}
        <g filter="url(#sculptedOcclusion)">
          
          {/* 
            Anatomically unified path representing a high-end molar.
            Smoothly transitions from the top cusps, down the crown, 
            into organic, fully integrated roots with no visual gaps.
          */}
          <path
            d="M 80,105 
               C 78,75 100,50 125,55 
               C 140,58 150,68 160,68 
               C 170,68 180,58 195,55 
               C 220,50 242,75 240,105 
               L 245,190 
               C 248,225 240,250 230,265 
               C 220,280 215,310 210,340
               C 207,358 202,370 195,370
               C 188,370 185,355 185,335
               L 182,275
               C 180,255 175,245 160,245
               C 145,245 140,255 138,275
               L 135,335
               C 135,355 132,370 125,370
               C 118,370 113,358 110,340
               C 105,310 100,280 90,265
               C 80,250 72,225 75,190
               Z"
            fill="url(#tooth3DVolume)"
          />

          {/* Enamel Specular Glaze Overlay (Volumetric lighting) */}
          <path
            d="M 80,105 
               C 78,75 100,50 125,55 
               C 140,58 150,68 160,68 
               C 170,68 180,58 195,55 
               C 220,50 242,75 240,105 
               L 245,190 
               C 248,225 240,250 230,265 
               C 220,280 215,310 210,340
               C 207,358 202,370 195,370
               C 188,370 185,355 185,335
               L 182,275
               C 180,255 175,245 160,245
               C 145,245 140,255 138,275
               L 135,335
               C 135,355 132,370 125,370
               C 118,370 113,358 110,340
               C 105,310 100,280 90,265
               C 80,250 72,225 75,190
               Z"
            fill="url(#enamelGlaze)"
            opacity="0.8"
            style={{ mixBlendMode: "overlay" }}
          />

          {/* Right side rim light (Highlighting curves and 3D silhouette) */}
          <path
            d="M 238,95 C 244,140 244,200 234,240 C 226,270 216,305 208,335"
            fill="none"
            stroke="url(#rimLightRight)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.7"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Left side soft studio key light highlight */}
          <path
            d="M 82,95 C 78,140 76,200 86,240"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Realistic anatomical groove lines (Not cartoon smiles, but natural occlusion grooves) */}
          <path
            d="M 125,120 C 135,135 150,140 160,140 C 170,140 185,135 195,120"
            fill="none"
            stroke="rgba(110, 95, 75, 0.2)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 160,140 L 160,200"
            fill="none"
            stroke="rgba(110, 95, 75, 0.15)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Intense glossy spot reflection on the upper left cusp */}
          <ellipse
            cx="112"
            cy="90"
            rx="14"
            ry="20"
            fill="#ffffff"
            opacity="0.9"
            filter="url(#studioHighlightBlur)"
          />

          {/* Pinpoint studio softbox glare dot */}
          <circle
            cx="106"
            cy="80"
            r="4.5"
            fill="#ffffff"
            opacity="0.95"
          />
          
        </g>
      </svg>
    );
  }
);

ToothSVG.displayName = "ToothSVG";
export default ToothSVG;

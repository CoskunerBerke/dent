"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Components
import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// Cinematic System
const SmoothScrollProvider = dynamic(
  () => import("@/components/animations/SmoothScrollProvider"),
  { ssr: false }
);

const CinematicScrollExperience = dynamic(
  () => import("@/components/cinematic/CinematicScrollExperience"),
  { ssr: false }
);

const CinematicGallery = dynamic(
  () => import("@/components/cinematic/CinematicGallery"),
  { ssr: false }
);

const CinematicStats = dynamic(
  () => import("@/components/cinematic/CinematicStats"),
  { ssr: false }
);

// Standard detailed sections
const ImageComparison = dynamic(() => import("@/components/sections/ImageComparison"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

// JSON-LD Schema
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "DENTA Premium Diş Kliniği",
  description:
    "İstanbul Nişantaşı'nda premium diş kliniği. İmplant, veneer, ortodonti ve estetik diş hekimliği.",
  url: "https://denta.com.tr",
  telephone: "+90-212-555-00-00",
  email: "info@denta.com.tr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Abdi İpekçi Cad. No:42",
    addressLocality: "Şişli",
    addressRegion: "İstanbul",
    postalCode: "34367",
    addressCountry: "TR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  image: "https://denta.com.tr/images/og-image.png",
  priceRange: "₺₺₺",
  currenciesAccepted: "TRY",
  paymentAccepted: "Nakit, Kredi Kartı, Taksit",
};

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Loading screen */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* Main app */}
      {loaded && (
        <SmoothScrollProvider prefersReducedMotion={prefersReducedMotion}>
          <CustomCursor />
          <ScrollProgress />
          <Navigation />

          <main id="main" tabIndex={-1}>
            {/* The Master Cinematic pinned sequence (600vh) */}
            <CinematicScrollExperience />

            {/* Editorial Showcase Comparison */}
            <ImageComparison />

            {/* Cinematic Horizontal Gallery */}
            <CinematicGallery />

            {/* Interactive Stats & Narrative */}
            <CinematicStats />

            {/* Expanded elegant form section */}
            <CTASection />
          </main>

          <Footer />
        </SmoothScrollProvider>
      )}
    </>
  );
}

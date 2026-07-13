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

// Standard detailed sections
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

// JSON-LD Schema
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "DİŞ HEKİMİ HAKAN SAYLAM",
  description:
    "Ankara YDA Center'da uzman diş hekimliği muayenehanesi. İmplant, estetik diş hekimliği, kanal tedavisi ve ortodonti.",
  url: "https://dthakansaylam.com",
  telephone: "+90-312-502-02-30",
  email: "dthakansaylam@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "YDA Center A2 Blok Kat:12 No:507, Kızılırmak",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06510",
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
  image: "https://dthakansaylam.com/images/og-image.png",
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

            {/* Cinematic Horizontal Gallery */}
            <CinematicGallery />

            {/* Expanded elegant form section */}
            <CTASection />
          </main>

          <Footer />
        </SmoothScrollProvider>
      )}
    </>
  );
}

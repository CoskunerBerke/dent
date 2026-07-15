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

// Sections
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));
const CorporateAgreements = dynamic(() => import("@/components/sections/CorporateAgreements"));
const IntroductionSection = dynamic(() => import("@/components/sections/IntroductionSection"));
const StorytellingSection = dynamic(() => import("@/components/sections/StorytellingSection"));
const CinematicGallery = dynamic(() => import("@/components/cinematic/CinematicGallery"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

// Smooth Scroll Provider
const SmoothScrollProvider = dynamic(
  () => import("@/components/animations/SmoothScrollProvider"),
  { ssr: false }
);

// JSON-LD Schema
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "HAKAN SAYLAM DİŞ KLİNİĞİ",
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

          <main id="main" className="bg-[#FAF9F6] min-h-screen overflow-x-hidden" tabIndex={-1}>
            
            {/* Hero Section + Features Row */}
            <HeroSection />

            {/* Corporate & Insurances Agreements Slider (Benefit & Sencard details inside) */}
            <CorporateAgreements />

            {/* Gülüşünüzdeki Mükemmelliği Keşfedin & 3 Quick Cards & Stats Bar */}
            <IntroductionSection />

            {/* Hekimimiz Dt. Hakan Saylam Portrait & vision */}
            <StorytellingSection />

            {/* Clinic internal & tech photos gallery grid */}
            <CinematicGallery />

            {/* Appointment Form Section */}
            <CTASection />

          </main>

          <Footer />
        </SmoothScrollProvider>
      )}
    </>
  );
}

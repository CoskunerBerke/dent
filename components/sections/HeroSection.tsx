"use client";
import Image from "next/image";
import { Users, Cpu, ShieldCheck, Heart, Calendar, Phone, ArrowRight } from "lucide-react";
import { heroContent, siteConfig, features } from "@/data/content";

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featureIcons = [
    <Users key="users" className="text-[var(--color-accent)] w-6 h-6" />,
    <Cpu key="cpu" className="text-[var(--color-accent)] w-6 h-6" />,
    <ShieldCheck key="shield" className="text-[var(--color-accent)] w-6 h-6" />,
    <Heart key="heart" className="text-[var(--color-accent)] w-6 h-6" />,
    <Calendar key="calendar" className="text-[var(--color-accent)] w-6 h-6" />,
  ];

  return (
    <section id="top" className="w-full bg-[#FAF9F6] pt-[120px] pb-16 lg:pt-[150px]">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          
          {/* Left Text Column */}
          <div className="space-y-8 max-w-xl lg:max-w-2xl">
            <div className="space-y-4">
              <span className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent)] font-semibold block">
                {heroContent.eyebrow}
              </span>
              <h1 className="font-display text-[46px] sm:text-[62px] lg:text-[76px] font-light text-[var(--color-text)] leading-[1.08] tracking-tight">
                Sağlıklı Gülüşler,
                <br />
                <span className="italic text-[var(--color-accent)]">Mutlu Yarınlar</span>
              </h1>
            </div>
            
            <p className="text-[#6e675f] text-[16px] lg:text-[18px] leading-relaxed font-light">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScroll("#iletisim")}
                className="h-[56px] px-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white text-[12px] tracking-[0.2em] uppercase font-bold rounded-[8px] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(184,147,75,0.15)] cursor-pointer"
              >
                <Calendar size={15} />
                {heroContent.ctaPrimary}
              </button>
              <button
                onClick={() => handleScroll("#iletisim")}
                className="h-[56px] px-8 bg-white border border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] text-[var(--color-text)] text-[12px] tracking-[0.2em] uppercase font-bold rounded-[8px] flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[var(--color-accent)]/5 cursor-pointer"
              >
                <Phone size={15} className="text-[var(--color-accent)]" />
                {heroContent.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white">
            <Image
              src="/images/projects/entrance.jpg"
              alt="Hakan Saylam Diş Kliniği Muayenehane Girişi"
              fill
              priority
              unoptimized
              className="object-cover"
            />
            {/* Elegant light vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF9F6]/20 via-transparent to-transparent" />
          </div>

        </div>

        {/* Features Row Bar (Directly below hero, matching 1st photo) */}
        <div className="w-full bg-white border border-[var(--color-border)] rounded-[16px] p-6 lg:p-10 shadow-[0_15px_45px_rgba(184,147,75,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-3 pt-6 md:pt-0 ${
                  index > 0 ? "md:pl-6 lg:pl-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] flex items-center justify-center border border-[var(--color-border)]">
                  {featureIcons[index]}
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-[var(--color-text)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#6e675f] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

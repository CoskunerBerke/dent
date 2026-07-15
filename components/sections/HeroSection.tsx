"use client";
import Image from "next/image";
import { Users, Cpu, ShieldCheck, Heart, Calendar, MessageSquare, Phone } from "lucide-react";
import { heroContent, siteConfig, features } from "@/data/content";

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featureIcons = [
    <Users key="users" className="w-6 h-6 text-[var(--color-accent)]" />,
    <Cpu key="cpu" className="w-6 h-6 text-[var(--color-accent)]" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-[var(--color-accent)]" />,
    <Heart key="heart" className="w-6 h-6 text-[var(--color-accent)]" />,
    <Calendar key="calendar" className="w-6 h-6 text-[var(--color-accent)]" />,
  ];

  return (
    <section id="top" className="w-full bg-white border-b border-gray-150 py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Skewed Badge (Quattro Garaj & RN Vize Style) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6">YDA Center Ankara Diş Muayenehanesi</span>
            </div>

            {/* Heading in Uppercase & Black Weight */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-[var(--color-text)] leading-tight tracking-wide">
              Sağlıklı Gülüşler,
              <br />
              Mutlu Yarınlar
            </h1>

            <p className="text-xs md:text-sm text-[#6e675f] leading-relaxed max-w-xl font-medium">
              Diş Hekimi Hakan Saylam liderliğinde; modern teknoloji, tam sterilizasyon standartları ve kişiye özel hekim yaklaşımıyla Çankaya'daki modern kliniğimizde hizmetinizdeyiz.
            </p>

            {/* Buttons with Active Scale Effect */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => handleScroll("#iletisim")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Calendar size={15} />
                Randevu Al
              </button>
              <a
                href={`https://wa.me/905446911877?text=Merhaba,%20di%C5%9F%20tedavisi%20ve%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white hover:bg-[#1ebd5b] text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200"
              >
                <MessageSquare size={15} />
                WhatsApp Danışma
              </a>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] md:h-[450px] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl flex items-center justify-center bg-gray-50">
              <Image
                src="/images/projects/entrance.jpg"
                alt="Hakan Saylam Diş Kliniği Giriş Alanı"
                fill
                unoptimized
                className="object-cover transition-all duration-500 hover:scale-103"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
            </div>
          </div>

        </div>

        {/* Advantage Cards Grid (Quattro Garaj Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-150">
          {features.slice(0, 4).map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group"
            >
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-gray-50 border border-gray-200 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all duration-300 h-fit">
                {featureIcons[index]}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6e675f] mt-2 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

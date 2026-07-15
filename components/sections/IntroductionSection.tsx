"use client";
import Image from "next/image";
import { Check, Sparkles, Shield, Heart, Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function IntroductionSection() {
  const handleScroll = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const checkPoints = [
    "Kişiye özel tedavi planlaması",
    "Ağrısız ve konforlu tedavi süreci",
    "Kaliteli malzeme ve uzun ömürlü çözümler",
    "Estetik ve fonksiyonel mükemmel sonuçlar",
  ];

  const quickCards = [
    {
      icon: <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />,
      title: "Diş Beyazlatma",
      desc: "Daha beyaz ve ışıltılı bir gülüş.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[var(--color-accent)]" />,
      title: "İmplant Tedavisi",
      desc: "Kalıcı, doğal ve sağlam çözümler.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[var(--color-accent)]" />,
      title: "Estetik Diş Hekimliği",
      desc: "Gülüş tasarımı ile estetik dokunuşlar.",
    },
  ];

  const stats = [
    { value: "20+", label: "Yıllık Deneyim" },
    { value: "5000+", label: "Mutlu Hasta" },
    { value: "15+", label: "Uzman Kadro" },
    { value: "7/24", label: "Destek & İletişim" },
  ];

  return (
    <section id="hakkimizda" className="w-full bg-[#FAF9F6] py-24 border-t border-[var(--color-border)]">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 space-y-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] tracking-[0.35em] uppercase text-[var(--color-accent)] font-semibold block">
                HAKAN SAYLAM DİŞ KLİNİĞİ
              </span>
              <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-light text-[var(--color-text)] leading-[1.1] tracking-tight">
                Gülüşünüzdeki
                <br />
                <span className="italic text-[var(--color-accent)]">Mükemmelliği</span> Keşfedin
              </h2>
            </div>

            <p className="text-[#6e675f] text-[15px] lg:text-[16px] leading-relaxed font-light">
              İleri teknoloji, hijyenik ortam ve uzman kadromuzla sizlere en iyi ağız ve diş sağlığı hizmetini sunuyoruz. Her adımda konforunuzu ve sağlığınızı ön planda tutuyoruz.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[13px] font-semibold text-[var(--color-text)]">{point}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScroll("#iletisim")}
                className="h-[52px] px-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white text-[12px] tracking-[0.2em] uppercase font-bold rounded-[8px] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(184,147,75,0.15)] cursor-pointer"
              >
                <Calendar size={14} />
                Randevu Al
              </button>
              <button
                onClick={() => handleScroll("#iletisim")}
                className="h-[52px] px-8 bg-white border border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] text-[var(--color-text)] text-[12px] tracking-[0.2em] uppercase font-bold rounded-[8px] flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[var(--color-accent)]/5 cursor-pointer"
              >
                <Phone size={14} className="text-[var(--color-accent)]" />
                Bize Ulaşın
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
            <Image
              src="/images/projects/chair.jpg"
              alt="Hakan Saylam Diş Kliniği Klinik Tedavi Odası"
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF9F6]/20 via-transparent to-transparent" />
          </div>

        </div>

        {/* 3 Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickCards.map((card) => (
            <div key={card.title} className="p-8 bg-white border border-[var(--color-border)] rounded-[16px] hover:shadow-[0_15px_45px_rgba(184,147,75,0.06)] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] border border-[var(--color-border)] flex items-center justify-center">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-[18px] lg:text-[22px] font-semibold text-[var(--color-text)]">{card.title}</h3>
                <p className="text-[13px] text-[#6e675f] font-light leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row (Gold banner row) */}
        <div className="w-full bg-[var(--color-accent)] rounded-[16px] p-8 lg:p-12 shadow-[0_20px_50px_rgba(184,147,75,0.15)] text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`text-center space-y-1 pt-6 lg:pt-0 ${idx > 0 ? "lg:pl-4" : ""}`}>
                <p className="font-display text-[42px] lg:text-[54px] font-light leading-none tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-white/80 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

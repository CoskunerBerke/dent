"use client";
import Image from "next/image";
import { Check, Sparkles, Shield, Heart, Calendar, Phone, Activity } from "lucide-react";

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
      icon: <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Diş Beyazlatma",
      desc: "Daha beyaz, lekesiz ve ışıltılı bir gülüş tasarımı sunuyoruz.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "İmplant Tedavisi",
      desc: "Eksik dişlerinizi son teknoloji kalıcı ve sağlam implantlarla tamamlıyoruz.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[var(--color-accent)]" />,
      title: "Estetik Diş Hekimliği",
      desc: " Hollywood gülüşü, zirkonyum ve porselen laminalarla estetik dokunuşlar.",
    },
  ];

  const stats = [
    { value: "20+", label: "Yıllık Deneyim" },
    { value: "5000+", label: "Mutlu Hasta" },
    { value: "15+", label: "Uzman Kadro" },
    { value: "7/24", label: "Destek & İletişim" },
  ];

  return (
    <section id="hakkimizda" className="w-full bg-[#FAF9F6] py-16 md:py-24 px-6 border-b border-gray-150">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Grid: Image left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Image (Quattro Garaj Style) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full h-[320px] md:h-[450px] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl flex items-center justify-center bg-white">
              <Image
                src="/images/projects/chair.jpg"
                alt="Hakan Saylam Diş Kliniği Klinik Tedavi Odası"
                fill
                unoptimized
                className="object-cover transition-all duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column - Text (Quattro Garaj Style) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
            
            {/* Skewed Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6">Neden Hakan Saylam Diş Kliniği?</span>
            </div>

            <h2 className="text-3xl md:text-4.5xl font-black uppercase text-[var(--color-text)] leading-tight tracking-wide">
              Gülüşünüzdeki
              <br />
              Mükemmelliği Keşfedin
            </h2>

            <p className="text-xs md:text-sm text-[#6e675f] leading-relaxed font-medium">
              Çankaya YDA Center'daki prestijli muayenehanemizde, hastalarımıza üst düzey hijyen ve konfor standartlarında hizmet veriyoruz. Diş beyazlatma, implant, zirkonyum kaplama ve kanal tedavisi gibi tüm işlemleri ağrısız ve steril koşullarda gerçekleştiriyoruz.
            </p>

            {/* Checkpoints with flat bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {checkPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-[13px] font-bold text-[var(--color-text)] uppercase tracking-wide">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => handleScroll("#iletisim")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Randevu Al
              </button>
              <button
                onClick={() => handleScroll("#iletisim")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] text-[var(--color-text)] text-xs font-black uppercase tracking-wider rounded-lg shadow-sm active:scale-95 transition-all duration-200 hover:bg-gray-50 cursor-pointer"
              >
                Bize Ulaşın
              </button>
            </div>

          </div>

        </div>

        {/* 3 Quick Cards - Service Highlights (Quattro Garaj Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {quickCards.map((card) => (
            <div
              key={card.title}
              className="flex gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group"
            >
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-gray-50 border border-gray-200 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all duration-300 h-fit">
                {card.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)]">
                  {card.title}
                </h3>
                <p className="text-xs text-[#6e675f] mt-2 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid - Flat Cards (Quattro Garaj Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-white border border-gray-200 text-center shadow-sm hover:border-[var(--color-accent)]/20 transition-colors"
            >
              <p className="text-3xl lg:text-4.5xl font-black text-[var(--color-accent)] leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6e675f]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

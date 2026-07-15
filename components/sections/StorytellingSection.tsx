"use client";
import Image from "next/image";
import { Award, Shield, Heart } from "lucide-react";

export default function StorytellingSection() {
  const qualifications = [
    { icon: <Award size={18} className="text-[var(--color-accent)]" />, text: "25+ Yıllık Hekimlik Tecrübesi ve Akademik Bilgi Birikimi" },
    { icon: <Shield size={18} className="text-[var(--color-accent)]" />, text: "Uluslararası Sağlık ve Sterilizasyon Standartları Sertifikasyonu" },
    { icon: <Heart size={18} className="text-[var(--color-accent)]" />, text: "Kişiye Özel Doğal ve Estetik Diş Tasarımı Yaklaşımı" },
  ];

  return (
    <section id="hekim" className="w-full bg-white py-16 md:py-24 px-6 border-b border-gray-150">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Grid: Portrait left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Hakan Saylam Portrait */}
          <div className="lg:col-span-5">
            <div
              className="relative w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl flex items-center justify-center bg-gray-50"
            >
              <Image
                src="/images/projects/hakan_saylam.png"
                alt="Diş Hekimi Dt. Hakan Saylam"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-500 hover:scale-103"
                priority
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"
              />
              
              {/* Doctor Details Badge */}
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-1.5 font-bold">
                  KURUCU DİŞ HEKİMİ
                </p>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">
                  Dt. Hakan Saylam
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column — Professional Details & Vision */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Skewed Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6">Kurucu Hekimimiz</span>
            </div>

            <h2 className="text-3xl md:text-4.5xl font-black uppercase text-[var(--color-text)] leading-tight tracking-wide">
              Dt. Hakan Saylam
              <br />
              <span className="text-[var(--color-accent)]">Deneyim &amp; Uzmanlık</span>
            </h2>

            <p className="text-xs md:text-sm text-[#6e675f] leading-relaxed font-medium">
              Ankara'nın kalbinde, YDA Center A2 Blok'taki modern muayenehanemizde, hastalarımıza en üst düzey ağız ve diş sağlığı standartlarını sunuyoruz. Estetik diş hekimliği, implantoloji ve protetik tedaviler alanlarında 25 yıla yaklaşan deneyimimizle, her tedaviyi hassasiyet ve uzmanlıkla gerçekleştiriyoruz.
            </p>

            <p className="text-xs md:text-sm text-[#6e675f] leading-relaxed font-medium">
              Gelişen diş hekimliği teknolojilerini yakından takip ediyor, muayenehanemizde 3D tomografi, intraoral tarayıcılar ve en yüksek standartlarda sterilizasyon zinciri (otoklav) kullanarak hatasız teşhis ve hızlı tedavi süreçleri sağlıyoruz.
            </p>

            {/* Qualifications list (Quattro Garaj Style) */}
            <div className="space-y-4 pt-6 border-t border-gray-150">
              {qualifications.map((q, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gray-50 border border-gray-200 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all duration-300 h-fit">
                    {q.icon}
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs md:text-sm font-bold text-[var(--color-text)] uppercase tracking-wide">
                      {q.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

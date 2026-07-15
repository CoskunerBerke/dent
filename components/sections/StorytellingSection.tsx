"use client";
import Image from "next/image";
import { CheckCircle2, Award, Heart, Shield } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function StorytellingSection() {
  const qualifications = [
    { icon: <Award size={18} className="text-[var(--color-accent)]" />, text: "25+ Yıllık Hekimlik Tecrübesi" },
    { icon: <Shield size={18} className="text-[var(--color-accent)]" />, text: "Uluslararası Sterilizasyon ve Hijyen Akreditasyonu" },
    { icon: <Heart size={18} className="text-[var(--color-accent)]" />, text: "Kişiye Özel Doğal Gülüş Tasarımı Yaklaşımı" },
  ];

  return (
    <section id="hekim" className="w-full bg-[#FAF9F6] py-24 border-t border-[var(--color-border)]">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column — Hakan Saylam Portrait */}
          <div className="relative">
            <div
              className="relative overflow-hidden border border-[var(--color-border)] rounded-[16px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
              style={{ height: "clamp(480px, 60vh, 650px)" }}
            >
              <Image
                src="/images/projects/hakan_saylam.png"
                alt="Diş Hekimi Dt. Hakan Saylam"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-[1.5s] hover:scale-103"
                priority
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(30,27,24,0.9) 0%, rgba(30,27,24,0.2) 40%, transparent 100%)",
                }}
              />
              
              {/* Doctor Details Badge */}
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-1 font-semibold">
                  KURUCU DİŞ HEKİMİ
                </p>
                <h3 className="font-display text-[26px] font-light text-white tracking-wide">
                  Dt. Hakan Saylam
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column — Professional Details & Vision */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] font-semibold block">
                HEKİMİMİZ
              </span>
              <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-light text-[var(--color-text)] leading-[1.1] tracking-tight">
                Dt. Hakan Saylam
                <br />
                <span className="italic text-[var(--color-accent)] font-normal">Mesleki Tecrübe</span> &amp; Vizyon
              </h2>
            </div>

            <p className="text-[#6e675f] text-[15px] lg:text-[16px] leading-relaxed font-light">
              Ankara'nın merkezinde, YDA Center'daki modern muayenehanemizde, hastalarımıza en üst düzey ağız ve diş sağlığı standartlarını sunuyoruz. Estetik diş hekimliği, implantoloji ve protetik tedaviler alanlarında çeyrek asra yaklaşan deneyimimizle, her tedaviyi bir sanat eseri titizliğiyle gerçekleştiriyoruz.
            </p>

            <p className="text-[#6e675f] text-[15px] lg:text-[16px] leading-relaxed font-light">
              Gelişen diş hekimliği teknolojilerini yakından takip ediyor, muayenehanemizde 3D tomografi, intraoral tarayıcılar ve en yüksek standartlarda sterilizasyon zinciri (otoklav) kullanarak hatasız teşhis ve hızlı tedavi süreçleri sağlıyoruz.
            </p>

            {/* Qualifications list */}
            <div className="space-y-4 pt-4 border-t border-[var(--color-border)]">
              {qualifications.map((q, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-3 bg-white border border-[var(--color-border)] rounded-[8px]">
                  <div className="w-8 h-8 rounded-full bg-[#FAF9F6] flex items-center justify-center">
                    {q.icon}
                  </div>
                  <span className="text-[13px] font-semibold text-[var(--color-text)]">{q.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

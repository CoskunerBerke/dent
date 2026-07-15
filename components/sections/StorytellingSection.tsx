"use client";
import Image from "next/image";
import { Award, Shield, Heart } from "lucide-react";

export default function StorytellingSection() {
  const quals = [
    { icon: <Award size={16} className="text-[var(--color-accent)]" />, text: "25+ Yıllık Hekimlik Tecrübesi" },
    { icon: <Shield size={16} className="text-[var(--color-accent)]" />, text: "Uluslararası Sterilizasyon Sertifikasyonu" },
    { icon: <Heart size={16} className="text-[var(--color-accent)]" />, text: "Kişiye Özel Estetik Diş Tasarımı" },
  ];

  return (
    <section id="hekim" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Başlık – merkez ── */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Hekimimiz
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[var(--color-text)] leading-tight">
            Dt. Hakan Saylam
          </h2>
        </div>

        {/* ── Hekim Fotoğrafı – tam genişlik ── */}
        <div className="relative w-full h-[380px] md:h-[560px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl mb-12">
          <Image
            src="/images/projects/hakan_saylam.png"
            alt="Dt. Hakan Saylam"
            fill
            unoptimized
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-1 font-black">
              Kurucu Diş Hekimi
            </p>
            <p className="text-2xl md:text-3xl font-black text-white uppercase">Dt. Hakan Saylam</p>
          </div>
        </div>

        {/* ── Açıklama ── */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-base text-[#6e675f] leading-relaxed mb-4">
            Ankara YDA Center'daki muayenehanemizde estetik diş hekimliği, implantoloji ve protetik tedaviler alanında 25 yıla yaklaşan deneyimimizle hizmet veriyoruz. Her tedaviyi hassasiyet ve uzmanlıkla gerçekleştiriyoruz.
          </p>
          <p className="text-base text-[#6e675f] leading-relaxed">
            3D tomografi, intraoral tarayıcılar ve otoklav sterilizasyon sistemleriyle hatasız teşhis ve hızlı tedavi süreçleri sağlıyoruz.
          </p>
        </div>

        {/* ── Nitelikler ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quals.map((q, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-6 bg-[#FAFAFA] border border-gray-200 rounded-xl text-center hover:border-[var(--color-accent)]/30 transition-colors">
              <div className="p-3 rounded-xl bg-white border border-gray-200">
                {q.icon}
              </div>
              <span className="text-sm font-bold text-[var(--color-text)] leading-snug">{q.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

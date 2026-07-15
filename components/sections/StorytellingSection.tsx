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
    <section id="hekim" className="w-full bg-[#FAFAFA] py-24 md:py-32 border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Portrait */}
          <div className="relative w-full h-[380px] md:h-[520px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <Image
              src="/images/projects/hakan_saylam.png"
              alt="Dt. Hakan Saylam"
              fill
              unoptimized
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-1 font-black">Kurucu Diş Hekimi</p>
              <h3 className="text-2xl font-black text-white uppercase">Dt. Hakan Saylam</h3>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-7">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Hekimimiz
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--color-text)] leading-[1.05]">
              Deneyim &amp;<br />Uzmanlık
            </h2>
            <p className="text-sm text-[#6e675f] leading-relaxed">
              Ankara YDA Center'daki muayenehanemizde estetik diş hekimliği, implantoloji ve protetik tedaviler alanında 25 yıla yaklaşan deneyimimizle hizmet veriyoruz. Her tedaviyi hassasiyet ve uzmanlıkla gerçekleştiriyoruz.
            </p>
            <p className="text-sm text-[#6e675f] leading-relaxed">
              3D tomografi, intraoral tarayıcılar ve otoklav sterilizasyon sistemleriyle hatasız teşhis ve hızlı tedavi süreçleri sağlıyoruz.
            </p>

            <div className="space-y-3 pt-2 border-t border-gray-150">
              {quals.map((q, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[#FAFAFA] border border-gray-200 h-fit">
                    {q.icon}
                  </div>
                  <span className="text-[13px] font-bold text-[var(--color-text)] leading-snug self-center">{q.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { Calendar, MessageSquare, Users, Cpu, ShieldCheck, Heart } from "lucide-react";
import { siteConfig, features } from "@/data/content";

export default function HeroSection() {
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const featureIcons = [
    <Users key="u" size={18} className="text-[var(--color-accent)]" />,
    <Cpu key="c" size={18} className="text-[var(--color-accent)]" />,
    <ShieldCheck key="s" size={18} className="text-[var(--color-accent)]" />,
    <Heart key="h" size={18} className="text-[var(--color-accent)]" />,
  ];

  return (
    <section id="top" className="w-full bg-white">
      {/* ── Metin Alanı ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12 text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
          YDA Center · Çankaya / Ankara
        </p>
        <h1 className="text-5xl md:text-7xl font-black uppercase text-[var(--color-text)] leading-[1.0] mb-6">
          Sağlıklı Gülüşler,<br />Mutlu Yarınlar
        </h1>
        <p className="text-base text-[#6e675f] leading-relaxed max-w-2xl mx-auto mb-10">
          Diş Hekimi Hakan Saylam liderliğinde; modern teknoloji, tam sterilizasyon standartları
          ve kişiye özel yaklaşımıyla Çankaya'da hizmetinizdeyiz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scroll("#iletisim")}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[var(--color-accent)] text-white text-sm font-black uppercase tracking-wider rounded-lg shadow-lg active:scale-95 transition-all cursor-pointer hover:bg-[var(--color-accent-light)]"
          >
            <Calendar size={16} />
            Randevu Al
          </button>
          <a
            href="https://wa.me/905446911877?text=Merhaba,%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#25D366] text-white text-sm font-black uppercase tracking-wider rounded-lg shadow-lg active:scale-95 transition-all"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Klinik Fotoğrafı ── */}
      <div className="relative w-full h-[300px] md:h-[480px]">
        <Image
          src="/images/projects/entrance.jpg"
          alt="Hakan Saylam Diş Kliniği"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* ── 4 Özellik Kartı ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.slice(0, 4).map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 p-5 rounded-xl bg-[#FAFAFA] border border-gray-200 hover:border-[var(--color-accent)]/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-white border border-gray-100 w-fit">
                {featureIcons[i]}
              </div>
              <p className="text-[12px] font-black uppercase text-[var(--color-text)]">{item.title}</p>
              <p className="text-[11px] text-[#6e675f] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

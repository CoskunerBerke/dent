"use client";
import Image from "next/image";
import { Calendar, MessageSquare, Users, Cpu, ShieldCheck, Heart } from "lucide-react";
import { siteConfig, features } from "@/data/content";

export default function HeroSection() {
  const scroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const featureIcons = [
    <Users key="u" className="w-5 h-5 text-[var(--color-accent)]" />,
    <Cpu key="c" className="w-5 h-5 text-[var(--color-accent)]" />,
    <ShieldCheck key="s" className="w-5 h-5 text-[var(--color-accent)]" />,
    <Heart key="h" className="w-5 h-5 text-[var(--color-accent)]" />,
  ];

  return (
    <section id="top" className="w-full bg-white border-b border-gray-150 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)]">
              YDA Center · Ankara
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[var(--color-text)] leading-[1.05]">
              Sağlıklı<br />Gülüşler,<br />Mutlu Yarınlar
            </h1>

            <p className="text-sm text-[#6e675f] leading-relaxed max-w-md">
              Diş Hekimi Hakan Saylam liderliğinde; modern teknoloji, tam sterilizasyon
              standartları ve kişiye özel yaklaşımıyla Çankaya'da hizmetinizdeyiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => scroll("#iletisim")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Calendar size={14} />
                Randevu Al
              </button>
              <a
                href={`https://wa.me/905446911877?text=Merhaba,%20randevu%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white hover:bg-[#1ebd5b] text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200"
              >
                <MessageSquare size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative w-full h-[360px] md:h-[480px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <Image
              src="/images/projects/entrance.jpg"
              alt="Hakan Saylam Diş Kliniği"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-150">
          {features.slice(0, 4).map((item, i) => (
            <div
              key={item.title}
              className="flex gap-3 p-5 rounded-xl bg-[#FAFAFA] border border-gray-200 hover:border-[var(--color-accent)]/30 transition-colors duration-200"
            >
              <div className="flex-shrink-0 p-2 rounded-lg bg-white border border-gray-200 h-fit">
                {featureIcons[i]}
              </div>
              <div>
                <p className="text-[12px] font-black uppercase text-[var(--color-text)]">{item.title}</p>
                <p className="text-[11px] text-[#6e675f] mt-1 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

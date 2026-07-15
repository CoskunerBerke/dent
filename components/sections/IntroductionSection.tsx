"use client";
import Image from "next/image";
import { Check } from "lucide-react";

export default function IntroductionSection() {
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const points = [
    "Kişiye özel tedavi planlaması",
    "Ağrısız ve konforlu tedavi süreci",
    "Kaliteli malzeme, uzun ömürlü çözümler",
    "Estetik ve fonksiyonel mükemmel sonuçlar",
  ];

  const stats = [
    { value: "20+", label: "Yıllık Deneyim" },
    { value: "5.000+", label: "Mutlu Hasta" },
    { value: "15+", label: "Uzman Kadro" },
    { value: "%98", label: "Memnuniyet" },
  ];

  return (
    <section id="hakkimizda" className="w-full bg-[#FAFAFA] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Başlık – dikey, merkez ── */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Neden Biz?
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[var(--color-text)] leading-tight mb-5">
            Gülüşünüzdeki<br />Mükemmelliği Keşfedin
          </h2>
          <p className="text-base text-[#6e675f] leading-relaxed max-w-2xl mx-auto">
            Çankaya YDA Center'daki muayenehanemizde üst düzey hijyen ve konfor standartlarında hizmet veriyoruz. Diş beyazlatma, implant, zirkonyum kaplama ve kanal tedavisini ağrısız ve steril koşullarda gerçekleştiriyoruz.
          </p>
        </div>

        {/* ── Tam genişlik fotoğraf ── */}
        <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl mb-12">
          <Image
            src="/images/projects/chair.jpg"
            alt="Tedavi Odası"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* ── Maddeler ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <div className="w-6 h-6 rounded bg-[var(--color-accent)]/10 flex-shrink-0 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-sm font-bold text-[var(--color-text)]">{p}</span>
            </div>
          ))}
        </div>

        {/* ── Butonlar ── */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scroll("#iletisim")}
            className="px-10 py-4 bg-[var(--color-accent)] text-white text-sm font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all cursor-pointer hover:bg-[var(--color-accent-light)]"
          >
            Randevu Al
          </button>
          <button
            onClick={() => scroll("#iletisim")}
            className="px-10 py-4 bg-white border border-gray-200 text-[var(--color-text)] text-sm font-black uppercase tracking-wider rounded-lg active:scale-95 transition-all cursor-pointer hover:border-[var(--color-accent)]/40"
          >
            Bize Ulaşın
          </button>
        </div>

        {/* ── İstatistikler ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="p-6 bg-white border border-gray-200 rounded-xl text-center">
              <p className="text-4xl font-black text-[var(--color-accent)] mb-1">{s.value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#6e675f]">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

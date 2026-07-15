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
    <section id="hakkimizda" className="w-full bg-white py-24 md:py-32 border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative w-full h-[340px] md:h-[460px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl order-2 lg:order-1">
            <Image
              src="/images/projects/chair.jpg"
              alt="Tedavi Odası"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-7 order-1 lg:order-2">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Neden Biz?
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--color-text)] leading-[1.05]">
              Gülüşünüzdeki<br />Mükemmelliği<br />Keşfedin
            </h2>
            <p className="text-sm text-[#6e675f] leading-relaxed">
              Çankaya YDA Center'daki muayenehanemizde üst düzey hijyen ve konfor standartlarında hizmet veriyoruz. Diş beyazlatma, implant, zirkonyum kaplama ve kanal tedavisini ağrısız ve steril koşullarda gerçekleştiriyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[var(--color-accent)]/10 flex-shrink-0 flex items-center justify-center text-[var(--color-accent)] border border-[var(--color-accent)]/20 mt-0.5">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span className="text-[13px] font-bold text-[var(--color-text)]">{p}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => scroll("#iletisim")}
                className="px-7 py-3.5 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200 cursor-pointer hover:bg-[var(--color-accent-light)]"
              >
                Randevu Al
              </button>
              <button
                onClick={() => scroll("#iletisim")}
                className="px-7 py-3.5 bg-white border border-gray-200 text-[var(--color-text)] text-xs font-black uppercase tracking-wider rounded-lg active:scale-95 transition-all duration-200 cursor-pointer hover:border-[var(--color-accent)]/40"
              >
                Bize Ulaşın
              </button>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-150">
          {stats.map((s) => (
            <div key={s.label} className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-xl text-center">
              <p className="text-3xl font-black text-[var(--color-accent)]">{s.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6e675f] mt-2">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

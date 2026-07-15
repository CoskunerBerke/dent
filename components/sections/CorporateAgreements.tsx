"use client";
import { useState } from "react";
import { Shield, Building2 } from "lucide-react";
import { benefitInsurances, benefitCompanies } from "@/data/content";

const TABS = [
  { key: "insurance", label: "Anlaşmalı Sigortalar", icon: Shield, items: benefitInsurances },
  { key: "corporate", label: "Kurumsal Firmalar", icon: Building2, items: benefitCompanies },
] as const;

export default function CorporateAgreements() {
  const [active, setActive] = useState<"insurance" | "corporate">("insurance");
  const current = TABS.find((t) => t.key === active)!;

  return (
    <section id="anlasmalar" className="w-full bg-[var(--color-text)] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Başlık ── */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Kurumsal Protokol
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight mb-5">
            Anlaşmalı Kurum<br />&amp; Sigortalar
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            Aşağıdaki sigorta şirketleri ve kurumsal firmalar kapsamında indirimli tedavi protokolümüzden yararlanabilirsiniz.
          </p>
        </div>

        {/* ── Sekmeler ── */}
        <div className="flex justify-center gap-3 mb-10">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-2 px-7 py-3 text-sm font-black uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                  active === tab.key
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                }`}
              >
                <Icon size={15} />
                {tab.label}
                <span className="text-[11px] opacity-70">({tab.items.length})</span>
              </button>
            );
          })}
        </div>

        {/* ── Firma Grid'i ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {current.items.map((name, idx) => (
            <div
              key={name}
              className="flex items-center gap-4 px-6 py-5 bg-white/[0.06] border border-white/10 rounded-xl hover:bg-white/10 hover:border-[var(--color-accent)]/50 transition-all duration-200"
            >
              <span className="text-[13px] font-black text-[var(--color-accent)] min-w-[28px]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-bold text-white leading-snug">{name}</span>
            </div>
          ))}
        </div>

        {/* ── Alt not ── */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/50 mb-3">
            Kurumunuz listede yer alıyorsa anlaşma kapsamı için bizi arayın
          </p>
          <a
            href="tel:03125020230"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white text-sm font-black uppercase tracking-wider rounded-lg hover:bg-[var(--color-accent-light)] active:scale-95 transition-all"
          >
            0 (312) 502 02 30
          </a>
        </div>

      </div>
    </section>
  );
}

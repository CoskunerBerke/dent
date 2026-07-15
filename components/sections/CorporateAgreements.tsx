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
    <section id="anlasmalar" className="w-full bg-[#FAFAFA] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* ── Header ── */}
        <div className="mb-16">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Kurumsal Anlaşmalar
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--color-text)] leading-tight">
            Anlaşmalı<br />Kurum &amp; Sigortalar
          </h2>
          <p className="mt-5 text-sm text-[#6e675f] max-w-xl leading-relaxed">
            Aşağıdaki sigorta şirketleri ve kurumsal firmalar ile indirimli sağlık protokolümüz mevcuttur. Kurumunuz listede yer alıyorsa bizi arayın.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-2 mb-12 border-b border-gray-200">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider border-b-2 transition-all duration-200 cursor-pointer -mb-px ${
                  active === tab.key
                    ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "border-transparent text-[#6e675f] hover:text-[var(--color-text)]"
                }`}
              >
                <Icon size={14} />
                {tab.label}
                <span className="ml-1 text-[10px] font-bold text-[#9e9e9e]">
                  ({tab.items.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Partner Grid — fully visible, no modal ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {current.items.map((name, idx) => (
            <div
              key={name}
              className="flex items-center gap-3 px-5 py-4 bg-white border border-gray-200 rounded-xl hover:border-[var(--color-accent)]/40 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-[10px] font-black text-[var(--color-accent)] min-w-[22px]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] font-bold text-[var(--color-text)] leading-snug">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <p className="mt-10 text-[11px] text-[#6e675f] font-semibold uppercase tracking-widest text-center">
          Anlaşma kapsamı ve tedavi detayları için{" "}
          <a
            href="tel:03125020230"
            className="text-[var(--color-accent)] underline underline-offset-2"
          >
            0 (312) 502 02 30
          </a>{" "}
          numaralı hattımızı arayabilirsiniz.
        </p>

      </div>
    </section>
  );
}

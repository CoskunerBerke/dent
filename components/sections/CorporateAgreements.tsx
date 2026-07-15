"use client";
import { useState } from "react";
import { X, Building, Shield, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { benefitInsurances, benefitCompanies } from "@/data/content";

export default function CorporateAgreements() {
  const [activeModal, setActiveModal] = useState<"corporate" | "insurance" | null>(null);

  const corporateBadges = [
    { title: "Kurumsal Sağlık Hizmetleri", desc: "Kurumlara özel indirimli ağız ve diş sağlığı çözümleri." },
    { title: "Özel İndirim Avantajları", desc: "Anlaşmalı kurumlara ve ailelerine özel avantajlı oranlar." },
    { title: "Çalışanlara Özel Fiyatlandırma", desc: "Personel ve birinci derece yakınlarına özel indirimler." },
    { title: "Kolay Randevu Sistemi", desc: "Anlaşmalı kurum çalışanlarına öncelikli randevu planlaması." },
    { title: "Uzun Vadeli İş Birliği", desc: "Güvenilir ve sürekli kurumsal sağlık çözümleri." },
    { title: "Profesyonel Hizmet Anlayışı", desc: "Süreçlerinizi kolaylaştıran kurumsal operasyon ekibi." },
  ];

  const carouselCorporates = [
    "Türkiye İş Bankası",
    "Türk Hava Yolları",
    "Aselsan",
    "TCDD Taşımacılık",
    "Halkbank",
    "Vakıfbank",
  ];

  const carouselInsurances = [
    "Allianz",
    "Axa Sigorta",
    "Mapfre",
    "HDI Sigorta",
    "Anadolu Sigorta",
    "Zurich Sigorta",
  ];

  return (
    <section id="anlasmalar" className="w-full bg-[#FAF9F6] py-16 md:py-24 px-6 border-b border-gray-150">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          {/* Skewed Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit mx-auto">
            <span className="skew-x-6">Anlaşmalı Kurumlarımız</span>
          </div>

          <h2 className="text-3xl md:text-4.5xl font-black uppercase text-[var(--color-text)] leading-tight tracking-wide">
            Anlaşmalı Kurumlar &amp; Sigortalar
          </h2>
          <p className="text-xs md:text-sm text-[#6e675f] leading-relaxed font-medium">
            Birçok seçkin kamu kuruluşu, özel şirket, banka ve özel sağlık sigorta gruplarıyla indirimli sağlık protokolümüz mevcuttur.
          </p>
        </div>

        {/* Corporate Badges Grid (Quattro Garaj Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateBadges.map((badge) => (
            <div key={badge.title} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group">
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)]">{badge.title}</h3>
                  <p className="text-xs text-[#6e675f] font-light leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Sliders (Quattro Garaj Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6">
          
          {/* Column 1: Corporates */}
          <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text)] flex items-center gap-2">
              <Building size={20} className="text-[var(--color-accent)]" />
              Kurumsal Anlaşmalar
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {carouselCorporates.map((corp) => (
                <div key={corp} className="h-16 px-4 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:border-[var(--color-accent)]/30 transition-colors">
                  <span className="text-[10px] tracking-wider uppercase font-black text-[#6e675f] text-center">
                    {corp}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveModal("corporate")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] text-xs font-black uppercase tracking-wider rounded-lg shadow-sm active:scale-95 transition-all duration-200 w-full cursor-pointer"
              >
                FİRMALAR &amp; BANKALAR LİSTESİ
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Column 2: Insurances */}
          <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text)] flex items-center gap-2">
              <Shield size={20} className="text-[var(--color-accent)]" />
              Anlaşmalı Sigortalar
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {carouselInsurances.map((ins) => (
                <div key={ins} className="h-16 px-4 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:border-[var(--color-accent)]/30 transition-colors">
                  <span className="text-[10px] tracking-wider uppercase font-black text-[#6e675f] text-center">
                    {ins}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveModal("insurance")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] text-xs font-black uppercase tracking-wider rounded-lg shadow-sm active:scale-95 transition-all duration-200 w-full cursor-pointer"
              >
                SİGORTA ŞİRKETLERİ LİSTESİ
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Detail Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-[99999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white w-full max-w-[800px] max-h-[85vh] rounded-[24px] border border-gray-200 shadow-2xl flex flex-col overflow-hidden animate-scale-up">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-150 flex items-center justify-between bg-gray-50">
              <h3 className="text-lg font-black uppercase tracking-wider text-[var(--color-text)] flex items-center gap-3">
                <FileText className="text-[var(--color-accent)]" />
                {activeModal === "corporate" ? "Anlaşmalı Kurumlar &amp; Bankalar" : "Anlaşmalı Özel Sigortalar"}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-[#6e675f] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-8 overflow-y-auto space-y-6 max-h-[60vh]">
              <p className="text-xs md:text-sm text-[#6e675f] font-medium leading-relaxed">
                {activeModal === "corporate"
                  ? "Aşağıdaki banka, firma ve kurumsal emeklilik planları kapsamında anlaşmamız mevcuttur:"
                  : "Aşağıdaki sigorta şirketleri, tamamlayıcı ve özel sağlık sigortaları kapsamında geçerlidir:"}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(activeModal === "corporate" ? benefitCompanies : benefitInsurances).map((item, idx) => (
                  <div key={item} className="flex items-center gap-3.5 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[var(--color-accent)]/30 transition-colors">
                    <span className="w-6 h-6 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center text-[11px] font-black border border-[var(--color-accent)]/20">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs md:text-sm font-bold text-[var(--color-text)] uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              {/* Sencard and Benefit extra references */}
              {activeModal === "corporate" && (
                <div className="p-5 bg-amber-500/5 border border-amber-500/10 rounded-xl space-y-2 mt-4">
                  <p className="text-xs font-black text-[var(--color-accent)] uppercase tracking-wider">SENCARD &amp; BENEFIT PROTOKOL KAPSAMI</p>
                  <p className="text-xs text-[#6e675f] leading-relaxed font-light">
                    Muayenehanemiz, Garanti Bankası BBVA, Yapı Kredi, Viennalife ve Benefit-Sencard üyesi tüm diğer anlaşmalı kurum personellerine özel indirim protokolü uygulamaktadır.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-150 bg-gray-50 text-center">
              <p className="text-xs text-[#6e675f] font-semibold uppercase tracking-wide">
                Anlaşma şartları ve tedavi kapsamı hakkında detaylı bilgi için lütfen bizimle iletişime geçin.
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

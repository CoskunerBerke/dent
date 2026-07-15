"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Building, Shield, FileText, CheckCircle2, ArrowRight } from "lucide-react";
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
    <section id="anlasmalar" className="w-full bg-white py-24 border-t border-[var(--color-border)]">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] font-semibold flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[var(--color-accent)]" />
            ANLAŞMALAR
            <span className="w-8 h-px bg-[var(--color-accent)]" />
          </p>
          <h2 className="font-display text-[36px] lg:text-[48px] font-light text-[var(--color-text)] leading-tight tracking-tight">
            Kurumsal Anlaşmalar
          </h2>
          <p className="text-[#6e675f] text-sm leading-relaxed font-light">
            Birçok seçkin kurum, banka ve sigorta şirketiyle anlaşmalı olarak hizmet vermekteyiz.
          </p>
        </div>

        {/* Corporate Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {corporateBadges.map((badge) => (
            <div key={badge.title} className="p-6 bg-[#FAF9F6] border border-[var(--color-border)] rounded-[12px] hover:border-[var(--color-accent)]/55 transition-all duration-300 group">
              <div className="flex gap-4 items-start">
                <CheckCircle2 size={20} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <h3 className="font-display text-[17px] font-semibold text-[var(--color-text)]">{badge.title}</h3>
                  <p className="text-[12px] text-[#6e675f] font-light leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sliders Container */}
        <div className="space-y-16">
          
          {/* Slider 1: Corporates */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-display text-[18px] lg:text-[22px] font-light text-[var(--color-text)] flex items-center gap-2">
                <Building size={18} className="text-[var(--color-accent)]" />
                Anlaşmalı Kamu ve Özel Kuruluşlar
              </h3>
            </div>
            <div className="relative overflow-hidden w-full py-4 border-y border-[var(--color-border)]">
              {/* Carousel Track */}
              <div className="flex gap-8 justify-around items-center flex-wrap md:flex-nowrap">
                {carouselCorporates.map((corp) => (
                  <div key={corp} className="h-16 px-6 rounded-[8px] bg-[#FAF9F6] border border-[var(--color-border)] flex items-center justify-center min-w-[150px] md:min-w-[180px] hover:border-[var(--color-accent)]/30 transition-colors">
                    <span className="text-[12px] tracking-wider uppercase font-semibold text-[#6e675f] text-center">
                      {corp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center pt-2">
              <button
                onClick={() => setActiveModal("corporate")}
                className="text-[11px] tracking-[0.2em] uppercase font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] flex items-center gap-2 mx-auto cursor-pointer group"
              >
                TÜM KURUMSAL ANLAŞMALAR
                <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Slider 2: Insurances */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-display text-[18px] lg:text-[22px] font-light text-[var(--color-text)] flex items-center gap-2">
                <Shield size={18} className="text-[var(--color-accent)]" />
                Anlaşmalı Sigorta Şirketleri
              </h3>
            </div>
            <div className="relative overflow-hidden w-full py-4 border-y border-[var(--color-border)]">
              <div className="flex gap-8 justify-around items-center flex-wrap md:flex-nowrap">
                {carouselInsurances.map((ins) => (
                  <div key={ins} className="h-16 px-6 rounded-[8px] bg-[#FAF9F6] border border-[var(--color-border)] flex items-center justify-center min-w-[150px] md:min-w-[180px] hover:border-[var(--color-accent)]/30 transition-colors">
                    <span className="text-[12px] tracking-wider uppercase font-semibold text-[#6e675f] text-center">
                      {ins}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center pt-2">
              <button
                onClick={() => setActiveModal("insurance")}
                className="text-[11px] tracking-[0.2em] uppercase font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] flex items-center gap-2 mx-auto cursor-pointer group"
              >
                TÜM SİGORTALAR
                <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Complete lists modal (renders Sencard and Benefit lists from photo 2 and 3) */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-[99999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white w-full max-w-[800px] max-h-[85vh] rounded-[16px] border border-[var(--color-border)] shadow-[0_25px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden animate-scale-up">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between bg-[#FAF9F6]">
              <h3 className="font-display text-[22px] lg:text-[26px] font-light text-[var(--color-text)] flex items-center gap-3">
                <FileText className="text-[var(--color-accent)]" />
                {activeModal === "corporate" ? "Anlaşmalı Firma, Banka ve Kuruluşlar" : "Anlaşmalı Özel Sigorta Şirketleri"}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-[#6e675f] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-8 overflow-y-auto space-y-8 max-h-[60vh]">
              {activeModal === "corporate" ? (
                <div className="space-y-6">
                  <p className="text-[13px] text-[#6e675f] font-light">
                    Aşağıdaki firma, banka ve emeklilik kuruluşları kapsamında çalışanlarına ve üye kart sahiplerine özel indirimli sağlık hizmeti sunmaktayız:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {benefitCompanies.map((comp, idx) => (
                      <div key={comp} className="flex items-center gap-3 p-3.5 bg-[#FAF9F6] border border-[var(--color-border)] rounded-[8px]">
                        <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center text-[10px] font-bold font-mono">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] font-semibold text-[var(--color-text)]">{comp}</span>
                      </div>
                    ))}
                  </div>
                  {/* Sencard and Benefit extra references from image 3 */}
                  <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-[8px] space-y-2 mt-4">
                    <p className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-wider">SENCARD & BENEFIT ANLAŞMA KAPSAMI</p>
                    <p className="text-[12px] text-[#6e675f] leading-relaxed font-light">
                      Muayenehanemiz, Garanti Bankası BBVA, Yapı Kredi, Viennalife ve Benefit-Sencard üyesi tüm diğer anlaşmalı kurum personellerine tescilli indirim protokolü uygulamaktadır.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-[13px] text-[#6e675f] font-light">
                    Aşağıdaki anlaşmalı sigorta şirketleri, tamamlayıcı ve özel sağlık sigortaları kapsamında muayenehanemizde geçerlidir:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {benefitInsurances.map((ins, idx) => (
                      <div key={ins} className="flex items-center gap-3 p-3.5 bg-[#FAF9F6] border border-[var(--color-border)] rounded-[8px]">
                        <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center text-[10px] font-bold font-mono">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] font-semibold text-[var(--color-text)]">{ins}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-[var(--color-border)] bg-[#FAF9F6] text-center">
              <p className="text-[11px] text-[#6e675f] font-light">
                Anlaşma detayları ve indirim oranları hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

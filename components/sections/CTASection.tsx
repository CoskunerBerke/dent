"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    timeframe: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      timeframe: "",
      message: "",
    });
  };

  return (
    <section
      id="iletisim"
      className="relative w-full bg-[#04090d] pt-[90px] pb-[100px] px-6 lg:pt-[130px] lg:pb-[150px] lg:px-[64px]"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Soft warm spotlight background glow */}
      <div
        className="absolute right-[10%] bottom-[10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 filter blur-[150px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(202,168,105,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Main 2-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-[120px] items-start">
          
          {/* LEFT COLUMN — Editorial Details (Clean, spacious, NO cheap divider lines) */}
          <div className="space-y-12">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-4 font-semibold flex items-center gap-3">
                <span className="w-6 h-px bg-[var(--color-accent)]" />
                İLETİŞİM & RANDEVU
              </p>

              <h2 
                className="font-display text-[var(--color-text)] tracking-tight mb-6"
                style={{
                  fontSize: "clamp(42px, 4vw, 68px)",
                  lineHeight: "1.08",
                  letterSpacing: "-0.02em",
                }}
              >
                Hayalinizdeki Gülüşe
                <br />
                <span className="italic text-[var(--color-accent)] font-normal">Bir Adım</span> Uzakta
              </h2>

              <p 
                className="text-[#8c857b] leading-relaxed max-w-[480px] font-light"
                style={{ fontSize: "15px", lineHeight: "1.75" }}
              >
                Modern tedavi altyapımız, sterilizasyon standartlarımız ve size özel planlanan hekim yaklaşımımızla sağlıklı ve estetik bir gülüş tasarlayalım.
              </p>
            </div>

            {/* Clean structured editorial contact columns (No horizontal borders, spacious layout) */}
            <div className="flex flex-col gap-8 max-w-[500px]">
              
              {/* Row: Phone */}
              <div className="flex items-start gap-4">
                <Phone size={14} className="text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">TELEFON</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-[16px] text-white hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Row: Email */}
              <div className="flex items-start gap-4">
                <Mail size={14} className="text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">E-POSTA</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[16px] text-white hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Row: Address */}
              <div className="flex items-start gap-4">
                <MapPin size={14} className="text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">KLİNİK ADRESİ</p>
                  <p className="text-[16px] text-white font-light leading-relaxed max-w-[400px]">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Row: Hours */}
              <div className="flex items-start gap-4">
                <Clock size={14} className="text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">ÇALIŞMA SAATLERİ</p>
                  <p className="text-[16px] text-white font-light">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action buttons */}
            <div className="flex gap-8 pt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                HEMEN ARA
                <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform text-[var(--color-accent)]" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                YOL TARİFİ AL
                <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform text-[var(--color-accent)]" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Premium Form UI Card */}
          <div
            className="w-full max-w-[640px] lg:justify-self-end bg-[rgba(10,18,22,0.45)] border border-[rgba(202,168,105,0.12)] rounded-[12px] p-8 sm:p-10 lg:p-[48px] shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-md relative"
          >
            {/* Fine gold border detail */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />

            <div className="mb-[36px]">
              <h3 className="font-display text-[26px] lg:text-[30px] font-light text-white leading-tight mb-3">
                Ön Randevu Formu
              </h3>
              <p className="text-[13px] text-[#8c857b] leading-[1.6] font-light">
                Tedavi planınızı oluşturmak için bilgilerinizi bırakın. Ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Responsive 2-column input layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Ad Soyad */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-[52px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-4 text-[14px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/15"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                {/* Telefon */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    Telefon Numarası
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-[52px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-4 text-[14px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/15"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* E-posta */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    E-posta Adresi
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-[52px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-4 text-[14px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/15"
                    placeholder="ornek@hakansaylam.com"
                  />
                </div>

                {/* Hizmet */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    İlgilenilen Tedavi
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="h-[52px] w-full bg-[#050b0d] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-4 text-[14px] rounded-[6px] outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#050b0d]">Hizmet Seçin</option>
                      <option value="diagnostic" className="bg-[#050b0d]">Muayene ve Teşhis</option>
                      <option value="aesthetic" className="bg-[#050b0d]">Estetik Diş Hekimliği</option>
                      <option value="rootcanal" className="bg-[#050b0d]">Kanal Tedavisi</option>
                      <option value="hygiene" className="bg-[#050b0d]">Profesyonel Diş Hijyeni</option>
                      <option value="implant" className="bg-[#050b0d]">İmplant Tedavisi</option>
                      <option value="orthodontics" className="bg-[#050b0d]">Ortodonti</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zaman Tercihi */}
              <div className="flex flex-col gap-2">
                <label htmlFor="timeframe" className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                  Uygun Olduğunuz Zaman Aralığı
                </label>
                <div className="relative">
                  <select
                    id="timeframe"
                    value={form.timeframe}
                    onChange={(e) => setForm({ ...form, timeframe: e.target.value })}
                    className="h-[52px] w-full bg-[#050b0d] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-4 text-[14px] rounded-[6px] outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#050b0d]">Zaman Dilimi Seçin</option>
                    <option value="morning" className="bg-[#050b0d]">Hafta İçi - Sabah (09:00 - 12:00)</option>
                    <option value="afternoon" className="bg-[#050b0d]">Hafta İçi - Öğleden Sonra (12:00 - 17:00)</option>
                    <option value="evening" className="bg-[#050b0d]">Hafta İçi - Akşamüstü (17:00 - 19:00)</option>
                    <option value="weekend" className="bg-[#050b0d]">Cumartesi - Tüm Gün</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L4 4L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mesaj */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                  Mesaj / Not (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[110px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-4 py-3.5 text-[14px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/15 resize-none font-light"
                  placeholder="Şikayetleriniz veya belirtmek istediğiniz sorular..."
                />
              </div>

              {/* Solid Submit Button */}
              <button
                type="submit"
                className={`h-[54px] w-full mt-2 flex items-center justify-center gap-3 text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-[6px] cursor-pointer hover:-translate-y-[2px] ${
                  submitted
                    ? "bg-emerald-800 text-white border-none"
                    : "bg-[var(--color-accent)] text-[#04090d] hover:bg-[var(--color-accent-light)] shadow-[0_10px_25px_rgba(202,168,105,0.2)]"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={16} />
                    Randevu Talebi Gönderildi
                  </>
                ) : (
                  <>
                    RANDEVU TALEBİ GÖNDER
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-[#8c857b] max-w-[520px] mx-auto mt-3 leading-relaxed font-light">
                Gönderdiğiniz bilgiler KVKK kapsamında klinik güvencesindedir.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

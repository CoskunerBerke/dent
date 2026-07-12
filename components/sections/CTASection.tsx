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
      className="relative w-full bg-[#04090d] pt-[80px] pb-[90px] px-6 lg:pt-[120px] lg:pb-[140px] lg:px-[64px] lg:min-h-[780px]"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Container wrapper */}
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Main 2-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-[110px] items-start">
          
          {/* LEFT COLUMN — Clinical Details */}
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              İLETİŞİM & RANDEVU
            </p>

            <h2 
              className="font-display text-[var(--color-text)] tracking-tight mb-8 max-w-[670px]"
              style={{
                fontSize: "clamp(54px, 5vw, 82px)",
                lineHeight: "0.98",
                letterSpacing: "-0.04em",
              }}
            >
              Hayalinizdeki Gülüşe
              <br />
              <span className="italic text-[var(--color-accent)] font-normal">Bir Adım</span> Uzakta
            </h2>

            <p 
              className="text-[#8a8278] leading-relaxed max-w-[540px] mb-12"
              style={{ fontSize: "18px", lineHeight: "1.75" }}
            >
              Modern tedavi altyapımız, uzman klinik kadromuz ve size özel planlanan yaklaşımımızla sağlıklı ve estetik bir gülüş tasarlayalım.
            </p>

            {/* Clear clean contact list */}
            <div className="flex flex-col gap-[26px] max-w-[600px] mt-[40px]">
              
              {/* Row: Phone */}
              <div className="grid grid-cols-[24px_1fr] gap-4 items-start">
                <Phone size={14} className="text-[var(--color-accent)] mt-[3px]" />
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-muted)] mb-1">Telefon</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-[16px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Row: Email */}
              <div className="grid grid-cols-[24px_1fr] gap-4 items-start">
                <Mail size={14} className="text-[var(--color-accent)] mt-[3px]" />
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-muted)] mb-1">E-posta</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[16px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Row: Address */}
              <div className="grid grid-cols-[24px_1fr] gap-4 items-start">
                <MapPin size={14} className="text-[var(--color-accent)] mt-[3px]" />
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-muted)] mb-1">Klinik Adresi</p>
                  <p className="text-[16px] text-[var(--color-text)] font-light leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Row: Hours */}
              <div className="grid grid-cols-[24px_1fr] gap-4 items-start">
                <Clock size={14} className="text-[var(--color-accent)] mt-[3px]" />
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-muted)] mb-1">Çalışma Saatleri</p>
                  <p className="text-[16px] text-[var(--color-text)] font-light">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action buttons */}
            <div className="mt-12 flex gap-8">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-[11px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                HEMEN ARA
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                YOL TARİFİ AL
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Premium Form UI Card */}
          <div
            className="w-full max-w-[680px] lg:justify-self-end bg-[rgba(255,255,255,0.025)] border border-[rgba(202,168,105,0.22)] rounded-[8px] p-6 sm:p-10 lg:p-[52px] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
          >
            <div className="mb-[38px]">
              <h3 className="font-display text-[32px] lg:text-[38px] font-light text-[var(--color-text)] leading-[1.1] mb-3">
                Ön Randevu Formu
              </h3>
              <p className="text-[15px] text-[var(--color-muted)] leading-[1.6] max-w-[520px]">
                Tedavi planınızı oluşturmak için bilgilerinizi bırakın. Ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-[24px]">
              {/* Responsive 2-column or 1-column input layouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                
                {/* Ad Soyad */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="display-block text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent)] font-medium">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-[56px] w-full bg-[rgba(0,0,0,0.18)] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 text-[16px] rounded-[4px] outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                {/* Telefon */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="display-block text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent)] font-medium">
                    Telefon Numarası
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-[56px] w-full bg-[rgba(0,0,0,0.18)] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 text-[16px] rounded-[4px] outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                {/* E-posta */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="display-block text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent)] font-medium">
                    E-posta Adresi
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-[56px] w-full bg-[rgba(0,0,0,0.18)] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 text-[16px] rounded-[4px] outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="ornek@denta.com"
                  />
                </div>

                {/* Hizmet */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="display-block text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent)] font-medium">
                    İlgilenilen Tedavi
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="h-[56px] w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 text-[16px] rounded-[4px] outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#050b0d]">Hizmet Seçin</option>
                      <option value="implant" className="bg-[#050b0d]">Dental İmplant</option>
                      <option value="veneer" className="bg-[#050b0d]">Porselen Veneer</option>
                      <option value="invisalign" className="bg-[#050b0d]">Şeffaf Plak Tedavisi</option>
                      <option value="whitening" className="bg-[#050b0d]">Diş Beyazlatma</option>
                      <option value="other" className="bg-[#050b0d]">Genel Muayene</option>
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
                <label htmlFor="timeframe" className="display-block text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent)] font-medium">
                  Uygun Olduğunuz Zaman Aralığı
                </label>
                <div className="relative">
                  <select
                    id="timeframe"
                    value={form.timeframe}
                    onChange={(e) => setForm({ ...form, timeframe: e.target.value })}
                    className="h-[56px] w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 text-[16px] rounded-[4px] outline-none transition-all duration-300 appearance-none cursor-pointer"
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
                <label htmlFor="message" className="display-block text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent)] font-medium">
                  Mesaj / Not (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[150px] w-full bg-[rgba(0,0,0,0.18)] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 py-4 text-[16px] rounded-[4px] outline-none transition-all duration-300 placeholder:text-white/20 resize-none"
                  placeholder="Şikayetleriniz veya belirtmek istediğiniz sorular..."
                />
              </div>

              {/* Solid Submit Button */}
              <button
                type="submit"
                className={`h-[58px] w-full mt-[8px] flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.18em] uppercase transition-all duration-300 rounded-[4px] cursor-pointer hover:-translate-y-[2px] ${
                  submitted
                    ? "bg-emerald-800 text-white border-none"
                    : "bg-[var(--color-accent)] text-[#04090d] hover:bg-[var(--color-accent-light)] shadow-lg"
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

              <p className="text-[11px] text-center text-[var(--color-muted)] max-w-[520px] mx-auto mt-[12px] leading-relaxed">
                Gönderdiğiniz bilgiler KVKK kapsamında klinik güvencesindedir.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

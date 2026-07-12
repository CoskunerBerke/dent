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
      className="relative w-full bg-[#04090d] pt-[90px] pb-[100px] px-6 lg:pt-[130px] lg:pb-[150px] lg:px-[64px] lg:min-h-[820px]"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Premium backlighting behind the form */}
      <div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 filter blur-[120px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(202,168,105,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Main 2-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-16 lg:gap-[120px] items-center">
          
          {/* LEFT COLUMN — Editorial Details */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4 font-semibold flex items-center gap-3">
                <span className="w-6 h-px bg-[var(--color-accent)]" />
                İLETİŞİM & RANDEVU
              </p>

              <h2 
                className="font-display text-[var(--color-text)] tracking-tight mb-6 max-w-[670px]"
                style={{
                  fontSize: "clamp(48px, 4.5vw, 76px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.03em",
                }}
              >
                Hayalinizdeki Gülüşe
                <br />
                <span className="italic text-[var(--color-accent)] font-normal">Bir Adım</span> Uzakta
              </h2>

              <p 
                className="text-[#8c857b] leading-relaxed max-w-[500px]"
                style={{ fontSize: "16px", lineHeight: "1.7" }}
              >
                Modern tedavi altyapımız, uzman klinik kadromuz ve size özel planlanan yaklaşımımızla sağlıklı ve estetik bir gülüş tasarlayalım.
              </p>
            </div>

            {/* Clean structured editorial contact rows */}
            <div className="flex flex-col gap-6 max-w-[500px] border-t border-b border-white/[0.06] py-8">
              
              {/* Row: Phone */}
              <div className="grid grid-cols-[30px_1fr] gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)]">
                  <Phone size={12} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8c857b] mb-0.5">Telefon</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-[15px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-all duration-300 font-light"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Row: Email */}
              <div className="grid grid-cols-[30px_1fr] gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)]">
                  <Mail size={12} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8c857b] mb-0.5">E-posta</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[15px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-all duration-300 font-light"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Row: Address */}
              <div className="grid grid-cols-[30px_1fr] gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)] mt-0.5">
                  <MapPin size={12} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8c857b] mb-0.5">Klinik Adresi</p>
                  <p className="text-[15px] text-[var(--color-text)] font-light leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Row: Hours */}
              <div className="grid grid-cols-[30px_1fr] gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)]">
                  <Clock size={12} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8c857b] mb-0.5">Çalışma Saatleri</p>
                  <p className="text-[15px] text-[var(--color-text)] font-light">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action buttons */}
            <div className="flex gap-8">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                HEMEN ARA
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform text-[var(--color-accent)]" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                YOL TARİFİ AL
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform text-[var(--color-accent)]" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Premium Form UI Card */}
          <div
            className="w-full max-w-[680px] lg:justify-self-end bg-[rgba(10,18,22,0.65)] border border-[rgba(202,168,105,0.22)] rounded-[12px] p-8 sm:p-10 lg:p-[48px] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-md relative overflow-hidden"
          >
            {/* Top gold accent stripe for high-end look */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

            <div className="mb-[32px]">
              <h3 className="font-display text-[28px] lg:text-[34px] font-light text-[var(--color-text)] leading-tight mb-2">
                Ön Randevu Formu
              </h3>
              <p className="text-[14px] text-[#8c857b] leading-[1.6]">
                Tedavi planınızı oluşturmak için bilgilerinizi bırakın. Ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-[28px]">
              {/* Responsive 2-column or 1-column input layouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                
                {/* Ad Soyad */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60" />
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-[56px] w-full bg-[rgba(2,5,7,0.5)] border border-white/10 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.8)] text-white px-5 text-[15px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                {/* Telefon */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60" />
                    Telefon Numarası
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-[56px] w-full bg-[rgba(2,5,7,0.5)] border border-white/10 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.8)] text-white px-5 text-[15px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                {/* E-posta */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60" />
                    E-posta Adresi
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-[56px] w-full bg-[rgba(2,5,7,0.5)] border border-white/10 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.8)] text-white px-5 text-[15px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="ornek@denta.com"
                  />
                </div>

                {/* Hizmet */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="service" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60" />
                    İlgilenilen Tedavi
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="h-[56px] w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.8)] text-white px-5 text-[15px] rounded-[6px] outline-none transition-all duration-300 appearance-none cursor-pointer"
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
              <div className="flex flex-col gap-2.5">
                <label htmlFor="timeframe" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60" />
                  Uygun Olduğunuz Zaman Aralığı
                </label>
                <div className="relative">
                  <select
                    id="timeframe"
                    value={form.timeframe}
                    onChange={(e) => setForm({ ...form, timeframe: e.target.value })}
                    className="h-[56px] w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.8)] text-white px-5 text-[15px] rounded-[6px] outline-none transition-all duration-300 appearance-none cursor-pointer"
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
              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60" />
                  Mesaj / Not (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[140px] w-full bg-[rgba(2,5,7,0.5)] border border-white/10 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.8)] text-white px-5 py-4 text-[15px] rounded-[6px] outline-none transition-all duration-300 placeholder:text-white/20 resize-none"
                  placeholder="Şikayetleriniz veya belirtmek istediğiniz sorular..."
                />
              </div>

              {/* Solid Submit Button */}
              <button
                type="submit"
                className={`h-[58px] w-full mt-[8px] flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-[6px] cursor-pointer hover:-translate-y-[2px] ${
                  submitted
                    ? "bg-emerald-800 text-white border-none"
                    : "bg-[var(--color-accent)] text-[#04090d] hover:bg-[var(--color-accent-light)] shadow-[0_10px_25px_rgba(202,168,105,0.25)]"
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

              <p className="text-[11px] text-center text-[#8c857b] max-w-[520px] mx-auto mt-[12px] leading-relaxed">
                Gönderdiğiniz bilgiler KVKK kapsamında klinik güvencesindedir.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

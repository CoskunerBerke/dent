"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check, ArrowRight, Globe } from "lucide-react";
import { siteConfig } from "@/data/content";

const InstagramIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

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
      className="relative w-full bg-[#04090d] pt-16 pb-24 lg:pt-28 lg:pb-36 px-6 sm:px-8 overflow-visible"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Background ambient lighting — safe pointer-events-none */}
      <div
        className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 filter blur-[120px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(202,168,105,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Main container with standard centered max-width */}
      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        
        {/* Main 2-column grid layout: Left 38%, Right 62% on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.85fr)_minmax(520px,1.35fr)] gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN — Contact Details & Brand Info */}
          <div className="space-y-10 lg:sticky lg:top-[120px] h-fit">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-4 font-semibold flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--color-accent)]" />
                İLETİŞİM & RANDEVU
              </p>

              <h2 
                className="font-display text-[var(--color-text)] tracking-tight mb-6"
                style={{
                  fontSize: "clamp(36px, 3.5vw, 54px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                Hayalinizdeki Gülüşe
                <br />
                <span className="italic text-[var(--color-accent)] font-normal">Bir Adım</span> Uzakta
              </h2>

              <p 
                className="text-[#8c857b] leading-relaxed max-w-[480px] font-light text-[15px]"
              >
                YDA Center'daki prestijli ve modern muayenehanemizde, ileri teknolojik altyapımız ve kişiye özel hekim yaklaşımımızla sağlıklı ve estetik bir gülüş tasarlayalım.
              </p>
            </div>

            {/* Clean structured contact info items (no cheap dividers, generous spacing) */}
            <div className="flex flex-col gap-8 max-w-[480px]">
              
              {/* Row: Phone Numbers */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 flex-shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">TELEFON NUMARALARI</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[16px] text-white hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                    >
                      {siteConfig.contact.phone} <span className="text-[11px] text-white/40 ml-2">(Klinik Sabit Hat)</span>
                    </a>
                    {siteConfig.contact.phone2 && (
                      <a
                        href={`tel:${siteConfig.contact.phone2}`}
                        className="text-[16px] text-white hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                      >
                        {siteConfig.contact.phone2} <span className="text-[11px] text-white/40 ml-2">(GSM & Mobil)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Row: Email Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 flex-shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">E-POSTA ADRESİ</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[16px] text-white hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Row: Website & Instagram */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 flex-shrink-0">
                  <Globe size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">DİJİTAL ADRESLER</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href={siteConfig.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-white hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                    >
                      dthakansaylam.com
                    </a>
                    <a
                      href="https://instagram.com/dthakansaylam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-white hover:text-[var(--color-accent)] transition-colors duration-300 font-light flex items-center gap-1.5"
                    >
                      <InstagramIcon size={13} className="text-[var(--color-accent)]" />
                      @dthakansaylam
                    </a>
                  </div>
                </div>
              </div>

              {/* Row: Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">KLİNİK ADRESİ</p>
                  <p className="text-[15px] text-white font-light leading-relaxed max-w-[380px]">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Row: Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 flex-shrink-0">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8c857b] mb-1 font-semibold">ÇALIŞMA SAATLERİ</p>
                  <p className="text-[15px] text-white font-light">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action buttons */}
            <div className="flex gap-8 pt-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                KLİNİĞİ ARA
                <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform text-[var(--color-accent)]" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 group font-semibold"
              >
                HARİTADA AÇ
                <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform text-[var(--color-accent)]" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Premium Expanded Form Card */}
          <div
            className="w-full bg-[rgba(10,18,22,0.45)] border border-[rgba(202,168,105,0.22)] rounded-[22px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur-md relative"
          >
            {/* Fine gold border detail */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent rounded-t-[22px]" />

            <div className="mb-8">
              <h3 className="font-display text-[32px] lg:text-[40px] font-light text-white leading-tight mb-3">
                Ön Randevu Formu
              </h3>
              <p className="text-[13px] text-[#8c857b] leading-[1.6] font-light max-w-xl">
                Tedavi planınızı oluşturmak için bilgilerinizi bırakın. Ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[22px]">
              
              {/* Ad Soyad */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="name" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">
                  Ad Soyad
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-[58px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-white/15"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              {/* Telefon */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="phone" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">
                  Telefon Numarası
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-[58px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-white/15"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              {/* E-posta */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="email" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">
                  E-posta Adresi
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-[58px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-white/15"
                  placeholder="ornek@dthakansaylam.com"
                />
              </div>

              {/* Hizmet */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="service" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">
                  İlgilenilen Tedavi
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="h-[58px] w-full bg-[#050b0d] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 appearance-none cursor-pointer"
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

              {/* Zaman Tercihi — Full Width */}
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="timeframe" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">
                  Uygun Olduğunuz Zaman Aralığı
                </label>
                <div className="relative">
                  <select
                    id="timeframe"
                    value={form.timeframe}
                    onChange={(e) => setForm({ ...form, timeframe: e.target.value })}
                    className="h-[58px] w-full bg-[#050b0d] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 appearance-none cursor-pointer"
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

              {/* Mesaj — Full Width */}
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="message" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">
                  Mesaj / Not (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[160px] w-full bg-[rgba(2,5,7,0.4)] border border-white/5 focus:border-[var(--color-accent)] focus:bg-[rgba(2,5,7,0.7)] text-white px-[18px] py-4 text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-white/15 resize-y font-light"
                  placeholder="Şikayetleriniz veya belirtmek istediğiniz sorular..."
                />
              </div>

              {/* Submit Button — Full Width */}
              <div className="col-span-2 pt-2">
                <button
                  type="submit"
                  className={`h-[60px] w-full flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-[12px] cursor-pointer hover:-translate-y-[2px] ${
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
              </div>

              <p className="col-span-2 text-[11px] text-center text-[#8c857b] max-w-[520px] mx-auto mt-2 leading-relaxed font-light">
                Gönderdiğiniz bilgiler KVKK kapsamında klinik güvencesindedir.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

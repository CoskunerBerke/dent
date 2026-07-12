"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Clock, Check, ArrowRight } from "lucide-react";
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
      className="relative pt-20 pb-28 lg:pt-32 lg:pb-40 bg-[#04090d] overflow-hidden"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Subtle radial spotlight light from bottom-right */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 65%, rgba(28, 72, 86, 0.12) 0%, transparent 60%)",
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.5fr] gap-16 lg:gap-28 items-start">
          
          {/* LEFT COLUMN — Minimal Editorial Contact */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-6 font-semibold flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              İLETİŞİM & RANDEVU
            </p>

            <h2 className="font-display text-[2.8rem] lg:text-[3.6rem] leading-[1.1] font-light text-[var(--color-text)] tracking-tight mb-8">
              Hayalinizdeki Gülüşe
              <br />
              <span className="italic text-[var(--color-accent)] font-normal">Bir Adım</span>
              <br />
              Uzakta
            </h2>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md mb-12">
              Modern tedavi altyapımız, uzman klinik kadromuz ve size özel planlanan tedavi yaklaşımıyla kusursuz gülüşünüzü tasarlayalım.
            </p>

            {/* Structured Minimal Vertical Info List */}
            <div className="space-y-8 pr-4">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <Phone size={14} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-1">Telefon</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <Mail size={14} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-1">E-posta</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <MapPin size={14} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-1">Klinik Adresi</p>
                  <p className="text-sm text-[var(--color-text)] font-light leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <Clock size={14} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-1">Çalışma Saatleri</p>
                  <p className="text-sm text-[var(--color-text)] font-light">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="mt-12 flex gap-6 border-t border-[var(--color-border)] pt-8">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
              >
                Hemen Ara
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
              >
                Yol Tarifi Al
                <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Premium Form UI Card */}
          <div
            className="w-full bg-[#080f13] border border-[var(--color-border)] p-8 lg:p-12 shadow-2xl rounded-sm"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-light text-[var(--color-text)] mb-2">
                Ön Randevu Formu
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Tedavi planınızı oluşturmak için bilgilerinizi bırakın. Hekimlerimiz size en kısa sürede geri dönecektir.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Ad Soyad */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-semibold">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 py-3 text-sm rounded-sm outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                {/* Telefon */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-semibold">
                    Telefon Numarası
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 py-3 text-sm rounded-sm outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* E-posta */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-semibold">
                    E-posta Adresi (Opsiyonel)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 py-3 text-sm rounded-sm outline-none transition-all duration-300 placeholder:text-white/20"
                    placeholder="ornek@denta.com"
                  />
                </div>

                {/* İlgilenilen Tedavi */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-semibold">
                    İlgilendiğiniz Tedavi
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 py-3 text-sm rounded-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#050b0d]">Hizmet Seçin</option>
                      <option value="implant" className="bg-[#050b0d]">Dental İmplant</option>
                      <option value="veneer" className="bg-[#050b0d]">Porselen Veneer</option>
                      <option value="invisalign" className="bg-[#050b0d]">Şeffaf Plak Tedavisi</option>
                      <option value="whitening" className="bg-[#050b0d]">Diş Beyazlatma</option>
                      <option value="other" className="bg-[#050b0d]">Genel Muayene</option>
                    </select>
                    {/* Minimal custom arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4 4L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tercih Edilen Zaman */}
              <div className="flex flex-col gap-2">
                <label htmlFor="timeframe" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-semibold">
                  Uygun Olduğunuz Zaman Aralığı
                </label>
                <div className="relative">
                  <select
                    id="timeframe"
                    value={form.timeframe}
                    onChange={(e) => setForm({ ...form, timeframe: e.target.value })}
                    className="w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 py-3 text-sm rounded-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
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

              {/* Not */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-semibold">
                  Mesaj / Not (Opsiyonel)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#050b0d] border border-white/10 focus:border-[var(--color-accent)] text-white px-4 py-3 text-sm rounded-sm outline-none transition-all duration-300 placeholder:text-white/20 resize-none h-20"
                  placeholder="Şikayetleriniz veya sormak istediğiniz sorular..."
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className={`w-full py-4 flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-500 rounded-sm cursor-pointer ${
                  submitted
                    ? "bg-emerald-800 text-white border-none"
                    : "bg-[var(--color-accent)] text-[#04090d] hover:bg-[var(--color-accent-light)] shadow-lg"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={14} />
                    Randevu Talebi Gönderildi
                  </>
                ) : (
                  <>
                    Randevu Talebi Gönder
                  </>
                )}
              </button>

              <p className="text-[9px] tracking-wider text-[var(--color-muted)] text-center">
                Gönderdiğiniz bilgiler KVKK kapsamında klinik güvencesindedir.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

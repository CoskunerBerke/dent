"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      id="iletisim"
      className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden bg-[#04090d]"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Soft dark teal background light */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(28, 72, 86, 0.12) 0%, transparent 60%)",
        }}
      />

      {/* Elegant separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-32 items-start">
          
          {/* Left Column — Contact Info */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-6 font-semibold flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              İletişim & Randevu
            </p>

            <h2 className="font-display text-[7vw] lg:text-[4vw] leading-[1.1] font-light text-[var(--color-text)] mb-6">
              Hayalinizdeki Gülüşe
              <br />
              <span className="italic text-[var(--color-accent)]">Bir Adım</span> Uzakta
            </h2>

            <p className="text-sm text-[var(--color-muted)] mb-12 max-w-md leading-relaxed">
              Ücretsiz ilk muayenenizde dijital analiz yöntemlerimizle gülüşünüzü tasarlayalım, size en uygun tedavi haritasını birlikte çıkaralım.
            </p>

            {/* Direct details */}
            <div className="space-y-8">
              {[
                { icon: Phone, label: "Telefon ile Ulaşın", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { icon: Mail, label: "E-posta Gönderin", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                { icon: MapPin, label: "Adresimiz", value: siteConfig.contact.address, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] flex items-center justify-center flex-shrink-0 transition-colors duration-300 rounded-full">
                    <Icon size={14} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-1">{label}</p>
                    <p className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border)] max-w-sm">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-2">Çalışma Saatleri</p>
              <p className="text-sm text-[var(--color-text)] font-light">{siteConfig.contact.hours}</p>
            </div>
          </div>

          {/* Right Column — Premium Minimal Form */}
          <div
            className="w-full bg-[#080f13]/40 border border-[var(--color-border)] p-8 lg:p-12 backdrop-blur-md rounded-sm"
          >
            <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-8 font-semibold flex items-center gap-4">
              <span className="w-6 h-px bg-[var(--color-accent)]" />
              Ön Randevu Formu
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative group">
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[var(--color-accent)] text-white py-3 outline-none transition-colors duration-300 text-sm placeholder:text-white/20"
                    placeholder="Adınız Soyadınız"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-focus-within:w-full" />
                </div>

                {/* Phone */}
                <div className="relative group">
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[var(--color-accent)] text-white py-3 outline-none transition-colors duration-300 text-sm placeholder:text-white/20"
                    placeholder="Telefon Numaranız"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-focus-within:w-full" />
                </div>
              </div>

              {/* Service Selection */}
              <div className="relative group">
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[var(--color-accent)] text-white py-3 outline-none transition-colors duration-300 text-sm appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#080f13]">İlgilendiğiniz Tedavi</option>
                  <option value="implant" className="bg-[#080f13]">Dental İmplant</option>
                  <option value="veneer" className="bg-[#080f13]">Porselen Veneer</option>
                  <option value="invisalign" className="bg-[#080f13]">Şeffaf Plak Tedavisi</option>
                  <option value="whitening" className="bg-[#080f13]">Diş Beyazlatma</option>
                  <option value="other" className="bg-[#080f13]">Diğer Kontrol</option>
                </select>
                {/* Minimal Custom Dropdown Arrow */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-focus-within:w-full" />
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[var(--color-accent)] text-white py-3 outline-none transition-colors duration-300 text-sm placeholder:text-white/20 resize-none h-20"
                  placeholder="Notunuz veya Belirtmek İstedikleriniz (Opsiyonel)"
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-300 group-focus-within:w-full" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-4 flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] uppercase font-semibold transition-all duration-500 rounded-sm cursor-pointer ${
                  submitted
                    ? "bg-emerald-800 text-white border-none"
                    : "border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[#04090d]"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={14} />
                    Randevu İsteği Gönderildi
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    Randevu İsteği Gönder
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

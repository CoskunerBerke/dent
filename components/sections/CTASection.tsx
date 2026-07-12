"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/content";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      id="iletisim"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Animated gradient background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(201,169,110,0.08) 0%, transparent 60%), linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32">
          {/* Left — CTA copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-label text-[var(--color-accent)] mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              Randevu & İletişim
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-lg text-[var(--color-text)] mb-6"
            >
              Hayalinizdeki
              <br />
              <span className="italic text-[var(--color-accent)]">Gülüşe</span>
              <br />
              Bir Adım Uzakta
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-body text-[var(--color-muted)] mb-12 max-w-md leading-relaxed"
            >
              Ücretsiz ilk muayenede uzmanlarımız sizi değerlendirsin. Tedavi planınızı birlikte belirleyelim.
            </motion.p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Telefon", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { icon: Mail, label: "E-posta", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                { icon: MapPin, label: "Adres", value: siteConfig.contact.address, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={16} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>
                  <div>
                    <p className="text-label text-[var(--color-muted)]">{label}</p>
                    <p className="text-body text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 pt-8 border-t border-[var(--color-border)]"
            >
              <p className="text-label text-[var(--color-muted)] mb-1">Çalışma Saatleri</p>
              <p className="text-body text-[var(--color-text)]">{siteConfig.contact.hours}</p>
            </motion.div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--color-surface)]/40 border border-[var(--color-border)] p-6 lg:p-10"
          >
            <p className="text-label text-[var(--color-accent)] mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              Randevu Formu
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-label text-[var(--color-muted)] block mb-2">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-transparent border border-[var(--color-border)] focus:border-[var(--color-accent)] text-[var(--color-text)] px-4 py-3 outline-none transition-colors duration-300 text-sm placeholder:text-[var(--color-muted)]/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-label text-[var(--color-muted)] block mb-2">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full bg-transparent border border-[var(--color-border)] focus:border-[var(--color-accent)] text-[var(--color-text)] px-4 py-3 outline-none transition-colors duration-300 text-sm placeholder:text-[var(--color-muted)]/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="text-label text-[var(--color-muted)] block mb-2">
                  İlgilendiğiniz Hizmet
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-[var(--color-text)] px-4 py-3.5 outline-none transition-colors duration-300 text-sm"
                >
                  <option value="">Hizmet Seçin</option>
                  <option value="implant">Dental İmplant</option>
                  <option value="veneer">Porselen Veneer</option>
                  <option value="invisalign">Şeffaf Plak Tedavisi</option>
                  <option value="whitening">Diş Beyazlatma</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-label text-[var(--color-muted)] block mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Bize kendinizden ve beklentilerinizden bahsedin..."
                  className="w-full bg-transparent border border-[var(--color-border)] focus:border-[var(--color-accent)] text-[var(--color-text)] px-4 py-3 outline-none transition-colors duration-300 text-sm placeholder:text-[var(--color-muted)]/50 resize-none"
                />
              </div>

              <MagneticButton
                as="button"
                className={`w-full py-4 flex items-center justify-center gap-3 text-label font-semibold transition-all duration-300 ${
                  submitted
                    ? "bg-green-700 text-white border-0"
                    : "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-light)]"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={18} />
                    Mesajınız İletildi!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Randevu Talep Et
                  </>
                )}
              </MagneticButton>

              <p className="text-label text-[var(--color-muted)] text-center pt-1">
                Bilgileriniz güvende. 24 saat içinde size ulaşacağız.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

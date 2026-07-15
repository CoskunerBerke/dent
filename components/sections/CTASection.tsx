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
    setForm({ name: "", phone: "", email: "", service: "", timeframe: "", message: "" });
  };

  return (
    <section
      id="iletisim"
      className="relative w-full bg-[#FAF9F6] pt-20 pb-28 lg:pt-28 lg:pb-36 px-5 sm:px-8 lg:px-12 xl:px-16 overflow-visible border-t border-[var(--color-border)]"
      aria-label="İletişim ve randevu bölümü"
    >
      {/* Subtle light background ambient glow */}
      <div
        className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-10 filter blur-[120px] z-0"
        style={{ background: "radial-gradient(circle, rgba(184,147,75,0.15) 0%, transparent 70%)" }}
      />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN — Contact Info */}
          <div className="space-y-10 lg:sticky lg:top-[120px] h-fit">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-accent)] mb-4 font-semibold flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--color-accent)]" />
                İLETİŞİM & RANDEVU
              </p>
              <h2
                className="font-display text-[var(--color-text)] tracking-tight mb-6"
                style={{ fontSize: "clamp(36px, 3.5vw, 54px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
              >
                Gülüşünüz İçin<br />
                <span className="italic text-[var(--color-accent)] font-normal">İletişime</span> Geçin
              </h2>
              <p className="text-[#6e675f] leading-relaxed max-w-[480px] font-light text-[15px]">
                YDA Center'daki prestijli ve modern muayenehanemizde, ileri teknolojik altyapımız ve kişiye özel hekim yaklaşımımızla sağlıklı ve estetik bir gülüş tasarlayalım.
              </p>
            </div>

            {/* Contact rows */}
            <div className="flex flex-col gap-8 max-w-[480px]">
              {/* Phones */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300 flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#6e675f] mb-1 font-semibold">TELEFON NUMARALARI</p>
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-[16px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-semibold">
                      {siteConfig.contact.phone} <span className="text-[11px] text-[#6e675f]/60 ml-2 font-normal">(Klinik Sabit Hat)</span>
                    </a>
                    {siteConfig.contact.phone2 && (
                      <a href={`tel:${siteConfig.contact.phone2}`} className="text-[16px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-semibold">
                        {siteConfig.contact.phone2} <span className="text-[11px] text-[#6e675f]/60 ml-2 font-normal">(GSM & Mobil)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300 flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#6e675f] mb-1 font-semibold">E-POSTA ADRESİ</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[16px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-semibold">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Website & Instagram */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300 flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                  <Globe size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#6e675f] mb-1 font-semibold">DİJİTAL ADRESLER</p>
                  <div className="flex flex-col gap-1">
                    <a href={siteConfig.url} target="_blank" rel="noopener noreferrer" className="text-[16px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-semibold">
                      dthakansaylam.com
                    </a>
                    <a href="https://instagram.com/dthakansaylam" target="_blank" rel="noopener noreferrer" className="text-[16px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 font-semibold flex items-center gap-1.5">
                      <InstagramIcon size={13} className="text-[var(--color-accent)]" />
                      @dthakansaylam
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300 flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#6e675f] mb-1 font-semibold">KLİNİK ADRESİ</p>
                  <p className="text-[15px] text-[var(--color-text)] font-semibold leading-relaxed max-w-[380px]">{siteConfig.contact.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300 flex-shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#6e675f] mb-1 font-semibold">ÇALIŞMA SAATLERİ</p>
                  <p className="text-[15px] text-[var(--color-text)] font-semibold">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="h-[52px] px-8 rounded-[12px] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)] hover:text-white text-[var(--color-text)] hover:text-white text-[12px] tracking-[0.18em] uppercase font-bold flex items-center justify-center gap-3 transition-all duration-300 group cursor-pointer"
              >
                <Phone size={15} />
                KLİNİĞİ ARA
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.google.com/maps/place/YDA+Center/@39.9100875,32.8075544,18.46z/data=!4m10!1m2!2m1!1sYDA+Center+A2+Blok+Kat+12+No+507+K%C4%B1z%C4%B1l%C4%B1rmak+%C3%87ankaya+Ankara!3m6!1s0x14d348b2a8a8bb1b:0x6fc94f4a1deecb8a!8m2!3d39.910185!4d32.808903!15sCj5ZREEgQ2VudGVyIEEyIEJsb2sgS2F0IDEyIE5vIDUwNyBLxLF6xLFsxLFybWFrIMOHYW5rYXlhIEFua2FyYVpAIj55ZGEgY2VudGVyIGEyIGJsb2sga2F0IDEyIG5vIDUwNyBrxLF6xLFsxLFybWFrIMOnYW5rYXlhIGFua2FyYZIBDWJ1c2luZXNzX3BhcmuaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVLU1ZadWJIWk9WbXN3VFc1T1FsUXhUakJYVms1cFpGVXhjRlJGUlJBQuABAPoBBAgAEEo!16s%2Fg%2F11g9l4qmhz?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] px-8 rounded-[12px] border border-[var(--color-border)] hover:border-[var(--color-accent)] bg-white text-[var(--color-text)] text-[12px] tracking-[0.18em] uppercase font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:bg-gray-50 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group cursor-pointer"
              >
                <MapPin size={15} />
                HARİTADA AÇ
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Form Card */}
          <div className="w-full bg-white border border-[var(--color-border)] rounded-[22px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(184,147,75,0.04)] relative">
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent rounded-t-[22px]" />

            <div className="mb-8">
              <h3 className="font-display text-[32px] lg:text-[40px] font-light text-[var(--color-text)] leading-tight mb-3">
                Ön Randevu Formu
              </h3>
              <p className="text-[13px] text-[#6e675f] leading-[1.6] font-light">
                Tedavi planınızı oluşturmak için bilgilerinizi bırakın. Ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[22px]">
              {/* Ad Soyad */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="name" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">Ad Soyad</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-[58px] w-full bg-[#FAF9F6] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-gray-400 font-semibold" placeholder="Adınız Soyadınız" />
              </div>

              {/* Telefon */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="phone" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">Telefon Numarası</label>
                <input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-[58px] w-full bg-[#FAF9F6] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-gray-400 font-semibold" placeholder="+90 5XX XXX XX XX" />
              </div>

              {/* E-posta */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="email" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">E-posta Adresi</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-[58px] w-full bg-[#FAF9F6] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-gray-400 font-semibold" placeholder="ornek@dthakansaylam.com" />
              </div>

              {/* Hizmet */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="service" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">İlgilenilen Tedavi</label>
                <div className="relative">
                  <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="h-[58px] w-full bg-[#FAF9F6] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 appearance-none cursor-pointer font-semibold">
                    <option value="" className="bg-[#FAF9F6]">Hizmet Seçin</option>
                    <option value="diagnostic" className="bg-[#FAF9F6]">Muayene ve Teşhis</option>
                    <option value="aesthetic" className="bg-[#FAF9F6]">Estetik Diş Hekimliği</option>
                    <option value="rootcanal" className="bg-[#FAF9F6]">Kanal Tedavisi</option>
                    <option value="hygiene" className="bg-[#FAF9F6]">Profesyonel Diş Hijyeni</option>
                    <option value="implant" className="bg-[#FAF9F6]">İmplant Tedavisi</option>
                    <option value="orthodontics" className="bg-[#FAF9F6]">Ortodonti</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              {/* Zaman — Full Width */}
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="timeframe" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">Uygun Olduğunuz Zaman Aralığı</label>
                <div className="relative">
                  <select id="timeframe" value={form.timeframe} onChange={(e) => setForm({ ...form, timeframe: e.target.value })} className="h-[58px] w-full bg-[#FAF9F6] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[15px] rounded-[12px] outline-none transition-all duration-300 appearance-none cursor-pointer font-semibold">
                    <option value="" className="bg-[#FAF9F6]">Zaman Dilimi Seçin</option>
                    <option value="morning" className="bg-[#FAF9F6]">Hafta İçi - Sabah (09:00 - 12:00)</option>
                    <option value="afternoon" className="bg-[#FAF9F6]">Hafta İçi - Öğleden Sonra (12:00 - 17:00)</option>
                    <option value="evening" className="bg-[#FAF9F6]">Hafta İçi - Akşamüstü (17:00 - 19:00)</option>
                    <option value="weekend" className="bg-[#FAF9F6]">Cumartesi - Tüm Gün</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              {/* Mesaj — Full Width */}
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="message" className="text-[11px] lg:text-[12px] tracking-[0.15em] uppercase text-[var(--color-accent)] font-semibold">Mesaj / Not (Opsiyonel)</label>
                <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="min-h-[160px] w-full bg-[#FAF9F6] border border-[var(--color-border)] focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] py-4 text-[15px] rounded-[12px] outline-none transition-all duration-300 placeholder:text-gray-400 resize-y font-medium" placeholder="Şikayetleriniz veya belirtmek istediğiniz sorular..." />
              </div>

              {/* Submit — Full Width */}
              <div className="col-span-2 pt-2">
                <button type="submit" className={`h-[60px] w-full flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-[12px] cursor-pointer hover:-translate-y-[2px] ${submitted ? "bg-emerald-700 text-white border-none" : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-[0_10px_25px_rgba(184,147,75,0.15)]"}`}>
                  {submitted ? (<><Check size={16} />Randevu Talebi Gönderildi</>) : (<>RANDEVU TALEBİ GÖNDER</>)}
                </button>
              </div>

              <p className="col-span-2 text-[11px] text-center text-[#6e675f] mt-2 leading-relaxed font-light">
                Gönderdiğiniz bilgiler KVKK kapsamında klinik güvencesindedir.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

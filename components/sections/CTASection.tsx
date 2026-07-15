"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check, ArrowRight, Globe } from "lucide-react";
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
    setForm({ name: "", phone: "", email: "", service: "", timeframe: "", message: "" });
  };

  return (
    <section
      id="iletisim"
      className="relative w-full bg-white py-16 md:py-24 px-6 border-b border-gray-150"
      aria-label="İletişim ve randevu bölümü"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header (Quattro Garaj Style) */}
        <div className="text-left space-y-4">
          {/* Skewed Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
            <span className="skew-x-6">İletişim ve Randevu</span>
          </div>

          <h2 className="text-3xl md:text-4.5xl font-black uppercase text-[var(--color-text)] leading-tight tracking-wide">
            Ön Randevu Formu &amp; İletişim
          </h2>
          <p className="text-xs md:text-sm text-[#6e675f] leading-relaxed font-medium">
            Sorularınız veya ön randevu talepleriniz için aşağıdaki formu doldurabilir ya da bizi doğrudan telefon hatlarımızdan arayabilirsiniz.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              
              {/* Phone Card */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-white border border-gray-200 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all duration-300 h-fit text-[var(--color-accent)]">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e675f]">Telefon Numaraları</h4>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-black uppercase text-[var(--color-text)] mt-1.5 hover:text-[var(--color-accent)] transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                  {siteConfig.contact.phone2 && (
                    <a href={`tel:${siteConfig.contact.phone2}`} className="text-sm font-black uppercase text-[var(--color-text)] mt-1 hover:text-[var(--color-accent)] transition-colors">
                      {siteConfig.contact.phone2}
                    </a>
                  )}
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-white border border-gray-200 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all duration-300 h-fit text-[var(--color-accent)]">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e675f]">E-posta Adresi</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-black uppercase text-[var(--color-text)] mt-1.5 hover:text-[var(--color-accent)] transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-white border border-gray-200 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all duration-300 h-fit text-[var(--color-accent)]">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e675f]">Klinik Adresi</h4>
                  <p className="text-xs font-bold uppercase text-[var(--color-text)] mt-1.5 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[var(--color-accent)]/35 shadow-sm transition-all duration-300 group">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-white border border-gray-200 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/20 transition-all duration-300 h-fit text-[var(--color-accent)]">
                  <Clock size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6e675f]">Çalışma Saatleri</h4>
                  <p className="text-xs font-bold uppercase text-[var(--color-text)] mt-1.5">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Map & Call Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200"
              >
                <Phone size={15} />
                Hemen Arayın
              </a>
              <a
                href="https://www.google.com/maps/place/YDA+Center/@39.9100875,32.8075544,18.46z/data=!4m10!1m2!2m1!1sYDA+Center+A2+Blok+Kat+12+No+507+K%C4%B1z%C4%B1l%C4%B1rmak+%C3%87ankaya+Ankara!3m6!1s0x14d348b2a8a8bb1b:0x6fc94f4a1deecb8a!8m2!3d39.910185!4d32.808903!15sCj5ZREEgQ2VudGVyIEEyIEJsb2sgS2F0IDEyIE5vIDUwNyBLxLF6xLFsxLFybWFrIMOHYW5rYXlhIEFua2FyYVpAIj55ZGEgY2VudGVyIGEyIGJsb2sga2F0IDEyIG5vIDUwNyBrxLF6xLFsxLFybWFrIMOnYW5rYXlhIGFua2FyYZIBDWJ1c2luZXNzX3BhcmuaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVLU1ZadWJIWk9WbXN3VFc1T1FsUXhUakJYVms1cFpGVXhjRlJGUlJBQuABAPoBBAgAEEo!16s%2Fg%2F11g9l4qmhz?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-300 text-[var(--color-text)] hover:border-[var(--color-accent)] text-xs font-black uppercase tracking-wider rounded-lg shadow-sm active:scale-95 transition-all duration-200 hover:bg-gray-50"
              >
                <MapPin size={15} />
                Yol Tarifi Al
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Form Card */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm relative">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[22px]">
              
              {/* Ad Soyad */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">Ad Soyad</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-[52px] w-full bg-gray-50 border border-gray-200 focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[14px] rounded-lg outline-none transition-all duration-200 placeholder:text-gray-400 font-bold uppercase" placeholder="Adınız Soyadınız" />
              </div>

              {/* Telefon */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">Telefon Numarası</label>
                <input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-[52px] w-full bg-gray-50 border border-gray-200 focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[14px] rounded-lg outline-none transition-all duration-200 placeholder:text-gray-400 font-bold" placeholder="+90 5XX XXX XX XX" />
              </div>

              {/* E-posta */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">E-posta Adresi</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-[52px] w-full bg-gray-50 border border-gray-200 focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[14px] rounded-lg outline-none transition-all duration-200 placeholder:text-gray-400 font-bold uppercase" placeholder="ornek@dthakansaylam.com" />
              </div>

              {/* Hizmet */}
              <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">İlgilenilen Tedavi</label>
                <div className="relative">
                  <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="h-[52px] w-full bg-gray-50 border border-gray-200 focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[14px] rounded-lg outline-none transition-all duration-200 appearance-none cursor-pointer font-bold uppercase">
                    <option value="" className="bg-white">Hizmet Seçin</option>
                    <option value="diagnostic" className="bg-white">Muayene ve Teşhis</option>
                    <option value="aesthetic" className="bg-white">Estetik Diş Hekimliği</option>
                    <option value="rootcanal" className="bg-white">Kanal Tedavisi</option>
                    <option value="hygiene" className="bg-white">Profesyonel Diş Hijyeni</option>
                    <option value="implant" className="bg-white">İmplant Tedavisi</option>
                    <option value="orthodontics" className="bg-white">Ortodonti</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              {/* Zaman — Full Width */}
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="timeframe" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">Uygun Olduğunuz Zaman Aralığı</label>
                <div className="relative">
                  <select id="timeframe" value={form.timeframe} onChange={(e) => setForm({ ...form, timeframe: e.target.value })} className="h-[52px] w-full bg-gray-50 border border-gray-200 focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] text-[14px] rounded-lg outline-none transition-all duration-200 appearance-none cursor-pointer font-bold uppercase">
                    <option value="" className="bg-white">Zaman Dilimi Seçin</option>
                    <option value="morning" className="bg-white">Hafta İçi - Sabah (09:00 - 12:00)</option>
                    <option value="afternoon" className="bg-white">Hafta İçi - Öğleden Sonra (12:00 - 17:00)</option>
                    <option value="evening" className="bg-white">Hafta İçi - Akşamüstü (17:00 - 19:00)</option>
                    <option value="weekend" className="bg-white">Cumartesi - Tüm Gün</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              {/* Mesaj — Full Width */}
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">Mesaj / Not (Opsiyonel)</label>
                <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="min-h-[140px] w-full bg-gray-50 border border-gray-200 focus:border-[var(--color-accent)] focus:bg-white text-[var(--color-text)] px-[18px] py-4 text-[14px] rounded-lg outline-none transition-all duration-200 placeholder:text-gray-400 resize-y font-bold uppercase" placeholder="Şikayetleriniz veya belirtmek istediğiniz sorular..." />
              </div>

              {/* Submit — Full Width */}
              <div className="col-span-2 pt-2">
                <button type="submit" className={`h-[60px] w-full flex items-center justify-center gap-3 text-xs font-black tracking-wider uppercase transition-all duration-200 rounded-lg cursor-pointer hover:-translate-y-[1px] active:scale-95 ${submitted ? "bg-emerald-700 text-white border-none" : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-md shadow-[var(--color-accent)]/10"}`}>
                  {submitted ? (<><Check size={16} />Randevu Talebi Gönderildi</>) : (<>RANDEVU TALEBİ GÖNDER</>)}
                </button>
              </div>

              <p className="col-span-2 text-[10px] text-center text-[#6e675f] mt-2 leading-relaxed font-semibold uppercase">
                Gönderdiğiniz bilgiler KVKK kapsamında klinik güvencesindedir.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

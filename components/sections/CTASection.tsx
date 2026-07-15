"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { siteConfig } from "@/data/content";

const MAPS_URL =
  "https://www.google.com/maps/place/YDA+Center/@39.9100875,32.8075544,18.46z/data=!4m10!1m2!2m1!1sYDA+Center+A2+Blok+Kat+12+No+507+K%C4%B1z%C4%B1l%C4%B1rmak+%C3%87ankaya+Ankara!3m6!1s0x14d348b2a8a8bb1b:0x6fc94f4a1deecb8a!8m2!3d39.910185!4d32.808903!15sCj5ZREEgQ2VudGVyIEEyIEJsb2sgS2F0IDEyIE5vIDUwNyBLxLF6xLFsxLFybWFrIMOHYW5rYXlhIEFua2FyYVpAIj55ZGEgY2VudGVyIGEyIGJsb2sga2F0IDEyIG5vIDUwNyBrxLF6xLFsxLFybWFrIMOnYW5rYXlhIGFua2FyYZIBDWJ1c2luZXNzX3BhcmuaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVLU1ZadWJIWk9WbXN3VFc1T1FsUXhUakJYVms1cFpGVXhjRlJGUlJBQuABAPoBBAgAEEo!16s%2Fg%2F11g9l4qmhz?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 4000);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="iletisim" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Başlık – merkez ── */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            İletişim &amp; Randevu
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-[var(--color-text)] leading-tight mb-5">
            Randevu Al &amp;<br />Bize Ulaşın
          </h2>
          <p className="text-base text-[#6e675f] max-w-xl mx-auto leading-relaxed">
            Sorularınız veya randevu talepleriniz için formu doldurun ya da doğrudan arayın.
          </p>
        </div>

        {/* ── İletişim Kartları – yatay sıra ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: <Phone size={18} className="text-[var(--color-accent)]" />, label: "Sabit Hat", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
            { icon: <Phone size={18} className="text-[var(--color-accent)]" />, label: "WhatsApp", value: siteConfig.contact.phone2, href: `tel:${siteConfig.contact.phone2}` },
            { icon: <Clock size={18} className="text-[var(--color-accent)]" />, label: "Çalışma Saatleri", value: "Pzt–Cts · 09–19", href: null },
            { icon: <MapPin size={18} className="text-[var(--color-accent)]" />, label: "Adres", value: "YDA Center A2/507", href: MAPS_URL },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2 p-5 bg-[#FAFAFA] border border-gray-200 rounded-xl">
              <div className="p-2 w-fit rounded-lg bg-white border border-gray-100">{item.icon}</div>
              <p className="text-[10px] font-black uppercase tracking-wider text-[#9e9e9e]">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors leading-snug"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-bold text-[var(--color-text)] leading-snug">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* ── 2 Büyük Aksiyon Butonu ── */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[var(--color-accent)] text-white text-sm font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all hover:bg-[var(--color-accent-light)]"
          >
            <Phone size={16} />
            Hemen Arayın
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-[var(--color-text)] text-sm font-black uppercase tracking-wider rounded-lg active:scale-95 transition-all hover:border-[var(--color-accent)]/40"
          >
            <MapPin size={16} />
            Yol Tarifi Al
          </a>
        </div>

        {/* ── Form – tam genişlik ── */}
        <form
          onSubmit={submit}
          className="bg-[#FAFAFA] border border-gray-200 rounded-2xl p-8 md:p-12 space-y-5 shadow-sm"
        >
          <h3 className="text-xl font-black uppercase text-[var(--color-text)] mb-2">
            Ön Randevu Formu
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-[var(--color-accent)]">Ad Soyad</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 w-full bg-white border border-gray-200 focus:border-[var(--color-accent)] text-sm text-[var(--color-text)] px-4 rounded-lg outline-none transition-all font-medium placeholder:text-gray-300"
                placeholder="Ad Soyad"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-wider text-[var(--color-accent)]">Telefon</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="h-12 w-full bg-white border border-gray-200 focus:border-[var(--color-accent)] text-sm text-[var(--color-text)] px-4 rounded-lg outline-none transition-all font-medium placeholder:text-gray-300"
                placeholder="05XX XXX XX XX"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-[var(--color-accent)]">E-posta</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-12 w-full bg-white border border-gray-200 focus:border-[var(--color-accent)] text-sm text-[var(--color-text)] px-4 rounded-lg outline-none transition-all font-medium placeholder:text-gray-300"
              placeholder="ornek@mail.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-[var(--color-accent)]">İlgilenilen Tedavi</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="h-12 w-full bg-white border border-gray-200 focus:border-[var(--color-accent)] text-sm text-[var(--color-text)] px-4 rounded-lg outline-none transition-all appearance-none cursor-pointer font-medium"
            >
              <option value="">Tedavi Seçin</option>
              <option value="diagnostic">Muayene ve Teşhis</option>
              <option value="aesthetic">Estetik Diş Hekimliği</option>
              <option value="rootcanal">Kanal Tedavisi</option>
              <option value="hygiene">Diş Temizliği</option>
              <option value="implant">İmplant Tedavisi</option>
              <option value="orthodontics">Ortodonti</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-[var(--color-accent)]">Mesaj (Opsiyonel)</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white border border-gray-200 focus:border-[var(--color-accent)] text-sm text-[var(--color-text)] px-4 py-3 rounded-lg outline-none transition-all resize-none font-medium placeholder:text-gray-300"
              placeholder="Sormak istedikleriniz..."
            />
          </div>

          <button
            type="submit"
            className={`w-full h-14 flex items-center justify-center gap-2 text-sm font-black uppercase tracking-wider rounded-lg transition-all duration-200 active:scale-95 cursor-pointer ${
              done
                ? "bg-emerald-600 text-white"
                : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-md"
            }`}
          >
            {done ? (
              <>
                <Check size={16} /> Gönderildi
              </>
            ) : (
              "Randevu Talebi Gönder"
            )}
          </button>
          <p className="text-[10px] text-center text-[#9e9e9e] font-medium">
            Kişisel verileriniz KVKK kapsamında güvende tutulmaktadır.
          </p>
        </form>

      </div>
    </section>
  );
}

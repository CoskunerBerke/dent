"use client";
import { ArrowUp } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative w-full bg-white border-t border-gray-150 py-12 px-6"
      aria-label="Site altbilgisi"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_0.8fr_1fr] gap-12 lg:gap-[100px] pb-12 border-b border-gray-150">
          
          {/* Column 1: Clinic Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-black uppercase text-[var(--color-text)] tracking-wider">
              {siteConfig.name}
            </h2>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[var(--color-accent)] font-black">
              DİŞ MUAYENEHANESİ
            </p>
            <p className="text-xs text-[#6e675f] max-w-xs leading-relaxed font-semibold">
              Kusursuz gülüş tasarımı hedeflerimizle, ileri teknolojik altyapı ve sterilizasyon standartlarımızı Ankara YDA Center muayenehanemizde bir araya getiriyoruz.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-wider text-[var(--color-text)]">
              Hızlı Erişim
            </p>
            <nav className="flex flex-col gap-2.5 font-bold uppercase text-[11px] tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#6e675f] hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-wider text-[var(--color-text)]">
              İletişim Bilgileri
            </p>
            <div className="flex flex-col gap-2.5 font-bold uppercase text-[11px] tracking-wide text-[#6e675f]">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                Tel: {siteConfig.contact.phone}
              </a>
              {siteConfig.contact.phone2 && (
                <a
                  href={`tel:${siteConfig.contact.phone2}`}
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  GSM: {siteConfig.contact.phone2}
                </a>
              )}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <p className="max-w-[260px] leading-relaxed font-semibold text-[10px] tracking-wide">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and social links */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-black uppercase tracking-wider text-[#6e675f]">
            © 2026 DİŞ HEKİMİ HAKAN SAYLAM. Tüm hakları saklıdır.
          </p>

          {/* Social Links & Back to top button */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-[10px] tracking-wider uppercase font-black">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e675f] hover:text-[var(--color-accent)] transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e675f] hover:text-[var(--color-accent)] transition-colors"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6e675f] hover:text-[var(--color-accent)] transition-colors"
              >
                X
              </a>
            </div>

            {/* Back to top arrow */}
            <button
              onClick={scrollTop}
              aria-label="Sayfanın başına git"
              className="w-10 h-10 border border-gray-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-200 group rounded-lg cursor-pointer"
            >
              <ArrowUp
                size={14}
                className="text-[#6e675f] group-hover:text-white transition-colors"
              />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

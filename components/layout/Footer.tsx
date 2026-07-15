"use client";
import { ArrowUp } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative w-full bg-white border-t border-[var(--color-border)] py-16 px-6 lg:py-[80px] lg:pb-[32px] lg:px-[64px] lg:min-h-[380px]"
      aria-label="Site altbilgisi"
    >
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        
        {/* Top Footer 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_0.8fr_1fr] gap-12 lg:gap-[100px] pb-16 border-b border-[var(--color-border)]">
          
          {/* Column 1: Clinic Brand */}
          <div>
            <h2 className="font-display text-[28px] font-light text-[var(--color-text)] mb-2 tracking-wide">
              {siteConfig.name}
            </h2>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              DİŞ MUAYENEHANESİ
            </p>
            <p className="text-[14px] text-[#6e675f] max-w-xs leading-relaxed font-light">
              Kusursuz gülüş tasarımı hedeflerimizle, ileri teknolojik altyapı ve sterilizasyon standartlarımızı Ankara YDA Center muayenehanemizde bir araya getiriyoruz.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-text)] mb-6 font-semibold">
              HIZLI ERİŞİM
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-[#6e675f] hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-text)] mb-6 font-semibold">
              İLETİŞİM
            </p>
            <div className="flex flex-col gap-3.5 text-[14px] text-[#6e675f] font-light leading-relaxed">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-[var(--color-accent)] transition-colors font-semibold"
              >
                Tel: {siteConfig.contact.phone}
              </a>
              {siteConfig.contact.phone2 && (
                <a
                  href={`tel:${siteConfig.contact.phone2}`}
                  className="hover:text-[var(--color-accent)] transition-colors font-semibold"
                >
                  GSM: {siteConfig.contact.phone2}
                </a>
              )}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[var(--color-accent)] transition-colors font-semibold"
              >
                {siteConfig.contact.email}
              </a>
              <p className="max-w-[260px] leading-relaxed">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and social links */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] tracking-wider text-[#6e675f]">
            © 2026 DİŞ HEKİMİ HAKAN SAYLAM. Tüm hakları saklıdır.
          </p>

          {/* Social Links & Back to top button */}
          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-[11px] tracking-[0.18em] uppercase font-semibold">
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
              className="w-10 h-10 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300 group rounded-[4px] cursor-pointer"
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

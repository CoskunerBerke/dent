"use client";
import { ArrowUp } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-150 py-16">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-150">

          {/* Brand */}
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-accent)]">DT.</p>
              <h2 className="text-xl font-black uppercase text-[var(--color-text)] tracking-widest">HAKAN SAYLAM</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#9e9e9e] mt-0.5">Diş Muayenehanesi</p>
            </div>
            <p className="text-xs text-[#6e675f] leading-relaxed max-w-[240px]">
              Ankara YDA Center'da modern teknoloji ve uzman kadromuzla hizmetinizdeyiz.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-text)]">Menü</p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-[11px] font-bold uppercase tracking-wider text-[#6e675f] hover:text-[var(--color-accent)] transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-text)]">İletişim</p>
            <div className="flex flex-col gap-2.5">
              <a href={`tel:${siteConfig.contact.phone}`} className="text-[11px] font-bold text-[#6e675f] hover:text-[var(--color-accent)] transition-colors">
                {siteConfig.contact.phone}
              </a>
              {siteConfig.contact.phone2 && (
                <a href={`tel:${siteConfig.contact.phone2}`} className="text-[11px] font-bold text-[#6e675f] hover:text-[var(--color-accent)] transition-colors">
                  {siteConfig.contact.phone2}
                </a>
              )}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[11px] font-bold text-[#6e675f] hover:text-[var(--color-accent)] transition-colors">
                {siteConfig.contact.email}
              </a>
              <p className="text-[11px] text-[#6e675f] leading-relaxed max-w-[220px]">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9e9e9e]">
            © 2026 Dt. Hakan Saylam Diş Muayenehanesi
          </p>
          <div className="flex items-center gap-5">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-wider text-[#9e9e9e] hover:text-[var(--color-accent)] transition-colors">Instagram</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-wider text-[#9e9e9e] hover:text-[var(--color-accent)] transition-colors">Facebook</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 border border-gray-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-all rounded-lg cursor-pointer group"
              aria-label="Başa dön"
            >
              <ArrowUp size={13} className="text-[#9e9e9e] group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

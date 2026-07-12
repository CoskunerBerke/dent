"use client";
import { ArrowUp } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative pt-28 pb-16 bg-[#04090d] border-t border-[var(--color-border)] overflow-hidden"
      aria-label="Site altbilgisi"
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 relative z-10">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-16 pb-16 border-b border-[var(--color-border)]">
          
          {/* Clinic Brand Column */}
          <div>
            <h2 className="font-display text-3xl font-light text-[var(--color-text)] mb-3 tracking-wide">
              {siteConfig.name}
            </h2>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-accent)] mb-6 font-semibold">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-[var(--color-muted)] max-w-xs leading-relaxed font-light">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-6 font-semibold">
              Hızlı Erişim
            </p>
            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details Column */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] mb-6 font-semibold">
              İrtibat
            </p>
            <div className="flex flex-col gap-3.5 text-sm text-[var(--color-muted)] font-light leading-relaxed">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <p className="max-w-[220px]">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

        </div>

        {/* Lower Copyright & Actions Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <p className="text-[10px] tracking-wider text-[var(--color-muted)]">
            © {new Date().getFullYear()} {siteConfig.name} Premium Dental. Tüm hakları saklıdır.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
              { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
              { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 border border-[var(--color-border)] hover:border-[var(--color-accent)] flex items-center justify-center transition-colors duration-300 group rounded-full"
              >
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                  <Icon />
                </span>
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollTop}
            aria-label="Sayfanın başına git"
            className="w-9 h-9 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300 group rounded-full cursor-pointer"
          >
            <ArrowUp
              size={12}
              className="text-[var(--color-muted)] group-hover:text-[#04090d] transition-colors"
            />
          </button>
        </div>

      </div>
    </footer>
  );
}

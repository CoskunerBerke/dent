"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

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
import { siteConfig, navLinks } from "@/data/content";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative pt-24 pb-12 border-t border-[var(--color-border)] bg-[#04090d] overflow-hidden"
      aria-label="Site altbilgisi"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 lg:gap-24 pb-12 border-b border-[var(--color-border)]"
        >
          {/* Brand */}
          <div>
            <h2 className="display-md text-[var(--color-text)] mb-3">{siteConfig.name}</h2>
            <p className="text-label text-[var(--color-accent)] mb-4">{siteConfig.tagline}</p>
            <p className="text-body text-[var(--color-muted)] max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-label text-[var(--color-muted)] mb-6">Sayfalar</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label text-[var(--color-muted)] mb-6">İletişim</p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-body text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-body text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <p className="text-body text-[var(--color-muted)] max-w-[200px] text-sm">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8"
        >
          <p className="text-label text-[var(--color-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>

          {/* Social */}
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
                className="w-9 h-9 border border-[var(--color-border)] hover:border-[var(--color-accent)] flex items-center justify-center transition-colors duration-300 group"
              >
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                  <Icon />
                </span>
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            aria-label="Sayfanın başına git"
            className="w-9 h-9 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300 group"
          >
            <ArrowUp
              size={14}
              className="text-[var(--color-muted)] group-hover:text-[var(--color-bg)] transition-colors"
            />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}

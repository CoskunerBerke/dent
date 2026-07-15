"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastScrollY.current && y > 200);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          
          {/* Logo with clean typography matching 1st photo */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Minimal Gold Tooth Icon representation */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.5 2 7 3.5 7 6.5C7 9 9 10 9 12C9 14 7 14.5 7 18C7 21.5 9.5 22 12 22C14.5 22 17 21.5 17 18C17 14.5 15 14 15 12C15 10 17 9 17 6.5C17 3.5 14.5 2 12 2Z" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-display text-[15px] lg:text-[17px] font-bold tracking-[0.2em] text-[var(--color-text)]">
              HAKAN SAYLAM
              <span className="text-[10px] block tracking-[0.3em] font-sans font-semibold text-[var(--color-accent)]">DİŞ KLİNİĞİ</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#6e675f] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions Column */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-[12px] tracking-[0.15em] font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
            >
              <Phone size={14} className="text-[var(--color-accent)]" />
              {siteConfig.contact.phone}
            </a>
            <button
              onClick={() => handleNavClick("#iletisim")}
              className="h-[44px] px-6 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white text-[10px] tracking-[0.2em] uppercase font-bold rounded-[6px] transition-all duration-300 cursor-pointer"
            >
              Randevu Al
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            className="lg:hidden text-[var(--color-text)] p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-2xl font-light text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-label text-[#6e675f] flex items-center gap-2 font-semibold"
                >
                  <Phone size={13} className="text-[var(--color-accent)]" />
                  {siteConfig.contact.phone}
                </a>
                <button
                  onClick={() => handleNavClick("#iletisim")}
                  className="h-[48px] px-8 bg-[var(--color-accent)] text-white text-[11px] tracking-[0.2em] uppercase font-bold rounded-[6px]"
                >
                  Randevu Al
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

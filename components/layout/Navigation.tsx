"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
            ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-label text-[var(--color-text)] tracking-[0.3em]"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            {siteConfig.name}
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-label text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-label text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <button
              onClick={() => handleNavClick("#iletisim")}
              className="text-label px-5 py-2.5 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-all duration-300 cursor-none"
            >
              Randevu Al
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--color-text)] p-2"
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
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="display-md text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-label text-[var(--color-muted)]"
                >
                  {siteConfig.contact.phone}
                </a>
                <button
                  onClick={() => handleNavClick("#iletisim")}
                  className="text-label px-8 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium"
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

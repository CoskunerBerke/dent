"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white border-b border-gray-150 py-4 ${
          scrolled ? "shadow-md" : ""
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo Brand (Quattro Garaj Style) */}
          <a
            href="#"
            className="inline-flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-base font-black italic tracking-wider uppercase transition-colors duration-200 text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
              HAKAN
            </span>
            <div className="relative w-9 h-9 rounded-full bg-[var(--color-text)] border-2 border-[var(--color-accent)] flex items-center justify-center font-black italic tracking-tighter text-xs group-hover:scale-105 transition-transform duration-200 shadow-md">
              <span className="text-white">H</span>
              <span className="text-[var(--color-accent)] -ml-0.5">S</span>
            </div>
            <span className="text-base font-black italic tracking-wider uppercase transition-colors duration-200 text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
              SAYLAM
            </span>
          </a>

          {/* Navigation Links (Quattro Garaj Style) */}
          <nav className="hidden lg:flex items-center gap-8 font-bold">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs tracking-wider uppercase py-2 transition-all duration-200 border-b-2 border-transparent text-[#6e675f] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions (Quattro Garaj Style) */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-xs font-black text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Phone size={14} className="text-[var(--color-accent)]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            
            <a
              href="https://www.google.com/maps/place/YDA+Center/@39.9100875,32.8075544,18.46z/data=!4m10!1m2!2m1!1sYDA+Center+A2+Blok+Kat+12+No+507+K%C4%B1z%C4%B1l%C4%B1rmak+%C3%87ankaya+Ankara!3m6!1s0x14d348b2a8a8bb1b:0x6fc94f4a1deecb8a!8m2!3d39.910185!4d32.808903!15sCj5ZREEgQ2VudGVyIEEyIEJsb2sgS2F0IDEyIE5vIDUwNyBLxLF6xLFsxLFybWFrIMOHYW5rYXlhIEFua2FyYVpAIj55ZGEgY2VudGVyIGEyIGJsb2sga2F0IDEyIG5vIDUwNyBrxLF6xLFsxLFybWFrIMOnYW5rYXlhIGFua2FyYZIBDWJ1c2luZXNzX3BhcmuaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVLU1ZadWJIWk9WbXN3VFc1T1FsUXhUakJYVms1cFpGVXhjRlJGUlJBQuABAPoBBAgAEEo!16s%2Fg%2F11g9l4qmhz?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200"
            >
              <MapPin size={14} />
              YOL TARİFİ AL
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[var(--color-text)] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Menüyü Aç/Kapat"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[var(--nav-height)] left-0 right-0 z-40 bg-white border-b border-gray-150 py-6 px-6 lg:hidden flex flex-col gap-6 shadow-xl"
          >
            <nav className="flex flex-col gap-4 font-bold">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm tracking-wide py-2 border-b border-gray-100 text-[#6e675f] hover:text-[var(--color-accent)] cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-gray-100 pt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-sm font-black text-[var(--color-text)]"
              >
                <Phone size={16} className="text-[var(--color-accent)]" />
                <span>{siteConfig.contact.phone}</span>
              </a>

              <a
                href="https://www.google.com/maps/place/YDA+Center/@39.9100875,32.8075544,18.46z/data=!4m10!1m2!2m1!1sYDA+Center+A2+Blok+Kat+12+No+507+K%C4%B1z%C4%B1l%C4%B1rmak+%C3%87ankaya+Ankara!3m6!1s0x14d348b2a8a8bb1b:0x6fc94f4a1deecb8a!8m2!3d39.910185!4d32.808903!15sCj5ZREEgQ2VudGVyIEEyIEJsb2sgS2F0IDEyIE5vIDUwNyBLxLF6xLFsxLFybWFrIMOHYW5rYXlhIEFua2FyYVpAIj55ZGEgY2VudGVyIGEyIGJsb2sga2F0IDEyIG5vIDUwNyBrxLF6xLFsxLFybWFrIMOnYW5rYXlhIGFua2FyYZIBDWJ1c2luZXNzX3BhcmuaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVLU1ZadWJIWk9WbXN3VFc1T1FsUXhUakJYVms1cFpGVXhjRlJGUlJBQuABAPoBBAgAEEo!16s%2Fg%2F11g9l4qmhz?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md"
              >
                <MapPin size={14} />
                YOL TARİFİ AL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

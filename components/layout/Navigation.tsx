"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

const MAPS_URL =
  "https://www.google.com/maps/place/YDA+Center/@39.9100875,32.8075544,18.46z/data=!4m10!1m2!2m1!1sYDA+Center+A2+Blok+Kat+12+No+507+K%C4%B1z%C4%B1l%C4%B1rmak+%C3%87ankaya+Ankara!3m6!1s0x14d348b2a8a8bb1b:0x6fc94f4a1deecb8a!8m2!3d39.910185!4d32.808903!15sCj5ZREEgQ2VudGVyIEEyIEJsb2sgS2F0IDEyIE5vIDUwNyBLxLF6xLFsxLFybWFrIMOHYW5rYXlhIEFua2FyYVpAIj55ZGEgY2VudGVyIGEyIGJsb2sga2F0IDEyIG5vIDUwNyBrxLF6xLFsxLFybWFrIMOnYW5rYXlhIGFua2FyYZIBDWJ1c2luZXNzX3BhcmuaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVLU1ZadWJIWk9WbXN3VFc1T1FsUXhUakJYVms1cFpGVXhjRlJGUlJBQuABAPoBBAgAEEo!16s%2Fg%2F11g9l4qmhz?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY.current && y > 180);
      lastY.current = y;
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-150 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12 h-full flex items-center justify-between">

          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start cursor-pointer group"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[var(--color-accent)] leading-none">
              DT.
            </span>
            <span className="text-[15px] font-black uppercase tracking-widest text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors leading-none mt-0.5">
              HAKAN SAYLAM
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-[11px] font-bold uppercase tracking-wider text-[#6e675f] hover:text-[var(--color-accent)] transition-colors cursor-pointer pb-1 border-b-2 border-transparent hover:border-[var(--color-accent)]"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 text-[12px] font-black text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
              <Phone size={13} className="text-[var(--color-accent)]" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-[var(--color-accent)] text-white text-[11px] font-black uppercase tracking-wider rounded-lg shadow-sm hover:bg-[var(--color-accent-light)] active:scale-95 transition-all"
            >
              <MapPin size={13} />
              Yol Tarifi
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[var(--color-text)] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Menü"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-[var(--nav-height)] left-0 right-0 z-40 bg-white border-b border-gray-150 px-8 py-8 lg:hidden shadow-lg"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-left text-sm font-bold uppercase tracking-wider text-[#6e675f] hover:text-[var(--color-accent)] transition-colors cursor-pointer border-b border-gray-100 pb-4"
                >
                  {l.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-100">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-sm font-black text-[var(--color-text)]">
                <Phone size={15} className="text-[var(--color-accent)]" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-wider rounded-lg"
              >
                <MapPin size={13} />
                Yol Tarifi Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

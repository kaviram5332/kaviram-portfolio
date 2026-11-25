import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-gradient-to-b from-[#050508]/75 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Minimal Brand Wordmark */}
        <a
          href="#hero-story"
          className="inline-flex items-center gap-1 font-display text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-85"
        >
          <span className="font-mono text-rose-400">&lt;/&gt;</span>
          <span>Developer</span>
        </a>

        {/* Clean Center Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Minimal Luxury Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PROFILE.resumePath}
            download="Kaviram_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
          >
            <Download className="h-3.5 w-3.5 text-zinc-400" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#050508]/95 backdrop-blur-xl px-5 py-5 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-4">
              <a
                href={PROFILE.resumePath}
                download="Kaviram_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

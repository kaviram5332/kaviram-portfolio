import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const HeroScrollytelling: React.FC = () => {
  return (
    <section
      id="hero-story"
      className="relative z-10 flex min-h-[100dvh] w-full items-end pb-20 sm:items-center sm:pb-0 pt-20"
      aria-label="Hero Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg"
        >
          <p className="mb-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-rose-400">
            {PROFILE.role}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.06] tracking-tight text-gradient-hero">
            {PROFILE.heroHeadline}
          </h1>

          <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-zinc-300">
            Blending creativity and technical expertise to build clean, scalable software and
            approachable digital products.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href="#about"
              className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 whitespace-nowrap"
            >
              <span>About Me</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={PROFILE.resumePath}
              download="Kaviram_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full glass-pill px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-100 transition-all hover:border-white/25 hover:bg-white/10 whitespace-nowrap"
            >
              <Download className="h-3.5 w-3.5 text-sky-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 backdrop-blur-md transition-all hover:border-white/30 hover:text-white whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 text-zinc-400" />
              <span>Contact</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll Cue */}
        <div className="mt-12 sm:mt-14 flex items-center gap-2.5 text-xs text-zinc-300">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/45 backdrop-blur-md">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-rose-400" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

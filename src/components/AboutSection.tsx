import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="01 // ABOUT"
          title={ABOUT_DATA.headline}
          description={ABOUT_DATA.intro}
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Narrative & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl glass-panel p-7 sm:p-9 flex flex-col justify-between"
          >
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              {ABOUT_DATA.journey}
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-rose-400 mb-2">
                Mission
              </div>
              <p className="font-display text-lg sm:text-xl font-medium leading-snug text-white">
                &ldquo;{ABOUT_DATA.mission}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Clean Telemetry Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {ABOUT_DATA.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl glass-panel p-6 flex flex-col justify-between"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gradient-cyan">
                  {stat.value}
                </div>
                <div className="mt-3 text-xs sm:text-sm text-zinc-400 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3 Core Principles */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ABOUT_DATA.values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
            >
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <h3 className="font-display text-base font-semibold text-white">{val.title}</h3>
                <span className="font-mono text-[11px] text-rose-400">{val.metric}</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

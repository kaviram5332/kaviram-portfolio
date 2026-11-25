import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { TIMELINE_ENTRIES, type TimelineEntry } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const TYPE_FILTERS: { id: 'all' | TimelineEntry['type']; label: string }[] = [
  { id: 'all', label: 'All Milestones' },
  { id: 'experience', label: 'Internships & Work' },
  { id: 'milestone', label: 'Awards & Certs' },
  { id: 'education', label: 'Education' },
];

const TYPE_ICON: Record<TimelineEntry['type'], React.ComponentType<{ className?: string }>> = {
  experience: Briefcase,
  education: GraduationCap,
  milestone: Award,
};

export const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | TimelineEntry['type']>('all');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  });
  const spineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const entries =
    filter === 'all'
      ? TIMELINE_ENTRIES
      : TIMELINE_ENTRIES.filter((entry) => entry.type === filter);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative z-10 py-24 sm:py-28 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeader
            eyebrow="02 // TIMELINE"
            title="Experience, Education & Milestones."
            description="Key internships, academic foundations, and technical milestones."
          />

          <div className="flex flex-wrap gap-2">
            {TYPE_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-2 font-mono text-xs transition-all border ${
                  filter === item.id
                    ? 'border-sky-400/45 bg-sky-500/15 text-white'
                    : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Spine & Entries */}
        <div className="relative mt-14 pl-7 sm:pl-10">
          {/* Static Track */}
          <div
            aria-hidden="true"
            className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-px bg-white/10"
          />
          {/* Scroll-Animated Glowing Beam */}
          <motion.div
            aria-hidden="true"
            style={{ height: spineHeight }}
            className="absolute left-2.5 sm:left-4 top-2 w-[2px] bg-gradient-to-b from-rose-500 via-sky-400 to-indigo-400 shadow-[0_0_16px_rgba(244,63,94,0.7)]"
          />

          <div className="space-y-8">
            {entries.map((entry, idx) => {
              const Icon = TYPE_ICON[entry.type];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="relative"
                >
                  {/* Node Marker */}
                  <div className="absolute -left-[27px] sm:-left-[35px] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-rose-500/45 bg-[#090a0f] text-rose-400 shadow-[0_0_18px_rgba(244,63,94,0.35)]">
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  <div className="rounded-3xl glass-panel p-6 sm:p-8 transition-all hover:border-white/20">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-sky-400">
                          {entry.period}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                          {entry.typeLabel}
                        </span>
                      </div>

                      {entry.metricBadge && (
                        <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-xs font-semibold text-rose-300">
                          {entry.metricBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-white">
                      {entry.title}
                    </h3>
                    <div className="mt-1 font-mono text-xs text-zinc-400">
                      {entry.organization} · {entry.location}
                    </div>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
                      {entry.description}
                    </p>

                    <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {entry.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-300"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

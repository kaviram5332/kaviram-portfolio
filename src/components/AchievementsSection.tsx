import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GitPullRequest, ShieldCheck, Trophy } from 'lucide-react';
import { ACHIEVEMENTS, type AchievementItem } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const CATEGORY_META: Record<
  AchievementItem['category'],
  { icon: React.ComponentType<{ className?: string }>; badge: string }
> = {
  Competition: {
    icon: Trophy,
    badge: 'text-amber-300 border-amber-400/30 bg-amber-400/10',
  },
  Certification: {
    icon: ShieldCheck,
    badge: 'text-sky-300 border-sky-400/30 bg-sky-400/10',
  },
  Research: {
    icon: BookOpen,
    badge: 'text-indigo-300 border-indigo-400/30 bg-indigo-400/10',
  },
  'Open Source': {
    icon: GitPullRequest,
    badge: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
  },
  Award: {
    icon: Award,
    badge: 'text-rose-300 border-rose-400/30 bg-rose-400/10',
  },
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative z-10 py-24 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="03 // RECOGNITION"
          title="Awards, Certifications & Open Source."
          description="Competitive programming benchmarks, cloud ML credentials, and open-source impact."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, idx) => {
            const meta = CATEGORY_META[item.category];
            const Icon = meta.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group rounded-3xl glass-panel p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] ${meta.badge}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{item.category}</span>
                    </span>
                    <span className="font-mono text-xs text-zinc-500">{item.year}</span>
                  </div>

                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-1 font-mono text-xs text-zinc-400">{item.issuer}</div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Outcome
                  </span>
                  <span className="font-mono text-xs font-semibold text-white">{item.metric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

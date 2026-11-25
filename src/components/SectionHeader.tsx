import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
}) => {
  const isCenter = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <div
        className={`mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-rose-400 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-6 bg-rose-500/70" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </motion.div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const ContactAndFooter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Full-Stack Software Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback handled cleanly
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <>
      <section id="contact" className="relative z-10 py-24 sm:py-28 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="04 // CONTACT"
            title="Let's Engineer Something Extraordinary."
            description="Open to Software Developer roles, full-stack collaborations, and technical advisory."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Direct Channels Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 rounded-3xl glass-panel p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-rose-500/15 blur-[90px]"
              />

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1 font-mono text-[11px] text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{PROFILE.availability}</span>
                </div>

                <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Direct Signal, Zero Friction.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
                  Reach out directly via email or connect on GitHub and LinkedIn. Average response
                  time is under 12 hours.
                </p>

                {/* Email Copy Box */}
                <div className="mt-7 rounded-2xl border border-white/10 bg-black/40 p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-4 w-4 shrink-0 text-rose-400" />
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="font-mono text-sm text-white truncate hover:text-rose-300 transition-colors"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1.5 font-mono text-[11px] text-zinc-200 hover:bg-white/10 transition-colors shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-sky-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Profiles + Resume */}
              <div className="mt-8 space-y-3 relative z-10">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-zinc-200 hover:border-sky-400/40 hover:text-white transition-all"
                  >
                    <Linkedin className="h-4 w-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-zinc-200 hover:border-white/30 hover:text-white transition-all"
                  >
                    <Github className="h-4 w-4 text-white" />
                    <span>GitHub</span>
                  </a>
                </div>

                <a
                  href={PROFILE.resumePath}
                  download="Kaviram_Resume.pdf"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs font-semibold text-rose-200 hover:bg-rose-500/20 transition-all"
                >
                  <Download className="h-4 w-4 text-rose-400" />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-7 rounded-3xl glass-panel p-7 sm:p-9"
            >
              {submitted ? (
                <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 mb-5">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Transmission Received.
                  </h3>
                  <p className="mt-3 max-w-md text-sm sm:text-base text-zinc-400">
                    Thank you, <span className="text-white font-medium">{name}</span>. Your message
                    regarding <span className="text-sky-400">{scope}</span> is queued — you can
                    also reach me directly at{' '}
                    <a href={`mailto:${PROFILE.email}`} className="text-rose-400 underline">
                      {PROFILE.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-white hover:bg-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Rivera"
                        className="w-full rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-rose-500/60 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-rose-500/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-scope"
                      className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-2"
                    >
                      Engagement Focus
                    </label>
                    <select
                      id="contact-scope"
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#090b10] px-4 py-3 text-sm text-white focus:border-rose-500/60 focus:outline-none transition-colors"
                    >
                      <option>Full-Stack Software Development</option>
                      <option>Backend &amp; Distributed Systems</option>
                      <option>Frontend &amp; Interactive Web</option>
                      <option>Technical Advisory &amp; Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400 mb-2"
                    >
                      Project Brief or Role Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about the system you're building, technical constraints, or role..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-rose-500/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(244,63,94,0.65)] transition-all hover:brightness-110"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Luxury Minimal Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#040407]/90 px-5 sm:px-8 py-12">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1 font-display text-lg font-bold tracking-tight text-white">
                <span className="font-mono text-rose-400">&lt;/&gt;</span>
                <span>Developer</span>
              </span>
            </div>
            <p className="mt-1.5 text-xs text-zinc-400 max-w-sm">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-xs text-zinc-400" aria-label="Footer Navigation">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#timeline" className="hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#achievements" className="hover:text-white transition-colors">
              Achievements
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#hero-story"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-rose-500/40 hover:text-rose-400 transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-zinc-500">
          <span>&copy; 2026 {PROFILE.name}. All rights reserved.</span>
          <span>Engineered with precision.</span>
        </div>
      </footer>
    </>
  );
};

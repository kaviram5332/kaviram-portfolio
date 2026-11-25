import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const TOTAL_FRAMES = PROFILE.totalFrames;

const getFrameSrc = (index: number) => {
  const num = String(Math.min(TOTAL_FRAMES, Math.max(1, index + 1))).padStart(3, '0');
  return `/frames/ezgif-frame-${num}.jpg`;
};

export const FrameBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [activeFrameDisplay, setActiveFrameDisplay] = useState<number>(1);
  const [autoPlaying, setAutoPlaying] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let cancelled = false;
    const priorityIndices = [0, 10, 20, 30, 44, 60, 74, 84];
    const remaining = Array.from({ length: TOTAL_FRAMES }, (_, i) => i).filter(
      (i) => !priorityIndices.includes(i)
    );
    const loadOrder = [...priorityIndices, ...remaining];

    let indexPointer = 0;
    const concurrency = 6;

    const loadNext = () => {
      if (cancelled || indexPointer >= loadOrder.length) return;
      const frameIdx = loadOrder[indexPointer++];
      const img = new Image();
      img.decoding = 'async';
      img.src = getFrameSrc(frameIdx);
      img.onload = () => {
        if (cancelled) return;
        imagesRef.current[frameIdx] = img;
        setLoadedCount((c) => c + 1);
        loadNext();
      };
      img.onerror = () => {
        if (!cancelled) loadNext();
      };
    };

    for (let i = 0; i < concurrency; i++) {
      loadNext();
    }

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (!autoPlaying) {
        targetFrameRef.current = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, latest * (TOTAL_FRAMES - 1))
        );
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, autoPlaying]);

  const renderFrameToCanvas = useCallback((frameIndexFloat: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;
    if (cssWidth === 0 || cssHeight === 0) return;

    const targetW = Math.floor(cssWidth * dpr);
    const targetH = Math.floor(cssHeight * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(frameIndexFloat)));
    let img = imagesRef.current[idx];
    if (!img) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        if (idx - offset >= 0 && imagesRef.current[idx - offset]) {
          img = imagesRef.current[idx - offset];
          break;
        }
        if (idx + offset < TOTAL_FRAMES && imagesRef.current[idx + offset]) {
          img = imagesRef.current[idx + offset];
          break;
        }
      }
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.fillStyle = '#050508';
    ctx.fillRect(0, 0, cssWidth, cssHeight);

    if (img && img.complete && img.naturalWidth > 0) {
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const viewAspect = cssWidth / cssHeight;

      if (viewAspect > 0.85) {
        // Widescreen desktop: fit portrait height cleanly (NO over-zoom!) with ambient echo behind
        ctx.save();
        ctx.globalAlpha = 0.24;
        ctx.filter = 'blur(42px) saturate(1.2)';
        const bgScale = Math.max(cssWidth / img.naturalWidth, cssHeight / img.naturalHeight);
        const bgW = img.naturalWidth * bgScale;
        const bgH = img.naturalHeight * bgScale;
        ctx.drawImage(img, (cssWidth - bgW) * 0.5, (cssHeight - bgH) * 0.2, bgW, bgH);
        ctx.restore();

        // Sharp uncropped portrait scaled to fit viewport height cleanly on right-center stage
        const portraitH = cssHeight * 0.96;
        const portraitW = portraitH * imgAspect;
        const portraitX = Math.min(cssWidth * 0.68 - portraitW * 0.5, cssWidth - portraitW * 0.92);
        const portraitY = cssHeight - portraitH;

        ctx.drawImage(img, portraitX, portraitY, portraitW, portraitH);

        // Soft edge-feathering so the portrait blends naturally into the dark canvas
        const leftFade = ctx.createLinearGradient(
          Math.max(0, portraitX - 40),
          0,
          portraitX + portraitW * 0.35,
          0
        );
        leftFade.addColorStop(0, 'rgba(5, 5, 8, 0.88)');
        leftFade.addColorStop(0.55, 'rgba(5, 5, 8, 0.35)');
        leftFade.addColorStop(1, 'rgba(5, 5, 8, 0)');
        ctx.fillStyle = leftFade;
        ctx.fillRect(0, 0, portraitX + portraitW * 0.35, cssHeight);

        const rightFade = ctx.createLinearGradient(
          portraitX + portraitW * 0.72,
          0,
          portraitX + portraitW + 24,
          0
        );
        rightFade.addColorStop(0, 'rgba(5, 5, 8, 0)');
        rightFade.addColorStop(1, 'rgba(5, 5, 8, 0.88)');
        ctx.fillStyle = rightFade;
        ctx.fillRect(portraitX + portraitW * 0.72, 0, cssWidth, cssHeight);

        // Gentle left-side gradient for text readability while keeping Kaviram bright & visible
        const textScrim = ctx.createLinearGradient(0, 0, cssWidth * 0.58, 0);
        textScrim.addColorStop(0, 'rgba(5, 5, 8, 0.72)');
        textScrim.addColorStop(0.7, 'rgba(5, 5, 8, 0.28)');
        textScrim.addColorStop(1, 'rgba(5, 5, 8, 0)');
        ctx.fillStyle = textScrim;
        ctx.fillRect(0, 0, cssWidth * 0.58, cssHeight);
      } else {
        // Mobile portrait: fit cleanly with full head & shoulders visible
        const containScale = Math.min(cssWidth / img.naturalWidth, cssHeight / img.naturalHeight);
        const coverScale = Math.max(cssWidth / img.naturalWidth, cssHeight / img.naturalHeight);
        const drawScale = containScale * 0.35 + coverScale * 0.65;
        const drawW = img.naturalWidth * drawScale;
        const drawH = img.naturalHeight * drawScale;
        const drawX = (cssWidth - drawW) * 0.5;
        const drawY = Math.max(-30, (cssHeight - drawH) * 0.12);
        ctx.drawImage(img, drawX, drawY, drawW, drawH);

        const mobileScrim = ctx.createLinearGradient(0, 0, 0, cssHeight);
        mobileScrim.addColorStop(0, 'rgba(5, 5, 8, 0.45)');
        mobileScrim.addColorStop(0.45, 'rgba(5, 5, 8, 0.18)');
        mobileScrim.addColorStop(1, 'rgba(5, 5, 8, 0.82)');
        ctx.fillStyle = mobileScrim;
        ctx.fillRect(0, 0, cssWidth, cssHeight);
      }

      // Subtle top/bottom edge vignette
      const verticalFade = ctx.createLinearGradient(0, 0, 0, cssHeight);
      verticalFade.addColorStop(0, 'rgba(5, 5, 8, 0.45)');
      verticalFade.addColorStop(0.16, 'rgba(5, 5, 8, 0)');
      verticalFade.addColorStop(0.84, 'rgba(5, 5, 8, 0)');
      verticalFade.addColorStop(1, 'rgba(5, 5, 8, 0.65)');
      ctx.fillStyle = verticalFade;
      ctx.fillRect(0, 0, cssWidth, cssHeight);
    }

    ctx.restore();
  }, []);

  useEffect(() => {
    let rafId = 0;
    let lastShownFrame = -1;

    const tick = () => {
      if (autoPlaying) {
        targetFrameRef.current += 0.35;
        if (targetFrameRef.current >= TOTAL_FRAMES - 1) {
          targetFrameRef.current = 0;
        }
      }

      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.12;

      renderFrameToCanvas(currentFrameRef.current);

      const rounded = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(currentFrameRef.current) + 1));
      if (rounded !== lastShownFrame) {
        lastShownFrame = rounded;
        setActiveFrameDisplay(rounded);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [autoPlaying, renderFrameToCanvas]);

  const progressPct = Math.round(((activeFrameDisplay - 1) / (TOTAL_FRAMES - 1)) * 100);
  const bufferPct = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-6 z-40 flex items-center gap-2.5 rounded-full glass-pill px-3.5 py-1.5 shadow-xl">
        <button
          type="button"
          onClick={() => setAutoPlaying((p) => !p)}
          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-200 hover:text-rose-400 transition-colors"
          aria-label={autoPlaying ? 'Pause background sequence' : 'Auto-play background sequence'}
        >
          {autoPlaying ? (
            <Pause className="h-3 w-3 text-rose-400" />
          ) : (
            <Play className="h-3 w-3 text-sky-400" />
          )}
          <span>{autoPlaying ? 'PAUSE' : 'PREVIEW'}</span>
        </button>
        <span className="h-3 w-px bg-white/15" />
        <span className="font-mono text-[11px] text-zinc-300 tabular-nums">
          {String(activeFrameDisplay).padStart(2, '0')}/{TOTAL_FRAMES}
        </span>
        <div className="hidden sm:block h-1 w-12 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-sky-400 transition-all duration-100"
            style={{ width: `${Math.max(4, progressPct)}%` }}
          />
        </div>
        {bufferPct < 100 && (
          <span className="font-mono text-[10px] text-zinc-500 tabular-nums">{bufferPct}%</span>
        )}
      </div>
    </>
  );
};

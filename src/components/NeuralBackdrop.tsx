import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  symbol?: string;
  alpha: number;
  hue: 'rose' | 'cyan' | 'slate';
}

const CODE_GLYPHS = ['0x', '∇', 'λ', '∑', '=>', 'tensor', 'O(1)', '::', 'AI', '⚡'];

export const NeuralBackdrop: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId = 0;

    const mouse = { x: width * 0.5, y: height * 0.4, active: false };

    const count = Math.min(48, Math.max(22, Math.floor((width * height) / 34000)));
    const particles: Particle[] = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      radius: Math.random() * 1.6 + 0.9,
      symbol: i % 5 === 0 ? CODE_GLYPHS[i % CODE_GLYPHS.length] : undefined,
      alpha: Math.random() * 0.45 + 0.18,
      hue: i % 4 === 0 ? 'rose' : i % 3 === 0 ? 'cyan' : 'slate',
    }));

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        // Subtle neural connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 145) {
            const opacity = (1 - dist / 145) * 0.11;
            ctx.strokeStyle =
              p.hue === 'rose'
                ? `rgba(244, 63, 94, ${opacity})`
                : `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Mouse attraction line
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 180) {
            const mAlpha = (1 - mdist / 180) * 0.2;
            ctx.strokeStyle = `rgba(248, 250, 252, ${mAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        if (p.symbol) {
          ctx.font = '500 10px "JetBrains Mono", monospace';
          ctx.fillStyle =
            p.hue === 'rose'
              ? `rgba(251, 113, 133, ${p.alpha * 0.72})`
              : p.hue === 'cyan'
                ? `rgba(125, 211, 252, ${p.alpha * 0.72})`
                : `rgba(148, 163, 184, ${p.alpha * 0.55})`;
          ctx.fillText(p.symbol, p.x, p.y);
        } else {
          ctx.fillStyle =
            p.hue === 'rose'
              ? `rgba(244, 63, 94, ${p.alpha})`
              : p.hue === 'cyan'
                ? `rgba(56, 189, 248, ${p.alpha})`
                : `rgba(226, 232, 240, ${p.alpha * 0.6})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-65"
    />
  );
};

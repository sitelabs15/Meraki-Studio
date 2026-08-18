import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Lock scroll while loading screen is active
    document.body.style.overflow = "hidden";

    if (reduceMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
        onComplete?.();
      }, 600);
      return () => clearTimeout(timer);
    }

    // Smooth counter progress animation
    const startTime = performance.now();
    const duration = 2400; // 2.4 seconds total animation duration

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
          onComplete?.();
        }, 400);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = "";
    };
  }, [onComplete, reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background grain select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Cargando Meraki Studio"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,240,234,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* Main Animated SVG Logo Container */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            <svg
              viewBox="0 0 460 170"
              className="w-[280px] sm:w-[380px] md:w-[440px] h-auto text-ivory drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Calligraphy Script: MERAKI */}
              <g strokeWidth="2.2" opacity="0.95">
                {/* 'M' - Initial flourishing calligraphy stroke */}
                <motion.path
                  d="M 45 92 C 35 48, 62 32, 75 52 C 84 66, 78 102, 92 98 C 102 94, 114 54, 126 54 C 134 54, 128 98, 144 98"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                />

                {/* 'e' - Cursive loop */}
                <motion.path
                  d="M 144 98 C 152 98, 166 80, 158 70 C 148 60, 142 82, 160 96 C 166 98, 172 98, 175 98"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1], delay: 0.75 }}
                />

                {/* 'r' - Upward arch and down curve */}
                <motion.path
                  d="M 175 98 C 180 86, 186 72, 194 72 C 200 72, 204 80, 210 98"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 1.05 }}
                />

                {/* 'a' - Counter oval loop and right tail stem */}
                <motion.path
                  d="M 234 78 C 220 70, 210 82, 214 92 C 220 102, 234 94, 234 78 C 234 66, 234 98, 246 98"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 1.3 }}
                />

                {/* 'k' - Tall ascender loop and center leg flourish */}
                <motion.path
                  d="M 246 98 C 255 68, 266 32, 272 32 C 278 32, 262 98, 272 98 C 278 84, 286 74, 278 86 C 276 92, 286 98, 296 98"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 1.65 }}
                />

                {/* 'i' - Stem and sweeping flourish tail */}
                <motion.path
                  d="M 296 98 C 302 82, 308 72, 308 98 C 308 98, 318 106, 355 106 C 385 106, 410 95, 425 85"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 2.05 }}
                />

                {/* Dot for 'i' */}
                <motion.circle
                  cx="309"
                  cy="58"
                  r="2.5"
                  fill="currentColor"
                  stroke="none"
                  initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 2.4 }}
                />
              </g>

              {/* Subtitle Line & Lettering: STUDIO */}
              <g strokeWidth="1.2" opacity="0.8">
                {/* Hairline Underline accent */}
                <motion.path
                  d="M 90 126 L 370 126"
                  strokeWidth="0.75"
                  strokeDasharray="4 4"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
                />

                {/* 'S' */}
                <motion.path
                  d="M 152 140 C 146 137, 146 142, 152 144 C 158 146, 158 151, 152 154 C 146 156, 144 153, 144 150"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2, delay: 1.5 }}
                />

                {/* 'T' */}
                <motion.path
                  d="M 174 138 L 194 138 M 184 138 L 184 154"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2, delay: 1.6 }}
                />

                {/* 'U' */}
                <motion.path
                  d="M 212 138 L 212 148 C 212 154, 226 154, 226 148 L 226 138"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2, delay: 1.7 }}
                />

                {/* 'D' */}
                <motion.path
                  d="M 246 138 L 246 154 M 246 138 C 262 138, 262 154, 246 154"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2, delay: 1.8 }}
                />

                {/* 'I' */}
                <motion.path
                  d="M 280 138 L 280 154"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.15, delay: 1.9 }}
                />

                {/* 'O' */}
                <motion.path
                  d="M 302 146 C 302 138, 318 138, 318 146 C 318 154, 302 154, 302 146 Z"
                  initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2, delay: 2.0 }}
                />
              </g>
            </svg>

            {/* Editorial Status & Percentage Counter */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-border" />
                <span className="font-sans text-[0.68rem] tracking-[0.3em] uppercase text-ash">
                  Estudio de Tatuajes • Puebla
                </span>
                <span className="h-[1px] w-6 bg-border" />
              </div>

              <div className="mt-1 flex items-baseline gap-1 font-display text-2xl font-light text-ivory tracking-widest">
                <span>{String(progress).padStart(2, "0")}</span>
                <span className="text-xs text-ash">%</span>
              </div>
            </div>

            {/* Hairline Progress Bar */}
            <div className="mt-4 h-[1px] w-48 sm:w-64 bg-border/40 overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-ivory"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

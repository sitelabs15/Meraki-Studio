import { motion, useReducedMotion } from "motion/react";

interface FloralProps {
  className?: string;
}

/**
 * Botanical Fine-Line Floral Vine for Left Hero / Section Background
 */
export function FloralVineLeft({ className = "" }: FloralProps) {
  const reduce = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none text-ivory select-none ${className}`}
    >
      <motion.g
        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        {/* Main curved vine stem */}
        <path d="M 30 390 C 80 300, 40 200, 140 100 C 180 60, 190 20, 160 10" />

        {/* Blossom 1 (Top) */}
        <g opacity="0.9">
          <circle cx="160" cy="25" r="8" strokeWidth="0.5" />
          <path d="M 160 17 Q 150 5 160 0 Q 170 5 160 17 Z" strokeWidth="0.6" />
          <path d="M 168 25 Q 180 25 185 20 Q 180 30 168 25 Z" strokeWidth="0.6" />
          <path d="M 160 33 Q 160 45 165 48 Q 155 45 160 33 Z" strokeWidth="0.6" />
          <path d="M 152 25 Q 140 25 135 20 Q 140 30 152 25 Z" strokeWidth="0.6" />
        </g>

        {/* Leaves along upper stem */}
        <path d="M 140 100 C 120 70, 90 80, 105 105 C 120 130, 140 100, 140 100 Z" strokeWidth="0.6" fill="rgba(242,240,234,0.03)" />
        <path d="M 115 90 Q 130 98 140 100" strokeWidth="0.4" />

        <path d="M 125 125 C 155 125, 170 145, 150 160 C 130 175, 125 125, 125 125 Z" strokeWidth="0.6" fill="rgba(242,240,234,0.03)" />
        <path d="M 135 140 Q 145 135 125 125" strokeWidth="0.4" />

        {/* Middle Rose / Peony Blossom */}
        <g transform="translate(75, 185)" opacity="0.95">
          {/* Inner petals */}
          <path d="M 0 0 C -12 -15, 12 -15, 0 0 Z" fill="rgba(242,240,234,0.05)" />
          <path d="M 0 0 C -20 -8, -15 20, 0 0 Z" />
          <path d="M 0 0 C 20 -8, 15 20, 0 0 Z" />
          <path d="M -15 5 C -30 -10, -25 -30, 0 -22 C 25 -30, 30 -10, 15 5 C 25 25, -25 25, -15 5 Z" strokeWidth="0.6" />
          <circle cx="0" cy="-6" r="3" strokeWidth="0.4" />
          <path d="M -3 -6 Q 0 -12 3 -6" strokeWidth="0.4" />
        </g>

        {/* Lower leaves */}
        <path d="M 50 260 C 10 240, 0 280, 35 295 C 70 310, 50 260, 50 260 Z" strokeWidth="0.6" fill="rgba(242,240,234,0.03)" />
        <path d="M 25 270 Q 40 275 50 260" strokeWidth="0.4" />

        <path d="M 70 320 C 110 320, 120 360, 85 365 C 50 370, 70 320, 70 320 Z" strokeWidth="0.6" fill="rgba(242,240,234,0.03)" />

        {/* Fine detail tendrils */}
        <path d="M 140 100 Q 180 120 190 90" strokeWidth="0.4" strokeDasharray="2 3" />
        <circle cx="190" cy="90" r="1.5" fill="currentColor" />

        <path d="M 75 185 Q 120 210 135 195" strokeWidth="0.4" strokeDasharray="2 3" />
        <circle cx="135" cy="195" r="1.5" fill="currentColor" />
      </motion.g>
    </svg>
  );
}

/**
 * Fine-Line Botanical Rose & Petals for Right Hero / Section Background
 */
export function FloralRoseRight({ className = "" }: FloralProps) {
  const reduce = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 420"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none text-ivory select-none ${className}`}
    >
      <motion.g
        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
      >
        {/* Main stem curving left to right */}
        <path d="M 200 10 C 140 100, 180 220, 80 320 C 40 360, 20 400, 30 410" />

        {/* Large Botanical Blossom Top-Right */}
        <g transform="translate(180, 70)">
          <circle cx="0" cy="0" r="18" strokeWidth="0.5" strokeDasharray="4 2" />
          <path d="M 0 -22 C -15 -35, 15 -35, 0 -22 Z" strokeWidth="0.6" />
          <path d="M 22 0 C 35 -15, 35 15, 22 0 Z" strokeWidth="0.6" />
          <path d="M 0 22 C 15 35, -15 35, 0 22 Z" strokeWidth="0.6" />
          <path d="M -22 0 C -35 15, -35 -15, -22 0 Z" strokeWidth="0.6" />

          {/* Diagonals */}
          <path d="M 15 -15 C 30 -25, 25 -30, 15 -15 Z" strokeWidth="0.5" />
          <path d="M 15 15 C 30 25, 25 30, 15 15 Z" strokeWidth="0.5" />
          <path d="M -15 15 C -30 25, -25 30, -15 15 Z" strokeWidth="0.5" />
          <path d="M -15 -15 C -30 -25, -25 -30, -15 -15 Z" strokeWidth="0.5" />

          <circle cx="0" cy="0" r="6" strokeWidth="0.4" fill="rgba(242,240,234,0.08)" />
        </g>

        {/* Botanical Leaves */}
        <path d="M 165 140 C 205 130, 220 170, 175 180 C 130 190, 165 140, 165 140 Z" strokeWidth="0.6" fill="rgba(242,240,234,0.03)" />
        <path d="M 185 155 Q 170 170 165 140" strokeWidth="0.4" />

        <path d="M 140 210 C 90 190, 80 230, 125 245 C 170 260, 140 210, 140 210 Z" strokeWidth="0.6" fill="rgba(242,240,234,0.03)" />
        <path d="M 110 220 Q 130 230 140 210" strokeWidth="0.4" />

        {/* Secondary bud */}
        <g transform="translate(80, 320)">
          <path d="M 0 0 Q -25 -20 -15 -45 Q 10 -35 0 0 Z" strokeWidth="0.6" fill="rgba(242,240,234,0.04)" />
          <path d="M -5 -40 Q 5 -55 15 -40" strokeWidth="0.5" />
        </g>

        {/* Floating petals */}
        <g opacity="0.75">
          <path d="M 50 120 C 40 110, 45 95, 60 100 C 75 105, 60 130, 50 120 Z" strokeWidth="0.5" />
          <path d="M 90 60 C 85 50, 95 40, 105 48 C 115 56, 100 70, 90 60 Z" strokeWidth="0.5" />
          <path d="M 30 250 C 20 245, 25 235, 35 240 C 45 245, 40 258, 30 250 Z" strokeWidth="0.4" />
        </g>

        {/* Dotted alignment arc */}
        <path d="M 180 70 A 110 110 0 0 1 80 320" strokeWidth="0.4" strokeDasharray="3 4" />
      </motion.g>
    </svg>
  );
}

/**
 * Botanical Flower Branch overlay for About / Services sections
 */
export function FloralBranchOverlay({ className = "" }: FloralProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none text-ivory select-none ${className}`}
    >
      {/* Central Fine Line Rose / Botanical Petals */}
      <g transform="translate(150, 150)">
        {/* Outer subtle guide circle */}
        <circle cx="0" cy="0" r="110" strokeWidth="0.35" strokeDasharray="3 5" />
        <circle cx="0" cy="0" r="85" strokeWidth="0.35" />

        {/* Symmetrical flower petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <path
              d="M 0 -85 C -25 -50, -15 -20, 0 0 C 15 -20, 25 -50, 0 -85 Z"
              strokeWidth="0.5"
              fill="rgba(242,240,234,0.02)"
            />
            <path d="M 0 -85 Q 0 -42 0 0" strokeWidth="0.3" strokeDasharray="2 2" />
            <circle cx="0" cy="-60" r="1.5" fill="currentColor" opacity="0.6" />
          </g>
        ))}

        {/* Inner Core */}
        <circle cx="0" cy="0" r="28" strokeWidth="0.5" fill="rgba(242,240,234,0.04)" />
        <circle cx="0" cy="0" r="14" strokeWidth="0.4" />
        <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.8" />
      </g>
    </svg>
  );
}

/**
 * Animated Fine-Line Rose SVG that continuously draws and undraws itself in an organic loop
 */
export function AnimatedFlowerDrawing({ className = "" }: FloralProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 200 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`select-none ${className}`}
      >
        <path d="M 100 230 C 95 180, 110 140, 100 90" opacity="0.9" />
        <path d="M 104 170 C 135 160, 145 185, 120 195 C 105 200, 104 170, 104 170 Z" fill="rgba(242,240,234,0.03)" opacity="0.85" />
        <path d="M 98 140 C 65 130, 55 155, 80 165 C 95 170, 98 140, 98 140 Z" fill="rgba(242,240,234,0.03)" opacity="0.85" />
        <path d="M 100 90 C 70 85, 55 60, 75 40 C 90 25, 110 25, 125 40 C 145 60, 130 85, 100 90 Z" strokeWidth="1.1" />
        <path d="M 100 82 C 82 78, 70 58, 85 45 C 95 35, 105 35, 115 45 C 130 58, 118 78, 100 82 Z" strokeWidth="0.95" opacity="0.95" />
        <path d="M 100 70 C 92 68, 88 56, 96 48 C 102 42, 108 46, 104 54 C 100 60, 96 56, 98 52" strokeWidth="0.85" opacity="0.9" />
        <path d="M 125 40 C 150 25, 165 40, 155 55" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.75" />
        <path d="M 75 40 C 50 25, 35 40, 45 55" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.75" />
      </svg>
    );
  }

  const loopDuration = 6.5;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 240"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`select-none ${className}`}
    >
      <g>
        {/* Curved stem */}
        <motion.path
          d="M 100 230 C 95 180, 110 140, 100 90"
          animate={{
            pathLength: [0, 1, 1, 0, 0],
            opacity: [0, 0.9, 0.9, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.32, 0.62, 0.92, 1],
          }}
        />

        {/* Stem leaves right */}
        <motion.path
          d="M 104 170 C 135 160, 145 185, 120 195 C 105 200, 104 170, 104 170 Z"
          fill="rgba(242,240,234,0.03)"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.85, 0.85, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.08, 0.36, 0.6, 0.88, 1],
          }}
        />

        {/* Stem leaves left */}
        <motion.path
          d="M 98 140 C 65 130, 55 155, 80 165 C 95 170, 98 140, 98 140 Z"
          fill="rgba(242,240,234,0.03)"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.85, 0.85, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.12, 0.4, 0.58, 0.84, 1],
          }}
        />

        {/* Outer Rose Petals Layer 1 */}
        <motion.path
          d="M 100 90 C 70 85, 55 60, 75 40 C 90 25, 110 25, 125 40 C 145 60, 130 85, 100 90 Z"
          strokeWidth="1.1"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 1, 1, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.16, 0.44, 0.56, 0.8, 1],
          }}
        />

        {/* Inner Rose Petals Layer 2 */}
        <motion.path
          d="M 100 82 C 82 78, 70 58, 85 45 C 95 35, 105 35, 115 45 C 130 58, 118 78, 100 82 Z"
          strokeWidth="0.95"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.95, 0.95, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.48, 0.54, 0.76, 1],
          }}
        />

        {/* Rose Heart Spiral */}
        <motion.path
          d="M 100 70 C 92 68, 88 56, 96 48 C 102 42, 108 46, 104 54 C 100 60, 96 56, 98 52"
          strokeWidth="0.85"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.9, 0.9, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.24, 0.52, 0.52, 0.72, 1],
          }}
        />

        {/* Fine detail tendril right */}
        <motion.path
          d="M 125 40 C 150 25, 165 40, 155 55"
          strokeWidth="0.75"
          strokeDasharray="2 3"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.75, 0.75, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.28, 0.54, 0.54, 0.68, 1],
          }}
        />

        {/* Fine detail tendril left */}
        <motion.path
          d="M 75 40 C 50 25, 35 40, 45 55"
          strokeWidth="0.75"
          strokeDasharray="2 3"
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.75, 0.75, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.28, 0.54, 0.54, 0.68, 1],
          }}
        />

        {/* Small detail dots */}
        <motion.circle
          cx="155"
          cy="55"
          r="2"
          fill="currentColor"
          animate={{
            scale: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.9, 0.9, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.32, 0.54, 0.54, 0.65, 1],
          }}
        />
        <motion.circle
          cx="45"
          cy="55"
          r="2"
          fill="currentColor"
          animate={{
            scale: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 0.9, 0.9, 0, 0],
          }}
          transition={{
            duration: loopDuration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.32, 0.54, 0.54, 0.65, 1],
          }}
        />
      </g>
    </svg>
  );
}

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useFinePointer } from "@/hooks/useSiteUx";

export function CustomCursor() {
  const fine = useFinePointer();
  const [ready, setReady] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "view" | "hidden">("default");
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Outer ring spring: ultra smooth and responsive
  const ringX = useSpring(mouseX, { stiffness: 450, damping: 36, mass: 0.35 });
  const ringY = useSpring(mouseY, { stiffness: 450, damping: 36, mass: 0.35 });

  // Inner dot spring: fast lock-on
  const dotX = useSpring(mouseX, { stiffness: 850, damping: 45, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 850, damping: 45, mass: 0.1 });

  useEffect(() => {
    if (!fine) return;
    setReady(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const el = e.target as HTMLElement | null;
      if (!el) return;

      if (el.closest("input, textarea, select, [data-cursor='native']")) {
        setVariant("hidden");
      } else if (el.closest("[data-cursor='view']")) {
        setVariant("view");
      } else if (el.closest("a, button, [role='button'], [role='switch'], label")) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [fine, mouseX, mouseY]);

  useEffect(() => {
    if (!ready) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setReady(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ready]);

  if (!fine || !ready) return null;

  const ringSize = variant === "view" ? 54 : variant === "hover" ? 44 : 26;
  const ringOpacity = variant === "hidden" ? 0 : variant === "hover" ? 0.75 : 0.45;
  const dotScale = variant === "hover" ? 1.5 : variant === "view" ? 0 : 1;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9990] hidden lg:block overflow-hidden">
      {/* Outer subtle ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0 will-change-transform"
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            opacity: ringOpacity,
            borderColor: variant === "view" ? "rgba(212, 175, 55, 0.7)" : "rgba(245, 243, 237, 0.4)",
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/40 mix-blend-difference"
        />
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute left-0 top-0 will-change-transform"
      >
        <motion.span
          animate={{
            scale: dotScale,
            opacity: variant === "hidden" ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="block size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory mix-blend-difference"
        />
      </motion.div>
    </div>
  );
}

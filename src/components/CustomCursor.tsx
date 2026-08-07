import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useFinePointer } from "@/hooks/useSiteUx";

/**
 * Cursor personalizado: solo en punteros finos con hover y sin reduced-motion.
 * El cursor nativo se oculta únicamente cuando el personalizado ya está activo.
 */
export function CustomCursor() {
  const fine = useFinePointer();
  const [ready, setReady] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "view" | "drag" | "hidden">("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!fine) return;
    setReady(true);
    document.documentElement.style.cursor = "none";

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest("input, textarea, select, [data-cursor='native']")) setVariant("hidden");
      else if (el.closest("[data-cursor='drag']")) setVariant("drag");
      else if (el.closest("[data-cursor='view']")) setVariant("view");
      else if (el.closest("a, button, [role='button']")) setVariant("link");
      else setVariant("default");
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, [fine, x, y]);

  useEffect(() => {
    if (!ready) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.documentElement.style.cursor = "";
        setReady(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ready]);

  if (!fine || !ready) return null;

  const size = variant === "view" || variant === "drag" ? 74 : variant === "link" ? 46 : 30;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute left-0 top-0"
      >
        <motion.div
          animate={{ width: size, height: size, opacity: variant === "hidden" ? 0 : 1 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 mix-blend-difference"
        >
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-ivory">
            {variant === "view" ? "Ver" : variant === "drag" ? "Arrastra" : ""}
          </span>
        </motion.div>
        <motion.span
          animate={{ opacity: variant === "hidden" || variant === "view" || variant === "drag" ? 0 : 1 }}
          className="absolute left-0 top-0 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory mix-blend-difference"
        />
      </motion.div>
    </div>
  );
}

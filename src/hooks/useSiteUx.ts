import { useEffect, useRef, useState } from "react";

type LenisGlobal = {
  scrollTo: (target: HTMLElement | string, options?: { duration?: number; offset?: number }) => void;
  raf: (t: number) => void;
  destroy: () => void;
};

/** Scroll suave con Lenis, desactivado con prefers-reduced-motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: LenisGlobal | null = null;
    let frame = 0;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 0.9, smoothWheel: true });
      lenis = instance as unknown as LenisGlobal;
      (window as unknown as { __lenis?: LenisGlobal }).__lenis = lenis;

      const raf = (time: number) => {
        instance.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
      delete (window as unknown as { __lenis?: LenisGlobal }).__lenis;
    };
  }, []);
}

/** true cuando el puntero es fino y con hover (escritorio) y sin reduced-motion. */
export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setFine(mq.matches && !rm.matches);
    update();
    mq.addEventListener("change", update);
    rm.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      rm.removeEventListener("change", update);
    };
  }, []);
  return fine;
}

/** Bloquea el scroll del body. */
export function useBodyScrollLock(locked: boolean) {
  const previous = useRef<string>("");
  useEffect(() => {
    if (!locked) return;
    previous.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous.current;
    };
  }, [locked]);
}

/** Desplaza rápidamente y de forma muy fluida hacia la sección requerida. */
export function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) {
    el.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  const lenisInstance = (window as unknown as { __lenis?: LenisGlobal }).__lenis;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { duration: 0.75, offset: -20 });
  } else {
    const targetY = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  if (window.history.replaceState) window.history.replaceState(null, "", hash);
}

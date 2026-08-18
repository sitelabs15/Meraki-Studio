import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { Project } from "@/data/siteContent";
import { useBodyScrollLock } from "@/hooks/useSiteUx";

export function PortfolioLightbox({
  projects,
  index,
  onIndexChange,
  onClose,
}: {
  projects: Project[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  useBodyScrollLock(true);

  const project = projects[index];
  const next = () => onIndexChange((index + 1) % projects.length);
  const prev = () => onIndexChange((index - 1 + projects.length) % projects.length);

  useEffect(() => {
    const node = dialog.current;
    const focusables = () =>
      Array.from(node?.querySelectorAll<HTMLElement>("button:not([disabled])") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0]!;
        const last = items[items.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, next, prev]);

  if (!project) return null;

  return (
    <motion.div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label={`Proyecto ${project.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.26 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
      className="fixed inset-0 z-[200] flex flex-col bg-surface-deep/97 backdrop-blur-md"
    >
      <div className="shell flex h-[72px] shrink-0 items-center justify-between">
        <span className="label-xs">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Cerrar galería"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:bg-surface hover:text-white cursor-pointer"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center px-5 pb-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.img
          key={project.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          src={project.image}
          alt={project.alt}
          width={project.width}
          height={project.height}
          className="max-h-full max-w-full rounded-sm object-contain shadow-2xl"
        />
      </div>

      <div className="shell shrink-0 border-t border-border py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="label-xs">
              {project.category} · {project.area}
            </p>
            <h3 className="mt-2 font-display text-2xl font-light text-ivory">{project.title}</h3>
            {project.description && (
              <p className="mt-2 max-w-xl text-sm text-ivory-dim/75">{project.description}</p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Proyecto anterior"
              className="inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:bg-surface cursor-pointer"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Proyecto siguiente"
              className="inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:bg-surface cursor-pointer"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

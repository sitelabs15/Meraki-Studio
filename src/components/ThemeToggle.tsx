import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Cambiar a tema oscuro" : "Cambiar a tema claro (edición pergamino)"}
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex min-h-10 min-w-10 items-center justify-center gap-2 rounded-full border border-border bg-surface/40 p-2 text-ivory transition-all duration-300 hover:border-ivory hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ivory/50 cursor-pointer select-none",
        className
      )}
    >
      <div className="relative size-4 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isLight ? (
            <motion.span
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center justify-center text-ivory"
            >
              <Sun className="size-4 stroke-[1.75]" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center justify-center text-ivory"
            >
              <Moon className="size-4 stroke-[1.75]" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ivory-dim">
          {isLight ? "Modo Claro" : "Modo Oscuro"}
        </span>
      )}
    </button>
  );
}

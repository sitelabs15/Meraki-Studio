import * as React from "react";
import { cn } from "@/lib/utils";

// -------------------------------------------------------------------------
// ESTILOS (solo lo necesario para este botón: pill de vidrio + latido)
// -------------------------------------------------------------------------
const STYLES = `
.made-with-badge-wrapper {
  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);
}

@keyframes badge-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-badge-heartbeat {
  animation: badge-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.made-with-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
`;

// -------------------------------------------------------------------------
// COMPONENTE
// -------------------------------------------------------------------------
export type MadeWithLoveBadgeProps = {
  name?: string;
  href?: string;
  className?: string;
};

export function MadeWithLoveBadge({
  name = "SiteLabs",
  href = "https://sitelabs.com.mx",
  className,
}: MadeWithLoveBadgeProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "made-with-badge-wrapper made-with-glass-pill px-6 py-3 rounded-full flex items-center gap-2 border-border/50 no-underline transition-transform duration-300 hover:scale-105",
          className
        )}
      >
        <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Hecho con
        </span>
        <span className="animate-badge-heartbeat text-sm md:text-base text-destructive">
          ❤️
        </span>
        <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
          por
        </span>
        <span className="text-foreground font-black text-xs md:text-sm tracking-normal ml-1">
          {name}
        </span>
      </a>
    </>
  );
}

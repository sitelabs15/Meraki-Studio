import { useEffect, useState } from "react";
import { CalendarDays, Menu } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { nav } from "@/data/siteContent";
import { scrollToHash, useFinePointer } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const fine = useFinePointer();
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const navHrefs = nav.map((n) => n.href);

    const checkActive = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentActive = "#inicio";

      for (const href of navHrefs) {
        const targetId = href.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top - 60) {
            currentActive = href;
          }
        }
      }
      setActive(currentActive);
    };

    window.addEventListener("scroll", checkActive, { passive: true });
    checkActive();
    return () => window.removeEventListener("scroll", checkActive);
  }, []);

  const go = (href: string) => {
    setActive(href);
    scrollToHash(href);
    setOpen(false);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-3 lg:top-4 z-[100] flex justify-center px-4 transition-all duration-500"
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        <div
          className={cn(
            "flex h-[62px] w-full max-w-5xl items-center justify-between gap-4 rounded-full px-5 lg:h-[70px] lg:px-8 transition-all duration-500",
            scrolled
              ? "border border-border/80 bg-surface-elevated/90 backdrop-blur-xl shadow-2xl shadow-black/20"
              : "border border-border/40 bg-background/70 backdrop-blur-md",
          )}
        >
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              go("#inicio");
            }}
            className="shrink-0"
            aria-label="Meraki Studio, ir al inicio"
          >
            <Logo small />
          </a>

          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active === item.href ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    className={cn(
                      "relative py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-200",
                      active === item.href ? "text-ivory font-semibold" : "text-ash hover:text-ivory",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-[2px] bg-ivory rounded-full transition-all duration-300 ease-out",
                        active === item.href ? "w-full opacity-100" : "w-0 opacity-0",
                      )}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <motion.a
              href="#reservar"
              onClick={(e) => {
                e.preventDefault();
                track("hero_booking_click", { source: "header" });
                go("#reservar");
              }}
              onMouseMove={(e) => {
                if (!fine) return;
                const r = e.currentTarget.getBoundingClientRect();
                setMagnet({ x: (e.clientX - (r.left + r.width / 2)) * 0.18, y: (e.clientY - (r.top + r.height / 2)) * 0.3 });
              }}
              onMouseLeave={() => setMagnet({ x: 0, y: 0 })}
              animate={fine ? magnet : { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="hidden min-h-10 items-center gap-2 rounded-full border border-border px-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-primary hover:text-primary-foreground sm:inline-flex cursor-pointer"
            >
              <CalendarDays className="size-3.5" aria-hidden="true" />
              Reservar
            </motion.a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-border text-ivory lg:hidden cursor-pointer"
            >
              <Menu className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} onNavigate={go} active={active} />
    </>
  );
}

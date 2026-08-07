import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Instagram, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { contact, nav } from "@/data/siteContent";
import { useBodyScrollLock } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";

export function MobileMenu({
  open,
  onClose,
  onNavigate,
  active,
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  active: string;
}) {
  const panel = useRef<HTMLDivElement>(null);
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const node = panel.current;
    const focusables = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
      );
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
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
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          ref={panel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="fixed inset-0 z-[60] grain bg-surface-deep lg:hidden"
        >
          <div className="shell flex h-[72px] items-center justify-between">
            <Logo small />
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-ivory"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Navegación móvil" className="shell mt-6">
            <ul>
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-border"
                >
                  <a
                    href={item.href}
                    aria-current={active === item.href ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    className="block py-5 font-display text-4xl font-light text-ivory"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + nav.length * 0.06, duration: 0.4 }}
                className="border-y border-border"
              >
                <a
                  href="#reservar"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("#reservar");
                  }}
                  className="block py-5 font-display text-4xl font-light text-ivory"
                >
                  Reservar
                </a>
              </motion.li>
            </ul>
          </nav>

          <div className="shell mt-10 space-y-4">
            <a
              href={contact.phoneHref}
              onClick={() => track("phone_click", { source: "mobile_menu" })}
              className="flex min-h-11 items-center gap-3 text-sm text-ivory-dim"
            >
              <Phone className="size-4" aria-hidden="true" />
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("instagram_click", { source: "mobile_menu" })}
              className="flex min-h-11 items-center gap-3 text-sm text-ivory-dim"
            >
              <Instagram className="size-4" aria-hidden="true" />
              {contact.instagramHandle}
            </a>
            <a
              href={contact.whatsappQuick}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { source: "mobile_menu" })}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

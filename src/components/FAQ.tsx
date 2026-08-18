import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { track } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = listRef.current?.querySelectorAll<HTMLElement>(".faq-item");
      if (!items) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      });

      items.forEach((item) => {
        const divider = item.querySelector<HTMLElement>(".faq-divider");
        const btn = item.querySelector<HTMLElement>("button");

        if (divider) {
          gsap.set(divider, { scaleX: 0, transformOrigin: "left" });
          tl.to(divider, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.45");
        }

        if (btn) {
          gsap.set(btn, { y: 12, opacity: 0 });
          tl.to(btn, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.4");
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="dudas"
      ref={sectionRef}
      data-scroll-section="faq"
      className="border-t border-border bg-background py-20 lg:py-32"
    >
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading label={faq.label} title={faq.title} />

        <ul ref={listRef} className="relative">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <li key={item.q} className="faq-item relative border-b border-border/40">
                <div className="faq-divider absolute top-0 inset-x-0 h-px bg-border will-change-transform" />
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      setOpen(isOpen ? null : i);
                      if (!isOpen) track("faq_open", { question: item.q });
                    }}
                    className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 py-6 text-left hover:text-ivory transition-colors cursor-pointer group will-change-transform"
                  >
                    <span className="label-xs pt-1 text-ash/80">{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 text-base font-medium text-ivory/95 transition-colors group-hover:text-ivory sm:text-lg">
                      {item.q}
                    </span>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-ivory transition-colors group-hover:border-ivory">
                      {isOpen ? <Minus className="size-3.5" aria-hidden="true" /> : <Plus className="size-3.5" aria-hidden="true" />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pl-9 text-sm leading-relaxed text-ivory-dim/85 sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

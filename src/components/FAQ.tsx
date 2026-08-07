import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { track } from "@/lib/analytics";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="dudas" className="border-t border-border bg-background py-20 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading label={faq.label} title={faq.title} />

        <ul>
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <li key={item.q} className="border-t border-border last:border-b">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      setOpen(isOpen ? null : i);
                      if (!isOpen) track("faq_open", { question: item.q });
                    }}
                    className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 py-6 text-left"
                  >
                    <span className="label-xs pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 text-base font-medium text-ivory sm:text-lg">{item.q}</span>
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-ivory">
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
                      <p className="max-w-2xl pb-7 pl-10 text-sm leading-relaxed text-ivory-dim/80 sm:text-base">
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

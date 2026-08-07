import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { services } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";
import { FloralVineLeft } from "@/components/FloralAccents";

export function Services() {
  const [open, setOpen] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className="relative overflow-hidden border-t border-border bg-background py-20 lg:py-32">
      <FloralVineLeft className="absolute -left-10 top-1/4 h-[500px] w-[260px] opacity-15 lg:left-[1%] lg:opacity-20" />
      <div className="shell relative z-10">
        <SectionHeading label={services.label} title={services.title} />

        <ul className="mt-14">
          {services.items.map((service) => {
            const isOpen = open === service.number;
            return (
              <li key={service.number} className="border-t border-border last:border-b">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpen(isOpen ? null : service.number);
                    if (!isOpen) track("service_click", { service: service.title });
                  }}
                  className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-7 text-left transition-colors duration-300 hover:bg-surface/60 lg:gap-8 lg:px-4"
                >
                  <span className="label-xs shrink-0">{service.number}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-2xl font-light leading-tight text-ivory transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl lg:text-4xl">
                      {service.title}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <img
                      src={service.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="hidden h-14 w-20 rounded-sm object-cover opacity-0 grayscale transition-opacity duration-300 group-hover:opacity-70 lg:block"
                    />
                    <span className="inline-flex size-9 items-center justify-center rounded-full border border-border text-ivory">
                      {isOpen ? (
                        <Minus className="size-3.5" aria-hidden="true" />
                      ) : (
                        <Plus className="size-3.5" aria-hidden="true" />
                      )}
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-9 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12 lg:px-4">
                        <p className="max-w-2xl text-base leading-relaxed text-ivory-dim/80">
                          {service.description}
                        </p>
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="h-40 w-full rounded-sm object-cover grayscale lg:h-32"
                        />
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-ash">{services.note}</p>
          <a
            href="#reservar"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#reservar");
            }}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-7 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            {services.cta}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

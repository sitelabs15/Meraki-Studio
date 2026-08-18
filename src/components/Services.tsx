import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { services } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";
import { FloralVineLeft } from "@/components/FloralAccents";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const [open, setOpen] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = listRef.current?.querySelectorAll<HTMLElement>(".service-item");
      if (!items) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none none",
        },
      });

      items.forEach((item) => {
        const divider = item.querySelector<HTMLElement>(".service-divider");
        const num = item.querySelector<HTMLElement>(".service-num");
        const title = item.querySelector<HTMLElement>(".service-title");

        if (divider) {
          gsap.set(divider, { scaleX: 0, transformOrigin: "left" });
          tl.to(divider, { scaleX: 1, duration: 0.7, ease: "power2.inOut" }, "-=0.4");
        }

        if (num && title) {
          gsap.set([num, title], { y: 15, opacity: 0 });
          tl.to([num, title], { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }, "-=0.5");
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      data-scroll-section="services"
      className="relative overflow-hidden border-t border-border bg-background py-20 lg:py-32"
    >
      <FloralVineLeft className="absolute -left-10 top-1/4 h-[500px] w-[260px] opacity-15 lg:left-[1%] lg:opacity-20 pointer-events-none" />
      <div className="shell relative z-10">
        <SectionHeading label={services.label} title={services.title} />

        <ul ref={listRef} className="mt-14">
          {services.items.map((service) => {
            const isOpen = open === service.number;
            return (
              <li key={service.number} className="service-item relative last:border-b border-border">
                <div className="service-divider absolute top-0 inset-x-0 h-px bg-border will-change-transform" />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpen(isOpen ? null : service.number);
                    if (!isOpen) track("service_click", { service: service.title });
                  }}
                  className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-7 text-left transition-colors duration-300 hover:bg-surface/50 lg:gap-8 lg:px-4 cursor-pointer"
                >
                  <span className="service-num label-xs shrink-0 text-ash/80 will-change-transform">{service.number}</span>
                  <span className="min-w-0">
                    <span className="service-title block font-display text-2xl font-light leading-tight text-ivory transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl lg:text-4xl will-change-transform">
                      {service.title}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <img
                      src={service.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="hidden h-14 w-20 rounded-sm object-cover opacity-0 grayscale transition-opacity duration-300 group-hover:opacity-70 lg:block shadow-md"
                    />
                    <span className="inline-flex size-9 items-center justify-center rounded-full border border-border text-ivory transition-colors group-hover:border-ivory">
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
                        <p className="max-w-2xl text-base leading-relaxed text-ivory-dim/85">
                          {service.description}
                        </p>
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="h-40 w-full rounded-sm object-cover grayscale contrast-[1.05] lg:h-32 shadow-xl border border-border/60"
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
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-surface/40 px-7 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] shadow-lg cursor-pointer"
          >
            {services.cta}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

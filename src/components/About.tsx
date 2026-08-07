import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { about } from "@/data/siteContent";
import { scrollToHash } from "@/hooks/useSiteUx";

import { FloralBranchOverlay, FloralRoseRight } from "@/components/FloralAccents";
import darkRosesBg from "@/assets/dark-roses.png";

export function About() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 26, reduce ? 0 : -26]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -18, reduce ? 0 : 34]);

  return (
    <section id="estudio" ref={ref} className="grain relative overflow-hidden border-t border-border bg-surface-deep py-20 lg:py-32">
      {/* Fondo fotográfico floral en tono oscuro */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-45">
        <img
          src={darkRosesBg}
          alt=""
          aria-hidden="true"
          className="size-full object-cover object-center contrast-[1.15] brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-surface-deep/40" />
      </div>

      {/* Flor ornamental de fondo */}
      <FloralBranchOverlay className="absolute -right-10 top-1/2 -translate-y-1/2 h-[520px] w-[520px] opacity-15 sm:right-4 lg:right-[5%] lg:h-[650px] lg:w-[650px] lg:opacity-20" />
      <FloralRoseRight className="absolute -left-12 bottom-0 h-[400px] w-[220px] opacity-15 lg:left-[2%] lg:h-[480px] lg:w-[260px] lg:opacity-20" />

      <div className="shell relative grid gap-14 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-20">
        <div className="relative">
          <motion.div style={{ y: yMain }} className="relative w-[82%] overflow-hidden rounded-sm border border-border">
            <img
              src={about.primaryImage.src}
              alt={about.primaryImage.alt}
              width={about.primaryImage.width}
              height={about.primaryImage.height}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-[50%_25%] grayscale"
            />
          </motion.div>
          <motion.div
            style={{ y: ySecondary }}
            className="absolute -bottom-10 right-0 w-[52%] overflow-hidden rounded-sm border border-border bg-background"
          >
            <img
              src={about.secondaryImage.src}
              alt={about.secondaryImage.alt}
              width={about.secondaryImage.width}
              height={about.secondaryImage.height}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover grayscale"
            />
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 lg:mt-0"
        >
          <p className="label-xs">{about.label}</p>
          <h2 className="mt-5 display-section max-w-xl">{about.title}</h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ivory-dim/80">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 max-w-xl">
            {about.principles.map((principle) => (
              <li key={principle} className="border-t border-border py-4 text-sm text-ivory-dim">
                {principle}
              </li>
            ))}
          </ul>

          <a
            href="#reservar"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#reservar");
            }}
            className="mt-9 inline-flex min-h-12 items-center rounded-full bg-primary px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-88"
          >
            {about.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

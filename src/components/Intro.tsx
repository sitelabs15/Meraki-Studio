import { motion, useReducedMotion } from "motion/react";
import { intro } from "@/data/siteContent";
import { AnimatedFlowerDrawing } from "./FloralAccents";

export function Intro() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 26 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section aria-labelledby="intro-title" className="border-t border-border bg-surface-deep py-20 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[1.25fr_auto_0.75fr] lg:gap-16 items-center">
        <motion.div {...anim}>
          <p className="label-xs">{intro.label}</p>
          <h2 id="intro-title" className="mt-5 display-section max-w-2xl">
            {intro.title}
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ivory-dim/80 sm:text-lg">
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </motion.div>

        <div className="hidden w-px self-stretch bg-border lg:block" aria-hidden="true" />

        <div className="flex flex-col justify-between h-full gap-8 border-t border-border pt-8 lg:border-0 lg:pt-0">
          {/* Flor botánica animada en trazos finos */}
          <div className="flex items-center justify-center lg:justify-start">
            <AnimatedFlowerDrawing className="w-44 h-52 sm:w-52 sm:h-60 text-ivory/80 opacity-90 drop-shadow-[0_0_12px_rgba(242,240,234,0.15)]" />
          </div>

          <motion.ul {...anim} className="flex flex-col gap-4">
            {intro.facts.map((fact) => (
              <li key={fact} className="label-xs text-ivory-dim">
                {fact}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { contact, finalCta } from "@/data/siteContent";
import { track } from "@/lib/analytics";

export function ContactCTA() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32">
      <span
        aria-hidden="true"
        className="signature pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[34vw] leading-none text-background/[0.07] select-none"
      >
        Meraki
      </span>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="shell relative text-center"
      >
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-background/55">
          {finalCta.label}
        </p>
        <h2 id="cta-title" className="mx-auto mt-6 display-section max-w-3xl text-background">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/70 sm:text-lg">
          {finalCta.text}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={contact.whatsappQuick}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "final_cta" })}
            className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {finalCta.primary}
          </a>
          <a
            href={contact.phoneHref}
            onClick={() => track("phone_click", { source: "final_cta" })}
            className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full border border-background/25 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-background/10 sm:w-auto"
          >
            <Phone className="size-4" aria-hidden="true" />
            {finalCta.secondary}
          </a>
        </div>
      </motion.div>

      {/* transición orgánica hacia el footer oscuro */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute -bottom-px left-0 h-[80px] w-full text-background"
      >
        <path d="M0 120 C 260 40 520 108 760 62 C 1000 16 1220 76 1440 34 L1440 120 Z" fill="currentColor" />
      </svg>
    </section>
  );
}

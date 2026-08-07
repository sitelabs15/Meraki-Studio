import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials, testimonialsCopy } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [i, setI] = useState(0);

  // Sin testimonios reales verificados la sección no se muestra.
  if (testimonials.length === 0) return null;

  const item = testimonials[i]!;

  return (
    <section aria-labelledby="testimonials-title" className="border-t border-border bg-surface py-20 lg:py-28">
      <div className="shell">
        <SectionHeading label={testimonialsCopy.label} title={testimonialsCopy.title} />

        <figure className="mt-14 max-w-3xl">
          <span aria-hidden="true" className="block font-display text-6xl leading-none text-ash/50">
            “
          </span>
          <blockquote className="mt-2 font-display text-2xl font-light leading-snug text-ivory sm:text-3xl">
            {item.quote}
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            {item.image ? (
              <img src={item.image} alt="" aria-hidden="true" loading="lazy" className="size-12 rounded-full object-cover grayscale" />
            ) : null}
            <span>
              <span className="block text-sm text-ivory">{item.name}</span>
              <span className="label-xs">{item.project}</span>
            </span>
          </figcaption>
        </figure>

        {testimonials.length > 1 ? (
          <div className="mt-10 flex gap-2">
            <button
              type="button"
              onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Testimonio anterior"
              className="inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setI((i + 1) % testimonials.length)}
              aria-label="Testimonio siguiente"
              className="inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

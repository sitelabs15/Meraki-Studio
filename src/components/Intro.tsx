import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { intro } from "@/data/siteContent";
import { AnimatedFlowerDrawing } from "./FloralAccents";

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "top 25%",
          toggleActions: "play none none none",
        },
      });

      // Heading lines masked reveal
      if (line1Ref.current && line2Ref.current) {
        gsap.set([line1Ref.current, line2Ref.current], {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 35,
          opacity: 0,
        });

        tl.to(line1Ref.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        });

        tl.to(
          line2Ref.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            opacity: 1,
            duration: 1.25,
            ease: "power3.out",
          },
          "-=0.8"
        );
      }

      // Paragraphs
      if (textRef.current) {
        gsap.set(textRef.current.children, { y: 20, opacity: 0 });
        tl.to(
          textRef.current.children,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }

      // Value badges
      if (badgesRef.current) {
        gsap.set(badgesRef.current.children, { y: 15, opacity: 0, scale: 0.95 });
        tl.to(
          badgesRef.current.children,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Flower drawing & facts
      if (flowerRef.current) {
        gsap.set(flowerRef.current, { opacity: 0, scale: 0.92 });
        tl.to(
          flowerRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.7"
        );
      }

      if (factsRef.current) {
        gsap.set(factsRef.current.children, { x: 20, opacity: 0 });
        tl.to(
          factsRef.current.children,
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="filosofia"
      ref={sectionRef}
      aria-labelledby="intro-title"
      data-scroll-section="philosophy"
      className="border-t border-border bg-surface-deep py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Glow ambiental sutil */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 size-96 rounded-full bg-ivory/[0.015] blur-3xl" />

      <div className="shell grid gap-12 lg:grid-cols-[1.25fr_auto_0.75fr] lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <p className="label-xs">{intro.label}</p>
          </div>

          <h2 id="intro-title" className="mt-5 display-section max-w-2xl text-ivory">
            <span className="block overflow-hidden">
              <span ref={line1Ref} className="inline-block will-change-transform">
                Tu idea, convertida en una pieza
              </span>
            </span>
            <span className="block overflow-hidden mt-1">
              <span ref={line2Ref} className="inline-block text-ivory-dim italic will-change-transform">
                que se queda contigo.
              </span>
            </span>
          </h2>

          <div ref={textRef} className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ivory-dim/85 sm:text-lg">
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="will-change-transform">{p}</p>
            ))}
          </div>

          <div ref={badgesRef} className="mt-8 flex flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/50 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-ivory-dim will-change-transform">
              <span className="size-1.5 rounded-full bg-ivory/60" aria-hidden="true" />
              Tatuajes personalizados
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/50 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-ivory-dim will-change-transform">
              <span className="size-1.5 rounded-full bg-ivory/60" aria-hidden="true" />
              Atención personal y cercana
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/50 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-ivory-dim will-change-transform">
              <span className="size-1.5 rounded-full bg-ivory/60" aria-hidden="true" />
              Guía creativa integral
            </span>
          </div>
        </div>

        <div className="hidden w-px self-stretch bg-border/80 lg:block" aria-hidden="true" />

        <div className="flex flex-col justify-between h-full gap-8 border-t border-border pt-8 lg:border-0 lg:pt-0">
          {/* Flor botánica animada en trazos finos */}
          <div ref={flowerRef} className="flex items-center justify-center lg:justify-start will-change-transform">
            <AnimatedFlowerDrawing className="w-44 h-52 sm:w-52 sm:h-60 text-ivory/80 opacity-90 drop-shadow-[0_0_16px_rgba(245,243,237,0.12)]" />
          </div>

          <ul ref={factsRef} className="flex flex-col gap-3">
            {intro.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-3 label-xs text-ivory-dim/90 will-change-transform">
                <span className="h-px w-3 bg-border" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

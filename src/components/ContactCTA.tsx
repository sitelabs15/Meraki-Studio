import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Phone } from "lucide-react";
import { contact, finalCta } from "@/data/siteContent";
import { track } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Watermark scrub parallax
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // 2. Entrance sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "top 25%",
          toggleActions: "play none none none",
        },
      });

      if (contentRef.current) {
        const textElements = contentRef.current.querySelectorAll(".cta-anim-text");
        gsap.set(textElements, { y: 30, opacity: 0 });
        tl.to(textElements, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      if (buttonsRef.current) {
        const btns = buttonsRef.current.children;
        gsap.set(btns, { y: 20, opacity: 0, scale: 0.96 });
        tl.to(
          btns,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      aria-labelledby="cta-title"
      data-scroll-section="final-cta"
      className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32"
    >
      <span
        ref={watermarkRef}
        aria-hidden="true"
        className="signature pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[34vw] leading-none text-background/[0.07] select-none will-change-transform"
      >
        Meraki
      </span>

      <div ref={contentRef} className="shell relative z-10 text-center">
        <p className="cta-anim-text text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-background/60 will-change-transform">
          {finalCta.label}
        </p>
        <h2 id="cta-title" className="cta-anim-text mx-auto mt-6 display-section max-w-3xl text-background will-change-transform">
          {finalCta.title}
        </h2>
        <p className="cta-anim-text mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/75 sm:text-lg will-change-transform">
          {finalCta.text}
        </p>

        <div ref={buttonsRef} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={contact.whatsappQuick}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "final_cta" })}
            className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-2xl sm:w-auto cursor-pointer will-change-transform"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {finalCta.primary}
          </a>
          <a
            href={contact.phoneHref}
            onClick={() => track("phone_click", { source: "final_cta" })}
            className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full border border-background/30 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-background transition-all duration-300 hover:bg-background/10 hover:border-background/60 sm:w-auto cursor-pointer will-change-transform"
          >
            <Phone className="size-4" aria-hidden="true" />
            {finalCta.secondary}
          </a>
        </div>
      </div>

      {/* Transición orgánica hacia el footer */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute -bottom-px left-0 h-[80px] w-full text-background pointer-events-none"
      >
        <path d="M0 120 C 260 40 520 108 760 62 C 1000 16 1220 76 1440 34 L1440 120 Z" fill="currentColor" />
      </svg>
    </section>
  );
}

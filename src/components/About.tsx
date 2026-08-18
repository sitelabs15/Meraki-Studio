import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "@/data/siteContent";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";

import { FloralBranchOverlay, FloralRoseRight } from "@/components/FloralAccents";
import darkRosesBg from "@/assets/dark-roses.png";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const primaryFrameRef = useRef<HTMLDivElement>(null);
  const primaryImgRef = useRef<HTMLImageElement>(null);
  const secondaryFrameRef = useRef<HTMLDivElement>(null);
  const secondaryImgRef = useRef<HTMLImageElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      // Masked reveals from bottom to top for images
      if (primaryFrameRef.current) {
        gsap.set(primaryFrameRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
        });
        enterTl.to(primaryFrameRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.3,
          ease: "power3.inOut",
        });
      }

      if (secondaryFrameRef.current) {
        gsap.set(secondaryFrameRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0,
        });
        enterTl.to(
          secondaryFrameRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.1,
            ease: "power3.inOut",
          },
          "-=0.9"
        );
      }

      // Text column reveal
      if (textColRef.current) {
        const textElements = textColRef.current.querySelectorAll(".about-anim-text");
        gsap.set(textElements, { y: 24, opacity: 0 });
        enterTl.to(
          textElements,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.7"
        );
      }

      // Principles lines
      if (principlesRef.current) {
        gsap.set(principlesRef.current.children, { x: 20, opacity: 0 });
        enterTl.to(
          principlesRef.current.children,
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { y: 15, opacity: 0 });
        enterTl.to(ctaRef.current, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.3");
      }

      // 2. Parallax scrub on images
      if (primaryImgRef.current && primaryFrameRef.current) {
        gsap.to(primaryImgRef.current, {
          y: "-12%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (secondaryFrameRef.current) {
        gsap.to(secondaryFrameRef.current, {
          y: "-22px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="estudio"
      ref={sectionRef}
      data-scroll-section="process-about"
      className="grain relative overflow-hidden border-t border-border bg-surface-deep py-20 lg:py-32"
    >
      {/* Fondo fotográfico floral en tono oscuro */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <img
          src={darkRosesBg}
          alt=""
          aria-hidden="true"
          className="size-full object-cover object-center contrast-[1.15] brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-surface-deep/45" />
      </div>

      {/* Flor ornamental de fondo */}
      <FloralBranchOverlay className="absolute -right-10 top-1/2 -translate-y-1/2 h-[520px] w-[520px] opacity-15 sm:right-4 lg:right-[5%] lg:h-[650px] lg:w-[650px] lg:opacity-20" />
      <FloralRoseRight className="absolute -left-12 bottom-0 h-[400px] w-[220px] opacity-15 lg:left-[2%] lg:h-[480px] lg:w-[260px] lg:opacity-20" />

      <div className="shell relative z-10 grid gap-14 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-20">
        {/* Composición fotográfica en capas */}
        <div className="relative">
          <div
            ref={primaryFrameRef}
            className="relative w-[84%] overflow-hidden rounded-sm border border-border/80 shadow-2xl bg-surface will-change-transform"
          >
            <img
              ref={primaryImgRef}
              src={about.primaryImage.src}
              alt={about.primaryImage.alt}
              width={about.primaryImage.width}
              height={about.primaryImage.height}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-[50%_25%] grayscale contrast-[1.05] scale-[1.1] will-change-transform"
            />
          </div>
          <div
            ref={secondaryFrameRef}
            className="absolute -bottom-10 right-0 w-[52%] overflow-hidden rounded-sm border border-border/80 bg-background shadow-2xl will-change-transform"
          >
            <img
              ref={secondaryImgRef}
              src={about.secondaryImage.src}
              alt={about.secondaryImage.alt}
              width={about.secondaryImage.width}
              height={about.secondaryImage.height}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover grayscale contrast-[1.05]"
            />
          </div>
        </div>

        {/* Narrativa editorial del estudio y proceso */}
        <div ref={textColRef} className="mt-14 lg:mt-0">
          <div className="about-anim-text flex items-center gap-3">
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <p className="label-xs">{about.label}</p>
          </div>
          <h2 className="about-anim-text mt-5 display-section max-w-xl text-ivory">{about.title}</h2>
          <div className="about-anim-text mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ivory-dim/85">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <ul ref={principlesRef} className="mt-10 max-w-xl">
            {about.principles.map((principle, index) => (
              <li key={principle} className="flex items-center gap-4 border-t border-border py-4 text-sm text-ivory-dim will-change-transform">
                <span className="label-xs text-ash/80">{String(index + 1).padStart(2, "0")}</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>

          <div ref={ctaRef} className="mt-10">
            <a
              href="#reservar"
              onClick={(e) => {
                e.preventDefault();
                track("about_booking_click", { source: "about_section" });
                scrollToHash("#reservar");
              }}
              className="inline-flex min-h-12 items-center rounded-full bg-primary px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-xl cursor-pointer"
            >
              {about.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

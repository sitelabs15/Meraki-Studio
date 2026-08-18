import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialCards from "@/components/ui/card-fan-carousel";
import { carousel } from "@/data/siteContent";
import { ArrowDown } from "lucide-react";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

// Cargar las imágenes de trabajos reales de la carpeta src/assets/trabajos/
const realTrabajosModules = import.meta.glob<{ default: string }>(
  "../assets/trabajos/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const realTrabajosImages = Object.values(realTrabajosModules).map((mod) => mod.default);

// Dejar los primeros 7 trabajos seleccionados para el abanico visual
const heroFanImages = realTrabajosImages.slice(0, 7);

export function PhotoCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const cardItems = heroFanImages.map((imgUrl, i) => ({
    imgUrl,
    alt: `Tatuaje editorial realizado por Meraki Studio ${i + 1}`,
    linkUrl: "#trabajos",
  }));

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      });

      if (headingRef.current) {
        gsap.set(headingRef.current, { clipPath: "inset(100% 0% 0% 0%)", y: 25, opacity: 0 });
        tl.to(headingRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        });
      }

      if (textRef.current) {
        gsap.set(textRef.current, { y: 18, opacity: 0 });
        tl.to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }

      if (badgesRef.current) {
        const badges = badgesRef.current.children;
        gsap.set(badges, { y: 12, opacity: 0, scale: 0.94 });
        tl.to(
          badges,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { y: 15, opacity: 0 });
        tl.to(
          ctaRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="recientes"
      ref={sectionRef}
      aria-labelledby="carousel-title"
      data-scroll-section="recent-works"
      className="relative border-t border-border bg-background py-20 lg:py-28 overflow-hidden"
    >
      <div className="shell">
        <div className="max-w-2xl text-center mx-auto">
          <p className="label-xs text-ash tracking-[0.22em] uppercase text-xs mb-3">{carousel.label}</p>
          <h2
            id="carousel-title"
            ref={headingRef}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-tight will-change-transform"
          >
            {carousel.title}
          </h2>
          <p ref={textRef} className="mt-4 text-base sm:text-lg text-ivory-dim/85 leading-relaxed will-change-transform">
            {carousel.text}
          </p>
        </div>

        {/* Especialidades visuales sutiles */}
        <div ref={badgesRef} className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="rounded-full border border-border/70 bg-surface/40 px-4 py-1 text-[0.62rem] sm:text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ash">
            Fine Line
          </span>
          <span className="rounded-full border border-border/70 bg-surface/40 px-4 py-1 text-[0.62rem] sm:text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ash">
            Blackwork
          </span>
          <span className="rounded-full border border-border/70 bg-surface/40 px-4 py-1 text-[0.62rem] sm:text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ash">
            Piezas Botánicas
          </span>
          <span className="rounded-full border border-border/70 bg-surface/40 px-4 py-1 text-[0.62rem] sm:text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ash">
            Lettering
          </span>
        </div>
      </div>

      {/* Abanico interactivo en 3D / GSAP */}
      <div className="mt-6 sm:mt-10">
        <SocialCards cards={cardItems} />
      </div>

      {/* Botón centrado que desplaza hacia la galería completa */}
      <div ref={ctaRef} className="mt-8 flex justify-center px-4">
        <a
          href="#trabajos"
          onClick={(e) => {
            e.preventDefault();
            track("view_more_works_click", { source: "photo_carousel" });
            scrollToHash("#trabajos");
          }}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] shadow-xl cursor-pointer"
        >
          Explorar galería completa
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

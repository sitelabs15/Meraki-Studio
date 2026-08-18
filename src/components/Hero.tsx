import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { contact, hero } from "@/data/siteContent";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";

import { FloralVineLeft, FloralRoseRight } from "@/components/FloralAccents";
import darkRosesBg from "@/assets/dark-roses.webp";
import greenLeaves from "@/assets/green-leaves.webp";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // References for all distinct layer targets
  const bgRef = useRef<HTMLDivElement>(null);
  const botanicalRef = useRef<HTMLDivElement>(null);
  const titleLeftRef = useRef<HTMLSpanElement>(null);
  const titleRightRef = useRef<HTMLSpanElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const leafLeftRef = useRef<HTMLDivElement>(null);
  const leafRightRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // GSAP context for strict React lifecycle cleanup
    const ctx = gsap.context(() => {
      if (isReducedMotion) {
        gsap.set(
          [
            portraitImgRef.current,
            portraitWrapperRef.current,
            titleLeftRef.current,
            titleRightRef.current,
            leafLeftRef.current,
            leafRightRef.current,
            botanicalRef.current,
            copyRef.current,
            metaRef.current,
            eyebrowRef.current,
            scrollHintRef.current,
          ],
          { opacity: 1, scale: 1, x: 0, y: 0, rotation: 0, clipPath: "none", filter: "none", clearProps: "all" }
        );
        return;
      }

      // ────────────────────────────────────────────────────────────────
      // 1. INITIAL LOAD CHOREOGRAPHED ENTRANCE TIMELINE
      // ────────────────────────────────────────────────────────────────
      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.05,
      });

      introTl
        .fromTo(
          portraitImgRef.current,
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08, opacity: 0 },
          { clipPath: "inset(0% 0% 0% 0%)", scale: 1, opacity: 1, duration: 1.2, ease: "power3.inOut" },
          0
        )
        .fromTo(
          titleLeftRef.current,
          { clipPath: "inset(0% 100% 0% 0%)", x: -28, opacity: 0 },
          { clipPath: "inset(0% 0% 0% 0%)", x: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          0.2
        )
        .fromTo(
          titleRightRef.current,
          { clipPath: "inset(0% 0% 0% 100%)", x: 28, opacity: 0 },
          { clipPath: "inset(0% 0% 0% 0%)", x: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          0.3
        )
        .fromTo(
          leafLeftRef.current,
          { x: -60, rotation: -6, opacity: 0 },
          { x: 0, rotation: 0, opacity: 1, duration: 1.1, ease: "power2.out" },
          0.2
        )
        .fromTo(
          leafRightRef.current,
          { x: 60, rotation: 6, opacity: 0 },
          { x: 0, rotation: 0, opacity: 1, duration: 1.1, ease: "power2.out" },
          0.3
        )
        .fromTo(
          botanicalRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 0.28, scale: 1, duration: 1.2, ease: "power2.out" },
          0.1
        )
        .fromTo(eyebrowRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.5)
        .fromTo(copyRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.6)
        .fromTo(metaRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.7)
        .fromTo(scrollHintRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.8);

      // ────────────────────────────────────────────────────────────────
      // 2. RESPONSIVE PINNED SCROLL WITH gsap.matchMedia()
      // ────────────────────────────────────────────────────────────────
      const mm = gsap.matchMedia();

      // Desktop: Full cinematic depth pin (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=140%",
            pin: true,
            scrub: 1.0,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        scrollTl
          .to(portraitWrapperRef.current, { scale: 1.08, y: -25, ease: "none", duration: 0.75 }, 0)
          .to(leafLeftRef.current, { x: -65, y: 30, rotation: -4, ease: "none", duration: 0.75 }, 0)
          .to(leafRightRef.current, { x: 65, y: 30, rotation: 4, ease: "none", duration: 0.75 }, 0)
          .to(titleLeftRef.current, { y: 35, opacity: 0.75, ease: "none", duration: 0.75 }, 0)
          .to(titleRightRef.current, { y: 55, opacity: 0.65, ease: "none", duration: 0.75 }, 0)
          .to(botanicalRef.current, { y: 20, opacity: 0.15, ease: "none", duration: 0.75 }, 0)
          .to([copyRef.current, metaRef.current, eyebrowRef.current, scrollHintRef.current], { opacity: 0, y: -18, stagger: 0.03, ease: "power2.in", duration: 0.35 }, 0.15)
          // Dismantling transition (last 25%)
          .to(portraitWrapperRef.current, { y: -75, scale: 1.02, opacity: 0, ease: "power2.in", duration: 0.25 }, 0.75)
          .to(leafLeftRef.current, { x: -140, opacity: 0, ease: "power2.in", duration: 0.25 }, 0.75)
          .to(leafRightRef.current, { x: 140, opacity: 0, ease: "power2.in", duration: 0.25 }, 0.75)
          .to([titleLeftRef.current, titleRightRef.current], { y: 70, opacity: 0, ease: "power2.in", duration: 0.25 }, 0.75);

        // Desktop pointer parallax
        const setPortraitX = gsap.quickTo(portraitWrapperRef.current, "x", { duration: 0.8, ease: "power3.out" });
        const setPortraitY = gsap.quickTo(portraitWrapperRef.current, "y", { duration: 0.8, ease: "power3.out" });
        const setLeafLX = gsap.quickTo(leafLeftRef.current, "x", { duration: 1.1, ease: "power3.out" });
        const setLeafRX = gsap.quickTo(leafRightRef.current, "x", { duration: 1.1, ease: "power3.out" });

        const onMouseMove = (e: MouseEvent) => {
          const normX = (e.clientX / window.innerWidth - 0.5) * 2;
          const normY = (e.clientY / window.innerHeight - 0.5) * 2;
          setPortraitX(normX * 10);
          setPortraitY(normY * 6);
          setLeafLX(normX * -15);
          setLeafRX(normX * 15);
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMouseMove);
      });

      // Tablet: Moderate depth pin (640px -> 1023px)
      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        scrollTl
          .to(portraitWrapperRef.current, { scale: 1.05, y: -18, ease: "none", duration: 0.75 }, 0)
          .to(leafLeftRef.current, { x: -40, y: 18, ease: "none", duration: 0.75 }, 0)
          .to(leafRightRef.current, { x: 40, y: 18, ease: "none", duration: 0.75 }, 0)
          .to([copyRef.current, metaRef.current, eyebrowRef.current, scrollHintRef.current], { opacity: 0, y: -12, duration: 0.3 }, 0.15)
          .to(portraitWrapperRef.current, { opacity: 0, y: -45, ease: "power2.in", duration: 0.25 }, 0.75)
          .to([leafLeftRef.current, leafRightRef.current], { opacity: 0, ease: "power2.in", duration: 0.25 }, 0.75);
      });

      // Mobile: Unpinned smooth scrub (< 640px)
      mm.add("(max-width: 639px)", () => {
        gsap.to(portraitWrapperRef.current, {
          y: -20,
          scale: 1.03,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      // Idle micro-oscillation for leaves on non-touch
      if (!isTouch) {
        gsap.to(leafLeftRef.current, {
          y: "+=2.5",
          rotation: "+=0.5",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });

        gsap.to(leafRightRef.current, {
          y: "+=3",
          rotation: "-=0.6",
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2.3,
        });
      }
    }, containerRef);

    // Refresh ScrollTrigger once fonts/images settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-scroll-wrapper relative w-full">
      <section
        id="inicio"
        ref={heroRef}
        className="hero-container grain relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background pt-[72px] sm:pt-[80px] lg:pt-[88px]"
        data-section="hero"
      >
        {/* ── LAYER: Background Photographic Texture ─────────────────────── */}
        <div ref={bgRef} className="hero-background pointer-events-none absolute inset-0 z-0 select-none">
          {/* Dark Roses photographic background */}
          <div className="absolute inset-0 opacity-45 sm:opacity-60">
            <img
              src={darkRosesBg}
              alt=""
              aria-hidden="true"
              className="size-full object-cover object-center contrast-[1.15] brightness-[0.65]"
            />
            <div className="absolute inset-0 bg-background/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/95" />
          </div>

          {/* Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,243,237,0.04)_0%,transparent_70%)]" />
        </div>

        {/* ── LAYER: Botanical Line-Art Background ──────────────────────── */}
        <div ref={botanicalRef} className="hero-botanical-art pointer-events-none absolute inset-0 z-[2] select-none">
          <FloralVineLeft className="absolute -left-6 top-[15%] h-[360px] w-[200px] opacity-20 sm:left-2 sm:h-[480px] sm:w-[280px] sm:opacity-30 lg:left-[4%] lg:top-[12%] lg:h-[620px] lg:w-[350px] lg:opacity-35" />
          <FloralRoseRight className="absolute -right-8 top-[22%] h-[380px] w-[220px] opacity-20 sm:right-2 sm:h-[500px] sm:w-[300px] sm:opacity-25 lg:right-[3%] lg:top-[16%] lg:h-[640px] lg:w-[360px] lg:opacity-30" />
        </div>

        {/* ── LAYER: Large Title Typography ─────────────────────────────── */}
        <div className="hero-title pointer-events-none absolute inset-x-0 top-[11%] sm:top-[14%] lg:top-[13%] z-[8] text-center px-4 select-none">
          <h1 className="text-ivory leading-none flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-4 lg:gap-8 opacity-95">
            <span
              ref={titleLeftRef}
              className="hero-title-left signature text-ivory text-[clamp(3.2rem,12vw,13.9rem)] filter drop-shadow-2xl inline-block origin-center will-change-transform"
            >
              Meraki
            </span>
            <span
              ref={titleRightRef}
              className="hero-title-right text-ivory-dim font-display uppercase tracking-[0.28em] sm:tracking-[0.25em] text-[clamp(1.4rem,5.5vw,7.45rem)] font-light -mt-2 sm:mt-0 inline-block origin-center will-change-transform"
            >
              STUDIO
            </span>
          </h1>
        </div>

        {/* ── LAYER: Central Portrait & Arched Frame ────────────────────── */}
        <div
          ref={portraitWrapperRef}
          className="hero-portrait-wrapper pointer-events-none absolute bottom-0 left-1/2 z-[10] -translate-x-1/2 w-[72vw] max-w-[340px] sm:w-[58vw] lg:w-[32vw] lg:max-w-[520px] xl:max-w-[580px] flex justify-center origin-bottom will-change-transform"
        >
          <div className="relative w-full flex flex-col items-center justify-end">
            <div className="arch-mask relative h-[50vh] max-h-[440px] sm:h-[76vh] sm:max-h-[720px] lg:h-[84vh] lg:max-h-[840px] w-full overflow-hidden border border-border/60 bg-surface-elevated/90 backdrop-blur-md shadow-2xl">
              <img
                ref={portraitImgRef}
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                width={hero.portrait.width}
                height={hero.portrait.height}
                fetchPriority="high"
                decoding="async"
                className="hero-portrait size-full object-cover object-[50%_0%] filter drop-shadow-xl contrast-[1.05] will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ── LAYER: Independent Left and Right Tropical Leaves ──────────── */}
        {/* Left Leaf Layer */}
        <div
          ref={leafLeftRef}
          className="hero-leaf-left pointer-events-none absolute -bottom-10 sm:-bottom-24 lg:-bottom-28 left-0 z-[12] w-[75vw] max-w-[650px] sm:w-[65vw] lg:w-[48vw] lg:max-w-[850px] flex items-end justify-start translate-y-8 sm:translate-y-12 lg:translate-y-16 origin-bottom-left will-change-transform"
        >
          <img
            src={greenLeaves}
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain object-left-bottom filter drop-shadow-2xl brightness-[0.9] contrast-[1.1]"
          />
        </div>

        {/* Right Leaf Layer */}
        <div
          ref={leafRightRef}
          className="hero-leaf-right pointer-events-none absolute -bottom-10 sm:-bottom-24 lg:-bottom-28 right-0 z-[12] w-[75vw] max-w-[650px] sm:w-[65vw] lg:w-[48vw] lg:max-w-[850px] flex items-end justify-end translate-y-8 sm:translate-y-12 lg:translate-y-16 origin-bottom-right will-change-transform"
        >
          <img
            src={greenLeaves}
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain object-right-bottom scale-x-[-1] filter drop-shadow-2xl brightness-[0.88] contrast-[1.1]"
          />
        </div>

        {/* Mobile Readability Gradient Overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-56 sm:h-44 bg-gradient-to-t from-background via-background/85 to-transparent lg:hidden" />

        {/* ── LAYER: Supporting Content, Copy & CTAs ─────────────────────── */}
        <div className="hero-copy-container shell relative z-20 flex flex-1 flex-col justify-between pb-4 pt-2 sm:pb-5 lg:pb-3 lg:pt-3">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="hero-eyebrow flex items-center justify-center gap-3 relative z-20">
            <span className="h-px w-6 sm:w-10 bg-border" aria-hidden="true" />
            <p className="label-xs text-center tracking-[0.26em] text-ash text-[0.65rem] sm:text-[0.7rem]">
              {hero.eyebrow}
            </p>
            <span className="h-px w-6 sm:w-10 bg-border" aria-hidden="true" />
          </div>

          {/* Central Flanks Layout */}
          <div className="relative mt-2 flex min-h-[58vh] sm:min-h-[65vh] lg:min-h-[75vh] flex-1 items-end justify-between pb-0 mb-0">
            <div className="relative z-20 grid w-full items-end gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-6 pb-0 mb-0">
              {/* Left Flank: Supporting Copy & Pill CTA Buttons */}
              <div
                ref={copyRef}
                className="hero-copy flex flex-col gap-4 sm:gap-6 lg:col-span-4 lg:pl-2 self-end mb-0 pb-1 text-center lg:text-left items-center lg:items-start will-change-transform"
              >
                <p className="max-w-xs sm:max-w-md text-xs sm:text-base lg:text-lg leading-relaxed text-ivory-dim/90 lg:max-w-[21rem]">
                  {hero.support}
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto [&>a]:w-full [&>a]:sm:w-auto [&>a]:shrink-0">
                  <a
                    href="#reservar"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_booking_click", { source: "hero" });
                      scrollToHash("#reservar");
                    }}
                    className="inline-flex whitespace-nowrap min-h-11 sm:min-h-12 items-center justify-center rounded-full bg-primary px-7 sm:px-8 text-[0.7rem] sm:text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg cursor-pointer"
                  >
                    {hero.primaryCta}
                  </a>
                  <a
                    href="#trabajos"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash("#trabajos");
                    }}
                    className="inline-flex whitespace-nowrap min-h-11 sm:min-h-12 items-center justify-center rounded-full border border-border/80 bg-surface/40 px-7 sm:px-8 text-[0.7rem] sm:text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-surface/80 cursor-pointer"
                  >
                    {hero.secondaryCta}
                  </a>
                </div>
              </div>

              {/* Center spacing allocated for arched portrait */}
              <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />

              {/* Right Flank: Studio Metadata & Instagram Link */}
              <div
                ref={metaRef}
                className="hero-meta flex flex-wrap lg:flex-col items-center justify-center lg:items-end gap-x-3 gap-y-1 sm:gap-3.5 lg:col-span-4 lg:text-right self-end mb-0 pb-1 will-change-transform"
              >
                {hero.meta.map((m, idx) => (
                  <span
                    key={m}
                    className="label-xs tracking-[0.18em] sm:tracking-[0.2em] text-ivory-dim/80 text-[0.62rem] sm:text-[0.7rem] flex items-center gap-2"
                  >
                    {idx > 0 && (
                      <span className="inline-block size-1 rounded-full bg-ash/40 lg:hidden" aria-hidden="true" />
                    )}
                    {m}
                  </span>
                ))}
                <span className="hidden lg:block" aria-hidden="true" />
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("instagram_click", { source: "hero" })}
                  className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.2em] text-ivory underline decoration-border underline-offset-4 transition-colors hover:decoration-ivory ml-2 lg:ml-0"
                >
                  {contact.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          <div ref={scrollHintRef} className="hero-scroll-hint flex justify-center">
            <a
              href="#recientes"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#recientes");
              }}
              className="relative z-30 mt-2 sm:mt-1 flex items-center justify-center gap-2 rounded-full bg-background/80 sm:bg-background/60 px-4 py-1 backdrop-blur-sm border border-border/30 transition-opacity hover:opacity-80 cursor-pointer"
            >
              <span className="label-xs tracking-[0.22em] text-ash text-[0.62rem] sm:text-[0.7rem]">
                {hero.scrollHint}
              </span>
              <span className="text-ash inline-flex items-center justify-center">
                <ArrowDown className="size-3 sm:size-3.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

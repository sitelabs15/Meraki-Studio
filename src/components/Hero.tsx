import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { contact, hero } from "@/data/siteContent";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";

import { FloralVineLeft, FloralRoseRight } from "@/components/FloralAccents";
import darkRosesBg from "@/assets/dark-roses.png";
import greenLeaves from "@/assets/green-leaves.png";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  
  // Parallax natural en la misma dirección pero con distinta sensibilidad/velocidad
  const archY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -45]); // El arco sube suavemente (-45px)
  const archScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.02]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -95]); // La artista sube un poco más rápido (-95px)
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);
  
  const plantY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const layerA = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const layerB = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);

  const step = (d: number) => (reduce ? { duration: 0 } : { duration: 0.75, delay: d, ease: EASE });

  return (
    <section
      id="inicio"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-background pt-[72px] sm:pt-[80px] lg:pt-[88px]"
    >
      {/* Fondo fotográfico de rosas extraído del diseño de referencia */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50 sm:opacity-65">
        <img
          src={darkRosesBg}
          alt=""
          aria-hidden="true"
          className="size-full object-cover object-center contrast-[1.15] brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/90" />
      </div>

      {/* Flores decorativas en línea vectorial (Left & Right Floral Accents) */}
      <motion.div style={{ y: layerA }}>
        <FloralVineLeft className="absolute -left-6 top-[15%] z-[1] h-[360px] w-[200px] opacity-20 sm:left-2 sm:h-[480px] sm:w-[280px] sm:opacity-30 lg:left-[4%] lg:top-[12%] lg:h-[620px] lg:w-[350px] lg:opacity-35" />
      </motion.div>
      <motion.div style={{ y: layerB }}>
        <FloralRoseRight className="absolute -right-8 top-[22%] z-[1] h-[380px] w-[220px] opacity-20 sm:right-2 sm:h-[500px] sm:w-[300px] sm:opacity-25 lg:right-[3%] lg:top-[16%] lg:h-[640px] lg:w-[360px] lg:opacity-30" />
      </motion.div>

      {/* Titular gigante central animado con parallax */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="pointer-events-none absolute inset-x-0 top-[11%] sm:top-[14%] lg:top-[13%] z-[8] text-center px-4"
      >
        <h1 className="select-none text-ivory leading-none flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-4 lg:gap-8 opacity-95">
          <span className="signature text-ivory text-[clamp(3.2rem,12vw,13.9rem)] filter drop-shadow-2xl">
            Meraki
          </span>
          <span className="text-ivory-dim font-display uppercase tracking-[0.28em] sm:tracking-[0.25em] text-[clamp(1.4rem,5.5vw,7.45rem)] font-light -mt-2 sm:mt-0">
            STUDIO
          </span>
        </h1>
      </motion.div>

      {/* Plantas Verdes recortadas */}
      <motion.div
        style={{ y: plantY }}
        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={step(0.4)}
        className="pointer-events-none absolute -bottom-10 sm:-bottom-24 lg:-bottom-28 left-1/2 z-[5] -translate-x-1/2 w-[140vw] max-w-[1100px] sm:w-[130vw] lg:w-[92vw] lg:max-w-[1540px] xl:max-w-[1720px] flex items-end justify-center translate-y-8 sm:translate-y-12 lg:translate-y-16"
      >
        <img
          src={greenLeaves}
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain object-bottom filter drop-shadow-2xl brightness-[0.9] contrast-[1.1]"
        />
      </motion.div>

      {/* Retrato Focal en Arco */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-[10] -translate-x-1/2 w-[72vw] max-w-[340px] sm:w-[58vw] lg:w-[32vw] lg:max-w-[520px] xl:max-w-[580px] flex justify-center">
        <motion.div
          style={{ y: archY, scale: archScale }}
          initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 1, delay: 0.35, ease: EASE }}
          className="relative w-full flex flex-col items-center justify-end"
        >
          <div className="arch-mask relative h-[50vh] max-h-[440px] sm:h-[76vh] sm:max-h-[720px] lg:h-[84vh] lg:max-h-[840px] w-full overflow-hidden border border-ash/60 bg-[#242427]/85 backdrop-blur-md shadow-2xl">
            <motion.img
              style={{ y: portraitY, scale: portraitScale }}
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={hero.portrait.width}
              height={hero.portrait.height}
              fetchPriority="high"
              decoding="async"
              className="size-full object-cover object-[50%_0%] filter drop-shadow-xl contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Degradado inferior para legibilidad en móviles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-56 sm:h-44 bg-gradient-to-t from-background via-background/80 to-transparent lg:hidden" />

      <div className="shell relative z-20 flex flex-1 flex-col justify-between pb-3 pt-2 sm:pb-4 lg:pb-2 lg:pt-3">
        {/* Eyebrow superior */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={step(0.1)}
          className="label-xs text-center relative z-20 tracking-[0.24em] text-ash text-[0.65rem] sm:text-[0.7rem]"
        >
          {hero.eyebrow}
        </motion.p>

        {/* Zona Central Principal */}
        <div className="relative mt-2 flex min-h-[58vh] sm:min-h-[65vh] lg:min-h-[75vh] flex-1 items-end justify-between pb-0 mb-0">
          <div className="relative z-20 grid w-full items-end gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-6 pb-0 mb-0">
            
            {/* Flanco Izquierdo: Descripción y Botones de Acción */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={step(0.5)}
              className="flex flex-col gap-4 sm:gap-6 lg:col-span-4 lg:pl-2 self-end mb-0 pb-1 text-center lg:text-left items-center lg:items-start"
            >
              <p className="max-w-xs sm:max-w-md text-xs sm:text-base lg:text-lg leading-relaxed text-ivory-dim/90 lg:max-w-[21rem]">
                {hero.support}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto [&>a]:w-full [&>a]:sm:w-auto [&>a]:shrink-0">
                <a
                  href="#reservar"
                  onClick={(e) => {
                    e.preventDefault();
                    track("hero_booking_click", { source: "hero" });
                    scrollToHash("#reservar");
                  }}
                  className="inline-flex whitespace-nowrap min-h-11 sm:min-h-12 items-center justify-center rounded-full bg-primary px-7 sm:px-8 text-[0.7rem] sm:text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                >
                  {hero.primaryCta}
                </a>
                <a
                  href="#trabajos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash("#trabajos");
                  }}
                  className="inline-flex whitespace-nowrap min-h-11 sm:min-h-12 items-center justify-center rounded-full border border-border/80 px-7 sm:px-8 text-[0.7rem] sm:text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-surface/60"
                >
                  {hero.secondaryCta}
                </a>
              </div>
            </motion.div>

            {/* Espacio Central para el retrato */}
            <div className="hidden lg:block lg:col-span-4" />

            {/* Flanco Derecho: Información Complementaria e Instagram */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={step(0.6)}
              className="flex flex-wrap lg:flex-col items-center justify-center lg:items-end gap-x-3 gap-y-1 sm:gap-3.5 lg:col-span-4 lg:text-right self-end mb-0 pb-1"
            >
              {hero.meta.map((m, idx) => (
                <span key={m} className="label-xs tracking-[0.18em] sm:tracking-[0.2em] text-ivory-dim/80 text-[0.62rem] sm:text-[0.7rem] flex items-center gap-2">
                  {idx > 0 && <span className="inline-block size-1 rounded-full bg-ash/40 lg:hidden" aria-hidden="true" />}
                  {m}
                </span>
              ))}
              <span className="hidden lg:block" />
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("instagram_click", { source: "hero" })}
                className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.2em] text-ivory underline decoration-border underline-offset-4 transition-colors hover:decoration-ivory ml-2 lg:ml-0"
              >
                {contact.instagramHandle}
              </a>
            </motion.div>

          </div>
        </div>

        {/* Hint de Scroll flotando sobre la parte inferior del retrato */}
        <motion.a
          href="#trabajos"
          onClick={(e) => {
            e.preventDefault();
            scrollToHash("#trabajos");
          }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={step(0.8)}
          className="relative z-30 mt-2 sm:mt-1 flex items-center justify-center gap-2 self-center rounded-full bg-background/80 sm:bg-background/60 px-4 py-1 backdrop-blur-sm border border-border/30 transition-opacity hover:opacity-80"
        >
          <span className="label-xs tracking-[0.22em] text-ash text-[0.62rem] sm:text-[0.7rem]">{hero.scrollHint}</span>
          <motion.span
            animate={reduce ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-ash"
          >
            <ArrowDown className="size-3 sm:size-3.5" aria-hidden="true" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

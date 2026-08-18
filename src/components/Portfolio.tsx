import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, Instagram } from "lucide-react";
import { contact, portfolio, portfolioCategories, type Project } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { PortfolioLightbox } from "./PortfolioLightbox";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// Importar dinámicamente cada subcarpeta organizada por categorías de trabajos reales
const colorModules = import.meta.glob<{ default: string }>(
  "../assets/trabajos/Color/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const grandesModules = import.meta.glob<{ default: string }>(
  "../assets/trabajos/grandes/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const letteringModules = import.meta.glob<{ default: string }>(
  "../assets/trabajos/lettering/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const pequenosModules = import.meta.glob<{ default: string }>(
  "../assets/trabajos/pequeños/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

let projectIndex = 0;
const createCategoryProjects = (
  modules: Record<string, { default: string }>,
  category: string
): Project[] => {
  return Object.values(modules).map((mod) => {
    projectIndex++;
    const numStr = String(projectIndex).padStart(2, "0");
    return {
      id: `real-work-${projectIndex}`,
      number: numStr,
      title: `Pieza Meraki #${numStr}`,
      category,
      area: "Puebla",
      image: mod.default,
      alt: `Tatuaje ${category} por Meraki Studio #${numStr}`,
      width: 900,
      height: 1200,
      span: "normal",
    };
  });
};

const realProjects: Project[] = [
  ...createCategoryProjects(colorModules, "A color"),
  ...createCategoryProjects(letteringModules, "Lettering"),
  ...createCategoryProjects(pequenosModules, "Pequeños"),
  ...createCategoryProjects(grandesModules, "Proyectos grandes"),
];

// 2 filas x 3 columnas = 6 piezas inicialmente
const INITIAL_LIMIT = 6;

export function Portfolio() {
  const [category, setCategory] = useState("Todos");
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (c: string) => {
    setCategory(c);
    setIsExpanded(false);
  };

  const filteredProjects = useMemo(
    () =>
      category === "Todos"
        ? realProjects
        : realProjects.filter((p) => p.category === category),
    [category],
  );

  const displayedProjects = useMemo(
    () => (isExpanded ? filteredProjects : filteredProjects.slice(0, INITIAL_LIMIT)),
    [filteredProjects, isExpanded],
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todos: realProjects.length };
    portfolioCategories.forEach((cat) => {
      if (cat !== "Todos") {
        counts[cat] = realProjects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const openAt = (i: number, project: Project) => {
    setOpenIndex(i);
    track("portfolio_view", { project: project.title });
  };

  // GSAP scroll trigger for gallery wall cards
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll<HTMLElement>(".gallery-card");
      if (!cards || !cards.length) return;

      cards.forEach((card, idx) => {
        const img = card.querySelector<HTMLElement>(".gallery-img");

        // Staggered masked reveal
        gsap.set(card, {
          clipPath: idx % 2 === 0 ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
          opacity: 0,
          scale: 0.98,
        });

        gsap.to(card, {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });

        // Inner image parallax
        if (img) {
          gsap.to(img, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, gridRef);

    return () => ctx.revert();
  }, [displayedProjects]);

  return (
    <section
      id="trabajos"
      ref={sectionRef}
      data-scroll-section="portfolio-gallery"
      className="border-t border-border bg-background py-20 lg:py-32"
    >
      <div className="shell">
        <SectionHeading label={portfolio.label} title={portfolio.title} />

        {/* Filtros de categorías ordenadas en subcarpetas reales con contadores */}
        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar portafolio por categoría">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => handleCategoryChange(c)}
              className={cn(
                "min-h-11 rounded-full border px-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer",
                category === c
                  ? "border-ivory bg-primary text-primary-foreground"
                  : "border-border text-ash hover:border-ivory hover:text-ivory",
              )}
            >
              {c} ({categoryCounts[c] || 0})
            </button>
          ))}
        </div>

        {displayedProjects.length === 0 ? (
          <p className="mt-12 text-sm text-ash">
            Aún no hay piezas publicadas en esta categoría. Escríbeme para ver más trabajos.
          </p>
        ) : (
          <>
            {/* Editorial Gallery Wall */}
            <div
              ref={gridRef}
              className="gallery-wall group/wall mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            >
              {displayedProjects.map((project, i) => (
                <button
                  key={project.id}
                  type="button"
                  data-cursor="view"
                  onClick={() => openAt(i, project)}
                  className="gallery-card group relative block overflow-hidden rounded-sm bg-surface-deep text-left aspect-[4/5] will-change-transform transition-opacity duration-500 group-hover/wall:opacity-60 hover:!opacity-100 cursor-pointer"
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  <div className="size-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      width={project.width}
                      height={project.height}
                      loading={i < 6 ? "eager" : "lazy"}
                      decoding="async"
                      className="gallery-img size-full object-cover opacity-85 grayscale contrast-[1.04] scale-[1.08] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12] group-hover:opacity-100 will-change-transform"
                    />
                  </div>
                  <span className="absolute left-4 top-4 label-xs text-ivory drop-shadow-md">{project.number}</span>
                  <span className="absolute inset-0 flex flex-col justify-end bg-surface-deep/0 p-5 transition-colors duration-500 group-hover:bg-surface-deep/55 group-focus-visible:bg-surface-deep/55">
                    <span className="translate-y-3 opacity-0 transition-[transform,opacity] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <span className="label-xs text-ivory-dim">
                        {project.category} · {project.area}
                      </span>
                      <span className="mt-2 block font-display text-2xl font-light text-ivory">
                        {project.title}
                      </span>
                      <span className="mt-3 inline-block border-b border-ivory pb-1 text-[0.66rem] uppercase tracking-[0.18em] text-ivory">
                        Ver proyecto
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Botón para desplegar la galería completa */}
            {filteredProjects.length > INITIAL_LIMIT && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] cursor-pointer shadow-lg"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="size-4" aria-hidden="true" />
                      Ver menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="size-4" aria-hidden="true" />
                      Ver más
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

        <div className="mt-14 flex flex-col items-center justify-center text-center gap-5 border-t border-border pt-10">
          <p className="font-display text-2xl font-light text-ivory sm:text-3xl">{portfolio.instagramNote}</p>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("instagram_click", { source: "portfolio" })}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] shadow-lg cursor-pointer"
          >
            <Instagram className="size-4" aria-hidden="true" />
            {portfolio.instagramCta}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <PortfolioLightbox
            projects={displayedProjects}
            index={openIndex}
            onIndexChange={setOpenIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

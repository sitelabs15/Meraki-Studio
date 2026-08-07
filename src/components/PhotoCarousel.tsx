import SocialCards from "@/components/ui/card-fan-carousel";
import { carousel } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { ArrowDown } from "lucide-react";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";

// Cargar las 41 imágenes reales de la carpeta src/assets/trabajos/
const realTrabajosModules = import.meta.glob<{ default: string }>(
  "../assets/trabajos/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const realTrabajosImages = Object.values(realTrabajosModules).map((mod) => mod.default);

// Dejar únicamente los primeros 7 trabajos para un abanico fijo y perfecto
const heroFanImages = realTrabajosImages.slice(0, 7);

export function PhotoCarousel() {
  const cardItems = heroFanImages.map((imgUrl, i) => ({
    imgUrl,
    alt: `Tatuaje realizado por Meraki Studio ${i + 1}`,
    linkUrl: "#trabajos",
  }));

  return (
    <section aria-labelledby="carousel-title" className="relative border-t border-border bg-background py-16 lg:py-24 overflow-hidden">
      <div className="shell">
        <SectionHeading
          label={carousel.label}
          title={carousel.title}
          text={carousel.text}
          className="max-w-2xl text-center mx-auto"
        />
      </div>

      <div className="mt-6 sm:mt-8">
        <SocialCards cards={cardItems} />
      </div>

      {/* Botón centrado que desplaza hacia la sección de portafolio */}
      <div className="mt-6 flex justify-center px-4">
        <a
          href="#trabajos"
          onClick={(e) => {
            e.preventDefault();
            track("view_more_works_click", { source: "photo_carousel" });
            scrollToHash("#trabajos");
          }}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] shadow-lg"
        >
          Ver más trabajos
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

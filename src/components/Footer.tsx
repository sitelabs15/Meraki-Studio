import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { contact, footer } from "@/data/siteContent";
import { scrollToHash } from "@/hooks/useSiteUx";
import { track } from "@/lib/analytics";
import { MadeWithLoveBadge } from "./ui/made-with-badge";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !footerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      if (contentRef.current) {
        gsap.set(contentRef.current.children, { y: 16, opacity: 0 });
        tl.to(contentRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      if (bottomRef.current) {
        gsap.set(bottomRef.current, { opacity: 0 });
        tl.to(bottomRef.current, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      data-scroll-section="footer"
      className="grain border-t border-border bg-background pb-12 pt-20 relative overflow-hidden"
    >
      <div ref={contentRef} className="shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="will-change-transform">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ash">{footer.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <span className="text-[0.68rem] uppercase tracking-[0.2em] text-ivory/60">
              Puebla · México
            </span>
          </div>
        </div>

        <nav aria-label="Navegación del pie de página" className="will-change-transform">
          <h2 className="label-xs">Navegación</h2>
          <ul className="mt-5 space-y-3">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash(link.href);
                  }}
                  className="text-sm text-ivory-dim transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="will-change-transform">
          <h2 className="label-xs">Contacto & Ubicación</h2>
          <ul className="mt-5 space-y-3 text-sm text-ivory-dim">
            <li>
              <a
                href={contact.phoneHref}
                onClick={() => track("phone_click", { source: "footer" })}
                className="inline-flex min-h-11 items-center gap-2.5 transition-colors hover:text-ivory"
              >
                <Phone className="size-4" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappQuick}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "footer" })}
                className="inline-flex min-h-11 items-center gap-2.5 transition-colors hover:text-ivory"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("instagram_click", { source: "footer" })}
                className="inline-flex min-h-11 items-center gap-2.5 transition-colors hover:text-ivory"
              >
                <Instagram className="size-4" aria-hidden="true" />
                {contact.instagramHandle}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5">
              <MapPin className="size-4" aria-hidden="true" />
              {contact.city}
            </li>
          </ul>
        </div>
      </div>

      <div ref={bottomRef} className="shell mt-16 will-change-transform">
        <div className="hairline" />
        <div className="flex flex-col items-center justify-between gap-6 pt-6 sm:flex-row">
          <p className="text-xs text-ash">© {year} Meraki Studio. Todos los derechos reservados.</p>
          
          {/* Botón SiteLabs con efecto glassmorphism y latido */}
          <MadeWithLoveBadge />

          <button
            type="button"
            onClick={() => scrollToHash("#inicio")}
            className="inline-flex min-h-11 items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-ash transition-colors hover:text-ivory cursor-pointer"
          >
            Volver arriba
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LoadingScreen } from "@/components/LoadingScreen";
import { contact } from "@/data/siteContent";
import { useSmoothScroll } from "@/hooks/useSiteUx";

const TITLE = "Meraki Studio | Tatuajes personalizados en Puebla";
const DESCRIPTION =
  "Estudio de tatuajes en Puebla. Conoce el portafolio de Meraki Studio, comparte tu idea y solicita una cotización o cita directamente por WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Meraki Studio",
          description: DESCRIPTION,
          telephone: "+522227865062",
          areaServed: "Puebla, Puebla, México",
          sameAs: [contact.instagram],
          ...(contact.siteUrl ? { url: contact.siteUrl } : {}),
          ...(contact.ogImage ? { image: contact.ogImage } : {}),
        }),
      },
    ],
  }),
});

function Index() {
  useSmoothScroll();

  return (
    <>
      <LoadingScreen />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-primary-foreground"
      >
        Saltar al contenido principal
      </a>
      <CustomCursor />
      <Header />
      <main id="contenido">
        <Hero />
        <PhotoCarousel />
        <Intro />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

/**
 * MERAKI STUDIO — archivo central de contenido.
 * Edita aquí navegación, textos, servicios, portafolio, FAQ, testimonios y contacto.
 *
 * IMPORTANTE (imágenes): todas las fotografías actuales son PLACEHOLDERS editoriales.
 * Reemplázalas por fotografías reales del estudio y de la artista.
 * No se presentan como fotografías reales de la artista ni de clientes.
 */

import artistPortrait from "@/assets/artist-portrait.webp";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";
import work06 from "@/assets/work-06.jpg";
import work07 from "@/assets/work-07.jpg";
import studio01 from "@/assets/studio-01.jpg";
import studio02 from "@/assets/studio-02.jpg";

export const contact = {
  brand: "Meraki Studio",
  city: "Puebla, Puebla, México",
  phoneDisplay: "+52 222 786 5062",
  phoneShort: "222 786 5062",
  phoneHref: "tel:+522227865062",
  whatsappNumber: "522227865062",
  whatsappBase: "https://wa.me/522227865062",
  whatsappQuick:
    "https://wa.me/522227865062?text=Hola%2C%20Meraki%20Studio.%20Quiero%20informaci%C3%B3n%20para%20cotizar%20un%20tatuaje.",
  instagram: "https://www.instagram.com/meraki_ttt_/",
  instagramHandle: "@meraki_ttt_",
  /** Configurable: URL canónica e imagen social cuando exista dominio real. */
  siteUrl: "",
  ogImage: "",
};

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Estudio", href: "#estudio" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#dudas" },
];

export const hero = {
  eyebrow: "TATUAJES PERSONALIZADOS · PUEBLA, MÉXICO",
  title: "MERAKI STUDIO",
  support:
    "Arte que se queda contigo. Diseños personalizados, atención cercana y tatuajes creados para contar tu historia.",
  primaryCta: "Reservar cita",
  secondaryCta: "Ver portafolio",
  meta: ["Puebla, Puebla", "Citas por WhatsApp"],
  scrollHint: "DESCUBRE",
  /** PLACEHOLDER: reemplazar por el retrato real de la artista. */
  portrait: {
    src: artistPortrait,
    alt: "Retrato editorial en blanco y negro de una tatuadora en su estudio (imagen temporal de referencia)",
    width: 912,
    height: 1408,
  },
  layers: [
    { src: work01, alt: "" },
    { src: work05, alt: "" },
  ],
};

export type CarouselItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  area: string;
  format: "tall" | "wide" | "square";
};

export const carousel = {
  label: "TRABAJO RECIENTE",
  title: "Tinta con intención",
  text: "Cada pieza comienza con una idea y termina convertida en algo completamente personal.",
  items: [
    { src: work01, alt: "Tatuaje floral de línea fina en el antebrazo", width: 900, height: 1200, category: "Línea fina", area: "Antebrazo", format: "tall" },
    { src: work02, alt: "Tatuaje ornamental geométrico en el hombro", width: 1200, height: 900, category: "Ornamental", area: "Hombro", format: "wide" },
    { src: work03, alt: "Tatuaje pequeño simbólico en la muñeca", width: 1000, height: 1000, category: "Pequeños", area: "Muñeca", format: "square" },
    { src: work04, alt: "Lettering fino sobre la clavícula", width: 900, height: 1300, category: "Lettering", area: "Clavícula", format: "tall" },
    { src: work05, alt: "Proyecto botánico de gran formato en el brazo", width: 900, height: 1300, category: "Proyectos grandes", area: "Brazo", format: "tall" },
    { src: work06, alt: "Detalle del proceso de tatuaje con guantes y máquina", width: 1200, height: 900, category: "Proceso", area: "Estudio", format: "wide" },
    { src: work07, alt: "Tatuaje de línea fina de serpiente y luna en la pierna", width: 900, height: 1200, category: "Línea fina", area: "Pierna", format: "tall" },
    { src: studio01, alt: "Bocetos de tatuaje sobre papel", width: 900, height: 1200, category: "Bocetos", area: "Diseño", format: "tall" },
  ] satisfies CarouselItem[],
};

export const intro = {
  label: "MERAKI STUDIO",
  title: "Tu idea, convertida en una pieza que se queda contigo.",
  paragraphs: [
    "Meraki Studio es un espacio de tatuaje en Puebla enfocado en crear piezas personales, cuidadas y pensadas para cada cuerpo. El proceso comienza escuchando tu idea, entendiendo lo que quieres expresar y desarrollando un diseño con intención.",
    "No necesitas llegar con todo resuelto. Una referencia, una historia o una sensación pueden ser el punto de partida.",
  ],
  facts: ["DISEÑO PERSONALIZADO", "ATENCIÓN CON CITA", "PUEBLA, MÉXICO"],
};

export const services = {
  label: "SERVICIOS",
  title: "Una experiencia diseñada alrededor de tu idea",
  note: "¿No sabes en qué categoría entra tu idea? Cuéntamela y recibe orientación.",
  cta: "Solicitar presupuesto",
  items: [
    {
      number: "01",
      title: "Diseño personalizado",
      description:
        "Desarrollo de una propuesta visual basada en tus referencias, el estilo que buscas, la zona del cuerpo y el significado de la pieza.",
      image: studio01,
      imageAlt: "Bocetos de diseño de tatuaje sobre papel",
    },
    {
      number: "02",
      title: "Tatuajes pequeños",
      description:
        "Piezas sutiles, símbolos, lettering y composiciones de menor formato trabajadas con atención al detalle.",
      image: work03,
      imageAlt: "Tatuaje pequeño en la muñeca",
    },
    {
      number: "03",
      title: "Proyectos medianos y grandes",
      description:
        "Composiciones con mayor desarrollo visual, planeación de escala y adaptación a la anatomía.",
      image: work05,
      imageAlt: "Proyecto de tatuaje de gran formato en el brazo",
    },
    {
      number: "04",
      title: "Seguimiento y retoque",
      description:
        "Revisión del proceso de cicatrización y valoración del resultado final cuando sea necesario.",
      image: work06,
      imageAlt: "Detalle del proceso de tatuaje",
    },
  ],
};

export const about = {
  label: "EL ESTUDIO",
  title: "Un proceso cercano, desde la primera idea hasta la última línea.",
  paragraphs: [
    "Hola, soy la artista detrás de Meraki Studio. Mi objetivo es que cada persona se sienta escuchada, acompañada y segura durante todo el proceso.",
    "Cada tatuaje se trabaja como una colaboración: conversamos sobre la idea, revisamos referencias, adaptamos el diseño al cuerpo y cuidamos cada detalle antes de comenzar.",
    "No se trata únicamente de elegir una imagen. Se trata de crear una pieza con la que te identifiques y que conserve sentido con el paso del tiempo.",
  ],
  principles: [
    "Escucha y diseño personalizado.",
    "Cuidado en cada detalle.",
    "Atención con cita en Puebla.",
  ],
  cta: "Hablar sobre mi idea",
  /** PLACEHOLDER: reemplazar por fotografías reales del estudio y del proceso. */
  primaryImage: {
    src: artistPortrait,
    alt: "Tatuadora de pie en su estudio, retrato editorial en blanco y negro (imagen temporal)",
    width: 912,
    height: 1408,
  },
  secondaryImage: {
    src: studio02,
    alt: "Interior de un estudio de tatuaje minimalista (imagen temporal)",
    width: 1000,
    height: 800,
  },
};

export const portfolioCategories = [
  "Todos",
  "A color",
  "Lettering",
  "Pequeños",
  "Proyectos grandes",
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  area: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  date?: string;
  gallery?: { src: string; alt: string }[];
  span?: "wide" | "tall" | "normal";
};

export const portfolio = {
  label: "PORTAFOLIO",
  title: "Historias contadas en tinta",
  instagramNote: "Más trabajos y procesos en Instagram",
  instagramCta: "Ver @meraki_ttt_",
  projects: [
    {
      id: "p1",
      number: "01",
      title: "Botánica personal",
      category: "Proyectos grandes",
      area: "Brazo",
      description: "Composición botánica desarrollada en varias sesiones y adaptada a la anatomía del brazo.",
      image: work05,
      alt: "Tatuaje botánico de gran formato en el brazo",
      width: 900,
      height: 1300,
      span: "wide",
    },
    {
      id: "p2",
      number: "02",
      title: "Flor de línea fina",
      category: "Línea fina",
      area: "Antebrazo",
      description: "Trazo delicado y limpio con sombreado mínimo.",
      image: work01,
      alt: "Tatuaje floral de línea fina en el antebrazo",
      width: 900,
      height: 1200,
    },
    {
      id: "p3",
      number: "03",
      title: "Mandala ornamental",
      category: "Ornamental",
      area: "Hombro",
      description: "Pieza ornamental simétrica con puntillismo y negros sólidos.",
      image: work02,
      alt: "Tatuaje ornamental geométrico en el hombro",
      width: 1200,
      height: 900,
    },
    {
      id: "p4",
      number: "04",
      title: "Símbolo mínimo",
      category: "Pequeños",
      area: "Muñeca",
      description: "Pieza pequeña con significado personal, pensada para leerse a distancia corta.",
      image: work03,
      alt: "Tatuaje pequeño simbólico en la muñeca",
      width: 1000,
      height: 1000,
    },
    {
      id: "p5",
      number: "05",
      title: "Palabra escrita",
      category: "Lettering",
      area: "Clavícula",
      description: "Lettering caligráfico trazado a mano y ajustado a la curva del cuerpo.",
      image: work04,
      alt: "Lettering fino sobre la clavícula",
      width: 900,
      height: 1300,
      span: "tall",
    },
    {
      id: "p6",
      number: "06",
      title: "Serpiente y luna",
      category: "Línea fina",
      area: "Pierna",
      description: "Composición vertical de línea fina con negros planos.",
      image: work07,
      alt: "Tatuaje de línea fina de serpiente y luna en la pierna",
      width: 900,
      height: 1200,
    },
  ] satisfies Project[],
};

export type Testimonial = {
  name: string;
  quote: string;
  project: string;
  image?: string;
};

/**
 * Testimonios reales únicamente. La sección se oculta si el arreglo está vacío.
 * Ejemplo de estructura (contenido de DEMOSTRACIÓN, no publicar):
 * { name: "Nombre real", quote: "Cita real autorizada.", project: "Línea fina · Antebrazo" }
 */
export const testimonials: Testimonial[] = [];

export const testimonialsCopy = {
  label: "EXPERIENCIAS",
  title: "Lo que dicen quienes ya confiaron en Meraki",
};

export const faq = {
  label: "PREGUNTAS FRECUENTES",
  title: "Antes de reservar",
  items: [
    {
      q: "¿Cómo se calcula el precio de un tatuaje?",
      a: "El presupuesto depende del tamaño, nivel de detalle, zona del cuerpo, estilo y tiempo estimado de sesión. Envía tu idea y referencias para recibir una cotización personalizada.",
    },
    {
      q: "¿Puedo enviar imágenes de referencia?",
      a: "Sí. Las referencias ayudan a entender la composición, el estilo y los elementos que te gustan. Se utilizarán como punto de partida para desarrollar una propuesta personal.",
    },
    {
      q: "¿Cómo puedo reservar?",
      a: "Completa el formulario de esta página o escribe directamente por WhatsApp. La fecha se considera confirmada únicamente después de recibir respuesta y completar el proceso indicado por Meraki Studio.",
    },
    {
      q: "¿Qué información debo enviar para cotizar?",
      a: "Describe tu idea, tamaño aproximado, zona del cuerpo, estilo, disponibilidad y cualquier referencia visual que tengas.",
    },
    {
      q: "¿Dónde se encuentra Meraki Studio?",
      a: "Meraki Studio atiende en Puebla, Puebla, México. La información completa de ubicación se comparte durante la confirmación de la cita.",
    },
    {
      q: "¿Cómo debo prepararme para la sesión?",
      a: "Las recomendaciones específicas se compartirán al confirmar la cita. En general, es importante llegar descansado, haber comido y seguir las indicaciones proporcionadas por la artista.",
    },
    {
      q: "¿La solicitud enviada confirma automáticamente mi cita?",
      a: "No. El formulario organiza tu información y abre una conversación por WhatsApp. La cita queda confirmada únicamente cuando Meraki Studio responde y valida la disponibilidad.",
    },
  ],
};

export const booking = {
  label: "RESERVAS",
  title: "Cuéntame qué quieres llevar contigo",
  text: "Comparte los detalles de tu idea y abre una conversación directa por WhatsApp. Mientras más información incluyas, más precisa podrá ser la orientación inicial.",
  disclaimer: "Tu cita no queda confirmada hasta recibir respuesta de Meraki Studio.",
  submit: "Enviar solicitud por WhatsApp",
  sizes: ["Menos de 5 cm", "5 a 10 cm", "10 a 20 cm", "Más de 20 cm", "Aún no lo sé"],
  colors: ["Blanco y negro", "Color", "Aún no lo sé"],
};

export const finalCta = {
  label: "TU PRÓXIMA PIEZA",
  title: "¿Tienes una idea dando vueltas?",
  text: "Conversemos sobre ella y encontremos la mejor manera de convertirla en un tatuaje personal.",
  primary: "Reservar por WhatsApp",
  secondary: "Llamar ahora",
};

export const footer = {
  tagline: "Tatuajes personalizados en Puebla, México.",
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Estudio", href: "#estudio" },
    { label: "Preguntas frecuentes", href: "#faq" },
    { label: "Reservar", href: "#reservar" },
  ],
};

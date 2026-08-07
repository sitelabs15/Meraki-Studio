import { o as __toESM, r as __exportAll$1 } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CNa3IeB_.js
var router_CNa3IeB__exports = /* @__PURE__ */ __exportAll$1({
	_: () => __exportAll,
	a: () => contact,
	c: () => footer,
	d: () => nav,
	f: () => portfolio,
	g: () => testimonialsCopy,
	getRouter: () => getRouter,
	h: () => testimonials,
	i: () => carousel,
	l: () => hero,
	m: () => services,
	n: () => about,
	o: () => faq,
	p: () => portfolioCategories,
	r: () => booking,
	s: () => finalCta,
	t: () => router_exports,
	u: () => intro
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CK4Bv270.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 display-section",
					children: "Página no encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "El contenido que buscas no existe o cambió de lugar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "Volver al inicio"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-section",
					children: "Algo no cargó"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Intenta de nuevo o vuelve al inicio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-6 py-3 text-xs tracking-[0.18em] uppercase text-primary-foreground",
						children: "Reintentar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border px-6 py-3 text-xs tracking-[0.18em] uppercase",
						children: "Inicio"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#171717"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:site_name",
				content: "Meraki Studio"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "es_MX"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Italianno&family=Manrope:wght@300;400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es-MX",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var artist_portrait_default = "/assets/artist-portrait-DOMdBhPu.png";
var work_01_default = "/assets/work-01-DbkPAG7B.jpg";
var work_02_default = "/assets/work-02-Dwiu7rU6.jpg";
var work_03_default = "/assets/work-03-D-WvtcAO.jpg";
var work_04_default = "/assets/work-04-nu1ynnI_.jpg";
var work_05_default = "/assets/work-05-DDsEiuZI.jpg";
var work_06_default = "/assets/work-06-BdwUz4Qf.jpg";
var work_07_default = "/assets/work-07-DijVa0Xw.jpg";
var studio_01_default = "/assets/studio-01-8nfaJHTQ.jpg";
var studio_02_default = "/assets/studio-02-Bydw2ZmE.jpg";
/**
* MERAKI STUDIO — archivo central de contenido.
* Edita aquí navegación, textos, servicios, portafolio, FAQ, testimonios y contacto.
*
* IMPORTANTE (imágenes): todas las fotografías actuales son PLACEHOLDERS editoriales.
* Reemplázalas por fotografías reales del estudio y de la artista.
* No se presentan como fotografías reales de la artista ni de clientes.
*/
var contact = {
	brand: "Meraki Studio",
	city: "Puebla, Puebla, México",
	phoneDisplay: "+52 222 786 5062",
	phoneShort: "222 786 5062",
	phoneHref: "tel:+522227865062",
	whatsappNumber: "522227865062",
	whatsappBase: "https://wa.me/522227865062",
	whatsappQuick: "https://wa.me/522227865062?text=Hola%2C%20Meraki%20Studio.%20Quiero%20informaci%C3%B3n%20para%20cotizar%20un%20tatuaje.",
	instagram: "https://www.instagram.com/meraki_ttt_/",
	instagramHandle: "@meraki_ttt_",
	/** Configurable: URL canónica e imagen social cuando exista dominio real. */
	siteUrl: "",
	ogImage: ""
};
var nav = [
	{
		label: "Inicio",
		href: "#inicio"
	},
	{
		label: "Estudio",
		href: "#estudio"
	},
	{
		label: "Trabajos",
		href: "#trabajos"
	},
	{
		label: "Servicios",
		href: "#servicios"
	},
	{
		label: "FAQ",
		href: "#dudas"
	}
];
var hero = {
	eyebrow: "TATUAJES PERSONALIZADOS · PUEBLA, MÉXICO",
	title: "MERAKI STUDIO",
	support: "Arte que se queda contigo. Diseños personalizados, atención cercana y tatuajes creados para contar tu historia.",
	primaryCta: "Reservar cita",
	secondaryCta: "Ver portafolio",
	meta: ["Puebla, Puebla", "Citas por WhatsApp"],
	scrollHint: "DESCUBRE",
	/** PLACEHOLDER: reemplazar por el retrato real de la artista. */
	portrait: {
		src: artist_portrait_default,
		alt: "Retrato editorial en blanco y negro de una tatuadora en su estudio (imagen temporal de referencia)",
		width: 912,
		height: 1408
	},
	layers: [{
		src: work_01_default,
		alt: ""
	}, {
		src: work_05_default,
		alt: ""
	}]
};
var carousel = {
	label: "TRABAJO RECIENTE",
	title: "Tinta con intención",
	text: "Cada pieza comienza con una idea y termina convertida en algo completamente personal.",
	items: [
		{
			src: work_01_default,
			alt: "Tatuaje floral de línea fina en el antebrazo",
			width: 900,
			height: 1200,
			category: "Línea fina",
			area: "Antebrazo",
			format: "tall"
		},
		{
			src: work_02_default,
			alt: "Tatuaje ornamental geométrico en el hombro",
			width: 1200,
			height: 900,
			category: "Ornamental",
			area: "Hombro",
			format: "wide"
		},
		{
			src: work_03_default,
			alt: "Tatuaje pequeño simbólico en la muñeca",
			width: 1e3,
			height: 1e3,
			category: "Pequeños",
			area: "Muñeca",
			format: "square"
		},
		{
			src: work_04_default,
			alt: "Lettering fino sobre la clavícula",
			width: 900,
			height: 1300,
			category: "Lettering",
			area: "Clavícula",
			format: "tall"
		},
		{
			src: work_05_default,
			alt: "Proyecto botánico de gran formato en el brazo",
			width: 900,
			height: 1300,
			category: "Proyectos grandes",
			area: "Brazo",
			format: "tall"
		},
		{
			src: work_06_default,
			alt: "Detalle del proceso de tatuaje con guantes y máquina",
			width: 1200,
			height: 900,
			category: "Proceso",
			area: "Estudio",
			format: "wide"
		},
		{
			src: work_07_default,
			alt: "Tatuaje de línea fina de serpiente y luna en la pierna",
			width: 900,
			height: 1200,
			category: "Línea fina",
			area: "Pierna",
			format: "tall"
		},
		{
			src: studio_01_default,
			alt: "Bocetos de tatuaje sobre papel",
			width: 900,
			height: 1200,
			category: "Bocetos",
			area: "Diseño",
			format: "tall"
		}
	]
};
var intro = {
	label: "MERAKI STUDIO",
	title: "Tu idea, convertida en una pieza que se queda contigo.",
	paragraphs: ["Meraki Studio es un espacio de tatuaje en Puebla enfocado en crear piezas personales, cuidadas y pensadas para cada cuerpo. El proceso comienza escuchando tu idea, entendiendo lo que quieres expresar y desarrollando un diseño con intención.", "No necesitas llegar con todo resuelto. Una referencia, una historia o una sensación pueden ser el punto de partida."],
	facts: [
		"DISEÑO PERSONALIZADO",
		"ATENCIÓN CON CITA",
		"PUEBLA, MÉXICO"
	]
};
var services = {
	label: "SERVICIOS",
	title: "Una experiencia diseñada alrededor de tu idea",
	note: "¿No sabes en qué categoría entra tu idea? Cuéntamela y recibe orientación.",
	cta: "Solicitar presupuesto",
	items: [
		{
			number: "01",
			title: "Diseño personalizado",
			description: "Desarrollo de una propuesta visual basada en tus referencias, el estilo que buscas, la zona del cuerpo y el significado de la pieza.",
			image: studio_01_default,
			imageAlt: "Bocetos de diseño de tatuaje sobre papel"
		},
		{
			number: "02",
			title: "Tatuajes pequeños",
			description: "Piezas sutiles, símbolos, lettering y composiciones de menor formato trabajadas con atención al detalle.",
			image: work_03_default,
			imageAlt: "Tatuaje pequeño en la muñeca"
		},
		{
			number: "03",
			title: "Proyectos medianos y grandes",
			description: "Composiciones con mayor desarrollo visual, planeación de escala y adaptación a la anatomía.",
			image: work_05_default,
			imageAlt: "Proyecto de tatuaje de gran formato en el brazo"
		},
		{
			number: "04",
			title: "Seguimiento y retoque",
			description: "Revisión del proceso de cicatrización y valoración del resultado final cuando sea necesario.",
			image: work_06_default,
			imageAlt: "Detalle del proceso de tatuaje"
		}
	]
};
var about = {
	label: "EL ESTUDIO",
	title: "Un proceso cercano, desde la primera idea hasta la última línea.",
	paragraphs: [
		"Hola, soy la artista detrás de Meraki Studio. Mi objetivo es que cada persona se sienta escuchada, acompañada y segura durante todo el proceso.",
		"Cada tatuaje se trabaja como una colaboración: conversamos sobre la idea, revisamos referencias, adaptamos el diseño al cuerpo y cuidamos cada detalle antes de comenzar.",
		"No se trata únicamente de elegir una imagen. Se trata de crear una pieza con la que te identifiques y que conserve sentido con el paso del tiempo."
	],
	principles: [
		"Escucha y diseño personalizado.",
		"Cuidado en cada detalle.",
		"Atención con cita en Puebla."
	],
	cta: "Hablar sobre mi idea",
	/** PLACEHOLDER: reemplazar por fotografías reales del estudio y del proceso. */
	primaryImage: {
		src: artist_portrait_default,
		alt: "Tatuadora de pie en su estudio, retrato editorial en blanco y negro (imagen temporal)",
		width: 912,
		height: 1408
	},
	secondaryImage: {
		src: studio_02_default,
		alt: "Interior de un estudio de tatuaje minimalista (imagen temporal)",
		width: 1e3,
		height: 800
	}
};
var portfolioCategories = [
	"Todos",
	"A color",
	"Lettering",
	"Pequeños",
	"Proyectos grandes"
];
var portfolio = {
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
			image: work_05_default,
			alt: "Tatuaje botánico de gran formato en el brazo",
			width: 900,
			height: 1300,
			span: "wide"
		},
		{
			id: "p2",
			number: "02",
			title: "Flor de línea fina",
			category: "Línea fina",
			area: "Antebrazo",
			description: "Trazo delicado y limpio con sombreado mínimo.",
			image: work_01_default,
			alt: "Tatuaje floral de línea fina en el antebrazo",
			width: 900,
			height: 1200
		},
		{
			id: "p3",
			number: "03",
			title: "Mandala ornamental",
			category: "Ornamental",
			area: "Hombro",
			description: "Pieza ornamental simétrica con puntillismo y negros sólidos.",
			image: work_02_default,
			alt: "Tatuaje ornamental geométrico en el hombro",
			width: 1200,
			height: 900
		},
		{
			id: "p4",
			number: "04",
			title: "Símbolo mínimo",
			category: "Pequeños",
			area: "Muñeca",
			description: "Pieza pequeña con significado personal, pensada para leerse a distancia corta.",
			image: work_03_default,
			alt: "Tatuaje pequeño simbólico en la muñeca",
			width: 1e3,
			height: 1e3
		},
		{
			id: "p5",
			number: "05",
			title: "Palabra escrita",
			category: "Lettering",
			area: "Clavícula",
			description: "Lettering caligráfico trazado a mano y ajustado a la curva del cuerpo.",
			image: work_04_default,
			alt: "Lettering fino sobre la clavícula",
			width: 900,
			height: 1300,
			span: "tall"
		},
		{
			id: "p6",
			number: "06",
			title: "Serpiente y luna",
			category: "Línea fina",
			area: "Pierna",
			description: "Composición vertical de línea fina con negros planos.",
			image: work_07_default,
			alt: "Tatuaje de línea fina de serpiente y luna en la pierna",
			width: 900,
			height: 1200
		}
	]
};
/**
* Testimonios reales únicamente. La sección se oculta si el arreglo está vacío.
* Ejemplo de estructura (contenido de DEMOSTRACIÓN, no publicar):
* { name: "Nombre real", quote: "Cita real autorizada.", project: "Línea fina · Antebrazo" }
*/
var testimonials = [];
var testimonialsCopy = {
	label: "EXPERIENCIAS",
	title: "Lo que dicen quienes ya confiaron en Meraki"
};
var faq = {
	label: "PREGUNTAS FRECUENTES",
	title: "Antes de reservar",
	items: [
		{
			q: "¿Cómo se calcula el precio de un tatuaje?",
			a: "El presupuesto depende del tamaño, nivel de detalle, zona del cuerpo, estilo y tiempo estimado de sesión. Envía tu idea y referencias para recibir una cotización personalizada."
		},
		{
			q: "¿Puedo enviar imágenes de referencia?",
			a: "Sí. Las referencias ayudan a entender la composición, el estilo y los elementos que te gustan. Se utilizarán como punto de partida para desarrollar una propuesta personal."
		},
		{
			q: "¿Cómo puedo reservar?",
			a: "Completa el formulario de esta página o escribe directamente por WhatsApp. La fecha se considera confirmada únicamente después de recibir respuesta y completar el proceso indicado por Meraki Studio."
		},
		{
			q: "¿Qué información debo enviar para cotizar?",
			a: "Describe tu idea, tamaño aproximado, zona del cuerpo, estilo, disponibilidad y cualquier referencia visual que tengas."
		},
		{
			q: "¿Dónde se encuentra Meraki Studio?",
			a: "Meraki Studio atiende en Puebla, Puebla, México. La información completa de ubicación se comparte durante la confirmación de la cita."
		},
		{
			q: "¿Cómo debo prepararme para la sesión?",
			a: "Las recomendaciones específicas se compartirán al confirmar la cita. En general, es importante llegar descansado, haber comido y seguir las indicaciones proporcionadas por la artista."
		},
		{
			q: "¿La solicitud enviada confirma automáticamente mi cita?",
			a: "No. El formulario organiza tu información y abre una conversación por WhatsApp. La cita queda confirmada únicamente cuando Meraki Studio responde y valida la disponibilidad."
		}
	]
};
var booking = {
	label: "RESERVAS",
	title: "Cuéntame qué quieres llevar contigo",
	text: "Comparte los detalles de tu idea y abre una conversación directa por WhatsApp. Mientras más información incluyas, más precisa podrá ser la orientación inicial.",
	disclaimer: "Tu cita no queda confirmada hasta recibir respuesta de Meraki Studio.",
	submit: "Enviar solicitud por WhatsApp",
	sizes: [
		"Menos de 5 cm",
		"5 a 10 cm",
		"10 a 20 cm",
		"Más de 20 cm",
		"Aún no lo sé"
	],
	colors: [
		"Blanco y negro",
		"Color",
		"Aún no lo sé"
	]
};
var finalCta = {
	label: "TU PRÓXIMA PIEZA",
	title: "¿Tienes una idea dando vueltas?",
	text: "Conversemos sobre ella y encontremos la mejor manera de convertirla en un tatuaje personal.",
	primary: "Reservar por WhatsApp",
	secondary: "Llamar ahora"
};
var footer = {
	tagline: "Tatuajes personalizados en Puebla, México.",
	links: [
		{
			label: "Inicio",
			href: "#inicio"
		},
		{
			label: "Trabajos",
			href: "#trabajos"
		},
		{
			label: "Servicios",
			href: "#servicios"
		},
		{
			label: "Estudio",
			href: "#estudio"
		},
		{
			label: "Preguntas frecuentes",
			href: "#faq"
		},
		{
			label: "Reservar",
			href: "#reservar"
		}
	]
};
var $$splitComponentImporter = () => import("./routes-UOhnqnxo.mjs").then((n) => n.t);
var TITLE = "Meraki Studio | Tatuajes personalizados en Puebla";
var DESCRIPTION = "Estudio de tatuajes en Puebla. Conoce el portafolio de Meraki Studio, comparte tu idea y solicita una cotización o cita directamente por WhatsApp.";
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "Meraki Studio",
				description: DESCRIPTION,
				telephone: "+522227865062",
				areaServed: "Puebla, Puebla, México",
				sameAs: [contact.instagram],
				...contact.siteUrl ? { url: contact.siteUrl } : {},
				...contact.ogImage ? { image: contact.ogImage } : {}
			})
		}]
	})
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { testimonialsCopy as _, contact as a, footer as c, nav as d, portfolio as f, testimonials as g, services as h, carousel as i, hero as l, router_CNa3IeB__exports as m, about as n, faq as o, portfolioCategories as p, booking as r, finalCta as s, __exportAll as t, intro as u };

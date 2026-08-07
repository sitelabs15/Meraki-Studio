import { o as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as testimonialsCopy, a as contact, c as footer, d as nav, f as portfolio, g as testimonials, h as services, i as carousel, l as hero, n as about, o as faq, p as portfolioCategories, r as booking, s as finalCta, t as __exportAll, u as intro } from "./router-CNa3IeB_.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, r as useTransform, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as MessageCircle, c as Instagram, d as ArrowUpRight, f as ArrowRight, i as Minus, l as CalendarDays, m as ArrowDown, n as Plus, o as Menu, p as ArrowLeft, r as Phone, s as MapPin, t as X, u as ArrowUp } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-UOhnqnxo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Scroll suave con Lenis, desactivado con prefers-reduced-motion. */
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let lenis = null;
		let frame = 0;
		let cancelled = false;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (cancelled) return;
			const instance = new Lenis({
				duration: .9,
				smoothWheel: true
			});
			lenis = instance;
			window.__lenis = lenis;
			const raf = (time) => {
				instance.raf(time);
				frame = requestAnimationFrame(raf);
			};
			frame = requestAnimationFrame(raf);
		});
		return () => {
			cancelled = true;
			cancelAnimationFrame(frame);
			lenis?.destroy();
			delete window.__lenis;
		};
	}, []);
}
/** true cuando el puntero es fino y con hover (escritorio) y sin reduced-motion. */
function useFinePointer() {
	const [fine, setFine] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
		const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setFine(mq.matches && !rm.matches);
		update();
		mq.addEventListener("change", update);
		rm.addEventListener("change", update);
		return () => {
			mq.removeEventListener("change", update);
			rm.removeEventListener("change", update);
		};
	}, []);
	return fine;
}
/** Bloquea el scroll del body. */
function useBodyScrollLock(locked) {
	const previous = (0, import_react.useRef)("");
	(0, import_react.useEffect)(() => {
		if (!locked) return;
		previous.current = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous.current;
		};
	}, [locked]);
}
/** Desplaza rápidamente y de forma muy fluida hacia la sección requerida. */
function scrollToHash(hash) {
	const id = hash.replace("#", "");
	const el = document.getElementById(id);
	if (!el) return;
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		el.scrollIntoView({
			behavior: "auto",
			block: "start"
		});
		return;
	}
	const lenisInstance = window.__lenis;
	if (lenisInstance) lenisInstance.scrollTo(el, {
		duration: .75,
		offset: -20
	});
	else {
		const targetY = el.getBoundingClientRect().top + window.scrollY - 20;
		window.scrollTo({
			top: targetY,
			behavior: "smooth"
		});
	}
	if (window.history.replaceState) window.history.replaceState(null, "", hash);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className, small }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex flex-col leading-none", className),
		"aria-label": "Meraki Studio",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("signature text-ivory", small ? "text-[2rem]" : "text-[2.6rem]"),
			"aria-hidden": "true",
			children: "Meraki"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-ivory-dim uppercase", small ? "text-[0.5rem] tracking-[0.42em]" : "text-[0.58rem] tracking-[0.46em]"),
			"aria-hidden": "true",
			children: "Studio"
		})]
	});
}
function track(event, payload = {}) {
	if (typeof window === "undefined") return;
	const w = window;
	w.dataLayer = w.dataLayer ?? [];
	w.dataLayer.push({
		event,
		...payload
	});
}
function MobileMenu({ open, onClose, onNavigate, active }) {
	const panel = (0, import_react.useRef)(null);
	useBodyScrollLock(open);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const node = panel.current;
		const focusables = () => Array.from(node?.querySelectorAll("a[href], button:not([disabled])") ?? []);
		focusables()[0]?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") {
				onClose();
				return;
			}
			if (e.key !== "Tab") return;
			const items = focusables();
			if (items.length === 0) return;
			const first = items[0];
			const last = items[items.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Menú de navegación",
		ref: panel,
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .28 },
		className: "fixed inset-0 z-[60] grain bg-surface-deep lg:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell flex h-[72px] items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { small: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Cerrar menú",
					className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-ivory",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Navegación móvil",
				className: "shell mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					initial: {
						opacity: 0,
						y: 18
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .06 + i * .06,
						duration: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						"aria-current": active === item.href ? "page" : void 0,
						onClick: (e) => {
							e.preventDefault();
							onNavigate(item.href);
						},
						className: "block py-5 font-display text-4xl font-light text-ivory",
						children: item.label
					})
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					initial: {
						opacity: 0,
						y: 18
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .06 + nav.length * .06,
						duration: .4
					},
					className: "border-y border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#reservar",
						onClick: (e) => {
							e.preventDefault();
							onNavigate("#reservar");
						},
						className: "block py-5 font-display text-4xl font-light text-ivory",
						children: "Reservar"
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell mt-10 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: contact.phoneHref,
						onClick: () => track("phone_click", { source: "mobile_menu" }),
						className: "flex min-h-11 items-center gap-3 text-sm text-ivory-dim",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": "true"
						}), contact.phoneDisplay]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: contact.instagram,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => track("instagram_click", { source: "mobile_menu" }),
						className: "flex min-h-11 items-center gap-3 text-sm text-ivory-dim",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
							className: "size-4",
							"aria-hidden": "true"
						}), contact.instagramHandle]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: contact.whatsappQuick,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => track("whatsapp_click", { source: "mobile_menu" }),
						className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Escribir por WhatsApp"]
					})
				]
			})
		]
	}) : null });
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#inicio");
	const fine = useFinePointer();
	const [magnet, setMagnet] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const navHrefs = nav.map((n) => n.href);
		const checkActive = () => {
			const scrollPosition = window.scrollY + window.innerHeight * .35;
			let currentActive = "#inicio";
			for (const href of navHrefs) {
				const targetId = href.replace("#", "");
				const el = document.getElementById(targetId);
				if (el) {
					if (scrollPosition >= el.offsetTop - 60) currentActive = href;
				}
			}
			setActive(currentActive);
		};
		window.addEventListener("scroll", checkActive, { passive: true });
		checkActive();
		return () => window.removeEventListener("scroll", checkActive);
	}, []);
	const go = (href) => {
		setActive(href);
		scrollToHash(href);
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-3 lg:top-4 z-[100] flex justify-center px-4 transition-all duration-500",
		style: { transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex h-[62px] w-full max-w-5xl items-center justify-between gap-4 rounded-full px-5 lg:h-[70px] lg:px-8 transition-all duration-500", scrolled ? "border border-ash/40 bg-[#1e1e22]/90 backdrop-blur-xl shadow-2xl shadow-black/60" : "border border-border/40 bg-background/60 backdrop-blur-md"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					onClick: (e) => {
						e.preventDefault();
						go("#inicio");
					},
					className: "shrink-0",
					"aria-label": "Meraki Studio, ir al inicio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { small: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Navegación principal",
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-8",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							"aria-current": active === item.href ? "page" : void 0,
							onClick: (e) => {
								e.preventDefault();
								go(item.href);
							},
							className: cn("relative py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-200", active === item.href ? "text-ivory font-semibold" : "text-ash hover:text-ivory"),
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute -bottom-1 left-0 h-[2px] bg-ivory rounded-full transition-all duration-300 ease-out", active === item.href ? "w-full opacity-100" : "w-0 opacity-0"),
								"aria-hidden": "true"
							})]
						}) }, item.href))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: "#reservar",
						onClick: (e) => {
							e.preventDefault();
							track("hero_booking_click", { source: "header" });
							go("#reservar");
						},
						onMouseMove: (e) => {
							if (!fine) return;
							const r = e.currentTarget.getBoundingClientRect();
							setMagnet({
								x: (e.clientX - (r.left + r.width / 2)) * .18,
								y: (e.clientY - (r.top + r.height / 2)) * .3
							});
						},
						onMouseLeave: () => setMagnet({
							x: 0,
							y: 0
						}),
						animate: fine ? magnet : {
							x: 0,
							y: 0
						},
						transition: {
							type: "spring",
							stiffness: 240,
							damping: 20
						},
						className: "hidden min-h-10 items-center gap-2 rounded-full border border-border px-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-primary hover:text-primary-foreground sm:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-3.5",
							"aria-hidden": "true"
						}), "Reservar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(true),
						"aria-label": "Abrir menú",
						"aria-expanded": open,
						className: "inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-border text-ivory lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-4",
							"aria-hidden": "true"
						})
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, {
		open,
		onClose: () => setOpen(false),
		onNavigate: go,
		active
	})] });
}
/**
* Botanical Fine-Line Floral Vine for Left Hero / Section Background
*/
function FloralVineLeft({ className = "" }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 220 400",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "0.75",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `pointer-events-none text-ivory select-none ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
			initial: reduce ? false : {
				opacity: 0,
				scale: .95
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			transition: {
				duration: 1.5,
				delay: .3
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 30 390 C 80 300, 40 200, 140 100 C 180 60, 190 20, 160 10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					opacity: "0.9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "160",
							cy: "25",
							r: "8",
							strokeWidth: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 160 17 Q 150 5 160 0 Q 170 5 160 17 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 168 25 Q 180 25 185 20 Q 180 30 168 25 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 160 33 Q 160 45 165 48 Q 155 45 160 33 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 152 25 Q 140 25 135 20 Q 140 30 152 25 Z",
							strokeWidth: "0.6"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 140 100 C 120 70, 90 80, 105 105 C 120 130, 140 100, 140 100 Z",
					strokeWidth: "0.6",
					fill: "rgba(242,240,234,0.03)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 115 90 Q 130 98 140 100",
					strokeWidth: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 125 125 C 155 125, 170 145, 150 160 C 130 175, 125 125, 125 125 Z",
					strokeWidth: "0.6",
					fill: "rgba(242,240,234,0.03)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 135 140 Q 145 135 125 125",
					strokeWidth: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(75, 185)",
					opacity: "0.95",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 0 0 C -12 -15, 12 -15, 0 0 Z",
							fill: "rgba(242,240,234,0.05)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 0 0 C -20 -8, -15 20, 0 0 Z" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 0 0 C 20 -8, 15 20, 0 0 Z" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M -15 5 C -30 -10, -25 -30, 0 -22 C 25 -30, 30 -10, 15 5 C 25 25, -25 25, -15 5 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "0",
							cy: "-6",
							r: "3",
							strokeWidth: "0.4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M -3 -6 Q 0 -12 3 -6",
							strokeWidth: "0.4"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 50 260 C 10 240, 0 280, 35 295 C 70 310, 50 260, 50 260 Z",
					strokeWidth: "0.6",
					fill: "rgba(242,240,234,0.03)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 25 270 Q 40 275 50 260",
					strokeWidth: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 70 320 C 110 320, 120 360, 85 365 C 50 370, 70 320, 70 320 Z",
					strokeWidth: "0.6",
					fill: "rgba(242,240,234,0.03)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 140 100 Q 180 120 190 90",
					strokeWidth: "0.4",
					strokeDasharray: "2 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "190",
					cy: "90",
					r: "1.5",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 75 185 Q 120 210 135 195",
					strokeWidth: "0.4",
					strokeDasharray: "2 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "135",
					cy: "195",
					r: "1.5",
					fill: "currentColor"
				})
			]
		})
	});
}
/**
* Fine-Line Botanical Rose & Petals for Right Hero / Section Background
*/
function FloralRoseRight({ className = "" }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 240 420",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "0.75",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `pointer-events-none text-ivory select-none ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
			initial: reduce ? false : {
				opacity: 0,
				scale: .95
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			transition: {
				duration: 1.6,
				delay: .4
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 200 10 C 140 100, 180 220, 80 320 C 40 360, 20 400, 30 410" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(180, 70)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "0",
							cy: "0",
							r: "18",
							strokeWidth: "0.5",
							strokeDasharray: "4 2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 0 -22 C -15 -35, 15 -35, 0 -22 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 22 0 C 35 -15, 35 15, 22 0 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 0 22 C 15 35, -15 35, 0 22 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M -22 0 C -35 15, -35 -15, -22 0 Z",
							strokeWidth: "0.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 15 -15 C 30 -25, 25 -30, 15 -15 Z",
							strokeWidth: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 15 15 C 30 25, 25 30, 15 15 Z",
							strokeWidth: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M -15 15 C -30 25, -25 30, -15 15 Z",
							strokeWidth: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M -15 -15 C -30 -25, -25 -30, -15 -15 Z",
							strokeWidth: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "0",
							cy: "0",
							r: "6",
							strokeWidth: "0.4",
							fill: "rgba(242,240,234,0.08)"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 165 140 C 205 130, 220 170, 175 180 C 130 190, 165 140, 165 140 Z",
					strokeWidth: "0.6",
					fill: "rgba(242,240,234,0.03)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 185 155 Q 170 170 165 140",
					strokeWidth: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 140 210 C 90 190, 80 230, 125 245 C 170 260, 140 210, 140 210 Z",
					strokeWidth: "0.6",
					fill: "rgba(242,240,234,0.03)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 110 220 Q 130 230 140 210",
					strokeWidth: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(80, 320)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 0 0 Q -25 -20 -15 -45 Q 10 -35 0 0 Z",
						strokeWidth: "0.6",
						fill: "rgba(242,240,234,0.04)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M -5 -40 Q 5 -55 15 -40",
						strokeWidth: "0.5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					opacity: "0.75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 50 120 C 40 110, 45 95, 60 100 C 75 105, 60 130, 50 120 Z",
							strokeWidth: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 90 60 C 85 50, 95 40, 105 48 C 115 56, 100 70, 90 60 Z",
							strokeWidth: "0.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 30 250 C 20 245, 25 235, 35 240 C 45 245, 40 258, 30 250 Z",
							strokeWidth: "0.4"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 180 70 A 110 110 0 0 1 80 320",
					strokeWidth: "0.4",
					strokeDasharray: "3 4"
				})
			]
		})
	});
}
/**
* Botanical Flower Branch overlay for About / Services sections
*/
function FloralBranchOverlay({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 300 300",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "0.6",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `pointer-events-none text-ivory select-none ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: "translate(150, 150)",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "0",
					cy: "0",
					r: "110",
					strokeWidth: "0.35",
					strokeDasharray: "3 5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "0",
					cy: "0",
					r: "85",
					strokeWidth: "0.35"
				}),
				[
					0,
					45,
					90,
					135,
					180,
					225,
					270,
					315
				].map((angle) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: `rotate(${angle})`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 0 -85 C -25 -50, -15 -20, 0 0 C 15 -20, 25 -50, 0 -85 Z",
							strokeWidth: "0.5",
							fill: "rgba(242,240,234,0.02)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 0 -85 Q 0 -42 0 0",
							strokeWidth: "0.3",
							strokeDasharray: "2 2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "0",
							cy: "-60",
							r: "1.5",
							fill: "currentColor",
							opacity: "0.6"
						})
					]
				}, angle)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "0",
					cy: "0",
					r: "28",
					strokeWidth: "0.5",
					fill: "rgba(242,240,234,0.04)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "0",
					cy: "0",
					r: "14",
					strokeWidth: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "0",
					cy: "0",
					r: "4",
					fill: "currentColor",
					opacity: "0.8"
				})
			]
		})
	});
}
/**
* Animated Fine-Line Rose SVG that continuously draws and undraws itself in an organic loop
*/
function AnimatedFlowerDrawing({ className = "" }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 200 240",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.25",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `select-none ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 100 230 C 95 180, 110 140, 100 90",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 104 170 C 135 160, 145 185, 120 195 C 105 200, 104 170, 104 170 Z",
				fill: "rgba(242,240,234,0.03)",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 98 140 C 65 130, 55 155, 80 165 C 95 170, 98 140, 98 140 Z",
				fill: "rgba(242,240,234,0.03)",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 100 90 C 70 85, 55 60, 75 40 C 90 25, 110 25, 125 40 C 145 60, 130 85, 100 90 Z",
				strokeWidth: "1.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 100 82 C 82 78, 70 58, 85 45 C 95 35, 105 35, 115 45 C 130 58, 118 78, 100 82 Z",
				strokeWidth: "0.95",
				opacity: "0.95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 100 70 C 92 68, 88 56, 96 48 C 102 42, 108 46, 104 54 C 100 60, 96 56, 98 52",
				strokeWidth: "0.85",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 125 40 C 150 25, 165 40, 155 55",
				strokeWidth: "0.75",
				strokeDasharray: "2 3",
				opacity: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 75 40 C 50 25, 35 40, 45 55",
				strokeWidth: "0.75",
				strokeDasharray: "2 3",
				opacity: "0.75"
			})
		]
	});
	const loopDuration = 6.5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 200 240",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.25",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `select-none ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 100 230 C 95 180, 110 140, 100 90",
				animate: {
					pathLength: [
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						.9,
						.9,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.32,
						.62,
						.92,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 104 170 C 135 160, 145 185, 120 195 C 105 200, 104 170, 104 170 Z",
				fill: "rgba(242,240,234,0.03)",
				animate: {
					pathLength: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.85,
						.85,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.08,
						.36,
						.6,
						.88,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 98 140 C 65 130, 55 155, 80 165 C 95 170, 98 140, 98 140 Z",
				fill: "rgba(242,240,234,0.03)",
				animate: {
					pathLength: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.85,
						.85,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.12,
						.4,
						.58,
						.84,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 100 90 C 70 85, 55 60, 75 40 C 90 25, 110 25, 125 40 C 145 60, 130 85, 100 90 Z",
				strokeWidth: "1.1",
				animate: {
					pathLength: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						1,
						1,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.16,
						.44,
						.56,
						.8,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 100 82 C 82 78, 70 58, 85 45 C 95 35, 105 35, 115 45 C 130 58, 118 78, 100 82 Z",
				strokeWidth: "0.95",
				animate: {
					pathLength: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.95,
						.95,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.2,
						.48,
						.54,
						.76,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 100 70 C 92 68, 88 56, 96 48 C 102 42, 108 46, 104 54 C 100 60, 96 56, 98 52",
				strokeWidth: "0.85",
				animate: {
					pathLength: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.9,
						.9,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.24,
						.52,
						.52,
						.72,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 125 40 C 150 25, 165 40, 155 55",
				strokeWidth: "0.75",
				strokeDasharray: "2 3",
				animate: {
					pathLength: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.75,
						.75,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.28,
						.54,
						.54,
						.68,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 75 40 C 50 25, 35 40, 45 55",
				strokeWidth: "0.75",
				strokeDasharray: "2 3",
				animate: {
					pathLength: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.75,
						.75,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.28,
						.54,
						.54,
						.68,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "155",
				cy: "55",
				r: "2",
				fill: "currentColor",
				animate: {
					scale: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.9,
						.9,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.32,
						.54,
						.54,
						.65,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "45",
				cy: "55",
				r: "2",
				fill: "currentColor",
				animate: {
					scale: [
						0,
						0,
						1,
						1,
						0,
						0
					],
					opacity: [
						0,
						0,
						.9,
						.9,
						0,
						0
					]
				},
				transition: {
					duration: loopDuration,
					repeat: Infinity,
					ease: "easeInOut",
					times: [
						0,
						.32,
						.54,
						.54,
						.65,
						1
					]
				}
			})
		] })
	});
}
var dark_roses_default = "/assets/dark-roses-U0nQ5qX5.png";
var green_leaves_default = "/assets/green-leaves-CTWJ2Bv0.png";
var EASE = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	const reduce = useReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -160]);
	const titleOpacity = useTransform(scrollYProgress, [0, .75], [1, 0]);
	const archY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -45]);
	const archScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.02]);
	const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -95]);
	const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.06]);
	const plantY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
	const layerA = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
	const layerB = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
	const step = (d) => reduce ? { duration: 0 } : {
		duration: .75,
		delay: d,
		ease: EASE
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		ref,
		className: "grain relative flex min-h-[95svh] lg:min-h-[100svh] flex-col justify-between overflow-hidden bg-background pt-[76px] lg:pt-[88px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 z-0 opacity-50 sm:opacity-65",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: dark_roses_default,
						alt: "",
						"aria-hidden": "true",
						className: "size-full object-cover object-center contrast-[1.15] brightness-[0.7]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/90" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: layerA },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralVineLeft, { className: "absolute -left-6 top-[15%] z-[1] h-[480px] w-[280px] opacity-30 sm:left-2 lg:left-[4%] lg:top-[12%] lg:h-[620px] lg:w-[350px] lg:opacity-35" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: layerB },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralRoseRight, { className: "absolute -right-8 top-[22%] z-[1] h-[500px] w-[300px] opacity-25 sm:right-2 lg:right-[3%] lg:top-[16%] lg:h-[640px] lg:w-[360px] lg:opacity-30" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y: titleY,
					opacity: titleOpacity
				},
				className: "pointer-events-none absolute inset-x-0 top-[18%] sm:top-[15%] lg:top-[13%] z-[8] text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "select-none text-ivory leading-none flex flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8 opacity-95 whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "signature text-ivory text-[clamp(4.23rem,13.3vw,13.9rem)] filter drop-shadow-2xl",
						children: "Meraki"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ivory-dim font-display uppercase tracking-[0.25em] text-[clamp(2.25rem,7.1vw,7.45rem)] font-light",
						children: "STUDIO"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: plantY },
				initial: reduce ? false : {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: step(.4),
				className: "pointer-events-none absolute -bottom-16 sm:-bottom-24 lg:-bottom-28 left-1/2 z-[5] -translate-x-1/2 w-[165vw] max-w-[1380px] sm:w-[130vw] lg:w-[92vw] lg:max-w-[1540px] xl:max-w-[1720px] flex items-end justify-center translate-y-12 lg:translate-y-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: green_leaves_default,
					alt: "",
					"aria-hidden": "true",
					className: "w-full h-auto object-contain object-bottom filter drop-shadow-2xl brightness-[0.9] contrast-[1.1]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 left-1/2 z-[10] -translate-x-1/2 w-[85vw] max-w-[480px] sm:w-[58vw] lg:w-[32vw] lg:max-w-[520px] xl:max-w-[580px] flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: {
						y: archY,
						scale: archScale
					},
					initial: reduce ? false : {
						clipPath: "inset(100% 0% 0% 0%)",
						opacity: 0
					},
					animate: {
						clipPath: "inset(0% 0% 0% 0%)",
						opacity: 1
					},
					transition: reduce ? { duration: 0 } : {
						duration: 1,
						delay: .35,
						ease: EASE
					},
					className: "relative w-full flex flex-col items-center justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "arch-mask relative h-[66vh] max-h-[600px] sm:h-[76vh] sm:max-h-[720px] lg:h-[84vh] lg:max-h-[840px] w-full overflow-hidden border border-ash/60 bg-[#242427]/85 backdrop-blur-md shadow-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							style: {
								y: portraitY,
								scale: portraitScale
							},
							src: hero.portrait.src,
							alt: hero.portrait.alt,
							width: hero.portrait.width,
							height: hero.portrait.height,
							fetchPriority: "high",
							decoding: "async",
							className: "size-full object-cover object-[50%_0%] filter drop-shadow-xl contrast-[1.05]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative z-20 flex flex-1 flex-col justify-between pb-1 pt-3 lg:pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: reduce ? false : {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: step(.1),
						className: "label-xs text-center relative z-20 tracking-[0.24em] text-ash",
						children: hero.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-2 flex min-h-[65vh] lg:min-h-[75vh] flex-1 items-end justify-between pb-0 mb-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-20 grid w-full items-end gap-8 lg:grid-cols-12 lg:gap-6 pb-0 mb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: reduce ? false : {
										opacity: 0,
										x: -30
									},
									animate: {
										opacity: 1,
										x: 0
									},
									transition: step(.5),
									className: "flex flex-col gap-6 lg:col-span-4 lg:pl-2 self-end mb-0 pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-md text-base leading-relaxed text-ivory-dim/85 sm:text-lg lg:max-w-[21rem]",
										children: hero.support
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3.5 sm:flex-row sm:items-center [&>a]:shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#reservar",
											onClick: (e) => {
												e.preventDefault();
												track("hero_booking_click", { source: "hero" });
												scrollToHash("#reservar");
											},
											className: "inline-flex whitespace-nowrap min-h-12 items-center justify-center rounded-full bg-primary px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.02]",
											children: hero.primaryCta
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#trabajos",
											onClick: (e) => {
												e.preventDefault();
												scrollToHash("#trabajos");
											},
											className: "inline-flex whitespace-nowrap min-h-12 items-center justify-center rounded-full border border-border/80 px-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-surface/60",
											children: hero.secondaryCta
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block lg:col-span-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: reduce ? false : {
										opacity: 0,
										x: 30
									},
									animate: {
										opacity: 1,
										x: 0
									},
									transition: step(.6),
									className: "flex flex-col gap-3.5 lg:col-span-4 lg:items-end lg:text-right self-end mb-0 pb-1",
									children: [hero.meta.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-xs tracking-[0.2em] text-ivory-dim/80",
										children: m
									}, m)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: contact.instagram,
										target: "_blank",
										rel: "noopener noreferrer",
										onClick: () => track("instagram_click", { source: "hero" }),
										className: "text-[0.72rem] uppercase tracking-[0.2em] text-ivory underline decoration-border underline-offset-4 transition-colors hover:decoration-ivory",
										children: contact.instagramHandle
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: "#trabajos",
						onClick: (e) => {
							e.preventDefault();
							scrollToHash("#trabajos");
						},
						initial: reduce ? false : { opacity: 0 },
						animate: { opacity: 1 },
						transition: step(.8),
						className: "relative z-30 mt-1 flex items-center justify-center gap-2.5 self-center rounded-full bg-background/60 px-5 py-1 backdrop-blur-sm border border-border/30 transition-opacity hover:opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-xs tracking-[0.22em] text-ash",
							children: hero.scrollHint
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							animate: reduce ? {} : { y: [
								0,
								5,
								0
							] },
							transition: {
								duration: 2.2,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "text-ash",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
								className: "size-3.5",
								"aria-hidden": "true"
							})
						})]
					})
				]
			})
		]
	});
}
var IMG_20260804_WA0032_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0032_default$1 });
var IMG_20260804_WA0032_default$1 = "/assets/IMG-20260804-WA0032-DXgRvhcQ.jpg";
var IMG_20260804_WA0033_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0033_default$1 });
var IMG_20260804_WA0033_default$1 = "/assets/IMG-20260804-WA0033-CZw-wWcK.jpg";
var IMG_20260804_WA0034_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0034_default$1 });
var IMG_20260804_WA0034_default$1 = "/assets/IMG-20260804-WA0034-VaGYRCvY.jpg";
var IMG_20260804_WA0035_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0035_default$1 });
var IMG_20260804_WA0035_default$1 = "/assets/IMG-20260804-WA0035-BsVtTCta.jpg";
var IMG_20260804_WA0036_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0036_default$2 });
var IMG_20260804_WA0036_default$2 = "/assets/IMG-20260804-WA0036-hA1I86IV.jpg";
var IMG_20260804_WA0037_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0037_default$1 });
var IMG_20260804_WA0037_default$1 = "/assets/IMG-20260804-WA0037-qr4zJXHX.jpg";
var IMG_20260804_WA0038_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0038_default$1 });
var IMG_20260804_WA0038_default$1 = "/assets/IMG-20260804-WA0038-DlKgDy-5.jpg";
var IMG_20260804_WA0039_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0039_default$1 });
var IMG_20260804_WA0039_default$1 = "/assets/IMG-20260804-WA0039-CEIq7fca.jpg";
var IMG_20260804_WA0040_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0040_default });
var IMG_20260804_WA0040_default = "/assets/IMG-20260804-WA0040-wEhZ2_XQ.jpg";
var IMG_20260804_WA0041_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0041_default$1 });
var IMG_20260804_WA0041_default$1 = "/assets/IMG-20260804-WA0041-BkvYVvmU.jpg";
var IMG_20260804_WA0042_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0042_default });
var IMG_20260804_WA0042_default = "/assets/IMG-20260804-WA0042-CPLUoVUX.jpg";
var IMG_20260804_WA0043_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0043_default });
var IMG_20260804_WA0043_default = "/assets/IMG-20260804-WA0043-CSq58cVU.jpg";
var IMG_20260804_WA0044_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0044_default$1 });
var IMG_20260804_WA0044_default$1 = "/assets/IMG-20260804-WA0044-BtVvMZGW.jpg";
var IMG_20260804_WA0045_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0045_default$2 });
var IMG_20260804_WA0045_default$2 = "/assets/IMG-20260804-WA0045-CBi6Xkey.jpg";
var IMG_20260804_WA0046_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0046_default$1 });
var IMG_20260804_WA0046_default$1 = "/assets/IMG-20260804-WA0046-Dhl6eHWt.jpg";
var IMG_20260804_WA0047_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0047_default$1 });
var IMG_20260804_WA0047_default$1 = "/assets/IMG-20260804-WA0047-BhGJUWlD.jpg";
var IMG_20260804_WA0048_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0048_default$1 });
var IMG_20260804_WA0048_default$1 = "/assets/IMG-20260804-WA0048-CXPjkeAn.jpg";
var IMG_20260804_WA0049_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0049_default$1 });
var IMG_20260804_WA0049_default$1 = "/assets/IMG-20260804-WA0049-JBij7Mzu.jpg";
var IMG_20260804_WA0050_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0050_default$1 });
var IMG_20260804_WA0050_default$1 = "/assets/IMG-20260804-WA0050-BenVSc5w.jpg";
var IMG_20260804_WA0051_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0051_default$1 });
var IMG_20260804_WA0051_default$1 = "/assets/IMG-20260804-WA0051-sL-RQkC8.jpg";
var IMG_20260804_WA0052_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0052_default$2 });
var IMG_20260804_WA0052_default$2 = "/assets/IMG-20260804-WA0052-C5HCzeY5.jpg";
var IMG_20260804_WA0053_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0053_default$2 });
var IMG_20260804_WA0053_default$2 = "/assets/IMG-20260804-WA0053-CZVxXmW0.jpg";
var IMG_20260804_WA0054_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0054_default$1 });
var IMG_20260804_WA0054_default$1 = "/assets/IMG-20260804-WA0054-DKyrWiKI.jpg";
var IMG_20260804_WA0055_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0055_default$1 });
var IMG_20260804_WA0055_default$1 = "/assets/IMG-20260804-WA0055-BZgcDwda.jpg";
var IMG_20260804_WA0056_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0056_default$2 });
var IMG_20260804_WA0056_default$2 = "/assets/IMG-20260804-WA0056-JDGvHqiY.jpg";
var IMG_20260804_WA0057_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0057_default$1 });
var IMG_20260804_WA0057_default$1 = "/assets/IMG-20260804-WA0057-CI8MsEGT.jpg";
var IMG_20260804_WA0058_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0058_default$1 });
var IMG_20260804_WA0058_default$1 = "/assets/IMG-20260804-WA0058-C0QpnegI.jpg";
var IMG_20260804_WA0059_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0059_default$2 });
var IMG_20260804_WA0059_default$2 = "/assets/IMG-20260804-WA0059-lXStuEuv.jpg";
var IMG_20260804_WA0060_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0060_default$2 });
var IMG_20260804_WA0060_default$2 = "/assets/IMG-20260804-WA0060-DTgzRtRY.jpg";
var IMG_20260804_WA0061_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0061_default$2 });
var IMG_20260804_WA0061_default$2 = "/assets/IMG-20260804-WA0061-GXncBMoA.jpg";
var IMG_20260804_WA0062_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0062_default$2 });
var IMG_20260804_WA0062_default$2 = "/assets/IMG-20260804-WA0062-CoulJvwM.jpg";
var IMG_20260804_WA0063_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0063_default$2 });
var IMG_20260804_WA0063_default$2 = "/assets/IMG-20260804-WA0063-BPGNG9t9.jpg";
var IMG_20260804_WA0065_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0065_default$1 });
var IMG_20260804_WA0065_default$1 = "/assets/IMG-20260804-WA0065-CG4n4zib.jpg";
var IMG_20260804_WA0066_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0066_default$1 });
var IMG_20260804_WA0066_default$1 = "/assets/IMG-20260804-WA0066-3cKWYo8G.jpg";
var IMG_20260804_WA0067_exports$3 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0067_default$3 });
var IMG_20260804_WA0067_default$3 = "/assets/IMG-20260804-WA0067-DF4HmlvJ.jpg";
var IMG_20260804_WA0068_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0068_default$2 });
var IMG_20260804_WA0068_default$2 = "/assets/IMG-20260804-WA0068-oCklpjvj.jpg";
var IMG_20260804_WA0069_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0069_default$1 });
var IMG_20260804_WA0069_default$1 = "/assets/IMG-20260804-WA0069-BXiNqxnN.jpg";
var IMG_20260804_WA0070_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0070_default$1 });
var IMG_20260804_WA0070_default$1 = "/assets/IMG-20260804-WA0070-DXkJE5AF.jpg";
var IMG_20260804_WA0071_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0071_default$1 });
var IMG_20260804_WA0071_default$1 = "/assets/IMG-20260804-WA0071-YjMSzgKN.jpg";
var IMG_20260804_WA0072_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0072_default$2 });
var IMG_20260804_WA0072_default$2 = "/assets/IMG-20260804-WA0072-DWYyRM2S.jpg";
var IMG_20260804_WA0073_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0073_default$1 });
var IMG_20260804_WA0073_default$1 = "/assets/IMG-20260804-WA0073-BBC1cfJn.jpg";
var MAX_VISIBLE = 7;
var HALF = 3;
var FAN_POSITIONS = [
	{
		rot: -21,
		scale: .7756,
		x: -30,
		y: 7.3,
		zIndex: 1
	},
	{
		rot: -14,
		scale: .8498,
		x: -22,
		y: 4,
		zIndex: 2
	},
	{
		rot: -7,
		scale: .9346,
		x: -11,
		y: 1.3,
		zIndex: 3
	},
	{
		rot: 0,
		scale: 1,
		x: 0,
		y: 0,
		zIndex: 10
	},
	{
		rot: 7,
		scale: .9346,
		x: 11,
		y: 1.3,
		zIndex: 3
	},
	{
		rot: 14,
		scale: .8498,
		x: 22,
		y: 4,
		zIndex: 2
	},
	{
		rot: 21,
		scale: .7756,
		x: 30,
		y: 7.3,
		zIndex: 1
	}
];
function getResponsiveMultiplier(width) {
	if (width < 480) return .28;
	if (width < 640) return .38;
	if (width < 768) return .5;
	if (width < 1024) return .75;
	return 1;
}
/**
* Returns a multiplier (0..1] that scales y-offsets and entry animation
* distances when the viewport is too short for the ideal layout height.
*/
function getHeightMultiplier(width) {
	let idealPx;
	if (width < 480) idealPx = 352;
	else if (width < 640) idealPx = 416;
	else if (width < 768) idealPx = 448;
	else if (width < 1024) idealPx = 544;
	else idealPx = 608;
	if (typeof window === "undefined") return 1;
	const available = window.innerHeight * .7;
	if (available >= idealPx) return 1;
	return available / idealPx;
}
function getSlotConfig(totalCards, slot) {
	if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
	const center = totalCards >> 1;
	const distance = totalCards > 1 ? (slot - center) / center : 0;
	const absDistance = Math.abs(distance);
	return {
		rot: distance * 21,
		scale: 1 - .2244 * absDistance * absDistance,
		x: distance * 30,
		y: absDistance * absDistance * 7.3,
		zIndex: 10 - Math.abs(slot - center)
	};
}
var ARROW_CLASSES = "relative flex items-center justify-center rounded-full border-[1.5px] border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-[16px] text-black/40 dark:text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-black/25 dark:hover:border-white/25 hover:text-black/70 dark:hover:text-white/80 active:opacity-70 transition-colors duration-300 before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:border before:border-black/[0.04] dark:before:border-white/[0.04] before:pointer-events-none";
function SocialCards({ cards }) {
	const containerRef = (0, import_react.useRef)(null);
	const isAnimating = (0, import_react.useRef)(false);
	const hasEntered = (0, import_react.useRef)(false);
	const directionRef = (0, import_react.useRef)(null);
	const prevVisible = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const totalCards = cards.length;
	const needsPagination = totalCards > MAX_VISIBLE;
	const [centerIndex, setCenterIndex] = (0, import_react.useState)(needsPagination ? HALF : totalCards >> 1);
	const getVisibleMap = (0, import_react.useCallback)((center) => {
		const map = /* @__PURE__ */ new Map();
		if (!needsPagination) {
			cards.forEach((_, i) => map.set(i, i));
			return map;
		}
		for (let slot = 0; slot < MAX_VISIBLE; slot++) map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot);
		return map;
	}, [
		totalCards,
		needsPagination,
		cards
	]);
	const cycle = (0, import_react.useCallback)((direction) => {
		if (isAnimating.current || !needsPagination) return;
		isAnimating.current = true;
		directionRef.current = direction;
		setCenterIndex((prev) => direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards);
	}, [totalCards, needsPagination]);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container || !totalCards) return;
		const cardElements = Array.from(container.querySelectorAll(".fan-card"));
		if (!cardElements.length) return;
		const visibleMap = getVisibleMap(centerIndex);
		const previouslyVisible = prevVisible.current;
		const direction = directionRef.current;
		const isFirstMount = !hasEntered.current;
		const multiplier = getResponsiveMultiplier(window.innerWidth);
		const hMult = getHeightMultiplier(window.innerWidth);
		const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
		const config = (slot) => getSlotConfig(slotCount, slot);
		if (isFirstMount) isAnimating.current = true;
		let completedCount = 0;
		const visibleCount = visibleMap.size;
		const onCardDone = () => {
			if (++completedCount >= visibleCount) {
				isAnimating.current = false;
				if (isFirstMount) hasEntered.current = true;
			}
		};
		cardElements.forEach((card, cardIndex) => {
			const slot = visibleMap.get(cardIndex);
			const wasVisible = previouslyVisible.has(cardIndex);
			if (slot !== void 0) {
				const { x, y, rot, scale, zIndex } = config(slot);
				const target = {
					x: `${x * multiplier}rem`,
					y: `${y * hMult}rem`,
					rotation: rot,
					scale,
					opacity: 1,
					zIndex
				};
				if (isFirstMount) {
					gsapWithCSS.set(card, {
						x: 0,
						y: `${12 * hMult}rem`,
						rotation: 0,
						scale: .5,
						opacity: 0
					});
					gsapWithCSS.to(card, {
						...target,
						duration: 1.2,
						ease: "elastic.out(1.05,.78)",
						delay: .2 + slot * .06,
						onComplete: onCardDone
					});
				} else if (!wasVisible) {
					const enterX = direction === "right" ? 40 : -40;
					gsapWithCSS.set(card, {
						x: `${enterX}rem`,
						y: `${y * hMult}rem`,
						rotation: direction === "right" ? 30 : -30,
						scale: .5,
						opacity: 0
					});
					gsapWithCSS.to(card, {
						...target,
						duration: .6,
						ease: "power2.out",
						onComplete: onCardDone
					});
				} else gsapWithCSS.to(card, {
					...target,
					duration: .5,
					ease: "power2.out",
					onComplete: onCardDone
				});
			} else if (wasVisible) {
				const exitX = direction === "right" ? -40 : 40;
				gsapWithCSS.to(card, {
					x: `${exitX}rem`,
					opacity: 0,
					scale: .5,
					rotation: direction === "right" ? -30 : 30,
					duration: .4,
					ease: "power2.in",
					zIndex: -1,
					pointerEvents: "none"
				});
			} else gsapWithCSS.set(card, {
				opacity: 0,
				scale: .3,
				x: 0,
				y: 0,
				zIndex: -1,
				pointerEvents: "none"
			});
		});
		prevVisible.current = new Set(visibleMap.keys());
		const visibleEntries = [];
		cardElements.forEach((el, i) => {
			const slot = visibleMap.get(i);
			if (slot !== void 0) visibleEntries.push({
				el,
				slot
			});
		});
		visibleEntries.sort((a, b) => a.slot - b.slot);
		let activeSlot = null;
		let leaveTimer = null;
		const centerSlot = visibleEntries.length >> 1;
		const updateHoverLayout = (hoveredSlot) => {
			const mult = getResponsiveMultiplier(window.innerWidth);
			const hM = getHeightMultiplier(window.innerWidth);
			visibleEntries.forEach(({ el, slot }) => {
				const base = config(slot);
				let targetX = base.x * mult;
				let targetY = base.y * hM;
				let targetRot = base.rot;
				let targetScale = base.scale;
				let targetZIndex = base.zIndex;
				let delay = 0;
				if (hoveredSlot !== null) {
					const distance = Math.abs(slot - hoveredSlot);
					delay = distance * .02;
					if (slot === hoveredSlot) {
						targetY -= 2.5 * hM;
						targetScale *= 1.08;
						targetZIndex = 50;
					} else {
						targetZIndex = 40 - distance;
						const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
						const pushStrength = 8 * (1 - Math.abs(normalized)) * (1 + .2 * Math.max(0, 3 - distance));
						if (slot < hoveredSlot) {
							targetX -= pushStrength * mult;
							targetRot -= 3 / (distance + 1);
						} else {
							targetX += pushStrength * mult;
							targetRot += 3 / (distance + 1);
						}
						if (slot === visibleEntries.length - 1 && hoveredSlot < centerSlot) targetY -= 1 * hM;
						if (slot === 0 && hoveredSlot > centerSlot) targetY -= 1 * hM;
					}
				} else delay = Math.abs(slot - centerSlot) * .02;
				gsapWithCSS.to(el, {
					x: `${targetX}rem`,
					y: `${targetY}rem`,
					rotation: targetRot,
					scale: targetScale,
					duration: .4,
					delay,
					ease: "elastic.out(1,.75)",
					overwrite: "auto"
				});
				gsapWithCSS.set(el, { zIndex: targetZIndex });
			});
		};
		const enterHandlers = visibleEntries.map(({ el, slot }) => {
			const handler = () => {
				if (leaveTimer) {
					clearTimeout(leaveTimer);
					leaveTimer = null;
				}
				if (activeSlot !== slot) {
					activeSlot = slot;
					updateHoverLayout(slot);
				}
			};
			el.addEventListener("mouseenter", handler);
			return {
				el,
				handler
			};
		});
		const onMouseLeave = () => {
			if (leaveTimer) clearTimeout(leaveTimer);
			leaveTimer = setTimeout(() => {
				activeSlot = null;
				updateHoverLayout(null);
			}, 50);
		};
		container.addEventListener("mouseleave", onMouseLeave);
		const onResize = () => {
			updateHoverLayout(activeSlot);
		};
		window.addEventListener("resize", onResize);
		return () => {
			enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
			container.removeEventListener("mouseleave", onMouseLeave);
			window.removeEventListener("resize", onResize);
			if (leaveTimer) clearTimeout(leaveTimer);
		};
	}, [
		centerIndex,
		totalCards,
		getVisibleMap,
		needsPagination
	]);
	if (!totalCards) return null;
	const chevron = (direction) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "relative z-[2] w-4 h-4 md:w-5 md:h-5",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col items-center w-full py-4 lg:py-8 px-4 md:px-8 relative z-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center w-full max-w-[90rem]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: containerRef,
				className: "fan-layout flex relative justify-center items-center w-full max-w-[80rem]",
				children: cards.map((card, index) => {
					const image = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full h-full overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: card.imgUrl,
							loading: "lazy",
							alt: card.alt || `Card ${index}`,
							className: "absolute inset-0 w-full h-full object-cover z-10"
						})
					});
					return card.linkUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: card.linkUrl,
						target: card.linkUrl.startsWith("http") ? "_blank" : "_self",
						rel: "noopener noreferrer",
						className: "fan-card block cursor-pointer",
						children: image
					}, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fan-card",
						children: image
					}, index);
				})
			})
		}), needsPagination && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center gap-4 mt-4 md:mt-6 z-30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`,
					onClick: () => cycle("left"),
					"aria-label": "Previous",
					children: chevron("left")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: cards.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-2 h-2 rounded-full transition-all duration-300 ${i === centerIndex ? "bg-black/70 dark:bg-white/80 scale-[1.3]" : "bg-black/15 dark:bg-white/15"}` }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`,
					onClick: () => cycle("right"),
					"aria-label": "Next",
					children: chevron("right")
				})
			]
		})]
	});
}
function SectionHeading({ label, title, text, align = "left", className, invert }) {
	const anim = useReducedMotion() ? {} : {
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		...anim,
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("label-xs", invert && "text-background/60"),
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("mt-5 display-section", invert && "text-background"),
				children: title
			}),
			text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-6 max-w-xl text-base leading-relaxed text-ivory-dim/80 sm:text-lg", align === "center" && "mx-auto", invert && "text-background/70"),
				children: text
			}) : null
		]
	});
}
var heroFanImages = Object.values(/* @__PURE__ */ Object.assign({
	"../assets/trabajos/IMG-20260804-WA0032.jpg": IMG_20260804_WA0032_exports$1,
	"../assets/trabajos/IMG-20260804-WA0033.jpg": IMG_20260804_WA0033_exports$1,
	"../assets/trabajos/IMG-20260804-WA0034.jpg": IMG_20260804_WA0034_exports$1,
	"../assets/trabajos/IMG-20260804-WA0035.jpg": IMG_20260804_WA0035_exports$1,
	"../assets/trabajos/IMG-20260804-WA0036.jpg": IMG_20260804_WA0036_exports$2,
	"../assets/trabajos/IMG-20260804-WA0037.jpg": IMG_20260804_WA0037_exports$1,
	"../assets/trabajos/IMG-20260804-WA0038.jpg": IMG_20260804_WA0038_exports$1,
	"../assets/trabajos/IMG-20260804-WA0039.jpg": IMG_20260804_WA0039_exports$1,
	"../assets/trabajos/IMG-20260804-WA0040.jpg": IMG_20260804_WA0040_exports,
	"../assets/trabajos/IMG-20260804-WA0041.jpg": IMG_20260804_WA0041_exports$1,
	"../assets/trabajos/IMG-20260804-WA0042.jpg": IMG_20260804_WA0042_exports,
	"../assets/trabajos/IMG-20260804-WA0043.jpg": IMG_20260804_WA0043_exports,
	"../assets/trabajos/IMG-20260804-WA0044.jpg": IMG_20260804_WA0044_exports$1,
	"../assets/trabajos/IMG-20260804-WA0045.jpg": IMG_20260804_WA0045_exports$2,
	"../assets/trabajos/IMG-20260804-WA0046.jpg": IMG_20260804_WA0046_exports$1,
	"../assets/trabajos/IMG-20260804-WA0047.jpg": IMG_20260804_WA0047_exports$1,
	"../assets/trabajos/IMG-20260804-WA0048.jpg": IMG_20260804_WA0048_exports$1,
	"../assets/trabajos/IMG-20260804-WA0049.jpg": IMG_20260804_WA0049_exports$1,
	"../assets/trabajos/IMG-20260804-WA0050.jpg": IMG_20260804_WA0050_exports$1,
	"../assets/trabajos/IMG-20260804-WA0051.jpg": IMG_20260804_WA0051_exports$1,
	"../assets/trabajos/IMG-20260804-WA0052.jpg": IMG_20260804_WA0052_exports$2,
	"../assets/trabajos/IMG-20260804-WA0053.jpg": IMG_20260804_WA0053_exports$2,
	"../assets/trabajos/IMG-20260804-WA0054.jpg": IMG_20260804_WA0054_exports$1,
	"../assets/trabajos/IMG-20260804-WA0055.jpg": IMG_20260804_WA0055_exports$1,
	"../assets/trabajos/IMG-20260804-WA0056.jpg": IMG_20260804_WA0056_exports$2,
	"../assets/trabajos/IMG-20260804-WA0057.jpg": IMG_20260804_WA0057_exports$1,
	"../assets/trabajos/IMG-20260804-WA0058.jpg": IMG_20260804_WA0058_exports$1,
	"../assets/trabajos/IMG-20260804-WA0059.jpg": IMG_20260804_WA0059_exports$2,
	"../assets/trabajos/IMG-20260804-WA0060.jpg": IMG_20260804_WA0060_exports$2,
	"../assets/trabajos/IMG-20260804-WA0061.jpg": IMG_20260804_WA0061_exports$2,
	"../assets/trabajos/IMG-20260804-WA0062.jpg": IMG_20260804_WA0062_exports$2,
	"../assets/trabajos/IMG-20260804-WA0063.jpg": IMG_20260804_WA0063_exports$2,
	"../assets/trabajos/IMG-20260804-WA0065.jpg": IMG_20260804_WA0065_exports$1,
	"../assets/trabajos/IMG-20260804-WA0066.jpg": IMG_20260804_WA0066_exports$1,
	"../assets/trabajos/IMG-20260804-WA0067.jpg": IMG_20260804_WA0067_exports$3,
	"../assets/trabajos/IMG-20260804-WA0068.jpg": IMG_20260804_WA0068_exports$2,
	"../assets/trabajos/IMG-20260804-WA0069.jpg": IMG_20260804_WA0069_exports$1,
	"../assets/trabajos/IMG-20260804-WA0070.jpg": IMG_20260804_WA0070_exports$1,
	"../assets/trabajos/IMG-20260804-WA0071.jpg": IMG_20260804_WA0071_exports$1,
	"../assets/trabajos/IMG-20260804-WA0072.jpg": IMG_20260804_WA0072_exports$2,
	"../assets/trabajos/IMG-20260804-WA0073.jpg": IMG_20260804_WA0073_exports$1
})).map((mod) => mod.default).slice(0, 7);
function PhotoCarousel() {
	const cardItems = heroFanImages.map((imgUrl, i) => ({
		imgUrl,
		alt: `Tatuaje realizado por Meraki Studio ${i + 1}`,
		linkUrl: "#trabajos"
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "carousel-title",
		className: "relative border-t border-border bg-background py-16 lg:py-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					label: carousel.label,
					title: carousel.title,
					text: carousel.text,
					className: "max-w-2xl text-center mx-auto"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 sm:mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialCards, { cards: cardItems })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#trabajos",
					onClick: (e) => {
						e.preventDefault();
						track("view_more_works_click", { source: "photo_carousel" });
						scrollToHash("#trabajos");
					},
					className: "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] shadow-lg",
					children: ["Ver más trabajos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
						className: "size-4",
						"aria-hidden": "true"
					})]
				})
			})
		]
	});
}
function Intro() {
	const anim = useReducedMotion() ? {} : {
		initial: {
			opacity: 0,
			y: 26
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "intro-title",
		className: "border-t border-border bg-surface-deep py-20 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 lg:grid-cols-[1.25fr_auto_0.75fr] lg:gap-16 items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...anim,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-xs",
							children: intro.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "intro-title",
							className: "mt-5 display-section max-w-2xl",
							children: intro.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ivory-dim/80 sm:text-lg",
							children: intro.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden w-px self-stretch bg-border lg:block",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between h-full gap-8 border-t border-border pt-8 lg:border-0 lg:pt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center lg:justify-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedFlowerDrawing, { className: "w-44 h-52 sm:w-52 sm:h-60 text-ivory/80 opacity-90 drop-shadow-[0_0_12px_rgba(242,240,234,0.15)]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
						...anim,
						className: "flex flex-col gap-4",
						children: intro.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "label-xs text-ivory-dim",
							children: fact
						}, fact))
					})]
				})
			]
		})
	});
}
function About() {
	const reduce = useReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const yMain = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 26, reduce ? 0 : -26]);
	const ySecondary = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -18, reduce ? 0 : 34]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "estudio",
		ref,
		className: "grain relative overflow-hidden border-t border-border bg-surface-deep py-20 lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 z-0 opacity-45",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: dark_roses_default,
					alt: "",
					"aria-hidden": "true",
					className: "size-full object-cover object-center contrast-[1.15] brightness-[0.6]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-surface-deep/40" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralBranchOverlay, { className: "absolute -right-10 top-1/2 -translate-y-1/2 h-[520px] w-[520px] opacity-15 sm:right-4 lg:right-[5%] lg:h-[650px] lg:w-[650px] lg:opacity-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralRoseRight, { className: "absolute -left-12 bottom-0 h-[400px] w-[220px] opacity-15 lg:left-[2%] lg:h-[480px] lg:w-[260px] lg:opacity-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative grid gap-14 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { y: yMain },
						className: "relative w-[82%] overflow-hidden rounded-sm border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about.primaryImage.src,
							alt: about.primaryImage.alt,
							width: about.primaryImage.width,
							height: about.primaryImage.height,
							loading: "lazy",
							className: "aspect-[3/4] w-full object-cover object-[50%_25%] grayscale"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { y: ySecondary },
						className: "absolute -bottom-10 right-0 w-[52%] overflow-hidden rounded-sm border border-border bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about.secondaryImage.src,
							alt: about.secondaryImage.alt,
							width: about.secondaryImage.width,
							height: about.secondaryImage.height,
							loading: "lazy",
							className: "aspect-[5/4] w-full object-cover grayscale"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduce ? false : {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .75,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-14 lg:mt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-xs",
							children: about.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 display-section max-w-xl",
							children: about.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ivory-dim/80",
							children: about.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 20)))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 max-w-xl",
							children: about.principles.map((principle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-border py-4 text-sm text-ivory-dim",
								children: principle
							}, principle))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#reservar",
							onClick: (e) => {
								e.preventDefault();
								scrollToHash("#reservar");
							},
							className: "mt-9 inline-flex min-h-12 items-center rounded-full bg-primary px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-88",
							children: about.cta
						})
					]
				})]
			})
		]
	});
}
var IMG_20260804_WA0047_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0047_default });
var IMG_20260804_WA0047_default = "/assets/IMG-20260804-WA0047-BhGJUWlD.jpg";
var IMG_20260804_WA0053_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0053_default$1 });
var IMG_20260804_WA0053_default$1 = "/assets/IMG-20260804-WA0053-CZVxXmW0.jpg";
var IMG_20260804_WA0055_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0055_default });
var IMG_20260804_WA0055_default = "/assets/IMG-20260804-WA0055-BZgcDwda.jpg";
var IMG_20260804_WA0056_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0056_default$1 });
var IMG_20260804_WA0056_default$1 = "/assets/IMG-20260804-WA0056-JDGvHqiY.jpg";
var IMG_20260804_WA0059_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0059_default$1 });
var IMG_20260804_WA0059_default$1 = "/assets/IMG-20260804-WA0059-lXStuEuv.jpg";
var IMG_20260804_WA0060_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0060_default$1 });
var IMG_20260804_WA0060_default$1 = "/assets/IMG-20260804-WA0060-DTgzRtRY.jpg";
var IMG_20260804_WA0061_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0061_default$1 });
var IMG_20260804_WA0061_default$1 = "/assets/IMG-20260804-WA0061-GXncBMoA.jpg";
var IMG_20260804_WA0062_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0062_default$1 });
var IMG_20260804_WA0062_default$1 = "/assets/IMG-20260804-WA0062-CoulJvwM.jpg";
var IMG_20260804_WA0063_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0063_default$1 });
var IMG_20260804_WA0063_default$1 = "/assets/IMG-20260804-WA0063-BPGNG9t9.jpg";
var IMG_20260804_WA0067_exports$2 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0067_default$2 });
var IMG_20260804_WA0067_default$2 = "/assets/IMG-20260804-WA0067-DF4HmlvJ.jpg";
var IMG_20260804_WA0068_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0068_default$1 });
var IMG_20260804_WA0068_default$1 = "/assets/IMG-20260804-WA0068-oCklpjvj.jpg";
var IMG_20260804_WA0072_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0072_default$1 });
var IMG_20260804_WA0072_default$1 = "/assets/IMG-20260804-WA0072-DWYyRM2S.jpg";
var IMG_20260804_WA0034_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0034_default });
var IMG_20260804_WA0034_default = "/assets/IMG-20260804-WA0034-VaGYRCvY.jpg";
var IMG_20260804_WA0035_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0035_default });
var IMG_20260804_WA0035_default = "/assets/IMG-20260804-WA0035-BsVtTCta.jpg";
var IMG_20260804_WA0037_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0037_default });
var IMG_20260804_WA0037_default = "/assets/IMG-20260804-WA0037-qr4zJXHX.jpg";
var IMG_20260804_WA0039_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0039_default });
var IMG_20260804_WA0039_default = "/assets/IMG-20260804-WA0039-CEIq7fca.jpg";
var IMG_20260804_WA0041_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0041_default });
var IMG_20260804_WA0041_default = "/assets/IMG-20260804-WA0041-BkvYVvmU.jpg";
var IMG_20260804_WA0044_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0044_default });
var IMG_20260804_WA0044_default = "/assets/IMG-20260804-WA0044-BtVvMZGW.jpg";
var IMG_20260804_WA0046_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0046_default });
var IMG_20260804_WA0046_default = "/assets/IMG-20260804-WA0046-Dhl6eHWt.jpg";
var IMG_20260804_WA0048_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0048_default });
var IMG_20260804_WA0048_default = "/assets/IMG-20260804-WA0048-CXPjkeAn.jpg";
var IMG_20260804_WA0049_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0049_default });
var IMG_20260804_WA0049_default = "/assets/IMG-20260804-WA0049-JBij7Mzu.jpg";
var IMG_20260804_WA0056_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0056_default });
var IMG_20260804_WA0056_default = "/assets/IMG-20260804-WA0056-JDGvHqiY.jpg";
var IMG_20260804_WA0058_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0058_default });
var IMG_20260804_WA0058_default = "/assets/IMG-20260804-WA0058-C0QpnegI.jpg";
var IMG_20260804_WA0065_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0065_default });
var IMG_20260804_WA0065_default = "/assets/IMG-20260804-WA0065-CG4n4zib.jpg";
var IMG_20260804_WA0069_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0069_default });
var IMG_20260804_WA0069_default = "/assets/IMG-20260804-WA0069-BXiNqxnN.jpg";
var IMG_20260804_WA0071_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0071_default });
var IMG_20260804_WA0071_default = "/assets/IMG-20260804-WA0071-YjMSzgKN.jpg";
var IMG_20260804_WA0036_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0036_default$1 });
var IMG_20260804_WA0036_default$1 = "/assets/IMG-20260804-WA0036-hA1I86IV.jpg";
var IMG_20260804_WA0045_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0045_default$1 });
var IMG_20260804_WA0045_default$1 = "/assets/IMG-20260804-WA0045-CBi6Xkey.jpg";
var IMG_20260804_WA0051_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0051_default });
var IMG_20260804_WA0051_default = "/assets/IMG-20260804-WA0051-sL-RQkC8.jpg";
var IMG_20260804_WA0052_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0052_default$1 });
var IMG_20260804_WA0052_default$1 = "/assets/IMG-20260804-WA0052-C5HCzeY5.jpg";
var IMG_20260804_WA0067_exports$1 = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0067_default$1 });
var IMG_20260804_WA0067_default$1 = "/assets/IMG-20260804-WA0067-DF4HmlvJ.jpg";
var IMG_20260804_WA0070_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0070_default });
var IMG_20260804_WA0070_default = "/assets/IMG-20260804-WA0070-DXkJE5AF.jpg";
var IMG_20260804_WA0073_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0073_default });
var IMG_20260804_WA0073_default = "/assets/IMG-20260804-WA0073-BBC1cfJn.jpg";
var IMG_20260804_WA0032_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0032_default });
var IMG_20260804_WA0032_default = "/assets/IMG-20260804-WA0032-DXgRvhcQ.jpg";
var IMG_20260804_WA0033_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0033_default });
var IMG_20260804_WA0033_default = "/assets/IMG-20260804-WA0033-CZw-wWcK.jpg";
var IMG_20260804_WA0036_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0036_default });
var IMG_20260804_WA0036_default = "/assets/IMG-20260804-WA0036-hA1I86IV.jpg";
var IMG_20260804_WA0038_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0038_default });
var IMG_20260804_WA0038_default = "/assets/IMG-20260804-WA0038-DlKgDy-5.jpg";
var IMG_20260804_WA0045_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0045_default });
var IMG_20260804_WA0045_default = "/assets/IMG-20260804-WA0045-CBi6Xkey.jpg";
var IMG_20260804_WA0050_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0050_default });
var IMG_20260804_WA0050_default = "/assets/IMG-20260804-WA0050-BenVSc5w.jpg";
var IMG_20260804_WA0052_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0052_default });
var IMG_20260804_WA0052_default = "/assets/IMG-20260804-WA0052-C5HCzeY5.jpg";
var IMG_20260804_WA0053_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0053_default });
var IMG_20260804_WA0053_default = "/assets/IMG-20260804-WA0053-CZVxXmW0.jpg";
var IMG_20260804_WA0054_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0054_default });
var IMG_20260804_WA0054_default = "/assets/IMG-20260804-WA0054-DKyrWiKI.jpg";
var IMG_20260804_WA0057_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0057_default });
var IMG_20260804_WA0057_default = "/assets/IMG-20260804-WA0057-CI8MsEGT.jpg";
var IMG_20260804_WA0059_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0059_default });
var IMG_20260804_WA0059_default = "/assets/IMG-20260804-WA0059-lXStuEuv.jpg";
var IMG_20260804_WA0060_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0060_default });
var IMG_20260804_WA0060_default = "/assets/IMG-20260804-WA0060-DTgzRtRY.jpg";
var IMG_20260804_WA0061_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0061_default });
var IMG_20260804_WA0061_default = "/assets/IMG-20260804-WA0061-GXncBMoA.jpg";
var IMG_20260804_WA0062_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0062_default });
var IMG_20260804_WA0062_default = "/assets/IMG-20260804-WA0062-CoulJvwM.jpg";
var IMG_20260804_WA0063_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0063_default });
var IMG_20260804_WA0063_default = "/assets/IMG-20260804-WA0063-BPGNG9t9.jpg";
var IMG_20260804_WA0066_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0066_default });
var IMG_20260804_WA0066_default = "/assets/IMG-20260804-WA0066-3cKWYo8G.jpg";
var IMG_20260804_WA0067_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0067_default });
var IMG_20260804_WA0067_default = "/assets/IMG-20260804-WA0067-DF4HmlvJ.jpg";
var IMG_20260804_WA0068_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0068_default });
var IMG_20260804_WA0068_default = "/assets/IMG-20260804-WA0068-oCklpjvj.jpg";
var IMG_20260804_WA0072_exports = /* @__PURE__ */ __exportAll({ default: () => IMG_20260804_WA0072_default });
var IMG_20260804_WA0072_default = "/assets/IMG-20260804-WA0072-DWYyRM2S.jpg";
var PortfolioLightbox = (0, import_react.lazy)(() => import("./PortfolioLightbox-BnWh3YV9.mjs").then((m) => ({ default: m.PortfolioLightbox })));
var colorModules = /* #__PURE__ */ Object.assign({
	"../assets/trabajos/Color/IMG-20260804-WA0047.jpg": IMG_20260804_WA0047_exports,
	"../assets/trabajos/Color/IMG-20260804-WA0053.jpg": IMG_20260804_WA0053_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0055.jpg": IMG_20260804_WA0055_exports,
	"../assets/trabajos/Color/IMG-20260804-WA0056.jpg": IMG_20260804_WA0056_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0059.jpg": IMG_20260804_WA0059_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0060.jpg": IMG_20260804_WA0060_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0061.jpg": IMG_20260804_WA0061_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0062.jpg": IMG_20260804_WA0062_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0063.jpg": IMG_20260804_WA0063_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0067.jpg": IMG_20260804_WA0067_exports$2,
	"../assets/trabajos/Color/IMG-20260804-WA0068.jpg": IMG_20260804_WA0068_exports$1,
	"../assets/trabajos/Color/IMG-20260804-WA0072.jpg": IMG_20260804_WA0072_exports$1
});
var grandesModules = /* #__PURE__ */ Object.assign({
	"../assets/trabajos/grandes/IMG-20260804-WA0034.jpg": IMG_20260804_WA0034_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0035.jpg": IMG_20260804_WA0035_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0037.jpg": IMG_20260804_WA0037_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0039.jpg": IMG_20260804_WA0039_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0041.jpg": IMG_20260804_WA0041_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0044.jpg": IMG_20260804_WA0044_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0046.jpg": IMG_20260804_WA0046_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0048.jpg": IMG_20260804_WA0048_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0049.jpg": IMG_20260804_WA0049_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0056.jpg": IMG_20260804_WA0056_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0058.jpg": IMG_20260804_WA0058_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0065.jpg": IMG_20260804_WA0065_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0069.jpg": IMG_20260804_WA0069_exports,
	"../assets/trabajos/grandes/IMG-20260804-WA0071.jpg": IMG_20260804_WA0071_exports
});
var letteringModules = /* #__PURE__ */ Object.assign({
	"../assets/trabajos/lettering/IMG-20260804-WA0036.jpg": IMG_20260804_WA0036_exports$1,
	"../assets/trabajos/lettering/IMG-20260804-WA0045.jpg": IMG_20260804_WA0045_exports$1,
	"../assets/trabajos/lettering/IMG-20260804-WA0051.jpg": IMG_20260804_WA0051_exports,
	"../assets/trabajos/lettering/IMG-20260804-WA0052.jpg": IMG_20260804_WA0052_exports$1,
	"../assets/trabajos/lettering/IMG-20260804-WA0067.jpg": IMG_20260804_WA0067_exports$1,
	"../assets/trabajos/lettering/IMG-20260804-WA0070.jpg": IMG_20260804_WA0070_exports,
	"../assets/trabajos/lettering/IMG-20260804-WA0073.jpg": IMG_20260804_WA0073_exports
});
var pequenosModules = /* #__PURE__ */ Object.assign({
	"../assets/trabajos/pequeños/IMG-20260804-WA0032.jpg": IMG_20260804_WA0032_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0033.jpg": IMG_20260804_WA0033_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0036.jpg": IMG_20260804_WA0036_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0038.jpg": IMG_20260804_WA0038_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0045.jpg": IMG_20260804_WA0045_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0050.jpg": IMG_20260804_WA0050_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0052.jpg": IMG_20260804_WA0052_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0053.jpg": IMG_20260804_WA0053_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0054.jpg": IMG_20260804_WA0054_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0057.jpg": IMG_20260804_WA0057_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0059.jpg": IMG_20260804_WA0059_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0060.jpg": IMG_20260804_WA0060_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0061.jpg": IMG_20260804_WA0061_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0062.jpg": IMG_20260804_WA0062_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0063.jpg": IMG_20260804_WA0063_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0066.jpg": IMG_20260804_WA0066_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0067.jpg": IMG_20260804_WA0067_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0068.jpg": IMG_20260804_WA0068_exports,
	"../assets/trabajos/pequeños/IMG-20260804-WA0072.jpg": IMG_20260804_WA0072_exports
});
var spans = [
	"normal",
	"normal",
	"wide",
	"normal",
	"tall",
	"normal"
];
var projectIndex = 0;
var createCategoryProjects = (modules, category) => {
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
			span: spans[projectIndex % spans.length]
		};
	});
};
var realProjects = [
	...createCategoryProjects(colorModules, "A color"),
	...createCategoryProjects(letteringModules, "Lettering"),
	...createCategoryProjects(pequenosModules, "Pequeños"),
	...createCategoryProjects(grandesModules, "Proyectos grandes")
];
var INITIAL_LIMIT = 9;
function Portfolio() {
	const [category, setCategory] = (0, import_react.useState)("Todos");
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(INITIAL_LIMIT);
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	const reduce = useReducedMotion();
	const handleCategoryChange = (c) => {
		setCategory(c);
		setVisibleCount(INITIAL_LIMIT);
	};
	const filteredProjects = (0, import_react.useMemo)(() => category === "Todos" ? realProjects : realProjects.filter((p) => p.category === category), [category]);
	const displayedProjects = (0, import_react.useMemo)(() => filteredProjects.slice(0, visibleCount), [filteredProjects, visibleCount]);
	const categoryCounts = (0, import_react.useMemo)(() => {
		const counts = { Todos: realProjects.length };
		portfolioCategories.forEach((cat) => {
			if (cat !== "Todos") counts[cat] = realProjects.filter((p) => p.category === cat).length;
		});
		return counts;
	}, []);
	const openAt = (i, project) => {
		setOpenIndex(i);
		track("portfolio_view", { project: project.title });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "trabajos",
		className: "border-t border-border bg-background py-20 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					label: portfolio.label,
					title: portfolio.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filtrar portafolio por categoría",
					children: portfolioCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": category === c,
						onClick: () => handleCategoryChange(c),
						className: cn("min-h-11 rounded-full border px-5 text-[0.68rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200", category === c ? "border-ivory bg-primary text-primary-foreground" : "border-border text-ash hover:border-ivory hover:text-ivory"),
						children: [
							c,
							" (",
							categoryCounts[c] || 0,
							")"
						]
					}, c))
				}),
				displayedProjects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-sm text-ash",
					children: "Aún no hay piezas publicadas en esta categoría. Escríbeme para ver más trabajos."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5",
					children: displayedProjects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						type: "button",
						"data-cursor": "view",
						onClick: () => openAt(i, project),
						initial: reduce ? false : {
							opacity: 0,
							y: 26
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: Math.min(i % 6 * .06, .3),
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: cn("group relative block overflow-hidden rounded-sm bg-surface-deep text-left", project.span === "wide" && "sm:col-span-2", project.span === "tall" && "lg:row-span-2"),
						"aria-label": `Ver proyecto ${project.title}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.image,
								alt: project.alt,
								width: project.width,
								height: project.height,
								loading: i < 4 ? "eager" : "lazy",
								decoding: "async",
								className: cn("w-full object-cover opacity-85 grayscale transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-100", project.span === "wide" ? "aspect-[16/10]" : project.span === "tall" ? "aspect-[3/5]" : "aspect-[4/5]")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 label-xs text-ivory",
								children: project.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0 flex flex-col justify-end bg-surface-deep/0 p-5 transition-colors duration-500 group-hover:bg-surface-deep/55 group-focus-visible:bg-surface-deep/55",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "translate-y-3 opacity-0 transition-[transform,opacity] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "label-xs text-ivory-dim",
											children: [
												project.category,
												" · ",
												project.area
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block font-display text-2xl font-light text-ivory",
											children: project.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-3 inline-block border-b border-ivory pb-1 text-[0.66rem] uppercase tracking-[0.18em] text-ivory",
											children: "Ver proyecto"
										})
									]
								})
							})
						]
					}, project.id))
				}), visibleCount < filteredProjects.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setVisibleCount((prev) => prev + 9),
						className: "inline-flex min-h-12 items-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.02]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "size-4",
								"aria-hidden": "true"
							}),
							"Cargar más piezas (+",
							filteredProjects.length - visibleCount,
							" restantes)"
						]
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col items-center justify-center text-center gap-5 border-t border-border pt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-light text-ivory sm:text-3xl",
						children: portfolio.instagramNote
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: contact.instagram,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => track("instagram_click", { source: "portfolio" }),
						className: "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-border/80 bg-surface/60 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
							className: "size-4",
							"aria-hidden": "true"
						}), portfolio.instagramCta]
					})]
				})
			]
		}), openIndex !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioLightbox, {
				projects: displayedProjects,
				index: openIndex,
				onIndexChange: setOpenIndex,
				onClose: () => setOpenIndex(null)
			})
		}) : null]
	});
}
function Services() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "servicios",
		className: "relative overflow-hidden border-t border-border bg-background py-20 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloralVineLeft, { className: "absolute -left-10 top-1/4 h-[500px] w-[260px] opacity-15 lg:left-[1%] lg:opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					label: services.label,
					title: services.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14",
					children: services.items.map((service) => {
						const isOpen = open === service.number;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-border last:border-b",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": isOpen,
								onClick: () => {
									setOpen(isOpen ? null : service.number);
									if (!isOpen) track("service_click", { service: service.title });
								},
								className: "group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-7 text-left transition-colors duration-300 hover:bg-surface/60 lg:gap-8 lg:px-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-xs shrink-0",
										children: service.number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-2xl font-light leading-tight text-ivory transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl lg:text-4xl",
											children: service.title
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex shrink-0 items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: service.image,
											alt: "",
											"aria-hidden": "true",
											loading: "lazy",
											className: "hidden h-14 w-20 rounded-sm object-cover opacity-0 grayscale transition-opacity duration-300 group-hover:opacity-70 lg:block"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-9 items-center justify-center rounded-full border border-border text-ivory",
											children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
												className: "size-3.5",
												"aria-hidden": "true"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
												className: "size-3.5",
												"aria-hidden": "true"
											})
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: reduce ? false : {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: reduce ? { opacity: 0 } : {
										height: 0,
										opacity: 0
									},
									transition: {
										duration: .42,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-6 pb-9 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12 lg:px-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-2xl text-base leading-relaxed text-ivory-dim/80",
											children: service.description
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: service.image,
											alt: service.imageAlt,
											loading: "lazy",
											className: "h-40 w-full rounded-sm object-cover grayscale lg:h-32"
										})]
									})
								}) : null
							})]
						}, service.number);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-sm leading-relaxed text-ash",
						children: services.note
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#reservar",
						onClick: (e) => {
							e.preventDefault();
							scrollToHash("#reservar");
						},
						className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-7 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-primary hover:text-primary-foreground",
						children: [services.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-3.5",
							"aria-hidden": "true"
						})]
					})]
				})
			]
		})]
	});
}
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	if (testimonials.length === 0) return null;
	const item = testimonials[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "testimonials-title",
		className: "border-t border-border bg-surface py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					label: testimonialsCopy.label,
					title: testimonialsCopy.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mt-14 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "block font-display text-6xl leading-none text-ash/50",
							children: "“"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-2 font-display text-2xl font-light leading-snug text-ivory sm:text-3xl",
							children: item.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-4",
							children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								"aria-hidden": "true",
								loading: "lazy",
								className: "size-12 rounded-full object-cover grayscale"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-ivory",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-xs",
								children: item.project
							})] })]
						})
					]
				}),
				testimonials.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setI((i - 1 + testimonials.length) % testimonials.length),
						"aria-label": "Testimonio anterior",
						className: "inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-4",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setI((i + 1) % testimonials.length),
						"aria-label": "Testimonio siguiente",
						className: "inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})
					})]
				}) : null
			]
		})
	});
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dudas",
		className: "border-t border-border bg-background py-20 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: faq.label,
				title: faq.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: faq.items.map((item, i) => {
				const isOpen = open === i;
				const panelId = `faq-panel-${i}`;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border last:border-b",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": isOpen,
						"aria-controls": panelId,
						onClick: () => {
							setOpen(isOpen ? null : i);
							if (!isOpen) track("faq_open", { question: item.q });
						},
						className: "grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 py-6 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-xs pt-1",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 text-base font-medium text-ivory sm:text-lg",
								children: item.q
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-ivory",
								children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									className: "size-3.5",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "size-3.5",
									"aria-hidden": "true"
								})
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							id: panelId,
							initial: reduce ? false : {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: reduce ? { opacity: 0 } : {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .36,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-2xl pb-7 pl-10 text-sm leading-relaxed text-ivory-dim/80 sm:text-base",
								children: item.a
							})
						}) : null
					})]
				}, item.q);
			}) })]
		})
	});
}
var schema = objectType({
	name: stringType().trim().min(2, "Escribe tu nombre completo (mínimo 2 caracteres).").max(80),
	phone: stringType().trim().max(24, "El teléfono es demasiado largo.").refine((v) => {
		const digits = v.replace(/\D/g, "");
		return digits.length >= 10 && digits.length <= 15;
	}, "Escribe un teléfono válido de 10 a 15 dígitos."),
	idea: stringType().trim().min(20, "Cuéntame tu idea con al menos 20 caracteres.").max(800),
	area: stringType().trim().min(2, "Indica la zona del cuerpo.").max(80),
	size: stringType().min(1, "Selecciona un tamaño aproximado."),
	references: stringType().trim().max(400).optional(),
	color: stringType().min(1, "Selecciona una opción."),
	budget: stringType().trim().max(80).optional(),
	availability: stringType().trim().min(3, "Indica tus días u horarios disponibles.").max(200),
	consent: literalType(true, { errorMap: () => ({ message: "Necesito tu autorización para continuar por WhatsApp." }) })
});
var fieldClass = "w-full min-h-12 rounded-sm border border-border bg-surface-deep px-4 py-3 text-sm text-ivory placeholder:text-ash/70 transition-colors focus:border-ivory";
function BookingForm() {
	const [started, setStarted] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: u(schema),
		mode: "onSubmit",
		defaultValues: {
			size: "",
			color: ""
		}
	});
	const onFirstInput = () => {
		if (started) return;
		setStarted(true);
		track("booking_form_start");
	};
	const onSubmit = (values) => {
		const message = [
			"Hola, Meraki Studio. Quiero solicitar una cotización y revisar disponibilidad para una cita.",
			"",
			`Nombre: ${values.name}`,
			`Teléfono: ${values.phone}`,
			`Idea: ${values.idea}`,
			`Zona del cuerpo: ${values.area}`,
			`Tamaño aproximado: ${values.size}`,
			`Estilo o referencias: ${values.references?.trim() || "Sin especificar"}`,
			`Color: ${values.color}`,
			`Presupuesto aproximado: ${values.budget?.trim() || "Sin especificar"}`,
			`Disponibilidad: ${values.availability}`,
			"",
			"Vi su trabajo en la página web."
		].join("\n");
		track("booking_form_submit", {
			size: values.size,
			color: values.color
		});
		track("whatsapp_click", { source: "booking_form" });
		window.open(`${contact.whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
	};
	const err = (key) => errors[key]?.message;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reservar",
		className: "border-t border-border bg-surface-deep py-20 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: booking.label,
				title: booking.title,
				text: booking.text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 border-l border-border pl-4 text-sm leading-relaxed text-ash",
				children: booking.disclaimer
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				noValidate: true,
				onSubmit: handleSubmit(onSubmit),
				onInput: onFirstInput,
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Nombre completo",
							id: "name",
							error: err("name"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								type: "text",
								autoComplete: "name",
								className: fieldClass,
								...register("name"),
								"aria-invalid": !!err("name")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Teléfono o WhatsApp",
							id: "phone",
							error: err("phone"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "phone",
								type: "tel",
								inputMode: "tel",
								autoComplete: "tel",
								className: fieldClass,
								...register("phone"),
								"aria-invalid": !!err("phone")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Idea del tatuaje",
						id: "idea",
						error: err("idea"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "idea",
							rows: 4,
							className: cn(fieldClass, "resize-y"),
							...register("idea"),
							"aria-invalid": !!err("idea")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Zona del cuerpo",
							id: "area",
							error: err("area"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "area",
								type: "text",
								className: fieldClass,
								...register("area"),
								"aria-invalid": !!err("area")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Tamaño aproximado",
							id: "size",
							error: err("size"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "size",
								className: fieldClass,
								...register("size"),
								"aria-invalid": !!err("size"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Selecciona una opción"
								}), booking.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Estilo o referencias (opcional)",
						id: "references",
						error: err("references"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "references",
							type: "text",
							className: fieldClass,
							...register("references")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "label-xs",
							children: "Blanco y negro o color"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: booking.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border px-4 text-xs text-ivory-dim transition-colors has-checked:border-ivory has-checked:bg-primary has-checked:text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									value: c,
									className: "sr-only",
									...register("color")
								}), c]
							}, c))
						}),
						err("color") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							"aria-live": "polite",
							className: "mt-2 text-xs text-destructive",
							children: err("color")
						}) : null
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Presupuesto aproximado (opcional)",
							id: "budget",
							error: err("budget"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "budget",
								type: "text",
								className: fieldClass,
								...register("budget")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Fechas o días disponibles",
							id: "availability",
							error: err("availability"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "availability",
								type: "text",
								className: fieldClass,
								...register("availability"),
								"aria-invalid": !!err("availability")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "consent",
						className: "flex cursor-pointer items-start gap-3 text-sm text-ivory-dim",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "consent",
							type: "checkbox",
							className: "mt-0.5 size-5 shrink-0 rounded-sm border border-border bg-surface-deep accent-ivory",
							...register("consent"),
							"aria-invalid": !!err("consent")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Autorizo enviar esta información por WhatsApp a Meraki Studio." })]
					}), err("consent") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						"aria-live": "polite",
						className: "mt-2 text-xs text-destructive",
						children: err("consent")
					}) : null] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: isSubmitting,
							className: "inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-88 disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								"aria-hidden": "true"
							}), booking.submit]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-ash",
							children: [
								"También puedes llamar al",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: contact.phoneHref,
									onClick: () => track("phone_click", { source: "booking_form" }),
									className: "text-ivory underline decoration-border underline-offset-4 hover:decoration-ivory",
									children: contact.phoneShort
								}),
								"."
							]
						})]
					})
				]
			})]
		})
	});
}
function Field({ label, id, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "label-xs block",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2.5",
			children
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			"aria-live": "polite",
			className: "mt-2 text-xs text-destructive",
			children: error
		}) : null
	] });
}
function ContactCTA() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "cta-title",
		className: "relative overflow-hidden bg-foreground py-24 text-background lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "signature pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[34vw] leading-none text-background/[0.07] select-none",
				children: "Meraki"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: reduce ? false : {
					opacity: 0,
					y: 28
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "shell relative text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-background/55",
						children: finalCta.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "cta-title",
						className: "mx-auto mt-6 display-section max-w-3xl text-background",
						children: finalCta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/70 sm:text-lg",
						children: finalCta.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.whatsappQuick,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => track("whatsapp_click", { source: "final_cta" }),
							className: "inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-opacity hover:opacity-90 sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								"aria-hidden": "true"
							}), finalCta.primary]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.phoneHref,
							onClick: () => track("phone_click", { source: "final_cta" }),
							className: "inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full border border-background/25 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-background/10 sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), finalCta.secondary]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				"aria-hidden": "true",
				viewBox: "0 0 1440 120",
				preserveAspectRatio: "none",
				className: "absolute -bottom-px left-0 h-[80px] w-full text-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 120 C 260 40 520 108 760 62 C 1000 16 1220 76 1440 34 L1440 120 Z",
					fill: "currentColor"
				})
			})
		]
	});
}
var STYLES = `
.made-with-badge-wrapper {
  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);
}

@keyframes badge-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-badge-heartbeat {
  animation: badge-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.made-with-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
`;
function MadeWithLoveBadge({ name = "SiteLabs", href = "https://sitelabs.com.mx", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: STYLES } }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cn("made-with-badge-wrapper made-with-glass-pill px-6 py-3 rounded-full flex items-center gap-2 border-border/50 no-underline transition-transform duration-300 hover:scale-105", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest",
				children: "Hecho con"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "animate-badge-heartbeat text-sm md:text-base text-destructive",
				children: "❤️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest",
				children: "por"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground font-black text-xs md:text-sm tracking-normal ml-1",
				children: name
			})
		]
	})] });
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "grain border-t border-border bg-background pb-10 pt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xs text-sm leading-relaxed text-ash",
					children: footer.tagline
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Navegación del pie de página",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "label-xs",
						children: "Navegación"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: footer.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							onClick: (e) => {
								e.preventDefault();
								scrollToHash(link.href);
							},
							className: "text-sm text-ivory-dim transition-colors hover:text-ivory",
							children: link.label
						}) }, link.href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "label-xs",
					children: "Contacto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-3 text-sm text-ivory-dim",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.phoneHref,
							onClick: () => track("phone_click", { source: "footer" }),
							className: "inline-flex min-h-11 items-center gap-2 transition-colors hover:text-ivory",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), contact.phoneDisplay]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.whatsappQuick,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => track("whatsapp_click", { source: "footer" }),
							className: "inline-flex min-h-11 items-center gap-2 transition-colors hover:text-ivory",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								"aria-hidden": "true"
							}), "WhatsApp"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => track("instagram_click", { source: "footer" }),
							className: "inline-flex min-h-11 items-center gap-2 transition-colors hover:text-ivory",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
								className: "size-4",
								"aria-hidden": "true"
							}), contact.instagramHandle]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-4",
								"aria-hidden": "true"
							}), contact.city]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-between gap-6 pt-6 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-ash",
						children: [
							"© ",
							year,
							" Meraki Studio. Todos los derechos reservados."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MadeWithLoveBadge, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => scrollToHash("#inicio"),
						className: "inline-flex min-h-11 items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-ash transition-colors hover:text-ivory",
						children: ["Volver arriba", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
							className: "size-3.5",
							"aria-hidden": "true"
						})]
					})
				]
			})]
		})]
	});
}
/**
* Cursor personalizado: solo en punteros finos con hover y sin reduced-motion.
* El cursor nativo se oculta únicamente cuando el personalizado ya está activo.
*/
function CustomCursor() {
	const fine = useFinePointer();
	const [ready, setReady] = (0, import_react.useState)(false);
	const [variant, setVariant] = (0, import_react.useState)("default");
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, {
		stiffness: 500,
		damping: 40,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 500,
		damping: 40,
		mass: .4
	});
	(0, import_react.useEffect)(() => {
		if (!fine) return;
		setReady(true);
		document.documentElement.style.cursor = "none";
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const el = e.target;
			if (!el) return;
			if (el.closest("input, textarea, select, [data-cursor='native']")) setVariant("hidden");
			else if (el.closest("[data-cursor='drag']")) setVariant("drag");
			else if (el.closest("[data-cursor='view']")) setVariant("view");
			else if (el.closest("a, button, [role='button']")) setVariant("link");
			else setVariant("default");
		};
		window.addEventListener("mousemove", move);
		return () => {
			window.removeEventListener("mousemove", move);
			document.documentElement.style.cursor = "";
		};
	}, [
		fine,
		x,
		y
	]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const onKey = (e) => {
			if (e.key === "Tab") {
				document.documentElement.style.cursor = "";
				setReady(false);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [ready]);
	if (!fine || !ready) return null;
	const size = variant === "view" || variant === "drag" ? 74 : variant === "link" ? 46 : 30;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-[9999] hidden lg:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				x: sx,
				y: sy
			},
			className: "absolute left-0 top-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					width: size,
					height: size,
					opacity: variant === "hidden" ? 0 : 1
				},
				transition: {
					duration: .22,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 mix-blend-difference",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-ivory",
					children: variant === "view" ? "Ver" : variant === "drag" ? "Arrastra" : ""
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				animate: { opacity: variant === "hidden" || variant === "view" || variant === "drag" ? 0 : 1 },
				className: "absolute left-0 top-0 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory mix-blend-difference"
			})]
		})
	});
}
function FloatingWhatsApp() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 300);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: contact.whatsappQuick,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => track("whatsapp_click", { source: "floating" }),
		title: "Escribir a Meraki Studio por WhatsApp",
		"aria-label": "Escribir a Meraki Studio por WhatsApp",
		initial: false,
		animate: visible ? {
			opacity: 1,
			scale: [
				1,
				1.15,
				1,
				1.09,
				1,
				1
			]
		} : {
			opacity: 0,
			scale: .9
		},
		transition: {
			opacity: {
				duration: .35,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			scale: visible ? {
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
				times: [
					0,
					.06,
					.12,
					.17,
					.22,
					1
				]
			} : { duration: .35 }
		},
		style: { paddingBottom: "env(safe-area-inset-bottom)" },
		className: "fixed bottom-8 right-8 sm:bottom-10 sm:right-10 z-[70] inline-flex min-h-12 min-w-12 items-center gap-2.5 rounded-full border border-ivory/50 bg-[#1e1e22]/95 px-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-xl shadow-[0_0_22px_rgba(242,240,234,0.38)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(242,240,234,0.6)]",
		tabIndex: visible ? 0 : -1,
		"aria-hidden": !visible,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-4 shrink-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: "Reservar"
		})]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Index });
function Index() {
	useSmoothScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#contenido",
			className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-primary-foreground",
			children: "Saltar al contenido principal"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "contenido",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
	] });
}
//#endregion
export { useBodyScrollLock as n, routes_exports as t };

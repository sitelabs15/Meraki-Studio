import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { f as ArrowRight, p as ArrowLeft, t as X } from "../_libs/lucide-react.mjs";
import { n as useBodyScrollLock } from "./routes-UOhnqnxo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PortfolioLightbox-BnWh3YV9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PortfolioLightbox({ projects, index, onIndexChange, onClose }) {
	const dialog = (0, import_react.useRef)(null);
	const touchX = (0, import_react.useRef)(null);
	useBodyScrollLock(true);
	const project = projects[index];
	const next = () => onIndexChange((index + 1) % projects.length);
	const prev = () => onIndexChange((index - 1 + projects.length) % projects.length);
	(0, import_react.useEffect)(() => {
		const node = dialog.current;
		const focusables = () => Array.from(node?.querySelectorAll("button:not([disabled])") ?? []);
		focusables()[0]?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowRight") next();
			else if (e.key === "ArrowLeft") prev();
			else if (e.key === "Tab") {
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
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	});
	if (!project) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref: dialog,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `Proyecto ${project.title}`,
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .26 },
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		onTouchStart: (e) => touchX.current = e.touches[0]?.clientX ?? null,
		onTouchEnd: (e) => {
			if (touchX.current === null) return;
			const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
			if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
			touchX.current = null;
		},
		className: "fixed inset-0 z-[90] flex flex-col bg-surface-deep/97 backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell flex h-[72px] shrink-0 items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "label-xs",
					children: [
						String(index + 1).padStart(2, "0"),
						" / ",
						String(projects.length).padStart(2, "0")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					"aria-label": "Cerrar galería",
					className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 flex-1 items-center justify-center px-5 pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					initial: {
						opacity: 0,
						scale: .99
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					src: project.image,
					alt: project.alt,
					width: project.width,
					height: project.height,
					className: "max-h-full max-w-full rounded-sm object-contain"
				}, project.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell shrink-0 border-t border-border py-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "label-xs",
								children: [
									project.category,
									" · ",
									project.area
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl font-light text-ivory",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm text-ivory-dim/75",
								children: project.description
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: prev,
							"aria-label": "Proyecto anterior",
							className: "inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "size-4",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: next,
							"aria-label": "Proyecto siguiente",
							className: "inline-flex size-12 items-center justify-center rounded-full border border-border text-ivory transition-colors hover:bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": "true"
							})
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { PortfolioLightbox };

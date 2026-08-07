/**
 * Tracking centralizado. Sin scripts externos ni cookies.
 * Conecta aquí GA4 / Meta Pixel cuando exista consentimiento.
 */
export type TrackEvent =
  | "hero_booking_click"
  | "portfolio_view"
  | "instagram_click"
  | "whatsapp_click"
  | "phone_click"
  | "booking_form_start"
  | "booking_form_submit"
  | "faq_open"
  | "service_click";

type Payload = Record<string, string | number | boolean | undefined>;

export function track(event: TrackEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
  if (import.meta.env.DEV) console.debug("[track]", event, payload);
}

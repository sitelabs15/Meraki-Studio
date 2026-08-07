import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { booking, contact } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre completo (mínimo 2 caracteres).").max(80),
  phone: z
    .string()
    .trim()
    .max(24, "El teléfono es demasiado largo.")
    .refine((v) => {
      const digits = v.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Escribe un teléfono válido de 10 a 15 dígitos."),
  idea: z.string().trim().min(20, "Cuéntame tu idea con al menos 20 caracteres.").max(800),
  area: z.string().trim().min(2, "Indica la zona del cuerpo.").max(80),
  size: z.string().min(1, "Selecciona un tamaño aproximado."),
  references: z.string().trim().max(400).optional(),
  color: z.string().min(1, "Selecciona una opción."),
  budget: z.string().trim().max(80).optional(),
  availability: z.string().trim().min(3, "Indica tus días u horarios disponibles.").max(200),
  consent: z.literal(true, { errorMap: () => ({ message: "Necesito tu autorización para continuar por WhatsApp." }) }),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full min-h-12 rounded-sm border border-border bg-surface-deep px-4 py-3 text-sm text-ivory placeholder:text-ash/70 transition-colors focus:border-ivory";

export function BookingForm() {
  const [started, setStarted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: { size: "", color: "" },
  });

  const onFirstInput = () => {
    if (started) return;
    setStarted(true);
    track("booking_form_start");
  };

  const onSubmit = (values: FormValues) => {
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
      "Vi su trabajo en la página web.",
    ].join("\n");

    track("booking_form_submit", { size: values.size, color: values.color });
    track("whatsapp_click", { source: "booking_form" });
    window.open(`${contact.whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const err = (key: keyof FormValues) => errors[key]?.message;

  return (
    <section id="reservar" className="border-t border-border bg-surface-deep py-20 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading label={booking.label} title={booking.title} text={booking.text} />
          <p className="mt-8 border-l border-border pl-4 text-sm leading-relaxed text-ash">
            {booking.disclaimer}
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          onInput={onFirstInput}
          className="grid gap-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Nombre completo" id="name" error={err("name")}>
              <input id="name" type="text" autoComplete="name" className={fieldClass} {...register("name")} aria-invalid={!!err("name")} />
            </Field>
            <Field label="Teléfono o WhatsApp" id="phone" error={err("phone")}>
              <input id="phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} {...register("phone")} aria-invalid={!!err("phone")} />
            </Field>
          </div>

          <Field label="Idea del tatuaje" id="idea" error={err("idea")}>
            <textarea id="idea" rows={4} className={cn(fieldClass, "resize-y")} {...register("idea")} aria-invalid={!!err("idea")} />
          </Field>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Zona del cuerpo" id="area" error={err("area")}>
              <input id="area" type="text" className={fieldClass} {...register("area")} aria-invalid={!!err("area")} />
            </Field>
            <Field label="Tamaño aproximado" id="size" error={err("size")}>
              <select id="size" className={fieldClass} {...register("size")} aria-invalid={!!err("size")}>
                <option value="">Selecciona una opción</option>
                {booking.sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Estilo o referencias (opcional)" id="references" error={err("references")}>
            <input id="references" type="text" className={fieldClass} {...register("references")} />
          </Field>

          <fieldset>
            <legend className="label-xs">Blanco y negro o color</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {booking.colors.map((c) => (
                <label
                  key={c}
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border px-4 text-xs text-ivory-dim transition-colors has-checked:border-ivory has-checked:bg-primary has-checked:text-primary-foreground"
                >
                  <input type="radio" value={c} className="sr-only" {...register("color")} />
                  {c}
                </label>
              ))}
            </div>
            {err("color") ? (
              <p role="alert" aria-live="polite" className="mt-2 text-xs text-destructive">
                {err("color")}
              </p>
            ) : null}
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Presupuesto aproximado (opcional)" id="budget" error={err("budget")}>
              <input id="budget" type="text" className={fieldClass} {...register("budget")} />
            </Field>
            <Field label="Fechas o días disponibles" id="availability" error={err("availability")}>
              <input id="availability" type="text" className={fieldClass} {...register("availability")} aria-invalid={!!err("availability")} />
            </Field>
          </div>

          <div>
            <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm text-ivory-dim">
              <input
                id="consent"
                type="checkbox"
                className="mt-0.5 size-5 shrink-0 rounded-sm border border-border bg-surface-deep accent-ivory"
                {...register("consent")}
                aria-invalid={!!err("consent")}
              />
              <span>Autorizo enviar esta información por WhatsApp a Meraki Studio.</span>
            </label>
            {err("consent") ? (
              <p role="alert" aria-live="polite" className="mt-2 text-xs text-destructive">
                {err("consent")}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-88 disabled:opacity-60"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {booking.submit}
            </button>
            <p className="text-sm text-ash">
              También puedes llamar al{" "}
              <a
                href={contact.phoneHref}
                onClick={() => track("phone_click", { source: "booking_form" })}
                className="text-ivory underline decoration-border underline-offset-4 hover:decoration-ivory"
              >
                {contact.phoneShort}
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-xs block">
        {label}
      </label>
      <div className="mt-2.5">{children}</div>
      {error ? (
        <p role="alert" aria-live="polite" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  text,
  align = "left",
  className,
  invert,
}: {
  label: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}) {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <motion.div
      {...anim}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      <p className={cn("label-xs", invert && "text-background/60")}>{label}</p>
      <h2 className={cn("mt-5 display-section", invert && "text-background")}>{title}</h2>
      {text ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-relaxed text-ivory-dim/80 sm:text-lg",
            align === "center" && "mx-auto",
            invert && "text-background/70",
          )}
        >
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

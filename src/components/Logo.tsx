import { cn } from "@/lib/utils";

export function Logo({ className, small }: { className?: string; small?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)} aria-label="Meraki Studio">
      <span
        className={cn("signature text-ivory", small ? "text-[2rem]" : "text-[2.6rem]")}
        aria-hidden="true"
      >
        Meraki
      </span>
      <span
        className={cn(
          "text-ivory-dim uppercase",
          small ? "text-[0.5rem] tracking-[0.42em]" : "text-[0.58rem] tracking-[0.46em]",
        )}
        aria-hidden="true"
      >
        Studio
      </span>
    </span>
  );
}

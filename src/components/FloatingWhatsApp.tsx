import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { contact } from "@/data/siteContent";
import { track } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={contact.whatsappQuick}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { source: "floating" })}
      title="Escribir a Meraki Studio por WhatsApp"
      aria-label="Escribir a Meraki Studio por WhatsApp"
      initial={false}
      animate={
        visible
          ? {
              opacity: 1,
              scale: [1, 1.15, 1, 1.09, 1, 1],
            }
          : { opacity: 0, scale: 0.9 }
      }
      transition={{
        opacity: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        scale: visible
          ? {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.06, 0.12, 0.17, 0.22, 1],
            }
          : { duration: 0.35 },
      }}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      className="fixed bottom-8 right-8 sm:bottom-10 sm:right-10 z-[70] inline-flex min-h-12 min-w-12 items-center gap-2.5 rounded-full border border-border/80 bg-surface-elevated/95 px-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-ivory hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] cursor-pointer"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Reservar</span>
    </motion.a>
  );
}

import { motion } from "framer-motion";
import { Phone, Siren, Clock } from "lucide-react";

export function Emergency() {
  return (
    <section id="emergencias" className="relative overflow-hidden bg-gradient-emergency py-20 text-emergency-foreground lg:py-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative mx-auto px-4 text-center lg:px-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-white/15 backdrop-blur"
        >
          <Siren className="h-10 w-10 animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-3xl font-bold lg:text-5xl"
        >
          ¿Tu mascota necesita ayuda inmediata?
        </motion.h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-95">
          Estamos disponibles las 24 horas, los 365 días del año. No esperes —
          cada minuto cuenta en una emergencia veterinaria.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:9937018160"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-bold text-emergency shadow-elegant transition-transform hover:scale-105"
          >
            <Phone className="h-6 w-6" /> Llamar ahora: 993 701 8160
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur">
          <Clock className="h-4 w-4" /> Abierto 24 horas · Todos los días
        </div>
      </div>
    </section>
  );
}

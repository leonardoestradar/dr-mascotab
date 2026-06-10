import { motion } from "framer-motion";
import { Clock, UserCheck, Microscope, Heart, Zap, ThumbsUp } from "lucide-react";

const items = [
  { icon: Clock, title: "Atención 24 horas", desc: "Disponibles los 365 días del año, incluidas urgencias nocturnas." },
  { icon: UserCheck, title: "Equipo especializado", desc: "Veterinarios certificados con amplia experiencia clínica." },
  { icon: Microscope, title: "Tecnología avanzada", desc: "Equipos modernos de diagnóstico por imagen y laboratorio." },
  { icon: Heart, title: "Trato humano y cálido", desc: "Cuidamos a tu mascota como parte de nuestra familia." },
  { icon: Zap, title: "Respuesta rápida", desc: "Atención inmediata cuando cada minuto cuenta." },
  { icon: ThumbsUp, title: "Excelente reputación", desc: "4.9 estrellas en Google avalan nuestro servicio." },
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
            La clínica veterinaria más confiable de Villahermosa
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <it.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

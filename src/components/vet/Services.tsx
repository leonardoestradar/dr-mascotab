import { motion } from "framer-motion";
import {
  Stethoscope, Siren, Scissors, ScanLine, Activity, FlaskConical,
  Syringe, Bug, HeartPulse, Sparkles, Home,
  ShoppingBag, Dog, Cat, type LucideIcon, Egg,
} from "lucide-react";

type Service = { icon: LucideIcon; title: string; desc: string };

const services: Service[] = [
  { icon: Stethoscope, title: "Consultas veterinarias", desc: "Revisión general y diagnóstico profesional." },
  { icon: Siren, title: "Urgencias 24 horas", desc: "Atendemos emergencias todos los días." },
  { icon: Scissors, title: "Cirugía veterinaria", desc: "Procedimientos quirúrgicos seguros." },
  { icon: ScanLine, title: "Radiografías", desc: "Diagnóstico por imagen de alta resolución." },
  { icon: Activity, title: "Ultrasonido", desc: "Estudios ecográficos especializados." },
  { icon: FlaskConical, title: "Laboratorio clínico", desc: "Análisis precisos y oportunos." },
  { icon: Syringe, title: "Vacunación", desc: "Esquemas completos para perros y gatos." },
  { icon: Bug, title: "Desparasitación", desc: "Tratamientos internos y externos." },
  { icon: HeartPulse, title: "Esterilizaciones", desc: "Procedimientos seguros y modernos." },
  { icon: Egg, title: "Inseminación artificial", desc: "Reproducción asistida profesional." },
  { icon: Sparkles, title: "Estética canina y felina", desc: "Baños, cortes y spa." },
  { icon: Home, title: "Servicio a domicilio", desc: "Atención veterinaria en tu hogar." },
  { icon: ShoppingBag, title: "Artículos para mascotas", desc: "Productos de calidad seleccionados." },
  { icon: Dog, title: "Atención a perros", desc: "Especialistas en caninos." },
  { icon: Cat, title: "Atención a gatos", desc: "Especialistas en felinos." },
  { icon: HeartPulse, title: "Cirugías ortopédicas básicas", desc: "Tratamientos especializados para tu mascota." },
];

export function Services() {
  return (
    <section id="servicios" className="bg-secondary/50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Servicios
          </span>
          <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
            Atención integral para tu mascota
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Servicios especializados con tecnología avanzada y un equipo
            profesional dedicado al bienestar animal.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

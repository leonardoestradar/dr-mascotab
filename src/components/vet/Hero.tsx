import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle, Star, Clock, Siren } from "lucide-react";

const WA = "https://wa.me/529937018160?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20para%20mi%20mascota.";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-2 text-sm font-medium text-primary">
            <Siren className="h-4 w-4" />
            Urgencias veterinarias 24/7 en Villahermosa
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Atención veterinaria especializada{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              las 24 horas
            </span>{" "}
            para quienes más amas
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            Emergencias, cirugías, diagnósticos avanzados, estética y atención integral.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105">
              <Calendar className="h-5 w-5" /> Agendar cita
            </a>
            <a href="tel:9937018160" className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-background px-6 py-3.5 font-semibold text-primary transition-colors hover:bg-primary-soft">
              <Phone className="h-5 w-5" /> Llamar ahora
            </a>
            <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-success px-6 py-3.5 font-semibold text-success-foreground shadow-soft transition-transform hover:scale-105">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 border-t border-border pt-6">
            <Stat icon={<Clock className="h-5 w-5 text-primary" />} title="Abierto" value="24 horas" />
            <Stat icon={<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />} title="Google" value="4.9 ★ (54)" />
            <Stat icon={<Siren className="h-5 w-5 text-emergency" />} title="Atendemos" value="Urgencias" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <img
            src="/images/presentación.png"
            alt="Veterinaria Dr Mascotab"
            width={1600}
            height={1100}
            className="relative aspect-auto w-full rounded-3xl object-contain shadow-elegant"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-elegant sm:flex items-center gap-3"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success">
              <Star className="h-6 w-6 fill-success" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">4.9</div>
              <div className="text-xs text-muted-foreground">54 opiniones Google</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-card shadow-soft">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
}
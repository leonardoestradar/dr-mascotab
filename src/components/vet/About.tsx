import { motion } from "framer-motion";
import { Heart, Stethoscope, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre Nosotros
            </span>
            <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
              Cuidamos a tu mascota como parte de la familia
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              En <strong className="text-foreground">Dr Mascotab</strong> brindamos
              atención veterinaria integral con un equipo profesional comprometido
              con la salud y bienestar de cada mascota. Nuestra misión es ofrecer
              diagnósticos precisos, tratamientos efectivos y atención humana en
              cada consulta.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Heart, label: "Trato humano" },
                { icon: Stethoscope, label: "Tecnología médica" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft">
                  <Icon className="mx-auto h-7 w-7 text-primary" />
                  <div className="mt-2 text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-3xl bg-primary-soft p-8">
                <div className="flex h-full flex-col justify-between">
                  <div className="text-5xl font-bold text-primary">16+</div>
                  <div className="text-sm text-primary/80">Años de experiencia médica</div>
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground">
                <div className="flex h-full flex-col justify-between">
                  <div className="text-5xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Atención de urgencias todos los días</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square overflow-hidden rounded-3xl bg-accent/20 p-8">
                <div className="flex h-full flex-col justify-between">
                  <div className="text-5xl font-bold text-accent-foreground">5,000+</div>
                  <div className="text-sm text-accent-foreground/80">Procedimientos de esterilización realizados</div>
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl bg-card p-8 shadow-elegant">
                <div className="flex h-full flex-col justify-between">
                  <div className="text-5xl font-bold text-foreground">4.9★</div>
                  <div className="text-sm text-muted-foreground">Calificación promedio en Google</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Director Médico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10 lg:grid-cols-[auto,1fr] lg:items-center lg:gap-14"
        >
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-primary opacity-15 blur-2xl" />
            <img
              src="/images/dr-ramiro.png"
              alt="MVZ Ramiro Enrique Pérez, Director Médico de Dr Mascotab"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <GraduationCap className="h-4 w-4" /> Dirección Médica
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold lg:text-3xl">
              MVZ Ramiro Enrique Pérez
            </h3>
            <p className="mt-4 text-muted-foreground">
              Egresado de la <strong className="text-foreground">Universidad Juárez Autónoma de Tabasco</strong> y con
              más de <strong className="text-foreground">16 años de experiencia</strong> en medicina
              veterinaria de pequeñas especies.
            </p>
            <p className="mt-3 text-muted-foreground">
              A lo largo de su trayectoria ha realizado más de{" "}
              <strong className="text-foreground">5,000 procedimientos quirúrgicos</strong> solo en
              esterilizaciones, además de contar con basta experiencia en cirugías de tejidos blandos,
              procedimientos médicos avanzados y cirugías ortopédicas básicas.
            </p>
            <p className="mt-3 text-muted-foreground">
              En Dr. Mascotab creemos que cada mascota merece atención médica profesional, ética y humana.
              Por ello, nuestro compromiso no solo es tratar enfermedades, sino acompañar a cada paciente
              y a su familia con empatía, responsabilidad y verdadero amor por los animales.
            </p>
            <p className="mt-3 text-muted-foreground">
              Nuestro objetivo es que cada persona que cruce nuestras puertas tenga la tranquilidad de
              saber que su compañero está en manos con experiencia, vocación y dedicación real.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
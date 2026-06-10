import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  { text: "Acudí por una urgencia, misma que atendieron con profesionalidad y prontitud.", author: "Cliente Google" },
  { text: "Muy bien todo, mis perritos quedaron muy guapos con su baño y corte.", author: "Cliente Google" },
  { text: "Excelente atención del Dr. Ramiro y todo su equipo. Mi perrito fue operado y la recuperación fue rapidísima. 100% recomendados.", author: "Cliente Google" },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonios
          </span>
          <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 font-semibold">4.9 / 5 · 54 opiniones en Google</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="flex-1 text-foreground/90">"{r.text}"</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm font-semibold text-muted-foreground">— {r.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

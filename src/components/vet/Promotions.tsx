import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const promos = [
  { src: "/images/promo-esterilizacion.png", alt: "Promoción esterilización felina" },
  { src: "/images/promo-bano.png", alt: "Martes de baño perfumado 20% off" },
  { src: "/images/promo-estetica.png", alt: "Jueves de estética canina 15% off" },
  { src: "/images/promo-recoleccion.png", alt: "Miércoles de recolección gratis" },
];

export function Promotions() {
  return (
    <section id="promociones" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-4 w-4" /> Promociones
          </span>
          <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
            Ofertas y promociones vigentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aprovecha nuestras promociones semanales para el cuidado y bienestar de tu mascota.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              // Contenedor principal con desbordamiento oculto para el desenfoque
              className="relative group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              {/* Capa de fondo desenfocada para eliminar el blanco */}
              <div 
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40" 
                style={{ backgroundImage: `url(${p.src})` }} 
              />
              
              {/* Imagen principal completa */}
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="relative aspect-[3/4] w-full object-contain p-4 z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
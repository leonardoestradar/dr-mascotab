import { motion } from "framer-motion";

// Se eliminaron las importaciones de .asset.json
// Las rutas ahora apuntan directamente a tu carpeta /public/images/
const items = [
  { src: "/images/galeria-1.png", alt: "Pacientes huskies en recepción de Dr Mascotab" },
  { src: "/images/galeria-2.png", alt: "Paciente canino feliz en la clínica" },
  { src: "/images/galeria-3.png", alt: "Paciente canino atendido por el equipo Dr Mascotab" },
  { src: "/images/galeria-4.png", alt: "Estética canina en Dr Mascotab" },
  { src: "/images/galeria-5.png", alt: "Pacientes huskies en recepción de Dr Mascotab" },
  { src: "/images/galeria-6.png", alt: "Paciente canino feliz en la clínica" },
  { src: "/images/galeria-7.png", alt: "Paciente canino atendido por el equipo Dr Mascotab" },
  { src: "/images/galeria-8.png", alt: "Estética canina en Dr Mascotab" },
  { src: "/images/galeria-9.png", alt: "Pacientes huskies en recepción de Dr Mascotab" },
  { src: "/images/galeria-10.png", alt: "Paciente canino feliz en la clínica" },
  { src: "/images/galeria-11.png", alt: "Paciente canino atendido por el equipo Dr Mascotab" },
  { src: "/images/galeria-12.png", alt: "Estética canina en Dr Mascotab" },

];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Galería
          </span>
          <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
            Nuestras instalaciones y pacientes
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
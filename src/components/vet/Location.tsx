import { MapPin, Navigation, Phone, Clock } from "lucide-react";

const ADDRESS = "C. Alfonso Taracena 201, Col. Nueva Villahermosa, 86070 Villahermosa, Tabasco, México";
const MAPS_QUERY = encodeURIComponent(ADDRESS);

export function Location() {
  return (
    <section id="ubicacion" className="bg-secondary/50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Ubicación
          </span>
          <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
            Visítanos en Villahermosa, Tabasco
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Ubicación Dr Mascotab"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                className="h-[400px] w-full lg:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <InfoCard icon={MapPin} title="Dirección">
              {ADDRESS}
            </InfoCard>
            <InfoCard icon={Phone} title="Teléfono / WhatsApp">
              <a href="tel:9937018160" className="hover:text-primary">993 701 8160</a>
            </InfoCard>
            <InfoCard icon={Clock} title="Horario">
              Abierto las 24 horas · Todos los días
            </InfoCard>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            >
              <Navigation className="h-5 w-5" /> Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon, title, children,
}: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

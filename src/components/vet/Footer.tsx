import { Phone, MapPin, Clock, Facebook, Instagram, Music } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-display text-lg font-bold">
            <img src="/images/logo.png" alt="Logotipo Dr Mascotab" className="h-12 w-12 object-contain" />
            Dr Mascotab
          </div>
          <p className="mt-4 text-sm text-background/70">
            Clínica Veterinaria Especializada en Villahermosa, Tabasco. Atención
            integral las 24 horas para perros y gatos.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-accent" /> <a href="tel:9937018160" className="hover:text-background">993 701 8160</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-accent" /> C. Alfonso Taracena 201, Nueva Villahermosa, Tabasco</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-accent" /> Abierto 24 horas</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold">Enlaces</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><a href="#servicios" className="hover:text-background">Servicios</a></li>
            <li><a href="#emergencias" className="hover:text-background">Emergencias 24h</a></li>
            <li><a href="#galeria" className="hover:text-background">Galería</a></li>
            <li><a href="#ubicacion" className="hover:text-background">Ubicación</a></li>
            <li><a href="#contacto" className="hover:text-background">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold">Síguenos</h4>
          <div className="mt-4 flex gap-3">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/p/Drmascotab-61563317572717/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-primary"
            >
              <Facebook className="h-5 w-5" />
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/dr.mascotab" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@drmascotab" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok" 
              className="grid h-10 w-10 place-items-center rounded-full bg-background/10 transition hover:bg-primary"
            >
              <Music className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-6 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Dr Mascotab Clínica Veterinaria Especializada. Todos los derechos reservados.
      </div>
    </footer>
  );
}
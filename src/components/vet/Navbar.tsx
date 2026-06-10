import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#promociones", label: "Promociones" },
  { href: "#emergencias", label: "Emergencias" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 font-display font-bold text-lg" aria-label="Dr Mascotab">
          <img src="/images/logo.png" alt="Logotipo Dr Mascotab" className="h-12 w-12 object-contain" />
          <span className="leading-tight">
            Dr Mascotab
            <span className="block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Clínica Veterinaria
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:9937018160"
          className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 lg:inline-flex"
        >
          <Phone className="h-4 w-4" /> 993 701 8160
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-lg p-2 text-foreground"
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="bg-background/95 backdrop-blur-md border-t border-border lg:hidden animate-fade-in">
          <ul className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-primary-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:9937018160"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> 993 701 8160
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
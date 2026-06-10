import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20),
  email: z.string().trim().email("Correo inválido").max(120),
  pet: z.string().trim().min(1, "Ingresa el nombre o tipo de mascota").max(80),
  message: z.string().trim().min(5, "Cuéntanos un poco más").max(800),
});

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Open WhatsApp with prefilled message as a reliable fallback to email
    const text = `Hola Dr Mascotab, soy ${parsed.data.name}.%0A` +
      `Tel: ${parsed.data.phone}%0AEmail: ${parsed.data.email}%0A` +
      `Mascota: ${parsed.data.pet}%0AMensaje: ${parsed.data.message}`;
    window.open(`https://wa.me/529937018160?text=${text}`, "_blank");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contacto
            </span>
            <h2 className="mt-2 text-3xl font-bold lg:text-4xl">Agenda una cita</h2>
            <p className="mt-4 text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-10 grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" name="name" placeholder="Tu nombre" error={errors.name} />
              <Field label="Teléfono" name="phone" type="tel" placeholder="993 000 0000" error={errors.phone} />
              <Field label="Correo" name="email" type="email" placeholder="tu@email.com" error={errors.email} />
              <Field label="Mascota" name="pet" placeholder="Perro, gato, especie..." error={errors.pet} />
            </div>
            <Field label="Mensaje" name="message" textarea placeholder="¿Cómo podemos ayudar a tu mascota?" error={errors.message} />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              <Send className="h-5 w-5" /> Enviar mensaje
            </button>

            {sent && (
              <div className="flex items-center gap-2 rounded-2xl bg-success/10 p-4 text-sm text-success-foreground">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-foreground">Te redirigimos a WhatsApp para confirmar tu mensaje.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, error, textarea,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  error?: string; textarea?: boolean;
}) {
  const cls = "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

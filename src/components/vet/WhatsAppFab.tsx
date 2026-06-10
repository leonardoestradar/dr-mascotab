import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/529937018160?text=Hola,%20me%20gustaría%20información%20para%20mi%20mascota."
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-elegant transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}

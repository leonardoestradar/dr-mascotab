import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/vet/Navbar";
import { Hero } from "@/components/vet/Hero";
import { About } from "@/components/vet/About";
import { Services } from "@/components/vet/Services";
import { Promotions } from "@/components/vet/Promotions";
import { WhyChoose } from "@/components/vet/WhyChoose";
import { Testimonials } from "@/components/vet/Testimonials";
import { Emergency } from "@/components/vet/Emergency";
import { Gallery } from "@/components/vet/Gallery";
import { Location } from "@/components/vet/Location";
import { Contact } from "@/components/vet/Contact";
import { Footer } from "@/components/vet/Footer";
import { WhatsAppFab } from "@/components/vet/WhatsAppFab";

const TITLE = "Dr Mascotab Clínica Veterinaria Especializada | Veterinario 24 Horas en Villahermosa";
const DESC = "Clínica veterinaria especializada en Villahermosa. Urgencias 24 horas, cirugías, radiografías, laboratorio, vacunas, estética y atención integral para mascotas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "veterinario villahermosa, veterinaria 24 horas villahermosa, urgencias veterinarias tabasco, clínica veterinaria villahermosa, hospital veterinario tabasco, veterinario perros y gatos villahermosa" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VeterinaryCare",
        name: "Dr Mascotab Clínica Veterinaria Especializada",
        image: "/og-image.jpg",
        telephone: "+529937018160",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C. Alfonso Taracena 201, Col. Nueva Villahermosa",
          addressLocality: "Villahermosa",
          addressRegion: "Tabasco",
          postalCode: "86070",
          addressCountry: "MX",
        },
        openingHours: "Mo-Su 00:00-23:59",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "54" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Promotions />
        <WhyChoose />
        <Testimonials />
        <Emergency />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

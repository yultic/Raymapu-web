"use client"

import { MapPin, Phone, Clock, Car } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const info = [
  {
    icon: MapPin,
    title: "Ubicación",
    description: (
      <>
        <strong>Desde Puelo</strong>
        {"\n"}Tomar la ruta asfaltada V-691 en dirección a Puelche. Tras cruzar el Río Blanco, avanzar 300 m y girar a la derecha por camino ripiado. A 250 m, a la izquierda, se encuentra la entrada señalizada.
        {"\n\n"}
        <strong>Desde Puelche</strong>
        {"\n"}Tomar la ruta V-691 en dirección a Puelo. En el km 85, cruzar el puente Santa Teresa y girar a la izquierda por camino ripiado. A 250 m, a la izquierda, se encuentra la entrada señalizada.
      </>
    ),
  },
  {
    icon: Clock,
    title: "Horarios",
    description: "Lunes a Sábado: 10:00 - 18:00. Domingos y festivos: Solo con reserva previa.",
  },
  {
    icon: Car,
    title: "Cómo llegar",
    description: "Acceso pavimentado. Estacionamiento gratuito para visitantes. Señalización desde la ruta principal.",
  },
  {
    icon: Phone,
    title: "Reservas",
    description: "WhatsApp: +569 96 16 54 88. Reserva con al menos 24 horas de anticipación.",
  },
]

export function TourismInfo() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Información práctica
            </span>
            <h2 className="text-display-md font-bold text-foreground mb-6">Planifica tu visita</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Te esperamos en nuestro apiario para vivir una experiencia única. Aquí encontrarás toda la información que
              necesitas para planificar tu visita.
            </p>

            <div className="space-y-6">
              {info.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-4 transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-wrap">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map con efecto ventana */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "relative aspect-square rounded-2xl overflow-hidden shadow-dramatic transition-all duration-700",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
              )}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.9735975848184!2d-72.35652942368098!3d-41.69950566594716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9619a32cedcbfc09%3A0xcda1ec02c579b9b0!2sRaymapu%20Mieles%20de%20la%20Patagonia!5e0!3m2!1ses!2scl!4v1769384447078!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Raymapu"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Sombra interior */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.15)] rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

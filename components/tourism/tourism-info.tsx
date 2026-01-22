"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, Car } from "lucide-react"
import { cn } from "@/lib/utils"

const info = [
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Camino a Pucón Km 5, Villarrica. A solo 10 minutos del centro de la ciudad.",
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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Información práctica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Planifica tu visita</h2>
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
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div
            className={cn(
              "relative aspect-square rounded-2xl overflow-hidden shadow-2xl transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49442.38441892!2d-72.28!3d-39.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e7a5d0d0d0d1%3A0x0!2sVillarrica%2C%20Araucania%2C%20Chile!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Raymapu"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

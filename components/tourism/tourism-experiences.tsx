"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Tour del Apiario",
    description:
      "Visita guiada completa por nuestro apiario. Conoce las colmenas, aprende sobre el ciclo de vida de las abejas y observa cómo producimos nuestra miel.",
    duration: "2 horas",
    groupSize: "2-10 personas",
    price: 15000,
    image: "/",
    rating: 5,
  },
  {
    title: "Taller de Extracción",
    description:
      "Participa activamente en la extracción de miel. Una experiencia hands-on que te permite conocer todo el proceso de primera mano.",
    duration: "3 horas",
    groupSize: "4-8 personas",
    price: 25000,
    image: "/honey-extraction-workshop-with-participants-using-e.jpg",
    rating: 5,
  },
  {
    title: "Experiencia Familiar",
    description:
      "Diseñada especialmente para familias con niños. Incluye actividades educativas, degustación de miel y un recuerdo para llevar.",
    duration: "1.5 horas",
    groupSize: "Familias",
    price: 12000,
    image: "/family-at-beekeeping-experience-with-children-learn.jpg",
    rating: 4.5,
  },
]

export function TourismExperiences() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section ref={sectionRef} id="experiencias" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestras experiencias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Elige tu aventura</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada experiencia está diseñada para que vivas momentos únicos y aprendas sobre el fascinante mundo de la
            apicultura.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(experience.rating) ? "text-primary fill-primary" : "text-muted-foreground/30",
                      )}
                    />
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{experience.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{experience.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{experience.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-muted-foreground">Desde</span>
                    <div className="text-2xl font-bold text-primary">{formatPrice(experience.price)}</div>
                  </div>
                  <Button className="rounded-full">Reservar</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

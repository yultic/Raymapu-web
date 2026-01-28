"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "56912345678" // Reemplaza con tu número de WhatsApp

const experiences = [
  {
    title: "Experiencia Apícola Guiada",
    description:
      "Viví de cerca el mundo de las abejas: conocé la colmena, el trabajo del apiario y el proceso completo de producción de miel, desde el néctar de las flores hasta la cosecha y el envasado.\n\nLa experiencia incluye degustación de mieles del bosque patagónico.\n\nDuración: 2 a 2½ horas\nDisponibilidad: Sólo con clima templado\n\nVestimenta requerida:\n• Zapatillas y calcetines\n• Pantalón largo (evitar calzas negras y ajustadas)\n\nIncluye:\n• Chaqueta con sombrero de apicultor\n• Guantes de protección",
    duration: "2-2.5 horas",
    groupSize: "4-8 personas",
    image: "/toris1.jpg",
    rating: 5,
  },
  {
    title: "Sendero Interpretativo Selva Patagónica",
    description:
      "Descubrí la magia de la selva patagónica en un recorrido guiado por el bosque templado lluvioso, parte de la Reserva Mundial de la Biósfera \"Bosques Templados Lluviosos de los Andes Australes\".\n\nDurante la caminata conocerás árboles centenarios y renovales, el proyecto de reforestación que desarrollamos y las especies que conviven en este ecosistema único a nivel mundial.\n\nEl recorrido está lleno de hitos naturales y relatos: el árbol de los duendes, el canelo pata de elefante, la colina de los gigantes caídos, los troncos huecos de alerces, y muchas sorpresas más.\n\nDificultad: Baja\nDistancia: Aproximadamente 2 km\nApto para: Adultos y niños\n\nRecomendaciones:\n• Manga y pantalón largo\n• Zapatillas y calcetines\n• Gorro para el sol y bloqueador\n• Colores claros en temporada de tábanos\n• En caso de lluvia, calzado impermeable",
    duration: "1.5 horas",
    groupSize: "Familias",
    image: "/caminata.jpg",
    rating: 5,
  },
]

export function TourismExperiences() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col",
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

              <div className="p-6 flex flex-col flex-1">
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
                <div className="mb-4 flex-1">
                  <p
                    className={cn(
                      "text-muted-foreground text-sm whitespace-pre-line transition-all duration-300",
                      expandedCard === index ? "" : "line-clamp-3"
                    )}
                  >
                    {experience.description}
                  </p>
                  <button
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:underline"
                  >
                    {expandedCard === index ? (
                      <>
                        Leer menos <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Leer más <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-auto">
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
                    <Button
                      className="rounded-full"
                      onClick={() => {
                        const message = encodeURIComponent(`Hola, me interesa reservar la experiencia: ${experience.title}`)
                        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
                      }}
                    >
                      Reservar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

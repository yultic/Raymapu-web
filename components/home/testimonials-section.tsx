"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Gabriela Verdugo Weinberger",
    text: "Hace años que como familia tenemos el privilegio de consumir la maravillosa miel de Raymapu. En sus primeros años apadrinamos una colmena. Y con el pasar del tiempo nos hemos mantenido en contacto para seguir disfrutando de una miel que además tiene historia, y donde sus protagonistas son Pia y Vito, que le aportan sostenibilidad y propósito a todo lo que impulsan, protegiendo a las abejas y cuidando el medioambiente. Es una miel recomendadísima, pura, deliciosa y sin comparación, con todo el sello de la patagonia.",
    avatar: "/gabriela.png",
    rating: 5,
  },
  {
    name: "Luis Callejas",
    text: "Un lugar acogedor, hermoso, con Vito y Pía (ambos hermosas personas), un tour apícola de ensueño, dedicado, mágico, lleno de aprendizaje donde cada detalle y palabra refleja el amor y cariño por lo que hacen. Especial agradecimiento por la dedicación a los detalles con nuestro hijo autista que adoró cada momento del tour y ha transmitido todos los días, a quien puede oirle, sobre LO MEJOR DE PUELO. No esta demás mencionar la excelente calidad de la miel que es realmente rica, sabrosa y sana.Muchas gracias Vito y Pía por un día mágico con ustedes.VOLVEREMOS!!!!",
    avatar: "/luis.png",
    rating: 5,
  },
  {
    name: "Magdalena Maino",
    location: "Valdivia",
    text: "Muy buen panorama para hacer con niños en el sector de Puelo. Nos dieron trajes adecuados y nos enseñaron el proceso completo desde las colmenas hasta el frasco de miel. Una gran experiencia.",
    avatar: "/magdalena.png",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Familias chilenas confían en Raymapu para llevar lo mejor de la naturaleza a sus hogares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-card p-8 rounded-2xl border border-border/50 shadow-sm relative transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

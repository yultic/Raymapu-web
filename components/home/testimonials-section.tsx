"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "María González",
    location: "Santiago",
    text: "La mejor miel que he probado en Chile. Se nota que es artesanal y el sabor es incomparable. Ya llevo 3 años siendo cliente.",
    avatar: "/maria.jpg",
    rating: 5,
  },
  {
    name: "Carlos Muñoz",
    location: "Temuco",
    text: "El propóleo me ha ayudado mucho con mi sistema inmune. Productos de calidad y un servicio excelente. Muy recomendado.",
    avatar: "/carlos.jpg",
    rating: 5,
  },
  {
    name: "Ana Soto",
    location: "Valdivia",
    text: "Visité su apiario en Villarrica y fue una experiencia increíble. La miel de ulmo es simplemente espectacular.",
    avatar: "/ana.jpg",
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

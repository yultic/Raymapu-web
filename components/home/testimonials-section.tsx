"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const testimonials = [
  {
    name: "Gabriela Verdugo Weinberger",
    text: "Hace años que como familia tenemos el privilegio de consumir la maravillosa miel de Raymapu. En sus primeros años apadrinamos una colmena. Y con el pasar del tiempo nos hemos mantenido en contacto para seguir disfrutando de una miel que además tiene historia, y donde sus protagonistas son Pia y Vito, que le aportan sostenibilidad y propósito a todo lo que impulsan, protegiendo a las abejas y cuidando el medioambiente. Es una miel recomendadísima, pura, deliciosa y sin comparación, con todo el sello de la patagonia.",
    avatar: "/gabriela.png",
    rating: 5,
  },
  {
    name: "Luis Callejas",
    text: "Un lugar acogedor, hermoso, con Vito y Pía (ambas hermosas personas), un tour apícola de ensueño, dedicado, mágico, lleno de aprendizaje donde cada detalle y palabra refleja el amor y cariño por lo que hacen. Especial agradecimiento por la dedicación a los detalles con nuestro hijo autista que adoró cada momento del tour y ha transmitido todos los días, a quien puede oirle, sobre LO MEJOR DE PUELO.",
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
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden honeycomb-pattern diagonal-pattern">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-display-lg font-bold text-foreground mb-4">
            Lo que dicen nuestros <em className="font-display italic text-primary">clientes</em>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Familias chilenas confían en Raymapu para llevar lo mejor de la naturaleza a sus hogares.
          </p>
        </div>

        {/* Layout: principal (col-span-3) + 2 secundarios apilados (col-span-2) */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Testimonio principal */}
          <div
            className={cn(
              "lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-sm relative transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            {/* Quote mark gigante */}
            <span className="absolute top-4 right-6 text-[10rem] leading-none font-display text-primary/5 select-none pointer-events-none">
              &ldquo;
            </span>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-foreground text-lg mb-8 leading-relaxed relative z-10">&ldquo;{testimonials[0].text}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                <Image
                  src={testimonials[0].avatar || "/placeholder.svg"}
                  alt={testimonials[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-foreground text-lg">{testimonials[0].name}</div>
              </div>
            </div>
          </div>

          {/* Testimonios secundarios apilados */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "bg-card p-6 rounded-2xl border border-border/50 shadow-sm relative flex-1 transition-all duration-700",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                )}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4 leading-relaxed line-clamp-5">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

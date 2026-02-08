"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const team = [
  {
    name: "Pia Krag",
    role: "Fundadora y Apicultora",
    image: "/pia.jpg",
    description: "Más de 20 años dedicada a la apicultura y la preservación de las tradiciones.",
  },
  {
    name: "Vito Torrijos",
    role: "Co-fundador y Productor",
    image: "/vito.jpg",
    description: "Experto en producción y control de calidad de todos nuestros productos.",
  },
]

export function OurTeam() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestro equipo
          </span>
          <h2 className="text-display-md font-bold text-foreground mb-4">Las personas detrás de <em className="font-display italic text-primary">Raymapu</em></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos una familia unida por la pasión de producir la mejor miel de Chile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1 font-display">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

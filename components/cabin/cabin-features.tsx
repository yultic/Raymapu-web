"use client"

import { BedDouble, Bed, CookingPot, ShowerHead, Thermometer, Trees, UtensilsCrossed, Mountain } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const features = [
  {
    icon: BedDouble,
    title: "Cama matrimonial",
    description: "Con plumones de pluma de ganso para un descanso cálido y acogedor.",
  },
  {
    icon: Bed,
    title: "Loft con dos camas individuales",
    description: "Un segundo ambiente bajo el techo a dos aguas, ideal para niños o acompañantes.",
  },
  {
    icon: CookingPot,
    title: "Cocina equipada",
    description: "Encimera a gas, horno eléctrico, frigobar, lavaplatos y vajilla completa para tu estadía.",
  },
  {
    icon: UtensilsCrossed,
    title: "Comedor",
    description: "Mesa para cuatro personas con vista al bosque a través de amplias ventanas.",
  },
  {
    icon: ShowerHead,
    title: "Baño cómodo",
    description:
      "Toallas, shampoo, jabón y secador de pelo incluidos. Cabina de ducha con agua caliente de termo eléctrico.",
  },
  {
    icon: Thermometer,
    title: "Calefacción",
    description: "Ambiente temperado para disfrutar la Patagonia en cualquier época del año.",
  },
  {
    icon: Trees,
    title: "Bosque nativo",
    description: "Rodeada de selva patagónica, parte de la Reserva de la Biósfera de los Andes Australes.",
  },
  {
    icon: Mountain,
    title: "Entorno privilegiado",
    description: "A 4 km de las Termas del Sol y a 8 km del pueblo de Río Puelo.",
  },
]

export function CabinFeatures() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section ref={sectionRef} id="comodidades" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Comodidades
          </span>
          <h2 className="text-display-md font-bold text-foreground mb-4">Todo lo esencial, nada de más</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una tiny house pensada para descansar de verdad: cálida, luminosa y con todo lo
            necesario para una estadía sin preocupaciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

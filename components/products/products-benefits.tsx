"use client"

import { Truck, ShieldCheck, Leaf, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const benefits = [
  {
    icon: Truck,
    title: "Envío a Todo Chile",
    description: "Despacho seguro y rápido a cualquier región del país.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    description: "Productos 100% naturales con certificación orgánica.",
  },
  {
    icon: Leaf,
    title: "Producción Sustentable",
    description: "Respetamos el medio ambiente en cada proceso.",
  },
  {
    icon: RefreshCw,
    title: "Satisfacción Total",
    description: "Si no quedas satisfecho, te devolvemos tu dinero.",
  },
]

export function ProductsBenefits() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section ref={sectionRef} className="py-16 mesh-bg-warm relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start gap-4 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

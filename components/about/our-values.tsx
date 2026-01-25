"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Leaf, Users, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description:
      "Amamos lo que hacemos. Cada colmena es cuidada con dedicación y cada producto refleja nuestro compromiso.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidad",
    description: "Trabajamos en armonía con la naturaleza, protegiendo los ecosistemas donde viven nuestras abejas.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "El sello Manos Campesinas garantiza que nuestra miel, además de ser un producto sano, es elaborado de forma artesanal por un pequeño productor que fomenta el desarrollo local.",
  },
  {
    icon: Sparkles,
    title: "Calidad",
    description: "Solo ofrecemos productos 100% puros y naturales, sin aditivos ni procesos que alteren su esencia.",
  },
]

export function OurValues() {
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
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Lo que nos define
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Valores</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estos principios guían cada decisión que tomamos y cada producto que creamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/30 text-center",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

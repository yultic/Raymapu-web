"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const milestones = [
  { year: "2008", title: "El comienzo", description: "Instalamos nuestras primeras 10 colmenas en Rio Puelo." },
  { year: "2012", title: "Primera certificación", description: "Obtuvimos certificación de producción orgánica." },
  { year: "2015", title: "Turismo apícola", description: "Abrimos nuestro apiario al turismo rural." },
  { year: "2018", title: "Expansión regional", description: "Comenzamos a distribuir en todo el sur de Chile." },
  { year: "2022", title: "Reconocimiento", description: "Premio a la mejor miel de la Patagonia Norte." },
  { year: "2024", title: "Nuevos horizontes", description: "Lanzamiento de nuevos productos naturales." },
]

export function Timeline() {
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

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestra trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Un camino de crecimiento</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={cn(
                "relative flex items-center mb-12 last:mb-0 transition-all duration-500",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={cn("ml-12 md:ml-0 md:w-1/2", index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12")}>
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

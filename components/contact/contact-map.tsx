"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function ContactMap() {
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
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Encuéntranos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos ubicados en Rio Puelo, a solo 10 minutos del pueblo.
          </p>
        </div>

        <div
          className={cn(
            "relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.9735975848184!2d-72.35652942368098!3d-41.69950566594716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9619a32cedcbfc09%3A0xcda1ec02c579b9b0!2sRaymapu%20Mieles%20de%20la%20Patagonia!5e0!3m2!1ses!2scl!4v1769384447078!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Miel Raymapu"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}

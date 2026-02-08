"use client"

import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

export function ContactMap() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30 grain-overlay relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Ubicación
          </span>
          <h2 className="text-display-md font-bold text-foreground mb-4">Encuéntranos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos ubicados en Rio Puelo, a solo 10 minutos del pueblo.
          </p>
        </div>

        <div
          className={cn(
            "relative aspect-[21/9] rounded-2xl overflow-hidden shadow-dramatic transition-all duration-700",
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
          {/* Vignette orgánica sobre el mapa */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] rounded-2xl" />
          {/* Borde decorativo */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-primary/10" />
        </div>
      </div>
    </section>
  )
}

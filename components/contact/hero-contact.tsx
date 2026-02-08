"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Mail } from "lucide-react"

export function HeroContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Mitad derecha: imagen */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url('/9.jpg')` }}
        >
          <div className="absolute inset-0 bg-foreground/30 lg:bg-transparent" />
        </div>
        {/* Mitad izquierda: fondo sólido */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-foreground" />
        {/* Gradiente de transición entre ambas mitades */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-r from-foreground to-transparent z-10" />
      </div>

      <div className="absolute inset-0 vignette pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:w-1/2">
          <div
            className={cn(
              "max-w-lg transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">Estamos para ayudarte</span>
            </div>
            <h1 className="text-display-xl font-bold text-card mb-6">
              <em className="font-display italic text-primary">Contacta</em> con nosotros
            </h1>
            <p
              className={cn(
                "text-lg md:text-xl text-card/80 leading-relaxed transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              Tienes preguntas sobre nuestros productos o quieres hacer un pedido? Escríbenos y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function HeroAbout() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url('/mielquienes.jpg')`,
          backgroundPosition: 'center 63%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={cn(
            "max-w-3xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Badge flotante */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}>
            <span className="text-sm font-medium text-primary-foreground">Desde 2008</span>
          </div>

          <h1 className="text-display-xl font-bold text-card mb-6">Quiénes Somos</h1>
          <p className="text-lg md:text-xl text-card/80 leading-relaxed max-w-2xl">
            Somos una familia apasionada por las abejas y la naturaleza, dedicada a producir la mejor miel de la
            Patagonia Norte, Rio Puelo, trabajando en armonía con el medio ambiente.
          </p>
        </div>
      </div>
    </section>
  )
}

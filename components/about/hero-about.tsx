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
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 text-balance">Quiénes Somos</h1>
          <p className="text-lg md:text-xl text-card/80 leading-relaxed">
            Somos una familia apasionada por las abejas y la naturaleza, dedicada a producir la mejor miel de la
            Patagonia Norte, Rio Puelo, trabajando en armonia con el medio ambiente.
          </p>
        </div>
      </div>
    </section>
  )
}

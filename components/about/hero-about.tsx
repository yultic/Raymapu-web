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
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/misty-araucania-forest-with-sunlight-filtering-thro.jpg')`,
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
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            Nuestra Historia
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 text-balance">Quiénes Somos</h1>
          <p className="text-lg md:text-xl text-card/80 leading-relaxed">
            Somos una familia apasionada por las abejas y la naturaleza, dedicada a producir la mejor miel de la
            Araucanía con respeto por las tradiciones mapuche.
          </p>
        </div>
      </div>
    </section>
  )
}

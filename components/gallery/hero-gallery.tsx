"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Camera } from "lucide-react"

export function HeroGallery() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/collage-of-beekeeping-honey-products-and-chilean-n.jpg')`,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Momentos capturados</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 text-balance">Galería</h1>
          <p className="text-lg md:text-xl text-card/80 leading-relaxed">
            Una mirada a nuestro mundo: desde las colmenas hasta tu mesa, cada imagen cuenta nuestra historia.
          </p>
        </div>
      </div>
    </section>
  )
}

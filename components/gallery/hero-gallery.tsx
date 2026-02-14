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
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/collage-of-beekeeping-honey-products-and-chilean-n.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />
      </div>

      <div className="absolute inset-0 vignette pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pb-16">
        <div
          className={cn(
            "max-w-2xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Momentos capturados</span>
          </div>
          <h1 className="text-display-xl font-bold text-card mb-4">
            Nuestra <em className="font-display italic text-primary">Galería</em>
          </h1>
          <p
            className={cn(
              "text-lg md:text-xl text-card/80 leading-relaxed max-w-lg transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Una mirada a nuestro mundo: desde las colmenas hasta tu mesa, cada imagen cuenta nuestra historia.
          </p>
        </div>
      </div>
    </section>
  )
}

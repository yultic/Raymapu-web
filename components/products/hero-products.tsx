"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function HeroProducts() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      <Image
        src="/panal.jpg"
        alt="Productos de Raymapu en un entorno natural"
        fill
        priority
        quality={100}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/80" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">100% Natural</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 text-balance">Nuestros Productos</h1>
          <p className="text-lg md:text-xl text-card/80 leading-relaxed">
            Miel pura, propóleo, polen y más productos de la colmena, elaborados con amor y respeto por la naturaleza.
          </p>
        </div>
      </div>
    </section>
  )
}

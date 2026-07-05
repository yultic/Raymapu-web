"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Waves, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroCabin() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/c7.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      <div className="absolute inset-0 vignette pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Río Puelo, Cochamó</span>
          </div>

          <h1
            className={cn(
              "text-4xl font-bold text-card mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Tu refugio <em className="font-display italic text-primary text-5xl">en la naturaleza</em>
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl text-card/80 mb-8 leading-relaxed transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Privacidad, descanso y conexión con lo esencial. Una cabaña acogedora en medio del bosque
            nativo de la Patagonia Norte, a pasos de nuestro apiario.
          </p>

          <div
            className={cn(
              "flex flex-wrap gap-6 mb-10 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            {[
              { icon: Users, text: "Hasta 4 personas" },
              { icon: Waves, text: "A 4 km de las Termas del Sol" },
              { icon: Home, text: "A 8 km del pueblo" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-card/80">
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap gap-4 transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50">
              <Link href="#disponibilidad">Consultar Disponibilidad</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-card/10 border-card/30 text-card hover:bg-card/20 backdrop-blur-sm"
            >
              <Link href="#galeria">Conocer la Cabaña</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

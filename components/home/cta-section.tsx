"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('/turismo.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-foreground/85" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Rio Puelo, Cochamo</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-6 text-balance">
            Visítanos y vive la experiencia Raymapu
          </h2>
          <p className="text-lg text-card/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Conoce nuestro apiario, aprende sobre las abejas y disfruta del turismo rural en uno de los lugares más
            hermosos de Chile. Una experiencia inolvidable para toda la familia.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all group"
            >
              <Link href="/turismo">
                Conoce nuestro turismo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-card/10 border-card/30 text-card hover:bg-card/20 backdrop-blur-sm"
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

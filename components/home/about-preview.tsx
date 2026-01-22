"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const highlights = [
  "Más de 15 años de tradición apícola",
  "Producción artesanal y sustentable",
  "Respeto por las tradiciones mapuche",
  "Compromiso con el medio ambiente",
]

export function AboutPreview() {
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
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div
            className={cn(
              "relative transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/beekeepers-working-with-beehives-in-chilean-countr.jpg" alt="Apicultores en Villarrica" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
              <Image src="/close-up-of-honey-dripping-from-honeycomb-golden-l.jpg" alt="Miel pura" fill className="object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nuestra historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Una tradición que nace del amor por la tierra
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              En Raymapu, cada gota de miel cuenta una historia. Desde las laderas del volcán Villarrica, nuestras
              abejas trabajan entre bosques nativos de ulmo, tineo y arrayán, creando mieles con sabores únicos que
              reflejan la riqueza de la Araucanía.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Somos una familia dedicada a la apicultura sustentable, combinando conocimientos ancestrales mapuche con
              técnicas modernas para producir miel de la más alta calidad.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="rounded-full group">
              <Link href="/quienes-somos">
                Conoce nuestra historia
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function OurStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              "relative transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/vitopia.jpg"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
              <Image
                src="/raymapu2.png"
                alt="Panal de miel"
                fill
                className="object"
              />
            </div>
          </div>

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
              Del amor por la tierra nació Raymapu
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              En 1988 iniciamos la búsqueda de una forma de vida que nos permitiera trabajar de manera independiente y compartir más tiempo en familia. En ese camino nos encontramos con la apicultura.

              Nuestros cuatro hijos crecieron entre baldes de miel y marcos de cera, observando y aprendiendo mientras las colmenas se llenaban cada primavera con el trabajo incansable de las abejas.

              En 2008 nos trasladamos a Río Puelo, convencidos de que no existe en Chile un territorio más privilegiado para la producción de miel que la Patagonia Norte.
              </p>
              <p>
                El nombre <strong className="text-foreground">Raymapu</strong> proviene del mapudungun y significa
                &ldquo;tierra florida&rdquo;, un homenaje a la rica biodiversidad de la Patagonia Norte que alimenta a
                nuestras abejas y da origen a nuestras mieles únicas.
              </p>
              <p>
                Hoy, más de 15 años después, seguimos fieles a nuestros principios: producir 
                miel de la más alta calidad, respetando el medio ambiente y aplicando las técnicas de apicultura que hemos perfeccionado a lo largo de los años.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

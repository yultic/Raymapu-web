"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const highlights = [
  "Más de 15 años de tradición apícola",
  "Producción artesanal y sustentable",
  "Trabajo en armonía con la naturaleza y sus tiempos",
  "Compromiso real con el medio ambiente",
]

export function AboutPreview() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <section ref={sectionRef} className="py-24 mesh-bg-cool grain-overlay relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Images - 7/12 */}
          <div
            className={cn(
              "lg:col-span-7 relative transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-dramatic lg:-ml-12">
              <Image src="/apicultores.jpg" alt="Apicultores en Rio Puelo" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden md:block rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image src="/raymapu2.png" alt="Miel pura" fill className="object" />
            </div>
          </div>

          {/* Content - 5/12 */}
          <div
            className={cn(
              "lg:col-span-5 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nuestra historia
            </span>
            <h2 className="text-display-md font-bold text-foreground mb-6">
              Una tradición que nace del amor por la tierra
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              En Raymapu, cada gota de miel cuenta una historia. Desde las laderas del volcán Yates, nuestras
              abejas trabajan entre bosques nativos de ulmo, tineo y arrayán, creando mieles con sabores únicos que
              reflejan la riqueza de la Patagonia-Norte.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Somos una familia dedicada a la apicultura sustentable, trabajando en equilibrio
              con el entorno natural y aplicando técnicas modernas para obtener miel de la más alta calidad.
            </p>

            {/* Highlights estilo steps con línea vertical */}
            <ul className="space-y-4 mb-8 relative">
              <div className="absolute left-[9px] top-2 bottom-2 w-px bg-primary/20" />
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-4 relative">
                  <div className="w-[18px] h-[18px] rounded-full bg-primary/20 border-2 border-primary flex-shrink-0 relative z-10" />
                  <span className="text-foreground text-sm">{item}</span>
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

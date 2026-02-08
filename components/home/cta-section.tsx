"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

export function CtaSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 })

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

      {/* Lineas doradas diagonales decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-px h-[140%] bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{ transform: "rotate(-20deg)" }}
        />
        <div
          className="absolute top-0 left-3/4 w-px h-[140%] bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          style={{ transform: "rotate(-20deg)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Texto 7/12 izquierda */}
          <div
            className={cn(
              "lg:col-span-7 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">Rio Puelo, Cochamo</span>
            </div>

            <h2 className="text-display-lg font-bold text-card mb-6">
              Visítanos y vive la experiencia{" "}
              <em className="font-display italic text-primary">Raymapu</em>
            </h2>
            <p className="text-lg text-card/80 mb-10 max-w-2xl leading-relaxed">
              Conoce nuestro apiario, aprende sobre las abejas y disfruta del turismo rural en uno de los lugares más
              hermosos de Chile. Una experiencia inolvidable para toda la familia.
            </p>

            <div className="flex flex-wrap gap-4">
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

          {/* Imagen recortada 5/12 derecha */}
          <div
            className={cn(
              "lg:col-span-5 hidden lg:block transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-dramatic rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/turismo.jpg"
                alt="Experiencia turismo Raymapu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

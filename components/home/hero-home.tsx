"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Award, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroHome() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/monteyates.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl pb-24 pt-12">
          {/* Title */}
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-bold text-card leading-tight mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Miel pura desde la{" "}
            <span className="text-primary relative">
              Patagonía
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-primary/50"
                />
              </svg>
            </span>{" "}
            de Chile
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg md:text-xl text-card/80 mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            Colmenares Raymapu está ubicado en Río Puelo, un bello lugar de la 
            Patagonia Norte, rodeado de bosques nativos y libre de contaminación que forma 
            parte de la Reserva de la Biósfera de los Bosques Lluviosos Templados de Los Andes Australes..
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all group"
            >
              <Link href="/productos">
                Ver Productos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 bg-card/10 border-card/30 text-card hover:bg-card/20 backdrop-blur-sm"
            >
              <Link href="/quienes-somos">Nuestra Historia</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className={cn(
              "flex flex-wrap gap-8 transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
          >
            {[
              { icon: Award, value: "8+", label: "Años de producción" },
              { icon: Heart, value: "100%", label: "Natural y artesanal" },
              { icon: Leaf, value: "100+", label: "Clientes satisfechos" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card">{stat.value}</div>
                  <div className="text-sm text-card/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-card/60">
        <span className="text-sm">Descubre más</span>
        <div className="w-6 h-10 rounded-full border-2 border-card/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

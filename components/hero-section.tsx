"use client"

import { useEffect, useState } from "react"
import { MapPin, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/beautiful-honey-farm-landscape-with-mountains-and-.jpg" alt="Paisaje de apicultura" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float" />
      <div
        className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-accent/20 blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm text-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Villarrica, Chile
          </span>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 text-balance transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Contáctenos
        </h1>

        <p
          className={`text-lg md:text-xl text-card/90 max-w-2xl mb-8 text-pretty transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Estamos aquí para responder todas tus preguntas sobre nuestra miel natural y productos de la cultura mapuche
        </p>

        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a href="#contacto" className="inline-flex items-center gap-2 text-card hover:text-primary transition-colors">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}

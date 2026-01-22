"use client"

import * as React from "react"
import Image from "next/image"
import { Droplets, TreePine, Users, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Droplets,
    title: "Miel 100% Pura",
    description: "Sin aditivos ni conservantes. Directamente de nuestras colmenas a tu mesa.",
    image: "/miel1.jpg",
    size: "large",
  },
  {
    icon: TreePine,
    title: "Flora Nativa",
    description: "Nuestras abejas polinizan bosques nativos de la Patagonia-Norte, creando mieles únicas.",
    image: "/miel2.jpg",
    size: "small",
  },
  {
    icon: Users,
    title: "Dependemos de la naturaleza",
    description: "Nuestras abejas habitan en plena selva siempreverde, donde las primaveras y veranos pueden alternar entre períodos lluviosos y cálidos.",
    image: "/miel3.jpg",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Certificación de origen botánico",
    description: "Nuestras mieles cuentan con certificación de origen botánico, respaldada por análisis realizados en laboratorios especializados.",
    image: "/manoscampe.png",
    size: "wide",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
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
    <section ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calidad Chilena</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 8 años produciendo la mejor miel de la región, con respeto por la naturaleza y compromiso con
            nuestros clientes.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Card grande - ocupa 2 filas */}
          {(() => {
            const IconLarge = features[0].icon
            return (
              <div
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl md:row-span-2 h-[300px] md:h-auto"
                style={{ transitionDelay: "0ms" }}
              >
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <IconLarge className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{features[0].title}</h3>
                  <p className="text-white/80 leading-relaxed">{features[0].description}</p>
                </div>
              </div>
            )
          })()}

          {/* Cards pequeñas */}
          {features.slice(1, 3).map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl h-[250px]"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{feature.description}</p>
                </div>
              </div>
            )
          })}

          {/* Card ancha - ocupa 2 columnas */}
          {(() => {
            const IconWide = features[3].icon
            return (
              <div
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl h-[200px] lg:col-span-2"
                style={{ transitionDelay: "300ms" }}
              >
                <Image
                  src={features[3].image}
                  alt={features[3].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:max-w-[60%]">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <IconWide className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{features[3].title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{features[3].description}</p>
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </section>
  )
}

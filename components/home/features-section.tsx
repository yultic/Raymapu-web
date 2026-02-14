"use client"

import Image from "next/image"
import { Droplets, TreePine, Users, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const features = [
  {
    icon: Droplets,
    title: "Miel 100% Pura",
    description: "Sin aditivos ni conservantes. Directamente de nuestras colmenas a tu mesa.",
    image: "/miel1.jpg",
  },
  {
    icon: TreePine,
    title: "Flora Nativa",
    description: "Nuestras abejas polinizan bosques nativos de la Patagonia-Norte, creando mieles únicas.",
    image: "/miel2.jpg",
  },
  {
    icon: Users,
    title: "Dependemos de la naturaleza",
    description: "Nuestras abejas habitan en plena selva siempreverde, donde las primaveras y veranos pueden alternar entre períodos lluviosos y cálidos.",
    image: "/miel3.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Certificación de origen botánico",
    description: "Nuestras mieles cuentan con certificación de origen botánico, respaldada por análisis realizados en laboratorios especializados.",
    image: "/manoscampe.png",
  },
]

export function FeaturesSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section ref={sectionRef} className="py-24 mesh-bg-warm grain-overlay relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-display-lg font-bold text-foreground mb-4">
            Calidad <em className="font-display italic text-primary">Chilena</em>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Más de 15 años produciendo la mejor miel de la región, con respeto por la naturaleza y compromiso con
            nuestros clientes.
          </p>
        </div>

        {/* Bento Grid 12 cols */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Card 1 - Grande: col-span-7 row-span-2 */}
          {(() => {
            const IconLarge = features[0].icon
            return (
              <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl md:col-span-7 md:row-span-2 h-[300px] md:h-auto">
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                    <IconLarge className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">{features[0].title}</h3>
                  <p className="text-white/80 leading-relaxed max-w-md">{features[0].description}</p>
                </div>
              </div>
            )
          })()}

          {/* Cards 2 y 3 - Pequeñas: col-span-5 */}
          {features.slice(1, 3).map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl md:col-span-5 h-[250px]"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{feature.description}</p>
                </div>
              </div>
            )
          })}

          {/* Card 4 - Ancha: col-span-12 con layout interno asimétrico */}
          {(() => {
            const IconWide = features[3].icon
            return (
              <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl h-[200px] md:col-span-12" style={{ transitionDelay: "300ms" }}>
                <Image
                  src={features[3].image}
                  alt={features[3].title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:max-w-[50%]">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110">
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

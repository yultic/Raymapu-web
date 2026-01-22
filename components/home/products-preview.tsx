"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    name: "Miel de Ulmo",
    description: "Miel premium con propiedades antibacterianas únicas",
    price: "$8.990",
    image: "/jar-of-ulmo-honey-with-golden-color-and-wooden-hon.jpg",
    rating: 5,
    badge: "Más vendido",
  },
  {
    name: "Miel Multifloral",
    description: "Mezcla de flores nativas de la Araucanía",
    price: "$6.990",
    image: "/jar-of-multifloral-honey-with-amber-color-and-hone.jpg",
    rating: 4.5,
    badge: null,
  },
  {
    name: "Propóleo Natural",
    description: "Extracto puro con propiedades medicinales",
    price: "$12.990",
    image: "/bottle-of-propolis-tincture-with-dropper-natural-m.jpg",
    rating: 5,
    badge: "Nuevo",
  },
]

export function ProductsPreview() {
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
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nuestros productos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sabores de la naturaleza</h2>
          </div>
          <Button asChild variant="outline" className="rounded-full group self-start md:self-auto bg-transparent">
            <Link href="/productos">
              Ver todos los productos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {product.badge}
                  </span>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(product.rating) ? "text-primary fill-primary" : "text-muted-foreground/30",
                      )}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button size="sm" className="rounded-full">
                    Añadir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

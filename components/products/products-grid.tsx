"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "Miel de Ulmo",
    description: "Miel premium con propiedades antibacterianas. Proveniente de bosques nativos.",
    price: 8990,
    originalPrice: 10990,
    image: "/jar-of-ulmo-honey-with-golden-color-and-wooden-hon.jpg",
    rating: 5,
    reviews: 48,
    badge: "Más vendido",
    category: "Mieles",
  },
  {
    id: 2,
    name: "Miel Multifloral",
    description: "Mezcla de flores nativas de la Araucanía. Sabor suave y aromático.",
    price: 6990,
    image: "/jar-of-multifloral-honey-with-amber-color-and-hone.jpg",
    rating: 4.5,
    reviews: 32,
    badge: null,
    category: "Mieles",
  },
  {
    id: 3,
    name: "Miel de Tineo",
    description: "Miel de color oscuro con sabor intenso. Ideal para postres.",
    price: 7990,
    image: "/dark-tineo-honey-in-glass-jar-with-rich-amber-colo.jpg",
    rating: 5,
    reviews: 21,
    badge: null,
    category: "Mieles",
  },
  {
    id: 4,
    name: "Propóleo en Gotas",
    description: "Extracto puro de propóleo con propiedades medicinales naturales.",
    price: 12990,
    image: "/bottle-of-propolis-tincture-with-dropper-natural-m.jpg",
    rating: 5,
    reviews: 56,
    badge: "Nuevo",
    category: "Propóleo",
  },
  {
    id: 5,
    name: "Polen de Abeja",
    description: "Superalimento natural rico en proteínas y vitaminas.",
    price: 9990,
    image: "/jar-of-bee-pollen-granules-golden-yellow-natural-s.jpg",
    rating: 4.5,
    reviews: 18,
    badge: null,
    category: "Polen",
  },
  {
    id: 6,
    name: "Pack Familiar",
    description: "3 mieles varietales + propóleo. Ideal para regalo o uso diario.",
    price: 29990,
    originalPrice: 35990,
    image: "/gift-pack-of-honey-products-with-three-jars-and-pr.jpg",
    rating: 5,
    reviews: 24,
    badge: "Oferta",
    category: "Packs",
  },
]

export function ProductsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                {product.badge && (
                  <span
                    className={cn(
                      "absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-medium",
                      product.badge === "Oferta"
                        ? "bg-destructive text-white"
                        : product.badge === "Nuevo"
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground",
                    )}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                  <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="rounded-full h-12 w-12">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>

                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
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
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
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

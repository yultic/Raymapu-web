"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "Miel de Ulmo",
    description: "Aromas especiados, herbáceos y florales la distinguen, con notas que evocan vainilla, rosa mosqueta y hojas de té verde.",
    image: "/Ulmo.jpg",
    rating: 5,
    category: "Mieles",
  },
  {
    id: 2,
    name: "Miel de Tiaca",
    description: "De color amarillo claro y brillante, esta miel ofrece aromas frutales cálidos, con notas de melón y damascos frescos. Se complementa con matices florales de jazmín y un fondo herbáceo, mentolado y silvestre, lo que la hace especialmente atractiva para la gastronomía que busca destacar aromas frescos y expresivos.",
    image: "/Tiaca.jpg",
    rating: 4.5,
    category: "Mieles",
  },
  {
    id: 3,
    name: "Miel de Tineo",
    description: "De color dorado, presenta una amplia gama de aromas silvestres que le otorgan una marcada personalidad. Se distinguen notas cítricas de pomelo y cáscara de nuez, acompañadas por matices de cereal —trigo— y un suave toque de jengibre, sobre un fondo particular que recuerda al coco rallado.",
    image: "/tineo.jpg",
    rating: 5,
    category: "Mieles",
  },
  {
    id: 4,
    name: "Miel de Bosque Nativo",
    description: "Miel de color amarillo ocre, de cosecha tardía y varietal natural. Predomina el ulmo, acompañado por tiaca y tineo, en una composición definida por la selección natural de las abejas y por las condiciones propias de cada temporada.",
    image: "/Bosque-Nativo.jpg",
    rating: 5,
    category: "Mieles",
  },
  {
    id: 5,
    name: "Giftpack 3 mieles",
    description: "Trío de mieles varietales —Tineo, Tiaca y Ulmo— en formato de 35 g cada una, presentado en un atractivo pack de regalo de cartón café con impresión en tinta negra.",
    image: "/gift.jpeg",
    rating: 5,
    category: "Gift",
  },
  {
    id: 6,
    name: "Hidromiel",
    description: "Las primeras botellas de nuestra producción anual de hidromiel, elaborada con manzanas de otoño.",
    image: "/hidromiel.jpeg",
    rating: 5,
    category: "Hidromiel",
  },
  {
    id: 7,
    name: "Baldes",
    description: "Baldes disponibles en distintos formatos.Se recomienda encargar con anticipación.Formatos en tienda: 1,5 kg 2,5 kg Formatos a pedido: Tinetas de 5 kg y 7 kg Despacho a regiones vía Pullman o Correos de Chile.",
    image: "/baldes.jpeg",
    rating: 5,
    category: "Mieles",
  },
  {
    id: 8,
    name: "Miel en Panal",
    description: "Miel en panal (miel virgen). Miel en su envase original, que conserva intactos sus sabores y aromas más sutiles.",
    image: "/mielpanal.jpeg",
    rating: 5,
    category: "Mieles",
  },
  {
    id: 9,
    name: "Velas de Cera de Abeja",
    description: "Naturales, limpias y de combustión pura, ideales para crear ambientes cálidos y armoniosos.",
    image: "/velas.jpeg",
    rating: 5,
    category: "Accesorios",
  },
  {
    id: 10,
    name: "Cera Pura de Abeja",
    description: "Disponible desde 50 gramos. Ideal para cosmética, velas y usos artesanales.",
    image: "/cera.jpeg",
    rating: 5,
    category: "Accesorios",
  },
]

// Configuración de WhatsApp - cambiá el número por el del cliente
const WHATSAPP_NUMBER = "50361615021" // formato: código país + número sin espacios

const generateWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(
    `Hola! Tienen disponible  *${productName}*. ¿Podrían darme preció?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

interface ProductsGridProps {
  selectedCategory: string
}

export function ProductsGrid({ selectedCategory }: ProductsGridProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter((p) => p.category === selectedCategory)

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

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
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
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
                <Button
                  asChild
                  className="w-full rounded-full group/btn mt-auto"
                >
                  <a
                    href={generateWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar disponibilidad
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

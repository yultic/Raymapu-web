"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Camera } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

// Poner en `true` cuando Pía entregue las fotos definitivas de la galería.
// Mientras esté en `false` se muestra el estado "Galería en construcción".
// Para activar: subir las fotos a /public con estos nombres (galeria-1.jpg ... galeria-12.jpg)
// o ajustar los `src` de abajo, y cambiar IMAGES_READY a true.
const IMAGES_READY = false

const images = [
  {
    src: "/galeria-1.jpg",
    alt: "Colmenas en Río Puelo",
    category: "Apiario",
    size: "large",
  },
  {
    src: "/galeria-2.jpg",
    alt: "Miel de Ulmo",
    category: "Productos",
    size: "small",
  },
  {
    src: "/galeria-3.jpg",
    alt: "Atardecer en la Patagonia Norte",
    category: "Paisajes",
    size: "medium",
  },
  {
    src: "/galeria-4.jpg",
    alt: "Experiencia familiar",
    category: "Turismo",
    size: "small",
  },
  {
    src: "/galeria-5.jpg",
    alt: "Miel goteando del panal",
    category: "Productos",
    size: "medium",
  },
  {
    src: "/galeria-6.jpg",
    alt: "Apicultor inspeccionando colmena",
    category: "Apiario",
    size: "small",
  },
  {
    src: "/galeria-7.jpg",
    alt: "Bosque nativo de la Patagonia",
    category: "Paisajes",
    size: "large",
  },
  {
    src: "/galeria-8.jpg",
    alt: "Degustación de miel",
    category: "Turismo",
    size: "small",
  },
  {
    src: "/galeria-9.jpg",
    alt: "Pack de regalo",
    category: "Productos",
    size: "medium",
  },
  {
    src: "/galeria-10.jpg",
    alt: "Grupo de visitantes",
    category: "Eventos",
    size: "small",
  },
  {
    src: "/galeria-11.jpg",
    alt: "Paisaje de Río Puelo",
    category: "Paisajes",
    size: "medium",
  },
  {
    src: "/galeria-12.jpg",
    alt: "Panal con abejas",
    category: "Apiario",
    size: "small",
  },
]

export function GalleryGrid() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 })
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)

  if (!IMAGES_READY) {
    return (
      <section ref={sectionRef} className="py-24">
        <div className="container mx-auto px-6">
          <div
            className={cn(
              "max-w-xl mx-auto text-center flex flex-col items-center gap-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Camera className="w-9 h-9 text-primary" />
            </div>
            <h2 className="font-display text-4xl text-foreground">Galería en construcción</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estamos preparando una selección de fotos de nuestros colmenares, productos y
              los paisajes de la Patagonia Norte. ¡Vuelve pronto!
            </p>
            <Link
              href="/turismo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
            >
              Conoce nuestro turismo apícola
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section ref={sectionRef} className="py-16">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={cn(
                  "group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid transition-all duration-500",
                  "hover:shadow-dramatic hover:-translate-y-1",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  image.size === "large" ? "aspect-[3/4]" : image.size === "medium" ? "aspect-square" : "aspect-[4/3]",
                )}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-primary font-medium">{image.category}</span>
                    <p className="text-card font-medium">{image.alt}</p>
                  </div>
                </div>
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/40 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-card" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <span className="text-sm text-primary font-medium">{selectedImage.category}</span>
            <p className="text-card font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}

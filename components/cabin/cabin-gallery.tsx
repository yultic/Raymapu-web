"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const images = [
  { src: "/c7.webp", alt: "Cabaña Raymapu entre el bosque nativo", orientation: "landscape" },
  { src: "/c1.jpeg", alt: "Interior con escalera al loft", orientation: "portrait" },
  { src: "/c2.jpeg", alt: "Cama matrimonial", orientation: "portrait" },
  { src: "/c5.jpeg", alt: "Comedor con vista al bosque", orientation: "portrait" },
  { src: "/c4.jpeg", alt: "Cocina equipada", orientation: "portrait" },
  { src: "/c6.jpeg", alt: "Loft con dos camas individuales", orientation: "landscape" },
  { src: "/c3.jpeg", alt: "Baño con cabina de ducha", orientation: "portrait" },
]

export function CabinGallery() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 })
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)

  return (
    <>
      <section ref={sectionRef} id="galeria" className="py-24 bg-secondary/30 grain-overlay relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Galería
            </span>
            <h2 className="text-display-md font-bold text-foreground mb-4">Recorre la cabaña</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Luz natural, calidez y el bosque asomándose por cada ventana.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-5xl mx-auto">
            {images.map((image, index) => (
              <div
                key={image.src}
                onClick={() => setSelectedImage(image)}
                className={cn(
                  "group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid transition-all duration-500",
                  "hover:shadow-dramatic hover:-translate-y-1",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  image.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]",
                )}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-card font-medium">{image.alt}</p>
                  </div>
                </div>
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
            aria-label="Cerrar imagen"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/10 hover:bg-card/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-card" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-card font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}

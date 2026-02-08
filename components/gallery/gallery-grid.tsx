"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const images = [
  {
    src: "/beehives-in-beautiful-araucania-landscape-morning-l.jpg",
    alt: "Colmenas en la Araucanía",
    category: "Apiario",
    size: "large",
  },
  {
    src: "/jar-of-ulmo-honey-with-golden-color-and-wooden-hon.jpg",
    alt: "Miel de Ulmo",
    category: "Productos",
    size: "small",
  },
  {
    src: "/villarrica-volcano-at-sunset-with-lake-reflection.jpg",
    alt: "Volcán Villarrica al atardecer",
    category: "Paisajes",
    size: "medium",
  },
  {
    src: "/family-at-beekeeping-experience-with-children-learn.jpg",
    alt: "Experiencia familiar",
    category: "Turismo",
    size: "small",
  },
  {
    src: "/close-up-of-honey-dripping-from-honeycomb-golden-l.jpg",
    alt: "Miel goteando del panal",
    category: "Productos",
    size: "medium",
  },
  {
    src: "/beekeeper-inspecting-hive-frame-with-bees.jpg",
    alt: "Apicultor inspeccionando colmena",
    category: "Apiario",
    size: "small",
  },
  {
    src: "/native-forest-in-araucania-with-araucaria-trees.jpg",
    alt: "Bosque nativo con araucarias",
    category: "Paisajes",
    size: "large",
  },
  {
    src: "/honey-tasting-session-with-different-varieties.jpg",
    alt: "Degustación de miel",
    category: "Turismo",
    size: "small",
  },
  {
    src: "/gift-pack-of-honey-products-with-three-jars-and-pr.jpg",
    alt: "Pack de regalo",
    category: "Productos",
    size: "medium",
  },
  {
    src: "/group-of-visitors-at-beekeeping-tour-in-chile.jpg",
    alt: "Grupo de visitantes",
    category: "Eventos",
    size: "small",
  },
  {
    src: "/beautiful-landscape-of-villarrica-with-native-forest.jpg",
    alt: "Paisaje de Villarrica",
    category: "Paisajes",
    size: "medium",
  },
  {
    src: "/hands-holding-honeycomb-frame-with-bees-natural-li.jpg",
    alt: "Panal con abejas",
    category: "Apiario",
    size: "small",
  },
]

export function GalleryGrid() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 })
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)

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

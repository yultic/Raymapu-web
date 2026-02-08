"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const images = [
  { src: "/8.jpg", alt: "Tour por el Bosque y colmenas", height: "tall" },
  { src: "/3.jpg", alt: "Flora del Bosque", height: "short" },
  { src: "/2.jpg", alt: "Visitantes observando colmena", height: "short" },
  { src: "/5.jpg", alt: "Bosque Verde", height: "tall" },
]

export function TourismGallery() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Galería
          </span>
          <h2 className="text-display-md font-bold text-foreground">Momentos inolvidables</h2>
        </div>

        {/* Masonry layout con alturas variadas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500",
                image.height === "tall" ? "aspect-[3/4]" : "aspect-square",
                index === 0 && "lg:col-span-2 lg:row-span-2",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end justify-start p-4">
                <span className="text-card font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

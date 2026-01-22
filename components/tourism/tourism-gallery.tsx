"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const images = [
  { src: "/visitors-observing-beehive-up-close-educational-tour.jpg", alt: "Visitantes observando colmena" },
  { src: "/beautiful-landscape-of-villarrica-with-native-forest.jpg", alt: "Paisaje de Villarrica" },
  { src: "/honey-tasting-session-with-different-varieties.jpg", alt: "Degustación de miel" },
  { src: "/beekeeper-showing-honeycomb-to-visitors.jpg", alt: "Apicultor mostrando panal" },
]

export function TourismGallery() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Galería
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Momentos inolvidables</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-500",
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
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-card font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["Todas", "Apiario", "Productos", "Paisajes", "Turismo", "Eventos"]

export function GalleryCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Todas")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-foreground hover:bg-secondary/80",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

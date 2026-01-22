"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Droplets, Pill, Flower2, Gift } from "lucide-react"

const categories = [
  { icon: Droplets, name: "Mieles", count: 5 },
  { icon: Pill, name: "Propóleo", count: 3 },
  { icon: Flower2, name: "Polen", count: 2 },
  { icon: Gift, name: "Packs", count: 4 },
]

export function ProductCategories() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Mieles")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-card text-foreground border-border hover:border-primary/50",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
              <span
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  activeCategory === category.name ? "bg-primary-foreground/20" : "bg-muted",
                )}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

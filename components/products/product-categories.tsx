"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Droplets, Gift, Wine, Flame, LayoutGrid } from "lucide-react"

const categories = [
  { icon: LayoutGrid, name: "Todos", count: 10 },
  { icon: Droplets, name: "Mieles", count: 6 },
  { icon: Gift, name: "Gift", count: 1 },
  { icon: Wine, name: "Hidromiel", count: 1 },
  { icon: Flame, name: "Accesorios", count: 2 },
]

interface ProductCategoriesProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function ProductCategories({ selectedCategory, onCategoryChange }: ProductCategoriesProps) {
  const [isVisible, setIsVisible] = useState(false)
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
              onClick={() => onCategoryChange(category.name)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                selectedCategory === category.name
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
                  selectedCategory === category.name ? "bg-primary-foreground/20" : "bg-muted",
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

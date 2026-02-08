"use client"

import { useRef, useState, useEffect } from "react"
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const activeButton = container.querySelector(`[data-category="${selectedCategory}"]`) as HTMLButtonElement
    if (activeButton) {
      const containerRect = container.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      setPillStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      })
    }
  }, [selectedCategory])

  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-6">
        <div ref={containerRef} className="flex flex-wrap justify-center gap-4 relative">
          {/* Pill animado */}
          <div
            className="absolute top-0 h-full bg-primary rounded-full shadow-lg shadow-primary/25 transition-all duration-300 ease-out hidden md:block"
            style={{ left: pillStyle.left, width: pillStyle.width }}
          />
          {categories.map((category, index) => (
            <button
              key={category.name}
              data-category={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={cn(
                "relative z-10 flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                selectedCategory === category.name
                  ? "text-primary-foreground border-transparent md:bg-transparent bg-primary md:border-transparent shadow-lg shadow-primary/25 md:shadow-none"
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

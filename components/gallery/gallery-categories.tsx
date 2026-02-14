"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["Todas", "Apiario", "Productos", "Paisajes", "Turismo", "Eventos"]

export function GalleryCategories() {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  useEffect(() => {
    const btn = buttonRefs.current.get(activeCategory)
    if (btn && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      setPillStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      })
    }
  }, [activeCategory])

  return (
    <section className="py-8 border-b border-border sticky top-20 bg-background/80 backdrop-blur-xl z-40">
      <div className="container mx-auto px-6">
        <div ref={containerRef} className="relative flex flex-wrap justify-center gap-3">
          <div
            className="absolute top-0 h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ left: pillStyle.left, width: pillStyle.width }}
          />
          {categories.map((category) => (
            <button
              key={category}
              ref={(el) => {
                if (el) buttonRefs.current.set(category, el)
              }}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                activeCategory === category
                  ? "text-primary-foreground"
                  : "text-foreground hover:text-primary",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

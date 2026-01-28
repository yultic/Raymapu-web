"use client"

import { useState } from "react"
import { HeroProducts } from "@/components/products/hero-products"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductCategories } from "@/components/products/product-categories"
import { ProductsBenefits } from "@/components/products/products-benefits"

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  return (
    <div className="min-h-screen bg-background">
      <HeroProducts />
      <ProductCategories
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductsGrid selectedCategory={selectedCategory} />
      <ProductsBenefits />
    </div>
  )
}

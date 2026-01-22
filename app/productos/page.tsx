import { HeroProducts } from "@/components/products/hero-products"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductCategories } from "@/components/products/product-categories"
import { ProductsBenefits } from "@/components/products/products-benefits"

export const metadata = {
  title: "Productos - Miel Raymapu",
  description:
    "Descubre nuestra línea de miel natural, propóleo, polen y productos apícolas de la Araucanía. 100% puros y artesanales.",
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroProducts />
      <ProductCategories />
      <ProductsGrid />
      <ProductsBenefits />
    </div>
  )
}

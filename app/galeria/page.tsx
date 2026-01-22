import { HeroGallery } from "@/components/gallery/hero-gallery"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { GalleryCategories } from "@/components/gallery/gallery-categories"

export const metadata = {
  title: "Galería - Miel Raymapu",
  description:
    "Explora nuestra galería de fotos. Nuestro apiario, productos, experiencias de turismo y la hermosa Araucanía.",
}

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroGallery />
      <GalleryCategories />
      <GalleryGrid />
    </div>
  )
}

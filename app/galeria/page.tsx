import { HeroGallery } from "@/components/gallery/hero-gallery"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
// Restaurar cuando la galería tenga fotos (ver IMAGES_READY en gallery-grid.tsx):
// import { GalleryCategories } from "@/components/gallery/gallery-categories"

export const metadata = {
  title: "Galería",
  description:
    "Explora nuestra galería de fotos: colmenares, productos, experiencias de turismo apícola y los paisajes de la Patagonia Norte en Río Puelo.",
}

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroGallery />
      {/* <GalleryCategories /> */}
      <GalleryGrid />
    </div>
  )
}

import { HeroHome } from "@/components/home/hero-home"
import { FeaturesSection } from "@/components/home/features-section"
import { ProductsPreview } from "@/components/home/products-preview"
import { AboutPreview } from "@/components/home/about-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHome />
      <FeaturesSection />
      <ProductsPreview />
      <AboutPreview />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

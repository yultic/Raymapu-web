import { HeroTourism } from "@/components/tourism/hero-tourism"
import { TourismExperiences } from "@/components/tourism/tourism-experiences"
import { TourismGallery } from "@/components/tourism/tourism-gallery"
import { TourismInfo } from "@/components/tourism/tourism-info"
import { TourismBooking } from "@/components/tourism/tourism-booking"

export const metadata = {
  title: "Turismo - Miel Raymapu",
  description:
    "Vive la experiencia del turismo apícola en Villarrica. Visita nuestro apiario, conoce las abejas y disfruta de la naturaleza de la Araucanía.",
}

export default function TurismoPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroTourism />
      <TourismExperiences />
      <TourismGallery />
      <TourismInfo />
      <TourismBooking />
    </div>
  )
}

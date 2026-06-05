import { HeroTourism } from "@/components/tourism/hero-tourism"
import { TourismExperiences } from "@/components/tourism/tourism-experiences"
import { TourismGallery } from "@/components/tourism/tourism-gallery"
import { TourismInfo } from "@/components/tourism/tourism-info"
import { TourismBooking } from "@/components/tourism/tourism-booking"

export const metadata = {
  title: "Turismo Apícola",
  description:
    "Vive la experiencia del turismo apícola en Río Puelo, Patagonia Norte. Visita nuestros colmenares, conoce a las abejas y disfruta del bosque nativo.",
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

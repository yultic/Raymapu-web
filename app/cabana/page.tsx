import { HeroCabin } from "@/components/cabin/hero-cabin"
import { CabinFeatures } from "@/components/cabin/cabin-features"
import { CabinGallery } from "@/components/cabin/cabin-gallery"
import { CabinInfo } from "@/components/cabin/cabin-info"
import { CabinBooking } from "@/components/cabin/cabin-booking"

export const metadata = {
  title: "Cabaña",
  description:
    "Arrienda nuestra cabaña en Río Puelo, Patagonia Norte. Tu refugio en la naturaleza: bosque nativo, hasta 4 personas, a 4 km de las Termas del Sol. Reserva por WhatsApp.",
}

export default function CabanaPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroCabin />
      <CabinFeatures />
      <CabinGallery />
      <CabinInfo />
      <CabinBooking />
    </div>
  )
}

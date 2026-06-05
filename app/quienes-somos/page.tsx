import { HeroAbout } from "@/components/about/hero-about"
import { OurStory } from "@/components/about/our-story"
import { OurValues } from "@/components/about/our-values"
import { OurTeam } from "@/components/about/our-team"
import { Timeline } from "@/components/about/timeline"

export const metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce nuestra historia, valores y el equipo detrás de Raymapu. Tradición apícola en Río Puelo desde 2008, en plena Patagonia Norte.",
}

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroAbout />
      <OurStory />
      <OurValues />
      <Timeline />
      <OurTeam />
    </div>
  )
}

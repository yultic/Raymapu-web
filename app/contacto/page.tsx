import { HeroContact } from "@/components/contact/hero-contact"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata = {
  title: "Contacto - Miel Raymapu",
  description: "Contáctanos para conocer más sobre nuestra miel natural y productos. Estamos en Villarrica, Araucanía.",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroContact />
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <ContactMap />
    </div>
  )
}

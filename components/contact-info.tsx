"use client"

import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactItems = [
  {
    icon: Phone,
    title: "Teléfonos",
    content: ["+569 96 16 54 88 (Pia)", "+569 9129 78 83 (Vito)"],
    href: "tel:+56996165488",
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@raymapu.cl"],
    href: "mailto:info@raymapu.cl",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    content: ["Villarrica, Región de la Araucanía", "Chile"],
    href: "https://maps.google.com/?q=Villarrica,Chile",
  },
  {
    icon: Clock,
    title: "Horario",
    content: ["Lunes a Viernes: 9:00 - 18:00", "Sábado: 10:00 - 14:00"],
    href: null,
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Cards */}
      <div className="grid gap-4">
        {contactItems.map((item, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg bg-card overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
            <CardContent className="p-0">
              <a
                href={item.href || undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-5 transition-colors duration-300 hover:bg-secondary/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    {item.title}
                    {item.href && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </h3>
                  {item.content.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Map */}
      <Card className="border-0 shadow-lg bg-card overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.8373686895854!2d-72.22762352392956!3d-39.28168987166036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96148a8bc2c60f55%3A0x9e8a1f9f5e8d1c0a!2sVillarrica%2C%20Araucan%C3%ADa%2C%20Chile!5e0!3m2!1ses!2scl!4v1704300000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              title="Ubicación de Miel Raymapu"
            />
          </div>
        </CardContent>
      </Card>

      {/* Image */}
      <Card className="border-0 shadow-lg bg-card overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/natural-honey-jars-with-mapuche-traditional-patter.jpg"
              alt="Productos Miel Raymapu"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-card font-bold text-xl mb-1">Miel 100% Natural</h3>
                <p className="text-card/80 text-sm">Desde la Araucanía con amor</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

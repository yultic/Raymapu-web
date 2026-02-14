"use client"

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const contactDetails = [
  {
    icon: Phone,
    title: "Teléfonos",
    lines: ["+569 96 16 54 88 (Pia)"],
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    lines: ["info@raymapu.cl"],
  },
  {
    icon: MapPin,
    title: "Ubicación",
    lines: ["Rio Puelo, Chile"],
  },
  {
    icon: Clock,
    title: "Horario de atención",
    lines: ["Lunes a Sábado: 10:00 - 18:00", "Domingo: Solo con reserva"],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function ContactInfo() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-700 delay-200",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
      )}
    >
      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        Información
      </span>
      <h2 className="text-display-md font-bold text-foreground mb-6">Datos de contacto</h2>
      <p className="text-muted-foreground mb-8">
        También puedes contactarnos directamente por teléfono o visitarnos en nuestro apiario.
      </p>

      <div className="space-y-6 mb-10">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className={cn(
              "group/card flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg transition-all duration-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: `${index * 100 + 200}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover/card:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
              <detail.icon className="w-5 h-5 text-primary group-hover/card:animate-bounce transition-transform" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{detail.title}</h3>
              {detail.lines.map((line, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Síguenos en redes sociales</h3>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110 hover:rotate-6 group"
            >
              <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

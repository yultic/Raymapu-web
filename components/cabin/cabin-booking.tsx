"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"
import { buildWhatsAppUrl } from "@/lib/site-config"
import { FaWhatsapp } from "react-icons/fa"

export function CabinBooking() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const mensaje = `¡Hola! Me gustaría reservar la Cabaña Raymapu 🏡

*Datos de la reserva:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}
• Llegada: ${formData.checkIn}
• Salida: ${formData.checkOut}
• Personas: ${formData.guests}
${formData.message ? `• Mensaje: ${formData.message}` : ""}`

    window.open(buildWhatsAppUrl(mensaje), "_blank")
  }

  return (
    <section ref={sectionRef} id="reservar" className="py-24 bg-secondary/30 grain-overlay relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Reserva tu estadía
            </span>
            <h2 className="text-display-md font-bold text-foreground mb-4">Tu refugio te espera</h2>
            <p className="text-muted-foreground">
              Cuéntanos cuándo quieres venir y te confirmamos la disponibilidad por WhatsApp.
            </p>
          </div>

          <div
            className={cn(
              "bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border/50 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="rounded-lg"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    placeholder="+56 9 1234 5678"
                    className="rounded-lg"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Fecha de llegada</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="checkIn"
                      type="date"
                      className="rounded-lg pl-10"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkOut">Fecha de salida</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="checkOut"
                      type="date"
                      className="rounded-lg pl-10"
                      required
                      min={formData.checkIn || undefined}
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Número de personas</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="4"
                    placeholder="2"
                    className="rounded-lg pl-10"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  />
                </div>
                <p className="text-xs text-muted-foreground">Capacidad máxima: 4 personas.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje adicional (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos si tienes alguna consulta o solicitud especial..."
                  className="rounded-lg min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-[#25D366] hover:bg-[#1da851]">
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Reservar por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

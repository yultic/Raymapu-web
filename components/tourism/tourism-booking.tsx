"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export function TourismBooking() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="reservar" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Reserva tu visita
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Agenda tu experiencia</h2>
            <p className="text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva.
            </p>
          </div>

          <div
            className={cn(
              "bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border/50 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="rounded-lg" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+56 9 1234 5678" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experiencia</Label>
                  <Select>
                    <SelectTrigger id="experience" className="rounded-lg">
                      <SelectValue placeholder="Selecciona una experiencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tour">Tour del Apiario</SelectItem>
                      <SelectItem value="taller">Taller de Extracción</SelectItem>
                      <SelectItem value="familiar">Experiencia Familiar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha preferida</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="date" type="date" className="rounded-lg pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Número de personas</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="guests" type="number" min="1" max="15" placeholder="2" className="rounded-lg pl-10" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje adicional (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos si tienes alguna solicitud especial..."
                  className="rounded-lg min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                <Send className="w-4 h-4 mr-2" />
                Enviar Solicitud de Reserva
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

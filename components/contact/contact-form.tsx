"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
      )}
    >
      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        Escríbenos
      </span>
      <h2 className="text-3xl font-bold text-foreground mb-6">Envíanos un mensaje</h2>
      <p className="text-muted-foreground mb-8">
        Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Tu nombre" className="rounded-lg" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="tu@email.com" className="rounded-lg" required />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" placeholder="+56 9 1234 5678" className="rounded-lg" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Asunto</Label>
            <Select>
              <SelectTrigger id="subject" className="rounded-lg">
                <SelectValue placeholder="Selecciona un asunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="productos">Consulta sobre productos</SelectItem>
                <SelectItem value="pedido">Realizar un pedido</SelectItem>
                <SelectItem value="turismo">Reserva de turismo</SelectItem>
                <SelectItem value="mayorista">Venta mayorista</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            placeholder="Cuéntanos en qué podemos ayudarte..."
            className="rounded-lg min-h-[150px]"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className={cn("rounded-full w-full sm:w-auto px-8 transition-all", isSubmitted && "bg-accent")}
          disabled={isSubmitted}
        >
          {isSubmitted ? (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Mensaje enviado
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Enviar mensaje
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

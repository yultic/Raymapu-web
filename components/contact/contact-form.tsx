"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

const EMAIL = "mielraymapu@gmail.com"

const asuntos: Record<string, string> = {
  productos: "Consulta sobre productos",
  pedido: "Realizar un pedido",
  turismo: "Reserva de turismo",
  mayorista: "Venta mayorista",
  otro: "Otro",
}

export function ContactForm() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const asunto = asuntos[formData.subject] || formData.subject || "Contacto desde la web"
    const cuerpo = `Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || "No proporcionado"}

Mensaje:
${formData.message}`

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
    window.location.href = mailtoUrl

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
      <h2 className="text-display-md font-bold text-foreground mb-6">Envíanos un mensaje</h2>
      <p className="text-muted-foreground mb-8">
        Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2 group/field">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              placeholder="Tu nombre"
              className="rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2 group/field">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2 group/field">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              placeholder="+56 9 1234 5678"
              className="rounded-lg transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2 group/field">
            <Label htmlFor="subject">Asunto</Label>
            <Select
              value={formData.subject}
              onValueChange={(value) => setFormData({ ...formData, subject: value })}
            >
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

        <div className="space-y-2 group/field">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            placeholder="Cuéntanos en qué podemos ayudarte..."
            className="rounded-lg min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

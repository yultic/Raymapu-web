"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-2xl bg-card overflow-hidden">
        <CardContent className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 animate-pulse-glow">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">¡Mensaje Enviado!</h3>
          <p className="text-muted-foreground mb-6">Gracias por contactarnos. Te responderemos lo antes posible.</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Enviar otro mensaje
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-2xl bg-card overflow-hidden group" id="contacto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative pb-2">
        <CardTitle className="text-3xl font-bold text-foreground">Envíanos un mensaje</CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          Completa el formulario y nos pondremos en contacto contigo
        </CardDescription>
      </CardHeader>

      <CardContent className="relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className={`transition-colors duration-300 ${
                  focusedField === "nombre" ? "text-primary" : "text-foreground"
                }`}
              >
                Nombre <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                required
                onFocus={() => setFocusedField("nombre")}
                onBlur={() => setFocusedField(null)}
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={`transition-colors duration-300 ${
                  focusedField === "email" ? "text-primary" : "text-foreground"
                }`}
              >
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="asunto"
              className={`transition-colors duration-300 ${
                focusedField === "asunto" ? "text-primary" : "text-foreground"
              }`}
            >
              Asunto
            </Label>
            <Input
              id="asunto"
              name="asunto"
              placeholder="¿En qué podemos ayudarte?"
              onFocus={() => setFocusedField("asunto")}
              onBlur={() => setFocusedField(null)}
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="mensaje"
              className={`transition-colors duration-300 ${
                focusedField === "mensaje" ? "text-primary" : "text-foreground"
              }`}
            >
              Mensaje <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              required
              onFocus={() => setFocusedField("mensaje")}
              onBlur={() => setFocusedField(null)}
              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group/btn"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar Mensaje
                <Send className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

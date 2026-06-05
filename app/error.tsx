"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RotateCcw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background px-6 py-24">
      <div className="max-w-xl text-center flex flex-col items-center">
        <h1 className="text-display-lg font-bold text-foreground mb-4">
          Algo salió <em className="font-display italic text-primary">mal</em>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
          Ocurrió un error inesperado. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => reset()}
            className="rounded-full px-8 shadow-lg shadow-primary/30"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Intentar de nuevo
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ir al inicio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

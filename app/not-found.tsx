import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background px-6 py-24">
      <div className="max-w-xl text-center flex flex-col items-center">
        <span className="font-display text-[7rem] leading-none text-primary">404</span>
        <h1 className="text-display-lg font-bold text-foreground mt-2 mb-4">
          Página <em className="font-display italic text-primary">no encontrada</em>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
          La página que buscas no existe o fue movida. Volvamos al camino de la miel.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/30 group">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ir al inicio
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/productos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ver productos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

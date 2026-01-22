import Link from "next/link"
import { Facebook, Instagram, Youtube, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-2xl text-card">Raymapu</span>
            </Link>
            <p className="text-card/70 max-w-md mb-6 leading-relaxed">
              Miel natural de la Araucanía, producida con respeto por la naturaleza y las tradiciones mapuche. Desde
              Villarrica, llevamos el sabor de Chile a tu hogar.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Quiénes Somos", href: "/quienes-somos" },
                { label: "Productos", href: "/productos" },
                { label: "Turismo", href: "/turismo" },
                { label: "Galería", href: "/galeria" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-card/70 hover:text-primary transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-card/70">
              <li>
                <a href="tel:+56996165488" className="hover:text-primary transition-colors">
                  +569 96 16 54 88
                </a>
              </li>
              <li>
                <a href="tel:+56991297883" className="hover:text-primary transition-colors">
                  +569 9129 78 83
                </a>
              </li>
              <li>
                <a href="mailto:info@raymapu.cl" className="hover:text-primary transition-colors">
                  info@raymapu.cl
                </a>
              </li>
              <li>Villarrica, Chile</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-card/60 text-sm">
            © {new Date().getFullYear()} Miel Raymapu. Todos los derechos reservados.
          </p>
          <p className="text-card/60 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-destructive fill-destructive" /> en Chile
          </p>
        </div>
      </div>
    </footer>
  )
}

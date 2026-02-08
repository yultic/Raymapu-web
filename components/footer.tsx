import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Heart, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-amber-50 to-amber-100/50 text-foreground border-t border-amber-200 grain-overlay">
      {/* Wave SVG separator */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-8 md:h-10">
          <path
            d="M0,20 C150,35 350,0 600,20 C850,40 1050,5 1200,20 L1200,0 L0,0 Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-3 group">
              <Image
                src="/raymapu2.png"
                alt="Raymapu"
                width={130}
                height={52}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="font-display text-2xl text-foreground mb-2">Miel Raymapu</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Miel natural en Rio Puelo, producida con respeto por la naturaleza.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com/raymapumiel", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/raymapumiel/", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UCKU88R7N4V-f-RhVIbzsckg", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:rotate-6"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-amber-800 mb-3">Enlaces</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Quiénes Somos", href: "/quienes-somos" },
                { label: "Productos", href: "/productos" },
                { label: "Turismo", href: "/turismo" },
                { label: "Galería", href: "/galeria" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-amber-800 mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+56996165488" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +569 96 16 54 88
                </a>
              </li>
              <li>
                <a href="mailto:info@raymapu.cl" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@raymapu.cl
                </a>
              </li>
              <li className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Rio Puelo, Chile
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-amber-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Miel Raymapu. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Yultic
          </p>
        </div>
      </div>
    </footer>
  )
}

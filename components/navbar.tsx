"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/productos", label: "Productos" },
  { href: "/turismo", label: "Turismo" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+56996165488" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+569 96 16 54 88</span>
            </a>
            <a href="mailto:info@raymapu.cl" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>mielraymapu@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/raymapumiel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/raymapumiel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCKU88R7N4V-f-RhVIbzsckg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background",
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              >
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 border-t border-border" : "max-h-0",
          )}
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <div className="flex items-center gap-4 px-4 text-muted-foreground">
                <a href="tel:+56996165488" className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+569 96 16 54 88</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

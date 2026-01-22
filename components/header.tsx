"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span
            className={cn(
              "font-bold text-xl transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-card",
            )}
          >
            Raymapu
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Inicio", "Productos", "Nosotros", "Contacto"].map((item) => (
            <Link
              key={item}
              href={item === "Contacto" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "relative font-medium transition-colors duration-300 hover:text-primary",
                isScrolled ? "text-foreground" : "text-card",
                item === "Contacto" && "text-primary",
              )}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {[
            { icon: Facebook, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Youtube, href: "#" },
          ].map(({ icon: Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              className={cn(
                "p-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground",
                isScrolled ? "text-foreground" : "text-card",
              )}
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-card")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-card")} />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-card shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {["Inicio", "Productos", "Nosotros", "Contacto"].map((item) => (
            <Link
              key={item}
              href={item === "Contacto" ? "/" : `/${item.toLowerCase()}`}
              className="text-foreground font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

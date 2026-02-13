import type React from "react"
import type { Metadata } from "next"
import { Amatic_SC, Montserrat, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const amaticSC = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cta",
})

export const metadata: Metadata = {
  title: "Miel Raymapu - Mieles de la Patagonia",
  description:
    "Miel natural, productos apícolas y experiencias de turismo en la hermosa Araucanía. Tradición mapuche y naturaleza.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${amaticSC.variable} ${quicksand.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

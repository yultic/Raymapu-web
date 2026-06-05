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

const siteUrl = "https://raymapu.cl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raymapu - Mieles de la Patagonia",
    template: "%s | Raymapu",
  },
  description:
    "Miel natural y productos apícolas de la Patagonia Norte, producidos en Río Puelo, Chile. Bosques nativos, tradición y turismo apícola.",
  keywords: [
    "miel natural",
    "miel Patagonia",
    "Río Puelo",
    "Cochamó",
    "productos apícolas",
    "turismo apícola",
    "miel Chile",
    "bosque nativo",
    "Raymapu",
  ],
  authors: [{ name: "Raymapu" }],
  creator: "Raymapu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Raymapu - Mieles de la Patagonia",
    title: "Raymapu - Mieles de la Patagonia",
    description:
      "Miel natural y productos apícolas de la Patagonia Norte, producidos en Río Puelo, Chile.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raymapu - Mieles de la Patagonia, Río Puelo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
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

import type { MetadataRoute } from "next"

const siteUrl = "https://raymapu.cl"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/quienes-somos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/productos", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/turismo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/cabana", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/galeria", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }))
}

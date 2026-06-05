import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raymapu - Mieles de la Patagonia",
    short_name: "Raymapu",
    description:
      "Miel natural y productos apícolas de la Patagonia Norte, producidos en Río Puelo, Chile.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F1",
    theme_color: "#C98B3D",
    lang: "es-CL",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}

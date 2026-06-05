import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Descubre nuestra miel natural y productos apícolas de la Patagonia Norte: mieles de bosque nativo, hidromiel, cera, velas y más. Despacho a todo Chile.",
}

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

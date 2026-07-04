# Issues pendientes — Raymapu

Backlog de mejoras detectadas en el diagnóstico del 2026-07-04. Ir marcando con `[x]` a medida que se reparen.

## 🐛 Bugs

- [x] **Formulario de turismo enviaba la experiencia equivocada por WhatsApp** — el mapa `experiencias` de `tourism-booking.tsx` no coincidía con las opciones del Select. Corregido: ahora el Select se genera desde el mismo objeto. *(reparado 2026-07-04)*
- [ ] **`npm run lint` está roto** — el script existe en `package.json` pero ESLint no está en `devDependencies`. Instalar `eslint` + `eslint-config-next` y correr el lint para ver qué aparece.

## 🧹 Deuda técnica

- [ ] **Centralizar datos de contacto en `lib/site-config.ts`** — el número de WhatsApp (`56996165488`), teléfono, email y redes sociales están hardcodeados en 7+ archivos: `navbar.tsx`, `footer.tsx`, `products-grid.tsx`, `tourism-booking.tsx`, `tourism-experiences.tsx`, `products-preview.tsx`, `contact-info.tsx`. Un cambio de número obliga a tocar todos. Migrar componente por componente a `lib/site-config.ts` (creado con la página de la cabaña).
- [ ] **Eliminar ~30 dependencias sin uso** — el `package.json` arrastra el kit completo de v0/shadcn: `recharts`, `sonner`, `vaul`, `cmdk`, `react-day-picker`, `date-fns`, `input-otp`, `react-resizable-panels`, `next-themes` y ~20 paquetes `@radix-ui/*` que ningún componente importa. También `react-hook-form`, `zod` y `@hookform/resolvers` están instalados pero sin uso (los formularios usan `useState`). Verificar con grep antes de borrar cada una.
- [ ] **Actualizar CLAUDE.md** — dice que hay dark mode con `next-themes` (no hay `ThemeProvider` en el layout) y que los formularios validan con `react-hook-form` + `zod` (usan `useState` plano). Corregir para que refleje la realidad.

## 🔍 Menores

- [ ] **Optimizar imágenes pesadas de `public/`** — convertir a formatos más livianos o recomprimir: `vitopia.jpg` (488K), `tresmieles.jpg` (480K), `mielquienes.jpg` (452K), `miel2.jpg` (364K), `yates.jpg` (324K). `next/image` mitiga en producción, pero menos peso en el repo es mejor.
- [ ] **Borrar SVGs de template sin uso** — `public/next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`.
- [ ] **Accesibilidad del navbar** — el botón hamburguesa del menú móvil no tiene `aria-label`.
- [ ] **Sitemap: `lastModified` estático** — `new Date()` cambia en cada build y le resta valor como señal SEO. Usar fechas reales de última modificación por página, o quitarlo.
- [ ] **Galería en construcción** — cuando Pía entregue las fotos definitivas, subirlas como `galeria-1.jpg` … `galeria-12.jpg` y poner `IMAGES_READY = true` en `gallery-grid.tsx`.

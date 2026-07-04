// Datos de contacto y redes de Raymapu, centralizados.
// Si Pía cambia de número o email, se actualiza SOLO acá.
// Pendiente (issues.md): migrar navbar, footer y las secciones antiguas a este archivo.

export const siteConfig = {
  whatsappNumber: "56996165488",
  phoneDisplay: "+569 96 16 54 88",
  phoneHref: "tel:+56996165488",
  email: "info@raymapu.cl",
  social: {
    facebook: "https://www.facebook.com/raymapumiel",
    instagram: "https://www.instagram.com/raymapumiel/",
    youtube: "https://www.youtube.com/channel/UCKU88R7N4V-f-RhVIbzsckg",
  },
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoSlab = Roboto_Slab({ 
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agüero Obras Civiles | Especialistas en Trabajos de Altura y Construcción',
  description: 'Especialistas en trabajos de altura, estructuras metálicas y construcción en Córdoba. +10 años de experiencia. Expertos en mantenimiento en altura, torres de comunicación y obras civiles con certificación en seguridad.',
  keywords: ['trabajos en altura', 'estructuras metálicas', 'torres de comunicación', 'construcción Córdoba', 'mantenimiento en altura', 'rapel industrial', 'obras civiles', 'instalaciones eléctricas', 'paneles solares', 'construcción civil'],
  authors: [{ name: 'Agüero Obras Civiles' }],
  openGraph: {
    title: 'Agüero Obras Civiles | Especialistas en Trabajos de Altura',
    description: 'Más de 10 años construyendo confianza. Expertos en trabajos de altura, estructuras metálicas, torres de comunicación y obras civiles en Córdoba, Argentina.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${robotoSlab.variable}`}>
      <body className="font-sans antialiased">
        {/* Mejora a11y: Skip to main content link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-accent focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}

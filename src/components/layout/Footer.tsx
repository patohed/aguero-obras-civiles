import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigationLinks } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 bg-white px-6 py-5 rounded-xl inline-block shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
                <Image
                  src="/logo-aguero-v1-negro-mediano.png"
                  alt="Agüero Obras Civiles"
                  width={320}
                  height={105}
                  className="h-auto w-64 md:w-72 lg:w-80"
                  unoptimized
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {siteConfig.description}
              </p>
              {/* Mejora UX: Información de contacto con mejor espaciado */}
              <div className="space-y-3">
                <a href={`mailto:${siteConfig.links.email}`} className="flex items-center space-x-3 text-sm group hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    <Mail className="h-4 w-4 text-brand-accent" />
                  </div>
                  <span className="break-all">{siteConfig.links.email}</span>
                </a>
                <div className="space-y-2">
                  {siteConfig.contacts.map((contact, index) => (
                    <a 
                      key={index}
                      href={`https://wa.me/${contact.phoneClean}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-sm group hover:text-white transition-colors"
                    >
                      <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                        <Phone className="h-4 w-4 text-brand-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">{contact.name}</div>
                        <span>{contact.phone}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-brand-accent" />
                  </div>
                  <span className="leading-relaxed">{siteConfig.links.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links - Mejora UX: Links con hover más visible */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Navegación
              </h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-accent transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-brand-accent transition-all duration-200 mr-0 group-hover:mr-2" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Servicios
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>Trabajos en Altura</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>Estructuras Metálicas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>Torres de Comunicación</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>Construcción Civil</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>Instalaciones Especiales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>Mantenimiento Industrial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>Pisos de Granito Epóxico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} {siteConfig.name}. Todos los derechos reservados. Diseñado con ❤️ en Córdoba, Argentina.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

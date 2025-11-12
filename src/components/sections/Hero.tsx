'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/shared/Container'
import { fadeInUp } from '@/lib/animations'
import { ArrowRight } from 'lucide-react'
import { stats } from '@/lib/constants'

export function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector('#contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
          alt="Construcción de obras civiles - infraestructura"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay más oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <Container className="relative z-10 w-full">
        <div className="flex flex-col justify-between min-h-[calc(100vh-12rem)]">
          {/* Main Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl pt-8 md:pt-16"
          >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Especialistas en Trabajos de Altura y Construcción
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Más de una década construyendo confianza. Con equipos certificados, personal altamente capacitado y cumplimiento estricto de normas de seguridad, transformamos cada desafío en altura en una solución segura y eficiente.
          </motion.p>            <motion.div
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              {/* CTA principal - Ver servicios */}
              <Button 
                onClick={() => {
                  const element = document.querySelector('#servicios')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                size="xl"
                className="group bg-brand-accent hover:bg-brand-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              >
                Ver Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* CTA secundario */}
              <Button 
                onClick={handleContactClick}
                size="xl"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold transition-all duration-300"
              >
                Contactar
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Bar - Positioned at bottom with proper spacing */}
          <motion.div
            className="mt-20 md:mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          >
            {/* Stats grid con espaciado mejorado */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-white/15 backdrop-blur-md rounded-2xl p-8 md:p-10 border-2 border-white/30 shadow-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center relative py-4">
                  {index > 0 && (
                    <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-px h-16 bg-white/40" />
                  )}
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-100 font-semibold uppercase tracking-wider leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

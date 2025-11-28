'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/shared/Container'
import { fadeInUp } from '@/lib/animations'
import { ArrowRight } from 'lucide-react'
import { stats } from '@/lib/constants'
import { useState, useEffect } from 'react'

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop',
    alt: 'Construcción de obras civiles e infraestructura industrial',
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
    alt: 'Trabajadores profesionales en construcción de edificios',
  },
  {
    src: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2070&auto=format&fit=crop',
    alt: 'Estructura metálica y construcción industrial',
  },
  {
    src: 'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?q=80&w=2070&auto=format&fit=crop',
    alt: 'Obras civiles - construcción industrial con grúa',
  },
  {
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop',
    alt: 'Pisos industriales de concreto en construcción',
  },
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  const handleContactClick = () => {
    const element = document.querySelector('#contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-32">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage].src}
              alt={heroImages[currentImage].alt}
              fill
              className="object-cover"
              priority={currentImage === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay más oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'w-8 bg-white' 
                  : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
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
          {/* Badge superior */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">+10 años de experiencia</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Obras Civiles y{' '}
            <span className="text-brand-accent">Trabajos en Altura</span>
            {' '}de Alta Complejidad
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Especialistas en estructuras metálicas, torres de comunicación y construcción industrial. 
            <span className="text-white font-semibold"> Seguridad certificada</span> y equipos de última generación.
          </motion.p>            <motion.div
              className="flex flex-col sm:flex-row gap-4"
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
                className="group bg-brand-accent hover:bg-brand-accent/90 text-white shadow-[0_10px_40px_rgba(229,124,35,0.4)] hover:shadow-[0_15px_50px_rgba(229,124,35,0.5)] transition-all duration-300 font-bold text-base px-8 py-6"
              >
                Ver Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* CTA secundario */}
              <Button 
                onClick={handleContactClick}
                size="xl"
                className="bg-white/15 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-brand-primary hover:border-white font-bold text-base px-8 py-6 transition-all duration-300"
              >
                Solicitar Presupuesto
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
            {/* Stats grid con diseño mejorado */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              {stats.map((stat, index) => (
                <div key={index} className="text-center relative group">
                  {index > 0 && index < 4 && (
                    <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-px h-14 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                  )}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-200 font-semibold uppercase tracking-wide">
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

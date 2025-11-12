'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { aboutContent, stats } from '@/lib/constants'
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'

export function About() {
  return (
    <Section id="nosotros" background="white">
      <Container>
        <SectionHeading
          title="Sobre Nosotros"
          subtitle="Experiencia, profesionalismo y compromiso en cada proyecto"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo de construcción trabajando"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content - Mejora UX: Mejor jerarquía y espaciado */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInRight}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-3 flex items-center">
                <span className="w-1 h-8 bg-brand-accent rounded-full mr-3"></span>
                Nuestra Misión
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {aboutContent.mission}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-3 flex items-center">
                <span className="w-1 h-8 bg-brand-accent rounded-full mr-3"></span>
                Nuestra Visión
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {aboutContent.vision}
              </p>
            </div>

            <div className="pt-4 border-t-2 border-gray-200">
              <p className="text-gray-600 leading-relaxed text-base italic">
                {aboutContent.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Mejora UX: Stats con mejor jerarquía y separadores */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-gradient-to-br from-brand-primary via-brand-primary to-[#1a3342] rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              {index > 0 && index < 4 && (
                <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20" />
              )}
              <div className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-100 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

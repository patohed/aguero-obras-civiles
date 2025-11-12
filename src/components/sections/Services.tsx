'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/Container'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { services } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function Services() {
  return (
    <Section id="servicios" background="gray">
      <Container>
        <SectionHeading
          title="Nuestros Servicios Especializados"
          subtitle="Soluciones integrales para proyectos complejos y trabajos en altura"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                {/* Mejora UX: Cards con mejor jerarquía visual y layout optimizado */}
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-brand-accent/50 cursor-pointer">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand-primary/20 group-hover:to-brand-accent/20 transition-all duration-300 shadow-md">
                        <Icon className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors leading-tight pt-2">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow line-clamp-4">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}

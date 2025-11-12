'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/Container'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { values } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function Values() {
  return (
    <Section id="valores" background="gray">
      <Container>
        <SectionHeading
          title="Nuestros Valores"
          subtitle="Los principios que guían nuestro trabajo y definen nuestra cultura empresarial"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                {/* Mejora UX: Cards de valores con mejor espaciado y texto optimizado */}
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-brand-accent/30">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand-accent/20 group-hover:to-brand-accent/10 transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7 text-brand-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors leading-tight">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                          {value.description}
                        </p>
                      </div>
                    </div>
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

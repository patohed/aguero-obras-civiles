'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/shared/Container'
import { Section } from '@/components/shared/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { fadeInUp } from '@/lib/animations'
import type { ContactFormData } from '@/types'

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implement actual form submission logic
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <Section id="contacto" background="white">
      <Container>
        <SectionHeading
          title="Contactanos"
          subtitle="Estamos listos para escuchar tu proyecto y ofrecerte la mejor solución"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact Info Cards - Mejora UX: Layout optimizado */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 space-y-4"
          >
            {/* Mejora UX: Cards de contacto compactas y optimizadas */}
            <Card className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-brand-primary/30">
              <CardContent className="p-5">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">Email</h3>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-gray-600 hover:text-brand-accent transition-colors font-medium text-xs break-all"
                    >
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-brand-primary/30">
              <CardContent className="p-5">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">Teléfono / WhatsApp</h3>
                    <a
                      href={`tel:${siteConfig.links.phone}`}
                      className="text-gray-600 hover:text-brand-accent transition-colors font-medium text-xs"
                    >
                      {siteConfig.links.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-brand-primary/30">
              <CardContent className="p-5">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">Ubicación</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {siteConfig.links.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form - Mejora UX: Layout balanceado */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Juan Pérez"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Cuéntenos sobre su proyecto..."
                    />
                  </div>

                  {/* Mejora UX: Mensaje de éxito más visible */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4 text-green-800 flex items-center space-x-3 animate-fade-in shadow-md">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-semibold">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</span>
                    </div>
                  )}

                  {/* Mejora UX: Botón de envío más prominente */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

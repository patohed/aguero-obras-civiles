'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import { navigationLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Oficial */}
          <button 
            onClick={() => handleNavClick('#inicio')}
            className="flex-shrink-0 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-2xl md:text-3xl font-bold text-brand-primary">
              Agüero Obras Civiles
            </div>
          </button>

          {/* Desktop Navigation - Mejora UX: Estados hover más visibles */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-gray-700 hover:text-brand-primary transition-all duration-200 font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA - Mejora UX: CTA más visible con color de marca */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick('#contacto')}
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-brand-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contacto')}
              className="w-full mt-4"
              size="lg"
            >
              Solicitar Presupuesto
            </Button>
          </nav>
        )}
      </Container>
    </header>
  )
}

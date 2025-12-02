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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Oficial */}
          <button 
            onClick={() => handleNavClick('#inicio')}
            className="flex-shrink-0 transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className={cn(
              "relative px-4 py-2.5 rounded-xl transition-all duration-500",
              isScrolled 
                ? "bg-white shadow-[0_4px_20px_rgba(39,76,94,0.15)] group-hover:shadow-[0_8px_30px_rgba(39,76,94,0.25)]"
                : "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            )}>
              <Image
                src="/logo-aguero.png"
                alt="Agüero Obras Civiles"
                width={240}
                height={78}
                className={cn(
                  "w-auto drop-shadow-sm transition-all duration-300",
                  isScrolled ? "h-12 md:h-14" : "h-14 md:h-16 lg:h-18"
                )}
                priority
                unoptimized
              />
            </div>
          </button>

          {/* Desktop Navigation - Mejora UX: Estados hover más visibles */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative px-4 py-2 transition-all duration-200 font-semibold group",
                  isScrolled 
                    ? "text-gray-700 hover:text-brand-primary" 
                    : "text-white hover:text-brand-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                )}
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
              className={cn(
                "font-bold shadow-lg hover:shadow-xl transition-all duration-300",
                isScrolled
                  ? "bg-brand-accent hover:bg-brand-accent/90 text-white"
                  : "bg-white text-brand-primary hover:bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              )}
            >
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              isScrolled
                ? "text-gray-700 hover:text-brand-primary"
                : "text-white hover:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            )}
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
          <nav className={cn(
            "md:hidden pt-4 pb-3 space-y-3 animate-fade-in rounded-lg mt-2",
            isScrolled
              ? "bg-white"
              : "bg-white/95 backdrop-blur-md"
          )}>
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium"
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

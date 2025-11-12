import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'dark'
}

export function Section({ 
  children, 
  className, 
  id,
  background = 'white' 
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  }

  return (
    <section 
      id={id}
      className={cn(
        'section-padding',
        bgClasses[background],
        className
      )}
    >
      {children}
    </section>
  )
}

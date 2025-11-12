import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className,
  centered = true 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12 md:mb-16',
      centered && 'text-center',
      className
    )}>
      {/* Mejora UX: Título con mejor jerarquía y decoración */}
      <div className="inline-block relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative z-10">
          {title}
        </h2>
        {/* Decoración sutil */}
        <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full" />
      </div>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

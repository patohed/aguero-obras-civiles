import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 180, height = 60 }: LogoProps) {
  return (
    <div className={cn('relative overflow-hidden', className)} style={{ width, height }}>
      <Image
        src="/871fdbb2-3878-4fc8-b822-7a804e756963.jpg"
        alt="Agüero Obras Civiles"
        width={width * 2}
        height={height * 2}
        priority
        className="object-cover object-left scale-150"
        style={{ 
          objectPosition: '0% 50%',
          clipPath: 'inset(0 65% 0 0)'
        }}
      />
    </div>
  )
}

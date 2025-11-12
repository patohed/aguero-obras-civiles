export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Value {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface NavigationLink {
  href: string
  label: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

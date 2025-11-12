# Agüero Obras Civiles - Sitio Web Corporativo

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/aguero-obras-civiles/deploys)

Sitio web institucional profesional para Agüero Obras Civiles, empresa especializada en trabajos de altura, estructuras metálicas, torres de comunicación y construcción en Córdoba, Argentina.

## � Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify

## 📁 Arquitectura

Proyecto estructurado siguiendo **Clean Architecture** (Uncle Bob) con separación de concerns:

```
src/
├── app/              # Next.js App Router
├── components/       # Componentes organizados por capas
│   ├── ui/          # Componentes base (shadcn)
│   ├── shared/      # Componentes compartidos
│   ├── layout/      # Estructura (Header, Footer)
│   └── sections/    # Secciones de la landing
├── lib/             # Utilidades y configuraciones
├── hooks/           # Custom React Hooks
├── types/           # TypeScript types/interfaces
└── config/          # Configuraciones del sitio
```

## � Instalación

```bash
# Clonar el repositorio
git clone https://github.com/patohed/aguero-obras-civiles.git

# Instalar dependencias
cd aguero-obras-civiles
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
npm start
```

## 🎨 Características

### Diseño Profesional
- ✅ Diseño minimalista moderno y corporativo
- ✅ Responsive design (mobile-first)
- ✅ Animaciones sutiles con Framer Motion (≤0.6s)
- ✅ Optimización de imágenes con Next.js Image

### Secciones
- **Hero:** Presentación principal con CTAs y estadísticas
- **Servicios:** 6 servicios especializados (trabajos en altura, estructuras metálicas, torres, etc.)
- **Sobre Nosotros:** Misión, visión y valores corporativos
- **Valores:** 4 pilares fundamentales de la empresa
- **Contacto:** Formulario y información de contacto

### Colores de Marca
- **Primary:** #274C5E (Azul petróleo)
- **Secondary:** #B0B0B0 (Gris)
- **Accent:** #E57C23 (Naranja)

### SEO Optimizado
- Meta tags optimizados
- Estructura semántica HTML5
- Performance optimizado (Next.js)
- Accesibilidad (WCAG AA)

## 📱 Responsive Design

Diseño mobile-first con breakpoints:
- Mobile: < 640px
- Tablet: 768px
- Desktop: 1024px
- Large: 1280px+

## ⚡ Performance

- Server Components por defecto
- Optimización automática de imágenes (Next.js Image)
- Code splitting automático
- Lazy loading para contenido below-the-fold
- Font optimization con next/font

## 📄 Secciones Implementadas

- ✅ Hero Section
- ✅ Services Section
- ✅ About Section
- ✅ Values Section
- ✅ Contact Section
- ✅ Footer

## 🔧 Decisiones Técnicas

1. **Next.js 15 App Router:** Mejor performance con Server Components
2. **TypeScript Strict:** Mayor seguridad y mantenibilidad
3. **Tailwind CSS:** Rapid development con utility-first
4. **shadcn/ui:** Componentes accesibles y customizables
5. **Framer Motion:** Animaciones sutiles y profesionales
6. **Clean Architecture:** Código mantenible y escalable

## 📝 Notas

- Todas las animaciones son sutiles (max 0.6s duration)
- Imágenes optimizadas con formato AVIF/WebP
- SEO metadata configurado
- Accesibilidad básica implementada

## 🌐 Deployment en Netlify

Este proyecto está configurado para deployment automático en Netlify:

1. **Fork/Clone** este repositorio
2. **Conectar** con Netlify
3. **Build settings** ya están configurados en `netlify.toml`
4. **Deploy** automático en cada push a `main`

### Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno, crea un archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://agueroobras.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📞 Contacto

**Agüero Obras Civiles**
- 📧 Email: agueroobrasciviles@gmail.com
- 📱 Teléfono: +54 351 3890419
- 📍 Dirección: Caseros 2245, Córdoba Capital, Argentina

## 📄 Licencia

© 2025 Agüero Obras Civiles. Todos los derechos reservados.

---

Desarrollado con ❤️ en Córdoba, Argentina

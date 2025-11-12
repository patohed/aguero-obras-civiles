# 🚀 Guía de Deployment - Agüero Obras Civiles

## ✅ Preparación Completada

El proyecto ya está listo para deployment en Netlify. Archivos creados:

- ✅ `netlify.toml` - Configuración de build y deploy
- ✅ `.npmrc` - Configuración de npm con legacy-peer-deps
- ✅ `README.md` - Documentación actualizada
- ✅ `.gitignore` - Archivos a ignorar

## 📦 Subir a GitHub

### Paso 1: Verificar que el repositorio existe en GitHub
Asegúrate de que el repositorio https://github.com/patohed/aguero-obras-civiles existe.

### Paso 2: Push al repositorio

```bash
# Si aún no hiciste push, ejecuta:
git push -u origin main
```

**Si tienes error de autenticación:**

```bash
# Opción 1: Usar GitHub CLI (recomendado)
gh auth login
git push -u origin main

# Opción 2: Usar Personal Access Token
# 1. Ve a GitHub Settings > Developer settings > Personal access tokens
# 2. Genera un nuevo token con permisos "repo"
# 3. Usa el token como contraseña cuando te lo pida
```

## 🌐 Deployment en Netlify

### Opción 1: Deployment desde GitHub (Recomendado)

1. **Ir a Netlify:** https://app.netlify.com
2. **New site from Git**
3. **Conectar GitHub:** Autoriza Netlify para acceder a tu repositorio
4. **Seleccionar repo:** `patohed/aguero-obras-civiles`
5. **Configurar build:**
   - Build command: `npm run build` (ya está en netlify.toml)
   - Publish directory: `.next` (ya está en netlify.toml)
   - Node version: 18 (ya está en netlify.toml)
6. **Deploy site**

### Opción 2: Deployment con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login en Netlify
netlify login

# Inicializar proyecto
netlify init

# Deploy manual
netlify deploy --prod
```

## 🔧 Configuración Post-Deployment

### 1. Dominio Personalizado (Opcional)

En Netlify Dashboard:
1. **Domain settings**
2. **Add custom domain:** agueroobras.com
3. **Configure DNS** según instrucciones de Netlify

### 2. Variables de Entorno (Opcional)

Si necesitas agregar variables:

1. **Site settings > Environment variables**
2. Agregar:
   ```
   NEXT_PUBLIC_SITE_URL = https://tu-dominio.netlify.app
   NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX (si usas Google Analytics)
   ```

### 3. Configurar Formulario de Contacto

Para que el formulario funcione, necesitas:

**Opción A: Netlify Forms (Gratis)**
```tsx
// En Contact.tsx, agregar:
<form onSubmit={handleSubmit} data-netlify="true" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  {/* resto del formulario */}
</form>
```

**Opción B: EmailJS (Gratis hasta 200 emails/mes)**
1. Crear cuenta en https://www.emailjs.com/
2. Instalar: `npm install @emailjs/browser`
3. Configurar en Contact.tsx

**Opción C: Nodemailer + API Route**
Crear endpoint API en Next.js para envío de emails.

### 4. Google Analytics (Opcional)

```bash
# Instalar
npm install @next/third-parties

# En layout.tsx:
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🔒 Seguridad Configurada

Ya implementado en `netlify.toml`:

- ✅ Headers de seguridad (X-Frame-Options, CSP, etc.)
- ✅ Cache optimization
- ✅ Redirects para SPA
- ✅ HTTPS automático (Netlify)

## 📊 Monitoreo Post-Deployment

### 1. Verificar Build
- Logs en Netlify Dashboard
- Tiempo de build (debería ser ~2-3 min)
- Errores de compilación

### 2. Testing
- ✅ Responsive en diferentes dispositivos
- ✅ Formulario de contacto funciona
- ✅ Todas las imágenes cargan
- ✅ Animaciones funcionan correctamente
- ✅ Links de navegación funcionan
- ✅ SEO meta tags presentes

### 3. Performance
Usar Lighthouse (Chrome DevTools):
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 4. Analytics (Opcional)
- Google Analytics
- Netlify Analytics
- Hotjar / Microsoft Clarity

## 🐛 Troubleshooting

### Error: "Build failed"
```bash
# Verificar localmente
npm run build

# Si funciona local pero falla en Netlify:
# - Verificar Node version (debe ser 18)
# - Verificar que .npmrc existe
# - Limpiar cache en Netlify: Site settings > Build & deploy > Clear cache
```

### Error: "Dependencies not found"
```bash
# Verificar package.json
# Asegurarse que .npmrc tiene: legacy-peer-deps=true
```

### Error: "Images not loading"
```bash
# Verificar que las imágenes están en /public
# Verificar paths en componentes: src="/nombre.jpg"
```

## 📱 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Hacer cambios en el código
# 2. Commit
git add .
git commit -m "Descripción del cambio"

# 3. Push (deployment automático)
git push origin main
```

Netlify automáticamente:
1. Detecta el push
2. Ejecuta el build
3. Despliega la nueva versión
4. Mantiene la URL existente

## 🎯 Checklist Pre-Launch

- [ ] Verificar contenido en todas las secciones
- [ ] Probar formulario de contacto
- [ ] Verificar email y teléfono correctos
- [ ] Probar en mobile, tablet y desktop
- [ ] Verificar que todas las imágenes cargan
- [ ] Configurar dominio personalizado (si aplica)
- [ ] Configurar Google Analytics (si aplica)
- [ ] Verificar meta tags y SEO
- [ ] Probar performance con Lighthouse
- [ ] Verificar accesibilidad
- [ ] Configurar favicon (si no está)

## 📞 Próximos Pasos Recomendados

1. **Contenido Real:**
   - Reemplazar imágenes de Unsplash con fotos reales de proyectos
   - Agregar galería de proyectos completados
   - Agregar testimonios de clientes reales

2. **SEO:**
   - Configurar Google Search Console
   - Crear sitemap.xml
   - Configurar robots.txt
   - Meta descriptions personalizadas por sección

3. **Funcionalidades:**
   - WhatsApp button flotante
   - Chat en vivo (Tawk.to, Crisp)
   - Blog/noticias (opcional)
   - Galería de proyectos con lightbox

4. **Marketing:**
   - Pixel de Facebook
   - Google Tag Manager
   - Conversiones tracking

## ✅ Estado Actual

- ✅ Código en GitHub
- ⏳ Esperando deployment en Netlify
- ⏳ Configurar dominio (opcional)
- ⏳ Configurar formulario
- ⏳ Configurar analytics (opcional)

---

**¡El proyecto está listo para ser desplegado!** 🚀

Una vez que hagas push a GitHub y conectes con Netlify, el sitio estará en línea automáticamente.

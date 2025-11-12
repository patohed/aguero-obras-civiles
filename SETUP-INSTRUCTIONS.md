# INSTRUCCIONES DE INSTALACIÓN Y CONFIGURACIÓN

## 📦 Paso 1: Instalar Dependencias

Abre una terminal de PowerShell en el directorio del proyecto y ejecuta:

```powershell
npm install
```

## 🖼️ Paso 2: Mover el Logo al Directorio Public

El archivo del logo necesita moverse al directorio public para que Next.js pueda acceder a él:

```powershell
# Crear directorio public si no existe
New-Item -ItemType Directory -Force -Path public

# Mover el logo al directorio public
Move-Item -Path "871fdbb2-3878-4fc8-b822-7a804e756963.jpg" -Destination "public/" -Force
```

O manualmente:
1. Crea una carpeta llamada `public` en la raíz del proyecto (si no existe)
2. Mueve el archivo `871fdbb2-3878-4fc8-b822-7a804e756963.jpg` a la carpeta `public`

## 🎨 Paso 3: Actualizar Colores Corporativos (IMPORTANTE)

**DEBES ABRIR EL PDF "AGÜERO OBRAS CIVILES.pdf" manualmente y extraer los colores exactos.**

Una vez que tengas los colores, actualiza los siguientes archivos:

### 1. `src/config/theme.ts`
```typescript
export const colors = {
  primary: {
    main: '#TU_COLOR_PRIMARIO', // Reemplaza con el color del PDF
    light: '#...',
    dark: '#...',
  },
  secondary: {
    main: '#TU_COLOR_SECUNDARIO', // Reemplaza con el color del PDF
    // ...
  },
  // ...
}
```

### 2. `tailwind.config.ts`
```typescript
brand: {
  primary: '#TU_COLOR_PRIMARIO', // Mismo color que en theme.ts
  secondary: '#TU_COLOR_SECUNDARIO',
  accent: '#TU_COLOR_ACCENT',
  // ...
}
```

## 📝 Paso 4: Actualizar Contenido desde el PDF

Abre `src/lib/constants.ts` y actualiza con la información real del PDF:

- **Servicios**: Actualiza títulos y descripciones de servicios
- **Valores**: Actualiza valores corporativos
- **About Content**: Actualiza misión, visión y descripción
- **Stats**: Actualiza estadísticas reales (años, proyectos, etc.)

## 📞 Paso 5: Actualizar Información de Contacto

Edita `src/config/site.ts` con datos reales:

```typescript
links: {
  email: 'info@agueroobras.com', // Email real
  phone: '+54 9 11 1234-5678',   // Teléfono real
  address: 'Buenos Aires, Argentina', // Dirección real
},
```

## 🚀 Paso 6: Ejecutar el Proyecto

```powershell
# Modo desarrollo
npm run dev
```

Abre tu navegador en: http://localhost:3000

## 🏗️ Paso 7: Build de Producción

```powershell
# Crear build optimizado
npm run build

# Ejecutar en producción
npm start
```

## ⚡ Performance Check

Para verificar el performance con Lighthouse:

1. Ejecuta `npm run build` y luego `npm start`
2. Abre Chrome DevTools (F12)
3. Ve a la pestaña "Lighthouse"
4. Ejecuta un audit para Desktop y Mobile

Objetivo: >90 en Performance

## 🎨 Personalización Adicional

### Cambiar Imágenes

Las imágenes actuales son de Unsplash (placeholders profesionales). Para usar imágenes propias:

1. Coloca tus imágenes en la carpeta `public/images/`
2. Actualiza las rutas en los componentes:
   - `src/components/sections/Hero.tsx`
   - `src/components/sections/About.tsx`

### Ajustar Animaciones

Las animaciones están configuradas en:
- `src/lib/animations.ts` - Definiciones de animaciones
- Componentes individuales - Aplicación de animaciones

Todas siguen la regla: máximo 0.6s de duración, sutiles y profesionales.

## 📱 Testing Responsive

Prueba el sitio en diferentes dispositivos:
- Mobile: < 640px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1280px+

## 🔍 Checklist Final

- [ ] Dependencias instaladas (`npm install`)
- [ ] Logo movido a `/public`
- [ ] Colores actualizados desde el PDF
- [ ] Contenido actualizado (servicios, valores, about)
- [ ] Información de contacto actualizada
- [ ] Proyecto ejecutándose en dev mode
- [ ] Responsive testing completado
- [ ] Build de producción exitoso
- [ ] Performance >90 en Lighthouse

## 🐛 Troubleshooting

### Error: Cannot find module 'next'
```powershell
npm install
```

### Error: Image optimization
Asegúrate de que las URLs de imágenes de Unsplash están en `next.config.js`

### Logo no se muestra
Verifica que el archivo esté en `/public` y la ruta en `Logo.tsx` coincida

## 📚 Documentación Útil

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 🎉 ¡Listo!

Tu landing page profesional para Agüero Obras Civiles está configurada y lista para personalizarse con los datos reales del PDF.

Para cualquier duda, revisa los comentarios TODO en el código que indican qué información necesita actualizarse.

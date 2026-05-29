# Guía de Configuración Dinámica - Landing de Precios SaaS

Este documento detalla cómo administrar, actualizar o agregar nuevos productos y módulos a la arquitectura centralizada de la landing page de precios (`landing-precios-saas`).

## 1. Arquitectura de Archivos

El contenido de la landing page está completamente desacoplado de la interfaz visual. Toda la información comercial, precios y características se administra desde la carpeta:
`src/config/products/`

Cada SaaS cuenta con su propio archivo de configuración fuertemente tipado mediante TypeScript:

- `hotelhub.ts`
- `gesrest.ts`
- `360sys.ts`
- `pulso-plus.ts`
- `comprobante-e.ts`

## 2. Estructura del Modelo de Datos (`ProductFullConfig`)

Cada archivo de configuración debe exportar un objeto que cumpla con la interfaz estricta del sistema. La estructura base requiere:

- **id / name / slug:** Identificadores únicos para el enrutamiento dinámico.
- **brand:** Objeto con la paleta de colores hexadecimales (primary, secondary, background, text) y rutas de logotipos que Tailwind CSS procesa dinámicamente.
- **plans:** Array que define el núcleo operativo (Plan Base).
- **addons:** Array con los módulos adicionales, cobros mensuales/anuales, taglines cortos y descripciones detalladas.

### Ejemplo de Configuración de un Módulo (Addon):

```typescript
{
  id: "modulo_ejemplo",
  name: "Nombre del Módulo",
  tagline: "Texto corto de 1 oración para la tarjeta principal.",
  description: "Descripción detallada de introducción para el modal expandido.",
  priceMonthly: 50,
  priceAnnual: 500,
  detailedFeatures: [
    {
      title: "Característica 1",
      description: "Explicación profunda de la funcionalidad para control de QA y lectura del cliente."
    }
  ]
}
```

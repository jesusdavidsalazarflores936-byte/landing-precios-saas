import type { ProductFullConfig } from "@/types/product";

const config: ProductFullConfig = {
  brand: {
    name: "GesRest",
    logoUrl: "",
    faviconUrl: "",
    colors: {
      primary: "#F97316", primaryForeground: "#FFFFFF",
      secondary: "#1E293B", secondaryForeground: "#FFFFFF",
      accent: "#FB923C", accentForeground: "#FFFFFF",
      background: "#FFFFFF", foreground: "#0F172A",
      muted: "#F8FAFC", mutedForeground: "#64748B",
      border: "#E2E8F0", destructive: "#EF4444",
    },
  },

  seo: {
    title: "GesRest — Sistema para restaurantes",
    description: "Digitaliza tu restaurante con facturación SUNAT, carta digital y más.",
    canonicalUrl: "https://tusaas.pe/gesrest",
    locale: "es-PE",
  },

  hero: {
    headline: "Construye la solución perfecta para tu restaurante",
    subheadline: "Elige el plan base y agrega solo los módulos que necesitas.",
    ctaPrimary: { label: "Ver precios", href: "#precios", variant: "primary" },
  },

  product: {
    id: "gesrest",
    slug: "gesrest",
    name: "GesRest",
    tagline: "Gestión integral para restaurantes",
    description: "Desde el pedido en mesa hasta la factura electrónica SUNAT.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "annual",
      annualDiscountPercent: 17,
      annualDiscountLabel: "2 meses gratis",
    },
    requiredPlanId: "gesrest_base",
    plans: [
      {
        id: "gesrest_base",
        slug: "base",
        tier: "starter",
        name: "Atención en Local + Facturación Electrónica",
        description: "El núcleo operativo de tu restaurante.",
        isRequired: true,
        requiredPlanNote: "Requerido para activar módulos adicionales",
        price: { amountMonthly: 120, amountAnnual: 100, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "cajero",      label: "Módulo cajero",                value: true },
          { id: "mesero",      label: "Módulo mesero",                value: true },
          { id: "cocina",      label: "Módulo cocina (KDS)",          value: true },
          { id: "inventario",  label: "Control de inventario",        value: true },
          { id: "facturacion", label: "Facturación electrónica SUNAT", value: true },
        ],
        cta: { label: "Empezar gratis", href: "/registro?producto=gesrest", variant: "primary" },
        badge: "Obligatorio",
        sortOrder: 1,
        trialDays: 14,
      },
    ],
    addons: [
      {
        id: "gesrest_ri",
        slug: "restaurante-inteligente",
        name: "Restaurante Inteligente",
        description: "Analítica avanzada y predicción de demanda.",
        category: "analytics",
        price: { amountMonthly: 59, amountAnnual: 49, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: ["Dashboard en tiempo real", "Ranking de platos", "Predicción de demanda"],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "gesrest_cd",
        slug: "carta-digital",
        name: "Carta Digital",
        description: "Menú QR interactivo para pedidos desde el celular.",
        category: "customization",
        price: { amountMonthly: 39, amountAnnual: 32, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: ["Carta con fotos", "QR personalizado", "Pedidos directo a cocina"],
        isAvailable: true,
      },
      {
        id: "gesrest_eo",
        slug: "encuesta-opinion",
        name: "Encuesta de Opinión",
        description: "Recoge feedback de clientes al finalizar la visita.",
        category: "analytics",
        price: { amountMonthly: 25, amountAnnual: 20, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: ["Encuesta por QR", "Panel de resultados", "Alertas por calificación baja"],
        isAvailable: true,
      },
      {
        id: "gesrest_res",
        slug: "reservas",
        name: "Reservas",
        description: "Reservas online con confirmación automática.",
        category: "other",
        price: { amountMonthly: 45, amountAnnual: 37, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: ["Página de reservas", "Recordatorios por WhatsApp", "Control de aforo"],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { id: "f1", question: "¿Por qué el plan base es obligatorio?",
          answer: "Contiene el núcleo operativo (cajero, mesero, cocina y SUNAT) que los módulos necesitan para funcionar.", sortOrder: 1 },
        { id: "f2", question: "¿Puedo agregar o quitar módulos en cualquier momento?",
          answer: "Sí. Se activan desde tu panel y se cobran de forma prorrateada.", sortOrder: 2 },
        { id: "f3", question: "¿Hay permanencia mínima?",
          answer: "No. Cancela cuando quieras sin penalidades.", sortOrder: 3 },
        { id: "f4", question: "¿La facturación está certificada por SUNAT?",
          answer: "Sí. Emitimos boletas, facturas y notas de crédito válidas ante SUNAT.", sortOrder: 4 },
      ],
    },
    finalCta: {
      headline: "¿Listo para optimizar tu restaurante?",
      subheadline: "14 días gratis. Sin tarjeta. Sin permanencia.",
      backgroundVariant: "gradient",
      ctaPrimary: { label: "Comenzar gratis", href: "/registro?producto=gesrest", variant: "primary" },
      ctaSecondary: { label: "Hablar con un asesor", href: "/contacto?producto=gesrest", variant: "outline" },
      trustSignals: ["14 días gratis", "Sin tarjeta de crédito", "Integrado con SUNAT"],
    },
  },
};

export default config;
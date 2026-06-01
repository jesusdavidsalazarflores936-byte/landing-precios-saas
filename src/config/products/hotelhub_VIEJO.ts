import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "HotelHUB",
    logoUrl: "/logos/hotelhub-logo.png", // Reemplazar tras extraer del repo
    faviconUrl: "/logos/hotelhub-logo-favicon.png",
    colors: {
      primary: "#0A88CD", primaryForeground: "#FFFFFF",
      secondary: "#10283D", secondaryForeground: "#FFFFFF",
      accent: "#f8fafc", accentForeground: "#111827",
      background: "#FFFFFF", foreground: "#111827",
      muted: "#f8fafc", mutedForeground: "#64748b",
      border: "#e2e8f0", destructive: "#EF4444",
    },
  },

  seo: {
    title: "HotelHUB — Sistema de gestión hotelera",
    description: "Gestión operativa completa para tu hotel: habitaciones, reservas, facturación y limpieza.",
    canonicalUrl: "https://tusaas.pe/hotelhub",
    locale: "es-PE",
  },

  hero: {
    headline: "Planes diseñados para tu hotel",
    subheadline: "Gestión hotelera simplificada y en tiempo real.",
    ctaPrimary: { label: "Ver Precios ", href: "#precios", variant: "primary" },
    ctaSecondary: { label: "Solicitar demo", href: "/contacto?producto=hotelhub", variant: "outline" },
  },

  product: {
    id: "hotelhub",
    slug: "hotelhub",
    name: "HotelHUB",
    tagline: "Software de gestión hotelera",
    description: "Administra habitaciones, reservas y facturación desde una sola plataforma.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "monthly",
      annualDiscountPercent: 17,
      annualDiscountLabel: "ahorra con el anual",
    },
    requiredPlanId: "hotelhub_base",
    plans: [
      {
        id: "hotelhub_base",
        slug: "gestiona-alojamiento",
        tier: "starter",
        name: "Gestiona tu Alojamiento",
        description: "Gestión operativa del hotel: habitaciones, huéspedes, check-in/check-out, ventas y caja.",
        isRequired: true,
        requiredPlanNote: "Módulo base obligatorio",
        price: { amountMonthly: 50, amountAnnual: 500, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "habitaciones", label: "Gestión de habitaciones y huéspedes", value: true },
          { id: "checkin", label: "Check-in / Check-out", value: true },
          { id: "ventas", label: "Control de ventas y caja", value: true },
          { id: "almacen", label: "Productos y almacén", value: true },
          { id: "turnos", label: "Gestión de turnos", value: true },
        ],
        cta: { label: "Empezar ahora", href: "/contacto?producto=hotelhub", variant: "primary" },
        badge: "Requerido",
        sortOrder: 1,
        trialDays: 14,
      },
    ],
    addons: [
      {
        id: "hub_facturacion",
        slug: "facturacion",
        name: "Facturación Electrónica",
        description: "Emisión y control de comprobantes electrónicos, reportes y anulaciones.",
        category: "other",
        price: { amountMonthly: 30, amountAnnual: 300, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Emisión de boletas y facturas", "Control de comprobantes", "Anulaciones directas"],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "hub_inteligente",
        slug: "hotel-inteligente",
        name: "Hotel Inteligente",
        description: "Inteligencia de negocios para analizar reservas, ventas, caja y métricas del hotel.",
        category: "analytics",
        price: { amountMonthly: 50, amountAnnual: 500, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Métricas del hotel", "Análisis de reservas", "Análisis de caja y ventas"],
        isAvailable: true,
      },
      {
        id: "hub_encuesta",
        slug: "encuesta-opinion",
        name: "Encuesta de Opinión",
        description: "Creación y gestión de encuestas y estadísticas de satisfacción del cliente.",
        category: "analytics",
        price: { amountMonthly: 30, amountAnnual: 300, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Encuestas personalizadas", "Estadísticas de satisfacción", "Gestión de categorías"],
        isAvailable: true,
      },
      {
        id: "hub_housekeeping",
        slug: "housekeeping",
        name: "Housekeeping",
        description: "Asignación y seguimiento de limpieza de habitaciones y control de jornadas.",
        category: "other",
        price: { amountMonthly: 20, amountAnnual: 200, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Asignación de limpieza", "Seguimiento de tiempos", "Control de jornadas del personal"],
        isAvailable: true,
      },
      {
        id: "hub_reservas",
        slug: "reservas",
        name: "Gestión de Reservas",
        description: "Registro, calendario, atención y seguimiento de reservas de habitaciones y salones.",
        category: "other",
        price: { amountMonthly: 30, amountAnnual: 300, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Calendario de reservas", "Registro y seguimiento", "Control de origen y estados"],
        isAvailable: true,
      },
      {
        id: "hub_alquileres",
        slug: "alquileres",
        name: "Gestiona tus Alquileres",
        description: "Administración de contratos, ambientes, edificios y compromisos de pago.",
        category: "other",
        price: { amountMonthly: 50, amountAnnual: 500, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Plantillas de contrato", "Gestión de edificios/ambientes", "Control de pagos"],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { id: "f1", question: "¿Puedo contratar solo Facturación Electrónica?", answer: "No, el módulo 'Gestiona tu Alojamiento' es el núcleo operativo y es requerido para activar otras funciones.", sortOrder: 1 },
        { id: "f2", question: "¿Puedo agregar el módulo de Housekeeping después?", answer: "Sí, puedes empezar con el plan base e ir sumando módulos como Housekeeping o Hotel Inteligente conforme tu hotel crezca.", sortOrder: 2 },
      ],
    },
    finalCta: {
      headline: "Moderniza la gestión de tu hotel",
      subheadline: "Todo bajo control, desde la reserva hasta el check-out.",
      backgroundVariant: "dark",
      ctaPrimary: { label: "Empezar ", href: "/contacto?producto=hotelhub", variant: "primary" },
      ctaSecondary: { label: "Agendar demo", href: "/contacto?producto=hotelhub", variant: "outline" },
      trustSignals: ["Sin instalación complicada", "Soporte dedicado", "Escalable a tu medida"],
    },
  },
};

export default config;
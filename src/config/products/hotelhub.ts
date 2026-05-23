import type { ProductFullConfig } from "@/types/product.types";
const config: ProductFullConfig = {
  brand: {
    name: "HotelHUB",
    logoUrl: "",
    faviconUrl: "",
    colors: {
      primary: "#0EA5E9", primaryForeground: "#FFFFFF",
      secondary: "#0F172A", secondaryForeground: "#FFFFFF",
      accent: "#38BDF8", accentForeground: "#0F172A",
      background: "#FFFFFF", foreground: "#0F172A",
      muted: "#F0F9FF", mutedForeground: "#64748B",
      border: "#E0F2FE", destructive: "#EF4444",
    },
  },

  seo: {
    title: "HotelHUB — Sistema de gestión hotelera",
    description: "Reservas, check-in, housekeeping y facturación en una sola plataforma.",
    canonicalUrl: "https://tusaas.pe/hotelhub",
    locale: "es-PE",
  },

  hero: {
    headline: "Opera tu hotel con precisión, desde cualquier dispositivo",
    subheadline: "Un PMS completo con módulos que se adaptan al tamaño de tu propiedad.",
    ctaPrimary: { label: "Ver precios", href: "#precios", variant: "primary" },
    ctaSecondary: { label: "Solicitar demo", href: "/contacto?producto=hotelhub", variant: "outline" },
  },

  product: {
    id: "hotelhub",
    slug: "hotelhub",
    name: "HotelHUB",
    tagline: "El PMS que crece con tu propiedad",
    description: "Conecta recepción, housekeeping, reservas y finanzas en un solo sistema.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "annual",
      annualDiscountPercent: 17,
      annualDiscountLabel: "2 meses gratis",
    },
    requiredPlanId: "hotelhub_base",
    plans: [
      {
        id: "hotelhub_base",
        slug: "base",
        tier: "starter",
        name: "PMS Esencial",
        description: "Recepción, reservas directas, housekeeping y facturación.",
        isRequired: true,
        requiredPlanNote: "Requerido para activar módulos adicionales",
        price: { amountMonthly: 199, amountAnnual: 165, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "recepcion",    label: "Front desk y check-in/out",     value: true },
          { id: "reservas",     label: "Reservas directas",             value: true },
          { id: "housekeeping", label: "Gestión de housekeeping",       value: true },
          { id: "facturacion",  label: "Facturación electrónica",       value: true },
          { id: "habitaciones", label: "Hasta 50 habitaciones",         value: true },
        ],
        cta: { label: "Empezar gratis", href: "/registro?producto=hotelhub", variant: "primary" },
        badge: "Obligatorio",
        sortOrder: 1,
        trialDays: 14,
      },
    ],
    addons: [
      {
        id: "hotelhub_cm",
        slug: "channel-manager",
        name: "Channel Manager",
        description: "Sincroniza disponibilidad con Booking, Expedia y más OTAs.",
        category: "integrations",
        price: { amountMonthly: 89, amountAnnual: 74, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Conexión con +50 OTAs", "Sincronización en tiempo real", "Prevención de overbooking"],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "hotelhub_ci",
        slug: "checkin-digital",
        name: "Check-in Digital",
        description: "Check-in web antes de llegar con verificación de identidad.",
        category: "customization",
        price: { amountMonthly: 55, amountAnnual: 45, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Check-in desde el móvil", "Verificación de DNI", "Firma digital"],
        isAvailable: true,
      },
      {
        id: "hotelhub_spa",
        slug: "spa-servicios",
        name: "Spa y Servicios",
        description: "Gestiona spa, tours y servicios adicionales con cobro centralizado.",
        category: "other",
        price: { amountMonthly: 69, amountAnnual: 57, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Agenda por categoría", "Reserva desde app del huésped", "Cobro en check-out"],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { id: "f1", question: "¿El plan base es obligatorio?",
          answer: "Sí. El PMS Esencial es el núcleo y es requerido para cualquier módulo adicional.", sortOrder: 1 },
        { id: "f2", question: "¿Cuántas OTAs puedo conectar?",
          answer: "Con el Channel Manager puedes conectar más de 50 OTAs de forma simultánea.", sortOrder: 2 },
        { id: "f3", question: "¿Puedo cancelar en cualquier momento?",
          answer: "Sí, sin penalidades ni períodos de permanencia.", sortOrder: 3 },
      ],
    },
    finalCta: {
      headline: "Moderniza la operación de tu hotel hoy",
      subheadline: "14 días gratis. Sin tarjeta. Sin permanencia.",
      backgroundVariant: "brand",
      ctaPrimary: { label: "Empezar gratis", href: "/registro?producto=hotelhub", variant: "primary" },
      ctaSecondary: { label: "Hablar con ventas", href: "/contacto?producto=hotelhub", variant: "outline" },
      trustSignals: ["14 días gratis", "Soporte 24/7", "Sin permanencia"],
    },
  },
};

export default config;
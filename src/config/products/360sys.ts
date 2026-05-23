import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "360Sys",
    logoUrl: "",
    faviconUrl: "",
    colors: {
      primary: "#7C3AED", primaryForeground: "#FFFFFF",
      secondary: "#1E1B4B", secondaryForeground: "#FFFFFF",
      accent: "#A78BFA", accentForeground: "#1E1B4B",
      background: "#FFFFFF", foreground: "#0F172A",
      muted: "#F5F3FF", mutedForeground: "#6B7280",
      border: "#DDD6FE", destructive: "#EF4444",
    },
  },

  seo: {
    title: "360Sys — ERP para empresas en crecimiento",
    description: "Finanzas, ventas, inventario y RRHH en una sola plataforma para PyMEs peruanas.",
    canonicalUrl: "https://tusaas.pe/360sys",
    locale: "es-PE",
  },

  hero: {
    headline: "Toda tu empresa en una sola pantalla",
    subheadline: "Finanzas, ventas, inventario y RRHH conectados en tiempo real.",
    ctaPrimary: { label: "Ver precios", href: "#precios", variant: "primary" },
    ctaSecondary: { label: "Solicitar demo", href: "/contacto?producto=360sys", variant: "outline" },
  },

  product: {
    id: "360sys",
    slug: "360sys",
    name: "360Sys",
    tagline: "ERP modular para PyMEs peruanas",
    description: "Integra los procesos clave de tu empresa en una plataforma escalable.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "annual",
      annualDiscountPercent: 17,
      annualDiscountLabel: "2 meses gratis",
    },
    requiredPlanId: "sys360_base",
    plans: [
      {
        id: "sys360_base",
        slug: "base",
        tier: "starter",
        name: "Core Empresarial",
        description: "Finanzas, ventas y compras: el núcleo para cualquier empresa.",
        isRequired: true,
        requiredPlanNote: "Módulo base obligatorio",
        price: { amountMonthly: 249, amountAnnual: 207, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "contabilidad", label: "Contabilidad general",    value: true },
          { id: "ventas",       label: "Gestión de ventas",       value: true },
          { id: "compras",      label: "Gestión de compras",      value: true },
          { id: "facturacion",  label: "Facturación electrónica", value: true },
          { id: "usuarios",     label: "5 usuarios incluidos",    value: true },
        ],
        cta: { label: "Empezar gratis", href: "/registro?producto=360sys", variant: "primary" },
        badge: "Obligatorio",
        sortOrder: 1,
        trialDays: 14,
      },
    ],
    addons: [
      {
        id: "sys360_inv",
        slug: "inventario",
        name: "Inventario Avanzado",
        description: "Multi-almacén, lotes, series y trazabilidad de productos.",
        category: "other",
        price: { amountMonthly: 89, amountAnnual: 74, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["sys360_base"],
        features: ["Multi-almacén", "Trazabilidad por lote", "Alertas de stock mínimo"],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "sys360_rrhh",
        slug: "rrhh",
        name: "RRHH y Planillas",
        description: "Planillas, asistencia, vacaciones y beneficios sociales.",
        category: "other",
        price: { amountMonthly: 99, amountAnnual: 82, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["sys360_base"],
        features: ["Planillas quinta categoría", "Control de asistencia", "PDT planilla electrónica"],
        isAvailable: true,
      },
      {
        id: "sys360_bi",
        slug: "business-intelligence",
        name: "Business Intelligence",
        description: "Dashboards ejecutivos y KPIs para la toma de decisiones.",
        category: "analytics",
        price: { amountMonthly: 119, amountAnnual: 99, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["sys360_base"],
        features: ["Dashboards por rol", "KPIs configurables", "Exportación Excel y PDF"],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { id: "f1", question: "¿Puedo usar solo el módulo de inventario?",
          answer: "No. El Core Empresarial es obligatorio para activar cualquier módulo.", sortOrder: 1 },
        { id: "f2", question: "¿Cuánto demora la implementación?",
          answer: "Entre 5 y 7 días hábiles con acompañamiento de nuestro equipo.", sortOrder: 2 },
        { id: "f3", question: "¿Hay permanencia mínima?",
          answer: "No. Puedes cancelar en cualquier momento sin penalidades.", sortOrder: 3 },
      ],
    },
    finalCta: {
      headline: "Toma el control total de tu empresa",
      subheadline: "Comienza con el Core y agrega módulos conforme creces.",
      backgroundVariant: "dark",
      ctaPrimary: { label: "Empezar gratis", href: "/registro?producto=360sys", variant: "primary" },
      ctaSecondary: { label: "Agendar demo", href: "/contacto?producto=360sys", variant: "outline" },
      trustSignals: ["14 días gratis", "Implementación guiada", "Sin permanencia"],
    },
  },
};

export default config;
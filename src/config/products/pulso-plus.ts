import type { ProductFullConfig } from "@/types/product.types";
const config: ProductFullConfig = {
  brand: {
    name: "Pulso+",
    logoUrl: "",
    faviconUrl: "",
    colors: {
      primary: "#10B981", primaryForeground: "#FFFFFF",
      secondary: "#064E3B", secondaryForeground: "#FFFFFF",
      accent: "#34D399", accentForeground: "#064E3B",
      background: "#FFFFFF", foreground: "#0F172A",
      muted: "#ECFDF5", mutedForeground: "#6B7280",
      border: "#A7F3D0", destructive: "#EF4444",
    },
  },

  seo: {
    title: "Pulso+ — Bienestar empresarial basado en datos",
    description: "Monitorea el bienestar de tu equipo y reduce el ausentismo.",
    canonicalUrl: "https://tusaas.pe/pulso-plus",
    locale: "es-PE",
  },

  hero: {
    headline: "Tu equipo más sano, tu empresa más productiva",
    subheadline: "Mide el bienestar de tus colaboradores y actúa antes de que los problemas escalen.",
    ctaPrimary: { label: "Ver precios", href: "#precios", variant: "primary" },
    ctaSecondary: { label: "Ver demo", href: "/contacto?producto=pulso-plus", variant: "outline" },
  },

  product: {
    id: "pulso-plus",
    slug: "pulso-plus",
    name: "Pulso+",
    tagline: "Bienestar empresarial basado en datos",
    description: "Centraliza el monitoreo de salud laboral y engagement de tus colaboradores.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "annual",
      annualDiscountPercent: 17,
      annualDiscountLabel: "2 meses gratis",
    },
    requiredPlanId: "pulsoplus_base",
    plans: [
      {
        id: "pulsoplus_base",
        slug: "base",
        tier: "starter",
        name: "Bienestar Esencial",
        description: "Clima laboral, beneficios y reportes para equipos de hasta 50 personas.",
        isRequired: true,
        requiredPlanNote: "Requerido para activar módulos adicionales",
        price: { amountMonthly: 149, amountAnnual: 124, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "clima",        label: "Encuestas de clima laboral", value: true },
          { id: "beneficios",   label: "Gestión de beneficios",      value: true },
          { id: "reportes",     label: "Reportes de bienestar",      value: true },
          { id: "colaboradores", label: "Hasta 50 colaboradores",    value: true },
        ],
        cta: { label: "Empezar gratis", href: "/registro?producto=pulso-plus", variant: "primary" },
        badge: "Obligatorio",
        sortOrder: 1,
        trialDays: 14,
      },
    ],
    addons: [
      {
        id: "pulsoplus_tele",
        slug: "telemedicina",
        name: "Telemedicina",
        description: "Consultas médicas online para colaboradores y familia directa.",
        category: "other",
        price: { amountMonthly: 89, amountAnnual: 74, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["pulsoplus_base"],
        features: ["Consultas 24/7", "Extensible a familia", "Recetas digitales"],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "pulsoplus_nutri",
        slug: "nutricion",
        name: "Nutrición y Hábitos",
        description: "Plan nutricional personalizado con seguimiento semanal.",
        category: "other",
        price: { amountMonthly: 59, amountAnnual: 49, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["pulsoplus_base"],
        features: ["Plan por colaborador", "App de seguimiento", "Talleres mensuales"],
        isAvailable: true,
      },
      {
        id: "pulsoplus_sm",
        slug: "salud-mental",
        name: "Salud Mental",
        description: "Sesiones con psicólogos certificados y herramientas de mindfulness.",
        category: "other",
        price: { amountMonthly: 99, amountAnnual: 82, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["pulsoplus_base"],
        features: ["Sesiones con psicólogo", "App de mindfulness", "Línea de crisis 24/7"],
        isAvailable: true,
        badge: "Nuevo",
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { id: "f1", question: "¿Los datos de salud son privados?",
          answer: "Sí. Cumplimos la Ley 29733. El empleador solo ve reportes agregados y anónimos.", sortOrder: 1 },
        { id: "f2", question: "¿Funciona para empresas pequeñas?",
          answer: "El plan base soporta hasta 50 colaboradores. Contáctanos para equipos más grandes.", sortOrder: 2 },
        { id: "f3", question: "¿Puedo cancelar en cualquier momento?",
          answer: "Sí, sin penalidades ni compromisos de permanencia.", sortOrder: 3 },
      ],
    },
    finalCta: {
      headline: "Invierte en el bienestar de tu equipo",
      subheadline: "Equipos saludables tienen hasta 21% más productividad.",
      backgroundVariant: "gradient",
      ctaPrimary: { label: "Empezar gratis", href: "/registro?producto=pulso-plus", variant: "primary" },
      ctaSecondary: { label: "Hablar con un especialista", href: "/contacto?producto=pulso-plus", variant: "outline" },
      trustSignals: ["14 días gratis", "Datos protegidos por ley", "Sin permanencia"],
    },
  },
};

export default config;
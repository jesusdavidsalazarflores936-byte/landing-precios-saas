import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "Pulso+",
    logoUrl: "/Logos/pulso-logo.png",
    faviconUrl: "/Logos/favicon-pulso.png",
    colors: {
      primary: "#0D9488",
      primaryForeground: "#FFFFFF",
      secondary: "#F0FDFA", 
      secondaryForeground: "#115E59",
      background: "#FFFFFF", 
      foreground: "#0F172A",
      muted: "#F8FAFC", 
      mutedForeground: "#64748B",
      border: "#CCFBF1", 
    },
  },

  seo: {
    title: "Pulso+ — Gestión Integral Hospitalaria y Clínica",
    description: "Optimiza la atención de tus pacientes con historias clínicas, farmacia, hospitalización y caja en un solo lugar.",
    canonicalUrl: "https://tusaas.pe/pulso",
    locale: "es-PE",
  },

  hero: {
    headline: "El pulso de tu clínica, siempre bajo control",
    subheadline: "Digitaliza la atención médica: desde la admisión y la historia clínica, hasta la farmacia y facturación.",
    ctaPrimary: { label: "Ver planes", href: "#precios", variant: "primary" },
    ctaSecondary: { label: "Solicitar demo", href: "/contacto?producto=pulso", variant: "outline" },
  },

  product: {
    id: "pulso",
    slug: "pulso",
    name: "Pulso+",
    tagline: "Software médico y hospitalario",
    description: "Módulos integrados para clínicas, centros médicos y consultorios.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "annual",
      annualDiscountPercent: 17,
      annualDiscountLabel: "ahorra con el anual",
    },
    requiredPlanId: "pulso_base",
    plans: [
      {
        id: "pulso_base",
        slug: "base",
        tier: "starter",
        name: "Gestión Clínica Base",
        description: "El núcleo para la atención: Módulos de Admisión e Historia Clínica integrados.",
        isRequired: true,
        requiredPlanNote: "Plan base obligatorio",
        price: { amountMonthly: 140, amountAnnual: 1400, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "admision", label: "Registro de pacientes y médicos", value: true },
          { id: "especialidades", label: "Gestión de especialidades y consultorios", value: true },
          { id: "historia", label: "Historias clínicas digitales", value: true },
          { id: "tratamientos", label: "Seguimiento de consultas y tratamientos", value: true },
          { id: "recetas", label: "Emisión de recetas médicas", value: true },
        ],
        cta: { label: "Empezar ahora", href: "/registro?producto=pulso", variant: "primary" },
        badge: "Obligatorio",
        sortOrder: 1,
      },
    ],
    addons: [
      {
        id: "pulso_caja",
        slug: "caja-ventas",
        name: "Caja y Ventas",
        description: "Control y seguimiento del dinero en caja, ingresos, gastos y medios digitales.",
        category: "other",
        price: { amountMonthly: 80, amountAnnual: 800, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["pulso_base"],
        features: ["Registro de ventas por servicios", "Venta de medicamentos", "Control de caja chica y medios digitales"],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "pulso_hosp",
        slug: "hospitalizacion",
        name: "Hospitalización",
        description: "Seguimiento diario de pacientes internados, personal responsable y diagnósticos.",
        category: "other",
        price: { amountMonthly: 80, amountAnnual: 800, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["pulso_base"],
        features: ["Atención diaria de pacientes", "Asignación de personal médico", "Control de tratamientos y medicinas aplicadas"],
        isAvailable: true,
      },
      {
        id: "pulso_farmacia",
        slug: "farmacia",
        name: "Farmacia",
        description: "Registro de medicamentos, control de almacén y existencias.",
        category: "other",
        price: { amountMonthly: 60, amountAnnual: 600, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["pulso_base"],
        features: ["Control de existencias", "Movimientos de entrada y salida", "Alertas de stock"],
        isAvailable: true,
      },
      {
        id: "pulso_facturacion",
        slug: "facturacion",
        name: "Facturación Electrónica",
        description: "Declaración automática a los sistemas de SUNAT.",
        category: "other", 
        price: { amountMonthly: 40, amountAnnual: 400, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["pulso_base"],
        features: ["Emisión de boletas y facturas", "Declaración automática a SUNAT", "Formatos digitales para el paciente"],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes sobre Pulso+",
      items: [
        { id: "f1", question: "¿Puedo contratar solo el módulo de Farmacia o Facturación?", answer: "No, el sistema requiere la activación de la 'Gestión Clínica Base' (Admisión e Historia Clínica) para poder vincular la farmacia, la facturación o la hospitalización al paciente correcto.", sortOrder: 1 },
        { id: "f2", question: "¿Están seguros los datos de mis pacientes?", answer: "Sí, las historias clínicas y datos personales están cifrados y respaldados en la nube con altos estándares de seguridad.", sortOrder: 2 },
      ],
    },
    finalCta: {
      headline: "Moderniza la gestión de tu centro médico",
      subheadline: "Conecta la historia clínica con la farmacia y la caja de forma automática.",
      backgroundVariant: "dark",
      ctaPrimary: { label: "Ver planes", href: "#precios", variant: "primary" },
      ctaSecondary: { label: "Agendar demo", href: "/contacto?producto=pulso", variant: "outline" },
      trustSignals: ["Historias clínicas seguras", "Integración con SUNAT", "Soporte especializado"],
    },
  },
};

export default config;
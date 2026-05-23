import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "Comprobante-e",
    logoUrl: "",
    faviconUrl: "",
    colors: {
      primary: "#2563EB", primaryForeground: "#FFFFFF",
      secondary: "#1E3A5F", secondaryForeground: "#FFFFFF",
      accent: "#60A5FA", accentForeground: "#1E3A5F",
      background: "#FFFFFF", foreground: "#0F172A",
      muted: "#EFF6FF", mutedForeground: "#6B7280",
      border: "#BFDBFE", destructive: "#EF4444",
    },
  },

  seo: {
    title: "Comprobante-e — Facturación electrónica SUNAT",
    description: "Emite boletas, facturas y más comprobantes electrónicos certificados ante SUNAT.",
    canonicalUrl: "https://tusaas.pe/comprobante-e",
    locale: "es-PE",
  },

  hero: {
    headline: "Factura electrónica sin complicaciones",
    subheadline: "Emite comprobantes válidos ante SUNAT en segundos, desde el portal o vía API.",
    ctaPrimary: { label: "Ver precios", href: "#precios", variant: "primary" },
    ctaSecondary: { label: "Ver demo", href: "/contacto?producto=comprobante-e", variant: "outline" },
  },

  product: {
    id: "comprobante-e",
    slug: "comprobante-e",
    name: "Comprobante-e",
    tagline: "PSE certificado para facturación electrónica",
    description: "PSE autorizado por SUNAT para emitir y gestionar todos tus comprobantes electrónicos.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "annual",
      annualDiscountPercent: 17,
      annualDiscountLabel: "2 meses gratis",
    },
    requiredPlanId: "compe_base",
    plans: [
      {
        id: "compe_base",
        slug: "base",
        tier: "starter",
        name: "Emisor Esencial",
        description: "Boletas, facturas y notas de crédito con portal web y API básica.",
        isRequired: true,
        requiredPlanNote: "Plan base para todos los emisores",
        price: { amountMonthly: 49, amountAnnual: 41, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "boletas",   label: "Boletas electrónicas",        value: true },
          { id: "facturas",  label: "Facturas electrónicas",       value: true },
          { id: "notas",     label: "Notas de crédito y débito",   value: true },
          { id: "portal",    label: "Portal web de emisión",       value: true },
          { id: "api",       label: "API REST básica",             value: true },
          { id: "volumen",   label: "Hasta 500 comprobantes/mes",  value: true },
        ],
        cta: { label: "Empezar gratis", href: "/registro?producto=comprobante-e", variant: "primary" },
        badge: "Obligatorio",
        sortOrder: 1,
        trialDays: 30,
      },
    ],
    addons: [
      {
        id: "compe_volumen",
        slug: "volumen-alto",
        name: "Volumen Alto",
        description: "Emisión ilimitada para empresas con más de 500 comprobantes al mes.",
        category: "other",
        price: { amountMonthly: 89, amountAnnual: 74, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["compe_base"],
        features: ["Comprobantes ilimitados", "SLA prioritario", "Soporte en contingencias SUNAT"],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "compe_api_pro",
        slug: "api-pro",
        name: "API Pro",
        description: "Webhooks, sandbox y SDKs para integraciones avanzadas.",
        category: "integrations",
        price: { amountMonthly: 59, amountAnnual: 49, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["compe_base"],
        features: ["Webhooks para CDR", "Sandbox de pruebas", "SDK PHP, Python y Node.js"],
        isAvailable: true,
      },
      {
        id: "compe_masivo",
        slug: "emision-masiva",
        name: "Emisión Masiva",
        description: "Importa y emite miles de comprobantes desde Excel o CSV.",
        category: "other",
        price: { amountMonthly: 45, amountAnnual: 37, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["compe_base"],
        features: ["Carga por Excel / CSV", "Validación previa", "Notificación al finalizar"],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { id: "f1", question: "¿Están autorizados por SUNAT?",
          answer: "Sí. Operamos como PSE con autorización vigente de SUNAT.", sortOrder: 1 },
        { id: "f2", question: "¿Qué pasa si supero los 500 comprobantes?",
          answer: "Activa el módulo Volumen Alto para emisión ilimitada.", sortOrder: 2 },
        { id: "f3", question: "¿Qué pasa durante una contingencia de SUNAT?",
          answer: "Gestionamos los reintentos automáticamente. Tus comprobantes se envían al restablecerse el servicio.", sortOrder: 3 },
        { id: "f4", question: "¿Puedo integrar con mi sistema actual?",
          answer: "Sí. El plan base incluye API REST. Para webhooks y SDKs, activa el módulo API Pro.", sortOrder: 4 },
      ],
    },
    finalCta: {
      headline: "Empieza a facturar electrónicamente hoy",
      subheadline: "30 días gratis. Sin límite de comprobantes durante la prueba.",
      backgroundVariant: "brand",
      ctaPrimary: { label: "Crear cuenta gratis", href: "/registro?producto=comprobante-e", variant: "primary" },
      ctaSecondary: { label: "Ver documentación API", href: "/docs/comprobante-e", variant: "outline" },
      trustSignals: ["30 días gratis", "PSE autorizado SUNAT", "99.98% uptime"],
    },
  },
};

export default config;
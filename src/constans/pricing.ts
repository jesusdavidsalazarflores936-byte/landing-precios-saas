import type {
  BillingToggle,
  PricingPlan,
  Addon,
  ComparisonTableConfig,
  FaqSection,
  FinalCtaSection,
  PricingPageConfig,
} from "../types/pricing";

//Billing

export const DEFAULT_BILLING_TOGGLE: BillingToggle = {
  defaultCycle: "annual",
  annualDiscountPercent: 20,
  annualDiscountLabel: "2 meses gratis",
};

//Base plan

export const BASE_PLAN_ID = "plan_starter" as const;

export const PLANS: PricingPlan[] = [
  {
    id: "plan_starter",
    slug: "starter",
    tier: "starter",
    name: "Starter",
    description: "Para equipos pequeños que están comenzando.",
    isRequired: true,
    requiredPlanNote: "Plan base incluido en todos los suscriptores",
    price: {
      amountMonthly: 29,
      amountAnnual: 23,
      currency: "USD",
      currencySymbol: "$",
    },
    features: [
      { id: "users",     label: "Usuarios",     value: 3,           category: "general" },
      { id: "projects",  label: "Proyectos",    value: 5,           category: "general" },
      { id: "storage",   label: "Almacenamiento", value: "10 GB",   category: "general" },
      { id: "api_access", label: "API Access",  value: false,       category: "developer" },
      { id: "sso",       label: "SSO",          value: false,       category: "security" },
    ],
    cta: { label: "Empezar gratis", href: "/registro", variant: "outline" },
    sortOrder: 1,
    trialDays: 14,
  },
  {
    id: "plan_pro",
    slug: "pro",
    tier: "pro",
    name: "Pro",
    description: "Para equipos en crecimiento que necesitan más potencia.",
    price: {
      amountMonthly: 79,
      amountAnnual: 63,
      currency: "USD",
      currencySymbol: "$",
    },
    features: [
      { id: "users",     label: "Usuarios",     value: 15,          category: "general" },
      { id: "projects",  label: "Proyectos",    value: "unlimited", category: "general" },
      { id: "storage",   label: "Almacenamiento", value: "100 GB",  category: "general" },
      { id: "api_access", label: "API Access",  value: true,        category: "developer" },
      { id: "sso",       label: "SSO",          value: false,       category: "security" },
    ],
    cta: { label: "Comenzar ahora", href: "/registro?plan=pro", variant: "primary" },
    badge: "Más popular",
    isHighlighted: true,
    sortOrder: 2,
    trialDays: 14,
  },
  {
    id: "plan_business",
    slug: "business",
    tier: "business",
    name: "Business",
    description: "Para organizaciones que requieren control y seguridad avanzada.",
    price: {
      amountMonthly: 199,
      amountAnnual: 159,
      currency: "USD",
      currencySymbol: "$",
    },
    features: [
      { id: "users",     label: "Usuarios",     value: "unlimited", category: "general", highlighted: true },
      { id: "projects",  label: "Proyectos",    value: "unlimited", category: "general" },
      { id: "storage",   label: "Almacenamiento", value: "1 TB",    category: "general" },
      { id: "api_access", label: "API Access",  value: true,        category: "developer" },
      { id: "sso",       label: "SSO",          value: true,        category: "security", highlighted: true },
    ],
    cta: { label: "Hablar con ventas", href: "/contacto", variant: "secondary" },
    sortOrder: 3,
  },
];

// ─── Add-ons ──────────────────────────────────────────────────────────────────

export const ADDONS: Addon[] = [
  {
    id: "addon_analytics",
    slug: "analytics-avanzado",
    name: "Analytics Avanzado",
    description: "Reportes personalizados, embudos y retención de datos históricos.",
    category: "analytics",
    price: { amountMonthly: 19, amountAnnual: 15, currency: "USD", currencySymbol: "$" },
    compatiblePlanIds: ["plan_starter", "plan_pro", "plan_business"],
    features: ["Dashboards personalizados", "Exportación CSV / PDF", "Alertas en tiempo real"],
    isAvailable: true,
    sortOrder: 1,
  } as Addon & { sortOrder: number },
  {
    id: "addon_sso",
    slug: "sso-saml",
    name: "SSO / SAML 2.0",
    description: "Autenticación centralizada con tu proveedor de identidad.",
    category: "security",
    price: { amountMonthly: 39, amountAnnual: 31, currency: "USD", currencySymbol: "$" },
    compatiblePlanIds: ["plan_pro", "plan_business"],
    features: ["SAML 2.0", "SCIM provisioning", "Logs de auditoría"],
    isAvailable: true,
    badge: "Seguridad",
  },
];

// table

export const COMPARISON_TABLE: ComparisonTableConfig = {
  title: "Compara todos los planes",
  subtitle: "Encuentra el plan que se adapta a tu equipo.",
  highlightedPlanId: "plan_pro",
  categories: [
    { id: "general",   label: "General",          sortOrder: 1 },
    { id: "developer", label: "Developer",         sortOrder: 2 },
    { id: "security",  label: "Seguridad",         sortOrder: 3 },
  ],
  rows: [
    {
      featureId: "users",
      categoryId: "general",
      label: "Usuarios incluidos",
      planValues: { plan_starter: 3, plan_pro: 15, plan_business: "unlimited" },
    },
    {
      featureId: "projects",
      categoryId: "general",
      label: "Proyectos activos",
      planValues: { plan_starter: 5, plan_pro: "unlimited", plan_business: "unlimited" },
    },
    {
      featureId: "storage",
      categoryId: "general",
      label: "Almacenamiento",
      planValues: { plan_starter: "10 GB", plan_pro: "100 GB", plan_business: "1 TB" },
    },
    {
      featureId: "api_access",
      categoryId: "developer",
      label: "Acceso a API",
      planValues: { plan_starter: false, plan_pro: true, plan_business: true },
    },
    {
      featureId: "sso",
      categoryId: "security",
      label: "SSO / SAML",
      description: "Requiere add-on en plan Pro",
      planValues: { plan_starter: false, plan_pro: "coming_soon", plan_business: true },
    },
  ],
};

// FAQ

export const FAQ_SECTION: FaqSection = {
  title: "Preguntas frecuentes",
  subtitle: "Todo lo que necesitas saber antes de empezar.",
  items: [
    {
      id: "faq_trial",
      question: "¿Puedo probar el producto antes de pagar?",
      answer: "Sí, todos los planes incluyen **14 días de prueba gratuita** sin necesidad de tarjeta de crédito.",
      sortOrder: 1,
    },
    {
      id: "faq_cancel",
      question: "¿Puedo cancelar en cualquier momento?",
      answer: "Absolutamente. No hay permanencia mínima. Puedes cancelar desde tu panel de control con un clic.",
      sortOrder: 2,
    },
    {
      id: "faq_billing",
      question: "¿Cómo funciona la facturación anual?",
      answer: "Al elegir facturación anual, se realiza un único cobro al año y obtienes un descuento equivalente a **2 meses gratis** respecto al precio mensual.",
      sortOrder: 3,
    },
    {
      id: "faq_addons",
      question: "¿Los add-ons se cobran por separado?",
      answer: "Sí. Cada módulo adicional se factura aparte y también tiene precio reducido si eliges facturación anual.",
      sortOrder: 4,
    },
  ],
};

// FINAL CTA

export const FINAL_CTA: FinalCtaSection = {
  headline: "Empieza gratis hoy, escala cuando lo necesites",
  subheadline: "Sin tarjeta de crédito · Cancela cuando quieras · Soporte incluido",
  backgroundVariant: "gradient",
  ctaPrimary: {
    label: "Crear cuenta gratis",
    href: "/registro",
    variant: "primary",
    trackingId: "final_cta_primary",
  },
  ctaSecondary: {
    label: "Ver demo",
    href: "/demo",
    variant: "outline",
    trackingId: "final_cta_demo",
  },
  trustSignals: [
    "Sin tarjeta de crédito",
    "Cancela cuando quieras",
    "Soporte por email incluido",
    "Datos alojados en la UE",
  ],
};

//FULL PAGE CONFIG

export const PRICING_PAGE_CONFIG: PricingPageConfig = {
  billingToggle: DEFAULT_BILLING_TOGGLE,
  plans: PLANS,
  requiredPlanId: BASE_PLAN_ID,
  addons: ADDONS,
  comparisonTable: COMPARISON_TABLE,
  faq: FAQ_SECTION,
  finalCta: FINAL_CTA,
};
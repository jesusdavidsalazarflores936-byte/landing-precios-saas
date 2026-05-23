// 

export const ROUTES_AUTH = {
  REGISTER:         "/registro",
  REGISTER_PLAN:    (planSlug: string) => `/registro?plan=${planSlug}` as const,
  LOGIN:            "/acceso",
  FORGOT_PASSWORD:  "/recuperar-contrasena",
} as const;

//

export const ROUTES_MARKETING = {
  HOME:     "/",
  PRICING:  "/precios",
  FEATURES: "/funcionalidades",
  DEMO:     "/demo",
  ABOUT:    "/nosotros",
  BLOG:     "/blog",
  CONTACT:  "/contacto",
} as const;

// 

export const ROUTES_LEGAL = {
  TERMS:   "/terminos",
  PRIVACY: "/privacidad",
  COOKIES: "/cookies",
} as const;

//

export const ROUTES_APP = {
  DASHBOARD:       "/app",
  SETTINGS:        "/app/configuracion",
  BILLING:         "/app/facturacion",
  BILLING_UPGRADE: "/app/facturacion/mejorar",
} as const;

// 

export const ROUTES_API = {
  CHECKOUT_SESSION: "/api/checkout/session",
  PORTAL_SESSION:   "/api/billing/portal",
  PLAN_CHANGE:      "/api/billing/plan",
} as const;

//

export const ROUTES = {
  auth:      ROUTES_AUTH,
  marketing: ROUTES_MARKETING,
  legal:     ROUTES_LEGAL,
  app:       ROUTES_APP,
  api:       ROUTES_API,
} as const;

export type AppRoute =
  | typeof ROUTES_AUTH[keyof typeof ROUTES_AUTH]
  | typeof ROUTES_MARKETING[keyof typeof ROUTES_MARKETING]
  | typeof ROUTES_LEGAL[keyof typeof ROUTES_LEGAL]
  | typeof ROUTES_APP[keyof typeof ROUTES_APP];
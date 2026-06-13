import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "Comprobante-e",
    logoUrl: "",
    faviconUrl: "",
    colors: {
      primary: "#0F8FD6",
      primaryForeground: "#FFFFFF",
      secondary: "#1E3A5F",
      secondaryForeground: "#FFFFFF",
      accent: "#DFF4FF",
      accentForeground: "#0F172A",
      background: "#FFFFFF",
      foreground: "#0F172A",
      muted: "#F1F7FB",
      mutedForeground: "#64748B",
      border: "#CFE7F5",
      destructive: "#EF4444",
    },
  },

  seo: {
    title: "Comprobante-e - Facturacion electronica SUNAT",
    description:
      "Emite, declara y consulta comprobantes electronicos ante SUNAT con soporte, portal web y alojamiento de documentos.",
    canonicalUrl: "https://comprobante-e.com/precios",
    locale: "es-PE",
  },

  hero: {
    headline: "Sistema de facturacion electronica en la nube",
    subheadline:
      "Emite tus facturas y boletas electronicas con seguridad, declaracion automatica a SUNAT y consulta desde cualquier lugar.",
    ctaPrimary: { label: "Ver precios", href: "#precios", variant: "primary" },
    ctaSecondary: {
      label: "Solicitar demo",
      href: "/contacto?producto=comprobante-e",
      variant: "outline",
    },
  },

  product: {
    id: "comprobante-e",
    slug: "comprobante-e",
    name: "Comprobante-e",
    tagline: "Facturacion electronica para empresas conectadas a SUNAT",
    description:
      "Plataforma para emitir, declarar, consultar y alojar comprobantes electronicos de venta, guias, notas de credito y comunicaciones hacia SUNAT.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "monthly",
      annualDiscountPercent: 0,
      annualDiscountLabel: "servicio mensual",
      monthlyLabel: "Mensual",
      annualLabel: "Anual",
    },
    requiredPlanId: "comprobante_base",
    plans: [
      {
        id: "comprobante_base",
        slug: "facturacion-electronica",
        tier: "starter",
        name: "Modulo de Facturacion Electronica",
        description:
          "Emision y declaracion automatica a SUNAT de documentos electronicos de venta, guias, notas de credito, bajas y consultas de comprobantes.",
        isRequired: true,
        requiredPlanNote: "Instalacion S/100.00",
        price: {
          amountMonthly: 50,
          amountAnnual: 50,
          currency: "PEN",
          currencySymbol: "S/",
          priceLabel: "Alquiler mensual",
        },
        features: [
          { id: "instalacion", label: "Instalacion: S/100.00", value: true },
          { id: "alquiler", label: "Alquiler mensual: S/50.00", value: true },
          { id: "boletas-facturas", label: "Boletas y facturas electronicas", value: true },
          { id: "guias", label: "Guias de remision remitente y transportista", value: true },
          { id: "notas-credito", label: "Notas de credito y comunicacion de bajas", value: true },
          { id: "sunat", label: "Declaracion automatica hacia SUNAT", value: true },
          { id: "portal", label: "Portal de consulta para clientes", value: true },
          { id: "contabilidad", label: "Cuenta para contabilidad", value: true },
        ],
        detailedFeatures: [
          {
            title: "Emision de documentos electronicos",
            description:
              "Emite boletas y facturas de venta electronicas, notas de credito, comunicacion de bajas y otros documentos requeridos por tu operacion.",
          },
          {
            title: "Guias de remision",
            description:
              "Emite guias de remision remitente y transportista, con declaracion automatica de las guias generadas hacia SUNAT.",
          },
          {
            title: "Declaracion automatica SUNAT",
            description:
              "Declara boletas, facturas, resumenes de boletas, notas de credito y resumenes de bajas sin procesos manuales repetitivos.",
          },
          {
            title: "Seguimiento de comprobantes",
            description:
              "Actualiza y consulta la situacion de comprobantes emitidos y enviados a SUNAT mediante sincronizacion con sus servidores.",
          },
          {
            title: "Acceso para contabilidad",
            description:
              "Incluye una cuenta para el area contable, integrando el envio de documentos a SUNAT con la emision de comprobantes de tu aplicacion comercial.",
          },
          {
            title: "Portal de consulta para clientes",
            description:
              "Tus clientes pueden consultar sus comprobantes de venta emitidos desde el portal web de Facturacion Electronica.",
          },
          {
            title: "Alojamiento y soporte",
            description:
              "Aloja comprobantes electronicos durante 365 dias e incluye asesoria 24x7 ante incidencias de facturacion electronica.",
          },
          {
            title: "Actualizacion normativa",
            description:
              "La plataforma se actualiza frente a cambios de normativa SUNAT y permite adecuar reportes para CONCAR, Contasys, NavaSoft y otros.",
          },
        ],
        cta: {
          label: "Solicitar demo",
          href: "/contacto?producto=comprobante-e",
          variant: "primary",
        },
        badge: "Servicio mensual",
        sortOrder: 1,
      },
    ],
    addons: [],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          id: "documentos",
          question: "Que documentos electronicos puedo emitir?",
          answer:
            "Puedes emitir boletas, facturas, notas de credito, comunicaciones de bajas y guias de remision remitente y transportista.",
          sortOrder: 1,
        },
        {
          id: "sunat",
          question: "La declaracion a SUNAT es automatica?",
          answer:
            "Si. La plataforma declara automaticamente los documentos emitidos y permite consultar su situacion ante SUNAT.",
          sortOrder: 2,
        },
        {
          id: "portal",
          question: "Mis clientes pueden consultar sus comprobantes?",
          answer:
            "Si. El servicio incluye portal web para consulta de comprobantes emitidos y alojamiento durante 365 dias.",
          sortOrder: 3,
        },
        {
          id: "soporte",
          question: "Incluye soporte ante incidencias?",
          answer:
            "Si. Incluye asesoria 24x7 sobre incidencias de facturacion electronica y actualizaciones ante cambios normativos de SUNAT.",
          sortOrder: 4,
        },
      ],
    },
    finalCta: {
      headline: "Listo para emitir comprobantes electronicos?",
      subheadline:
        "Conecta tu facturacion con SUNAT, habilita el portal para tus clientes y manten tus comprobantes disponibles durante 365 dias.",
      backgroundVariant: "brand",
      ctaPrimary: {
        label: "Solicitar demo",
        href: "/contacto?producto=comprobante-e",
        variant: "primary",
      },
      ctaSecondary: {
        label: "Consultar portal",
        href: "https://facturae-garzasoft.com/facturacion/vista/frmBuscarDocumento.php",
        variant: "outline",
        openInNewTab: true,
      },
      trustSignals: [
        "Declaracion automatica SUNAT",
        "Soporte 24x7",
        "Alojamiento por 365 dias",
      ],
    },
  },
};

export default config;

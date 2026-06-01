import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "360sys",
    logoUrl: "/Logos/360sys.png",
    faviconUrl: "/Logos/favicon.png",
    colors: {
      primary: "#31D12F",
      primaryForeground: "#FFFFFF",
      secondary: "#E9FBEA",
      secondaryForeground: "#14532D",
      background: "#F7FFF7",
      foreground: "#0F172A",
      card: "#FFFFFF",
      cardForeground: "#0F172A",
      muted: "#F0FDF4",
      mutedForeground: "#64748B",
      accent: "#DDFBDD",
      accentForeground: "#14532D",
      border: "#BBF7D0",
    },
  },

  seo: {
    title: "360sys — Ecosistema de gestión integral para tu negocio",
    description:
      "Punto de venta, facturación electrónica, control de existencias, reportes y módulos adicionales para operar tu negocio con orden.",
    canonicalUrl: "https://tusaas.pe/360sys",
    locale: "es-PE",
  },

  hero: {
    headline: "Control 360° para tu negocio",
    subheadline:
      "Gestiona ventas, caja, compras, existencias, facturación y módulos especializados desde una sola plataforma.",
    ctaPrimary: { label: "Ver precios", href: "#precios", variant: "primary" },
    ctaSecondary: {
      label: "Solicitar demo",
      href: "/contacto?producto=360sys",
      variant: "outline",
    },
  },

  product: {
    id: "360sys",
    slug: "360sys",
    name: "360sys",
    tagline: "Ecosistema de gestión integral para tu negocio",
    description:
      "Centraliza tu punto de venta, facturación electrónica, existencias, compras y módulos de crecimiento en un solo sistema.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "monthly",
      annualDiscountPercent: 17,
      annualDiscountLabel: "ahorra con el anual",
    },
    requiredPlanId: "pos-facturacion",
    plans: [
      {
        id: "pos-facturacion",
        slug: "pos-facturacion",
        tier: "starter",
        name: "Punto de venta + Facturación electrónica",
        description:
          "El corazón operativo de tu negocio. Desde el primer saludo al cliente hasta el cierre de caja, este módulo centraliza todo lo que necesitas para vender más rápido, cobrar con precisión y cumplir con SUNAT sin complicaciones.",
        isRequired: true,
        requiredPlanNote: "Plan base obligatorio",
        price: {
          amountMonthly: 120,
          amountAnnual: 1200,
          currency: "PEN",
          currencySymbol: "S/",
        },
        features: [
          {
            id: "plataforma-cajero",
            label: "Plataforma para cajero",
            description:
              "Experiencia de venta fluida. Gestiona ventas minoristas, mayoristas, promociones y créditos. Conversión automática de unidades. Aprobación por clave para anulaciones o descuentos. Acepta efectivo, tarjetas, Yape o Plin. Control de caja chica y cuadre de turnos.",
            value: true,
          },
          {
            id: "creditos",
            label: "Créditos",
            description:
              "Vende al crédito sin perder el control. Seguimiento en tiempo real de cuentas por cobrar y alertas de vencimiento.",
            value: true,
          },
          {
            id: "cotizaciones",
            label: "Cotizaciones",
            description:
              "Genera cotizaciones detalladas y conviértelas en ventas con un solo clic.",
            value: true,
          },
          {
            id: "pedidos",
            label: "Pedidos",
            description:
              "Organiza pedidos anticipados para recojo, delivery o envíos nacionales con visibilidad completa del estado.",
            value: true,
          },
          {
            id: "compras",
            label: "Compras",
            description:
              "Gestiona proveedores, registra compras, vincula egresos y lleva el historial de costos por producto. Control de cuentas por pagar.",
            value: true,
          },
          {
            id: "control-existencias",
            label: "Control de existencias",
            description:
              "Catálogo por categorías y marcas. Múltiples precios de venta. Entradas, salidas, trazabilidad, y seguimiento por lote y vencimiento.",
            value: true,
          },
          {
            id: "facturacion-electronica",
            label: "Facturación electrónica",
            description:
              "Emite boletas, facturas, notas de crédito y guías. Envío ilimitado a SUNAT. Envío automático de comprobantes al cliente por correo o WhatsApp.",
            value: true,
          },
        ],
        detailedFeatures: [
          {
            title: "Plataforma para cajero",
            description:
              "Experiencia de venta fluida. Gestiona ventas minoristas, mayoristas, promociones y créditos. Conversión automática de unidades. Aprobación por clave para anulaciones o descuentos. Acepta efectivo, tarjetas, Yape o Plin. Control de caja chica y cuadre de turnos.",
          },
          {
            title: "Créditos",
            description:
              "Vende al crédito sin perder el control. Seguimiento en tiempo real de cuentas por cobrar y alertas de vencimiento.",
          },
          {
            title: "Cotizaciones",
            description:
              "Genera cotizaciones detalladas y conviértelas en ventas con un solo clic.",
          },
          {
            title: "Pedidos",
            description:
              "Organiza pedidos anticipados para recojo, delivery o envíos nacionales con visibilidad completa del estado.",
          },
          {
            title: "Compras",
            description:
              "Gestiona proveedores, registra compras, vincula egresos y lleva el historial de costos por producto. Control de cuentas por pagar.",
          },
          {
            title: "Control de existencias",
            description:
              "Catálogo por categorías y marcas. Múltiples precios de venta. Entradas, salidas, trazabilidad, y seguimiento por lote y vencimiento.",
          },
          {
            title: "Facturación electrónica",
            description:
              "Emite boletas, facturas, notas de crédito y guías. Envío ilimitado a SUNAT. Envío automático de comprobantes al cliente por correo o WhatsApp.",
          },
        ],
        cta: {
          label: "Comenzar ahora",
          href: "/contacto",
          variant: "primary",
        },
        badge: "Obligatorio",
        sortOrder: 1,
      },
    ],
    addons: [
      {
        id: "comercio-inteligente",
        slug: "comercio-inteligente",
        name: "Comercio inteligente",
        tagline: "Transforma los datos de tu negocio en gráficos e indicadores.",
        description:
          "Transforma los datos de tu negocio en gráficos, indicadores y análisis accionables para tomar mejores decisiones.",
        category: "analytics",
        price: {
          amountMonthly: 50,
          amountAnnual: 500,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["pos-facturacion"],
        features: [
          "Estadísticas y análisis de ventas",
          "Estadísticas de inventario",
          "Estadísticas de rentabilidad",
          "Ingresos y gastos de caja",
        ],
        detailedFeatures: [
          {
            title: "Estadísticas y análisis de ventas",
            description:
              "Conoce ingresos totales, picos de actividad, categorías estrella y compara rendimientos mensuales.",
          },
          {
            title: "Estadísticas de inventario",
            description:
              "Indicadores de stock óptimo y alertas de reposición para no quedarte sin mercadería.",
          },
          {
            title: "Estadísticas de rentabilidad",
            description:
              "Analiza tu rentabilidad bruta, descubre los productos más rentables y entiende el impacto de tus egresos.",
          },
          {
            title: "Ingresos y gastos de caja",
            description:
              "Monitorea la salud de tu caja. Analiza comportamiento diario, tendencias semanales y desglose de salidas de dinero.",
          },
        ],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "encuestas-opinion",
        slug: "encuestas-opinion",
        name: "Encuestas de opinión",
        tagline: "Mide la satisfacción y detecta oportunidades de mejora.",
        description:
          "Crea encuestas personalizadas para medir la satisfacción, detectar oportunidades y tomar decisiones basadas en tus clientes.",
        category: "analytics",
        price: {
          amountMonthly: 20,
          amountAnnual: 200,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["pos-facturacion"],
        features: [
          "Personalización",
          "Avisos automáticos",
          "Reportes y estadísticas",
        ],
        detailedFeatures: [
          {
            title: "Personalización",
            description:
              "Diseña encuestas con selección única, opción múltiple, estrellas o escala numérica adaptadas a tu objetivo.",
          },
          {
            title: "Avisos automáticos",
            description:
              "Recibe notificaciones inmediatas en WhatsApp ante una mala experiencia para actuar y fidelizar al instante.",
          },
          {
            title: "Reportes y estadísticas",
            description:
              "Resultados agrupados por atención, producto, local o experiencia general para decisiones fundamentadas.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "tienda-virtual",
        slug: "tienda-virtual",
        name: "Tienda virtual",
        tagline: "Lleva tu marca al mundo digital con una experiencia 24/7.",
        description:
          "Lleva tu marca al mundo digital con una experiencia de compra 24/7 conectada a tu operación diaria.",
        category: "other",
        price: {
          amountMonthly: 0,
          amountAnnual: 0,
          currency: "PEN",
          currencySymbol: "S/",
          isContactSales: true,
        },
        compatiblePlanIds: ["pos-facturacion"],
        features: [
          "Personalización",
          "Fácil gestión",
          "Interactividad",
          "Pasarela de pago",
        ],
        detailedFeatures: [
          {
            title: "Personalización",
            description:
              "Tienda a medida con dominio propio y propuesta visual adaptada a la identidad de tu marca.",
          },
          {
            title: "Fácil gestión",
            description:
              "Se alimenta de tu catálogo de Punto de venta. Precios, stock y descripciones se sincronizan automáticamente.",
          },
          {
            title: "Interactividad",
            description:
              "Los clientes arman su carrito, eligen variables (tallas, colores) basados en stock real y navegan sin fricciones.",
          },
          {
            title: "Pasarela de pago",
            description:
              "Pagos seguros. Los pedidos llegan automáticamente a tu Punto de venta para procesamiento inmediato.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "atencion-reservas",
        slug: "atencion-reservas",
        name: "Atención y reservas",
        tagline: "Gestiona citas, turnos y reservas sin cruces de horario.",
        description:
          "Ideal para citas y turnos. Gestiona el tiempo de tus estaciones con precisión y elimina cruces de horario.",
        category: "other",
        price: {
          amountMonthly: 60,
          amountAnnual: 600,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["pos-facturacion"],
        features: [
          "Agenda y calendario",
          "Pagos anticipados",
          "Recordatorios de asistencia",
        ],
        detailedFeatures: [
          {
            title: "Agenda y calendario",
            description:
              "Visualiza reservas en agenda diaria o calendario mensual. Diferencia citas pagadas de pendientes.",
          },
          {
            title: "Pagos anticipados",
            description:
              "Registra adelantos, genera comprobantes y refleja el ingreso en tu caja chica de forma automática.",
          },
          {
            title: "Recordatorios de asistencia",
            description:
              "Envía recordatorios automáticos por WhatsApp o correo antes de la cita para reducir ausencias.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "historia-medica",
        slug: "historia-medica",
        name: "Historia médica veterinaria",
        tagline: "Centraliza la información clínica y administrativa.",
        description:
          "Centraliza la información clínica y administrativa de tus pacientes para optimizar los procesos de tu clínica.",
        category: "other",
        price: {
          amountMonthly: 50,
          amountAnnual: 500,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["pos-facturacion"],
        features: [
          "Gestión administrativa",
          "Citas y atenciones",
          "Plan de vacunación",
          "Hospitalizaciones",
        ],
        detailedFeatures: [
          {
            title: "Gestión administrativa",
            description:
              "Perfil completo por paciente (datos, especie, raza, historial). Elimina el desorden del papel.",
          },
          {
            title: "Citas y atenciones",
            description:
              "Control de consultas, alertas de citas, recordatorios automáticos y documentación de diagnósticos y tratamientos.",
          },
          {
            title: "Plan de vacunación",
            description:
              "Configura planes personalizados y activa recordatorios automáticos para los refuerzos.",
          },
          {
            title: "Hospitalizaciones",
            description:
              "Documenta el estado en tiempo real, tratamientos aplicados e historial clínico para continuidad de atención en cambios de turno.",
          },
        ],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          id: "f1",
          question: "¿Puedo usar solo el Punto de Venta sin módulos adicionales?",
          answer:
            "Sí, el plan base incluye POS, Facturación Electrónica y gestión esencial. Los módulos adicionales son opcionales y se añaden según tus necesidades.",
          sortOrder: 1,
        },
        {
          id: "f2",
          question: "¿La tienda virtual se sincroniza con mi stock físico?",
          answer:
            "Sí, la tienda virtual se alimenta del catálogo y stock real de tu Punto de Venta para mantener precios y existencias actualizados.",
          sortOrder: 2,
        },
      ],
    },
    finalCta: {
      headline: "Toma el control total de tu negocio",
      subheadline:
        "Empieza con el punto de venta y agrega módulos conforme creces.",
      backgroundVariant: "dark",
      ctaPrimary: {
        label: "Solicitar demo",
        href: "#demo-form",
        variant: "primary",
      },
      ctaSecondary: {
        label: "Agendar demo",
        href: "/contacto?producto=360sys",
        variant: "outline",
      },
      trustSignals: [
        "Facturación electrónica",
        "Control de caja",
        "Módulos escalables",
      ],
    },
  },
  faq: [
    {
      question: "¿Puedo usar solo el Punto de Venta sin módulos adicionales?",
      answer:
        "Sí, el plan base incluye POS, Facturación Electrónica y gestión esencial. Los módulos adicionales son opcionales y se añaden según tus necesidades.",
    },
    {
      question: "¿La tienda virtual se sincroniza con mi stock físico?",
      answer:
        "Totalmente. Tu tienda virtual se alimenta directamente del catálogo y stock real de tu Punto de Venta.",
    },
  ],
};

export default config;

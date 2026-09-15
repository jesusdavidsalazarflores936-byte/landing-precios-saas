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
    id: "hotel-hub",
    slug: "hotel-hub",
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
    installation: {
      label: "Instalación y configuración",
      price: 100,
      annualNote: "Sin costo al elegir el pago anual",
    },
    commercialNotes: [
      {
        id: "updates",
        title: "Actualización continua",
        description: "Mejoras permanentes para la plataforma HotelHUB.",
      },
      {
        id: "support",
        title: "Soporte 24/7",
        description: "Acompañamiento para la operación de tu alojamiento.",
      },
      {
        id: "consulting",
        title: "Asesoría permanente",
        description: "Orientación para aprovechar cada módulo.",
      },
      {
        id: "qualified-team",
        title: "Personal calificado",
        description: "Especialistas preparados para atender tus consultas.",
      },
    ],
    plans: [
      {
        id: "hotelhub_base",
        slug: "gestiona-alojamiento",
        tier: "starter",
        name: "Gestiona tu Alojamiento",
        description: "Centraliza la operación diaria de tu alojamiento: disponibilidad de habitaciones, huéspedes, check-in, check-out, consumos, ventas, caja y turnos en un solo lugar.",
        isRequired: true,
        requiredPlanNote: "Módulo base obligatorio",
        price: { amountMonthly: 50, amountAnnual: 500, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "habitaciones", label: "Gestión de habitaciones y huéspedes", description: "Controla disponibilidad, estados y fichas de huéspedes desde una sola vista.", value: true },
          { id: "checkin", label: "Check-in / Check-out", description: "Registra entradas y salidas con el detalle de cada estadía.", value: true },
          { id: "ventas", label: "Control de ventas y caja", description: "Centraliza consumos, pagos, ingresos y movimientos de caja.", value: true },
          { id: "almacen", label: "Productos y almacén", description: "Administra productos, existencias y movimientos vinculados a la operación.", value: true },
          { id: "turnos", label: "Gestión de turnos", description: "Ordena aperturas, cierres y responsabilidades del personal.", value: true },
        ],
        detailedFeatures: [
          {
            title: "Gestión de habitaciones y huéspedes",
            description: "Consulta la disponibilidad y el estado de cada habitación, registra la información de tus huéspedes y mantén el historial de sus estadías organizado para una atención más rápida.",
          },
          {
            title: "Check-in / Check-out",
            description: "Gestiona el ingreso y la salida de huéspedes con fechas, ocupantes, tarifas, consumos y saldos asociados a la estadía, reduciendo omisiones durante el cambio de turno.",
          },
          {
            title: "Control de ventas y caja",
            description: "Registra ventas, cargos a habitación, pagos y movimientos de caja. Revisa ingresos y egresos por turno para mantener el control de la operación diaria.",
          },
          {
            title: "Productos y almacén",
            description: "Organiza el catálogo de productos y controla las existencias utilizadas en recepción, habitaciones u otros puntos de atención del alojamiento.",
          },
          {
            title: "Gestión de turnos",
            description: "Registra aperturas y cierres, identifica al responsable de cada operación y conserva la trazabilidad necesaria para realizar cambios de turno ordenados.",
          },
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
        tagline: "Emite comprobantes y mantén el control tributario de tu alojamiento.",
        description: "Emite boletas, facturas y notas electrónicas desde la misma operación del hotel, con control de comprobantes, reportes y anulaciones.",
        category: "other",
        price: { amountMonthly: 30, amountAnnual: 300, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Emisión de boletas y facturas", "Control de comprobantes", "Anulaciones directas"],
        detailedFeatures: [
          {
            title: "Emisión de boletas y facturas",
            description: "Genera comprobantes electrónicos vinculados a las ventas y estadías registradas en HotelHUB, evitando volver a ingresar la información.",
          },
          {
            title: "Control de comprobantes",
            description: "Consulta el estado y el historial de los documentos emitidos para dar seguimiento a cada operación desde un solo lugar.",
          },
          {
            title: "Anulaciones directas",
            description: "Gestiona anulaciones y documentos relacionados desde el sistema, manteniendo la trazabilidad de los cambios realizados.",
          },
        ],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "hub_inteligente",
        slug: "hotel-inteligente",
        name: "Hotel Inteligente",
        tagline: "Convierte la operación diaria en indicadores para tomar mejores decisiones.",
        description: "Analiza ocupación, reservas, ventas, caja y otras métricas del alojamiento mediante indicadores que facilitan el seguimiento del negocio.",
        category: "analytics",
        price: { amountMonthly: 50, amountAnnual: 500, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Métricas del hotel", "Análisis de reservas", "Análisis de caja y ventas"],
        detailedFeatures: [
          {
            title: "Métricas del hotel",
            description: "Visualiza indicadores de ocupación, estadías e ingresos para conocer el desempeño del alojamiento y detectar cambios importantes a tiempo.",
          },
          {
            title: "Análisis de reservas",
            description: "Revisa el comportamiento de las reservas por fecha, estado y origen para reconocer tendencias y anticipar la demanda.",
          },
          {
            title: "Análisis de caja y ventas",
            description: "Compara ingresos, ventas y movimientos de caja para entender qué áreas aportan más al resultado del negocio.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "hub_encuesta",
        slug: "encuesta-opinion",
        name: "Encuesta de Opinión",
        tagline: "Escucha a tus huéspedes y convierte sus respuestas en oportunidades de mejora.",
        description: "Crea encuestas para medir la experiencia de tus huéspedes y consulta estadísticas de satisfacción organizadas por las categorías que definas.",
        category: "analytics",
        price: { amountMonthly: 30, amountAnnual: 300, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Encuestas personalizadas", "Estadísticas de satisfacción", "Gestión de categorías"],
        detailedFeatures: [
          {
            title: "Encuestas personalizadas",
            description: "Diseña preguntas alineadas con la experiencia que deseas evaluar, desde la atención en recepción hasta la limpieza y comodidad de la habitación.",
          },
          {
            title: "Estadísticas de satisfacción",
            description: "Agrupa las respuestas en indicadores claros para reconocer fortalezas y priorizar los aspectos que necesitan atención.",
          },
          {
            title: "Gestión de categorías",
            description: "Organiza las preguntas por temas y compara resultados para comprender mejor cada etapa de la experiencia del huésped.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "hub_housekeeping",
        slug: "housekeeping",
        name: "Housekeeping",
        tagline: "Coordina la limpieza de habitaciones y conoce el avance de cada tarea.",
        description: "Asigna habitaciones al personal de limpieza, supervisa tiempos y estados de atención, y controla las jornadas desde una vista central.",
        category: "other",
        price: { amountMonthly: 20, amountAnnual: 200, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Asignación de limpieza", "Seguimiento de tiempos", "Control de jornadas del personal"],
        detailedFeatures: [
          {
            title: "Asignación de limpieza",
            description: "Distribuye habitaciones y tareas entre el personal disponible para organizar la carga de trabajo de cada jornada.",
          },
          {
            title: "Seguimiento de tiempos",
            description: "Consulta cuándo inicia y termina cada atención para identificar habitaciones listas y reducir esperas en recepción.",
          },
          {
            title: "Control de jornadas del personal",
            description: "Revisa las tareas atendidas por cada colaborador y conserva un registro del trabajo realizado durante el turno.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "hub_reservas",
        slug: "reservas",
        name: "Gestión de Reservas",
        tagline: "Organiza reservas de habitaciones y salones sin cruces de fechas.",
        description: "Registra, visualiza y da seguimiento a las reservas de habitaciones y salones mediante un calendario conectado con la operación del alojamiento.",
        category: "other",
        price: { amountMonthly: 30, amountAnnual: 300, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Calendario de reservas", "Registro y seguimiento", "Control de origen y estados"],
        detailedFeatures: [
          {
            title: "Calendario de reservas",
            description: "Consulta la ocupación prevista y la disponibilidad por fecha para responder rápidamente a nuevas solicitudes.",
          },
          {
            title: "Registro y seguimiento",
            description: "Conserva los datos del huésped, fechas, adelantos y observaciones necesarios para acompañar cada reserva hasta su atención.",
          },
          {
            title: "Control de origen y estados",
            description: "Identifica de dónde proviene cada reserva y actualiza su estado para mantener informados a recepción y administración.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "hub_alquileres",
        slug: "alquileres",
        name: "Gestiona tus Alquileres",
        tagline: "Administra contratos, ambientes y pagos desde un solo módulo.",
        description: "Organiza edificios y ambientes, genera contratos y controla compromisos de pago para complementar la gestión de tus alquileres.",
        category: "other",
        price: { amountMonthly: 50, amountAnnual: 500, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["hotelhub_base"],
        features: ["Plantillas de contrato", "Gestión de edificios/ambientes", "Control de pagos"],
        detailedFeatures: [
          {
            title: "Plantillas de contrato",
            description: "Prepara contratos a partir de plantillas reutilizables y mantén la información de cada arrendamiento ordenada.",
          },
          {
            title: "Gestión de edificios/ambientes",
            description: "Registra propiedades y ambientes, consulta su estado y relaciona cada espacio con el contrato correspondiente.",
          },
          {
            title: "Control de pagos",
            description: "Da seguimiento a cuotas y compromisos para identificar pagos pendientes y mantener actualizado el historial del arrendatario.",
          },
        ],
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


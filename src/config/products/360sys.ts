import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "360Sys",
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
    title: "360Sys — ERP para empresas en crecimiento",
    description:
      "Finanzas, ventas, inventario y RRHH en una sola plataforma para PyMEs peruanas.",
    canonicalUrl: "https://tusaas.pe/360sys",
    locale: "es-PE",
  },

  hero: {
    headline: "Toda tu empresa en una sola pantalla",
    subheadline: "Finanzas, ventas, inventario y RRHH conectados en tiempo real.",
    ctaPrimary: { label: "Ver Precios", href: "precios", variant: "primary" },
    ctaSecondary: {
      label: "Solicitar demo",
      href: "/contacto?producto=360sys",
      variant: "outline",
    },
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
      annualDiscountLabel: "ahorra con el anual",
    },
    requiredPlanId: "sys360_base",
    plans: [
      {
        id: "sys360_base",
        slug: "base",
        tier: "starter",
        name: "Core Empresarial",
        description:
          "El corazón operativo de tu negocio. Desde el primer saludo al cliente hasta el cierre de caja...",
        isRequired: true,
        requiredPlanNote: "Módulo base obligatorio",
        price: {
          amountMonthly: 249,
          amountAnnual: 207,
          currency: "PEN",
          currencySymbol: "S/",
        },
        features: [
          { id: "contabilidad", label: "Contabilidad general", value: true },
          { id: "ventas", label: "Gestión de ventas", value: true },
          { id: "compras", label: "Gestión de compras", value: true },
          { id: "facturacion", label: "Facturación electrónica", value: true },
          { id: "usuarios", label: "5 usuarios incluidos", value: true },
        ],
        detailedFeatures: [
          {
            title: "Plataforma para cajero",
            description:
              "Una experiencia de venta fluida, pensada para la velocidad y la precisión en el punto de atención. Gestiona múltiples tipos de venta —minorista, mayorista, promoción y crédito— y trabaja con productos en distintas presentaciones gracias a la conversión automática de unidades. ¿Necesitas anular un producto, aplicar un descuento o registrar una cortesía? Todo queda protegido por clave de aprobación del administrador, garantizando el orden y seguridad en cada operación. Acepta pagos en efectivo, tarjetas y billeteras digitales como Yape o Plin. Controla tu caja chica con registros detallados de ingresos y gastos, y cierra cada turno con un cuadre completo que refleja exactamente lo que pasó.",
          },
          {
            title: "Créditos",
            description:
              "Vende al crédito sin perder el control. Haz seguimiento en tiempo real de todas tus cuentas por cobrar, con alertas de vencimiento que te avisan antes de que una deuda se convierta en un problema. Mantén tu flujo de caja saludable y tus relaciones comerciales al día.",
          },
          {
            title: "Cotizaciones",
            description:
              "Presenta tus productos y servicios de forma profesional antes de cerrar la venta. Genera cotizaciones detalladas para tus clientes empresariales —con condiciones, precios y observaciones— y cuando estén listos para comprar, conviértelas en ventas con un solo clic, con la posibilidad de ajustar lo que necesites en el camino.",
          },
          {
            title: "Pedidos",
            description:
              "Organiza y controla cada pedido anticipado, ya sea para recojo en tienda, delivery o envíos a nivel nacional. Desde el momento en que se registra el pago adelantado hasta que el producto llega a manos del cliente, tendrás visibilidad completa del estado de cada pedido, eliminando confusiones y asegurando una entrega impecable.",
          },
          {
            title: "Compras",
            description:
              "Gestiona tus proveedores y tus compras en un solo lugar. Registra cada documento de compra, vincula los egresos correspondientes y lleva el historial de evolución de costos por producto para negociar siempre desde una posición informada. Además, controla tus cuentas por pagar para que ningún vencimiento te tome por sorpresa.",
          },
          {
            title: "Control de existencias",
            description:
              "Tu almacén siempre ordenado y bajo control. Organiza tu catálogo de productos por categorías y marcas, maneja múltiples precios de venta con márgenes de ganancia configurables, y registra entradas y salidas con total trazabilidad. Lleva el seguimiento de productos perecibles por lote y fecha de vencimiento, y consulta el historial completo de movimientos cuando lo necesites.",
          },
          {
            title: "Facturación electrónica",
            description:
              "Cumple con SUNAT de forma automática y sin esfuerzo. Emite boletas, facturas, notas de crédito, anulaciones y guías de remisión directamente desde el sistema, con envío ilimitado de comprobantes electrónicos. Cuando anulas una venta, el comprobante se anula solo. Y para que tus clientes reciban su documento al instante, el sistema lo envía automáticamente por correo o WhatsApp.",
          },
        ],
        cta: {
          label: "Solicitar demo",
          href: "#demo-form",
          variant: "primary",
        },
        badge: "Obligatorio",
        sortOrder: 1,
        trialDays: 14,
      },
    ],
    addons: [
      {
        id: "sys360_comercio_inteligente",
        slug: "comercio-inteligente",
        name: "Comercio Inteligente",
        tagline: "Transforma los datos de tu negocio en gráficos e indicadores.",
        description:
          "Tomar buenas decisiones requiere información clara y oportuna. Este módulo transforma los datos de tu negocio en gráficos, indicadores y análisis accionables que te permiten entender qué está funcionando, qué necesita atención y hacia dónde dirigir tus esfuerzos. Deja de operar por intuición y empieza a crecer con inteligencia.",
        category: "analytics",
        price: {
          amountMonthly: 119,
          amountAnnual: 99,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["sys360_base"],
        features: [
          "Análisis de ventas",
          "Análisis de inventario",
          "Análisis de rentabilidad",
          "Ingresos y gastos de caja",
        ],
        detailedFeatures: [
          {
            title: "Estadísticas y análisis de ventas",
            description:
              "Conoce el pulso real de tus ventas en cada dimensión. Visualiza tus ingresos totales, identifica los momentos del día con mayor actividad, analiza qué categorías y productos generan más dinero, y compara el rendimiento de este mes frente al anterior. Desde la estacionalidad hasta el desglose por método de pago y tipo de comprobante, tendrás todos los datos que necesitas para vender más y mejor.",
          },
          {
            title: "Estadísticas y análisis de inventario",
            description:
              "Nunca más te quedes sin stock ni acumules productos que no rotan. Visualiza el estado de tu inventario con indicadores de stock óptimo y alertas de reposición, para que siempre tengas disponible lo que tus clientes buscan y liberes espacio de lo que no se mueve.",
          },
          {
            title: "Estadísticas y análisis de rentabilidad",
            description:
              "Vender mucho no siempre significa ganar mucho. Analiza tu rentabilidad bruta, descubre cuáles son tus productos y categorías más rentables, y entiende cómo cada tipo de egreso impacta en tus ganancias reales. Con esta información, podrás optimizar tu oferta y maximizar tus márgenes.",
          },
          {
            title: "Estadísticas y análisis de ingresos y gastos de caja",
            description:
              "Monitorea la salud financiera de tu caja con total claridad. Analiza el comportamiento diario de ingresos y egresos, observa las tendencias semanales, compara promedios y conoce en detalle a qué conceptos de pago se destinan tus salidas de dinero. Todo lo que necesitas para mantener un flujo de caja equilibrado y predecible.",
          },
        ],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "sys360_encuestas",
        slug: "encuestas-opinion",
        name: "Encuestas de Opinión",
        tagline: "Mide la satisfacción y detecta oportunidades de mejora.",
        description:
          "La opinión de tus clientes es el activo más valioso que tienes para mejorar. Con este módulo, creas encuestas personalizadas que te permiten medir la satisfacción, detectar oportunidades de mejora y tomar decisiones basadas en lo que realmente sienten quienes visitan tu negocio. Escuchar a tus clientes nunca había sido tan fácil ni tan útil.",
        category: "analytics",
        price: {
          amountMonthly: 49,
          amountAnnual: 41,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["sys360_base"],
        features: [
          "Encuestas personalizadas",
          "Avisos automáticos",
          "Reportes y estadísticas",
        ],
        detailedFeatures: [
          {
            title: "Personalización",
            description:
              "Diseña encuestas a tu medida con una amplia variedad de formatos de pregunta: selección única, opción múltiple, confirmación de sí o no, escala de malo a excelente, valoración por estrellas o escala numérica personalizada. Adapta cada encuesta al objetivo que tengas —atención al cliente, calidad del producto, experiencia en tienda— y obtén respuestas precisas y comparables.",
          },
          {
            title: "Avisos automáticos de malas experiencias",
            description:
              "No esperes hasta que un cliente molesto lo publique en redes. Cuando una encuesta refleja una mala experiencia, recibes una notificación inmediata en tu WhatsApp con el detalle de la compra y el colaborador que atendió, para que puedas actuar de inmediato, resolver la situación y convertir una experiencia negativa en una oportunidad de fidelización.",
          },
          {
            title: "Reportes y estadísticas",
            description:
              "Más allá de las respuestas individuales, accede a un panorama completo de lo que piensan tus clientes. Consulta los resultados agrupados por dimensión —atención, producto, local, experiencia general— y toma decisiones de mejora fundamentadas en datos reales, no en suposiciones.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "sys360_tienda_virtual",
        slug: "tienda-virtual",
        name: "Tienda Virtual",
        tagline:
          "Tu negocio disponible 24/7 en el mundo digital (Precio sujeto a evaluación).",
        description:
          "Tu negocio merece estar disponible las 24 horas, los 7 días de la semana, para cualquier cliente en cualquier lugar. Con nuestra tienda virtual desarrollada a medida, llevas tu marca al mundo digital con una experiencia de compra moderna, atractiva y completamente integrada con tu operación diaria. Sin complicaciones técnicas, sin doble gestión: todo conectado desde un solo sistema.",
        category: "other",
        price: {
          amountMonthly: 0,
          amountAnnual: 0,
          currency: "PEN",
          currencySymbol: "S/",
          isContactSales: true,
        },
        compatiblePlanIds: ["sys360_base"],
        features: [
          "Tienda personalizada",
          "Catálogo sincronizado",
          "Carrito interactivo",
          "Pasarela de pago",
        ],
        detailedFeatures: [
          {
            title: "Personalización",
            description:
              "Tu tienda, tu identidad. Diseñamos y desarrollamos una tienda virtual única, adaptada al estilo y las necesidades específicas de tu negocio, con dominio propio y una propuesta visual que refleja lo que tu marca representa.",
          },
          {
            title: "Fácil gestión",
            description:
              "Olvídate de mantener dos catálogos distintos. Tu tienda virtual se alimenta directamente del catálogo de productos que ya usas en tu Punto de venta, por lo que cualquier actualización de precios, stock o descripción se refleja de forma automática en tu tienda en línea.",
          },
          {
            title: "Interactividad",
            description:
              "Ofrece a tus clientes una experiencia de compra completa y sin fricciones. Podrán armar su carrito, elegir entre las tallas y colores disponibles según el stock real en tiempo real, y navegar por tu catálogo con toda la información que necesitan para decidir con confianza.",
          },
          {
            title: "Pasarela de pago",
            description:
              "Tus clientes pagan de forma segura y autónoma directamente desde la tienda. Una vez confirmado el pago, el pedido llega automáticamente a tu Punto de venta para que puedas procesarlo de inmediato. Menos pasos, menos errores, más ventas.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "sys360_atencion_reservas",
        slug: "atencion-reservas",
        name: "Atención y Reservas",
        tagline: "Organiza la agenda de tu equipo y evita cruces de horarios.",
        description:
          "Si tu negocio funciona por citas, turnos o reservas, como campos deportivas o servicios de belleza y spa, este módulo es tu aliado para mantener la agenda siempre organizada y tu equipo siempre preparado. Gestiona el tiempo de tus estaciones de atención con precisión, elimina cruces de horario y garantiza que cada cliente reciba el servicio que merece, exactamente cuando lo espera.",
        category: "other",
        price: {
          amountMonthly: 69,
          amountAnnual: 57,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["sys360_base"],
        features: [
          "Agenda diaria",
          "Pagos anticipados",
          "Recordatorios automáticos",
        ],
        detailedFeatures: [
          {
            title: "Agenda diaria y calendario semanal / mensual",
            description:
              "Visualiza toda tu operación de un vistazo. Gestiona tus reservas en una agenda diaria o en un calendario semanal y mensual, diferenciando de forma clara cuáles tienen pago adelantado registrado y cuáles están pendientes. Todo el orden que necesitas para que ningún turno se pierda ni se duplique.",
          },
          {
            title: "Pagos anticipados",
            description:
              "Asegura la reserva y cuida tu caja. Registra los pagos adelantados de tus clientes, genera el comprobante correspondiente y refleja automáticamente el ingreso en tu caja chica. Así, tu cuadre de dinero siempre estará completo y sin vacíos al final del día.",
          },
          {
            title: "Recordatorios de asistencia",
            description:
              "Reduce las ausencias antes de que ocurran. Envía recordatorios automáticos por WhatsApp o correo electrónico a tus clientes antes de su cita o reserva. Un mensaje a tiempo puede marcar la diferencia entre un turno lleno y un espacio desperdiciado.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "sys360_historia_veterinaria",
        slug: "historia-medica-veterinaria",
        name: "Historia Médica Veterinaria",
        tagline:
          "Centraliza la información clínica y administrativa de tus pacientes.",
        description:
          "Tu clínica veterinaria merece una gestión tan profesional como la atención que brindas. Este módulo centraliza toda la información clínica y administrativa de tus pacientes en un solo lugar, optimizando los procesos internos y elevando la calidad del servicio. Para que tú y tu equipo puedan enfocarse en lo que realmente importa: el bienestar de cada mascota.",
        category: "other",
        price: {
          amountMonthly: 99,
          amountAnnual: 82,
          currency: "PEN",
          currencySymbol: "S/",
        },
        compatiblePlanIds: ["sys360_base"],
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
              "Accede en segundos al perfil completo de cada paciente: datos del propietario, especie, raza e historial de atenciones previas. Mantén toda la información organizada y disponible para cualquier miembro del equipo, reduciendo tiempos de búsqueda y eliminando el desorden del papel.",
          },
          {
            title: "Citas y atenciones",
            description:
              "Lleva el control completo de cada consulta, desde la programación hasta el diagnóstico. Recibe alertas de citas pendientes, envía recordatorios automáticos a los dueños de las mascotas y documenta diagnósticos, tratamientos y observaciones clínicas de forma estructurada y siempre accesible para futuras atenciones.",
          },
          {
            title: "Plan de vacunación",
            description:
              "Protege a tus pacientes con un seguimiento preciso y puntual. Configura planes de vacunación personalizados para cada mascota y activa recordatorios automáticos para que ningún refuerzo quede olvidado. Una gestión preventiva efectiva que fortalece la confianza de los propietarios en tu clínica.",
          },
          {
            title: "Hospitalizaciones",
            description:
              "Cuando una mascota requiere internamiento, cada detalle cuenta. Documenta el estado del paciente en tiempo real durante toda su hospitalización, registra los tratamientos aplicados y construye un historial clínico confiable que garantiza la continuidad de la atención, sin importar quién esté a cargo del turno.",
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
          question: "¿Puedo usar solo el módulo de inventario?",
          answer:
            "No. El Core Empresarial es obligatorio para activar cualquier módulo.",
          sortOrder: 1,
        },
        {
          id: "f2",
          question: "¿Cuánto demora la implementación?",
          answer:
            "Entre 5 y 7 días hábiles con acompañamiento de nuestro equipo.",
          sortOrder: 2,
        },
        {
          id: "f3",
          question: "¿Hay permanencia mínima?",
          answer: "No. Puedes cancelar en cualquier momento sin penalidades.",
          sortOrder: 3,
        },
      ],
    },
    finalCta: {
      headline: "Toma el control total de tu empresa",
      subheadline: "Comienza con el Core y agrega módulos conforme creces.",
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
      trustSignals: [ "Implementación guiada", "Sin permanencia"],
    },
  },
  faq: [
    {
      question: "¿Puedo usar solo el Punto de Venta sin módulos adicionales?",
      answer: "Sí, el plan base incluye POS, Facturación Electrónica y gestión esencial. Los módulos como Inventario, Veterinaria o Reservas son opcionales y se añaden según tus necesidades.",
    },
    {
      question: "¿El módulo de Tienda Virtual se sincroniza con mi stock físico?",
      answer: "Totalmente. Tu tienda virtual se alimenta directamente del catálogo y stock real de tu Punto de Venta, por lo que precios y existencias se actualizan automáticamente en ambos canales.",
    },
    {
      question: "¿Cómo ayuda el módulo de Veterinaria a mi clínica?",
      answer: "Centraliza la historia médica completa (vacunas, citas, hospitalizaciones) y automatiza recordatorios de asistencia por WhatsApp para los propietarios, profesionalizando tu gestión.",
    },
    {
      question: "¿Puedo personalizar mi Carta Digital si tengo múltiples precios?",
      answer: "Sí, el sistema permite manejar múltiples listas de precios y presentaciones de productos, asegurando que tu carta digital refleje la información correcta para tus clientes.",
    },
  ],
};

export default config;

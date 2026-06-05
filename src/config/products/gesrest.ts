import type { ProductFullConfig } from "@/types/product.types";

const config: ProductFullConfig = {
  brand: {
    name: "GesRest",
    logoUrl: "/logos/gesrest.png", // Asegúrate de haber extraído este logo
    faviconUrl: "/logos/gesrest.png",
    colors: {
      primary: "#FF5F57", 
      primaryForeground: "#FFFFFF",
      secondary: "#FFF5F5", // Un fondo muy sutil para alternar si es necesario
      secondaryForeground: "#0F172A", // Texto oscuro
      background: "#FFFDFD", // El fondo clarito general del Figma
      foreground: "#0F172A", // Texto general oscuro
      card: "#FFFFFF", // Tarjetas blancas limpias
      cardForeground: "#0F172A", // Texto oscuro dentro de las tarjetas
      border: "#E2E8F0", // Bordes color coral/rojo como en el Figma
      muted: "#F8FAFC",
      mutedForeground: "#64748B",
    },
  },

  seo: {
    title: "GesRest — Software para restaurantes",
    description: "Gestión completa para tu restaurante: ventas, inventario, facturación y más.",
    canonicalUrl: "https://tusaas.pe/gesrest",
    locale: "es-PE",
  },

  hero: {
    headline: "Construye la solución perfecta para tu negocio",
    subheadline: "Empieza con nuestro plan base y añade solo los módulos que necesitas. Transparente y sin complicaciones.",
    ctaPrimary: { label: "Comenzar ahora", href: "#demo-form", variant: "primary" },
    ctaSecondary: { label: "Solicitar demo", href: "/contacto?producto=gesrest", variant: "outline" },
  },

  product: {
    id: "gesrest",
    slug: "gesrest",
    name: "GesRest",
    tagline: "Software de gestión para restaurantes",
    description: "Centraliza y optimiza toda la operación de tu negocio gastronómico.",
    category: "core",
    isActive: true,
  },

  pricing: {
    billingToggle: {
      defaultCycle: "monthly",
      annualDiscountPercent: 17, 
      annualDiscountLabel: "ahorra con el anual",
    },
    requiredPlanId: "gesrest_base",
    plans: [
      {
        id: "gesrest_base",
        slug: "atencion-local",
        tier: "starter",
        name: "Atención en Local + Facturación Electrónica",
        description: "El corazón operativo de tu restaurante. Este módulo centraliza todo lo que necesitas para brindar una atención impecable, desde que el cliente se sienta hasta que paga su cuenta, integrando además la facturación electrónica para que estés siempre al día con SUNAT sin esfuerzo adicional.",
        isRequired: true,
        requiredPlanNote: "Módulo base obligatorio",
        price: { amountMonthly: 120, amountAnnual: 1200, currency: "PEN", currencySymbol: "S/" },
        features: [
          { id: "cajero", label: "Plataforma para Cajero", value: true },
          { id: "mesero", label: "Plataforma para Mesero (App/Tablet)", value: true },
          { id: "cocina", label: "Plataforma para Cocina (Comandas)", value: true },
          { id: "facturacion", label: "Facturación Electrónica Ilimitada", value: true },
          { id: "inventario", label: "Control de Existencias", value: true },
          { id: "recetas", label: "Producción y Recetas", value: true },
        ],
        detailedFeatures: [
          {
            title: "Plataforma para Cajero",
            description: "El cajero tiene el control total en sus manos. Puede emitir y cobrar estados de cuenta por mesa, gestionar ventas rápidas al estilo cafetería o discoteca, y hacer seguimiento en tiempo real de pedidos para llevar, delivery y app móvil. Las anulaciones, ediciones, descuentos y cortesías requieren clave de aprobación del administrador, garantizando transparencia en cada operación. El cobro es flexible: acepta múltiples métodos de pago incluyendo billeteras digitales, el medio preferido por la mayoría de clientes hoy en día. Además, cuenta con control de caja chica para registrar ingresos y gastos, seguimiento de ventas al crédito con alertas de vencimiento, y un cuadre de caja detallado por turno para que nada quede sin registro.",
          },
          {
            title: "Plataforma para Mesero",
            description: "Olvídate de ir y venir a una estación fija. Tus meseros pueden atender a los clientes directamente desde su celular, tablet o computadora táctil, y emitir el estado de cuenta en mesa de forma autónoma. Más agilidad, menos errores y una experiencia más profesional para el comensal.",
          },
          {
            title: "Plataforma para Cocina",
            description: "La cocina siempre al ritmo del salón. Las comandas se imprimen automáticamente en cocina y bar en cuanto se toma el pedido. El equipo puede seguir el estado de cada pedido y sus tiempos de preparación desde una pantalla interactiva, y recibe un aviso al instante cuando un plato está listo para salir. Coordinación perfecta entre salón y cocina.",
          },
          {
            title: "Pedidos Programados y Cotizaciones",
            description: "Ideal para eventos, celebraciones o clientes corporativos. Gestiona pedidos con anticipación que incluyen un pago adelantado para recoger o entregar cuando el cliente lo necesite. También puedes generar borradores y cotizaciones de ventas para empresas, con la opción de convertirlos automáticamente en atención en mesa cuando llegue el momento.",
          },
          {
            title: "Compras",
            description: "Mantén un historial completo de tus proveedores y observa cómo ha evolucionado el costo de cada producto a lo largo del tiempo. Registra tus documentos de compra vinculándolos a los egresos correspondientes y lleva un seguimiento claro de todas tus cuentas por pagar. Decisiones de compra más inteligentes, respaldadas por datos reales.",
          },
          {
            title: "Control de Existencias",
            description: "Tu inventario, siempre bajo control. Organiza tu carta de productos por categorías, asigna cada plato a su impresora correspondiente (cocina o bar) y configura múltiples precios de venta según la modalidad: salón, mostrador, delivery o app. Gestiona entradas y salidas de almacén y accede al historial completo de movimientos para tener visibilidad total de tus existencias en todo momento.",
          },
          {
            title: "Producción y Recetas",
            description: "Sabe exactamente cuánto te cuesta cada plato. Crea productos compuestos que descuentan automáticamente el stock de sus insumos al momento de la venta. Además, calcula el costo real de cada receta considerando el precio de compra de ingredientes, mano de obra, porcentaje de merma y margen de ganancia deseado. Rentabilidad con precisión, desde la cocina.",
          },
          {
            title: "Facturación Electrónica",
            description: "Cumple con SUNAT sin complicaciones. El sistema envía automáticamente boletas, facturas, anulaciones, notas de crédito y guías de remisión cada vez que se genera una venta o se realiza un cambio. La emisión de comprobantes es ilimitada y, si se anula una venta, el comprobante se anula solo. Además, puedes enviar los comprobantes directamente al cliente por correo o WhatsApp. Sin papeles, sin demoras, sin errores.",
          },
        ],
        cta: { label: "Comenzar ahora", href: "#demo-form", variant: "primary" },
        badge: "Requerido",
        sortOrder: 1,
        trialDays: 14,
      },
    ],
    addons: [
      {
        id: "gesrest_intel",
        slug: "restaurante-inteligente",
        name: "Restaurante Inteligente",
        tagline: "Transforma los datos de tu restaurante en gráficos",
        description: "Tomar buenas decisiones requiere información clara. Este módulo transforma los datos de tu restaurante en gráficos visuales e indicadores clave que te permiten entender qué está funcionando, qué puedes mejorar y hacia dónde dirigir tu negocio. Deja de operar a ciegas y empieza a crecer con estrategia.",
        category: "analytics",
        price: { amountMonthly: 60, amountAnnual: 600, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: [
          "Estadísticas de ventas",
          "Análisis de inventario",
          "Análisis de rentabilidad",
          "Estadísticas de tiempos de cocina",
        ],
        detailedFeatures: [
          {
            title: "Estadísticas y Análisis de Ventas",
            description: "Conoce a fondo el comportamiento de tus ventas: ingreso promedio por persona y por transacción, tiempo promedio en mesa, productos y categorías más vendidos, comparativa entre el mes anterior y el actual, ventas por horario y por tipo de comprobante. Información que te dice cuándo vendes más, qué venden mejor y cómo mejorar tu operación día a día.",
          },
          {
            title: "Estadísticas y Análisis de Inventario",
            description: "Evita quiebres de stock y excesos innecesarios. Este apartado te indica cuál es el nivel óptimo para cada producto y qué necesitas reponer antes de que sea tarde. Gestión de inventario basada en datos, no en suposiciones.",
          },
          {
            title: "Estadísticas y Análisis de Rentabilidad",
            description: "Descubre cuánto ganas realmente. Analiza la rentabilidad bruta de tu negocio, identifica qué tipo de egreso impacta más tus márgenes y compara la rentabilidad por categoría y por producto. Así sabes qué conservar en tu carta, qué ajustar y qué retirar.",
          },
          {
            title: "Estadísticas y Análisis de Ingresos y Gastos de Caja",
            description: "Visualiza el flujo de dinero de tu negocio con un análisis diario, el comportamiento a lo largo de las semanas, los promedios diarios y mensuales, los egresos por concepto de pago y la participación de cada rubro en el mes. Transparencia financiera al alcance de un vistazo.",
          },
          {
            title: "Estadísticas y Análisis de Tiempos de Cocina",
            description: "Mide la eficiencia de tu cocina con datos concretos. Evalúa la calidad de los platos, revisa los pedidos aceptados y rechazados, y conoce el tiempo promedio de preparación por producto. Una herramienta poderosa para mejorar la velocidad del servicio y la satisfacción del cliente.",
          },
        ],
        isAvailable: true,
        badge: "Más solicitado",
      },
      {
        id: "gesrest_carta",
        slug: "carta-digital",
        name: "Carta Digital",
        tagline: "Ofrece una carta digital atractiva, actualizada y accesible desde cualquier celular.",
        description: "Moderniza la experiencia de tus clientes desde el primer contacto. Olvídate de los menús impresos desgastados o los PDFs difíciles de navegar, y ofrece una carta digital atractiva, actualizada y accesible desde cualquier celular. Una experiencia que sorprende antes de que llegue el primer plato.",
        category: "other",
        price: { amountMonthly: 20, amountAnnual: 200, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: [
          "Código QR por mesa",
          "Catálogo sincronizado",
          "Carrito de compra interactivo",
          "Pedidos vía WhatsApp",
        ],
        detailedFeatures: [
          {
            title: "Código QR",
            description: "Tus clientes solo tienen que escanear el código QR de su mesa o ingresar al enlace compartido para explorar tu carta completa al instante. Sin descargas, sin complicaciones.",
          },
          {
            title: "Personalización",
            description: "Tu carta digital se construye directamente desde el listado de productos que ya usas en el sistema para comandar. No necesitas cargar nada dos veces: lo que está en tu sistema, aparece en tu carta, organizado por categorías y listo para mostrarse al mundo.",
          },
          {
            title: "Interactividad",
            description: "Los clientes pueden armar su propio carrito de compra seleccionando productos, eligiendo opciones adicionales, complementos, y añadiendo notas personalizadas. Una experiencia de pedido intuitiva que reduce malentendidos y agiliza la atención.",
          },
          {
            title: "Comunicación con el Cliente",
            description: "Una vez armado el pedido, el sistema genera automáticamente un mensaje de WhatsApp para coordinar el pago con el cliente de forma rápida y directa. Tecnología que acerca a las personas.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "gesrest_encuesta",
        slug: "encuesta-opinion",
        name: "Encuesta de Opinión",
        tagline: "Mide la calidad de tu servicio y recibe avisos automáticos de malas experiencias.",
        description: "La opinión de tus clientes es tu mejor brújula. Este módulo te permite crear encuestas personalizadas para medir la calidad de tu servicio, identificar oportunidades de mejora y entender qué es lo que más valoran quienes visitan tu restaurante. Escucha activa que se traduce en decisiones concretas.",
        category: "analytics",
        price: { amountMonthly: 40, amountAnnual: 400, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: [
          "Encuestas personalizadas",
          "Alertas en tiempo real",
          "Reportes y estadísticas",
        ],
        detailedFeatures: [
          {
            title: "Personalización",
            description: "Diseña encuestas a tu medida con distintos tipos de preguntas: selección de opción única, opción múltiple, confirmación de sí o no, escala de valoración (malo, bueno o excelente), calificación por estrellas o una escala numérica personalizada. Flexibilidad total para capturar exactamente lo que quieres saber.",
          },
          {
            title: "Avisos Automáticos de Malas Experiencias",
            description: "Cuando un cliente tiene una mala experiencia, cada segundo cuenta. El sistema te notifica de inmediato por WhatsApp cada vez que una encuesta refleja insatisfacción, indicándote el pedido involucrado y el responsable a cargo de esa mesa. Reacciona a tiempo, recupera la confianza y convierte una mala experiencia en una oportunidad de fidelización.",
          },
          {
            title: "Reportes y Estadísticas",
            description: "Accede a un resumen claro y visual de lo que opinan tus clientes sobre la comida, el ambiente, la atención y más. Tendencias, puntos fuertes y áreas de mejora en un solo lugar para que tomes acción con información sólida.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "gesrest_reservas",
        slug: "reservas",
        name: "Reservas",
        tagline: "Control total de tus mesas y salones en tiempo real.",
        description: "Gestiona tus reservas con la misma precisión con la que preparas tus platos. Este módulo te da el control total de tus mesas y salones en tiempo real, permitiéndote organizar cada reserva, anticipar la demanda y garantizar que cada cliente sea recibido con todo listo para él.",
        category: "other",
        price: { amountMonthly: 30, amountAnnual: 300, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: [
          "Agenda diaria/mensual",
          "Gestión de pagos anticipados",
          "Recordatorios por WhatsApp/correo",
        ],
        detailedFeatures: [
          {
            title: "Agenda Diaria y Calendario Semanal / Mensual",
            description: "Visualiza todas tus reservas en una agenda clara y ordenada, tanto a nivel diario como en vista semanal o mensual. Las reservas con pagos anticipados se destacan visualmente para que sepas, de un vistazo, qué está confirmado y qué aún está pendiente.",
          },
          {
            title: "Pagos Anticipados",
            description: "Registra los pagos anticipados de tus reservas, genera el comprobante correspondiente si es necesario y refleja ese ingreso directamente en tu caja chica. Sin vacíos en tu cuadre de dinero y con total trazabilidad de cada operación.",
          },
          {
            title: "Recordatorios de Asistencia",
            description: "Reduce las ausencias de forma simple y efectiva. Envía recordatorios automáticos a tus clientes por WhatsApp o correo electrónico para asegurarte de que no olviden su reserva. Menos mesas vacías, mejor planificación y una relación más cercana con quien te elige.",
          },
        ],
        isAvailable: true,
      },
      {
        id: "gesrest_eventos",
        slug: "eventos",
        name: "Eventos y Entradas",
        tagline: "Organiza, promueve y controla cada evento con generación de entradas y código QR.",
        description: "Lleva tus eventos al siguiente nivel. Este módulo te da las herramientas para organizar, promover y controlar cada evento con profesionalismo: desde la generación de entradas hasta el control de asistencia en puerta, todo en un solo sistema.",
        category: "other",
        price: { amountMonthly: 50, amountAnnual: 500, currency: "PEN", currencySymbol: "S/" },
        compatiblePlanIds: ["gesrest_base"],
        features: [
          "Control de promotores",
          "Entradas con Código QR",
          "Control de asistencia",
        ],
        detailedFeatures: [
          {
            title: "Eventos Personalizados",
            description: "Crea eventos con todos sus detalles: nombre, dirección, ubicación en Google Maps, fecha y hora de vencimiento. Cada evento tiene su propia identidad dentro del sistema para que puedas gestionarlos de forma independiente y ordenada.",
          },
          {
            title: "Control de Promotores",
            description: "Asigna a cada promotor un enlace único a través del cual los asistentes podrán generar sus entradas, y define cuántas puede distribuir cada uno. De esta manera tienes visibilidad total sobre el alcance de cada promotor, mantienes el control de la capacidad del evento y garantizas una distribución organizada desde el inicio.",
          },
          {
            title: "Código QR y Recopilación de Datos",
            description: "Cada asistente genera su propia entrada a través del enlace de su promotor y completa un breve registro con datos como número de celular, correo electrónico y fecha de nacimiento, información que puedes aprovechar para futuras campañas y promociones. Al finalizar, el asistente recibe su código QR automáticamente en su correo.",
          },
          {
            title: "Control de Asistencia",
            description: "En la puerta, el control es total. Valida el ingreso de cada asistente mediante la lectura de su código QR, evita accesos con entradas duplicadas o no autorizadas y eleva la seguridad de tu evento. Una experiencia más fluida para los asistentes y más tranquilidad para ti.",
          },
          {
            title: "Reportes y Estadísticas",
            description: "Al finalizar el evento, accede a un informe completo: cuántas entradas generó cada promotor, cuántas personas asistieron efectivamente, qué porcentaje no se presentó y el perfil demográfico de tus asistentes según sus fechas de nacimiento. Datos que te ayudan a planificar mejor el próximo evento.",
          },
        ],
        isAvailable: true,
      },
    ],
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { id: "f1", question: "¿Puedo contratar solo la Carta Digital?",
          answer: "No, el plan 'Atención en Local + Facturación Electrónica' es el módulo base necesario para agregar funcionalidades adicionales.", sortOrder: 1 },
        { id: "f2", question: "¿Hay límite en la emisión de comprobantes electrónicos?",
          answer: "No, la emisión de boletas y facturas electrónicas es ilimitada.", sortOrder: 2 },
        { id: "f3", question: "¿Puedo cambiar de plan mensual a anual?",
          answer: "Sí, puedes actualizar tu ciclo de facturación en cualquier momento.", sortOrder: 3 },
      ],
    },
    finalCta: {
      headline: "¿Listo para optimizar tu restaurante?",
      subheadline: "Únete a +200 restaurantes que ya usan GesRest para multiplicar sus beneficios.",
      backgroundVariant: "dark",
      ctaPrimary: { label: "Comenzar ahora", href: "#demo-form", variant: "primary" },
      ctaSecondary: { label: "Agendar demo", href: "/contacto?producto=gesrest", variant: "outline" },
      trustSignals: ["Facturación ilimitada", "Soporte especializado", "Sin contratos forzosos"],
    },
  },
  faq: [
    {
      question: "¿La Facturación Electrónica está validada por SUNAT?",
      answer: "Sí, el sistema emite boletas, facturas y notas de crédito con envío ilimitado y automático a SUNAT, cumpliendo con toda la normativa vigente.",
    },
    {
      question: "¿Necesito internet constante para usar el Punto de Venta?",
      answer: "Para la venta fluida en caja no es indispensable internet constante, pero sí se requiere conexión para sincronizar ventas, enviar comprobantes a SUNAT y para el funcionamiento de módulos online como la Carta Digital.",
    },
    {
      question: "¿Cómo funciona la Carta Digital con WhatsApp?",
      answer: "Tus clientes escanean un QR para ver la carta, arman su pedido interactivo y, al finalizar, el sistema genera automáticamente un mensaje de WhatsApp para coordinar el pago directo contigo, sin comisiones intermedias.",
    },
    {
      question: "¿Qué sucede si un cliente tiene una mala experiencia en la Encuesta?",
      answer: "El sistema te notifica de inmediato por WhatsApp indicándote el pedido y el responsable de la mesa para que puedas reaccionar a tiempo y fidelizar al cliente.",
    },
  ],
};

export default config;

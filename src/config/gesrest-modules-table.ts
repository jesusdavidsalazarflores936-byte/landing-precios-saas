export interface GesrestTableFeature {
  title: string;
  description: string;
  // Texto ampliado del mismo apartado; el título se comparte entre tabla y modal.
  detail?: string;
}

export interface GesrestModuleDetails {
  headline: string;
  description: string;
}

export interface GesrestTableModule {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  priceLabel?: string;
  features: GesrestTableFeature[];
  details?: GesrestModuleDetails;
  featured?: boolean;
}

export interface GesrestModulesTableConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  currencySymbol: string;
  modules: GesrestTableModule[];
  installation: {
    label: string;
    price: number;
    annualNote: string;
  };
  commercialNotes: Array<{
    title: string;
    description: string;
  }>;
}

// Texto de los modales adaptado de los planes originales de GesRest.
// Fuente: products/gesrest.ts y /api/products/gesrest (Autoservicio y Tienda Virtual).
// Contrastado con "Gesrest - Módulos - Sitio web.pdf".
// Cada feature comparte su título: description resume y detail amplía, sin duplicar listas.
const gesrestModulesTable: GesrestModulesTableConfig = {
  eyebrow: "Una plataforma para todo tu restaurante",
  headline: "Elige los módulos que tu negocio necesita",
  subheadline: "Activa solo las herramientas que vas a usar. Todos los módulos se integran en una misma operación.",
  currencySymbol: "S/",
  modules: [
    {
      id: "atencion-local",
      details: {
        headline: "8 herramientas conectadas en una sola operación",
        description: "Centraliza la atención de tu restaurante desde que el cliente se sienta hasta que paga su cuenta. Conecta salón, caja, cocina, compras e inventario con la facturación electrónica y el envío de comprobantes a SUNAT."
      },
      name: "Atención en Local + Facturación Electrónica",
      tagline: "El corazón operativo de tu restaurante.",
      priceMonthly: 120,
      priceAnnual: 1200,
      featured: true,
      features: [
        {
          title: "Plataforma para cajero",
          description: "Emisión y cobro de estados de cuenta, registro de gastos, cuentas por cobrar y cuadre de caja.",
          detail: "Emite y cobra estados de cuenta por mesa, gestiona ventas rápidas y consulta en tiempo real los pedidos para llevar, delivery y app móvil. Las anulaciones, ediciones, descuentos y cortesías requieren aprobación del administrador. Acepta distintos medios de pago, incluidas billeteras digitales. Registra ingresos y gastos de caja chica, controla las ventas al crédito con alertas de vencimiento y realiza el cuadre de caja por turno."
        },
        {
          title: "Plataforma para mesero",
          description: "Atención de clientes en mesa con envío del pedido directo a cocina.",
          detail: "Atiende a los clientes desde un celular, tablet o computadora táctil, sin depender de una estación fija. El mesero puede registrar el pedido y emitir el estado de cuenta directamente en mesa, para agilizar el servicio y reducir los desplazamientos durante la atención."
        },
        {
          title: "Plataforma para cocina",
          description: "Impresión automática de comandas y seguimiento de pedidos y tiempos de preparación.",
          detail: "Las comandas se imprimen automáticamente en cocina y bar al tomar el pedido. Desde una pantalla interactiva, el equipo consulta el estado de cada orden y sus tiempos de preparación, y recibe un aviso cuando un plato está listo para salir. Así se coordina el trabajo entre el salón y la cocina."
        },
        {
          title: "Pedidos y proformas",
          description: "Pedidos anticipados para recojo o entrega, más borradores y cotizaciones para empresas.",
          detail: "Organiza pedidos anticipados para recojo o entrega y registra los pagos adelantados, por ejemplo para eventos o celebraciones. También puedes preparar borradores y cotizaciones para empresas y convertirlos en una atención en mesa cuando llegue el momento."
        },
        {
          title: "Compras",
          description: "Registro de proveedores, documentos de compra y seguimiento de cuentas por pagar.",
          detail: "Mantén el historial de tus proveedores y revisa cómo cambia el costo de cada producto con el tiempo. Registra los documentos de compra, vincúlalos con sus egresos y lleva el seguimiento de las cuentas por pagar para organizar tus compras y compromisos de pago."
        },
        {
          title: "Control de inventario",
          description: "Entrada y salida de productos de almacén o productos de tipo ingrediente.",
          detail: "Organiza los productos por categorías, asigna los platos a su impresora de cocina o bar y configura precios según el canal: salón, mostrador, delivery o app. Registra entradas y salidas de almacén y consulta el historial de movimientos para conocer tus existencias."
        },
        {
          title: "Producción y recetas",
          description: "Productos compuestos con descuento automático de stock de insumos y costeo de recetas.",
          detail: "Crea productos compuestos para descontar automáticamente los insumos del stock al vender cada plato. Calcula el costo de las recetas considerando el precio de los ingredientes, la mano de obra, la merma y el margen de ganancia deseado."
        },
        {
          title: "Facturación electrónica",
          description: "Envío automático de boletas, facturas, anulaciones, notas de crédito y guías hacia SUNAT.",
          detail: "Emite comprobantes sin límite y envía automáticamente a SUNAT boletas, facturas, anulaciones, notas de crédito y guías de remisión. Al anular una venta, se gestiona también la anulación del comprobante. Puedes compartir los documentos con tus clientes por correo electrónico o WhatsApp."
        }
      ]
    },
    {
      id: "restaurante-inteligente",
      details: {
        headline: "Conoce cómo marcha tu restaurante",
        description: "Convierte los datos de tu operación en gráficos e indicadores para entender tus ventas, controlar el inventario y evaluar la rentabilidad. Consulta la información que necesitas para decidir qué mejorar en tu negocio."
      },
      name: "Restaurante Inteligente",
      tagline: "Decide con datos reales, no con suposiciones.",
      priceMonthly: 60,
      priceAnnual: 600,
      features: [
        {
          title: "Tendencias de ventas",
          description: "Analiza ventas y descubre tus platos más pedidos.",
          detail: "Consulta el ingreso promedio por persona y por transacción, el tiempo promedio en mesa y los productos y categorías más vendidos. Compara el mes actual con el anterior y revisa las ventas por horario y tipo de comprobante para identificar tendencias."
        },
        {
          title: "Rentabilidad",
          description: "Mide la rentabilidad por producto y el control de caja.",
          detail: "Analiza la rentabilidad bruta del negocio y los egresos que más afectan tus márgenes. Compara los resultados por producto y categoría para decidir qué mantener, ajustar o retirar de tu carta.\n\nVisualiza el movimiento del dinero por día y semana, junto con los promedios diarios y mensuales. Revisa los egresos por concepto de pago y la participación de cada rubro en el mes para entender cómo se distribuyen tus gastos."
        },
        {
          title: "Operación",
          description: "Revisa rotación de almacén y tiempos de cocina.",
          detail: "Revisa los niveles óptimos de los productos e identifica qué necesitas reponer. Esta información te ayuda a planificar las compras y a evitar tanto faltantes como excesos de existencias.\n\nConsulta los pedidos aceptados y rechazados, la calidad de los platos y el tiempo promedio de preparación de cada producto. Usa estos indicadores para revisar la eficiencia de tu cocina y mejorar los tiempos de atención."
        }
      ]
    },
    {
      id: "carta-digital",
      details: {
        headline: "Tu carta al alcance de cada cliente",
        description: "Ofrece una carta digital que tus clientes puedan consultar desde su celular. Aprovecha los productos que ya tienes en GesRest para presentar tu oferta, facilitar la selección del pedido y coordinar la compra por WhatsApp."
      },
      name: "Carta Digital",
      tagline: "Tu carta siempre actualizada, sin imprimir.",
      priceMonthly: 20,
      priceAnnual: 200,
      features: [
        {
          title: "Enlace y código QR",
          description: "Acceso digital para cada mesa.",
          detail: "El cliente puede escanear el código QR de su mesa o abrir el enlace que compartas para explorar la carta completa. No necesita descargar una aplicación para consultar tus productos."
        },
        {
          title: "Carta personalizada",
          description: "Tu carta organizada a partir de los productos de GesRest.",
          detail: "La carta digital se construye con el listado de productos que utilizas para comandar en GesRest. Los productos se presentan por categorías, sin tener que mantener un segundo listado separado."
        },
        {
          title: "Pedidos",
          description: "Carrito de compra y coordinación por WhatsApp.",
          detail: "Tus clientes pueden seleccionar productos, agregar complementos y opciones adicionales, e incluir notas en su carrito. De esta manera expresan sus preferencias al preparar el pedido.\n\nCuando el cliente termina de armar su pedido, se genera un mensaje de WhatsApp para coordinar el pago directamente contigo. Mantienes la comunicación con el cliente durante la compra."
        }
      ]
    },
    {
      id: "encuesta-opinion",
      details: {
        headline: "Escucha a tus clientes y actúa a tiempo",
        description: "Crea encuestas para conocer cómo fue la experiencia en tu restaurante. Identifica qué valoran tus clientes, detecta problemas en el servicio y revisa los resultados para decidir dónde mejorar."
      },
      name: "Encuesta de Opinión",
      tagline: "Escucha a tus clientes y actúa a tiempo.",
      priceMonthly: 40,
      priceAnnual: 400,
      features: [
        {
          title: "Encuestas personalizadas",
          description: "Define lo que quieres medir en cada encuesta.",
          detail: "Combina preguntas de opción única o múltiple, respuestas de sí o no, escalas de valoración, estrellas y escalas numéricas personalizadas. Elige el formato que mejor te ayude a evaluar la comida, el ambiente o la atención."
        },
        {
          title: "Calificación del servicio",
          description: "Recibe alertas cuando un cliente tenga una mala experiencia.",
          detail: "Recibe una notificación por WhatsApp cuando una encuesta refleje insatisfacción. El aviso identifica el pedido y al responsable de la mesa para que puedas revisar lo ocurrido y atender al cliente a tiempo."
        },
        {
          title: "Resultados claros",
          description: "Información lista para revisar y actuar.",
          detail: "Consulta un resumen visual de las opiniones sobre la comida, el ambiente, la atención y otros aspectos de tu encuesta. Reconoce tendencias, puntos fuertes y oportunidades de mejora a partir de las respuestas."
        }
      ]
    },
    {
      id: "reservas",
      details: {
        headline: "Organiza cada reserva con anticipación",
        description: "Gestiona las reservas de tus mesas y salones para anticipar la ocupación y preparar la atención de cada cliente. Reúne la agenda, los pagos adelantados y los recordatorios en una misma operación."
      },
      name: "Reservas",
      tagline: "Ordena tu ocupación y evita mesas vacías.",
      priceMonthly: 30,
      priceAnnual: 300,
      features: [
        {
          title: "Agenda de reservas",
          description: "Organiza tus reservas en un calendario diario, semanal o mensual.",
          detail: "Consulta tus reservas en una agenda diaria o en el calendario semanal y mensual. Las reservas con pagos anticipados se destacan visualmente para facilitar la revisión de lo confirmado y lo pendiente."
        },
        {
          title: "Pagos anticipados",
          description: "Registra adelantos y vincúlalos con tu caja.",
          detail: "Registra los adelantos de cada reserva, genera el comprobante correspondiente cuando sea necesario y refleja el ingreso en caja chica. Así puedes seguir cada pago y mantenerlo dentro del cuadre de dinero."
        },
        {
          title: "Recordatorios de asistencia",
          description: "Envía avisos por WhatsApp o correo antes de la reserva.",
          detail: "Envía recordatorios automáticos por WhatsApp o correo electrónico para que tus clientes tengan presente su reserva. Esta comunicación ayuda a reducir ausencias y a organizar mejor la atención."
        }
      ]
    },
    {
      id: "eventos-entradas",
      details: {
        headline: "Controla tu evento de principio a fin",
        description: "Organiza los datos de cada evento, distribuye entradas mediante tus promotores y valida el ingreso de los asistentes. Al finalizar, revisa los resultados para preparar tus próximos eventos."
      },
      name: "Eventos y Entradas",
      tagline: "Convierte tu local en un espacio rentable.",
      priceMonthly: 50,
      priceAnnual: 500,
      features: [
        {
          title: "Entradas en línea",
          description: "Configura eventos y genera entradas con código QR.",
          detail: "Configura el nombre del evento, la dirección, la ubicación en Google Maps y la fecha y hora de vencimiento. Administra cada evento de forma independiente y mantén sus datos organizados.\n\nEl asistente genera su entrada desde el enlace del promotor y registra datos como celular, correo y fecha de nacimiento. Al completar el proceso recibe automáticamente su código QR por correo electrónico."
        },
        {
          title: "Aforo y accesos",
          description: "Controla el ingreso mediante código QR.",
          detail: "Asigna a cada promotor un enlace único y define cuántas entradas puede distribuir. Consulta su alcance y organiza la distribución según la capacidad de tu evento.\n\nLee el código QR en el ingreso para validar la entrada de cada asistente y evitar accesos con entradas duplicadas o no autorizadas. Mantén un registro de quienes ingresaron al evento."
        },
        {
          title: "Asistencia",
          description: "Registra y analiza la asistencia a cada evento.",
          detail: "Consulta las entradas generadas por promotor, la asistencia efectiva y el porcentaje de personas que no acudieron. También puedes revisar el perfil de los asistentes según sus fechas de nacimiento."
        }
      ]
    },
    {
      id: "autoservicio",
      details: {
        headline: "Tus clientes piden y pagan por su cuenta",
        description: "Permite que cada cliente realice su pedido y pago desde una terminal en tu local o desde su celular mediante un enlace web. Facilita la compra autónoma y reduce la carga de caja en los momentos de mayor demanda."
      },
      name: "Autoservicio",
      tagline: "Menos cola en caja y más rotación.",
      priceMonthly: 40,
      priceAnnual: 400,
      features: [
        {
          title: "Pedido y pago autónomo",
          description: "El cliente pide y paga desde una terminal o su celular.",
          detail: "Ofrece terminales de autoservicio en tu establecimiento o comparte un enlace para que tus clientes compren desde su celular. Puedes atender pedidos dentro y fuera del local desde la misma plataforma.\n\nMuestra banners promocionales y permite que el cliente recorra la carta y agregue productos según el stock en tiempo real. Puede elegir complementos, escribir notas y solicitar su comprobante electrónico antes de finalizar el pedido.\n\nEl cliente completa el pago mediante la pasarela integrada, con tarjeta, Yape o Plin. El pedido y el pago forman parte de una misma experiencia de compra autónoma."
        },
        {
          title: "Validación y despacho",
          description: "Valida el código QR del pedido al entregarlo.",
          detail: "El cliente recibe el código QR de su pedido por correo y WhatsApp. En las terminales físicas, el pedido también se imprime en la impresora térmica conectada. Valida el código en la zona de entrega para evitar confusiones durante el despacho."
        },
        {
          title: "Carta y gestión",
          description: "Sincroniza productos y configura precios por canal.",
          detail: "Selecciona los productos y categorías disponibles en autoservicio a partir de la carta de Atención en Local. Los cambios de stock y descripción se reflejan automáticamente, y puedes definir precios distintos para este canal y la atención presencial."
        }
      ]
    },
    {
      id: "tienda-virtual",
      details: {
        headline: "Un canal de venta con tu propia marca",
        description: "Lleva tu restaurante a una tienda virtual desarrollada a medida y conectada con tu operación. Presenta tu catálogo, recibe compras en línea y gestiona los pedidos junto con tu atención habitual."
      },
      name: "Tienda Virtual",
      tagline: "Tu propio canal de venta, con tu marca.",
      priceMonthly: null,
      priceAnnual: null,
      priceLabel: "Sujeto a evaluación",
      features: [
        {
          title: "Catálogo en línea",
          description: "Tus clientes consultan productos y arman su carrito.",
          detail: "Tus clientes pueden recorrer el catálogo con la información de los productos y armar su carrito según el stock disponible en tiempo real. La compra se realiza desde el canal propio de tu restaurante."
        },
        {
          title: "Tienda con tu marca",
          description: "Diseño a medida y dominio propio para tu restaurante.",
          detail: "La tienda se adapta al estilo y las necesidades de tu negocio, con dominio propio y una propuesta visual que representa tu marca. El desarrollo y su precio están sujetos a evaluación."
        },
        {
          title: "Integración con Gesrest",
          description: "Sincroniza el catálogo y recibe pedidos tras confirmar el pago.",
          detail: "Utiliza los productos de Atención en Local para no mantener dos cartas distintas. Los cambios de stock y descripción se reflejan automáticamente en la tienda y puedes configurar precios diferenciados para el canal virtual.\n\nEl cliente paga directamente desde la tienda mediante la pasarela de pago. Una vez confirmado, el pedido llega automáticamente a Delivery/Mostrador y a cocina para comenzar su preparación."
        }
      ]
    }
  ],
  installation: {
    label: "Instalación y configuración",
    price: 100,
    annualNote: "Sin costo al contratar el pago anual"
  },
  commercialNotes: [
    {
      title: "Precios con IGV",
      description: "Sin cargos ocultos."
    },
    {
      title: "Transacciones ilimitadas",
      description: "En todos los módulos."
    },
    {
      title: "Módulos independientes",
      description: "Elige según tu necesidad."
    },
    {
      title: "Soporte 24/7",
      description: "Acompañamiento especializado."
    }
  ]
};

export default gesrestModulesTable;

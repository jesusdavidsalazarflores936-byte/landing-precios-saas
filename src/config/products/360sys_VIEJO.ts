const pricing360sys = {
  id: "360sys",
  name: "360sys",
  description: "Ecosistema de gestión integral para tu negocio.",
  // Si tu sistema requiere que el Módulo 1 sea el "Plan Base", aquí está configurado como tal.
  plans: [
    {
      id: "pos-facturacion",
      name: "Punto de venta + Facturación electrónica",
      description: "El corazón operativo de tu negocio. Desde el primer saludo al cliente hasta el cierre de caja, este módulo centraliza todo lo que necesitas para vender más rápido, cobrar con precisión y cumplir con SUNAT sin complicaciones.",
      price: {
        monthly: 120,
        yearly: 1200,
      },
      features: [
        {
          name: "Plataforma para cajero",
          description: "Experiencia de venta fluida. Gestiona ventas minoristas, mayoristas, promociones y créditos. Conversión automática de unidades. Aprobación por clave para anulaciones o descuentos. Acepta efectivo, tarjetas, Yape o Plin. Control de caja chica y cuadre de turnos."
        },
        {
          name: "Créditos",
          description: "Vende al crédito sin perder el control. Seguimiento en tiempo real de cuentas por cobrar y alertas de vencimiento."
        },
        {
          name: "Cotizaciones",
          description: "Genera cotizaciones detalladas y conviértelas en ventas con un solo clic."
        },
        {
          name: "Pedidos",
          description: "Organiza pedidos anticipados para recojo, delivery o envíos nacionales con visibilidad completa del estado."
        },
        {
          name: "Compras",
          description: "Gestiona proveedores, registra compras, vincula egresos y lleva el historial de costos por producto. Control de cuentas por pagar."
        },
        {
          name: "Control de existencias",
          description: "Catálogo por categorías y marcas. Múltiples precios de venta. Entradas, salidas, trazabilidad, y seguimiento por lote y vencimiento."
        },
        {
          name: "Facturación electrónica",
          description: "Emite boletas, facturas, notas de crédito y guías. Envío ilimitado a SUNAT. Envío automático de comprobantes al cliente por correo o WhatsApp."
        }
      ],
      ctaText: "Comenzar ahora",
      ctaHref: "/contacto"
    }
  ],
  // Aquí están los módulos adicionales
  modules: [
    {
      id: "comercio-inteligente",
      name: "Comercio inteligente",
      description: "Transforma los datos de tu negocio en gráficos, indicadores y análisis accionables para tomar mejores decisiones.",
      price: {
        monthly: 50,
        yearly: 500,
      },
      features: [
        {
          name: "Estadísticas y análisis de ventas",
          description: "Conoce ingresos totales, picos de actividad, categorías estrella y compara rendimientos mensuales."
        },
        {
          name: "Estadísticas de inventario",
          description: "Indicadores de stock óptimo y alertas de reposición para no quedarte sin mercadería."
        },
        {
          name: "Estadísticas de rentabilidad",
          description: "Analiza tu rentabilidad bruta, descubre los productos más rentables y entiende el impacto de tus egresos."
        },
        {
          name: "Ingresos y gastos de caja",
          description: "Monitorea la salud de tu caja. Analiza comportamiento diario, tendencias semanales y desglose de salidas de dinero."
        }
      ]
    },
    {
      id: "encuestas-opinion",
      name: "Encuestas de opinión",
      description: "Crea encuestas personalizadas para medir la satisfacción, detectar oportunidades y tomar decisiones basadas en tus clientes.",
      price: {
        monthly: 20,
        yearly: 200,
      },
      features: [
        {
          name: "Personalización",
          description: "Diseña encuestas con selección única, opción múltiple, estrellas o escala numérica adaptadas a tu objetivo."
        },
        {
          name: "Avisos automáticos",
          description: "Recibe notificaciones inmediatas en WhatsApp ante una mala experiencia para actuar y fidelizar al instante."
        },
        {
          name: "Reportes y estadísticas",
          description: "Resultados agrupados por atención, producto, local o experiencia general para decisiones fundamentadas."
        }
      ]
    },
    {
      id: "tienda-virtual",
      name: "Tienda virtual",
      description: "Lleva tu marca al mundo digital con una experiencia de compra 24/7 conectada a tu operación diaria.",
      price: {
        customText: "Sujeto a evaluación"
      },
      features: [
        {
          name: "Personalización",
          description: "Tienda a medida con dominio propio y propuesta visual adaptada a la identidad de tu marca."
        },
        {
          name: "Fácil gestión",
          description: "Se alimenta de tu catálogo de Punto de venta. Precios, stock y descripciones se sincronizan automáticamente."
        },
        {
          name: "Interactividad",
          description: "Los clientes arman su carrito, eligen variables (tallas, colores) basados en stock real y navegan sin fricciones."
        },
        {
          name: "Pasarela de pago",
          description: "Pagos seguros. Los pedidos llegan automáticamente a tu Punto de venta para procesamiento inmediato."
        }
      ]
    },
    {
      id: "atencion-reservas",
      name: "Atención y reservas",
      description: "Ideal para citas y turnos. Gestiona el tiempo de tus estaciones con precisión y elimina cruces de horario.",
      price: {
        monthly: 60,
        yearly: 600,
      },
      features: [
        {
          name: "Agenda y calendario",
          description: "Visualiza reservas en agenda diaria o calendario mensual. Diferencia citas pagadas de pendientes."
        },
        {
          name: "Pagos anticipados",
          description: "Registra adelantos, genera comprobantes y refleja el ingreso en tu caja chica de forma automática."
        },
        {
          name: "Recordatorios de asistencia",
          description: "Envía recordatorios automáticos por WhatsApp o correo antes de la cita para reducir ausencias."
        }
      ]
    },
    {
      id: "historia-medica",
      name: "Historia médica veterinaria",
      description: "Centraliza la información clínica y administrativa de tus pacientes para optimizar los procesos de tu clínica.",
      price: {
        monthly: 50,
        yearly: 500,
      },
      features: [
        {
          name: "Gestión administrativa",
          description: "Perfil completo por paciente (datos, especie, raza, historial). Elimina el desorden del papel."
        },
        {
          name: "Citas y atenciones",
          description: "Control de consultas, alertas de citas, recordatorios automáticos y documentación de diagnósticos y tratamientos."
        },
        {
          name: "Plan de vacunación",
          description: "Configura planes personalizados y activa recordatorios automáticos para los refuerzos."
        },
        {
          name: "Hospitalizaciones",
          description: "Documenta el estado en tiempo real, tratamientos aplicados e historial clínico para continuidad de atención en cambios de turno."
        }
      ]
    }
  ]
};
export default pricing360sys;

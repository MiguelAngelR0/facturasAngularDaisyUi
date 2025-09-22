import { PlanPrecioCard } from "../interfaces/preciosCard.interface";


//Mock para card de precios de los planes
export const PLANES_PRECIO_CARD: PlanPrecioCard[] = [
  {
    id: 'autonomo',
    titulo: 'Plan Autónomos',
    descripcion: 'Perfecto para autónomos que necesitan facturar',
    popular: false,
    caracteristicas: [
      'Usuarios ilimitados',
      'Cumple con Verifactu',
      'Facturación electrónica',
      'Soporte prioritario'
    ],
    icono: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    iconoPath: ""
  },
  {
    id: 'gestoria',
    titulo: 'Plan Gestorias',
    descripcion: 'Solución completa para empresas en crecimiento',
    popular: true,
    caracteristicas: [
      'Usuarios ilimitados',
      'Cumple con Verifactu',
      'Integraciones avanzadas',
      'Soporte dedicado'
    ],
    icono: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    iconoPath: ""
  },
  {
    id: 'pyme',
    titulo: 'Plan Pymes',
    descripcion: 'Ideal para pequeñas y medianas empresas',
    popular: false,
    caracteristicas: [
      'Usuarios ilimitados',
      'Gestión de clientes',
      'Reportes automáticos',
      'Soporte 24/7'
    ],
    icono: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    iconoPath: ""
  }
];

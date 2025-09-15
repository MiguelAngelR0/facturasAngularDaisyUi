import { Plan } from '../interfaces/precios.interface';

export const PLANES_MOCK: Plan[] = [
    // Planes para Autónomos
    {
        id: 1,
        tipoPlan: 'estandar',
        destinatario: 'autonomo',
        nombre: 'Autónomo Básico',
        precio: 19.99,
        caracteristicas: {
            'Facturación mensual': 'Ilimitada',
            'Gastos deducibles': 50,
            'Soporte': 'Horario laboral',
            'IVA e IRPF': 'Gestión básica',
            'Envío a la AEAT': true,
            'Recordatorios de pago': true
        }
    },
    {
        id: 2,
        tipoPlan: 'premium',
        destinatario: 'autonomo',
        nombre: 'Autónomo Premium',
        precio: 39.99,
        caracteristicas: {
            'Facturación mensual': 'Ilimitada',
            'Gastos deducibles': 'Ilimitados',
            'Soporte': '24/7',
            'IVA e IRPF': 'Gestión avanzada',
            'Envío a la AEAT': true,
            'Recordatorios de pago': true,
            'Asesor fiscal': 'Incluido',
            'Conexión bancaria': true
        }
    },
    // Planes para PYMES
    {
        id: 3,
        tipoPlan: 'estandar',
        destinatario: 'pyme',
        nombre: 'PYME Inicial',
        precio: 49.99,
        caracteristicas: {
            'Facturación mensual': 'Hasta 100',
            'Usuarios': 2,
            'Soporte': 'Horario laboral',
            'Contabilidad básica': true,
            'Informes financieros': 'Básicos',
            'Conexión bancaria': true,
            'Exportación a Excel': true
        }
    },
    {
        id: 4,
        tipoPlan: 'premium',
        destinatario: 'pyme',
        nombre: 'PYME Avanzado',
        precio: 99.99,
        caracteristicas: {
            'Facturación mensual': 'Ilimitada',
            'Usuarios': 5,
            'Soporte': '24/7',
            'Contabilidad avanzada': true,
            'Informes financieros': 'Completos',
            'Conexión bancaria': true,
            'Exportación a Excel': true,
            'Facturación electrónica': true,
            'Asesor fiscal': 'Incluido',
            'Análisis de negocio': true
        }
    },
    {
        id: 5,
        tipoPlan: 'estandar',
        destinatario: 'contabilidad',
        nombre: 'Contabilidad Básica',
        precio: 79.99,
        caracteristicas: {
            'Asientos contables': 'Hasta 100/mes',
            'Balance de situación': true,
            'Pérdidas y ganancias': true,
            'IVA e impuestos': 'Básico',
            'Soporte': 'Horario laboral',
            'Exportación a ContaPlus': true
        }
    },
    {
        id: 6,
        tipoPlan: 'premium',
        destinatario: 'contabilidad',
        nombre: 'Contabilidad Profesional',
        precio: 149.99,
        caracteristicas: {
            'Asientos contables': 'Ilimitados',
            'Balance de situación': true,
            'Pérdidas y ganancias': true,
            'IVA e impuestos': 'Completo',
            'Soporte': '24/7',
            'Exportación a ContaPlus': true,
            'Auditoría básica': true,
            'Asesor fiscal': 'Incluido',
            'Análisis de ratios': true,
            'Cierre contable': 'Automatizado'
        }
    }
];

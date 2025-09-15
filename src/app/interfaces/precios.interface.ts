// Tipos de planes disponibles
export type TipoPlan = 'estandar' | 'premium';

// Tipos de destinatarios
export type DestinatarioPlan = 'autonomo' | 'pyme' | 'contabilidad';

// Interfaz base para un plan
export interface Plan {
    id: number;
    tipoPlan: TipoPlan;
    destinatario: DestinatarioPlan;
    nombre: string;
    precio: number;
    caracteristicas: {
        [key: string]: string | boolean | number;
    };
}




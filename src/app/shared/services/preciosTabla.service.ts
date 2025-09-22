import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PLANES_TABLA_MOCK } from '../../mocks/planes.mock';
import { DestinatarioPlan, PlanTabla } from '../../interfaces/preciosTabla.interface';

@Injectable({
    providedIn: 'root'
})
export class PreciosTablaService {
    /**
     * Obtiene los planes filtrados por destinatario
     * @param destinatario Tipo de destinatario ('autonomo' | 'pyme' | 'contabilidad')
     * @returns Observable con el array de planes filtrados
     */
    getPlanesPorDestinatario(destinatario: DestinatarioPlan): Observable<PlanTabla[]> {
        return of(PLANES_TABLA_MOCK).pipe(
            map(planes => planes.filter(plan => plan.destinatario === destinatario))
        );
    }

    /**
     * Obtiene un plan por su ID
     * @param id ID del plan a buscar
     * @returns Observable con el plan encontrado o undefined si no existe
     */
    getPlanById(id: number): Observable<PlanTabla | undefined> {
        return of(PLANES_TABLA_MOCK.find(plan => plan.id === id));
    }

    /**
     * Obtiene todos los planes disponibles
     * @returns Observable con el array de todos los planes
     */
    getAllPlanes(): Observable<PlanTabla[]> {
        return of([...PLANES_TABLA_MOCK]);
    }
}
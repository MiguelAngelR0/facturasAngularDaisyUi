import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { PLANES_MOCK } from '../../../mocks/planes.mock';
import { DestinatarioPlan, Plan } from '../../../interfaces/precios.interface';

@Injectable({
    providedIn: 'root'
})
export class PreciosService {
    private planesSubject = new BehaviorSubject<Plan[]>([]);

    constructor() {
        this.planesSubject.next(PLANES_MOCK);
    }

    /**
     * Obtiene todos los planes
     */
    getPlanes(): Observable<Plan[]> {
        return this.planesSubject.asObservable();
    }

    /**
     * Filtra los planes por destinatario
     * @param destinatario Tipo de destinatario ('autonomo' | 'pyme' | 'contabilidad')
     */
    getPlanesPorDestinatario(destinatario: DestinatarioPlan): Observable<Plan[]> {
        return this.getPlanes().pipe(
            map(planes => planes.filter(plan => plan.destinatario === destinatario))
        );
    }

    /**
     * Obtiene un plan por su ID
     * @param id ID del plan
     */
    getPlanPorId(id: number): Observable<Plan | undefined> {
        return this.getPlanes().pipe(
            map(planes => planes.find(plan => plan.id === id))
        );
    }
}
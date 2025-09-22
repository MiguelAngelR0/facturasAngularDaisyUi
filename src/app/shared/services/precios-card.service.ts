import { Injectable } from '@angular/core';
import { PlanPrecioCard } from '../../interfaces/preciosCard.interface';
import { PLANES_PRECIO_CARD } from '../../mocks/precios.mock';

@Injectable({
  providedIn: 'root'
})
export class PreciosCardService {

  constructor() { }

  getPlanesPrecio(): PlanPrecioCard[] {
    return PLANES_PRECIO_CARD;
  }

  getPlanById(id: string): PlanPrecioCard {
    const plan = PLANES_PRECIO_CARD.find(plan => plan.id === id);
    if (!plan) {
      throw new Error(`Plan with id ${id} not found`);
    }
    return plan;
  }
}

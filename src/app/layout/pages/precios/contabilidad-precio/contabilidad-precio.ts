import { Component, inject } from '@angular/core';
import { PreciosCardService } from '../../../../shared/services/precios-card.service';
import { PlanPrecioCard } from '../../../../interfaces/preciosCard.interface';

@Component({
  selector: 'app-contabilidad-precio',
  imports: [],
  templateUrl: './contabilidad-precio.html',
  styles: ``
})
export class ContabilidadPrecio {
  plan!: PlanPrecioCard;

  private preciosCardService = inject(PreciosCardService);

  ngOnInit() {
    this.plan = this.preciosCardService.getPlanById("gestoria");
  }
}

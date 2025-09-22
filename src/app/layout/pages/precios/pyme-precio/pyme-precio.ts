import { Component, inject } from '@angular/core';
import { PlanPrecioCard } from '../../../../interfaces/preciosCard.interface';
import { PreciosCardService } from '../../../../shared/services/precios-card.service';

@Component({
  selector: 'app-pyme-precio',
  imports: [],
  templateUrl: './pyme-precio.html',
  styles: ``
})
export class PymePrecio {

  plan!: PlanPrecioCard;
  private preciosCardService = inject(PreciosCardService);


  ngOnInit() {
    this.plan = this.preciosCardService.getPlanById("pyme");
  }

}

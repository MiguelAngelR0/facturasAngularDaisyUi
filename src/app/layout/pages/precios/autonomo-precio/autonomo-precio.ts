import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PreciosCardService } from '../../../../shared/services/precios-card.service';
import { PlanPrecioCard } from '../../../../interfaces/preciosCard.interface';

@Component({
  selector: 'app-autonomo-precio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './autonomo-precio.html',
  styles: ``
})
export class AutonomoPrecio implements OnInit {
  plan!: PlanPrecioCard;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private preciosCardService = inject(PreciosCardService);

  constructor() { }

  ngOnInit() {
    this.plan = this.preciosCardService.getPlanById("autonomo");
  }


}

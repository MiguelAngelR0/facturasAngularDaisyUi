import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-price',
  imports: [RouterModule, RouterLink],
  templateUrl: './price.html',
  styles: ``
})
export class Price {
  constructor(private router: Router) {}

  navigateToPrecios(tab: string): void {
    this.router.navigate(['/precios', tab]);
  }
}

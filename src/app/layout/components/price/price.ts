import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-price',
  imports: [RouterModule, RouterLink],
  templateUrl: './price.html',
  styles: ``
})
export class Price {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  navigateToPrecios(tab: string): void {
    this.router.navigate(['/precios', tab]);
    this.scrollToTop();
  }
}

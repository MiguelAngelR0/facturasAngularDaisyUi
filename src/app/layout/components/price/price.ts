import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-price',
  imports: [RouterModule, RouterLink],
  templateUrl: './price.html',
  styles: `
  .cardPrecio{
    
    -webkit-box-shadow: 0 0 15px 0 rgba(16, 25, 33, 0.1);
    box-shadow: 0 0 15px 0 rgba(16, 25, 33, 0.1);
}
  
  
  `
})
export class Price {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

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

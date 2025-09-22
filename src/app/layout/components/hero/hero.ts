import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SignUpForm } from "./sign-up-form/sign-up-form";
import { InvoicePreview } from "./invoice-preview/invoice-preview";
import { AosService } from '../../../shared/services/aos.service';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, SignUpForm, InvoicePreview],
  templateUrl: './hero.html',
  styles: `


  `
})
export class Hero {
  constructor(private aosService: AosService) { }

  ngOnInit() {
    // Forzar una actualización de AOS después de que la vista se haya renderizado
    setTimeout(() => {
      this.aosService.refreshAOS();
    }, 100);
  }
}

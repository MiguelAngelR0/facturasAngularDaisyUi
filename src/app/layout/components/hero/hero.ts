import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SignUpForm } from "./sign-up-form/sign-up-form";
import { InvoicePreview } from "./invoice-preview/invoice-preview";

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, SignUpForm, InvoicePreview],
  templateUrl: './hero.html',
  styles: `


  `
})
export class Hero {

}

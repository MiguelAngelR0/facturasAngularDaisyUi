import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SignUpForm } from "./sign-up-form/sign-up-form";
import { InvoicePreview } from "./invoice-preview/invoice-preview";

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, SignUpForm, InvoicePreview],
  templateUrl: './hero.html',
  styles: `
    #bloqueEntrada {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 6%;
    gap: 4rem;
    padding-top: var(--altura-cabecera);
    margin-bottom: calc(11rem - var(--altura-cabecera));
    min-height: 100svh;
}

  `
})
export class Hero {

}

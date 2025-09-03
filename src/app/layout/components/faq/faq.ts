import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [TranslateModule],
  templateUrl: './faq.html',
  styles: ``
})
export class Faq {
  openFaq: number | null = null;
  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? null : index;
  }

}

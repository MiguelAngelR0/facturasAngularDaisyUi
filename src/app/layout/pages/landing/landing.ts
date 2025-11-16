import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Price } from "../../components/price/price";
import { Faq } from "../../components/faq/faq";
import { About } from "../../components/about/about";

@Component({
  selector: 'app-landing',
  imports: [Hero, Price, Faq, About],
  templateUrl: './landing.html',
  styles: ``
})
export class Landing {


}

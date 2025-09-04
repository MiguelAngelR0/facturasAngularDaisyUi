import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Nav } from "../../../shared/components/nav/nav";
import { Footer } from "../../../shared/components/footer/footer";
import { Price } from "../../components/price/price";
import { Faq } from "../../components/faq/faq";
import { Contact } from "../../components/contact/contact";
import { About } from "../../components/about/about";

@Component({
  selector: 'app-landing',
  imports: [Hero, Nav, Footer, Price, Faq, Contact, About],
  templateUrl: './landing.html',
  styles: ``
})
export class Landing {


}

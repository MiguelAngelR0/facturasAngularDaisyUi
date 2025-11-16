import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Price } from "../../components/price/price";
import { Nav } from "../../../shared/components/nav/nav";
import { Footer } from "../../../shared/components/footer/footer";

import { Faq } from "../../components/faq/faq";
import { About } from "../../components/about/about";
import { InfoTable } from "../../components/info-table/info-table";

@Component({
  selector: 'app-landing',
  imports: [Hero, Faq, About, InfoTable],
  templateUrl: './landing.html',
  styles: ``
})
export class Landing {


}

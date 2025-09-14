import { Component } from '@angular/core';
import { Nav } from '../../../shared/components/nav/nav';
import { Footer } from '../../../shared/components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Nav, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styles: ``
})
export class Layout {

}

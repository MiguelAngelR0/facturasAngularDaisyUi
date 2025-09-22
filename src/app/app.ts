import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AosService } from './shared/services/aos.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('facturasAngularDaisyUi');

  constructor(private aosService: AosService) { }

  ngOnInit() {
    this.aosService.initializeAOS();
  }
}

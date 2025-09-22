import { Component } from '@angular/core';

import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.html',
  styles: `
  .card2 {
    width: 500px;
    height: 300px;
    background-color: blue;
    clip-path: path("M 20,0 L 480,0 A 20,20 0,0,1 500,20 L 500,200 A 20,20 0,0,1 480,220 L 350,220 A 20,20 0,0,0 330,240 L 330,280 A 20,20 0,0,1 310,300 L 20,300 A 20,20 0,0,1 0,280 L 0,20 A 20,20 0,0,1 20,0 Z");

}
.inverted {
	clip-path: path("M16,0H484A16,16 0,0,1 500,16V284A16,16 0,0,1 484,300H226A10,10 0,0,1 216,290V273A31,31 0,0,0 185,242H16A16,16 0,0,1 0,226V16A16,16 0,0,1 16,0Z");
	width: 500px;
	height: 300px;
	background:linear-gradient(to bottom left, var(--color-blue-200), var(--color-blue-300));
	aspect-ratio: 5 / 3;
}

.inverted2 {
  clip-path: url(#clip);
  background-color: var(--color-blue-200);
  aspect-ratio: 5 / 3;
  width: 100%;
}

/* Si quieres mantener un tamaño máximo */
@media (min-width: 1024px) {
  .inverted {
    max-width: 500px;
  }
}


`

})
export class About {


  constructor() { }
}

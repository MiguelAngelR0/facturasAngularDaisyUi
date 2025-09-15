import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.html',
  styles: `
      .menu li > a:hover {
            background-color: transparent !important;
        }

        .menu li > a {
            transition: color 0.2s ease;
        }
`
})
export class Nav {





}

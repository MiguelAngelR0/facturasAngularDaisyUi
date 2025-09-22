import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroPrecios } from "./hero-precios/hero-precios";
import { AutonomoPrecio } from "./autonomo-precio/autonomo-precio";
import { PymePrecio } from "./pyme-precio/pyme-precio";
import { ContabilidadPrecio } from "./contabilidad-precio/contabilidad-precio";
import { TablaPrecios } from "./tabla-precios/tabla-precios";

type Tab = {
  id: string;
  label: string;
};

@Component({
  selector: 'app-precios-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroPrecios,
    AutonomoPrecio,
    PymePrecio,
    ContabilidadPrecio,
    TablaPrecios
  ],
  templateUrl: './precios.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosPage implements OnInit {
  activeTab = signal<string>('autonomo');

  tabs: Tab[] = [
    { id: 'autonomo', label: 'Autónomos' },
    { id: 'pyme', label: 'PYMES' },
    { id: 'gestoria', label: 'Gestoría' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tab = params.get('tab');
      if (tab && this.tabs.some(t => t.id === tab)) {
        this.activeTab.set(tab);
      } else if (!tab) {

        this.activeTab.set(this.tabs[0].id);
      }
    });
  }

  setActiveTab(tabId: string): void {
    this.activeTab.set(tabId);
    this.router.navigate(['/precios', tabId]);
  }
}
